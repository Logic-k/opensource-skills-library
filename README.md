# 오픈소스 서재 (Open Source & GitHub Skills Library)

> 원본 서재: https://muse.ai/library/artifacts/opeunsoseu-seojae · 마지막 동기화: `2026-11-22`
> 총 **44개** 스킬 · **8개** 대분류 · 상태 현황: 보고 싶음 **41** · 써보는 중 **0** · 사용 중 **1** · 보관 **2**

필요할 때 언제든 적재적소에 꺼내 쓸 수 있도록 분야·장르별로 정리한 GitHub 오픈소스 스킬 허브입니다.  
모든 항목은 가벼운 `SKILL.md` 카드로 관리되며, 소스코드를 직접 받아 써보고 싶을 때만 원클릭 스크립트로 클론(`repo/`)할 수 있습니다.

---

## 🎯 상황별 적재적소 빠른 추천 가이드

| 지금 필요한 상황 | 추천 스킬 (클릭 시 상세 카드 이동) | 핵심 용도 |
| :--- | :--- | :--- |
| 바이브코딩 후 UI가 AI 티(AI-slop) 날 때 | [**unslop**](./01_claude-skills-plugins/unslop/SKILL.md), [**Stageshow**](./01_claude-skills-plugins/stageshow/SKILL.md) | UI 감사/리디자인 및 데모 영상 기반 자가 수정 |
| 새 아이디어·기획을 냉정하게 검증/비평받고 싶을 때 | [**Court**](./01_claude-skills-plugins/court-skill/SKILL.md), [**Arena**](./01_claude-skills-plugins/arena-skill/SKILL.md) | 법정 찬반 검증(`VERDICT.md`) 또는 다중 에이전트 토너먼트 |
| 막연한 요청을 고품질 프롬프트로 다듬고 싶을 때 | [**Prompt Master**](./01_claude-skills-plugins/prompt-master/SKILL.md), [**MCP Prompt Optimizer**](./03_mcp-servers/mcp-prompt-optimizer/SKILL.md), [**GPT Prompt Engineer**](./04_prompt-engineering/gpt-prompt-engineer/SKILL.md) | 되묻기 기반 구조화 프롬프트 생성 및 ELO 테스트 |
| 복잡한 코드베이스 구조 파악 및 헬스 체크 | [**floorplan**](./07_app-builders-dev-tools/floorplan/SKILL.md) | 화면·서버·DB·외부 서비스 아키텍처 지도 시각화 |
| 웹/앱 배포 전 보안 취약점 감사 | [**security-audit-skill**](./05_security-osint/security-audit-skill/SKILL.md), [**AIMap**](./05_security-osint/aimap/SKILL.md) | 6단계 보안 감사(`findings.json`) 및 노출 AI 서버 점검 |
| 한국 법령·판례 검색 및 인용 검증 | [**korean-law-mcp**](./03_mcp-servers/korean-law-mcp/SKILL.md) | 법제처 Open API 연동 MCP 서버 |
| DB 질의(Text-to-SQL) 및 개인 지식베이스(Obsidian) | [**auto-ontology-mcp**](./03_mcp-servers/auto-ontology-mcp/SKILL.md) | NVIDIA Auto Ontology 시맨틱 레이어 MCP 서버 |
| 여러 AI 에이전트 작업 상태를 한눈에 모니터링 | [**claude-office**](./02_ai-agents-infra/claude-office/SKILL.md), [**whatsmyagentdoing**](./02_ai-agents-infra/whatsmyagentdoing/SKILL.md), [**agent-town**](./02_ai-agents-infra/agent-town/SKILL.md), [**agentcity**](./02_ai-agents-infra/agentcity/SKILL.md) | 실시간 미니 오피스·픽셀 RPG·심시티 스타일 시각화 |
| 멀티 에이전트 팀 구성 및 자율 코딩 하네스 | [**OpenRig**](./02_ai-agents-infra/openrig/SKILL.md), [**Towards a More Autonomous Agent System**](./02_ai-agents-infra/dsh-superagent-prototype/SKILL.md), [**cua**](./02_ai-agents-infra/cua/SKILL.md) | YAML 팀 부팅, PR 자동 응답 에이전트, Computer-Use VM |
| Windows / Mac 네이티브 앱 빌드 또는 웹→앱 패키징 | [**BAWA (Build Any Windows App)**](./01_claude-skills-plugins/bawa/SKILL.md), [**BAMA (Build Any Mac App)**](./01_claude-skills-plugins/bama/SKILL.md), [**Pake**](./07_app-builders-dev-tools/pake/SKILL.md), [**Dyad**](./07_app-builders-dev-tools/dyad/SKILL.md) | WinUI 3 / SwiftUI 네이티브 빌드, Tauri 패키징, 로컬 앱 빌더 |
| GUI 소프트웨어를 에이전트용 CLI + SKILL.md로 변환 | [**CLI-Anything**](./01_claude-skills-plugins/cli-anything/SKILL.md) | Blender·Godot·Obsidian 등 GUI 앱 자동 CLI/스킬화 |
| 숏폼 영상·장편 스튜디오·제품 데모 녹화 | [**MoneyPrinterTurbo**](./06_media-video/moneyprinterturbo/SKILL.md), [**Pixelle-Video**](./06_media-video/pixelle-video/SKILL.md), [**OpenMontage**](./06_media-video/openmontage/SKILL.md), [**openscreen**](./06_media-video/openscreen/SKILL.md) | AI 숏폼 자동화, 12단계 영상 파이프라인, 커서 자동 줌 녹화 |
| 출처 삼각검증 기반 딥리서치 & 사무 자동화 | [**Multi-agent deep research for Claude Code**](./01_claude-skills-plugins/insane-research/SKILL.md), [**Anthropic knowledge-work-plugins**](./01_claude-skills-plugins/knowledge-work-plugins/SKILL.md) | 환각 방지 7단계 딥리서치 및 123개 사무 비서 플러그인 |
| 로컬 AI 서버 구축 및 온디바이스 LLM 실행 | [**ODS (Osmantic Deployment System)**](./07_app-builders-dev-tools/ods/SKILL.md), [**LiteRT-LM**](./07_app-builders-dev-tools/litert-lm/SKILL.md), [**free-claude-code**](./02_ai-agents-infra/free-claude-code/SKILL.md) | 로컬 AI 스택 설치, Gemma GPU/NPU 가속, 다중 모델 프록시 |

