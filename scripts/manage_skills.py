#!/usr/bin/env python3
"""Open Source & GitHub Skills Library Manager.

Manages catalog/skills.json, synchronizes SKILL.md cards and README indexes,
adds new GitHub repositories (with optional GitHub API metadata auto-fetch),
searches skills by keyword/tag/category/status, and clones repositories on demand.
"""

from __future__ import annotations

import argparse
import datetime
import json
import os
import re
import subprocess
import sys
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any

# Ensure UTF-8 console output on Windows PowerShell / cmd
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

ROOT_DIR = Path(__file__).resolve().parent.parent
CATALOG_PATH = ROOT_DIR / "catalog" / "skills.json"
ENV_LOCAL_PATH = ROOT_DIR / ".env.local"
USER_NOTES_HEADING = "## 나의 실습 및 커스텀 노트 (User Notes)"
VALID_STATUSES = ("보고 싶음", "써보는 중", "사용 중", "보관")

# Situation-based quick lookup mapping for root README.md
DECISION_MATRIX = [
    ("바이브코딩 후 UI가 AI 티(AI-slop) 날 때", ["unslop", "stageshow"], "UI 감사/리디자인 및 데모 영상 기반 자가 수정"),
    ("새 아이디어·기획을 냉정하게 검증/비평받고 싶을 때", ["court-skill", "arena-skill"], "법정 찬반 검증(`VERDICT.md`) 또는 다중 에이전트 토너먼트"),
    ("막연한 요청을 고품질 프롬프트로 다듬고 싶을 때", ["prompt-master", "mcp-prompt-optimizer", "gpt-prompt-engineer"], "되묻기 기반 구조화 프롬프트 생성 및 ELO 테스트"),
    ("복잡한 코드베이스 구조 파악 및 헬스 체크", ["floorplan"], "화면·서버·DB·외부 서비스 아키텍처 지도 시각화"),
    ("웹/앱 배포 전 보안 취약점 감사", ["security-audit-skill", "aimap"], "6단계 보안 감사(`findings.json`) 및 노출 AI 서버 점검"),
    ("한국 법령·판례 검색 및 인용 검증", ["korean-law-mcp"], "법제처 Open API 연동 MCP 서버"),
    ("DB 질의(Text-to-SQL) 및 개인 지식베이스(Obsidian)", ["auto-ontology-mcp"], "NVIDIA Auto Ontology 시맨틱 레이어 MCP 서버"),
    ("여러 AI 에이전트 작업 상태를 한눈에 모니터링", ["claude-office", "whatsmyagentdoing", "agent-town", "agentcity"], "실시간 미니 오피스·픽셀 RPG·심시티 스타일 시각화"),
    ("멀티 에이전트 팀 구성 및 자율 코딩 하네스", ["openrig", "dsh-superagent-prototype", "cua"], "YAML 팀 부팅, PR 자동 응답 에이전트, Computer-Use VM"),
    ("Windows / Mac 네이티브 앱 빌드 또는 웹→앱 패키징", ["bawa", "bama", "pake", "dyad"], "WinUI 3 / SwiftUI 네이티브 빌드, Tauri 패키징, 로컬 앱 빌더"),
    ("GUI 소프트웨어를 에이전트용 CLI + SKILL.md로 변환", ["cli-anything"], "Blender·Godot·Obsidian 등 GUI 앱 자동 CLI/스킬화"),
    ("숏폼 영상·장편 스튜디오·제품 데모 녹화", ["moneyprinterturbo", "pixelle-video", "openmontage", "openscreen"], "AI 숏폼 자동화, 12단계 영상 파이프라인, 커서 자동 줌 녹화"),
    ("출처 삼각검증 기반 딥리서치 & 사무 자동화", ["insane-research", "knowledge-work-plugins"], "환각 방지 7단계 딥리서치 및 123개 사무 비서 플러그인"),
    ("로컬 AI 서버 구축 및 온디바이스 LLM 실행", ["ods", "litert-lm", "free-claude-code"], "로컬 AI 스택 설치, Gemma GPU/NPU 가속, 다중 모델 프록시"),
]


def load_catalog() -> dict[str, Any]:
    """Load catalog/skills.json."""
    if not CATALOG_PATH.exists():
        raise FileNotFoundError(f"Catalog not found: {CATALOG_PATH}")
    with CATALOG_PATH.open("r", encoding="utf-8") as f:
        return json.load(f)


def save_catalog(data: dict[str, Any]) -> None:
    """Save catalog/skills.json with updated sync date."""
    data["last_synced"] = datetime.date.today().isoformat()
    CATALOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    with CATALOG_PATH.open("w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")


def slugify(text: str) -> str:
    """Create a filesystem-safe lowercase slug."""
    s = text.strip().lower()
    s = re.sub(r"[^a-z0-9\-_]+", "-", s)
    s = re.sub(r"-{2,}", "-", s).strip("-_")
    return s or "skill-item"


def parse_github_repo(url_or_repo: str) -> tuple[str, str]:
    """Parse GitHub URL or owner/repo string into (owner/repo, full_url)."""
    raw = url_or_repo.strip().rstrip("/")
    if raw.endswith(".git"):
        raw = raw[:-4]
    match = re.match(r"^(?:https?://github\.com/)?([A-Za-z0-9_.-]+)/([A-Za-z0-9_.-]+)(?:/.*)?$", raw)
    if not match:
        raise ValueError(f"Invalid GitHub URL or 'owner/repo' format: {url_or_repo}")
    owner, repo_name = match.group(1), match.group(2)
    repo_full = f"{owner}/{repo_name}"
    return repo_full, f"https://github.com/{repo_full}"


