---
name: free-claude-code
title: "free-claude-code"
category: 02_ai-agents-infra
genre: "코딩 에이전트 / 프록시"
status: "보고 싶음"
repo: "Alishahryar1/free-claude-code"
github_url: "https://github.com/Alishahryar1/free-claude-code"
description: "코딩 에이전트 CLI를 로컬 LLM(Ollama 등)이나 타사 API 제공자와 프록시 형태로 연결해 테스트하고 싶을 때 (이용 약관 주의)"
---

# free-claude-code

> **[AI 에이전트 · 멀티에이전트 · 시각화 · 인프라](../README.md)** · 세부 장르: `코딩 에이전트 / 프록시` · 상태: `보고 싶음`

Claude Code 등 12개 코딩 에이전트를 Anthropic이 아닌 61개 제공자(무료 티어·로컬 포함) 모델로 연결하는 로컬 프록시·런처.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 코딩 에이전트 CLI를 로컬 LLM(Ollama 등)이나 타사 API 제공자와 프록시 형태로 연결해 테스트하고 싶을 때 (이용 약관 주의)

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 🔀 코딩 에이전트 다중 모델 프록시

```mermaid
flowchart LR
    S1["💻 코딩 에이전트 CLI 요청\nClaude Code 등 12종 에이전트"]
    S2["🔀 로컬 프록시 라우팅\n61개 외부 제공자·로컬 LLM으로 변환"]
    S3["💬 호환 응답 반환\n무료 티어·로컬 모델로 에이전트 테스트"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | 코딩 에이전트 CLI를 로컬 Ollama나 다른 API 제공자에 붙여보기 어려움 |
| ✅ **스킬 적용 후 (After)** | 프록시 런처를 통해 다양한 무료 티어 및 로컬 모델로 연결 테스트 (비공식 약관 주의) |

## 단계별 명령어 & 프롬프트 치트시트

### ① 저장소 클론
- 프록시 런처 다운로드 (비공식 프로젝트로 약관 확인 필요)
```text
powershell -File scripts\clone-skill.ps1 free-claude-code
```

### ② 실행 가이드 확인
- 로컬 LLM 연결 테스트용으로 활용
```text
free-claude-code README를 읽고 로컬 Ollama 모델과 연결하는 안전 설정을 알려줘
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#21` / `free-claude-code` |
| **GitHub 저장소** | [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) |
| **빠른 링크** | [README](https://github.com/Alishahryar1/free-claude-code#readme) · [Issues](https://github.com/Alishahryar1/free-claude-code/issues) · [Releases](https://github.com/Alishahryar1/free-claude-code/releases) |
| **세부 장르** | 코딩 에이전트 / 프록시 |
| **저장 당시 스타** | 미표기 |
| **주 언어 / 라이선스** | 미표기 / AGPL-3.0-only |
| **저장일 / 로컬 상태** | 2026-11-06 / 미클론 (경량 카드 모드) |
| **태그** | `#free-claude-code` `#Claude Code` `#프록시` `#비공식` |

## 설치 및 활용 방법

- **가이드:** 저장소 클론 후 README 프록시 실행 및 환경 변수 설정 참고
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 free-claude-code
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status free-claude-code "사용 중"
  ```

## 서재 메모 (Context & Caveats)

2026-10-25 @jisik.chanel '모르면 손해보는 오픈소스 9가지' 8번 — 비공식 프로젝트(Anthropic과 무관), 무료 Claude 모델을 주는 것이 아니라 타 제공자/로컬 모델로 라우팅하는 프록시. 약관 확인 필요.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
