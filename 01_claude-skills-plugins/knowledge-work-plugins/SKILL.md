---
name: knowledge-work-plugins
title: "Anthropic knowledge-work-plugins"
category: 01_claude-skills-plugins
genre: "Claude Code 플러그인 / 사무 자동화"
status: "보고 싶음"
repo: "anthropics/knowledge-work-plugins"
github_url: "https://github.com/anthropics/knowledge-work-plugins"
description: "슬랙·피그마·캔바·어도비·문서 처리 등 반복적인 사무/지식노동 업무를 `.md` 기반 워크플로우 스킬로 자동화하거나 사내 업무 자동화 스킬을 설계할 때"
---

# Anthropic knowledge-work-plugins

> **[Claude Code / Antigravity 스킬 & 플러그인](../README.md)** · 세부 장르: `Claude Code 플러그인 / 사무 자동화` · 상태: `보고 싶음`

사무직 AI 비서 플러그인 모음. 11개에서 123개로 확대, 슬랙·피그마·아마존·캔바·어도비 등 직접 플러그인 제공. 문서(.md) 1,173개·코드 27개로 일하는 법을 글로 적은 형태, 스킬 44개, `invoice-chase` 등 예시 포함.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 슬랙·피그마·캔바·어도비·문서 처리 등 반복적인 사무/지식노동 업무를 `.md` 기반 워크플로우 스킬로 자동화하거나 사내 업무 자동화 스킬을 설계할 때

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 💼 사무 자동화 플러그인 123종 모음

```mermaid
flowchart LR
    S1["📂 직무·툴별 플러그인 선택\n슬랙·피그마·캔바·어도비 등 123종"]
    S2["📝 .md 업무 매뉴얼 로드\n일하는 법을 글로 적은 44개 스킬 적용"]
    S3["✉️ 반복 사무 업무 자동화\n독촉 메일(invoice-chase)·문서 처리 자동 실행"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | 개발 코딩만 AI에게 시키고 일반 사무·기획·행정 업무 매뉴얼은 매번 새로 설명 |
| ✅ **스킬 적용 후 (After)** | 1,173개 .md 업무 가이드와 44개 스킬을 참고해 사무 자동화 워크플로우 즉시 적용 |

## 단계별 명령어 & 프롬프트 치트시트

### ① 저장소 클론
- Anthropic 공식 사무 비서 플러그인 123종 다운로드
```text
powershell -File scripts\clone-skill.ps1 knowledge-work-plugins
```

### ② 내 업무 맞춤 적용
- 한국형/교육청 업무자동화 스킬 설계 레퍼런스
```text
knowledge-work-plugins에서 내 업무(행정/기획/문서 자동화)에 참고할 만한 스킬 구조(.md)를 뽑아줘
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#38` / `knowledge-work-plugins` |
| **GitHub 저장소** | [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) |
| **빠른 링크** | [README](https://github.com/anthropics/knowledge-work-plugins#readme) · [Issues](https://github.com/anthropics/knowledge-work-plugins/issues) · [Releases](https://github.com/anthropics/knowledge-work-plugins/releases) |
| **세부 장르** | Claude Code 플러그인 / 사무 자동화 |
| **저장 당시 스타** | ★ 32,000 |
| **주 언어 / 라이선스** | Markdown / Apache-2.0 |
| **저장일 / 로컬 상태** | 2026-11-06 / 미클론 (경량 카드 모드) |
| **태그** | `#knowledge-work-plugins` `#Claude Code` `#사무 자동화` `#플러그인` |

## 설치 및 활용 방법

- **가이드:** 저장소 클론 후 필요한 직무별 플러그인/스킬 `.md` 문서를 Claude Code에 로드
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 knowledge-work-plugins
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status knowledge-work-plugins "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자가 2026-10-26 인스타 릴(@aiscene.kr)로 공유한 관심 프로젝트 — 교육청 업무자동화 관점 등 사무실 워크플로우 `.md` 정의 방식 레퍼런스로도 매우 유용.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