def fetch_github_metadata(repo_full: str) -> dict[str, Any]:
    """Fetch public repository metadata from GitHub REST API (best-effort)."""
    api_url = f"https://api.github.com/repos/{repo_full}"
    req = urllib.request.Request(
        api_url,
        headers={
            "Accept": "application/vnd.github+json",
            "User-Agent": "antigravity-skills-librarian/1.0",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=8) as resp:
            payload = json.loads(resp.read().decode("utf-8"))
            license_info = payload.get("license") or {}
            return {
                "name": payload.get("name") or repo_full.split("/")[-1],
                "description": payload.get("description") or "",
                "stars": payload.get("stargazers_count"),
                "language": payload.get("language") or "",
                "license": license_info.get("spdx_id") or license_info.get("name") or "미확인",
                "topics": payload.get("topics") or [],
                "fetched": True,
            }
    except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, json.JSONDecodeError) as exc:
        print(f"[안내] GitHub API 자동 조회를 건너뛰었습니다 ({exc}). 입력값/기본값으로 등록합니다.", file=sys.stderr)
        return {"fetched": False}


def extract_existing_user_notes(skill_md_path: Path) -> str:
    """Preserve custom content written below USER_NOTES_HEADING if SKILL.md already exists."""
    default_notes = (
        f"{USER_NOTES_HEADING}\n\n"
        "- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.\n"
    )
    if not skill_md_path.exists():
        return default_notes
    content = skill_md_path.read_text(encoding="utf-8")
    idx = content.find(USER_NOTES_HEADING)
    if idx == -1:
        return default_notes
    return content[idx:].rstrip() + "\n"


def format_stars(stars: Any) -> str:
    """Format star count consistently."""
    if isinstance(stars, int):
        return f"★ {stars:,}"
    return "미표기"


def render_visual_section(skill: dict[str, Any]) -> str:
    """Render Mermaid workflow diagram, Before/After table, commands, and sub-skills."""
    vg = skill.get("visual_guide")
    if not isinstance(vg, dict):
        return ""

    parts: list[str] = []
    exec_type = vg.get("exec_type") or "오픈소스 도구"
    steps = vg.get("flow_steps") or []

    parts.append("## 한눈에 보는 작동 흐름 (Visual Workflow)\n")
    parts.append(f"- **실행 형태:** {exec_type}\n")

    if steps:
        parts.append("```mermaid\nflowchart LR")
        node_ids = []
        for idx, st in enumerate(steps, start=1):
            nid = f"S{idx}"
            node_ids.append(nid)
            label = f"{st.get('icon', '')} {st.get('label', '')}".strip().replace('"', "'")
            detail = (st.get("detail") or "").replace('"', "'")
            text = f"{label}\\n{detail}" if detail else label
            parts.append(f'    {nid}["{text}"]')
        if len(node_ids) > 1:
            parts.append("    " + " --> ".join(node_ids))
        parts.append("```\n")

    ba = vg.get("before_after") or {}
    if ba.get("before") or ba.get("after"):
        b_txt = str(ba.get("before", "")).replace("|", "\\|")
        a_txt = str(ba.get("after", "")).replace("|", "\\|")
        parts.append("| 구분 | 설명 |")
        parts.append("| :--- | :--- |")
        parts.append(f"| ❌ **기존 문제 (Before)** | {b_txt} |")
        parts.append(f"| ✅ **스킬 적용 후 (After)** | {a_txt} |\n")

    cmds = vg.get("commands") or []
    if cmds:
        parts.append("## 단계별 명령어 & 프롬프트 치트시트\n")
        for c in cmds:
            parts.append(f"### {c.get('step', '실행')}")
            if c.get("desc"):
                parts.append(f"- {c['desc']}")
            parts.append(f"```text\n{c.get('cmd', '')}\n```\n")

    sub_skills = vg.get("sub_skills") or []
    if sub_skills:
        parts.append(f"## 세부 스킬 / 파이프라인 단계 ({len(sub_skills)}종)\n")
        parts.append("| 이름 | 단계 | 작동 흐름 | 호출 명령 / 프롬프트 | 설명 |")
        parts.append("| :--- | :---: | :--- | :--- | :--- |")
        for sub in sub_skills:
            s_name = str(sub.get("name", "")).replace("|", "\\|")
            s_phase = str(sub.get("phase", "")).replace("|", "\\|")
            s_flow = str(sub.get("flow", "")).replace("|", "\\|")
            s_cmd = str(sub.get("cmd", "")).replace("|", "\\|").replace("`", "'")
            s_desc = str(sub.get("desc", "")).replace("|", "\\|")
            parts.append(f"| **{s_name}** | `{s_phase}` | {s_flow} | `{s_cmd}` | {s_desc} |")
        parts.append("")

    return "\n".join(parts) + "\n"


