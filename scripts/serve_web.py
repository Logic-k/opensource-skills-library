#!/usr/bin/env python3
"""Local Live-Sync Web Server for d:\\Skills Open Source Library.

Serves d:\\Skills\\web\\ and exposes /api/skills & /api/clone so edits made in
the browser immediately persist to catalog/skills.json and regenerate all
SKILL.md and README.md files on disk.
"""

from __future__ import annotations

import argparse
import functools
import json
import sys
import webbrowser
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

SCRIPTS_DIR = Path(__file__).resolve().parent
ROOT_DIR = SCRIPTS_DIR.parent
WEB_DIR = ROOT_DIR / "web"

if str(SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPTS_DIR))

import manage_skills  # noqa: E402


class SkillsWebHandler(SimpleHTTPRequestHandler):
    """Serves static web files and JSON API endpoints for local disk sync."""

    def log_message(self, format: str, *args: Any) -> None:  # noqa: A003
        # Concise UTF-8 friendly access logs
        sys.stdout.write(f"[web] {self.address_string()} - {format % args}\n")

    def _send_json(self, payload: Any, status: int = HTTPStatus.OK) -> None:
        raw = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(raw)

    def _read_json_body(self) -> Any:
        length = int(self.headers.get("Content-Length", "0"))
        if length <= 0:
            raise ValueError("Empty request body")
        raw = self.rfile.read(length).decode("utf-8")
        return json.loads(raw)

    def do_GET(self) -> None:  # noqa: N802
        path_only = self.path.split("?", 1)[0]
        if path_only == "/api/health":
            has_supa = bool(manage_skills.load_supabase_env())
            self._send_json({"ok": True, "mode": "local_disk", "supabase_synced": has_supa, "root": str(ROOT_DIR)})
            return
        if path_only == "/api/skills":
            try:
                catalog = None
                try:
                    catalog = manage_skills.pull_from_supabase(silent_if_unconfigured=True)
                except Exception as exc:
                    sys.stderr.write(f"[web] Supabase pull fallback to local file: {exc}\n")
                if catalog is None:
                    catalog = manage_skills.load_catalog()
                self._send_json(catalog)
            except Exception as exc:
                self._send_json({"ok": False, "error": str(exc)}, HTTPStatus.INTERNAL_SERVER_ERROR)
            return
        super().do_GET()

    def do_POST(self) -> None:  # noqa: N802
        path_only = self.path.split("?", 1)[0]
        if path_only == "/api/skills":
            try:
                payload = self._read_json_body()
                if not isinstance(payload, dict) or not isinstance(payload.get("skills"), list):
                    self._send_json({"ok": False, "error": "Invalid catalog payload"}, HTTPStatus.BAD_REQUEST)
                    return
                manage_skills.save_catalog(payload)
                manage_skills.sync_all(payload)
                supa_pushed = False
                try:
                    supa_pushed = manage_skills.push_to_supabase(payload, silent_if_unconfigured=True)
                except Exception as exc:
                    sys.stderr.write(f"[web] Supabase push warning: {exc}\n")
                self._send_json({"ok": True, "count": len(payload["skills"]), "supabase_pushed": supa_pushed})
            except Exception as exc:
                self._send_json({"ok": False, "error": str(exc)}, HTTPStatus.INTERNAL_SERVER_ERROR)
            return

        if path_only == "/api/clone":
            try:
                payload = self._read_json_body()
                target = str((payload or {}).get("slug") or "").strip()
                if not target:
                    self._send_json({"ok": False, "error": "Missing slug"}, HTTPStatus.BAD_REQUEST)
                    return
                catalog = manage_skills.load_catalog()
                entry = manage_skills.find_skill(catalog["skills"], target)
                if not entry:
                    self._send_json({"ok": False, "error": f"Skill not found: {target}"}, HTTPStatus.NOT_FOUND)
                    return
                manage_skills.clone_skill_entry(entry)
                self._send_json({"ok": True, "slug": entry["slug"]})
            except Exception as exc:
                self._send_json({"ok": False, "error": str(exc)}, HTTPStatus.INTERNAL_SERVER_ERROR)
            return

        self._send_json({"ok": False, "error": "Unknown endpoint"}, HTTPStatus.NOT_FOUND)


def create_server(host: str, preferred_port: int) -> tuple[ThreadingHTTPServer, int]:
    """Bind server on preferred_port, falling back to next available port if occupied."""
    handler_cls = functools.partial(SkillsWebHandler, directory=str(WEB_DIR))
    for port in range(preferred_port, preferred_port + 20):
        try:
            server = ThreadingHTTPServer((host, port), handler_cls)
            return server, port
        except OSError:
            continue
    server = ThreadingHTTPServer((host, 0), handler_cls)
    return server, int(server.server_address[1])


def main() -> int:
    parser = argparse.ArgumentParser(description="오픈소스 서재 로컬 웹 서버 실행")
    parser.add_argument("--host", default="127.0.0.1", help="바인드 호스트 (기본값 127.0.0.1)")
    parser.add_argument("--port", type=int, default=8765, help="포트 번호 (기본값 8765)")
    parser.add_argument("--open", action="store_true", help="시작 후 기본 브라우저 열기")
    args = parser.parse_args()

    # Ensure web/data/skills.json & skills.js are up to date before serving
    manage_skills.sync_all()

    server, actual_port = create_server(args.host, args.port)
    url = f"http://{args.host}:{actual_port}"
    print(f"[오픈소스 서재 웹앱 시작] {url}")
    print("웹에서 추가/수정/삭제 시 catalog/skills.json 및 SKILL.md, README.md가 즉시 동기화됩니다.")
    print("종료하려면 Ctrl+C 를 누르세요.")

    if args.open:
        webbrowser.open(url)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n[종료] 서재 웹 서버를 종료합니다.")
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
