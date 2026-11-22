---
name: security-audit-skill
title: "security-audit-skill"
category: 05_security-osint
genre: "AI 보안"
status: "보고 싶음"
repo: "cloudflare/security-audit-skill"
github_url: "https://github.com/cloudflare/security-audit-skill"
description: "바이브코딩이나 AI로 만든 웹/앱 서비스를 실제 인터넷에 배포하기 전에 오탐을 걸러낸 정밀 6단계 보안 감사(`findings.json`)를 수행하고 싶을 때"
---

# security-audit-skill

> **[AI 보안 감사 & OSINT](../README.md)** · 세부 장르: `AI 보안` · 상태: `보고 싶음`

코딩 에이전트를 6단계 보안 감사관으로 바꾸는 Cloudflare 스킬. 구멍을 찾는 AI와 그걸 반박하는 AI가 따로 일해 검증된 결과만 `findings.json`으로 정리한다.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 바이브코딩이나 AI로 만든 웹/앱 서비스를 실제 인터넷에 배포하기 전에 오탐을 걸러낸 정밀 6단계 보안 감사(`findings.json`)를 수행하고 싶을 때

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#3` / `security-audit-skill` |
| **GitHub 저장소** | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) |
| **빠른 링크** | [README](https://github.com/cloudflare/security-audit-skill#readme) · [Issues](https://github.com/cloudflare/security-audit-skill/issues) · [Releases](https://github.com/cloudflare/security-audit-skill/releases) |
| **세부 장르** | AI 보안 |
| **저장 당시 스타** | ★ 74,901 |
| **주 언어 / 라이선스** | 미표기 / MIT |
| **저장일 / 로컬 상태** | 2026-11-18 / 미클론 (경량 카드 모드) |
| **태그** | `#Claude Code` `#보안 감사` `#바이브코딩` `#Cloudflare` |

## 설치 및 활용 방법

- **가이드:** 저장소 클론 후 스킬 폴더(`.claude/skills` 등) 또는 README 안내에 따라 코딩 에이전트에 장착
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 security-audit-skill
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status security-audit-skill "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자가 2026-11-18 공유한 릴로 확인(@withbeno 릴, 2026-10-23). 바이브코딩으로 만든 앱을 인터넷에 올리기 전 보안 감사 용도.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
