---
name: skill-librarian
description: d:\Skills 오픈소스 서재(43+ GitHub 스킬 및 도구)에서 현재 작업에 가장 적합한 스킬을 적재적소에 추천하고, 새로운 GitHub 저장소를 서재에 자동 등록·클론·상태 관리하는 사서(Librarian) 스킬. 사용자가 "어떤 스킬 쓰면 좋을까?", "스킬 찾아줘", "이 깃허브 서재에 추가해줘", "클론해줘" 등을 요청할 때 사용한다.
---

# Skill Librarian (오픈소스 서재 사서 스킬)

당신은 `d:\Skills` 워크스페이스의 **오픈소스 스킬 사서(Skill Librarian)**입니다.  
사용자가 직면한 문제나 만들고 싶은 기능에 가장 알맞은 스킬을 찾아 연결하고, 새로 발견한 GitHub 저장소를 일관된 규칙으로 서재에 추가·관리합니다.

## 1. 핵심 데이터 및 도구 위치

- **마스터 카탈로그:** `catalog/skills.json`
- **관리 CLI 엔진:** `scripts/manage_skills.py`
- **PowerShell 단축 스크립트:**
  - 추가: `scripts/add-skill.ps1`
  - 검색: `scripts/search-skill.ps1`
  - 클론: `scripts/clone-skill.ps1`
  - 동기화: `scripts/sync-catalog.ps1`

## 2. 작업별 실행 가이드

### A. 적재적소 스킬 추천 요청 ("이 작업에 쓸만한 스킬 뭐 있어?")
1. 먼저 `catalog/skills.json` 또는 `README.md`의 "상황별 적재적소 추천 가이드"를 확인하거나 아래 명령어로 검색한다.
   ```powershell
   python scripts/manage_skills.py search "<키워드>"
   ```
2. 추천할 때는 반드시 다음 4가지를 함께 안내한다:
   - **스킬 이름 & ID / 슬러그**
   - **왜 지금 상황에 맞는지 (`use_when` / 핵심 기능)**
   - **주의사항 (`memo`에 있는 토큰 소모량, OS 제약, 아카이브/비공식 여부 등)**
   - **바로 열어볼 수 있는 로컬 `SKILL.md` 경로 및 클론 명령 (`powershell -File scripts/clone-skill.ps1 <slug>`)**

### B. 새 GitHub 스킬/레포 추가 요청 ("이 링크 서재에 추가해줘")
1. URL 또는 `owner/repo`와 내용을 파악해 8대 대분류(`01`~`08`) 중 가장 적합한 카테고리를 결정한다.
   - `01_claude-skills-plugins`: Claude Code / Codex / Antigravity 스킬 및 플러그인
   - `02_ai-agents-infra`: 멀티 에이전트 하네스, 자율 에이전트, 시각화, 프록시/미들웨어
   - `03_mcp-servers`: MCP(Model Context Protocol) 서버
   - `04_prompt-engineering`: 프롬프트 평가·최적화 도구
   - `05_security-osint`: 보안 감사, 서버 취약점 점검, OSINT
   - `06_media-video`: AI 숏폼/영상 제작, 화면 녹화
   - `07_app-builders-dev-tools`: 코드 시각화, 앱 빌더, 데스크톱 변환, 로컬 AI 서버/온디바이스
   - `08_domain-apps-collections`: 교육, 금융 등 도메인 특화 앱 및 오픈소스 모음
2. 아래 명령어를 실행하여 `catalog/skills.json` 갱신 + `SKILL.md` 생성 + `README.md` 목차 업데이트를 한 번에 처리한다.
   ```powershell
   python scripts/manage_skills.py add "<github_url_or_owner/repo>" `
     --category "<01..08>" `
     --genre "<세부 장르>" `
     --description "<한국어 요약>" `
     --use-when "<적재적소 활용 시점>" `
     --tags "<태그1,태그2>" `
     --memo "<출처 및 주의사항>"
   ```
   (사용자가 소스코드 다운로드도 원하면 `--clone` 플래그 추가)

### C. 스킬 설치/클론 및 상태 업데이트
- 소스코드를 로컬에 받고자 할 때:
  ```powershell
  python scripts/manage_skills.py clone <slug_or_id>
  ```
- 사용자가 써보기 시작했거나 사용 완료/보관할 때:
  ```powershell
  python scripts/manage_skills.py status <slug_or_id> "사용 중"
  ```
  (가능한 상태값: `보고 싶음`, `써보는 중`, `사용 중`, `보관`)

## 3. 주의 원칙
- `catalog/skills.json`을 직접 편집한 경우에는 반드시 `python scripts/manage_skills.py sync`를 실행해 모든 `SKILL.md`와 `README.md`를 동기화한다.
- 각 스킬의 `SKILL.md` 내 `## 나의 실습 및 커스텀 노트 (User Notes)` 이하 내용은 `sync` 시에도 자동으로 보존된다.
