---
name: dyad
title: "Dyad"
category: 07_app-builders-dev-tools
genre: "앱 빌더 / 바이브코딩"
status: "보고 싶음"
repo: "dyad-sh/dyad"
github_url: "https://github.com/dyad-sh/dyad"
description: "유료 Lovable 구독 대신 내 PC 로컬 환경에서 무료 API 키 또는 로컬 LLM과 Supabase를 연결해 풀스택 웹앱을 바이브코딩으로 빠르게 만들고 싶을 때"
---

# Dyad

> **[앱 빌더 · 바이브코딩 · 코드 시각화 · 로컬 AI](../README.md)** · 세부 장르: `앱 빌더 / 바이브코딩` · 상태: `보고 싶음`

말로 화면을 설명하면 앱 코드가 내 컴퓨터 폴더에 생성되는 오픈소스 앱 빌더. Lovable 대안. Supabase 연결 시 로그인·DB 연동. 윈도우·맥·리눅스 지원, 가입 없이 실행.

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 유료 Lovable 구독 대신 내 PC 로컬 환경에서 무료 API 키 또는 로컬 LLM과 Supabase를 연결해 풀스택 웹앱을 바이브코딩으로 빠르게 만들고 싶을 때

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 🖥️ 로컬 오픈소스 바이브코딩 앱 빌더

```mermaid
flowchart LR
    S1["💬 자연어로 앱 화면 설명\n무료 Gemini 키 또는 로컬 Ollama 연결"]
    S2["💻 내 PC 폴더에 코드 생성\n실시간 프리뷰 + Supabase 로그인/DB 연동"]
    S3["🚀 소유권 100% 앱 배포\n클라우드 종속 없이 내 로컬 프로젝트 보유"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | 유료 Lovable 구독료 부담 + 클라우드에 코드가 묶여있는 불안감 |
| ✅ **스킬 적용 후 (After)** | 내 PC에서 무료 API/로컬 LLM으로 Supabase 풀스택 앱을 바로 제작 |

## 단계별 명령어 & 프롬프트 치트시트

### ① 앱 설치 또는 클론
- Windows/Mac/Linux 지원, GitHub Releases 설치 파일 제공
```text
powershell -File scripts\clone-skill.ps1 dyad
```

### ② 로컬 바이브코딩 시작
- 가입 없이 로컬 앱 빌더 실행
```text
Dyad에서 Gemini API 키 또는 로컬 Ollama를 연결해 새 Supabase 웹앱을 시작하는 법 알려줘
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#36` / `dyad` |
| **GitHub 저장소** | [dyad-sh/dyad](https://github.com/dyad-sh/dyad) |
| **빠른 링크** | [README](https://github.com/dyad-sh/dyad#readme) · [Issues](https://github.com/dyad-sh/dyad/issues) · [Releases](https://github.com/dyad-sh/dyad/releases) |
| **세부 장르** | 앱 빌더 / 바이브코딩 |
| **저장 당시 스타** | ★ 21,759 |
| **주 언어 / 라이선스** | 미표기 / Apache-2.0 |
| **저장일 / 로컬 상태** | 2026-11-06 / 미클론 (경량 카드 모드) |
| **태그** | `#Dyad` `#앱 빌더` `#바이브코딩` `#Lovable 대안` `#Supabase` |

## 설치 및 활용 방법

- **가이드:** GitHub Releases에서 데스크톱 앱 설치 또는 저장소 클론 후 실행
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 dyad
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status dyad "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자가 2026-10-09 인스타 릴(@reborn.ax)로 공유한 관심 프로젝트 — 무료 Gemini 키나 로컬 모델(Ollama·LM Studio) 연동 가능.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
