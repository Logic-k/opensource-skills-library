---
name: craft
title: "CRAFT"
category: 02_ai-agents-infra
genre: "AI 에이전트 / 코딩 에이전트"
status: "보관"
repo: "Yfacine/CRAFT"
github_url: "https://github.com/Yfacine/CRAFT"
description: "보관 항목: 현재 GitHub 저장소 404/비공개 상태로, 기존 업무흐름 분석·대체품 제작 컨셉 참고용으로만 확인"
---

# CRAFT

> **[AI 에이전트 · 멀티에이전트 · 시각화 · 인프라](../README.md)** · 세부 장르: `AI 에이전트 / 코딩 에이전트` · 상태: `보관`

상용 프로그램의 업무 흐름을 분석하고, 실제 사용 환경에서 대체할 수 있는 복제품을 만드는 작업공간

## 언제 꺼내 쓰나 (적재적소 활용 시점)

- 보관 항목: 현재 GitHub 저장소 404/비공개 상태로, 기존 업무흐름 분석·대체품 제작 컨셉 참고용으로만 확인

## 한눈에 보는 작동 흐름 (Visual Workflow)

- **실행 형태:** 🗄️ 보관됨 (참고용 레퍼런스)

```mermaid
flowchart LR
    S1["🔍 상용 소프트웨어 분석\n기존 업무 흐름·단축키·화면 파악"]
    S2["🧱 워크스페이스 재설계\n사용 환경에 맞는 구조 도출"]
    S3["⚠️ 현재 404/비공개 전환\nReplica 또는 BAWA로 대체 권장"]
    S1 --> S2 --> S3
```

| 구분 | 설명 |
| :--- | :--- |
| ❌ **기존 문제 (Before)** | 원본 저장소 링크가 삭제 또는 비공개로 전환되어 클론 불가 |
| ✅ **스킬 적용 후 (After)** | 대체재인 #39 Replica 또는 #13 BAWA로 동일한 목적 달성 가능 |

## 단계별 명령어 & 프롬프트 치트시트

### ① 상태 안내
- 대신 Replica(replica-skill) 또는 BAWA(bawa)를 추천합니다.
```text
# 현재 GitHub 저장소 404 (보관 상태)
```

## 기본 정보

| 항목 | 내용 |
| :--- | :--- |
| **ID / 슬러그** | `#12` / `craft` |
| **GitHub 저장소** | [Yfacine/CRAFT](https://github.com/Yfacine/CRAFT) |
| **빠른 링크** | [README](https://github.com/Yfacine/CRAFT#readme) · [Issues](https://github.com/Yfacine/CRAFT/issues) · [Releases](https://github.com/Yfacine/CRAFT/releases) |
| **세부 장르** | AI 에이전트 / 코딩 에이전트 |
| **저장 당시 스타** | ★ 6 |
| **주 언어 / 라이선스** | 미표기 / MIT |
| **저장일 / 로컬 상태** | 2026-11-07 / 미클론 (경량 카드 모드) |
| **태그** | `#Codex` `#Windows` `#복제품` `#CAD` `#소방설비` |

## 설치 및 활용 방법

- **가이드:** 현재 저장소 접근 불가(404/비공개). 대안으로 Replica(`replica-skill`) 또는 BAWA(`bawa`) 참고
- **원클릭 로컬 클론 (이 폴더 옆 `./repo`에 소스 다운로드):**
  ```powershell
  powershell -File ..\..\scripts\clone-skill.ps1 craft
  ```
- **상태 변경:**
  ```powershell
  python ..\..\scripts\manage_skills.py status craft "사용 중"
  ```

## 서재 메모 (Context & Caveats)

사용자가 공유한 깃허브 링크(2026-11-07) — 2026-11-13 확인 결과 저장소 404 (삭제 또는 비공개 전환됨). 참고 기록용으로 보관 상태 유지.

## 나의 실습 및 커스텀 노트 (User Notes)

- 여기에 직접 실행해본 설정값, 트러블슈팅, 커스텀 프롬프트 메모를 자유롭게 기록하세요.