---

## 📂 8대 분야별 폴더 구조

| 폴더 | 분야명 | 스킬 수 | 설명 |
| :--- | :--- | :---: | :--- |
| [`01_claude-skills-plugins/`](./01_claude-skills-plugins/README.md) | [**Claude Code / Antigravity 스킬 & 플러그인**](./01_claude-skills-plugins/README.md) | **12개** | 코딩 에이전트(Claude Code, Codex, Google Antigravity)에 바로 장착해 UI 개선, 아이디어 검증, 딥리서치, 앱 빌드, 사무 자동화를 수행하는 스킬 및 플러그인 모음 |
| [`02_ai-agents-infra/`](./02_ai-agents-infra/README.md) | [**AI 에이전트 · 멀티에이전트 · 시각화 · 인프라**](./02_ai-agents-infra/README.md) | **11개** | 멀티 에이전트 오케스트레이션 하네스, 자율 코딩/ML 에이전트, Computer-Use 인프라, 에이전트 프록시/미들웨어 및 에이전트 작업 시각화 도구 모음 |
| [`03_mcp-servers/`](./03_mcp-servers/README.md) | [**MCP 서버 (Model Context Protocol)**](./03_mcp-servers/README.md) | **3개** | 법률 검색, 온톨로지 기반 DB 질의·지식베이스, 프롬프트 최적화 등 AI 클라이언트에 연결해 쓰는 MCP 서버 모음 |
| [`04_prompt-engineering/`](./04_prompt-engineering/README.md) | [**프롬프트 엔지니어링 & 최적화**](./04_prompt-engineering/README.md) | **1개** | 프롬프트 자동 생성·테스트·ELO 평가 및 구조화 프롬프트 최적화 도구 모음 (Claude 스킬/MCP 연동 도구 포함) |
| [`05_security-osint/`](./05_security-osint/README.md) | [**AI 보안 감사 & OSINT**](./05_security-osint/README.md) | **4개** | 바이브코딩 앱 보안 감사, 노출된 AI 서버 점검, OSINT 위협/지오로케이션 분석 도구 모음 (인가된 보안 점검 및 본인 자산 점검 전용) |
| [`06_media-video/`](./06_media-video/README.md) | [**영상 생성 · 편집 · 화면 녹화**](./06_media-video/README.md) | **4개** | 주제 기반 AI 숏폼 자동 생성, 에이전트 기반 영상 제작 스튜디오 파이프라인, 자동 줌/자막 데모 화면 녹화 도구 모음 |
| [`07_app-builders-dev-tools/`](./07_app-builders-dev-tools/README.md) | [**앱 빌더 · 바이브코딩 · 코드 시각화 · 로컬 AI**](./07_app-builders-dev-tools/README.md) | **5개** | 코드 아키텍처 지도 시각화, 바이브코딩 앱 빌더, 웹사이트→데스크톱 앱 변환, 로컬 AI 서버 스택 및 온디바이스 LLM 실행 도구 |
| [`08_domain-apps-collections/`](./08_domain-apps-collections/README.md) | [**도메인 특화 (교육 · 금융) & 오픈소스 모음**](./08_domain-apps-collections/README.md) | **4개** | AI 튜터링, 인터랙티브 3D 물리 교재, 금융 터미널 및 상용 유료 앱을 대체하는 오픈소스 큐레이션 모음 |

