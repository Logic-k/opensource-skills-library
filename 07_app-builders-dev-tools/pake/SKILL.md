---
name: pake
title: "Pake"
category: 07_app-builders-dev-tools
genre: "데스크톱 앱 / 웹사이트 변환"
status: "보고 싶음"
repo: "tw93/Pake"
github_url: "https://github.com/tw93/Pake"
description: "자주 쓰는 웹서비스나 자체 만든 웹앱(예: localhost나 SaaS)을 Electron보다 훨씬 가벼운 Tauri 기반 Windows/Mac 네이티브 데스크톱 앱으로 감싸고 싶을 때"
---

# Pake

> **[앱 빌더 · 바이브코딩 · 코드 시각화 · 로컬 AI](../README.md)** · 세부 장르: `데스크톱 앱 / 웹사이트 변환` · 상태: `보고 싶음`

웹사이트를 한 번의 명령어로 가벼운 데스크톱 앱으로 변환하는 도구 (Rust + Tauri, 시스템 WebView). Windows·macOS·Linux 지원.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 자주 쓰는 웹서비스나 자체 만든 웹앱(예: localhost나 SaaS)을 Electron보다 훨씬 가벼운 Tauri 기반 Windows/Mac 네이티브 데스크톱 앱으로 감싸고 싶을 때

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 📦 웹사이트 → 네이티브 앱 변환 CLI

```mermaid
flowchart LR
    S1["🌐 웹사이트 URL 입력\nSaaS·노션·내 웹앱 주소 지정"]
    S2["🦀 Rust + Tauri 패키징\nOS 내장 WebView로 초경량 빌드"]
    S3["🖥️ 독립 실행 앱 설치\nWindows(.exe/.msi), Mac(.dmg) 완성"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | 브라우저 탭 수십 개 속에 웹앱이 묻히거나 무거운 Electron 앱 사용 |
| ✅ **스킬 적용 후 (After)** | 명령어 한 줄로 수 MB 수준의 가벼운 독립 데스크톱 앱으로 변환 |

## 단계별 명령어 & 프롬프트 치트시트

### ① CLI 설치
- Rust 및 빌드 도구 준비 후 전역 CLI 설치
```text
npm install -g pake-cli
```

### ② 원클릭 앱 변환
- 원하는 웹사이트를 데스크톱 앱 실행 파일로 즉시 빌드
```text
pake https://opensource-skills-library.vercel.app --name SkillsLibrary
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#10` / `pake` |
| **GitHub 저장소** | [tw93/Pake](https://github.com/tw93/Pake) |
| **빠른 링크** | [README](https://github.com/tw93/Pake#readme) · [Issues](https://github.com/tw93/Pake/issues) · [Releases](https://github.com/tw93/Pake/releases) |
| **세부 장르** | 데스크톱 앱 / 웹사이트 변환 |
| **저장 당시 스타** | ★ 63,185 |
| **주 언어 / 라이선스** | 미표기 / GPL-3.0 |
| **저장일 / 로컬 상태** | 2026-11-11 / 미클론 (경량 카드 모드) |
| **태그** | `#Pake` `#Tauri` `#Rust` `#데스크톱 앱` `#웹사이트 변환` |

## 설치 및 활용 방법

- **가이드:** README 안내에 따라 CLI(`pake <url>`) 또는 저장소 클론을 통해 데스크톱 앱 패키징
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 pake
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status pake "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자가 2026-11-10 공유한 인스타 캐러셀(@promppy_com) — 웹사이트를 데스크톱 앱으로 바꾸는 도구, 2026-11-11 서재에 34번째 항목으로 추가.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
