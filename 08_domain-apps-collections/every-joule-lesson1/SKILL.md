---
name: every-joule-lesson1
title: "Every Joule (Lesson 1만 확인)"
category: 08_domain-apps-collections
genre: "교육 / 인터랙티브 책"
status: "보고 싶음"
repo: "iamtechartist/every-joule-lesson1"
github_url: "https://github.com/iamtechartist/every-joule-lesson1"
description: "브라우저 기반 3D 인터랙티브 교육 콘텐츠(물리 시뮬레이션 웹 교재) 구현 레퍼런스가 필요할 때"
---

# Every Joule (Lesson 1만 확인)

> **[도메인 특화 (교육 · 금융) & 오픈소스 모음](../README.md)** · 세부 장르: `교육 / 인터랙티브 책` · 상태: `보고 싶음`

에너지 주제 인터랙티브 3D 물리 책 (스프링부터 발전소까지 10개 레슨, 브라우저에서 동작).

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 브라우저 기반 3D 인터랙티브 교육 콘텐츠(물리 시뮬레이션 웹 교재) 구현 레퍼런스가 필요할 때

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 🌐 브라우저 인터랙티브 3D 웹 교재

```mermaid
flowchart LR
    S1["⚡ 물리 개념 선택\n에너지·스프링 인터랙티브 레슨"]
    S2["🧊 3D 시뮬레이션 조작\n브라우저에서 직접 수치·힘 조작"]
    S3["🎓 직관적 원리 체득\nWebGL/3D 교육 앱 구현 레퍼런스"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | 딱딱한 수식과 텍스트로만 구성된 온라인 물리/과학 학습 자료 |
| ✅ **스킬 적용 후 (After)** | 브라우저에서 직접 만지고 실험하는 3D 인터랙티브 교육 웹앱 |

## 단계별 명령어 & 프롬프트 치트시트

### ① 저장소 클론
- Lesson 1 소스 다운로드 (참고: Lesson 1만 공개됨)
```text
powershell -File scripts\clone-skill.ps1 every-joule-lesson1
```

### ② 로컬 서버 실행
- 브라우저에서 인터랙티브 3D 물리 레슨 체험 및 코드 분석
```text
npx serve .
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#16` / `every-joule-lesson1` |
| **GitHub 저장소** | [iamtechartist/every-joule-lesson1](https://github.com/iamtechartist/every-joule-lesson1) |
| **빠른 링크** | [README](https://github.com/iamtechartist/every-joule-lesson1#readme) · [Issues](https://github.com/iamtechartist/every-joule-lesson1/issues) · [Releases](https://github.com/iamtechartist/every-joule-lesson1/releases) |
| **세부 장르** | 교육 / 인터랙티브 책 |
| **저장 당시 스타** | 미표기 |
| **주 언어 / 라이선스** | 미표기 / 미확인 |
| **저장일 / 로컬 상태** | 2026-11-06 / 미클론 (경량 카드 모드) |
| **태그** | `#Every Joule` `#물리` `#인터랙티브 3D` `#교육` |

## 설치 및 활용 방법

- **가이드:** 저장소 클론 후 정적 웹/로컬 서버로 브라우저에서 실행
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 every-joule-lesson1
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status every-joule-lesson1 "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자가 2026-10-25 공유한 관심 프로젝트 — 전체 책 저장소는 미확인이고 Lesson 1만 담은 저장소만 확인됨.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