def render_skill_md(skill: dict[str, Any], cat_meta: dict[str, str], existing_path: Path) -> str:
    """Render standardized SKILL.md card for an item."""
    tags = skill.get("tags") or []
    tag_line = " ".join(f"`#{t}`" for t in tags) if tags else "`#미분류`"
    stars_str = format_stars(skill.get("stars_at_save"))
    lang_str = skill.get("language") or "미표기"
    lic_str = skill.get("license") or "미확인"
    memo_str = skill.get("memo") or "등록된 메모 없음"
    use_when = skill.get("use_when") or skill.get("description") or ""
    install_usage = skill.get("install_or_usage") or f"저장소 클론 후 README 참고 (`powershell -File scripts/clone-skill.ps1 {skill['slug']}`)"
    user_notes_block = extract_existing_user_notes(existing_path)

    yaml_desc = (skill.get("use_when") or skill.get("description") or skill["name"]).replace('"', '\\"')
    repo = skill["repo"]
    github_url = skill["github_url"]
    repo_dir = existing_path.parent / "repo"
    cloned_status = "로컬 클론 완료 (`./repo`)" if repo_dir.exists() else "미클론 (경량 카드 모드)"
    yaml_title = skill["name"].replace('"', '\\"')
    yaml_genre = skill.get("genre", "").replace('"', '\\"')
    visual_block = render_visual_section(skill)

    return (
        f"---\n"
        f"name: {skill['slug']}\n"
        f"title: \"{yaml_title}\"\n"
        f"category: {skill['major_category']}\n"
        f"genre: \"{yaml_genre}\"\n"
        f"status: \"{skill.get('status', '보고 싶음')}\"\n"
        f"repo: \"{repo}\"\n"
        f"github_url: \"{github_url}\"\n"
        f"description: \"{yaml_desc}\"\n"
        f"---\n\n"
        f"# {skill['name']}\n\n"
        f"> **[{cat_meta['title']}](../README.md)** · 세부 장르: `{skill.get('genre', '기타')}` · 상태: `{skill.get('status', '보고 싶음')}`\n\n"
        f"{skill.get('description', '')}\n\n"
        f"## 언제 꺼내 쓰나 (적재적소 활용 시점)\n\n"
        f"- {use_when}\n\n"
        f"{visual_block}"
        f"## 기본 정보\n\n"
        f"| 항목 | 내용 |\n"
        f"| :--- | :--- |\n"
        f"| **ID / 슬러그** | `#{skill['id']}` / `{skill['slug']}` |\n"
        f"| **GitHub 저장소** | [{repo}]({github_url}) |\n"
        f"| **빠른 링크** | [README]({github_url}#readme) · [Issues]({github_url}/issues) · [Releases]({github_url}/releases) |\n"
        f"| **세부 장르** | {skill.get('genre', '기타')} |\n"
        f"| **저장 당시 스타** | {stars_str} |\n"
        f"| **주 언어 / 라이선스** | {lang_str} / {lic_str} |\n"
        f"| **저장일 / 로컬 상태** | {skill.get('saved_date', '-')} / {cloned_status} |\n"
        f"| **태그** | {tag_line} |\n\n"
        f"## 설치 및 활용 방법\n\n"
        f"- **가이드:** {install_usage}\n"
        f"- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**\n"
        f"  ```powershell\n"
        f"  powershell -File ..\\..\\scripts\\clone-skill.ps1 {skill['slug']}\n"
        f"  ```\n"
        f"- **상태 변경:**\n"
        f"  ```powershell\n"
        f"  python ..\\..\\scripts\\manage_skills.py status {skill['slug']} \"사용 중\"\n"
        f"  ```\n\n"
        f"## 서재 메모 (Context & Caveats)\n\n"
        f"{memo_str}\n\n"
        f"{user_notes_block}"
    )


def render_category_readme(cat: dict[str, str], skills: list[dict[str, Any]]) -> str:
    """Render README.md for one of the 8 major categories."""
    cat_id = cat["id"]
    lines = [
        f"# {cat['title']} (`{cat_id}`)\n",
        f"> {cat['description']}\n",
        f"[← 전체 서재 대시보드로 돌아가기](../README.md) · 등록된 스킬: **{len(skills)}개**\n",
        "## 스킬 일람\n",
        "| ID | 이름 | 세부 장르 | 상태 | 스타 | 언제 쓰면 좋을까 (적재적소) | GitHub |",
        "| :---: | :--- | :--- | :---: | :---: | :--- | :--- |",
    ]
    for s in skills:
        stars = format_stars(s.get("stars_at_save"))
        use_when = (s.get("use_when") or s.get("description") or "").replace("|", "\\|")
        lines.append(
            f"| {s['id']} | [**{s['name']}**](./{s['slug']}/SKILL.md) | `{s.get('genre', '-')}` | "
            f"`{s.get('status', '보고 싶음')}` | {stars} | {use_when} | [{s['repo']}]({s['github_url']}) |"
        )

    # Group by genre
    genres: dict[str, list[dict[str, Any]]] = {}
    for s in skills:
        genres.setdefault(s.get("genre") or "기타", []).append(s)

    lines.append("\n## 세부 장르별 보기\n")
    for genre_name, items in genres.items():
        lines.append(f"### {genre_name} ({len(items)})\n")
        for s in items:
            tags_str = " ".join(f"`#{t}`" for t in (s.get("tags") or []))
            lines.append(
                f"- [**{s['name']}**](./{s['slug']}/SKILL.md) ([GitHub]({s['github_url']})) — {s.get('description', '')} {tags_str}"
            )
        lines.append("")

    if cat_id == "04_prompt-engineering":
        lines.extend([
            "## 타 분야에 배치된 프롬프트 최적화 관련 스킬 (교차 참조)\n",
            "- [**Prompt Master**](../01_claude-skills-plugins/prompt-master/SKILL.md) (`01_claude-skills-plugins`) — Claude Code 안에서 역질문(되묻기)으로 구조화된 프롬프트 작성",
            "- [**MCP Prompt Optimizer**](../03_mcp-servers/mcp-prompt-optimizer/SKILL.md) (`03_mcp-servers`) — OTA 프레임워크 기반 명확도 측정 및 역질문 MCP 서버",
            "",
        ])

    return "\n".join(lines).rstrip() + "\n"


