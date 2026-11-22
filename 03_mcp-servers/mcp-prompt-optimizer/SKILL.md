---
name: mcp-prompt-optimizer
title: "MCP Prompt Optimizer"
category: 03_mcp-servers
genre: "MCP / 프롬프트 최적화"
status: "보고 싶음"
repo: "grandinh/mcp-prompt-optimizer"
github_url: "https://github.com/grandinh/mcp-prompt-optimizer"
description: "MCP 클라이언트 안에서 사용자 프롬프트의 명확도를 점수화하고 모호할 때 자동으로 보충 질문을 생성하는 OTA 워크플로우를 연결하고 싶을 때"
---

# MCP Prompt Optimizer

> **[MCP 서버 (Model Context Protocol)](../README.md)** · 세부 장르: `MCP / 프롬프트 최적화` · 상태: `보고 싶음`

명확도가 60% 미만이면 1~3개 질문을 만들어 프롬프트를 최적화하는 MCP 서버. OTA(Optimize-Then-Answer) 프레임워크.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- MCP 클라이언트 안에서 사용자 프롬프트의 명확도를 점수화하고 모호할 때 자동으로 보충 질문을 생성하는 OTA 워크플로우를 연결하고 싶을 때

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 🔌 OTA(Optimize-Then-Answer) MCP 서버

```mermaid
flowchart LR
    S1["📊 명확도 점수 측정\n입력 프롬프트의 구체성 평가"]
    S2["❔ 60% 미만 시 보충 질문\n1~3개 핵심 질문 자동 생성"]
    S3["✅ 최적화된 프롬프트로 실행\nMCP 클라이언트에서 고품질 답변 도출"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | 프롬프트가 모호해도 AI가 넘겨짚고 바로 코드를 짜버림 |
| ✅ **스킬 적용 후 (After)** | 명확도 60% 미만이면 자동으로 1~3개 질문을 거쳐 정확도 향상 |

## 단계별 명령어 & 프롬프트 치트시트

### ① 클론 및 빌드
- TypeScript 프로젝트 로컬 다운로드 (초기 프로젝트이므로 코드 확인 권장)
```text
powershell -File scripts\clone-skill.ps1 mcp-prompt-optimizer
```

### ② MCP 등록
- 빌드 후 mcp_config.json에 node dist/index.js 연결
```text
npm install && npm run build
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#9` / `mcp-prompt-optimizer` |
| **GitHub 저장소** | [grandinh/mcp-prompt-optimizer](https://github.com/grandinh/mcp-prompt-optimizer) |
| **빠른 링크** | [README](https://github.com/grandinh/mcp-prompt-optimizer#readme) · [Issues](https://github.com/grandinh/mcp-prompt-optimizer/issues) · [Releases](https://github.com/grandinh/mcp-prompt-optimizer/releases) |
| **세부 장르** | MCP / 프롬프트 최적화 |
| **저장 당시 스타** | ★ 0 |
| **주 언어 / 라이선스** | TypeScript / MIT |
| **저장일 / 로컬 상태** | 2026-11-11 / 미클론 (경량 카드 모드) |
| **태그** | `#mcp` `#prompt-optimizer` `#typescript` `#claude-code` |

## 설치 및 활용 방법

- **가이드:** 저장소 클론 후 TypeScript 빌드 및 MCP 클라이언트 설정에 등록 (초기 프로젝트로 동작 검증 필요)
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 mcp-prompt-optimizer
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status mcp-prompt-optimizer "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자 공유: 2026-11-11 에이통(aitong.app) 유사 오픈소스. 되묻기 흐름을 MCP 서버로 구현한 형태. 2025-11-08 생성, 커밋 8개, 초기 프로젝트라 실사용 전 동작 확인 필요.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
