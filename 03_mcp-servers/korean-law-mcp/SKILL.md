---
name: korean-law-mcp
title: "korean-law-mcp"
category: 03_mcp-servers
genre: "MCP / 법률"
status: "보고 싶음"
repo: "chrisryugj/korean-law-mcp"
github_url: "https://github.com/chrisryugj/korean-law-mcp"
description: "한국 법령·자치법규·행정규칙·판례를 환각 없이 실시간 법제처 DB로 조회하고, 조문 인용 검증이나 행위시법·판례 유효성을 확인하고 싶을 때"
---

# korean-law-mcp

> **[MCP 서버 (Model Context Protocol)](../README.md)** · 세부 장르: `MCP / 법률` · 상태: `보고 싶음`

법제처 Open API 기반 MCP 서버. 법령·판례·행정규칙·자치법규·조약·해석례 검색 + 인용 검증·판례 생사 확인·행위시법 판단.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 한국 법령·자치법규·행정규칙·판례를 환각 없이 실시간 법제처 DB로 조회하고, 조문 인용 검증이나 행위시법·판례 유효성을 확인하고 싶을 때

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#37` / `korean-law-mcp` |
| **GitHub 저장소** | [chrisryugj/korean-law-mcp](https://github.com/chrisryugj/korean-law-mcp) |
| **빠른 링크** | [README](https://github.com/chrisryugj/korean-law-mcp#readme) · [Issues](https://github.com/chrisryugj/korean-law-mcp/issues) · [Releases](https://github.com/chrisryugj/korean-law-mcp/releases) |
| **세부 장르** | MCP / 법률 |
| **저장 당시 스타** | ★ 2,700 |
| **주 언어 / 라이선스** | 미표기 / MIT |
| **저장일 / 로컬 상태** | 2026-11-06 / 미클론 (경량 카드 모드) |
| **태그** | `#korean-law-mcp` `#MCP` `#법제처` `#법률 검색` |

## 설치 및 활용 방법

- **가이드:** `open.law.go.kr`에서 OC 키 무료 발급 후 저장소 README에 따라 MCP 또는 Claude Code 플러그인 설치
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 korean-law-mcp
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status korean-law-mcp "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자가 2026-10-17 공유한 관심 프로젝트 — 법제처 Open API 인증키(OC) 무료 발급 필요(`open.law.go.kr`). Claude Code는 플러그인 2줄 설치가 가장 쉬움.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