def render_root_readme(catalog: dict[str, Any]) -> str:
    """Render master d:\\Skills\\README.md dashboard."""
    categories = catalog.get("categories", [])
    skills = catalog.get("skills", [])
    skill_by_slug = {s["slug"]: s for s in skills}
    cat_by_id = {c["id"]: c for c in categories}

    status_counts: dict[str, int] = {}
    for s in skills:
        st = s.get("status", "보고 싶음")
        status_counts[st] = status_counts.get(st, 0) + 1

    status_summary = " · ".join(f"{st} **{status_counts.get(st, 0)}**" for st in VALID_STATUSES)

    lines = [
        f"# {catalog.get('library_name', '오픈소스 서재')}\n",
        f"> 원본 서재: {catalog.get('source_url', '')} · 마지막 동기화: `{catalog.get('last_synced', '')}`",
        f"> 총 **{len(skills)}개** 스킬 · **{len(categories)}개** 대분류 · 상태 현황: {status_summary}\n",
        "필요할 때 언제든 적재적소에 꺼내 쓸 수 있도록 분야·장르별로 정리한 GitHub 오픈소스 스킬 허브입니다.  ",
        "모든 항목은 가벼운 `SKILL.md` 카드로 관리되며, 소스코드를 직접 받아 써보고 싶을 때만 원클릭 스크립트로 클론(`repo/`)할 수 있습니다.\n",
        "---\n",
        "## 🎯 상황별 적재적소 빠른 추천 가이드\n",
        "| 지금 필요한 상황 | 추천 스킬 (클릭 시 상세 카드 이동) | 핵심 용도 |",
        "| :--- | :--- | :--- |",
    ]

    for situation, slugs, note in DECISION_MATRIX:
        links = []
        for slug in slugs:
            item = skill_by_slug.get(slug)
            if item:
                links.append(f"[**{item['name']}**](./{item['major_category']}/{item['slug']}/SKILL.md)")
        if links:
            lines.append(f"| {situation} | {', '.join(links)} | {note} |")

    lines.extend([
        "",
        "---\n",
        "## 📂 8대 분야별 폴더 구조\n",
        "| 폴더 | 분야명 | 스킬 수 | 설명 |",
        "| :--- | :--- | :---: | :--- |",
    ])

    skills_by_cat: dict[str, list[dict[str, Any]]] = {c["id"]: [] for c in categories}
    for s in skills:
        skills_by_cat.setdefault(s["major_category"], []).append(s)

    for c in categories:
        cid = c["id"]
        count = len(skills_by_cat.get(cid, []))
        lines.append(f"| [`{cid}/`](./{cid}/README.md) | [**{c['title']}**](./{cid}/README.md) | **{count}개** | {c['description']} |")

    lines.extend([
        "",
        "---\n",
        "## 🛠️ 빠른 관리 및 확장 CLI 사용법 (PowerShell)\n",
        "새로운 GitHub 스킬을 발견했을 때 아래 한 줄 명령어만 실행하면 GitHub 정보(스타·라이선스·언어)를 자동 조회해 알맞은 분야 폴더에 `SKILL.md`를 생성하고 목차를 자동 갱신합니다.\n",
        "### 1. 새 GitHub 스킬 추가하기\n",
        "```powershell",
        "# 대화형 안내로 추가하거나 플래그로 한 번에 추가",
        ".\\scripts\\add-skill.ps1 https://github.com/owner/repo -Category 01_claude-skills-plugins -Genre \"Claude Code 스킬\" -Memo \"발견 출처/메모\"",
        "",
        "# 추가와 동시에 로컬 repo 폴더로 git clone까지 진행하려면 -Clone 추가",
        ".\\scripts\\add-skill.ps1 owner/repo -Category 03_mcp-servers -Clone",
        "```\n",
        "### 2. 키워드·태그로 적재적소 스킬 찾기\n",
        "```powershell",
        ".\\scripts\\search-skill.ps1 보안",
        ".\\scripts\\search-skill.ps1 \"UI 디자인\"",
        "```\n",
        "### 3. 필요한 스킬만 원클릭으로 로컬에 클론하기 (`<분야>/<슬러그>/repo/`)\n",
        "```powershell",
        ".\\scripts\\clone-skill.ps1 unslop",
        ".\\scripts\\clone-skill.ps1 floorplan",
        "```\n",
        "### 4. 상태 변경 & 전체 카탈로그 재동기화\n",
        "```powershell",
        "python scripts\\manage_skills.py status unslop \"사용 중\"",
        ".\\scripts\\sync-catalog.ps1",
        "```\n",
        "---\n",
        "## 📚 전체 스킬 카탈로그 ({}개)\n".format(len(skills)),
        "| ID | 이름 | 대분류 | 세부 장르 | 상태 | 스타 | GitHub |",
        "| :---: | :--- | :--- | :--- | :---: | :---: | :--- |",
    ])

    for s in skills:
        cid = s["major_category"]
        cat_label = cat_by_id.get(cid, {}).get("title", cid)
        stars = format_stars(s.get("stars_at_save"))
        lines.append(
            f"| {s['id']} | [**{s['name']}**](./{cid}/{s['slug']}/SKILL.md) | "
            f"[{cid}](./{cid}/README.md) | `{s.get('genre', '-')}` | `{s.get('status', '보고 싶음')}` | "
            f"{stars} | [{s['repo']}]({s['github_url']}) |"
        )

    lines.append("")
    return "\n".join(lines)


