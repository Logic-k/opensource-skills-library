# AI 보안 감사 & OSINT (`05_security-osint`)

> 바이브코딩 앱 보안 감사, 노출된 AI 서버 점검, OSINT 위협/지오로케이션 분석 도구 모음 (인가된 보안 점검 및 본인 자산 점검 전용)

[← 전체 서재 대시보드로 돌아가기](../README.md) · 등록된 스킬: **4개**

## 스킬 일람

| ID | 이름 | 세부 장르 | 상태 | 스타 | 언제 쓰면 좋을까 (적재적소) | GitHub |
| :---: | :--- | :--- | :---: | :---: | :--- | :--- |
| 3 | [**security-audit-skill**](./security-audit-skill/SKILL.md) | `AI 보안` | `보고 싶음` | ★ 74,901 | 바이브코딩이나 AI로 만든 웹/앱 서비스를 실제 인터넷에 배포하기 전에 오탐을 걸러낸 정밀 6단계 보안 감사(`findings.json`)를 수행하고 싶을 때 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) |
| 18 | [**AIMap**](./aimap/SKILL.md) | `AI 보안` | `보고 싶음` | 미표기 | 본인이 운영하거나 인가받은 인프라에서 MCP, Ollama, vLLM 등 AI 서버가 인증 없이 외부에 노출되지 않았는지 보안 점검할 때 | [BishopFox/aimap](https://github.com/BishopFox/aimap) |
| 19 | [**VoidAccess**](./voidaccess/SKILL.md) | `AI 보안 / OSINT` | `보고 싶음` | 미표기 | 인가받은 위협 인텔리전스/보안 연구 환경에서 유출 정보 및 위협 관계 그래프를 셀프호스트로 분석하고 STIX/MISP로 내보내고 싶을 때 | [KatrielMoses/voidaccess](https://github.com/KatrielMoses/voidaccess) |
| 22 | [**Netryx (Astra V2)**](./netryx-astra-v2/SKILL.md) | `AI 보안 / OSINT` | `보고 싶음` | 미표기 | 공개 사진에 민감한 위치 정보(프라이버시 노출 여부)가 특정될 수 있는지 로컬 AI 지오로케이션으로 점검하거나 OSINT 위치 검증이 필요할 때 | [sparkyniner/Netryx-Astra-V2-Geolocation-Tool](https://github.com/sparkyniner/Netryx-Astra-V2-Geolocation-Tool) |

## 세부 장르별 보기

### AI 보안 (2)

- [**security-audit-skill**](./security-audit-skill/SKILL.md) ([GitHub](https://github.com/cloudflare/security-audit-skill)) — 코딩 에이전트를 6단계 보안 감사관으로 바꾸는 Cloudflare 스킬. 구멍을 찾는 AI와 그걸 반박하는 AI가 따로 일해 검증된 결과만 `findings.json`으로 정리한다. `#Claude Code` `#보안 감사` `#바이브코딩` `#Cloudflare`
- [**AIMap**](./aimap/SKILL.md) ([GitHub](https://github.com/BishopFox/aimap)) — 인터넷에 비밀번호 없이 노출된 AI 서버(MCP·Ollama·vLLM 등)를 Shodan으로 찾아 지문·위험 점수·보안 테스트를 하는 플랫폼. `#AIMap` `#AI 서버 보안` `#Shodan` `#MCP` `#Ollama`

### AI 보안 / OSINT (2)

- [**VoidAccess**](./voidaccess/SKILL.md) ([GitHub](https://github.com/KatrielMoses/voidaccess)) — 한 번의 질의로 다크웹·유출 로그인·지갑·다크웹 언급을 수집해 관계 그래프와 STIX/MISP 등으로 내보내는 셀프호스트 OSINT 플랫폼. `#VoidAccess` `#OSINT` `#다크웹` `#보안 연구`
- [**Netryx (Astra V2)**](./netryx-astra-v2/SKILL.md) ([GitHub](https://github.com/sparkyniner/Netryx-Astra-V2-Geolocation-Tool)) — 사진 한 장을 스트리트뷰 파노라마와 대조해 정확한 GPS 좌표로 추적하는 로컬 우선 OSINT 지오로케이션 도구 (MegaLoc+MASt3R 파이프라인). `#Netryx` `#지오로케이션` `#OSINT` `#AI 보안`
