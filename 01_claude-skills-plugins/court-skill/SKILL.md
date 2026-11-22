---
name: court-skill
title: "Court"
category: 01_claude-skills-plugins
genre: "Claude Code 스킬"
status: "보고 싶음"
repo: "alexyc9381/court-skill"
github_url: "https://github.com/alexyc9381/court-skill"
description: "새 프로젝트 기획, 아키텍처 결정, 사업 아이디어에 대해 AI의 아부성 동의를 배제하고 치열한 찬반 논리 검증과 최종 평결(`VERDICT.md`)을 받고 싶을 때"
---

# Court

> **[Claude Code / Antigravity 스킬 & 플러그인](../README.md)** · 세부 장르: `Claude Code 스킬` · 상태: `보고 싶음`

Claude가 아이디어에 무조건 동의하는 걸 막는 스킬. 프로젝트·아이디어를 법정에 세워 검사·변호가 다투고 12인 배심원단이 따로 투표, 판사가 `VERDICT.md`로 평결.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 새 프로젝트 기획, 아키텍처 결정, 사업 아이디어에 대해 AI의 아부성 동의를 배제하고 치열한 찬반 논리 검증과 최종 평결(`VERDICT.md`)을 받고 싶을 때

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#5` / `court-skill` |
| **GitHub 저장소** | [alexyc9381/court-skill](https://github.com/alexyc9381/court-skill) |
| **빠른 링크** | [README](https://github.com/alexyc9381/court-skill#readme) · [Issues](https://github.com/alexyc9381/court-skill/issues) · [Releases](https://github.com/alexyc9381/court-skill/releases) |
| **세부 장르** | Claude Code 스킬 |
| **저장 당시 스타** | ★ 341 |
| **주 언어 / 라이선스** | Python / MIT |
| **저장일 / 로컬 상태** | 2026-11-12 / 미클론 (경량 카드 모드) |
| **태그** | `#court` `#claude-code` `#claude-skills` `#multi-agent` `#subagents` `#decision-making` `#critical-thinking` |

## 설치 및 활용 방법

- **가이드:** 저장소 클론 후 README에 따라 Claude Code 스킬로 추가 (풀 재판은 토큰 소모 주의)
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 court-skill
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status court-skill "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자 공유: 2026-10-08 @gpt_haterz 릴로 소개, 2026-11-12 저장소 확정 후 서재 추가 요청. 실제 법이 아니라 프로젝트·아이디어를 법정 형식으로 논리 검증하는 스킬. 풀 재판 17회 호출로 토큰을 많이 씀.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