def sync_all(catalog: dict[str, Any] | None = None) -> None:
    """Regenerate all SKILL.md cards, category README.md files, and root README.md."""
    if catalog is None:
        catalog = load_catalog()
    categories = catalog.get("categories", [])
    skills = catalog.get("skills", [])
    cat_by_id = {c["id"]: c for c in categories}

    # Ensure category folders exist and group skills
    grouped: dict[str, list[dict[str, Any]]] = {c["id"]: [] for c in categories}
    for s in skills:
        cid = s["major_category"]
        if cid not in cat_by_id:
            raise ValueError(f"Unknown major_category '{cid}' for skill '{s.get('name')}'")
        grouped.setdefault(cid, []).append(s)

    generated_cards = 0
    for c in categories:
        cid = c["id"]
        cat_dir = ROOT_DIR / cid
        cat_dir.mkdir(parents=True, exist_ok=True)
        cat_skills = grouped.get(cid, [])

        for s in cat_skills:
            skill_dir = cat_dir / s["slug"]
            skill_dir.mkdir(parents=True, exist_ok=True)
            skill_md_path = skill_dir / "SKILL.md"
            skill_md_path.write_text(render_skill_md(s, c, skill_md_path), encoding="utf-8")
            generated_cards += 1

        (cat_dir / "README.md").write_text(render_category_readme(c, cat_skills), encoding="utf-8")

    (ROOT_DIR / "README.md").write_text(render_root_readme(catalog), encoding="utf-8")

    # Sync static web bundle data (JSON + JS fallback for file:// usage)
    web_data_dir = ROOT_DIR / "web" / "data"
    web_data_dir.mkdir(parents=True, exist_ok=True)
    catalog_json_str = json.dumps(catalog, ensure_ascii=False, indent=2) + "\n"
    (web_data_dir / "skills.json").write_text(catalog_json_str, encoding="utf-8")
    (web_data_dir / "skills.js").write_text(
        f"window.__INITIAL_SKILLS_CATALOG__ = {catalog_json_str};\n",
        encoding="utf-8",
    )

    print(f"[동기화 완료] 대분류 {len(categories)}개, 스킬 카드(SKILL.md) {generated_cards}개, README 및 웹 데이터 갱신 완료.")


def choose_category_interactively(categories: list[dict[str, str]]) -> str:
    """Prompt user to pick one of the 8 major categories."""
    print("\n분류할 대분류 폴더를 선택하세요:")
    for idx, c in enumerate(categories, start=1):
        print(f"  {idx}. {c['id']} — {c['title']}")
    while True:
        choice = input("번호 또는 폴더 ID 입력 [기본값 1]: ").strip()
        if not choice:
            return categories[0]["id"]
        if choice.isdigit() and 1 <= int(choice) <= len(categories):
            return categories[int(choice) - 1]["id"]
        for c in categories:
            if c["id"] == choice or c["id"].startswith(choice):
                return c["id"]
        print("올바른 번호나 폴더 ID를 입력해주세요.")


def resolve_category_id(raw_cat: str | None, categories: list[dict[str, str]]) -> str:
    """Resolve short prefix (e.g. '01' or '01_claude-skills-plugins') to full category ID."""
    if not raw_cat:
        return choose_category_id_from_tty(categories)
    for c in categories:
        if c["id"] == raw_cat or c["id"].startswith(raw_cat):
            return c["id"]
    valid_ids = ", ".join(c["id"] for c in categories)
    raise ValueError(f"알 수 없는 대분류입니다: '{raw_cat}'. 가능한 값: {valid_ids}")


def choose_category_id_from_tty(categories: list[dict[str, str]]) -> str:
    """Choose interactively if stdin is a TTY, else default to 01_claude-skills-plugins."""
    if sys.stdin.isatty():
        return choose_category_interactively(categories)
    return categories[0]["id"]


def find_skill(skills: list[dict[str, Any]], identifier: str) -> dict[str, Any] | None:
    """Find a skill by numeric ID, exact slug, exact repo, or case-insensitive name/slug match."""
    ident = identifier.strip()
    if ident.isdigit():
        num_id = int(ident)
        for s in skills:
            if s.get("id") == num_id:
                return s
    low = ident.lower()
    for s in skills:
        if s["slug"].lower() == low or s["repo"].lower() == low or s["name"].lower() == low:
            return s
    # Partial fallback if unique
    matches = [s for s in skills if low in s["slug"].lower() or low in s["name"].lower() or low in s["repo"].lower()]
    if len(matches) == 1:
        return matches[0]
    if len(matches) > 1:
        names = ", ".join(f"{m['slug']} ({m['name']})" for m in matches)
        raise ValueError(f"'{identifier}'에 해당하는 스킬이 여러 개입니다: {names}. 정확한 슬러그나 ID를 입력하세요.")
    return None


