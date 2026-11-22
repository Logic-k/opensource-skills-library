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

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 🔬 7단계 멀티에이전트 딥리서치 플러그인

```mermaid
flowchart LR
    S1["🧭 범위 설정 & 검색 계획\n질문 분해 → 다각도 검색 쿼리 설계"]
    S2["🕵️ 3~5개 에이전트 병렬 조회\n출처 품질 등급(A~E) 부여 + 2개 이상 삼각검증"]
    S3["📊 보고서 + 인터랙티브 웹\n인용 필수 검증 후 요약·전체 보고서·웹페이지 출력"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | AI 딥리서치 시 단일 출처 의존이나 없는 통계를 지어내는 환각 발생 |
| ✅ **스킬 적용 후 (After)** | A~E 출처 등급 + 2개 이상 독립 교차 검증을 통과한 고신뢰 리서치 보고서 생성 |

## 단계별 명령어 & 프롬프트 치트시트

### ① 마켓플레이스 & 플러그인 설치
- Claude Code CLI에서 플러그인 2줄 설치
```text
/plugin marketplace add https://github.com/fivetaku/gptaku_plugins.git
/plugin install insane-research
```

### ② 딥리서치 실행
- 7단계 파이프라인 가동 및 삼각검증 보고서 생성
```text
/insane-research [조사할 심층 주제]
```

## 세부 스킬 / 파이프라인 단계 (7종)

| 이름 | 단계 | 작동 흐름 | 호출 명령 / 프롬프트 | 설명 |
| :--- | :---: | :--- | :--- | :--- |
| **1. 질문 범위 설정** | `기획` | 모호한 주제 구체화 및 핵심 질문 도출 | `Scope & Boundaries` | 조사 범위와 제외 대상을 먼저 확정 |
| **2. 검색 계획 수립** | `기획` | 다각도 하위 질문·검색 키워드 분배 | `Research Plan` | 병렬 에이전트에게 나눌 조사 파트 설계 |
| **3. 병렬 정보 조회** | `수집` | 동시다발 웹·문서 조회 | `3~5 Parallel Agents` | 여러 에이전트가 동시에 1차 자료 수집 |
| **4. 출처 삼각검증** | `검증` | 출처 등급화 + 핵심 주장 2+ 독립 검증 | `A~E Rating & Triangulation` | 신뢰도 낮은 블로그를 거르고 공식 자료로 교차 확인 |
| **5. 종합 분석** | `분석` | 상충되는 데이터 대조 및 인사이트 통합 | `Synthesis` | 검증된 팩트만 연결해 결론 도출 |
| **6. 품질 검증** | `검증` | 모든 주장에 인용 링크 누락 여부 감사 | `Quality Gate` | 인용 없는 주장(환각) 제거 |
| **7. 다중 포맷 출력** | `출력` | 요약본·전체 보고서·서지·웹페이지 생성 | `Summary / Report / Web` | 원하는 형태로 즉시 공유 가능한 결과물 완성 |

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
