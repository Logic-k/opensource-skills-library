---
name: openmontage
title: "OpenMontage"
category: 06_media-video
genre: "영상 제작 / AI 에이전트"
status: "보고 싶음"
repo: "OpenMontageInc/OpenMontage"
github_url: "https://github.com/OpenMontageInc/OpenMontage"
description: "단순 스톡 숏폼을 넘어 리서치·대본·소재 수집·편집·렌더링까지 12단계 파이프라인으로 코딩 에이전트 기반 장편/기획 영상을 제작하고 싶을 때"
---

# OpenMontage

> **[영상 생성 · 편집 · 화면 녹화](../README.md)** · 세부 장르: `영상 제작 / AI 에이전트` · 상태: `보고 싶음`

AI 코딩 어시스턴트를 영상 제작 스튜디오로 바꾸는 에이전트형 영상 제작 시스템. 12개 파이프라인, 리서치·대본·소재·편집·렌더까지.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 단순 스톡 숏폼을 넘어 리서치·대본·소재 수집·편집·렌더링까지 12단계 파이프라인으로 코딩 에이전트 기반 장편/기획 영상을 제작하고 싶을 때

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 🎬 12단계 에이전트 영상 제작 스튜디오

```mermaid
flowchart LR
    S1["🔍 리서치 & 대본 기획\n주제 조사 → 구조화된 대본 작성"]
    S2["🎞️ 소재·음성·타임라인 조립\n12개 파이프라인 에이전트가 소재 배치"]
    S3["🎥 최종 영상 렌더링\n코딩 어시스턴트가 완성 영상 출력"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | 단순 스톡 이미지·자막만 붙이는 단발성 숏폼 스크립트 |
| ✅ **스킬 적용 후 (After)** | 리서치부터 편집·렌더링까지 12개 파이프라인을 거친 체계적 영상 제작 |

## 단계별 명령어 & 프롬프트 치트시트

### ① 저장소 클론
- 12개 파이프라인 코드 및 가이드 확인
```text
powershell -File scripts\clone-skill.ps1 openmontage
```

### ② 파이프라인 실행
- 에이전트형 영상 스튜디오 구동
```text
OpenMontage README의 파이프라인 단계별로 [영상 주제] 제작 환경을 세팅해줘
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#17` / `openmontage` |
| **GitHub 저장소** | [OpenMontageInc/OpenMontage](https://github.com/OpenMontageInc/OpenMontage) |
| **빠른 링크** | [README](https://github.com/OpenMontageInc/OpenMontage#readme) · [Issues](https://github.com/OpenMontageInc/OpenMontage/issues) · [Releases](https://github.com/OpenMontageInc/OpenMontage/releases) |
| **세부 장르** | 영상 제작 / AI 에이전트 |
| **저장 당시 스타** | 미표기 |
| **주 언어 / 라이선스** | 미표기 / AGPL-3.0 |
| **저장일 / 로컬 상태** | 2026-11-06 / 미클론 (경량 카드 모드) |
| **태그** | `#OpenMontage` `#영상 제작` `#AI 에이전트` |

## 설치 및 활용 방법

- **가이드:** 저장소 클론 후 README 파이프라인 및 의존성 설치 가이드 참고
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 openmontage
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status openmontage "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자가 2026-10-03 공유한 @reborn.ax 릴에 나온 AI 개발 도구.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
