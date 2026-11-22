---
name: openscreen
title: "openscreen"
category: 06_media-video
genre: "영상 / 화면 녹화"
status: "보고 싶음"
repo: "getopenscreen/openscreen"
github_url: "https://github.com/getopenscreen/openscreen"
description: "만든 앱이나 서비스의 제품 소개·시연 데모 영상을 Screen Studio처럼 커서 자동 줌과 깔끔한 자막/주석으로 무료 제작하고 싶을 때"
---

# openscreen

> **[영상 생성 · 편집 · 화면 녹화](../README.md)** · 세부 장르: `영상 / 화면 녹화` · 상태: `보고 싶음`

화면 녹화 후 커서를 따라 자동 줌·자막·주석을 넣어 데모 영상을 완성하는 무료 데스크톱 앱.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 만든 앱이나 서비스의 제품 소개·시연 데모 영상을 Screen Studio처럼 커서 자동 줌과 깔끔한 자막/주석으로 무료 제작하고 싶을 때

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 🎥 커서 자동 줌 데모 영상 앱

```mermaid
flowchart LR
    S1["🔴 앱 화면 녹화\n마우스 이동·클릭 좌표 함께 기록"]
    S2["🔍 자동 줌 & 자막/주석\n클릭 지점 부드러운 확대 + 강조 표시"]
    S3["🎬 제품 데모 영상 출력\n유료 Screen Studio 수준의 시연 영상 완성"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | 유료 Screen Studio 없이는 밋밋한 화면 녹화 영상만 나오고 편집이 번거로움 |
| ✅ **스킬 적용 후 (After)** | 무료 오픈소스 데스크톱 앱으로 커서를 따라가는 프로급 제품 시연 영상 제작 |

## 단계별 명령어 & 프롬프트 치트시트

### ① 앱 다운로드 / 클론
- Releases 설치 파일 또는 소스 확인 (getopenscreen/openscreen)
```text
powershell -File scripts\clone-skill.ps1 openscreen
```

### ② 데모 제작
- 포트폴리오/공모전/런칭 시연 영상 제작
```text
openscreen으로 내가 만든 웹앱 데모 영상을 찍고 자동 줌·자막을 넣는 워크플로우를 알려줘
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#27` / `openscreen` |
| **GitHub 저장소** | [getopenscreen/openscreen](https://github.com/getopenscreen/openscreen) |
| **빠른 링크** | [README](https://github.com/getopenscreen/openscreen#readme) · [Issues](https://github.com/getopenscreen/openscreen/issues) · [Releases](https://github.com/getopenscreen/openscreen/releases) |
| **세부 장르** | 영상 / 화면 녹화 |
| **저장 당시 스타** | 미표기 |
| **주 언어 / 라이선스** | 미표기 / MIT |
| **저장일 / 로컬 상태** | 2026-11-06 / 미클론 (경량 카드 모드) |
| **태그** | `#openscreen` `#데모 영상` `#화면 녹화` |

## 설치 및 활용 방법

- **가이드:** GitHub Releases 설치 또는 저장소 클론 후 로컬 실행
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 openscreen
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status openscreen "사용 중"
  ```

## 서재 메모 (Context & Caveats)

2026-10-25 @jisik.chanel '모르면 손해보는 오픈소스 9가지' 4번 — 원본 siddharthvaddem/openscreen은 v1.5.0 이후 아카이브됐고 현재 개발은 getopenscreen/openscreen에서 계속됨.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
