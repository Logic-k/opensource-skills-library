---
name: gpt-prompt-engineer
title: "GPT Prompt Engineer"
category: 04_prompt-engineering
genre: "프롬프트 엔지니어링"
status: "보고 싶음"
repo: "mshumer/gpt-prompt-engineer"
github_url: "https://github.com/mshumer/gpt-prompt-engineer"
description: "명확한 테스트 케이스와 평가 기준이 있는 작업에서 여러 후보 프롬프트를 자동 생성·실험해 ELO 레이팅 기준 최고 성능 프롬프트를 찾고 싶을 때"
---

# GPT Prompt Engineer

> **[프롬프트 엔지니어링 & 최적화](../README.md)** · 세부 장르: `프롬프트 엔지니어링` · 상태: `보고 싶음`

작업 설명과 테스트 케이스를 주면 프롬프트를 여러 개 만들어 테스트하고 ELO 순위를 매겨 최적의 프롬프트를 찾는 도구.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 명확한 테스트 케이스와 평가 기준이 있는 작업에서 여러 후보 프롬프트를 자동 생성·실험해 ELO 레이팅 기준 최고 성능 프롬프트를 찾고 싶을 때

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 🧪 프롬프트 ELO 벤치마크 노트북

```mermaid
flowchart LR
    S1["📋 과제 + 테스트 케이스 입력\n입력값과 기대 결과 예시 정의"]
    S2["⚡ 다수 프롬프트 자동 생성\n후보 프롬프트 간 출력 비교 평가"]
    S3["📈 ELO 랭킹 산출\n가장 점수가 높은 최적 프롬프트 도출"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | 감으로 프롬프트를 고쳐가며 성능이 좋아졌는지 나빠졌는지 모름 |
| ✅ **스킬 적용 후 (After)** | 실제 테스트 케이스 대비 ELO 점수로 검증된 최강 프롬프트 확보 |

## 단계별 명령어 & 프롬프트 치트시트

### ① 저장소 클론
- Jupyter Notebook 다운로드
```text
powershell -File scripts\clone-skill.ps1 gpt-prompt-engineer
```

### ② 노트북 실행
- API 키 설정 후 셀을 순서대로 실행하여 ELO 테스트 수행
```text
jupyter notebook gpt_prompt_engineer.ipynb
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#7` / `gpt-prompt-engineer` |
| **GitHub 저장소** | [mshumer/gpt-prompt-engineer](https://github.com/mshumer/gpt-prompt-engineer) |
| **빠른 링크** | [README](https://github.com/mshumer/gpt-prompt-engineer#readme) · [Issues](https://github.com/mshumer/gpt-prompt-engineer/issues) · [Releases](https://github.com/mshumer/gpt-prompt-engineer/releases) |
| **세부 장르** | 프롬프트 엔지니어링 |
| **저장 당시 스타** | ★ 9,684 |
| **주 언어 / 라이선스** | Jupyter Notebook / MIT |
| **저장일 / 로컬 상태** | 2026-11-11 / 미클론 (경량 카드 모드) |
| **태그** | `#prompt-engineering` `#elo` `#jupyter` `#openai` `#anthropic` |

## 설치 및 활용 방법

- **가이드:** 저장소 클론 후 Jupyter Notebook 환경에서 실행 (OpenAI/Anthropic API 키 필요)
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 gpt-prompt-engineer
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status gpt-prompt-engineer "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자 공유: 2026-11-11 에이통(aitong.app) 유사 오픈소스. 프롬프트 최적화의 오래된 정석. 대화형 되묻기가 아니라 토너먼트 방식이며 웹 UI는 없음.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
