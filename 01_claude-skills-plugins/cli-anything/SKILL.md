---
name: cli-anything
title: "CLI-Anything"
category: 01_claude-skills-plugins
genre: "CLI / AI 에이전트"
status: "보고 싶음"
repo: "HKUDS/CLI-Anything"
github_url: "https://github.com/HKUDS/CLI-Anything"
description: "마우스로만 조작하던 GUI 소프트웨어(Blender, Godot, Obsidian 등)를 에이전트가 제어할 수 있도록 전용 CLI와 `SKILL.md`로 자동 변환하고 싶을 때"
---

# CLI-Anything

> **[Claude Code / Antigravity 스킬 & 플러그인](../README.md)** · 세부 장르: `CLI / AI 에이전트` · 상태: `보고 싶음`

GUI 앱을 전용 CLI + `SKILL.md`로 만드는 도구. 7단계 파이프라인, Claude Code·Codex 지원, Blender·Godot·Obsidian 등 하네스 보유.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 마우스로만 조작하던 GUI 소프트웨어(Blender, Godot, Obsidian 등)를 에이전트가 제어할 수 있도록 전용 CLI와 `SKILL.md`로 자동 변환하고 싶을 때

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** ⌨️ GUI 앱 → CLI + SKILL.md 자동 변환기

```mermaid
flowchart LR
    S1["🖱️ GUI 앱 지정\nBlender·Godot·Obsidian 등 대상 선택"]
    S2["🔄 7단계 하네스 변환\n내부 API/파일 구조 분석 후 CLI 래핑"]
    S3["📜 전용 CLI + SKILL.md 생성\nAI 에이전트가 마우스 대신 터미널로 앱 제어"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | Blender·Obsidian 같은 GUI 프로그램은 AI 코딩 에이전트가 직접 조작하기 어려움 |
| ✅ **스킬 적용 후 (After)** | 7단계 파이프라인으로 에이전트가 바로 쓸 수 있는 CLI와 SKILL.md를 자동 생성 |

## 단계별 명령어 & 프롬프트 치트시트

### ① 저장소 클론
- HKUDS/CLI-Anything 7단계 하네스 다운로드
```text
powershell -File scripts\clone-skill.ps1 cli-anything
```

### ② GUI 앱 변환
- AI가 직접 제어할 수 있는 자동화 인터페이스 구축
```text
CLI-Anything 파이프라인을 참고해서 [대상 앱/툴]을 에이전트용 CLI와 SKILL.md로 변환해줘
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#40` / `cli-anything` |
| **GitHub 저장소** | [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) |
| **빠른 링크** | [README](https://github.com/HKUDS/CLI-Anything#readme) · [Issues](https://github.com/HKUDS/CLI-Anything/issues) · [Releases](https://github.com/HKUDS/CLI-Anything/releases) |
| **세부 장르** | CLI / AI 에이전트 |
| **저장 당시 스타** | ★ 52,109 |
| **주 언어 / 라이선스** | 미표기 / Apache-2.0 |
| **저장일 / 로컬 상태** | 2026-11-06 / 미클론 (경량 카드 모드) |
| **태그** | `#CLI-Anything` `#CLI` `#SKILL.md` `#Claude Code` `#Codex` |

## 설치 및 활용 방법

- **가이드:** 저장소 클론 후 README의 7단계 파이프라인 실행 및 생성된 CLI/SKILL.md 적용
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 cli-anything
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status cli-anything "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자가 2026-10-14 공유한 관심 프로젝트 — 2026-03 공개.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
