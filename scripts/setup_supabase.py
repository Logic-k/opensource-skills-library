#!/usr/bin/env python3
"""Provision Supabase table, seed initial 44 skills, save local .env.local, and set Vercel env vars.

Strictly handles tokens in memory and never logs secrets to stdout/stderr.
"""

from __future__ import annotations

import json
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

ROOT_DIR = Path(__file__).resolve().parent.parent
CATALOG_PATH = ROOT_DIR / "catalog" / "skills.json"
SUPABASE_KEY_FILE = ROOT_DIR / "Supabase_Key.txt"
VERCEL_KEY_FILE = ROOT_DIR / "vercel_Key.txt"
ENV_LOCAL_PATH = ROOT_DIR / ".env.local"

PROJECT_REF = "xuxuggsnvxwptrquqerk"
SUPABASE_URL = f"https://{PROJECT_REF}.supabase.co"
VERCEL_PROJECT = "opensource-skills-library"


def http_json(url: str, method: str = "GET", headers: dict[str, str] | None = None, body: Any = None) -> Any:
    req_headers = {"User-Agent": "skills-library-setup/1.0", **(headers or {})}
    data = None
    if body is not None:
        data = json.dumps(body, ensure_ascii=False).encode("utf-8")
        req_headers.setdefault("Content-Type", "application/json")
    req = urllib.request.Request(url, data=data, headers=req_headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            raw = resp.read().decode("utf-8")
            return json.loads(raw) if raw.strip() else {}
    except urllib.error.HTTPError as exc:
        err_body = exc.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"HTTP {exc.code} on {url}: {err_body[:300]}") from exc


def main() -> int:
    if not SUPABASE_KEY_FILE.exists():
        raise FileNotFoundError("Supabase_Key.txt not found")
    if not VERCEL_KEY_FILE.exists():
        raise FileNotFoundError("vercel_Key.txt not found")

    sbp_token = SUPABASE_KEY_FILE.read_text(encoding="utf-8").strip().splitlines()[0].strip()
    vercel_token = VERCEL_KEY_FILE.read_text(encoding="utf-8").strip().splitlines()[0].strip()

    mgmt_headers = {"Authorization": f"Bearer {sbp_token}"}

    # 1. Create table & RLS policy
    print("[1/5] Supabase 테이블(public.skills_library_catalog) 및 RLS 정책 생성 중...")
    sql = """
    CREATE TABLE IF NOT EXISTS public.skills_library_catalog (
      id TEXT PRIMARY KEY DEFAULT 'main',
      payload JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );

    ALTER TABLE public.skills_library_catalog ENABLE ROW LEVEL SECURITY;

    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE schemaname = 'public'
          AND tablename = 'skills_library_catalog'
          AND policyname = 'Allow public read skills_library_catalog'
      ) THEN
        CREATE POLICY "Allow public read skills_library_catalog"
          ON public.skills_library_catalog
          FOR SELECT
          USING (true);
      END IF;
    END $$;

    NOTIFY pgrst, 'reload schema';
    """
    http_json(
        f"https://api.supabase.com/v1/projects/{PROJECT_REF}/database/query",
        method="POST",
        headers=mgmt_headers,
        body={"query": sql},
    )

    # 2. Retrieve service_role key
    print("[2/5] Supabase service_role 키 조회 중...")
    api_keys = http_json(
        f"https://api.supabase.com/v1/projects/{PROJECT_REF}/api-keys",
        method="GET",
        headers=mgmt_headers,
    )
    service_role_key = next(
        (k.get("api_key") for k in api_keys if k.get("name") == "service_role" and k.get("api_key")),
        None,
    )
    if not service_role_key:
        raise RuntimeError("Could not find service_role key for project")

    # 3. Seed catalog/skills.json into Supabase (retry briefly for PostgREST schema reload)
    print("[3/5] 44개 스킬 카탈로그를 Supabase DB에 시딩 중...")
    catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
    rest_headers = {
        "apikey": service_role_key,
        "Authorization": f"Bearer {service_role_key}",
        "Prefer": "resolution=merge-duplicates,return=minimal",
    }
    for attempt in range(4):
        try:
            http_json(
                f"{SUPABASE_URL}/rest/v1/skills_library_catalog",
                method="POST",
                headers=rest_headers,
                body={"id": "main", "payload": catalog},
            )
            break
        except RuntimeError as exc:
            if "PGRST205" in str(exc) and attempt < 3:
                time.sleep(1.5)
                continue
            raise

    # Verify seed via REST count
    rows = http_json(
        f"{SUPABASE_URL}/rest/v1/skills_library_catalog?id=eq.main&select=id,updated_at,payload",
        method="GET",
        headers={"apikey": service_role_key, "Authorization": f"Bearer {service_role_key}"},
    )
    seeded_count = len(rows[0]["payload"]["skills"]) if rows else 0
    print(f"      Supabase DB 확인 완료: {seeded_count}개 스킬 저장됨 (updated_at: {rows[0]['updated_at']})")

    # 4. Save untracked .env.local for instant local CLI/web server sync
    print("[4/5] 로컬 양방향 동기화용 .env.local 저장 중 (.gitignore로 보호됨)...")
    ENV_LOCAL_PATH.write_text(
        f"SUPABASE_URL={SUPABASE_URL}\nSUPABASE_SERVICE_ROLE_KEY={service_role_key}\n",
        encoding="utf-8",
    )

    # 5. Configure Vercel environment variables
    print("[5/5] Vercel 프로젝트 환경변수 등록 중 (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)...")
    vercel_headers = {"Authorization": f"Bearer {vercel_token}"}
    project_ref = VERCEL_PROJECT
    team_query = ""
    vercel_proj_file = ROOT_DIR / ".vercel" / "project.json"
    if vercel_proj_file.exists():
        proj_meta = json.loads(vercel_proj_file.read_text(encoding="utf-8"))
        if proj_meta.get("projectId"):
            project_ref = proj_meta["projectId"]
        if proj_meta.get("orgId"):
            team_query = f"&teamId={proj_meta['orgId']}"

    for key_name, key_val, var_type in [
        ("SUPABASE_URL", SUPABASE_URL, "plain"),
        ("SUPABASE_SERVICE_ROLE_KEY", service_role_key, "encrypted"),
    ]:
        http_json(
            f"https://api.vercel.com/v10/projects/{project_ref}/env?upsert=true{team_query}",
            method="POST",
            headers=vercel_headers,
            body={
                "key": key_name,
                "value": key_val,
                "type": var_type,
                "target": ["production", "preview", "development"],
            },
        )
    print("[완료] Supabase 테이블 + 초기 시딩 + 로컬 .env.local + Vercel 환경변수 세팅이 모두 끝났습니다.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
