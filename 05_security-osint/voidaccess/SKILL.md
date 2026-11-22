---
name: voidaccess
title: "VoidAccess"
category: 05_security-osint
genre: "AI 보안 / OSINT"
status: "보고 싶음"
repo: "KatrielMoses/voidaccess"
github_url: "https://github.com/KatrielMoses/voidaccess"
description: "인가받은 위협 인텔리전스/보안 연구 환경에서 유출 정보 및 위협 관계 그래프를 셀프호스트로 분석하고 STIX/MISP로 내보내고 싶을 때"
---

# VoidAccess

> **[AI 보안 감사 & OSINT](../README.md)** · 세부 장르: `AI 보안 / OSINT` · 상태: `보고 싶음`

한 번의 질의로 다크웹·유출 로그인·지갑·다크웹 언급을 수집해 관계 그래프와 STIX/MISP 등으로 내보내는 셀프호스트 OSINT 플랫폼.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 인가받은 위협 인텔리전스/보안 연구 환경에서 유출 정보 및 위협 관계 그래프를 셀프호스트로 분석하고 STIX/MISP로 내보내고 싶을 때

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 🕸️ 셀프호스트 OSINT 위협 분석 플랫폼

```mermaid
flowchart LR
    S1["🔎 단일 질의 입력\n도메인·지갑·계정·키워드 조회"]
    S2["🕸️ 유출·위협 관계 그래프\n연관 데이터 수집 및 그래프 시각화"]
    S3["📤 STIX / MISP 내보내기\n보안 관제 표준 포맷으로 추출"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | 유출 정보와 위협 인텔리전스를 여러 사이트에서 수동 검색하고 정리 |
| ✅ **스킬 적용 후 (After)** | 셀프호스트 환경에서 한 번의 질의로 관계 그래프와 STIX/MISP 추출 |

## 단계별 명령어 & 프롬프트 치트시트

### ① 저장소 클론
- KatrielMoses 정식 저장소 다운로드 (인가된 보안 연구용)
```text
powershell -File scripts\clone-skill.ps1 voidaccess
```

### ② 셀프호스트 배포
- 인가된 보안 연구 환경에서 구동
```text
VoidAccess README의 Docker/셀프호스트 구성을 확인하고 실행 방법을 정리해줘
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#19` / `voidaccess` |
| **GitHub 저장소** | [KatrielMoses/voidaccess](https://github.com/KatrielMoses/voidaccess) |
| **빠른 링크** | [README](https://github.com/KatrielMoses/voidaccess#readme) · [Issues](https://github.com/KatrielMoses/voidaccess/issues) · [Releases](https://github.com/KatrielMoses/voidaccess/releases) |
| **세부 장르** | AI 보안 / OSINT |
| **저장 당시 스타** | 미표기 |
| **주 언어 / 라이선스** | 미표기 / MIT |
| **저장일 / 로컬 상태** | 2026-11-06 / 미클론 (경량 카드 모드) |
| **태그** | `#VoidAccess` `#OSINT` `#다크웹` `#보안 연구` |

## 설치 및 활용 방법

- **가이드:** 저장소 클론 후 셀프호스트 배포 가이드(README) 참고
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 voidaccess
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status voidaccess "사용 중"
  ```

## 서재 메모 (Context & Caveats)

2026-10-28 @ai.yeongseon AI 보안 도구 소개글 3번 — 인가받은 보안 연구용. 원작자 Katriel Moses의 저장소가 정식.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
