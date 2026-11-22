# 앱 빌더 · 바이브코딩 · 코드 시각화 · 로컬 AI (`07_app-builders-dev-tools`)

> 코드 아키텍처 지도 시각화, 바이브코딩 앱 빌더, 웹사이트→데스크톱 앱 변환, 로컬 AI 서버 스택 및 온디바이스 LLM 실행 도구

[← 전체 서재 대시보드로 돌아가기](../README.md) · 등록된 스킬: **5개**

## 스킬 일람

| ID | 이름 | 세부 장르 | 상태 | 스타 | 언제 쓰면 좋을까 (적재적소) | GitHub |
| :---: | :--- | :--- | :---: | :---: | :--- | :--- |
| 2 | [**floorplan**](./floorplan/SKILL.md) | `코드 시각화` | `보고 싶음` | ★ 4,875 | 복잡한 코드베이스나 바이브코딩으로 만든 앱의 전체 구조(화면·서버·DB·외부 서비스)를 한눈에 시각화하고 헬스 체크(예: DB 공개 여부 등)를 점검하고 싶을 때 | [haydenschmitty/floorplan](https://github.com/haydenschmitty/floorplan) |
| 10 | [**Pake**](./pake/SKILL.md) | `데스크톱 앱 / 웹사이트 변환` | `보고 싶음` | ★ 63,185 | 자주 쓰는 웹서비스나 자체 만든 웹앱(예: localhost나 SaaS)을 Electron보다 훨씬 가벼운 Tauri 기반 Windows/Mac 네이티브 데스크톱 앱으로 감싸고 싶을 때 | [tw93/Pake](https://github.com/tw93/Pake) |
| 26 | [**LiteRT-LM**](./litert-lm/SKILL.md) | `온디바이스 AI` | `보고 싶음` | 미표기 | 클라우드 비용이나 네트워크 없이 모바일·데스크톱·엣지 기기에서 Gemma 등 경량 LLM을 GPU/NPU 가속으로 직접 구동하는 앱을 개발할 때 | [google-ai-edge/LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM) |
| 36 | [**Dyad**](./dyad/SKILL.md) | `앱 빌더 / 바이브코딩` | `보고 싶음` | ★ 21,759 | 유료 Lovable 구독 대신 내 PC 로컬 환경에서 무료 API 키 또는 로컬 LLM과 Supabase를 연결해 풀스택 웹앱을 바이브코딩으로 빠르게 만들고 싶을 때 | [dyad-sh/dyad](https://github.com/dyad-sh/dyad) |
| 41 | [**ODS (Osmantic Deployment System)**](./ods/SKILL.md) | `로컬 AI 서버` | `보고 싶음` | ★ 6 | Open WebUI, llama-server, n8n, ComfyUI, Qdrant가 한 번에 연결된 로컬 AI 서버 스택 구성 스크립트를 참고하거나 구축하고 싶을 때 (소스 사전 검토 권장) | [osmantic-ods/ods](https://github.com/osmantic-ods/ods) |

## 세부 장르별 보기

### 코드 시각화 (1)

- [**floorplan**](./floorplan/SKILL.md) ([GitHub](https://github.com/haydenschmitty/floorplan)) — Claude Code나 Codex가 코드를 읽고 앱 구조를 쉬운 말 지도로 그려주는 무료 오픈소스 플러그인. 화면·서버·DB·외부 서비스를 카드로 잇고, 더블클릭하면 파일·엔드포인트까지 내려간다. `#Claude Code` `#Codex` `#코드 시각화` `#아키텍처 맵` `#헬스 체크`

### 데스크톱 앱 / 웹사이트 변환 (1)

- [**Pake**](./pake/SKILL.md) ([GitHub](https://github.com/tw93/Pake)) — 웹사이트를 한 번의 명령어로 가벼운 데스크톱 앱으로 변환하는 도구 (Rust + Tauri, 시스템 WebView). Windows·macOS·Linux 지원. `#Pake` `#Tauri` `#Rust` `#데스크톱 앱` `#웹사이트 변환`

### 온디바이스 AI (1)

- [**LiteRT-LM**](./litert-lm/SKILL.md) ([GitHub](https://github.com/google-ai-edge/LiteRT-LM)) — Google의 온디바이스 LLM 실행 오케스트레이션 레이어. Gemma 등 소형 모델을 Android/iOS/데스크톱/IoT에서 GPU/NPU 가속으로 실행. `#LiteRT-LM` `#온디바이스 LLM` `#Gemma` `#Google`

### 앱 빌더 / 바이브코딩 (1)

- [**Dyad**](./dyad/SKILL.md) ([GitHub](https://github.com/dyad-sh/dyad)) — 말로 화면을 설명하면 앱 코드가 내 컴퓨터 폴더에 생성되는 오픈소스 앱 빌더. Lovable 대안. Supabase 연결 시 로그인·DB 연동. 윈도우·맥·리눅스 지원, 가입 없이 실행. `#Dyad` `#앱 빌더` `#바이브코딩` `#Lovable 대안` `#Supabase`

### 로컬 AI 서버 (1)

- [**ODS (Osmantic Deployment System)**](./ods/SKILL.md) ([GitHub](https://github.com/osmantic-ods/ods)) — PC/Mac/Linux를 로컬 AI 서버로 바꾸는 스택 설치기. Open WebUI·llama-server·n8n·ComfyUI·Qdrant 등 미리 연결. `#ODS` `#로컬 AI 서버` `#Open WebUI` `#n8n` `#ComfyUI`
