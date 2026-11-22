---
name: floorplan
title: "floorplan"
category: 07_app-builders-dev-tools
genre: "코드 시각화"
status: "보고 싶음"
repo: "haydenschmitty/floorplan"
github_url: "https://github.com/haydenschmitty/floorplan"
description: "복잡한 코드베이스나 바이브코딩으로 만든 앱의 전체 구조(화면·서버·DB·외부 서비스)를 한눈에 시각화하고 헬스 체크(예: DB 공개 여부 등)를 점검하고 싶을 때"
---

# floorplan

> **[앱 빌더 · 바이브코딩 · 코드 시각화 · 로컬 AI](../README.md)** · 세부 장르: `코드 시각화` · 상태: `보고 싶음`

Claude Code나 Codex가 코드를 읽고 앱 구조를 쉬운 말 지도로 그려주는 무료 오픈소스 플러그인. 화면·서버·DB·외부 서비스를 카드로 잇고, 더블클릭하면 파일·엔드포인트까지 내려간다.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 복잡한 코드베이스나 바이브코딩으로 만든 앱의 전체 구조(화면·서버·DB·외부 서비스)를 한눈에 시각화하고 헬스 체크(예: DB 공개 여부 등)를 점검하고 싶을 때

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#2` / `floorplan` |
| **GitHub 저장소** | [haydenschmitty/floorplan](https://github.com/haydenschmitty/floorplan) |
| **빠른 링크** | [README](https://github.com/haydenschmitty/floorplan#readme) · [Issues](https://github.com/haydenschmitty/floorplan/issues) · [Releases](https://github.com/haydenschmitty/floorplan/releases) |
| **세부 장르** | 코드 시각화 |
| **저장 당시 스타** | ★ 4,875 |
| **주 언어 / 라이선스** | 미표기 / MIT |
| **저장일 / 로컬 상태** | 2026-11-19 / 미클론 (경량 카드 모드) |
| **태그** | `#Claude Code` `#Codex` `#코드 시각화` `#아키텍처 맵` `#헬스 체크` |

## 설치 및 활용 방법

- **가이드:** 저장소 클론 또는 GitHub README의 Claude Code/Codex 플러그인 설치 방법 참고
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 floorplan
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status floorplan "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자가 2026-11-19 공유한 @ai.asap.kr 게시물로 확인. 앱 구조를 지도로 보고 헬스 체크까지 하는 플러그인. Supabase 테이블 공개 여부 점검은 jev-doc-search RLS 꺼짐 건과 직접 연결됨.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
