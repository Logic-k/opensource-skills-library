# MCP 서버 (Model Context Protocol) (`03_mcp-servers`)

> 법률 검색, 온톨로지 기반 DB 질의·지식베이스, 프롬프트 최적화 등 AI 클라이언트에 연결해 쓰는 MCP 서버 모음

[← 전체 서재 대시보드로 돌아가기](../README.md) · 등록된 스킬: **3개**

## 스킬 일람

| ID | 이름 | 세부 장르 | 상태 | 스타 | 언제 쓰면 좋을까 (적재적소) | GitHub |
| :---: | :--- | :--- | :---: | :---: | :--- | :--- |
| 9 | [**MCP Prompt Optimizer**](./mcp-prompt-optimizer/SKILL.md) | `MCP / 프롬프트 최적화` | `보고 싶음` | ★ 0 | MCP 클라이언트 안에서 사용자 프롬프트의 명확도를 점수화하고 모호할 때 자동으로 보충 질문을 생성하는 OTA 워크플로우를 연결하고 싶을 때 | [grandinh/mcp-prompt-optimizer](https://github.com/grandinh/mcp-prompt-optimizer) |
| 14 | [**auto-ontology-mcp**](./auto-ontology-mcp/SKILL.md) | `MCP / 데이터 · 지식베이스` | `보고 싶음` | ★ 18 | 정확한 조인/SQL 검증이 필요한 Text-to-SQL DB 질의나 영수증·논문·노트를 온톨로지 지식 그래프로 구조화해 Obsidian vault와 연동하고 싶을 때 | [gogoymh/auto-ontology-mcp](https://github.com/gogoymh/auto-ontology-mcp) |
| 37 | [**korean-law-mcp**](./korean-law-mcp/SKILL.md) | `MCP / 법률` | `보고 싶음` | ★ 2,700 | 한국 법령·자치법규·행정규칙·판례를 환각 없이 실시간 법제처 DB로 조회하고, 조문 인용 검증이나 행위시법·판례 유효성을 확인하고 싶을 때 | [chrisryugj/korean-law-mcp](https://github.com/chrisryugj/korean-law-mcp) |

## 세부 장르별 보기

### MCP / 프롬프트 최적화 (1)

- [**MCP Prompt Optimizer**](./mcp-prompt-optimizer/SKILL.md) ([GitHub](https://github.com/grandinh/mcp-prompt-optimizer)) — 명확도가 60% 미만이면 1~3개 질문을 만들어 프롬프트를 최적화하는 MCP 서버. OTA(Optimize-Then-Answer) 프레임워크. `#mcp` `#prompt-optimizer` `#typescript` `#claude-code`

### MCP / 데이터 · 지식베이스 (1)

- [**auto-ontology-mcp**](./auto-ontology-mcp/SKILL.md) ([GitHub](https://github.com/gogoymh/auto-ontology-mcp)) — NVIDIA Auto Ontology의 시맨틱 레이어를 Claude, ChatGPT 등 MCP 클라이언트용 MCP 서버로 가져온 프로젝트. LLM API 키 불필요. 데이터베이스 질문(온톨로지 기반 조인·SQL 검증) + 개인 지식베이스 유지(영수증·명세서·논문·책 노트를 사실·개념·출처와 함께 저장, Obsidian vault 내보내기) 기능 제공. `#auto-ontology-mcp` `#MCP` `#온톨로지` `#text-to-SQL` `#지식베이스` `#NVIDIA` `#Obsidian`

### MCP / 법률 (1)

- [**korean-law-mcp**](./korean-law-mcp/SKILL.md) ([GitHub](https://github.com/chrisryugj/korean-law-mcp)) — 법제처 Open API 기반 MCP 서버. 법령·판례·행정규칙·자치법규·조약·해석례 검색 + 인용 검증·판례 생사 확인·행위시법 판단. `#korean-law-mcp` `#MCP` `#법제처` `#법률 검색`
