# Claude Code / Antigravity 스킬 & 플러그인 (`01_claude-skills-plugins`)

> 코딩 에이전트(Claude Code, Codex, Google Antigravity)에 바로 장착해 UI 개선, 아이디어 검증, 딥리서치, 앱 빌드, 사무 자동화를 수행하는 스킬 및 플러그인 모음

[← 전체 서재 대시보드로 돌아가기](../README.md) · 등록된 스킬: **12개**

## 스킬 일람

| ID | 이름 | 세부 장르 | 상태 | 스타 | 언제 쓰면 좋을까 (적재적소) | GitHub |
| :---: | :--- | :--- | :---: | :---: | :--- | :--- |
| 4 | [**unslop**](./unslop/SKILL.md) | `Claude Code 스킬` | `보고 싶음` | ★ 15,305 | AI로 만든 웹/앱 UI가 뻔한 AI 슬롭(AI-slop) 디자인처럼 보일 때, 제품 정체성에 맞게 UI를 감사하고 리디자인하고 싶을 때 | [heydamir/unslop](https://github.com/heydamir/unslop) |
| 5 | [**Court**](./court-skill/SKILL.md) | `Claude Code 스킬` | `보고 싶음` | ★ 341 | 새 프로젝트 기획, 아키텍처 결정, 사업 아이디어에 대해 AI의 아부성 동의를 배제하고 치열한 찬반 논리 검증과 최종 평결(`VERDICT.md`)을 받고 싶을 때 | [alexyc9381/court-skill](https://github.com/alexyc9381/court-skill) |
| 6 | [**Arena**](./arena-skill/SKILL.md) | `Claude Code 스킬` | `보고 싶음` | ★ 1,452 | 고난도 문제나 크리에이티브/설계 과제에서 단일 응답 품질이 아쉽고, 다수 에이전트 토너먼트 경쟁으로 최상위 품질의 답 1개를 뽑고 싶을 때 | [Jakeschincariol/arena-skill](https://github.com/Jakeschincariol/arena-skill) |
| 8 | [**Prompt Master**](./prompt-master/SKILL.md) | `Claude Code 스킬` | `보고 싶음` | ★ 15,816 | 아이디어가 막연할 때 AI가 역질문(되묻기)을 통해 요구사항을 구체화하고 30+ AI 도구에 맞는 고품질 구조화 프롬프트로 변환하고 싶을 때 | [nidhinjs/prompt-master](https://github.com/nidhinjs/prompt-master) |
| 11 | [**Stageshow**](./stageshow/SKILL.md) | `Claude Code 스킬` | `보고 싶음` | ★ 2,254 | 프론트엔드 UI 구현 후 에이전트가 스스로 데모 영상을 녹화·검증해 시각적 어설픔과 인터랙션 결함을 자가 수정하게 만들고 싶을 때 | [benjitaylor/skills](https://github.com/benjitaylor/skills) |
| 13 | [**BAWA (Build Any Windows App)**](./bawa/SKILL.md) | `Claude Code 플러그인 / 윈도우 앱 빌더` | `보고 싶음` | ★ 14 | Windows 11 환경에서 웹앱이 아닌 C# + WinUI 3 네이티브 윈도우 데스크톱 앱을 단계별 스토리 검증과 스냅샷 확인을 거쳐 만들고 싶을 때 | [daveebbelaar/bawa](https://github.com/daveebbelaar/bawa) |
| 32 | [**BAMA (Build Any Mac App)**](./bama/SKILL.md) | `Claude Code 플러그인 / 맥 앱 빌더` | `보고 싶음` | ★ 1,507 | macOS 환경(맥북)에서 Claude Code를 이용해 Swift/SwiftUI 네이티브 맥 앱을 스크린샷 및 체크리스트 기반으로 자동 빌드하고 싶을 때 | [daveebbelaar/bama](https://github.com/daveebbelaar/bama) |
| 38 | [**Anthropic knowledge-work-plugins**](./knowledge-work-plugins/SKILL.md) | `Claude Code 플러그인 / 사무 자동화` | `보고 싶음` | ★ 32,000 | 슬랙·피그마·캔바·어도비·문서 처리 등 반복적인 사무/지식노동 업무를 `.md` 기반 워크플로우 스킬로 자동화하거나 사내 업무 자동화 스킬을 설계할 때 | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) |
| 39 | [**Replica**](./replica-skill/SKILL.md) | `Claude Code 스킬` | `보고 싶음` | ★ 2,800 | 기존 인기 서비스의 강점을 정찰(recon)하고 설계·디자인·백엔드·테스트·브랜딩·배포까지 11단계 풀 파이프라인으로 개선된 신규 제품을 빌드하고 싶을 때 | [Jakeschincariol/replica-skill](https://github.com/Jakeschincariol/replica-skill) |
| 40 | [**CLI-Anything**](./cli-anything/SKILL.md) | `CLI / AI 에이전트` | `보고 싶음` | ★ 52,109 | 마우스로만 조작하던 GUI 소프트웨어(Blender, Godot, Obsidian 등)를 에이전트가 제어할 수 있도록 전용 CLI와 `SKILL.md`로 자동 변환하고 싶을 때 | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) |
| 42 | [**Multi-agent deep research for Claude Code**](./insane-research/SKILL.md) | `딥리서치 / Claude Code 플러그인` | `보고 싶음` | 미표기 | 환각 없이 출처 품질 등급(A~E)과 다중 출처 삼각검증이 적용된 심층 리서치 보고서(및 인터랙티브 웹 출력)를 Claude Code에서 생성하고 싶을 때 | [fivetaku/insane-research](https://github.com/fivetaku/insane-research) |
| 44 | [**Matt Pocock Skills (Skills For Real Engineers)**](./mattpocock-skills/SKILL.md) | `Claude Code 스킬` | `사용 중` | ★ 330,084 | 바이브코딩으로 코드가 스파게티가 되는 것을 막고, 인터뷰→도메인 모델링→스펙/티켓→TDD→코드리뷰의 체계적인 엔지니어링 파이프라인으로 개발하고 싶을 때 | [mattpocock/skills](https://github.com/mattpocock/skills) |

## 세부 장르별 보기

### Claude Code 스킬 (7)

- [**unslop**](./unslop/SKILL.md) ([GitHub](https://github.com/heydamir/unslop)) — Claude Code·Codex·Google Antigravity용 스킬. 바이브코딩으로 만든 AI 티 나는 UI를 감사해 제품 성격에 맞는 디자인 인터페이스로 고쳐준다. `#Claude Code` `#Codex` `#Antigravity` `#UI 디자인` `#스킬`
- [**Court**](./court-skill/SKILL.md) ([GitHub](https://github.com/alexyc9381/court-skill)) — Claude가 아이디어에 무조건 동의하는 걸 막는 스킬. 프로젝트·아이디어를 법정에 세워 검사·변호가 다투고 12인 배심원단이 따로 투표, 판사가 `VERDICT.md`로 평결. `#court` `#claude-code` `#claude-skills` `#multi-agent` `#subagents` `#decision-making` `#critical-thinking`
- [**Arena**](./arena-skill/SKILL.md) ([GitHub](https://github.com/Jakeschincariol/arena-skill)) — Claude가 자꾸 별로인 답을 줄 때, 같은 과제를 서브에이전트 100명에게 주고 토너먼트로 겨뤄 심판 채점으로 최종 답 1개를 남기는 Claude Code 스킬. `#arena` `#claude-code` `#claude-skills` `#multi-agent` `#tournament` `#subagents`
- [**Prompt Master**](./prompt-master/SKILL.md) ([GitHub](https://github.com/nidhinjs/prompt-master)) — 막연한 한 줄 요청을 되묻고 구조화된 프롬프트로 바꿔주는 Claude 스킬. 30개 이상 AI 도구용 프롬프트 작성. `#prompt-engineering` `#claude-skills` `#claude-ai` `#llm`
- [**Stageshow**](./stageshow/SKILL.md) ([GitHub](https://github.com/benjitaylor/skills)) — AI가 만든 제품 UI의 어설픔을 잡고, 완성된 데모를 영상으로 찍어 스스로 고치는 자기검증 스킬 `#Claude Code` `#Codex` `#UI` `#디자인` `#데모`
- [**Replica**](./replica-skill/SKILL.md) ([GitHub](https://github.com/Jakeschincariol/replica-skill)) — Claude 스킬 11종 묶음(`recon→architect→design→build→backend→test→diff→entrepreneur→brand→launch→deploy`). 인기 앱을 개선해 클론처럼 다시 만드는 흐름. `#Replica` `#Claude Code` `#스킬` `#클론 앱`
- [**Matt Pocock Skills (Skills For Real Engineers)**](./mattpocock-skills/SKILL.md) ([GitHub](https://github.com/mattpocock/skills)) — TypeScript Wizard Matt Pocock의 실전 소프트웨어 엔지니어링 에이전트 스킬 27종 모음. 요구사항 압박 인터뷰(grill-with-docs), 도메인 용어집(GLOSSARY.md), 스펙/티켓 분해(to-spec/to-tickets), Red-Green-Refactor TDD, 2축 코드 리뷰(code-review), 깊은 모듈 아키텍처 개선(improve-codebase-architecture) 등을 제공. `#mattpocock` `#Claude Code` `#Antigravity` `#TDD` `#grill-me` `#도메인모델링` `#코드리뷰` `#아키텍처`

### Claude Code 플러그인 / 윈도우 앱 빌더 (1)

- [**BAWA (Build Any Windows App)**](./bawa/SKILL.md) ([GitHub](https://github.com/daveebbelaar/bawa)) — 말로 시키면 C# + WinUI 3 네이티브 윈도우 앱을 만들어 작업 표시줄에 올려 주는 Claude Code 플러그인. BAMA의 윈도우용 형제 프로젝트. 스킬 22개가 마음에 드는 앱 화면 촬영(클론)→사용자 스토리→한 스토리씩 커밋하며 빌드, 커밋 전 라이트/다크 모드 스냅샷 확인. `#BAWA` `#BAMA` `#Claude Code` `#윈도우 앱` `#WinUI 3` `#C#`

### Claude Code 플러그인 / 맥 앱 빌더 (1)

- [**BAMA (Build Any Mac App)**](./bama/SKILL.md) ([GitHub](https://github.com/daveebbelaar/bama)) — 말로 시키면 Swift/SwiftUI 네이티브 맥 앱을 만들어 Dock에 올려 주는 Claude Code 플러그인. 스킬 21개가 대상 앱 전 화면 스크린샷→기능 체크리스트→단계별 빌드, 커밋 전 전 화면 라이트/다크 모드 스냅샷 확인. `#BAMA` `#Claude Code` `#맥 앱` `#SwiftUI` `#플러그인`

### Claude Code 플러그인 / 사무 자동화 (1)

- [**Anthropic knowledge-work-plugins**](./knowledge-work-plugins/SKILL.md) ([GitHub](https://github.com/anthropics/knowledge-work-plugins)) — 사무직 AI 비서 플러그인 모음. 11개에서 123개로 확대, 슬랙·피그마·아마존·캔바·어도비 등 직접 플러그인 제공. 문서(.md) 1,173개·코드 27개로 일하는 법을 글로 적은 형태, 스킬 44개, `invoice-chase` 등 예시 포함. `#knowledge-work-plugins` `#Claude Code` `#사무 자동화` `#플러그인`

### CLI / AI 에이전트 (1)

- [**CLI-Anything**](./cli-anything/SKILL.md) ([GitHub](https://github.com/HKUDS/CLI-Anything)) — GUI 앱을 전용 CLI + `SKILL.md`로 만드는 도구. 7단계 파이프라인, Claude Code·Codex 지원, Blender·Godot·Obsidian 등 하네스 보유. `#CLI-Anything` `#CLI` `#SKILL.md` `#Claude Code` `#Codex`

### 딥리서치 / Claude Code 플러그인 (1)

- [**Multi-agent deep research for Claude Code**](./insane-research/SKILL.md) ([GitHub](https://github.com/fivetaku/insane-research)) — Claude Code용 멀티 에이전트 딥리서치 플러그인. 7단계 파이프라인(질문 범위 설정→검색 계획→병렬 조회→출처 삼각검증→종합→품질검증→출력). 3~5개 에이전트 병렬 실행, 출처 품질 등급 A~E, 핵심 주장은 2개 이상 독립 출처로 교차 검증, 인용 필수로 환각 방지. 요약·전체 보고서·서지·선택적 인터랙티브 웹사이트 출력. `#insane-research` `#Claude Code` `#딥리서치` `#멀티에이전트` `#플러그인`