---

## 🛠️ 빠른 관리 및 확장 CLI 사용법 (PowerShell)

새로운 GitHub 스킬을 발견했을 때 아래 한 줄 명령어만 실행하면 GitHub 정보(스타·라이선스·언어)를 자동 조회해 알맞은 분야 폴더에 `SKILL.md`를 생성하고 목차를 자동 갱신합니다.

### 1. 새 GitHub 스킬 추가하기

```powershell
# 대화형 안내로 추가하거나 플래그로 한 번에 추가
.\scripts\add-skill.ps1 https://github.com/owner/repo -Category 01_claude-skills-plugins -Genre "Claude Code 스킬" -Memo "발견 출처/메모"

# 추가와 동시에 로컬 repo 폴더로 git clone까지 진행하려면 -Clone 추가
.\scripts\add-skill.ps1 owner/repo -Category 03_mcp-servers -Clone
```

### 2. 키워드·태그로 적재적소 스킬 찾기

```powershell
.\scripts\search-skill.ps1 보안
.\scripts\search-skill.ps1 "UI 디자인"
```

### 3. 필요한 스킬만 원클릭으로 로컬에 클론하기 (`<분야>/<슬러그>/repo/`)

```powershell
.\scripts\clone-skill.ps1 unslop
.\scripts\clone-skill.ps1 floorplan
```

### 4. 상태 변경 & 전체 카탈로그 재동기화

```powershell
python scripts\manage_skills.py status unslop "사용 중"
.\scripts\sync-catalog.ps1
```

---

## 📚 전체 스킬 카탈로그 (44개)

