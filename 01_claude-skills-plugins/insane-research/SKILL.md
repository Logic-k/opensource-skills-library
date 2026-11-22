---
name: insane-research
title: "Multi-agent deep research for Claude Code"
category: 01_claude-skills-plugins
genre: "딥리서치 / Claude Code 플러그인"
status: "보고 싶음"
repo: "fivetaku/insane-research"
github_url: "https://github.com/fivetaku/insane-research"
description: "환각 없이 출처 품질 등급(A~E)과 다중 출처 삼각검증이 적용된 심층 리서치 보고서(및 인터랙티브 웹 출력)를 Claude Code에서 생성하고 싶을 때"
---

# Multi-agent deep research for Claude Code

> **[Claude Code / Antigravity 스킬 & 플러그인](../README.md)** · 세부 장르: `딥리서치 / Claude Code 플러그인` · 상태: `보고 싶음`

Claude Code용 멀티 에이전트 딥리서치 플러그인. 7단계 파이프라인(질문 범위 설정→검색 계획→병렬 조회→출처 삼각검증→종합→품질검증→출력). 3~5개 에이전트 병렬 실행, 출처 품질 등급 A~E, 핵심 주장은 2개 이상 독립 출처로 교차 검증, 인용 필수로 환각 방지. 요약·전체 보고서·서지·선택적 인터랙티브 웹사이트 출력.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 환각 없이 출처 품질 등급(A~E)과 다중 출처 삼각검증이 적용된 심층 리서치 보고서(및 인터랙티브 웹 출력)를 Claude Code에서 생성하고 싶을 때

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#42` / `insane-research` |
| **GitHub 저장소** | [fivetaku/insane-research](https://github.com/fivetaku/insane-research) |
| **빠른 링크** | [README](https://github.com/fivetaku/insane-research#readme) · [Issues](https://github.com/fivetaku/insane-research/issues) · [Releases](https://github.com/fivetaku/insane-research/releases) |
| **세부 장르** | 딥리서치 / Claude Code 플러그인 |
| **저장 당시 스타** | 미표기 |
| **주 언어 / 라이선스** | 미표기 / MIT |
| **저장일 / 로컬 상태** | 2026-11-06 / 미클론 (경량 카드 모드) |
| **태그** | `#insane-research` `#Claude Code` `#딥리서치` `#멀티에이전트` `#플러그인` |

## 설치 및 활용 방법

- **가이드:** `/plugin marketplace add https://github.com/fivetaku/gptaku_plugins.git` → `/plugin install insane-research` → `/insane-research [주제]`
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 insane-research
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status insane-research "사용 중"
  ```

## 서재 메모 (Context & Caveats)

멀티 에이전트 딥리서치 파이프라인 참고 — Claude Code CLI 필요.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
