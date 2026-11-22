---
name: everything
title: "HeyPuter/everything"
category: 08_domain-apps-collections
genre: "오픈소스 모음"
status: "보고 싶음"
repo: "HeyPuter/everything"
github_url: "https://github.com/HeyPuter/everything"
description: "유료 SaaS/데스크톱 툴을 대체할 가벼운 오픈소스 웹앱 51종을 한곳에서 찾아 바로 브라우저로 쓰거나 커스텀해 쓰고 싶을 때"
---

# HeyPuter/everything

> **[도메인 특화 (교육 · 금융) & 오픈소스 모음](../README.md)** · 세부 장르: `오픈소스 모음` · 상태: `보고 싶음`

유료 앱들의 무료 오픈소스판 51개 모음. 9개 분야, 브라우저 'Try it' 링크로 바로 사용 가능.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 유료 SaaS/데스크톱 툴을 대체할 가벼운 오픈소스 웹앱 51종을 한곳에서 찾아 바로 브라우저로 쓰거나 커스텀해 쓰고 싶을 때

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 🧰 유료 앱 대체 오픈소스 51선 모음

```mermaid
flowchart LR
    S1["🔍 9개 분야 카탈로그 탐색\n대체하고 싶은 유료 상용 앱 선택"]
    S2["🌐 Try it 브라우저 즉시 실행\n설치 없이 웹에서 바로 사용"]
    S3["🛠️ 로컬 셀프호스트 / 커스텀\nNode.js 22.12+로 내 서버에 띄우기"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | 간단한 유틸리티·생산성 툴마다 월 구독료를 내거나 광고 사이트 이용 |
| ✅ **스킬 적용 후 (After)** | 51개 오픈소스 대안 앱을 브라우저에서 무료로 바로 쓰거나 내 입맛대로 개조 |

## 단계별 명령어 & 프롬프트 치트시트

### ① 저장소 클론
- HeyPuter/everything 51개 앱 목록 확인
```text
powershell -File scripts\clone-skill.ps1 everything
```

### ② 로컬 실행
- 필요한 앱만 골라서 셀프호스팅
```text
Node.js 22.12+ 환경에서 everything 저장소를 실행해 51개 오픈소스 대안 앱을 띄워줘
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#31` / `everything` |
| **GitHub 저장소** | [HeyPuter/everything](https://github.com/HeyPuter/everything) |
| **빠른 링크** | [README](https://github.com/HeyPuter/everything#readme) · [Issues](https://github.com/HeyPuter/everything/issues) · [Releases](https://github.com/HeyPuter/everything/releases) |
| **세부 장르** | 오픈소스 모음 |
| **저장 당시 스타** | ★ 7,103 |
| **주 언어 / 라이선스** | 미표기 / MIT |
| **저장일 / 로컬 상태** | 2026-11-06 / 미클론 (경량 카드 모드) |
| **태그** | `#everything` `#오픈소스 대안` `#유료 앱 대체` |

## 설치 및 활용 방법

- **가이드:** 브라우저 Try it 링크 또는 저장소 클론 후 Node.js 22.12+로 로컬 실행
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 everything
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status everything "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자가 2026-10-19(@rammcodes_)와 2026-11-04(@ddalkkaklab) 두 차례 공유한 동일 프로젝트 — 로컬 실행은 Git + Node.js 22.12+ 필요.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