| ID | 이름 | 대분류 | 세부 장르 | 상태 | 스타 | GitHub |
| :---: | :--- | :--- | :--- | :---: | :---: | :--- |
| 1 | [**MoneyPrinterTurbo**](./06_media-video/moneyprinterturbo/SKILL.md) | [06_media-video](./06_media-video/README.md) | `영상 생성 / AI 비디오` | `보고 싶음` | ★ 144,630 | [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) |
| 2 | [**floorplan**](./07_app-builders-dev-tools/floorplan/SKILL.md) | [07_app-builders-dev-tools](./07_app-builders-dev-tools/README.md) | `코드 시각화` | `보고 싶음` | ★ 4,875 | [haydenschmitty/floorplan](https://github.com/haydenschmitty/floorplan) |
| 3 | [**security-audit-skill**](./05_security-osint/security-audit-skill/SKILL.md) | [05_security-osint](./05_security-osint/README.md) | `AI 보안` | `보고 싶음` | ★ 74,901 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) |
| 4 | [**unslop**](./01_claude-skills-plugins/unslop/SKILL.md) | [01_claude-skills-plugins](./01_claude-skills-plugins/README.md) | `Claude Code 스킬` | `보고 싶음` | ★ 15,305 | [heydamir/unslop](https://github.com/heydamir/unslop) |
| 5 | [**Court**](./01_claude-skills-plugins/court-skill/SKILL.md) | [01_claude-skills-plugins](./01_claude-skills-plugins/README.md) | `Claude Code 스킬` | `보고 싶음` | ★ 341 | [alexyc9381/court-skill](https://github.com/alexyc9381/court-skill) |
| 6 | [**Arena**](./01_claude-skills-plugins/arena-skill/SKILL.md) | [01_claude-skills-plugins](./01_claude-skills-plugins/README.md) | `Claude Code 스킬` | `보고 싶음` | ★ 1,452 | [Jakeschincariol/arena-skill](https://github.com/Jakeschincariol/arena-skill) |
| 7 | [**GPT Prompt Engineer**](./04_prompt-engineering/gpt-prompt-engineer/SKILL.md) | [04_prompt-engineering](./04_prompt-engineering/README.md) | `프롬프트 엔지니어링` | `보고 싶음` | ★ 9,684 | [mshumer/gpt-prompt-engineer](https://github.com/mshumer/gpt-prompt-engineer) |
| 8 | [**Prompt Master**](./01_claude-skills-plugins/prompt-master/SKILL.md) | [01_claude-skills-plugins](./01_claude-skills-plugins/README.md) | `Claude Code 스킬` | `보고 싶음` | ★ 15,816 | [nidhinjs/prompt-master](https://github.com/nidhinjs/prompt-master) |
| 9 | [**MCP Prompt Optimizer**](./03_mcp-servers/mcp-prompt-optimizer/SKILL.md) | [03_mcp-servers](./03_mcp-servers/README.md) | `MCP / 프롬프트 최적화` | `보고 싶음` | ★ 0 | [grandinh/mcp-prompt-optimizer](https://github.com/grandinh/mcp-prompt-optimizer) |
| 10 | [**Pake**](./07_app-builders-dev-tools/pake/SKILL.md) | [07_app-builders-dev-tools](./07_app-builders-dev-tools/README.md) | `데스크톱 앱 / 웹사이트 변환` | `보고 싶음` | ★ 63,185 | [tw93/Pake](https://github.com/tw93/Pake) |
| 11 | [**Stageshow**](./01_claude-skills-plugins/stageshow/SKILL.md) | [01_claude-skills-plugins](./01_claude-skills-plugins/README.md) | `Claude Code 스킬` | `보고 싶음` | ★ 2,254 | [benjitaylor/skills](https://github.com/benjitaylor/skills) |
| 12 | [**CRAFT**](./02_ai-agents-infra/craft/SKILL.md) | [02_ai-agents-infra](./02_ai-agents-infra/README.md) | `AI 에이전트 / 코딩 에이전트` | `보관` | ★ 6 | [Yfacine/CRAFT](https://github.com/Yfacine/CRAFT) |
| 13 | [**BAWA (Build Any Windows App)**](./01_claude-skills-plugins/bawa/SKILL.md) | [01_claude-skills-plugins](./01_claude-skills-plugins/README.md) | `Claude Code 플러그인 / 윈도우 앱 빌더` | `보고 싶음` | ★ 14 | [daveebbelaar/bawa](https://github.com/daveebbelaar/bawa) |
| 14 | [**auto-ontology-mcp**](./03_mcp-servers/auto-ontology-mcp/SKILL.md) | [03_mcp-servers](./03_mcp-servers/README.md) | `MCP / 데이터 · 지식베이스` | `보고 싶음` | ★ 18 | [gogoymh/auto-ontology-mcp](https://github.com/gogoymh/auto-ontology-mcp) |
| 15 | [**OpenRig**](./02_ai-agents-infra/openrig/SKILL.md) | [02_ai-agents-infra](./02_ai-agents-infra/README.md) | `AI 에이전트 / 멀티 에이전트` | `보고 싶음` | 미표기 | [mvschwarz/openrig](https://github.com/mvschwarz/openrig) |
| 16 | [**Every Joule (Lesson 1만 확인)**](./08_domain-apps-collections/every-joule-lesson1/SKILL.md) | [08_domain-apps-collections](./08_domain-apps-collections/README.md) | `교육 / 인터랙티브 책` | `보고 싶음` | 미표기 | [iamtechartist/every-joule-lesson1](https://github.com/iamtechartist/every-joule-lesson1) |
| 17 | [**OpenMontage**](./06_media-video/openmontage/SKILL.md) | [06_media-video](./06_media-video/README.md) | `영상 제작 / AI 에이전트` | `보고 싶음` | 미표기 | [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) |
| 18 | [**AIMap**](./05_security-osint/aimap/SKILL.md) | [05_security-osint](./05_security-osint/README.md) | `AI 보안` | `보고 싶음` | 미표기 | [BishopFox/aimap](https://github.com/BishopFox/aimap) |
| 19 | [**VoidAccess**](./05_security-osint/voidaccess/SKILL.md) | [05_security-osint](./05_security-osint/README.md) | `AI 보안 / OSINT` | `보고 싶음` | 미표기 | [KatrielMoses/voidaccess](https://github.com/KatrielMoses/voidaccess) |
| 20 | [**DeepTutor**](./08_domain-apps-collections/deeptutor/SKILL.md) | [08_domain-apps-collections](./08_domain-apps-collections/README.md) | `교육 / AI 튜터` | `보고 싶음` | 미표기 | [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) |
| 21 | [**free-claude-code**](./02_ai-agents-infra/free-claude-code/SKILL.md) | [02_ai-agents-infra](./02_ai-agents-infra/README.md) | `코딩 에이전트 / 프록시` | `보고 싶음` | 미표기 | [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) |
| 22 | [**Netryx (Astra V2)**](./05_security-osint/netryx-astra-v2/SKILL.md) | [05_security-osint](./05_security-osint/README.md) | `AI 보안 / OSINT` | `보고 싶음` | 미표기 | [sparkyniner/Netryx-Astra-V2-Geolocation-Tool](https://github.com/sparkyniner/Netryx-Astra-V2-Geolocation-Tool) |
| 23 | [**cua**](./02_ai-agents-infra/cua/SKILL.md) | [02_ai-agents-infra](./02_ai-agents-infra/README.md) | `AI 에이전트 인프라` | `보고 싶음` | 미표기 | [trycua/cua](https://github.com/trycua/cua) |
| 24 | [**ds2api**](./02_ai-agents-infra/ds2api/SKILL.md) | [02_ai-agents-infra](./02_ai-agents-infra/README.md) | `API / LLM 미들웨어` | `보고 싶음` | 미표기 | [CJackHwang/ds2api](https://github.com/CJackHwang/ds2api) |
| 25 | [**FinceptTerminal**](./08_domain-apps-collections/finceptterminal/SKILL.md) | [08_domain-apps-collections](./08_domain-apps-collections/README.md) | `금융 / 트레이딩` | `보고 싶음` | 미표기 | [Fincept-Corporation/FinceptTerminal](https://github.com/Fincept-Corporation/FinceptTerminal) |
| 26 | [**LiteRT-LM**](./07_app-builders-dev-tools/litert-lm/SKILL.md) | [07_app-builders-dev-tools](./07_app-builders-dev-tools/README.md) | `온디바이스 AI` | `보고 싶음` | 미표기 | [google-ai-edge/LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) |
| 27 | [**openscreen**](./06_media-video/openscreen/SKILL.md) | [06_media-video](./06_media-video/README.md) | `영상 / 화면 녹화` | `보고 싶음` | 미표기 | [getopenscreen/openscreen](https://github.com/getopenscreen/openscreen) |
| 28 | [**ml-intern**](./02_ai-agents-infra/ml-intern/SKILL.md) | [02_ai-agents-infra](./02_ai-agents-infra/README.md) | `AI 에이전트 / ML` | `보관` | 미표기 | [huggingface/ml-intern](https://github.com/huggingface/ml-intern) |
| 29 | [**Pixelle-Video**](./06_media-video/pixelle-video/SKILL.md) | [06_media-video](./06_media-video/README.md) | `영상 생성 / AI 비디오` | `보고 싶음` | 미표기 | [ATH-MaaS/Pixelle-Video](https://github.com/ATH-MaaS/Pixelle-Video) |
| 30 | [**agentcity**](./02_ai-agents-infra/agentcity/SKILL.md) | [02_ai-agents-infra](./02_ai-agents-infra/README.md) | `에이전트 시각화` | `보고 싶음` | ★ 1 | [YehudaLevi/agentcity](https://github.com/YehudaLevi/agentcity) |
| 31 | [**HeyPuter/everything**](./08_domain-apps-collections/everything/SKILL.md) | [08_domain-apps-collections](./08_domain-apps-collections/README.md) | `오픈소스 모음` | `보고 싶음` | ★ 7,103 | [HeyPuter/everything](https://github.com/HeyPuter/everything) |
| 32 | [**BAMA (Build Any Mac App)**](./01_claude-skills-plugins/bama/SKILL.md) | [01_claude-skills-plugins](./01_claude-skills-plugins/README.md) | `Claude Code 플러그인 / 맥 앱 빌더` | `보고 싶음` | ★ 1,507 | [daveebbelaar/bama](https://github.com/daveebbelaar/bama) |
| 33 | [**whatsmyagentdoing**](./02_ai-agents-infra/whatsmyagentdoing/SKILL.md) | [02_ai-agents-infra](./02_ai-agents-infra/README.md) | `에이전트 시각화` | `보고 싶음` | ★ 377 | [Charonyuu/whatsmyagentdoing](https://github.com/Charonyuu/whatsmyagentdoing) |
| 34 | [**agent-town**](./02_ai-agents-infra/agent-town/SKILL.md) | [02_ai-agents-infra](./02_ai-agents-infra/README.md) | `에이전트 시각화` | `보고 싶음` | ★ 259 | [geezerrrr/agent-town](https://github.com/geezerrrr/agent-town) |
| 35 | [**claude-office**](./02_ai-agents-infra/claude-office/SKILL.md) | [02_ai-agents-infra](./02_ai-agents-infra/README.md) | `에이전트 시각화` | `보고 싶음` | ★ 23 | [toplainsoft/claude-office](https://github.com/toplainsoft/claude-office) |
| 36 | [**Dyad**](./07_app-builders-dev-tools/dyad/SKILL.md) | [07_app-builders-dev-tools](./07_app-builders-dev-tools/README.md) | `앱 빌더 / 바이브코딩` | `보고 싶음` | ★ 21,759 | [dyad-sh/dyad](https://github.com/dyad-sh/dyad) |
| 37 | [**korean-law-mcp**](./03_mcp-servers/korean-law-mcp/SKILL.md) | [03_mcp-servers](./03_mcp-servers/README.md) | `MCP / 법률` | `보고 싶음` | ★ 2,700 | [chrisryugj/korean-law-mcp](https://github.com/chrisryugj/korean-law-mcp) |
| 38 | [**Anthropic knowledge-work-plugins**](./01_claude-skills-plugins/knowledge-work-plugins/SKILL.md) | [01_claude-skills-plugins](./01_claude-skills-plugins/README.md) | `Claude Code 플러그인 / 사무 자동화` | `보고 싶음` | ★ 32,000 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) |
| 39 | [**Replica**](./01_claude-skills-plugins/replica-skill/SKILL.md) | [01_claude-skills-plugins](./01_claude-skills-plugins/README.md) | `Claude Code 스킬` | `보고 싶음` | ★ 2,800 | [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) |
| 40 | [**CLI-Anything**](./01_claude-skills-plugins/cli-anything/SKILL.md) | [01_claude-skills-plugins](./01_claude-skills-plugins/README.md) | `CLI / AI 에이전트` | `보고 싶음` | ★ 52,109 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) |
| 41 | [**ODS (Osmantic Deployment System)**](./07_app-builders-dev-tools/ods/SKILL.md) | [07_app-builders-dev-tools](./07_app-builders-dev-tools/README.md) | `로컬 AI 서버` | `보고 싶음` | ★ 6 | [osmantic-ods/ods](https://github.com/osmantic-ods/ods) |
| 42 | [**Multi-agent deep research for Claude Code**](./01_claude-skills-plugins/insane-research/SKILL.md) | [01_claude-skills-plugins](./01_claude-skills-plugins/README.md) | `딥리서치 / Claude Code 플러그인` | `보고 싶음` | 미표기 | [fivetaku/insane-research](https://github.com/fivetaku/insane-research) |
| 43 | [**Towards a More Autonomous Agent System**](./02_ai-agents-infra/dsh-superagent-prototype/SKILL.md) | [02_ai-agents-infra](./02_ai-agents-infra/README.md) | `AI 에이전트 / 코딩 에이전트` | `보고 싶음` | 미표기 | [deepseek-ai/dsh-superagent-prototype](https://github.com/deepseek-ai/dsh-superagent-prototype) |
| 44 | [**Matt Pocock Skills (Skills For Real Engineers)**](./01_claude-skills-plugins/mattpocock-skills/SKILL.md) | [01_claude-skills-plugins](./01_claude-skills-plugins/README.md) | `Claude Code 스킬` | `사용 중` | ★ 330,084 | [mattpocock/skills](https://github.com/mattpocock/skills) |
