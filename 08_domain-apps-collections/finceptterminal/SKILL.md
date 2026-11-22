---
name: finceptterminal
title: "FinceptTerminal"
category: 08_domain-apps-collections
genre: "금융 / 트레이딩"
status: "보고 싶음"
repo: "Fincept-Corporation/FinceptTerminal"
github_url: "https://github.com/Fincept-Corporation/FinceptTerminal"
description: "거시경제·주식·재무 데이터 분석 및 37개 금융 AI 에이전트를 로컬 데스크톱 터미널에서 활용하고 싶을 때"
---

# FinceptTerminal

> **[도메인 특화 (교육 · 금융) & 오픈소스 모음](../README.md)** · 세부 장르: `금융 / 트레이딩` · 상태: `보고 싶음`

블룸버그 스타일 무료 금융 터미널. CFA급 분석·100+ 데이터 커넥터·37개 AI 에이전트, C++20/Qt6 데스크톱 앱.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 거시경제·주식·재무 데이터 분석 및 37개 금융 AI 에이전트를 로컬 데스크톱 터미널에서 활용하고 싶을 때

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 📈 C++20/Qt6 오픈소스 금융 터미널

```mermaid
flowchart LR
    S1["🌐 100+ 금융 데이터 연결\n거시지표·주가·재무제표 실시간 수집"]
    S2["🤖 37개 금융 AI 에이전트\nCFA급 재무 분석·밸류에이션 수행"]
    S3["🖥️ 블룸버그형 데스크톱 GUI\n멀티 패널 차트 & 터미널 뷰 제공"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | 연 수천만 원대 유료 금융 터미널 없이는 통합 분석 환경 구축이 어려움 |
| ✅ **스킬 적용 후 (After)** | 100+ 커넥터와 37개 AI 에이전트가 탑재된 무료 Qt6 금융 터미널 활용 |

## 단계별 명령어 & 프롬프트 치트시트

### ① Releases 설치 또는 클론
- GitHub Releases 바이너리 또는 빌드 가이드 확인
```text
powershell -File scripts\clone-skill.ps1 finceptterminal
```

### ② 실행 안내
- 로컬 금융 대시보드 세팅
```text
FinceptTerminal 최신 릴리스 설치 방법과 무료 데이터 커넥터 설정법을 알려줘
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#25` / `finceptterminal` |
| **GitHub 저장소** | [Fincept-Corporation/FinceptTerminal](https://github.com/Fincept-Corporation/FinceptTerminal) |
| **빠른 링크** | [README](https://github.com/Fincept-Corporation/FinceptTerminal#readme) · [Issues](https://github.com/Fincept-Corporation/FinceptTerminal/issues) · [Releases](https://github.com/Fincept-Corporation/FinceptTerminal/releases) |
| **세부 장르** | 금융 / 트레이딩 |
| **저장 당시 스타** | 미표기 |
| **주 언어 / 라이선스** | C++ / AGPL-3.0 |
| **저장일 / 로컬 상태** | 2026-11-06 / 미클론 (경량 카드 모드) |
| **태그** | `#FinceptTerminal` `#금융 터미널` `#트레이딩` `#블룸버그 대안` |

## 설치 및 활용 방법

- **가이드:** 저장소 클론 또는 Releases 페이지에서 바이너리/빌드 가이드 확인
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 finceptterminal
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status finceptterminal "사용 중"
  ```

## 서재 메모 (Context & Caveats)

2026-10-25 @jisik.chanel '모르면 손해보는 오픈소스 9가지' 2번 — Enterprise판은 별도 유료.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
