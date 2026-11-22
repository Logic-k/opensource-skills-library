---
name: bama
title: "BAMA (Build Any Mac App)"
category: 01_claude-skills-plugins
genre: "Claude Code 플러그인 / 맥 앱 빌더"
status: "보고 싶음"
repo: "daveebbelaar/bama"
github_url: "https://github.com/daveebbelaar/bama"
description: "macOS 환경(맥북)에서 Claude Code를 이용해 Swift/SwiftUI 네이티브 맥 앱을 스크린샷 및 체크리스트 기반으로 자동 빌드하고 싶을 때"
---

# BAMA (Build Any Mac App)

> **[Claude Code / Antigravity 스킬 & 플러그인](../README.md)** · 세부 장르: `Claude Code 플러그인 / 맥 앱 빌더` · 상태: `보고 싶음`

말로 시키면 Swift/SwiftUI 네이티브 맥 앱을 만들어 Dock에 올려 주는 Claude Code 플러그인. 스킬 21개가 대상 앱 전 화면 스크린샷→기능 체크리스트→단계별 빌드, 커밋 전 전 화면 라이트/다크 모드 스냅샷 확인.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- macOS 환경(맥북)에서 Claude Code를 이용해 Swift/SwiftUI 네이티브 맥 앱을 스크린샷 및 체크리스트 기반으로 자동 빌드하고 싶을 때

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#32` / `bama` |
| **GitHub 저장소** | [daveebbelaar/bama](https://github.com/daveebbelaar/bama) |
| **빠른 링크** | [README](https://github.com/daveebbelaar/bama#readme) · [Issues](https://github.com/daveebbelaar/bama/issues) · [Releases](https://github.com/daveebbelaar/bama/releases) |
| **세부 장르** | Claude Code 플러그인 / 맥 앱 빌더 |
| **저장 당시 스타** | ★ 1,507 |
| **주 언어 / 라이선스** | Swift / MIT |
| **저장일 / 로컬 상태** | 2026-11-06 / 미클론 (경량 카드 모드) |
| **태그** | `#BAMA` `#Claude Code` `#맥 앱` `#SwiftUI` `#플러그인` |

## 설치 및 활용 방법

- **가이드:** macOS + Xcode 환경에서 저장소 클론 후 Claude Code 플러그인 설치
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 bama
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status bama "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자가 2026-11-03 공유한 @claudical_official 릴 — macOS 26 이상·Xcode 26 이상 필요, 주력 윈도우에서는 못 쓰고 맥북 에어 M1 등 맥 환경에서만 가능. 윈도우용 대안은 BAWA.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
