---
name: unslop
title: "unslop"
category: 01_claude-skills-plugins
genre: "Claude Code 스킬"
status: "보고 싶음"
repo: "heydamir/unslop"
github_url: "https://github.com/heydamir/unslop"
description: "AI로 만든 웹/앱 UI가 뻔한 AI 슬롭(AI-slop) 디자인처럼 보일 때, 제품 정체성에 맞게 UI를 감사하고 리디자인하고 싶을 때"
---

# unslop

> **[Claude Code / Antigravity 스킬 & 플러그인](../README.md)** · 세부 장르: `Claude Code 스킬` · 상태: `보고 싶음`

Claude Code·Codex·Google Antigravity용 스킬. 바이브코딩으로 만든 AI 티 나는 UI를 감사해 제품 성격에 맞는 디자인 인터페이스로 고쳐준다.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- AI로 만든 웹/앱 UI가 뻔한 AI 슬롭(AI-slop) 디자인처럼 보일 때, 제품 정체성에 맞게 UI를 감사하고 리디자인하고 싶을 때

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 🎨 UI/UX 감사 & 리디자인 스킬

```mermaid
flowchart LR
    S1["👁️ AI 슬롭 UI 진단\n과도한 그라데이션·천편일률 카드 탐지"]
    S2["🎯 제품 정체성 재정립\n타이포·색상·여백·레이아웃 개선안 도출"]
    S3["✨ 프로덕션 UI 리팩터\n제품 성격에 맞는 세련된 화면으로 재작성"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | 어디서 본 듯한 보라색 그라데이션 + 뻔한 AI 생성 대시보드 느낌 |
| ✅ **스킬 적용 후 (After)** | 브랜드 성격과 사용 흐름에 딱 맞는 디자이너 수준의 정돈된 UI |

## 단계별 명령어 & 프롬프트 치트시트

### ① 스킬 장착
- Claude Code / Codex / Antigravity 스킬 폴더에 설치 가능
```text
powershell -File scripts\clone-skill.ps1 unslop
```

### ② UI 감사 및 개선 요청
- 디자인 토큰, 계층 구조, 컴포넌트 디테일을 일괄 개선
```text
unslop 스킬을 적용해서 현재 프론트엔드 UI의 AI 티 나는 부분을 감사하고 제품 성격에 맞게 고쳐줘
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#4` / `unslop` |
| **GitHub 저장소** | [heydamir/unslop](https://github.com/heydamir/unslop) |
| **빠른 링크** | [README](https://github.com/heydamir/unslop#readme) · [Issues](https://github.com/heydamir/unslop/issues) · [Releases](https://github.com/heydamir/unslop/releases) |
| **세부 장르** | Claude Code 스킬 |
| **저장 당시 스타** | ★ 15,305 |
| **주 언어 / 라이선스** | 미표기 / CC BY 4.0 |
| **저장일 / 로컬 상태** | 2026-11-13 / 미클론 (경량 카드 모드) |
| **태그** | `#Claude Code` `#Codex` `#Antigravity` `#UI 디자인` `#스킬` |

## 설치 및 활용 방법

- **가이드:** 저장소 클론 후 Claude Code / Codex / Antigravity 스킬 경로에 설치 (README 참고)
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 unslop
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status unslop "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자가 2026-11-13에 직접 공유. 2026-11-07 @claudical_official 릴로 먼저 확인한 스킬.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
