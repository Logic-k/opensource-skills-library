---
name: openrig
title: "OpenRig"
category: 02_ai-agents-infra
genre: "AI 에이전트 / 멀티 에이전트"
status: "보고 싶음"
repo: "mvschwarz/openrig"
github_url: "https://github.com/mvschwarz/openrig"
description: "Claude Code와 Codex 에이전트 역할을 YAML로 선언해 한 번에 팀으로 부팅하고 협업시키고 싶을 때"
---

# OpenRig

> **[AI 에이전트 · 멀티에이전트 · 시각화 · 인프라](../README.md)** · 세부 장르: `AI 에이전트 / 멀티 에이전트` · 상태: `보고 싶음`

에이전트 팀을 YAML로 정의해 한 명령으로 부팅하는 멀티 에이전트 하네스. Claude Code와 Codex를 같은 팀으로 관리.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- Claude Code와 Codex 에이전트 역할을 YAML로 선언해 한 번에 팀으로 부팅하고 협업시키고 싶을 때

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 🤖 YAML 멀티에이전트 팀 하네스

```mermaid
flowchart LR
    S1["📄 YAML로 팀 정의\nClaude Code·Codex 역할·권한 선언"]
    S2["🚀 단일 명령 부팅\n여러 에이전트를 한 팀으로 동시 기동"]
    S3["🤝 협업 작업 수행\n역할 분담 후 결과 통합"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | Claude Code 터미널과 Codex 터미널을 따로 띄워 복사·붙여넣기로 협업 |
| ✅ **스킬 적용 후 (After)** | YAML 파일 하나로 멀티 에이전트 팀을 선언하고 한 명령어로 동시 가동 |

## 단계별 명령어 & 프롬프트 치트시트

### ① 저장소 클론
- YAML 팀 정의 예제 확인
```text
powershell -File scripts\clone-skill.ps1 openrig
```

### ② 팀 설정 및 부팅
- 프로젝트 맞춤형 멀티에이전트 팀 구성
```text
openrig 설정 파일(YAML)에 Claude Code와 Codex 역할 분담을 작성해줘
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#15` / `openrig` |
| **GitHub 저장소** | [mvschwarz/openrig](https://github.com/mvschwarz/openrig) |
| **빠른 링크** | [README](https://github.com/mvschwarz/openrig#readme) · [Issues](https://github.com/mvschwarz/openrig/issues) · [Releases](https://github.com/mvschwarz/openrig/releases) |
| **세부 장르** | AI 에이전트 / 멀티 에이전트 |
| **저장 당시 스타** | 미표기 |
| **주 언어 / 라이선스** | 미표기 / Apache-2.0 |
| **저장일 / 로컬 상태** | 2026-11-06 / 미클론 (경량 카드 모드) |
| **태그** | `#OpenRig` `#멀티 에이전트` `#Claude Code` `#Codex` |

## 설치 및 활용 방법

- **가이드:** 저장소 클론 후 README의 YAML 설정 및 부팅 커맨드 참고
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 openrig
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status openrig "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자가 2026-10-08 공유한 @2_lazzzy 릴 — YAML 정의 Claude Code + Codex 팀 도구.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