def load_supabase_env() -> tuple[str, str] | None:
    """Load SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY from env or .env.local."""
    url = os.environ.get("SUPABASE_URL", "").strip()
    key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY", "").strip()
    if (not url or not key) and ENV_LOCAL_PATH.exists():
        for line in ENV_LOCAL_PATH.read_text(encoding="utf-8").splitlines():
            stripped = line.strip()
            if not stripped or stripped.startswith("#") or "=" not in stripped:
                continue
            k, v = stripped.split("=", 1)
            k, v = k.strip(), v.strip().strip('"').strip("'")
            if k == "SUPABASE_URL" and not url:
                url = v
            elif k == "SUPABASE_SERVICE_ROLE_KEY" and not key:
                key = v
    if url and key:
        return url.rstrip("/"), key
    return None


def pull_from_supabase(silent_if_unconfigured: bool = False) -> dict[str, Any] | None:
    """Fetch latest catalog from Supabase and sync local SKILL.md / README.md."""
    cfg = load_supabase_env()
    if not cfg:
        if silent_if_unconfigured:
            return None
        raise RuntimeError(".env.local 또는 환경변수에 SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY가 없습니다.")
    url, key = cfg
    req = urllib.request.Request(
        f"{url}/rest/v1/skills_library_catalog?id=eq.main&select=payload,updated_at",
        headers={
            "apikey": key,
            "Authorization": f"Bearer {key}",
            "User-Agent": "skills-library-cli/1.0",
        },
        method="GET",
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        rows = json.loads(resp.read().decode("utf-8"))
    if not rows or not rows[0].get("payload"):
        raise RuntimeError("Supabase skills_library_catalog에 'main' 레코드가 없습니다.")
    catalog = rows[0]["payload"]
    save_catalog(catalog)
    sync_all(catalog)
    print(f"[Supabase Pull 완료] {len(catalog.get('skills', []))}개 스킬을 로컬 서재에 반영했습니다.")
    return catalog


def push_to_supabase(catalog: dict[str, Any] | None = None, silent_if_unconfigured: bool = False) -> bool:
    """Upsert local catalog JSON to Supabase skills_library_catalog."""
    cfg = load_supabase_env()
    if not cfg:
        if silent_if_unconfigured:
            return False
        raise RuntimeError(".env.local 또는 환경변수에 SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY가 없습니다.")
    if catalog is None:
        catalog = load_catalog()
    url, key = cfg
    now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()
    body = json.dumps({"id": "main", "payload": catalog, "updated_at": now_iso}, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(
        f"{url}/rest/v1/skills_library_catalog",
        data=body,
        headers={
            "apikey": key,
            "Authorization": f"Bearer {key}",
            "Content-Type": "application/json",
            "Prefer": "resolution=merge-duplicates,return=minimal",
            "User-Agent": "skills-library-cli/1.0",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=15) as _resp:
        pass
    print(f"[Supabase Push 완료] {len(catalog.get('skills', []))}개 스킬을 Supabase 클라우드 DB에 저장했습니다.")
    return True


def cmd_sync(args: argparse.Namespace) -> None:
    catalog = load_catalog()
    save_catalog(catalog)
    sync_all(catalog)
    if getattr(args, "push", False):
        push_to_supabase(catalog, silent_if_unconfigured=False)


def cmd_pull(_args: argparse.Namespace) -> None:
    pull_from_supabase(silent_if_unconfigured=False)


def cmd_push(_args: argparse.Namespace) -> None:
    catalog = load_catalog()
    push_to_supabase(catalog, silent_if_unconfigured=False)


def cmd_add(args: argparse.Namespace) -> None:
    catalog = load_catalog()
    categories = catalog["categories"]
    skills = catalog["skills"]

    repo_full, github_url = parse_github_repo(args.repo)
    existing = next((s for s in skills if s["repo"].lower() == repo_full.lower()), None)
    if existing and not args.update:
        print(f"[안내] 이미 서재에 등록된 저장소입니다: #{existing['id']} {existing['name']} ({existing['major_category']}/{existing['slug']})")
        print("내용을 덮어쓰려면 --update 옵션을 함께 사용하세요.")
        return

    gh = fetch_github_metadata(repo_full) if not args.no_fetch else {"fetched": False}
    cat_id = resolve_category_id(args.category, categories)

    default_name = gh.get("name") or repo_full.split("/")[-1]
    name = args.name or default_name
    slug = slugify(args.slug or repo_full.split("/")[-1])

    # Avoid slug collision inside same category
    if not existing:
        used_slugs = {(s["major_category"], s["slug"]) for s in skills}
        base_slug = slug
        counter = 2
        while (cat_id, slug) in used_slugs:
            slug = f"{base_slug}-{counter}"
            counter += 1

    tags: list[str] = []
    if args.tags:
        tags = [t.strip().lstrip("#") for t in args.tags.split(",") if t.strip()]
    elif gh.get("topics"):
        tags = list(gh["topics"][:6])

    description = args.description or gh.get("description") or f"{repo_full} GitHub 오픈소스 스킬/도구"
    genre = args.genre or next((c["title"] for c in categories if c["id"] == cat_id), "기타")
    status = args.status or "보고 싶음"
    if status not in VALID_STATUSES:
        raise ValueError(f"상태는 {', '.join(VALID_STATUSES)} 중 하나여야 합니다.")

    use_when = args.use_when or description
    memo = args.memo or ""
    install_or_usage = args.usage or f"저장소 클론 후 README 참고 (`powershell -File scripts/clone-skill.ps1 {slug}`)"

    if existing:
        existing.update({
            "name": name,
            "major_category": cat_id,
            "genre": genre,
            "status": status,
            "stars_at_save": gh.get("stars") if gh.get("stars") is not None else existing.get("stars_at_save"),
            "language": gh.get("language") or existing.get("language", ""),
            "license": gh.get("license") or existing.get("license", "미확인"),
            "description": description,
            "tags": tags or existing.get("tags", []),
            "memo": memo or existing.get("memo", ""),
            "use_when": use_when,
            "install_or_usage": install_or_usage,
        })
        entry = existing
        print(f"[업데이트] #{entry['id']} {entry['name']} ({cat_id}/{entry['slug']})")
    else:
        next_id = max((s["id"] for s in skills), default=0) + 1
        entry = {
            "id": next_id,
            "slug": slug,
            "name": name,
            "repo": repo_full,
            "github_url": github_url,
            "major_category": cat_id,
            "genre": genre,
            "status": status,
            "stars_at_save": gh.get("stars"),
            "language": gh.get("language", ""),
            "license": gh.get("license", "미확인"),
            "saved_date": datetime.date.today().isoformat(),
            "description": description,
            "tags": tags,
            "memo": memo,
            "use_when": use_when,
            "install_or_usage": install_or_usage,
            "visual_guide": {
                "exec_type": "⚡ GitHub 오픈소스 스킬",
                "flow_steps": [
                    {"icon": "📥", "label": "요구사항·대상 입력", "detail": use_when or description},
                    {"icon": "⚙️", "label": f"{name} 실행", "detail": description},
                    {"icon": "✨", "label": "결과물 출력", "detail": "작업 완료 및 검증"},
                ],
                "before_after": {
                    "before": f"{name} 없이 수동으로 반복 처리",
                    "after": f"{name} 자동화로 빠르고 일관된 결과 확보",
                },
                "commands": [
                    {"step": "① 저장소 클론", "cmd": f"powershell -File scripts\\clone-skill.ps1 {slug}", "desc": "로컬 ./repo 폴더에 다운로드"},
                    {"step": "② 실행 / 호출", "cmd": f"{name} 스킬을 현재 작업에 맞게 실행하는 방법을 안내해줘", "desc": "핵심 실행 명령어 또는 AI 호출 프롬프트"},
                ],
            },
        }
        skills.append(entry)
        print(f"[추가 완료] #{entry['id']} {entry['name']} -> {cat_id}/{entry['slug']}/SKILL.md")

    save_catalog(catalog)
    sync_all(catalog)
    try:
        push_to_supabase(catalog, silent_if_unconfigured=True)
    except Exception as exc:
        print(f"[안내] Supabase 자동 푸시 건너뜀 ({exc})", file=sys.stderr)

    if args.clone:
        clone_skill_entry(entry)


def cmd_search(args: argparse.Namespace) -> None:
    catalog = load_catalog()
    skills = catalog["skills"]
    q = (args.query or "").strip().lower()
    cat_filter = (args.category or "").strip().lower()
    tag_filter = (args.tag or "").strip().lstrip("#").lower()
    status_filter = (args.status or "").strip()

    results = []
    for s in skills:
        if cat_filter and not s["major_category"].lower().startswith(cat_filter):
            continue
        if status_filter and s.get("status") != status_filter:
            continue
        if tag_filter and not any(tag_filter in t.lower() for t in (s.get("tags") or [])):
            continue
        if q:
            haystack = " ".join([
                str(s.get("id", "")),
                s.get("slug", ""),
                s.get("name", ""),
                s.get("repo", ""),
                s.get("genre", ""),
                s.get("description", ""),
                s.get("use_when", ""),
                s.get("memo", ""),
                " ".join(s.get("tags") or []),
            ]).lower()
            if q not in haystack:
                continue
        results.append(s)

    if not results:
        print("검색 조건에 맞는 스킬을 찾지 못했습니다.")
        return

    print(f"검색 결과: {len(results)}건\n")
    for s in results:
        stars = format_stars(s.get("stars_at_save"))
        card_rel = f"{s['major_category']}/{s['slug']}/SKILL.md"
        print(f"[{s['id']:02d}] {s['name']} ({s['repo']}) | {stars} | {s.get('genre')} | 상태: {s.get('status')}")
        print(f"     적재적소: {s.get('use_when') or s.get('description')}")
        print(f"     카드경로: {card_rel}")
        print(f"     GitHub  : {s['github_url']}\n")


def clone_skill_entry(entry: dict[str, Any]) -> None:
    """Git clone a skill's repository into <major_category>/<slug>/repo."""
    target_dir = ROOT_DIR / entry["major_category"] / entry["slug"] / "repo"
    if target_dir.exists():
        print(f"[안내] 이미 클론된 폴더가 있습니다: {target_dir}")
        return
    target_dir.parent.mkdir(parents=True, exist_ok=True)
    print(f"[클론 시작] {entry['github_url']} -> {target_dir}")
    proc = subprocess.run(
        ["git", "clone", "--depth", "1", entry["github_url"], str(target_dir)],
        check=False,
    )
    if proc.returncode != 0:
        raise RuntimeError(f"git clone 실패 (exit code {proc.returncode}): {entry['github_url']}")
    print(f"[클론 완료] {target_dir}")
    # Refresh SKILL.md local clone status badge
    sync_all()


def cmd_clone(args: argparse.Namespace) -> None:
    catalog = load_catalog()
    entry = find_skill(catalog["skills"], args.target)
    if not entry:
        raise SystemExit(f"스킬을 찾을 수 없습니다: '{args.target}'")
    clone_skill_entry(entry)


def cmd_status(args: argparse.Namespace) -> None:
    if args.new_status not in VALID_STATUSES:
        raise SystemExit(f"상태는 {', '.join(VALID_STATUSES)} 중 하나여야 합니다.")
    catalog = load_catalog()
    entry = find_skill(catalog["skills"], args.target)
    if not entry:
        raise SystemExit(f"스킬을 찾을 수 없습니다: '{args.target}'")
    old_status = entry.get("status")
    entry["status"] = args.new_status
    save_catalog(catalog)
    sync_all(catalog)
    try:
        push_to_supabase(catalog, silent_if_unconfigured=True)
    except Exception as exc:
        print(f"[안내] Supabase 자동 푸시 건너뜀 ({exc})", file=sys.stderr)
    print(f"[상태 변경] #{entry['id']} {entry['name']}: '{old_status}' -> '{args.new_status}'")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="오픈소스 서재 (d:\\Skills) 통합 관리 CLI")
    sub = parser.add_subparsers(dest="command", required=True)

    p_sync = sub.add_parser("sync", help="catalog/skills.json 기준으로 모든 SKILL.md 및 README.md 동기화")
    p_sync.add_argument("--push", action="store_true", help="동기화 후 Supabase 클라우드 DB에도 업로드")

    sub.add_parser("pull", help="Supabase 클라우드 DB에서 최신 서재를 가져와 로컬 SKILL.md·README 갱신")
    sub.add_parser("push", help="로컬 catalog/skills.json을 Supabase 클라우드 DB에 업로드")

    p_add = sub.add_parser("add", help="새 GitHub 저장소를 서재에 추가")
    p_add.add_argument("repo", help="GitHub URL 또는 owner/repo (예: https://github.com/owner/repo)")
    p_add.add_argument("-c", "--category", help="대분류 폴더 ID 또는 접두사 (예: 01, 03_mcp-servers)")
    p_add.add_argument("-n", "--name", help="표시 이름 (미입력 시 GitHub 저장소명 사용)")
    p_add.add_argument("-s", "--slug", help="폴더 슬러그 이름")
    p_add.add_argument("-g", "--genre", help="세부 장르명 (예: 'Claude Code 스킬')")
    p_add.add_argument("-d", "--description", help="한 줄 설명")
    p_add.add_argument("-w", "--use-when", help="적재적소 활용 시점 설명")
    p_add.add_argument("-t", "--tags", help="쉼표 구분 태그 목록 (예: 'MCP,법률,자동화')")
    p_add.add_argument("-m", "--memo", help="출처 및 주의사항 메모")
    p_add.add_argument("-u", "--usage", help="설치/사용법 안내")
    p_add.add_argument("--status", default="보고 싶음", help="상태 (보고 싶음 | 써보는 중 | 사용 중 | 보관)")
    p_add.add_argument("--clone", action="store_true", help="추가 후 즉시 로컬 ./repo 폴더에 클론")
    p_add.add_argument("--no-fetch", action="store_true", help="GitHub API 메타데이터 자동 조회 생략")
    p_add.add_argument("--update", action="store_true", help="이미 등록된 저장소면 정보 갱신")

    p_search = sub.add_parser("search", help="키워드·카테고리·태그로 스킬 검색")
    p_search.add_argument("query", nargs="?", default="", help="검색어 (이름, 설명, 메모, 태그 등)")
    p_search.add_argument("-c", "--category", help="대분류 접두사 필터 (예: 01, 05)")
    p_search.add_argument("-t", "--tag", help="태그 필터")
    p_search.add_argument("--status", help="상태 필터")

    p_clone = sub.add_parser("clone", help="지정한 스킬의 GitHub 저장소를 해당 스킬 폴더 안 ./repo 로 클론")
    p_clone.add_argument("target", help="스킬 ID, 슬러그, 이름 또는 owner/repo")

    p_status = sub.add_parser("status", help="스킬 상태 변경 (보고 싶음/써보는 중/사용 중/보관)")
    p_status.add_argument("target", help="스킬 ID, 슬러그, 이름 또는 owner/repo")
    p_status.add_argument("new_status", help="새 상태 (보고 싶음 | 써보는 중 | 사용 중 | 보관)")

    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()
    try:
        if args.command == "sync":
            cmd_sync(args)
        elif args.command == "pull":
            cmd_pull(args)
        elif args.command == "push":
            cmd_push(args)
        elif args.command == "add":
            cmd_add(args)
        elif args.command == "search":
            cmd_search(args)
        elif args.command == "clone":
            cmd_clone(args)
        elif args.command == "status":
            cmd_status(args)
        return 0
    except Exception as exc:
        print(f"[오류] {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
