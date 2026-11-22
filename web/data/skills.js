window.__INITIAL_SKILLS_CATALOG__ = {
  "skills": [
    {
      "id": 1,
      "memo": "사용자가 2026-11-19 공유한 @every._ai 게시물로 확인. 영상 공모전 활용 평가 완료 — 섬애선율(음악 공모전)에는 직접 안 맞고 보조 홍보 영상용으로만 가능, 일반 영상 공모전에는 조건부 가능하나 스톡 영상+TTS 특성 확인 필요.",
      "name": "MoneyPrinterTurbo",
      "repo": "harry0703/MoneyPrinterTurbo",
      "slug": "moneyprinterturbo",
      "tags": [
        "숏폼",
        "영상 자동 생성",
        "TTS",
        "스톡 영상",
        "Claude Code"
      ],
      "genre": "영상 생성 / AI 비디오",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "주제 한 줄로 스톡 영상·TTS·자막·BGM이 포함된 숏폼 홍보/정보 영상을 빠르게 자동 생성하고 싶을 때",
      "github_url": "https://github.com/harry0703/MoneyPrinterTurbo",
      "saved_date": "2026-11-19",
      "description": "주제 한 줄만 넣으면 대본·장면 영상·목소리·자막·배경음악을 붙여 숏폼 한 편을 알아서 뽑아주는 무료 오픈소스.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 moneyprinterturbo",
            "desc": "d:\\Skills\\06_media-video\\moneyprinterturbo\\repo 에 다운로드",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "webui.bat   # 또는 streamlit run webui/Main.py",
            "desc": "로컬 브라우저 GUI 화면을 열어 주제와 음성·BGM 옵션을 선택",
            "step": "② WebUI 실행"
          },
          {
            "cmd": "MoneyPrinterTurbo WebUI 또는 API를 이용해 '[주제]'에 대한 60초 숏폼 설정값을 잡아줘",
            "desc": "대본 톤과 자막 스타일을 AI와 함께 구성",
            "step": "③ AI 도우미 활용"
          }
        ],
        "exec_type": "🖥️ 로컬 웹UI / 파이프라인 앱",
        "flow_steps": [
          {
            "icon": "📝",
            "label": "주제 1줄 입력",
            "detail": "영상 키워드/주제 전달"
          },
          {
            "icon": "🎬",
            "label": "AI 대본·스톡·TTS 합성",
            "detail": "장면 매칭·음성·자막·BGM 자동 결합"
          },
          {
            "icon": "📱",
            "label": "숏폼 MP4 완성",
            "detail": "세로형 쇼츠/릴스 즉시 렌더링"
          }
        ],
        "before_after": {
          "after": "주제 한 줄만 입력하면 대본·자막·배경음악이 입혀진 숏폼 자동 완성",
          "before": "대본 작성→스톡 영상 검색→TTS 녹음→자막 싱크까지 수 시간 수작업"
        }
      },
      "stars_at_save": 144630,
      "major_category": "06_media-video",
      "install_or_usage": "저장소 클론 후 README 설치 가이드 참고 (`powershell -File scripts/clone-skill.ps1 moneyprinterturbo`)"
    },
    {
      "id": 2,
      "memo": "사용자가 2026-11-19 공유한 @ai.asap.kr 게시물로 확인. 앱 구조를 지도로 보고 헬스 체크까지 하는 플러그인. Supabase 테이블 공개 여부 점검은 jev-doc-search RLS 꺼짐 건과 직접 연결됨.",
      "name": "floorplan",
      "repo": "haydenschmitty/floorplan",
      "slug": "floorplan",
      "tags": [
        "Claude Code",
        "Codex",
        "코드 시각화",
        "아키텍처 맵",
        "헬스 체크"
      ],
      "genre": "코드 시각화",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "복잡한 코드베이스나 바이브코딩으로 만든 앱의 전체 구조(화면·서버·DB·외부 서비스)를 한눈에 시각화하고 헬스 체크(예: DB 공개 여부 등)를 점검하고 싶을 때",
      "github_url": "https://github.com/haydenschmitty/floorplan",
      "saved_date": "2026-11-19",
      "description": "Claude Code나 Codex가 코드를 읽고 앱 구조를 쉬운 말 지도로 그려주는 무료 오픈소스 플러그인. 화면·서버·DB·외부 서비스를 카드로 잇고, 더블클릭하면 파일·엔드포인트까지 내려간다.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 floorplan",
            "desc": "플러그인 설치 안내 및 소스 다운로드",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "floorplan으로 이 프로젝트의 전체 구조 지도와 헬스 체크 리포트를 그려줘",
            "desc": "화면·서버·DB 연결 다이어그램과 취약점 체크 생성",
            "step": "② 지도 생성 요청"
          }
        ],
        "exec_type": "🗺️ 코드 아키텍처 시각화 플러그인",
        "flow_steps": [
          {
            "icon": "📂",
            "label": "코드베이스 스캔",
            "detail": "Claude Code/Codex가 코드 분석"
          },
          {
            "icon": "🧩",
            "label": "계층별 지도 매핑",
            "detail": "화면·서버·DB·외부 API 연결선 + 헬스체크"
          },
          {
            "icon": "🔍",
            "label": "인터랙티브 맵 열람",
            "detail": "카드 더블클릭 시 실제 파일·엔드포인트 이동"
          }
        ],
        "before_after": {
          "after": "비개발자도 이해하는 쉬운 말 지도 + DB 공개/RLS 위험까지 시각 경고",
          "before": "수십 개 폴더를 뒤져도 화면→API→DB 연결 구조와 보안 구멍이 한눈에 안 보임"
        }
      },
      "stars_at_save": 4875,
      "major_category": "07_app-builders-dev-tools",
      "install_or_usage": "저장소 클론 또는 GitHub README의 Claude Code/Codex 플러그인 설치 방법 참고"
    },
    {
      "id": 3,
      "memo": "사용자가 2026-11-18 공유한 릴로 확인(@withbeno 릴, 2026-10-23). 바이브코딩으로 만든 앱을 인터넷에 올리기 전 보안 감사 용도.",
      "name": "security-audit-skill",
      "repo": "cloudflare/security-audit-skill",
      "slug": "security-audit-skill",
      "tags": [
        "Claude Code",
        "보안 감사",
        "바이브코딩",
        "Cloudflare"
      ],
      "genre": "AI 보안",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "바이브코딩이나 AI로 만든 웹/앱 서비스를 실제 인터넷에 배포하기 전에 오탐을 걸러낸 정밀 6단계 보안 감사(`findings.json`)를 수행하고 싶을 때",
      "github_url": "https://github.com/cloudflare/security-audit-skill",
      "saved_date": "2026-11-18",
      "description": "코딩 에이전트를 6단계 보안 감사관으로 바꾸는 Cloudflare 스킬. 구멍을 찾는 AI와 그걸 반박하는 AI가 따로 일해 검증된 결과만 `findings.json`으로 정리한다.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 security-audit-skill",
            "desc": "Cloudflare 보안 감사 스킬 로컬 다운로드",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "security-audit-skill 절차로 이 프로젝트 전체를 6단계 보안 감사하고 findings.json을 만들어줘",
            "desc": "배포 직전 취약점 전수 검사 및 수정안 도출",
            "step": "② 배포 전 감사 실행"
          }
        ],
        "exec_type": "🛡️ 6단계 보안 감사 에이전트 스킬",
        "flow_steps": [
          {
            "icon": "🔎",
            "label": "공격자 AI 탐색",
            "detail": "코드·인증·RLS·시크릿 취약점 발굴"
          },
          {
            "icon": "⚖️",
            "label": "검증 AI 반박",
            "detail": "실제 악용 가능 여부 교차 검증(오탐 제거)"
          },
          {
            "icon": "📄",
            "label": "findings.json 출력",
            "detail": "검증된 실제 취약점 + 패치 가이드"
          }
        ],
        "sub_skills": [
          {
            "cmd": "엔드포인트·인증·외부 연동 식별",
            "desc": "API 라우트, 인증 미들웨어, DB 접근 경로 파악",
            "flow": "코드 스캔 → 진입점 목록화",
            "name": "1단계: 공격 표면 매핑",
            "phase": "탐색"
          },
          {
            "cmd": "하드코딩 키·CORS·헤더 감사",
            "desc": "클라이언트 번들에 비밀키가 섞였는지 점검",
            "flow": "환경변수/설정 검사 → 노출 위험 탐지",
            "name": "2단계: 시크릿 & 설정 점검",
            "phase": "탐색"
          },
          {
            "cmd": "SQLi·XSS·IDOR·권한 상승 탐색",
            "desc": "데이터 입력부터 DB 실행까지 오염 경로 분석",
            "flow": "데이터 흐름 추적 → 공격 시나리오 작성",
            "name": "3단계: 취약점 가설 수립",
            "phase": "탐색"
          },
          {
            "cmd": "가설별 실제 악용 가능성 반증 시도",
            "desc": "단순 패턴 매칭 오탐을 반박 AI가 걸러냄",
            "flow": "방어 코드 확인 → 오탐 필터링",
            "name": "4단계: 반박 검증 (Red vs Blue)",
            "phase": "검증"
          },
          {
            "cmd": "CVSS 기준 영향도·재현 난이도 평가",
            "desc": "우선 수정해야 할 핵심 취약점 순위화",
            "flow": "Critical~Low 등급 분류",
            "name": "5단계: 심각도 산정",
            "phase": "정리"
          },
          {
            "cmd": "재현 경로 + 구체적 패치 코드 출력",
            "desc": "바로 수정 작업에 투입할 수 있는 리포트 생성",
            "flow": "구조화 JSON 리포트 생성",
            "name": "6단계: findings.json 생성",
            "phase": "출력"
          }
        ],
        "before_after": {
          "after": "탐색 AI와 반박 AI가 6단계로 교차 검증한 진짜 보안 취약점만 보고",
          "before": "바이브코딩 앱에 API 키 노출·인증 우회·DB 공개 위험이 있는 채로 배포"
        }
      },
      "stars_at_save": 74901,
      "major_category": "05_security-osint",
      "install_or_usage": "저장소 클론 후 스킬 폴더(`.claude/skills` 등) 또는 README 안내에 따라 코딩 에이전트에 장착"
    },
    {
      "id": 4,
      "memo": "사용자가 2026-11-13에 직접 공유. 2026-11-07 @claudical_official 릴로 먼저 확인한 스킬.",
      "name": "unslop",
      "repo": "heydamir/unslop",
      "slug": "unslop",
      "tags": [
        "Claude Code",
        "Codex",
        "Antigravity",
        "UI 디자인",
        "스킬"
      ],
      "genre": "Claude Code 스킬",
      "status": "보고 싶음",
      "license": "CC BY 4.0",
      "language": "",
      "use_when": "AI로 만든 웹/앱 UI가 뻔한 AI 슬롭(AI-slop) 디자인처럼 보일 때, 제품 정체성에 맞게 UI를 감사하고 리디자인하고 싶을 때",
      "github_url": "https://github.com/heydamir/unslop",
      "saved_date": "2026-11-13",
      "description": "Claude Code·Codex·Google Antigravity용 스킬. 바이브코딩으로 만든 AI 티 나는 UI를 감사해 제품 성격에 맞는 디자인 인터페이스로 고쳐준다.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 unslop",
            "desc": "Claude Code / Codex / Antigravity 스킬 폴더에 설치 가능",
            "step": "① 스킬 장착"
          },
          {
            "cmd": "unslop 스킬을 적용해서 현재 프론트엔드 UI의 AI 티 나는 부분을 감사하고 제품 성격에 맞게 고쳐줘",
            "desc": "디자인 토큰, 계층 구조, 컴포넌트 디테일을 일괄 개선",
            "step": "② UI 감사 및 개선 요청"
          }
        ],
        "exec_type": "🎨 UI/UX 감사 & 리디자인 스킬",
        "flow_steps": [
          {
            "icon": "👁️",
            "label": "AI 슬롭 UI 진단",
            "detail": "과도한 그라데이션·천편일률 카드 탐지"
          },
          {
            "icon": "🎯",
            "label": "제품 정체성 재정립",
            "detail": "타이포·색상·여백·레이아웃 개선안 도출"
          },
          {
            "icon": "✨",
            "label": "프로덕션 UI 리팩터",
            "detail": "제품 성격에 맞는 세련된 화면으로 재작성"
          }
        ],
        "before_after": {
          "after": "브랜드 성격과 사용 흐름에 딱 맞는 디자이너 수준의 정돈된 UI",
          "before": "어디서 본 듯한 보라색 그라데이션 + 뻔한 AI 생성 대시보드 느낌"
        }
      },
      "stars_at_save": 15305,
      "major_category": "01_claude-skills-plugins",
      "install_or_usage": "저장소 클론 후 Claude Code / Codex / Antigravity 스킬 경로에 설치 (README 참고)"
    },
    {
      "id": 5,
      "memo": "사용자 공유: 2026-10-08 @gpt_haterz 릴로 소개, 2026-11-12 저장소 확정 후 서재 추가 요청. 실제 법이 아니라 프로젝트·아이디어를 법정 형식으로 논리 검증하는 스킬. 풀 재판 17회 호출로 토큰을 많이 씀.",
      "name": "Court",
      "repo": "alexyc9381/court-skill",
      "slug": "court-skill",
      "tags": [
        "court",
        "claude-code",
        "claude-skills",
        "multi-agent",
        "subagents",
        "decision-making",
        "critical-thinking"
      ],
      "genre": "Claude Code 스킬",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "Python",
      "use_when": "새 프로젝트 기획, 아키텍처 결정, 사업 아이디어에 대해 AI의 아부성 동의를 배제하고 치열한 찬반 논리 검증과 최종 평결(`VERDICT.md`)을 받고 싶을 때",
      "github_url": "https://github.com/alexyc9381/court-skill",
      "saved_date": "2026-11-12",
      "description": "Claude가 아이디어에 무조건 동의하는 걸 막는 스킬. 프로젝트·아이디어를 법정에 세워 검사·변호가 다투고 12인 배심원단이 따로 투표, 판사가 `VERDICT.md`로 평결.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 court-skill",
            "desc": "Claude Code 스킬 파일 확보",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "/court 내 프로젝트 아이디어: [설명] — 냉정하게 찬반 재판해서 VERDICT.md 내려줘",
            "desc": "참고: 풀 재판은 17회 호출로 토큰 소모가 크므로 핵심 결정 시 사용",
            "step": "② 모의 법정 개정"
          }
        ],
        "exec_type": "⚖️ 멀티에이전트 법정 논리 검증 스킬",
        "flow_steps": [
          {
            "icon": "📜",
            "label": "아이디어/기획 상정",
            "detail": "검증할 프로젝트·결정 입력"
          },
          {
            "icon": "🗣️",
            "label": "검사 vs 변호 공방",
            "detail": "치명적 약점 공격 vs 가치·해결책 방어"
          },
          {
            "icon": "🧑‍⚖️",
            "label": "12인 배심원 → VERDICT.md",
            "detail": "독립 투표 후 판사의 최종 평결서 작성"
          }
        ],
        "before_after": {
          "after": "검사의 날카로운 반론과 12명 배심원 투표를 거친 냉정한 평결서(VERDICT.md) 획득",
          "before": "AI에게 '이 아이디어 어때?' 물으면 무조건 '좋은 생각입니다!'라며 아부"
        }
      },
      "stars_at_save": 341,
      "major_category": "01_claude-skills-plugins",
      "install_or_usage": "저장소 클론 후 README에 따라 Claude Code 스킬로 추가 (풀 재판은 토큰 소모 주의)"
    },
    {
      "id": 6,
      "memo": "사용자 공유: 2026-10-04 릴로 소개, 2026-10-12 링크 요청, 2026-11-12 서재 추가 요청. 풀 100개 런은 595회 호출로 토큰을 많이 쓰므로 `--quick`(16개) 등 옵션 참고.",
      "name": "Arena",
      "repo": "Jakeschincariol/arena-skill",
      "slug": "arena-skill",
      "tags": [
        "arena",
        "claude-code",
        "claude-skills",
        "multi-agent",
        "tournament",
        "subagents"
      ],
      "genre": "Claude Code 스킬",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "Python",
      "use_when": "고난도 문제나 크리에이티브/설계 과제에서 단일 응답 품질이 아쉽고, 다수 에이전트 토너먼트 경쟁으로 최상위 품질의 답 1개를 뽑고 싶을 때",
      "github_url": "https://github.com/Jakeschincariol/arena-skill",
      "saved_date": "2026-11-12",
      "description": "Claude가 자꾸 별로인 답을 줄 때, 같은 과제를 서브에이전트 100명에게 주고 토너먼트로 겨뤄 심판 채점으로 최종 답 1개를 남기는 Claude Code 스킬.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 arena-skill",
            "desc": "스킬 다운로드",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "/arena --quick [해결할 고난도 과제]",
            "desc": "100명 풀런(595회 호출) 대신 16명 토너먼트로 토큰 절약 추천",
            "step": "② 가성비 모드(--quick) 실행"
          }
        ],
        "exec_type": "🏆 토너먼트 경쟁 채택 스킬",
        "flow_steps": [
          {
            "icon": "🎯",
            "label": "동일 과제 출제",
            "detail": "16명(--quick) ~ 100명 서브에이전트 투입"
          },
          {
            "icon": "⚔️",
            "label": "토너먼트 1:1 대결",
            "detail": "라운드별 심판 에이전트가 우수 답안 채점"
          },
          {
            "icon": "🥇",
            "label": "최종 우승작 1개 선출",
            "detail": "가장 완성도 높은 결과물 채택"
          }
        ],
        "before_after": {
          "after": "수십 개 변형을 에이전트끼리 경쟁시켜 최고 품질의 답안 1개를 도출",
          "before": "단일 프롬프트 응답이 평범하거나 마음에 들지 않아 여러 번 재질문"
        }
      },
      "stars_at_save": 1452,
      "major_category": "01_claude-skills-plugins",
      "install_or_usage": "저장소 클론 후 Claude Code 스킬 등록 (`--quick` 옵션으로 토큰 절약 가능)"
    },
    {
      "id": 7,
      "memo": "사용자 공유: 2026-11-11 에이통(aitong.app) 유사 오픈소스. 프롬프트 최적화의 오래된 정석. 대화형 되묻기가 아니라 토너먼트 방식이며 웹 UI는 없음.",
      "name": "GPT Prompt Engineer",
      "repo": "mshumer/gpt-prompt-engineer",
      "slug": "gpt-prompt-engineer",
      "tags": [
        "prompt-engineering",
        "elo",
        "jupyter",
        "openai",
        "anthropic"
      ],
      "genre": "프롬프트 엔지니어링",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "Jupyter Notebook",
      "use_when": "명확한 테스트 케이스와 평가 기준이 있는 작업에서 여러 후보 프롬프트를 자동 생성·실험해 ELO 레이팅 기준 최고 성능 프롬프트를 찾고 싶을 때",
      "github_url": "https://github.com/mshumer/gpt-prompt-engineer",
      "saved_date": "2026-11-11",
      "description": "작업 설명과 테스트 케이스를 주면 프롬프트를 여러 개 만들어 테스트하고 ELO 순위를 매겨 최적의 프롬프트를 찾는 도구.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 gpt-prompt-engineer",
            "desc": "Jupyter Notebook 다운로드",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "jupyter notebook gpt_prompt_engineer.ipynb",
            "desc": "API 키 설정 후 셀을 순서대로 실행하여 ELO 테스트 수행",
            "step": "② 노트북 실행"
          }
        ],
        "exec_type": "🧪 프롬프트 ELO 벤치마크 노트북",
        "flow_steps": [
          {
            "icon": "📋",
            "label": "과제 + 테스트 케이스 입력",
            "detail": "입력값과 기대 결과 예시 정의"
          },
          {
            "icon": "⚡",
            "label": "다수 프롬프트 자동 생성",
            "detail": "후보 프롬프트 간 출력 비교 평가"
          },
          {
            "icon": "📈",
            "label": "ELO 랭킹 산출",
            "detail": "가장 점수가 높은 최적 프롬프트 도출"
          }
        ],
        "before_after": {
          "after": "실제 테스트 케이스 대비 ELO 점수로 검증된 최강 프롬프트 확보",
          "before": "감으로 프롬프트를 고쳐가며 성능이 좋아졌는지 나빠졌는지 모름"
        }
      },
      "stars_at_save": 9684,
      "major_category": "04_prompt-engineering",
      "install_or_usage": "저장소 클론 후 Jupyter Notebook 환경에서 실행 (OpenAI/Anthropic API 키 필요)"
    },
    {
      "id": 8,
      "memo": "사용자 공유: 2026-11-11 에이통(aitong.app) 유사 오픈소스로 검증. 에이통의 되묻기→구조화 프롬프트 흐름과 가장 가까움. 웹 UI·계정·결제 없이 Claude 안에서 도는 스킬.",
      "name": "Prompt Master",
      "repo": "nidhinjs/prompt-master",
      "slug": "prompt-master",
      "tags": [
        "prompt-engineering",
        "claude-skills",
        "claude-ai",
        "llm"
      ],
      "genre": "Claude Code 스킬",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "Markdown",
      "use_when": "아이디어가 막연할 때 AI가 역질문(되묻기)을 통해 요구사항을 구체화하고 30+ AI 도구에 맞는 고품질 구조화 프롬프트로 변환하고 싶을 때",
      "github_url": "https://github.com/nidhinjs/prompt-master",
      "saved_date": "2026-11-11",
      "description": "막연한 한 줄 요청을 되묻고 구조화된 프롬프트로 바꿔주는 Claude 스킬. 30개 이상 AI 도구용 프롬프트 작성.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 prompt-master",
            "desc": "Markdown 스킬 파일 확인",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "prompt-master 방식으로 나한테 먼저 역질문을 던져서 [원하는 작업]용 프롬프트를 완성해줘",
            "desc": "유료 웹앱(에이통) 없이 채팅 안에서 즉시 프롬프트 고도화",
            "step": "② 프롬프트 다듬기 요청"
          }
        ],
        "exec_type": "🪄 역질문 기반 프롬프트 구조화 스킬",
        "flow_steps": [
          {
            "icon": "💬",
            "label": "막연한 1줄 요청",
            "detail": "예: '블로그 자동화 앱 만들어줘'"
          },
          {
            "icon": "❓",
            "label": "핵심 역질문(되묻기)",
            "detail": "목표·대상·제약·출력 포맷 확인"
          },
          {
            "icon": "📐",
            "label": "30+ 도구용 프롬프트 출력",
            "detail": "바로 복붙 가능한 구조화 프롬프트 완성"
          }
        ],
        "before_after": {
          "after": "AI가 먼저 똑똑하게 되물어 한 번에 완벽한 구조화 프롬프트 생성",
          "before": "모호하게 질문해서 엉뚱한 결과물을 받고 5번 이상 수정 지시"
        }
      },
      "stars_at_save": 15816,
      "major_category": "01_claude-skills-plugins",
      "install_or_usage": "저장소 클론 후 Markdown 스킬 파일을 Claude 스킬/프로젝트 지침에 추가"
    },
    {
      "id": 9,
      "memo": "사용자 공유: 2026-11-11 에이통(aitong.app) 유사 오픈소스. 되묻기 흐름을 MCP 서버로 구현한 형태. 2025-11-08 생성, 커밋 8개, 초기 프로젝트라 실사용 전 동작 확인 필요.",
      "name": "MCP Prompt Optimizer",
      "repo": "grandinh/mcp-prompt-optimizer",
      "slug": "mcp-prompt-optimizer",
      "tags": [
        "mcp",
        "prompt-optimizer",
        "typescript",
        "claude-code"
      ],
      "genre": "MCP / 프롬프트 최적화",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "TypeScript",
      "use_when": "MCP 클라이언트 안에서 사용자 프롬프트의 명확도를 점수화하고 모호할 때 자동으로 보충 질문을 생성하는 OTA 워크플로우를 연결하고 싶을 때",
      "github_url": "https://github.com/grandinh/mcp-prompt-optimizer",
      "saved_date": "2026-11-11",
      "description": "명확도가 60% 미만이면 1~3개 질문을 만들어 프롬프트를 최적화하는 MCP 서버. OTA(Optimize-Then-Answer) 프레임워크.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 mcp-prompt-optimizer",
            "desc": "TypeScript 프로젝트 로컬 다운로드 (초기 프로젝트이므로 코드 확인 권장)",
            "step": "① 클론 및 빌드"
          },
          {
            "cmd": "npm install && npm run build",
            "desc": "빌드 후 mcp_config.json에 node dist/index.js 연결",
            "step": "② MCP 등록"
          }
        ],
        "exec_type": "🔌 OTA(Optimize-Then-Answer) MCP 서버",
        "flow_steps": [
          {
            "icon": "📊",
            "label": "명확도 점수 측정",
            "detail": "입력 프롬프트의 구체성 평가"
          },
          {
            "icon": "❔",
            "label": "60% 미만 시 보충 질문",
            "detail": "1~3개 핵심 질문 자동 생성"
          },
          {
            "icon": "✅",
            "label": "최적화된 프롬프트로 실행",
            "detail": "MCP 클라이언트에서 고품질 답변 도출"
          }
        ],
        "before_after": {
          "after": "명확도 60% 미만이면 자동으로 1~3개 질문을 거쳐 정확도 향상",
          "before": "프롬프트가 모호해도 AI가 넘겨짚고 바로 코드를 짜버림"
        }
      },
      "stars_at_save": 0,
      "major_category": "03_mcp-servers",
      "install_or_usage": "저장소 클론 후 TypeScript 빌드 및 MCP 클라이언트 설정에 등록 (초기 프로젝트로 동작 검증 필요)"
    },
    {
      "id": 10,
      "memo": "사용자가 2026-11-10 공유한 인스타 캐러셀(@promppy_com) — 웹사이트를 데스크톱 앱으로 바꾸는 도구, 2026-11-11 서재에 34번째 항목으로 추가.",
      "name": "Pake",
      "repo": "tw93/Pake",
      "slug": "pake",
      "tags": [
        "Pake",
        "Tauri",
        "Rust",
        "데스크톱 앱",
        "웹사이트 변환"
      ],
      "genre": "데스크톱 앱 / 웹사이트 변환",
      "status": "보고 싶음",
      "license": "GPL-3.0",
      "language": "",
      "use_when": "자주 쓰는 웹서비스나 자체 만든 웹앱(예: localhost나 SaaS)을 Electron보다 훨씬 가벼운 Tauri 기반 Windows/Mac 네이티브 데스크톱 앱으로 감싸고 싶을 때",
      "github_url": "https://github.com/tw93/Pake",
      "saved_date": "2026-11-11",
      "description": "웹사이트를 한 번의 명령어로 가벼운 데스크톱 앱으로 변환하는 도구 (Rust + Tauri, 시스템 WebView). Windows·macOS·Linux 지원.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "npm install -g pake-cli",
            "desc": "Rust 및 빌드 도구 준비 후 전역 CLI 설치",
            "step": "① CLI 설치"
          },
          {
            "cmd": "pake https://opensource-skills-library.vercel.app --name SkillsLibrary",
            "desc": "원하는 웹사이트를 데스크톱 앱 실행 파일로 즉시 빌드",
            "step": "② 원클릭 앱 변환"
          }
        ],
        "exec_type": "📦 웹사이트 → 네이티브 앱 변환 CLI",
        "flow_steps": [
          {
            "icon": "🌐",
            "label": "웹사이트 URL 입력",
            "detail": "SaaS·노션·내 웹앱 주소 지정"
          },
          {
            "icon": "🦀",
            "label": "Rust + Tauri 패키징",
            "detail": "OS 내장 WebView로 초경량 빌드"
          },
          {
            "icon": "🖥️",
            "label": "독립 실행 앱 설치",
            "detail": "Windows(.exe/.msi), Mac(.dmg) 완성"
          }
        ],
        "before_after": {
          "after": "명령어 한 줄로 수 MB 수준의 가벼운 독립 데스크톱 앱으로 변환",
          "before": "브라우저 탭 수십 개 속에 웹앱이 묻히거나 무거운 Electron 앱 사용"
        }
      },
      "stars_at_save": 63185,
      "major_category": "07_app-builders-dev-tools",
      "install_or_usage": "README 안내에 따라 CLI(`pake <url>`) 또는 저장소 클론을 통해 데스크톱 앱 패키징"
    },
    {
      "id": 11,
      "memo": "사용자가 공유한 인스타 캐러셀(@prompt_what, 2026-11-07) — X 디자인 총괄 Benji Taylor의 무료 UI 스킬.",
      "name": "Stageshow",
      "repo": "benjitaylor/skills",
      "slug": "stageshow",
      "tags": [
        "Claude Code",
        "Codex",
        "UI",
        "디자인",
        "데모"
      ],
      "genre": "Claude Code 스킬",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "프론트엔드 UI 구현 후 에이전트가 스스로 데모 영상을 녹화·검증해 시각적 어설픔과 인터랙션 결함을 자가 수정하게 만들고 싶을 때",
      "github_url": "https://github.com/benjitaylor/skills",
      "saved_date": "2026-11-08",
      "description": "AI가 만든 제품 UI의 어설픔을 잡고, 완성된 데모를 영상으로 찍어 스스로 고치는 자기검증 스킬",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 stageshow",
            "desc": "X 디자인 총괄 Benji Taylor의 UI 스킬 세트 다운로드",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "stageshow 스킬처럼 실제 화면 동작을 촬영·검증하면서 어색한 UI를 스스로 다듬어줘",
            "desc": "프론트엔드 완성도를 한 단계 끌어올릴 때 호출",
            "step": "② 자기검증 요청"
          }
        ],
        "exec_type": "🎥 UI 자기검증 & 데모 수정 스킬",
        "flow_steps": [
          {
            "icon": "🖥️",
            "label": "구현된 웹 UI 실행",
            "detail": "브라우저에서 실제 화면 렌더링"
          },
          {
            "icon": "📹",
            "label": "데모 영상/동작 촬영",
            "detail": "에이전트가 클릭·스크롤하며 화면 녹화"
          },
          {
            "icon": "🔧",
            "label": "시각 결함 자가 수정",
            "detail": "어색한 레이아웃·애니메이션 직접 고침"
          }
        ],
        "before_after": {
          "after": "스스로 데모 영상을 찍어 눈으로 확인하고 어설픈 UI를 직접 수정",
          "before": "에이전트가 코드만 짜고 실제 화면이 깨졌는지 확인을 안 함"
        }
      },
      "stars_at_save": 2254,
      "major_category": "01_claude-skills-plugins",
      "install_or_usage": "저장소 클론 후 `benjitaylor/skills` README에 따라 Claude Code/Codex 스킬 설치"
    },
    {
      "id": 12,
      "memo": "사용자가 공유한 깃허브 링크(2026-11-07) — 2026-11-13 확인 결과 저장소 404 (삭제 또는 비공개 전환됨). 참고 기록용으로 보관 상태 유지.",
      "name": "CRAFT",
      "repo": "Yfacine/CRAFT",
      "slug": "craft",
      "tags": [
        "Codex",
        "Windows",
        "복제품",
        "CAD",
        "소방설비"
      ],
      "genre": "AI 에이전트 / 코딩 에이전트",
      "status": "보관",
      "license": "MIT",
      "language": "",
      "use_when": "보관 항목: 현재 GitHub 저장소 404/비공개 상태로, 기존 업무흐름 분석·대체품 제작 컨셉 참고용으로만 확인",
      "github_url": "https://github.com/Yfacine/CRAFT",
      "saved_date": "2026-11-07",
      "description": "상용 프로그램의 업무 흐름을 분석하고, 실제 사용 환경에서 대체할 수 있는 복제품을 만드는 작업공간",
      "visual_guide": {
        "commands": [
          {
            "cmd": "# 현재 GitHub 저장소 404 (보관 상태)",
            "desc": "대신 Replica(replica-skill) 또는 BAWA(bawa)를 추천합니다.",
            "step": "① 상태 안내"
          }
        ],
        "exec_type": "🗄️ 보관됨 (참고용 레퍼런스)",
        "flow_steps": [
          {
            "icon": "🔍",
            "label": "상용 소프트웨어 분석",
            "detail": "기존 업무 흐름·단축키·화면 파악"
          },
          {
            "icon": "🧱",
            "label": "워크스페이스 재설계",
            "detail": "사용 환경에 맞는 구조 도출"
          },
          {
            "icon": "⚠️",
            "label": "현재 404/비공개 전환",
            "detail": "Replica 또는 BAWA로 대체 권장"
          }
        ],
        "before_after": {
          "after": "대체재인 #39 Replica 또는 #13 BAWA로 동일한 목적 달성 가능",
          "before": "원본 저장소 링크가 삭제 또는 비공개로 전환되어 클론 불가"
        }
      },
      "stars_at_save": 6,
      "major_category": "02_ai-agents-infra",
      "install_or_usage": "현재 저장소 접근 불가(404/비공개). 대안으로 Replica(`replica-skill`) 또는 BAWA(`bawa`) 참고"
    },
    {
      "id": 13,
      "memo": "BAMA의 윈도우용 대안 — 주력 윈도우 머신에서 쓸 수 있어 BAMA보다 실용적. Windows 11 필요.",
      "name": "BAWA (Build Any Windows App)",
      "repo": "daveebbelaar/bawa",
      "slug": "bawa",
      "tags": [
        "BAWA",
        "BAMA",
        "Claude Code",
        "윈도우 앱",
        "WinUI 3",
        "C#"
      ],
      "genre": "Claude Code 플러그인 / 윈도우 앱 빌더",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "Windows 11 환경에서 웹앱이 아닌 C# + WinUI 3 네이티브 윈도우 데스크톱 앱을 단계별 스토리 검증과 스냅샷 확인을 거쳐 만들고 싶을 때",
      "github_url": "https://github.com/daveebbelaar/bawa",
      "saved_date": "2026-11-07",
      "description": "말로 시키면 C# + WinUI 3 네이티브 윈도우 앱을 만들어 작업 표시줄에 올려 주는 Claude Code 플러그인. BAMA의 윈도우용 형제 프로젝트. 스킬 22개가 마음에 드는 앱 화면 촬영(클론)→사용자 스토리→한 스토리씩 커밋하며 빌드, 커밋 전 라이트/다크 모드 스냅샷 확인.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 bawa",
            "desc": "Windows 11 + .NET/WinUI 3 환경 확인 후 클론",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "BAWA 플러그인 워크플로우대로 [원하는 앱 설명]을 C# WinUI 3 앱으로 스토리별 빌드해줘",
            "desc": "화면 클론→스토리→스냅샷 검증 사이클 실행",
            "step": "② 플러그인 활용"
          }
        ],
        "exec_type": "🪟 Windows 네이티브 앱 빌더 플러그인 (22스킬)",
        "flow_steps": [
          {
            "icon": "📸",
            "label": "참고 앱 촬영 & 스토리",
            "detail": "클론할 앱 화면 분석 → 사용자 스토리 작성"
          },
          {
            "icon": "⚙️",
            "label": "C# + WinUI 3 빌드",
            "detail": "스토리 1개씩 순차 구현 및 커밋"
          },
          {
            "icon": "🌗",
            "label": "스냅샷 검증 & 작업표시줄",
            "detail": "라이트/다크 모드 확인 후 네이티브 앱 완성"
          }
        ],
        "before_after": {
          "after": "말로 지시하면 스토리 단위로 스냅샷까지 검증하며 네이티브 윈도우 앱 완성",
          "before": "윈도우에서 웹 기반 래퍼가 아닌 진짜 WinUI 3 C# 앱을 짜기 번거로움"
        }
      },
      "stars_at_save": 14,
      "major_category": "01_claude-skills-plugins",
      "install_or_usage": "저장소 클론 후 README 가이드에 따라 Claude Code 플러그인 설치 (Windows 11 및 .NET/WinUI 3 SDK 필요)"
    },
    {
      "id": 14,
      "memo": "사용자가 2026-11-07 서재에 직접 추가 요청한 저장소. 언어 처리(읽기·추출·명명·판단·SQL 작성)를 MCP 클라이언트 쪽 LLM에 맡겨 별도 API 키가 필요 없음.",
      "name": "auto-ontology-mcp",
      "repo": "gogoymh/auto-ontology-mcp",
      "slug": "auto-ontology-mcp",
      "tags": [
        "auto-ontology-mcp",
        "MCP",
        "온톨로지",
        "text-to-SQL",
        "지식베이스",
        "NVIDIA",
        "Obsidian"
      ],
      "genre": "MCP / 데이터 · 지식베이스",
      "status": "보고 싶음",
      "license": "Apache-2.0",
      "language": "",
      "use_when": "정확한 조인/SQL 검증이 필요한 Text-to-SQL DB 질의나 영수증·논문·노트를 온톨로지 지식 그래프로 구조화해 Obsidian vault와 연동하고 싶을 때",
      "github_url": "https://github.com/gogoymh/auto-ontology-mcp",
      "saved_date": "2026-11-07",
      "description": "NVIDIA Auto Ontology의 시맨틱 레이어를 Claude, ChatGPT 등 MCP 클라이언트용 MCP 서버로 가져온 프로젝트. LLM API 키 불필요. 데이터베이스 질문(온톨로지 기반 조인·SQL 검증) + 개인 지식베이스 유지(영수증·명세서·논문·책 노트를 사실·개념·출처와 함께 저장, Obsidian vault 내보내기) 기능 제공.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 auto-ontology-mcp",
            "desc": "별도 LLM API 키 없이 MCP 클라이언트가 추론 담당",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "README 안내에 따라 mcp_config.json 에 auto-ontology-mcp 서버 등록",
            "desc": "DB 질의 및 Obsidian 지식베이스 도구 활성화",
            "step": "② MCP 클라이언트 연결"
          }
        ],
        "exec_type": "🔌 온톨로지 DB·지식베이스 MCP 서버",
        "flow_steps": [
          {
            "icon": "🗄️",
            "label": "DB/문서 연결",
            "detail": "DB 스키마·영수증·논문·노트 입력"
          },
          {
            "icon": "🕸️",
            "label": "시맨틱 온톨로지 매핑",
            "detail": "개념·관계·출처 추출 및 SQL 검증"
          },
          {
            "icon": "💎",
            "label": "정확한 SQL / Obsidian 내보내기",
            "detail": "조인 오류 없는 질의 및 지식그래프 축적"
          }
        ],
        "before_after": {
          "after": "온톨로지 계층으로 SQL을 검증하고 Obsidian Vault로 지식 자동 정리",
          "before": "Text-to-SQL 시 조인 키를 틀리거나 개인 문서·영수증이 흩어짐"
        }
      },
      "stars_at_save": 18,
      "major_category": "03_mcp-servers",
      "install_or_usage": "저장소 클론 후 README 안내에 따라 Claude Desktop / Claude Code / MCP 클라이언트 설정 등록"
    },
    {
      "id": 15,
      "memo": "사용자가 2026-10-08 공유한 @2_lazzzy 릴 — YAML 정의 Claude Code + Codex 팀 도구.",
      "name": "OpenRig",
      "repo": "mvschwarz/openrig",
      "slug": "openrig",
      "tags": [
        "OpenRig",
        "멀티 에이전트",
        "Claude Code",
        "Codex"
      ],
      "genre": "AI 에이전트 / 멀티 에이전트",
      "status": "보고 싶음",
      "license": "Apache-2.0",
      "language": "",
      "use_when": "Claude Code와 Codex 에이전트 역할을 YAML로 선언해 한 번에 팀으로 부팅하고 협업시키고 싶을 때",
      "github_url": "https://github.com/mvschwarz/openrig",
      "saved_date": "2026-11-06",
      "description": "에이전트 팀을 YAML로 정의해 한 명령으로 부팅하는 멀티 에이전트 하네스. Claude Code와 Codex를 같은 팀으로 관리.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 openrig",
            "desc": "YAML 팀 정의 예제 확인",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "openrig 설정 파일(YAML)에 Claude Code와 Codex 역할 분담을 작성해줘",
            "desc": "프로젝트 맞춤형 멀티에이전트 팀 구성",
            "step": "② 팀 설정 및 부팅"
          }
        ],
        "exec_type": "🤖 YAML 멀티에이전트 팀 하네스",
        "flow_steps": [
          {
            "icon": "📄",
            "label": "YAML로 팀 정의",
            "detail": "Claude Code·Codex 역할·권한 선언"
          },
          {
            "icon": "🚀",
            "label": "단일 명령 부팅",
            "detail": "여러 에이전트를 한 팀으로 동시 기동"
          },
          {
            "icon": "🤝",
            "label": "협업 작업 수행",
            "detail": "역할 분담 후 결과 통합"
          }
        ],
        "before_after": {
          "after": "YAML 파일 하나로 멀티 에이전트 팀을 선언하고 한 명령어로 동시 가동",
          "before": "Claude Code 터미널과 Codex 터미널을 따로 띄워 복사·붙여넣기로 협업"
        }
      },
      "stars_at_save": null,
      "major_category": "02_ai-agents-infra",
      "install_or_usage": "저장소 클론 후 README의 YAML 설정 및 부팅 커맨드 참고"
    },
    {
      "id": 16,
      "memo": "사용자가 2026-10-25 공유한 관심 프로젝트 — 전체 책 저장소는 미확인이고 Lesson 1만 담은 저장소만 확인됨.",
      "name": "Every Joule (Lesson 1만 확인)",
      "repo": "iamtechartist/every-joule-lesson1",
      "slug": "every-joule-lesson1",
      "tags": [
        "Every Joule",
        "물리",
        "인터랙티브 3D",
        "교육"
      ],
      "genre": "교육 / 인터랙티브 책",
      "status": "보고 싶음",
      "license": "미확인",
      "language": "",
      "use_when": "브라우저 기반 3D 인터랙티브 교육 콘텐츠(물리 시뮬레이션 웹 교재) 구현 레퍼런스가 필요할 때",
      "github_url": "https://github.com/iamtechartist/every-joule-lesson1",
      "saved_date": "2026-11-06",
      "description": "에너지 주제 인터랙티브 3D 물리 책 (스프링부터 발전소까지 10개 레슨, 브라우저에서 동작).",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 every-joule-lesson1",
            "desc": "Lesson 1 소스 다운로드 (참고: Lesson 1만 공개됨)",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "npx serve .",
            "desc": "브라우저에서 인터랙티브 3D 물리 레슨 체험 및 코드 분석",
            "step": "② 로컬 서버 실행"
          }
        ],
        "exec_type": "🌐 브라우저 인터랙티브 3D 웹 교재",
        "flow_steps": [
          {
            "icon": "⚡",
            "label": "물리 개념 선택",
            "detail": "에너지·스프링 인터랙티브 레슨"
          },
          {
            "icon": "🧊",
            "label": "3D 시뮬레이션 조작",
            "detail": "브라우저에서 직접 수치·힘 조작"
          },
          {
            "icon": "🎓",
            "label": "직관적 원리 체득",
            "detail": "WebGL/3D 교육 앱 구현 레퍼런스"
          }
        ],
        "before_after": {
          "after": "브라우저에서 직접 만지고 실험하는 3D 인터랙티브 교육 웹앱",
          "before": "딱딱한 수식과 텍스트로만 구성된 온라인 물리/과학 학습 자료"
        }
      },
      "stars_at_save": null,
      "major_category": "08_domain-apps-collections",
      "install_or_usage": "저장소 클론 후 정적 웹/로컬 서버로 브라우저에서 실행"
    },
    {
      "id": 17,
      "memo": "사용자가 2026-10-03 공유한 @reborn.ax 릴에 나온 AI 개발 도구.",
      "name": "OpenMontage",
      "repo": "OpenMontageInc/OpenMontage",
      "slug": "openmontage",
      "tags": [
        "OpenMontage",
        "영상 제작",
        "AI 에이전트"
      ],
      "genre": "영상 제작 / AI 에이전트",
      "status": "보고 싶음",
      "license": "AGPL-3.0",
      "language": "",
      "use_when": "단순 스톡 숏폼을 넘어 리서치·대본·소재 수집·편집·렌더링까지 12단계 파이프라인으로 코딩 에이전트 기반 장편/기획 영상을 제작하고 싶을 때",
      "github_url": "https://github.com/OpenMontageInc/OpenMontage",
      "saved_date": "2026-11-06",
      "description": "AI 코딩 어시스턴트를 영상 제작 스튜디오로 바꾸는 에이전트형 영상 제작 시스템. 12개 파이프라인, 리서치·대본·소재·편집·렌더까지.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 openmontage",
            "desc": "12개 파이프라인 코드 및 가이드 확인",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "OpenMontage README의 파이프라인 단계별로 [영상 주제] 제작 환경을 세팅해줘",
            "desc": "에이전트형 영상 스튜디오 구동",
            "step": "② 파이프라인 실행"
          }
        ],
        "exec_type": "🎬 12단계 에이전트 영상 제작 스튜디오",
        "flow_steps": [
          {
            "icon": "🔍",
            "label": "리서치 & 대본 기획",
            "detail": "주제 조사 → 구조화된 대본 작성"
          },
          {
            "icon": "🎞️",
            "label": "소재·음성·타임라인 조립",
            "detail": "12개 파이프라인 에이전트가 소재 배치"
          },
          {
            "icon": "🎥",
            "label": "최종 영상 렌더링",
            "detail": "코딩 어시스턴트가 완성 영상 출력"
          }
        ],
        "before_after": {
          "after": "리서치부터 편집·렌더링까지 12개 파이프라인을 거친 체계적 영상 제작",
          "before": "단순 스톡 이미지·자막만 붙이는 단발성 숏폼 스크립트"
        }
      },
      "stars_at_save": null,
      "major_category": "06_media-video",
      "install_or_usage": "저장소 클론 후 README 파이프라인 및 의존성 설치 가이드 참고"
    },
    {
      "id": 18,
      "memo": "2026-10-28 @ai.yeongseon AI 보안 도구 소개글 2번 — 본인 소유·허가받은 대상 서버 점검 전용. 동명의 `nuclide-research/aimap`과는 다른 프로젝트.",
      "name": "AIMap",
      "repo": "BishopFox/aimap",
      "slug": "aimap",
      "tags": [
        "AIMap",
        "AI 서버 보안",
        "Shodan",
        "MCP",
        "Ollama"
      ],
      "genre": "AI 보안",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "본인이 운영하거나 인가받은 인프라에서 MCP, Ollama, vLLM 등 AI 서버가 인증 없이 외부에 노출되지 않았는지 보안 점검할 때",
      "github_url": "https://github.com/BishopFox/aimap",
      "saved_date": "2026-11-06",
      "description": "인터넷에 비밀번호 없이 노출된 AI 서버(MCP·Ollama·vLLM 등)를 Shodan으로 찾아 지문·위험 점수·보안 테스트를 하는 플랫폼.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 aimap",
            "desc": "BishopFox 공식 저장소 다운로드 (본인/인가 서버 전용)",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "AIMap README 기준으로 내가 운영하는 서버의 Ollama/MCP 노출 여부를 점검하는 방법을 알려줘",
            "desc": "허가된 본인 자산 점검용으로만 활용",
            "step": "② 점검 실행"
          }
        ],
        "exec_type": "🛡️ 노출 AI 서버 보안 점검 플랫폼",
        "flow_steps": [
          {
            "icon": "🛰️",
            "label": "인프라/서버 스캔",
            "detail": "본인·인가 자산의 MCP·Ollama·vLLM 탐지"
          },
          {
            "icon": "🧬",
            "label": "지문·설정 분석",
            "detail": "비밀번호 미설정 및 모델 노출 확인"
          },
          {
            "icon": "📊",
            "label": "위험 점수 리포트",
            "detail": "보안 취약 노출 서버 차단 조치"
          }
        ],
        "before_after": {
          "after": "노출된 AI 엔드포인트를 지문 분석·점수화해 즉시 잠금 조치",
          "before": "로컬·클라우드에서 띄운 Ollama/MCP 포트가 인증 없이 외부에 열려있는지 모름"
        }
      },
      "stars_at_save": null,
      "major_category": "05_security-osint",
      "install_or_usage": "저장소 클론 후 README 참고 (인가된 본인 소유 서버 점검 목적에 한해 사용)"
    },
    {
      "id": 19,
      "memo": "2026-10-28 @ai.yeongseon AI 보안 도구 소개글 3번 — 인가받은 보안 연구용. 원작자 Katriel Moses의 저장소가 정식.",
      "name": "VoidAccess",
      "repo": "KatrielMoses/voidaccess",
      "slug": "voidaccess",
      "tags": [
        "VoidAccess",
        "OSINT",
        "다크웹",
        "보안 연구"
      ],
      "genre": "AI 보안 / OSINT",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "인가받은 위협 인텔리전스/보안 연구 환경에서 유출 정보 및 위협 관계 그래프를 셀프호스트로 분석하고 STIX/MISP로 내보내고 싶을 때",
      "github_url": "https://github.com/KatrielMoses/voidaccess",
      "saved_date": "2026-11-06",
      "description": "한 번의 질의로 다크웹·유출 로그인·지갑·다크웹 언급을 수집해 관계 그래프와 STIX/MISP 등으로 내보내는 셀프호스트 OSINT 플랫폼.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 voidaccess",
            "desc": "KatrielMoses 정식 저장소 다운로드 (인가된 보안 연구용)",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "VoidAccess README의 Docker/셀프호스트 구성을 확인하고 실행 방법을 정리해줘",
            "desc": "인가된 보안 연구 환경에서 구동",
            "step": "② 셀프호스트 배포"
          }
        ],
        "exec_type": "🕸️ 셀프호스트 OSINT 위협 분석 플랫폼",
        "flow_steps": [
          {
            "icon": "🔎",
            "label": "단일 질의 입력",
            "detail": "도메인·지갑·계정·키워드 조회"
          },
          {
            "icon": "🕸️",
            "label": "유출·위협 관계 그래프",
            "detail": "연관 데이터 수집 및 그래프 시각화"
          },
          {
            "icon": "📤",
            "label": "STIX / MISP 내보내기",
            "detail": "보안 관제 표준 포맷으로 추출"
          }
        ],
        "before_after": {
          "after": "셀프호스트 환경에서 한 번의 질의로 관계 그래프와 STIX/MISP 추출",
          "before": "유출 정보와 위협 인텔리전스를 여러 사이트에서 수동 검색하고 정리"
        }
      },
      "stars_at_save": null,
      "major_category": "05_security-osint",
      "install_or_usage": "저장소 클론 후 셀프호스트 배포 가이드(README) 참고"
    },
    {
      "id": 20,
      "memo": "2026-10-25 @jisik.chanel '모르면 손해보는 오픈소스 9가지' 9번.",
      "name": "DeepTutor",
      "repo": "HKUDS/DeepTutor",
      "slug": "deeptutor",
      "tags": [
        "DeepTutor",
        "AI 튜터",
        "교육"
      ],
      "genre": "교육 / AI 튜터",
      "status": "보고 싶음",
      "license": "Apache-2.0",
      "language": "",
      "use_when": "새로운 기술·학문을 체계적인 커리큘럼, 퀴즈, 시각화, 심화 리서치와 함께 AI 튜터에게 학습하고 싶을 때",
      "github_url": "https://github.com/HKUDS/DeepTutor",
      "saved_date": "2026-11-06",
      "description": "채팅 튜터링·퀴즈·리서치·시각화·마스터리 경로를 한 앱에 모은 에이전트 네이티브 평생 개인 튜터링 워크스페이스.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 deeptutor",
            "desc": "HKUDS/DeepTutor 로컬 다운로드",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "DeepTutor README에 맞춰 로컬 실행 환경을 구성하고 구동해줘",
            "desc": "개인 학습 대시보드 실행",
            "step": "② 워크스페이스 실행"
          }
        ],
        "exec_type": "🎓 에이전트 네이티브 개인 AI 튜터",
        "flow_steps": [
          {
            "icon": "📚",
            "label": "학습 주제·자료 입력",
            "detail": "공부할 영역·논문·문서 지정"
          },
          {
            "icon": "🧠",
            "label": "채팅·퀴즈·시각화 학습",
            "detail": "리서치 + 개념 시각화 + 확인 퀴즈"
          },
          {
            "icon": "🗺️",
            "label": "마스터리 경로 추적",
            "detail": "약점 보완 및 단계별 숙달 관리"
          }
        ],
        "before_after": {
          "after": "채팅·퀴즈·시각화·리서치가 하나로 통합된 평생 개인 튜터 워크스페이스",
          "before": "일반 챗봇에게 질문하면 맥락이 쌓이지 않고 퀴즈·진도 관리가 안 됨"
        }
      },
      "stars_at_save": null,
      "major_category": "08_domain-apps-collections",
      "install_or_usage": "저장소 클론 후 README의 설치 및 실행 명령어 참고"
    },
    {
      "id": 21,
      "memo": "2026-10-25 @jisik.chanel '모르면 손해보는 오픈소스 9가지' 8번 — 비공식 프로젝트(Anthropic과 무관), 무료 Claude 모델을 주는 것이 아니라 타 제공자/로컬 모델로 라우팅하는 프록시. 약관 확인 필요.",
      "name": "free-claude-code",
      "repo": "Alishahryar1/free-claude-code",
      "slug": "free-claude-code",
      "tags": [
        "free-claude-code",
        "Claude Code",
        "프록시",
        "비공식"
      ],
      "genre": "코딩 에이전트 / 프록시",
      "status": "보고 싶음",
      "license": "AGPL-3.0-only",
      "language": "",
      "use_when": "코딩 에이전트 CLI를 로컬 LLM(Ollama 등)이나 타사 API 제공자와 프록시 형태로 연결해 테스트하고 싶을 때 (이용 약관 주의)",
      "github_url": "https://github.com/Alishahryar1/free-claude-code",
      "saved_date": "2026-11-06",
      "description": "Claude Code 등 12개 코딩 에이전트를 Anthropic이 아닌 61개 제공자(무료 티어·로컬 포함) 모델로 연결하는 로컬 프록시·런처.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 free-claude-code",
            "desc": "프록시 런처 다운로드 (비공식 프로젝트로 약관 확인 필요)",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "free-claude-code README를 읽고 로컬 Ollama 모델과 연결하는 안전 설정을 알려줘",
            "desc": "로컬 LLM 연결 테스트용으로 활용",
            "step": "② 실행 가이드 확인"
          }
        ],
        "exec_type": "🔀 코딩 에이전트 다중 모델 프록시",
        "flow_steps": [
          {
            "icon": "💻",
            "label": "코딩 에이전트 CLI 요청",
            "detail": "Claude Code 등 12종 에이전트"
          },
          {
            "icon": "🔀",
            "label": "로컬 프록시 라우팅",
            "detail": "61개 외부 제공자·로컬 LLM으로 변환"
          },
          {
            "icon": "💬",
            "label": "호환 응답 반환",
            "detail": "무료 티어·로컬 모델로 에이전트 테스트"
          }
        ],
        "before_after": {
          "after": "프록시 런처를 통해 다양한 무료 티어 및 로컬 모델로 연결 테스트 (비공식 약관 주의)",
          "before": "코딩 에이전트 CLI를 로컬 Ollama나 다른 API 제공자에 붙여보기 어려움"
        }
      },
      "stars_at_save": null,
      "major_category": "02_ai-agents-infra",
      "install_or_usage": "저장소 클론 후 README 프록시 실행 및 환경 변수 설정 참고"
    },
    {
      "id": 22,
      "memo": "2026-10-28 @ai.yeongseon AI 보안 도구 소개글 1번 — 본인 정보 노출 점검 등 정당한 보안 연구/테스트 용도로만 활용.",
      "name": "Netryx (Astra V2)",
      "repo": "sparkyniner/Netryx-Astra-V2-Geolocation-Tool",
      "slug": "netryx-astra-v2",
      "tags": [
        "Netryx",
        "지오로케이션",
        "OSINT",
        "AI 보안"
      ],
      "genre": "AI 보안 / OSINT",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "공개 사진에 민감한 위치 정보(프라이버시 노출 여부)가 특정될 수 있는지 로컬 AI 지오로케이션으로 점검하거나 OSINT 위치 검증이 필요할 때",
      "github_url": "https://github.com/sparkyniner/Netryx-Astra-V2-Geolocation-Tool",
      "saved_date": "2026-11-06",
      "description": "사진 한 장을 스트리트뷰 파노라마와 대조해 정확한 GPS 좌표로 추적하는 로컬 우선 OSINT 지오로케이션 도구 (MegaLoc+MASt3R 파이프라인).",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 netryx-astra-v2",
            "desc": "Astra V2 최신 저장소 다운로드",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "Netryx Astra V2 README 기준으로 실행 환경과 GPU 요구사항을 확인해줘",
            "desc": "정당한 본인 정보 노출 점검/OSINT 연구에 사용",
            "step": "② 파이프라인 구성"
          }
        ],
        "exec_type": "📍 로컬 AI 지오로케이션 OSINT 도구",
        "flow_steps": [
          {
            "icon": "🖼️",
            "label": "사진 1장 입력",
            "detail": "위치 단서가 담긴 이미지 업로드"
          },
          {
            "icon": "🗺️",
            "label": "MegaLoc + MASt3R 대조",
            "detail": "스트리트뷰 파노라마와 3D 정밀 매칭"
          },
          {
            "icon": "📌",
            "label": "GPS 좌표 추정",
            "detail": "프라이버시 노출 점검 및 위치 특정"
          }
        ],
        "before_after": {
          "after": "로컬 파이프라인으로 사진 속 위치를 추적해 보안/프라이버시 노출 점검",
          "before": "SNS에 올린 사진에 집/직장 주변 위치 단서가 노출되는지 알기 어려움"
        }
      },
      "stars_at_save": null,
      "major_category": "05_security-osint",
      "install_or_usage": "저장소 클론 후 MegaLoc+MASt3R 의존성 설치(README 참고)"
    },
    {
      "id": 23,
      "memo": "2026-10-25 @jisik.chanel '모르면 손해보는 오픈소스 9가지' 7번 — 단, Spaces 앱은 FSL-1.1-MIT 소스 공개형.",
      "name": "cua",
      "repo": "trycua/cua",
      "slug": "cua",
      "tags": [
        "cua",
        "컴퓨터 사용 에이전트",
        "에이전트 인프라"
      ],
      "genre": "AI 에이전트 인프라",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "GUI 조작이 가능한 Computer-Use AI 에이전트를 격리된 로컬 VM이나 크로스 OS 데스크톱 환경에서 실행·벤치마크하고 싶을 때",
      "github_url": "https://github.com/trycua/cua",
      "saved_date": "2026-11-06",
      "description": "AI 에이전트에 쓸 컴퓨터를 주는 인프라. 크로스 OS 드라이버·클라우드 데스크톱 플릿·로컬 VM·벤치마크 모음.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 cua",
            "desc": "trycua/cua SDK 및 VM 드라이버 다운로드",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "cua SDK로 격리된 데스크톱 VM에서 GUI 에이전트를 돌리는 예제 코드를 작성해줘",
            "desc": "Python 기반 Computer-Use 에이전트 연동",
            "step": "② 에이전트 샌드박스 구축"
          }
        ],
        "exec_type": "🖥️ Computer-Use 에이전트 VM 인프라",
        "flow_steps": [
          {
            "icon": "📦",
            "label": "격리된 VM/데스크톱 생성",
            "detail": "macOS/Linux/Windows 가상 데스크톱"
          },
          {
            "icon": "🖱️",
            "label": "마우스·키보드 제어 SDK",
            "detail": "화면 캡처 → 클릭/타이핑 액션 실행"
          },
          {
            "icon": "📊",
            "label": "자동화 & 벤치마크",
            "detail": "내 PC를 망가뜨리지 않고 GUI 자동화"
          }
        ],
        "before_after": {
          "after": "크로스 OS 드라이버와 격리된 로컬 VM 위에서 안전하게 Computer-Use 실행",
          "before": "GUI 조작 AI 에이전트를 내 메인 PC에서 직접 돌리면 오작동 위험이 큼"
        }
      },
      "stars_at_save": null,
      "major_category": "02_ai-agents-infra",
      "install_or_usage": "저장소 클론 후 README SDK/VM 설정 가이드 참고"
    },
    {
      "id": 24,
      "memo": "2026-10-25 @jisik.chanel '모르면 손해보는 오픈소스 9가지' 5번 — 비공식 프로젝트라 서비스 약관 확인 필요. 라이선스명 직접 표기 미확인.",
      "name": "ds2api",
      "repo": "CJackHwang/ds2api",
      "slug": "ds2api",
      "tags": [
        "ds2api",
        "DeepSeek",
        "API",
        "비공식"
      ],
      "genre": "API / LLM 미들웨어",
      "status": "보고 싶음",
      "license": "미확인",
      "language": "Go",
      "use_when": "LLM API 호환 레이어나 Go 기반 API 어댑터/미들웨어 구조를 참고하거나 테스트할 때 (비공식 약관 주의)",
      "github_url": "https://github.com/CJackHwang/ds2api",
      "saved_date": "2026-11-06",
      "description": "DeepSeek 웹 채팅 기능을 OpenAI/Claude/Gemini 호환 API로 바꿔주는 Go 미들웨어.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 ds2api",
            "desc": "Go 소스 다운로드 (비공식 프로젝트이므로 약관 확인 필수)",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "ds2api의 OpenAI/Claude/Gemini API 변환 미들웨어 구조를 분석해줘",
            "desc": "API 어댑터 패턴 참고용",
            "step": "② 코드 구조 분석"
          }
        ],
        "exec_type": "🔌 Go 기반 LLM API 호환 미들웨어",
        "flow_steps": [
          {
            "icon": "📨",
            "label": "OpenAI/Claude 규격 요청",
            "detail": "표준 SDK 요청 수신"
          },
          {
            "icon": "⚙️",
            "label": "Go 미들웨어 어댑터",
            "detail": "DeepSeek 웹 포맷으로 프로토콜 변환"
          },
          {
            "icon": "🔄",
            "label": "표준 스트리밍 응답",
            "detail": "OpenAI/Claude/Gemini 호환 응답 출력"
          }
        ],
        "before_after": {
          "after": "Go 미들웨어 구조로 다양한 클라이언트 규격을 단일 어댑터로 중계 (비공식 약관 주의)",
          "before": "서비스마다 API 포맷이 달라 기존 OpenAI/Claude 툴과 호환 안 됨"
        }
      },
      "stars_at_save": null,
      "major_category": "02_ai-agents-infra",
      "install_or_usage": "저장소 클론 후 Go 빌드 및 README 설정 참고"
    },
    {
      "id": 25,
      "memo": "2026-10-25 @jisik.chanel '모르면 손해보는 오픈소스 9가지' 2번 — Enterprise판은 별도 유료.",
      "name": "FinceptTerminal",
      "repo": "Fincept-Corporation/FinceptTerminal",
      "slug": "finceptterminal",
      "tags": [
        "FinceptTerminal",
        "금융 터미널",
        "트레이딩",
        "블룸버그 대안"
      ],
      "genre": "금융 / 트레이딩",
      "status": "보고 싶음",
      "license": "AGPL-3.0",
      "language": "C++",
      "use_when": "거시경제·주식·재무 데이터 분석 및 37개 금융 AI 에이전트를 로컬 데스크톱 터미널에서 활용하고 싶을 때",
      "github_url": "https://github.com/Fincept-Corporation/FinceptTerminal",
      "saved_date": "2026-11-06",
      "description": "블룸버그 스타일 무료 금융 터미널. CFA급 분석·100+ 데이터 커넥터·37개 AI 에이전트, C++20/Qt6 데스크톱 앱.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 finceptterminal",
            "desc": "GitHub Releases 바이너리 또는 빌드 가이드 확인",
            "step": "① Releases 설치 또는 클론"
          },
          {
            "cmd": "FinceptTerminal 최신 릴리스 설치 방법과 무료 데이터 커넥터 설정법을 알려줘",
            "desc": "로컬 금융 대시보드 세팅",
            "step": "② 실행 안내"
          }
        ],
        "exec_type": "📈 C++20/Qt6 오픈소스 금융 터미널",
        "flow_steps": [
          {
            "icon": "🌐",
            "label": "100+ 금융 데이터 연결",
            "detail": "거시지표·주가·재무제표 실시간 수집"
          },
          {
            "icon": "🤖",
            "label": "37개 금융 AI 에이전트",
            "detail": "CFA급 재무 분석·밸류에이션 수행"
          },
          {
            "icon": "🖥️",
            "label": "블룸버그형 데스크톱 GUI",
            "detail": "멀티 패널 차트 & 터미널 뷰 제공"
          }
        ],
        "before_after": {
          "after": "100+ 커넥터와 37개 AI 에이전트가 탑재된 무료 Qt6 금융 터미널 활용",
          "before": "연 수천만 원대 유료 금융 터미널 없이는 통합 분석 환경 구축이 어려움"
        }
      },
      "stars_at_save": null,
      "major_category": "08_domain-apps-collections",
      "install_or_usage": "저장소 클론 또는 Releases 페이지에서 바이너리/빌드 가이드 확인"
    },
    {
      "id": 26,
      "memo": "2026-10-25 @jisik.chanel '모르면 손해보는 오픈소스 9가지' 6번.",
      "name": "LiteRT-LM",
      "repo": "google-ai-edge/LiteRT-LM",
      "slug": "litert-lm",
      "tags": [
        "LiteRT-LM",
        "온디바이스 LLM",
        "Gemma",
        "Google"
      ],
      "genre": "온디바이스 AI",
      "status": "보고 싶음",
      "license": "Apache-2.0",
      "language": "",
      "use_when": "클라우드 비용이나 네트워크 없이 모바일·데스크톱·엣지 기기에서 Gemma 등 경량 LLM을 GPU/NPU 가속으로 직접 구동하는 앱을 개발할 때",
      "github_url": "https://github.com/google-ai-edge/LiteRT-LM",
      "saved_date": "2026-11-06",
      "description": "Google의 온디바이스 LLM 실행 오케스트레이션 레이어. Gemma 등 소형 모델을 Android/iOS/데스크톱/IoT에서 GPU/NPU 가속으로 실행.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 litert-lm",
            "desc": "google-ai-edge/LiteRT-LM 다운로드",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "LiteRT-LM으로 Windows 또는 Android 앱에 Gemma 모델을 온디바이스로 붙이는 방법을 안내해줘",
            "desc": "온디바이스 AI 앱 개발 시 활용",
            "step": "② 플랫폼 연동"
          }
        ],
        "exec_type": "📱 Google 온디바이스 LLM 런타임",
        "flow_steps": [
          {
            "icon": "🧠",
            "label": "소형 LLM(Gemma 등) 탑재",
            "detail": "양자화된 온디바이스 모델 준비"
          },
          {
            "icon": "⚡",
            "label": "GPU / NPU 하드웨어 가속",
            "detail": "LiteRT 오케스트레이션 레이어 구동"
          },
          {
            "icon": "📵",
            "label": "오프라인·무료 추론",
            "detail": "Android·iOS·Desktop·IoT에서 직접 실행"
          }
        ],
        "before_after": {
          "after": "사용자 기기의 GPU/NPU에서 오프라인으로 빠르게 소형 LLM 직접 실행",
          "before": "작은 기능 하나에도 매번 클라우드 LLM API 과금과 네트워크 지연 발생"
        }
      },
      "stars_at_save": null,
      "major_category": "07_app-builders-dev-tools",
      "install_or_usage": "저장소 클론 후 플랫폼별(Android/iOS/Desktop) 빌드 및 런타임 가이드 참고"
    },
    {
      "id": 27,
      "memo": "2026-10-25 @jisik.chanel '모르면 손해보는 오픈소스 9가지' 4번 — 원본 siddharthvaddem/openscreen은 v1.5.0 이후 아카이브됐고 현재 개발은 getopenscreen/openscreen에서 계속됨.",
      "name": "openscreen",
      "repo": "getopenscreen/openscreen",
      "slug": "openscreen",
      "tags": [
        "openscreen",
        "데모 영상",
        "화면 녹화"
      ],
      "genre": "영상 / 화면 녹화",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "만든 앱이나 서비스의 제품 소개·시연 데모 영상을 Screen Studio처럼 커서 자동 줌과 깔끔한 자막/주석으로 무료 제작하고 싶을 때",
      "github_url": "https://github.com/getopenscreen/openscreen",
      "saved_date": "2026-11-06",
      "description": "화면 녹화 후 커서를 따라 자동 줌·자막·주석을 넣어 데모 영상을 완성하는 무료 데스크톱 앱.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 openscreen",
            "desc": "Releases 설치 파일 또는 소스 확인 (getopenscreen/openscreen)",
            "step": "① 앱 다운로드 / 클론"
          },
          {
            "cmd": "openscreen으로 내가 만든 웹앱 데모 영상을 찍고 자동 줌·자막을 넣는 워크플로우를 알려줘",
            "desc": "포트폴리오/공모전/런칭 시연 영상 제작",
            "step": "② 데모 제작"
          }
        ],
        "exec_type": "🎥 커서 자동 줌 데모 영상 앱",
        "flow_steps": [
          {
            "icon": "🔴",
            "label": "앱 화면 녹화",
            "detail": "마우스 이동·클릭 좌표 함께 기록"
          },
          {
            "icon": "🔍",
            "label": "자동 줌 & 자막/주석",
            "detail": "클릭 지점 부드러운 확대 + 강조 표시"
          },
          {
            "icon": "🎬",
            "label": "제품 데모 영상 출력",
            "detail": "유료 Screen Studio 수준의 시연 영상 완성"
          }
        ],
        "before_after": {
          "after": "무료 오픈소스 데스크톱 앱으로 커서를 따라가는 프로급 제품 시연 영상 제작",
          "before": "유료 Screen Studio 없이는 밋밋한 화면 녹화 영상만 나오고 편집이 번거로움"
        }
      },
      "stars_at_save": null,
      "major_category": "06_media-video",
      "install_or_usage": "GitHub Releases 설치 또는 저장소 클론 후 로컬 실행"
    },
    {
      "id": 28,
      "memo": "2026-10-25 @jisik.chanel '모르면 손해보는 오픈소스 9가지' 3번 — 저장소가 아카이브되어 더 이상 유지보수 안 함('ML Intern has now moved to the HuggingChat repo' 안내).",
      "name": "ml-intern",
      "repo": "huggingface/ml-intern",
      "slug": "ml-intern",
      "tags": [
        "ml-intern",
        "ML 에이전트",
        "Hugging Face",
        "아카이브됨"
      ],
      "genre": "AI 에이전트 / ML",
      "status": "보관",
      "license": "Apache-2.0",
      "language": "",
      "use_when": "보관 항목: 자율 ML 실험 에이전트 아키텍처 레퍼런스 참고용 (후속 기능은 HuggingChat 저장소로 통합됨)",
      "github_url": "https://github.com/huggingface/ml-intern",
      "saved_date": "2026-11-06",
      "description": "논문 읽기·데이터셋 탐색·코드 작성·실험·배포까지 해주는 Hugging Face 자율 ML 엔지니어 에이전트.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 ml-intern",
            "desc": "아카이브된 저장소 코드 구조 열람",
            "step": "① 구조 참고용 클론"
          }
        ],
        "exec_type": "🗄️ 보관됨 (HuggingFace 자율 ML 레퍼런스)",
        "flow_steps": [
          {
            "icon": "📄",
            "label": "논문·데이터셋 탐색",
            "detail": "과제 분석 및 베이스라인 조사"
          },
          {
            "icon": "🧪",
            "label": "실험 코드 작성·튜닝",
            "detail": "자율 학습 루프 및 메트릭 평가"
          },
          {
            "icon": "⚠️",
            "label": "아카이브 (HuggingChat 이관)",
            "detail": "자율 ML 에이전트 구조 참고용"
          }
        ],
        "before_after": {
          "after": "자율 ML 실험 에이전트 아키텍처 참고 자료로 보관",
          "before": "별도 유지보수 중단(아카이브)으로 현행 실행 비권장"
        }
      },
      "stars_at_save": null,
      "major_category": "02_ai-agents-infra",
      "install_or_usage": "아카이브됨. 구조 참고 시 저장소 클론 후 README 확인"
    },
    {
      "id": 29,
      "memo": "2026-10-25 @jisik.chanel '모르면 손해보는 오픈소스 9가지' 1번 — 조직명이 AIDC-AI에서 ATH-MaaS로 변경됨.",
      "name": "Pixelle-Video",
      "repo": "ATH-MaaS/Pixelle-Video",
      "slug": "pixelle-video",
      "tags": [
        "Pixelle-Video",
        "숏폼",
        "영상 자동 생성",
        "AI 비디오"
      ],
      "genre": "영상 생성 / AI 비디오",
      "status": "보고 싶음",
      "license": "Apache-2.0",
      "language": "",
      "use_when": "스톡 영상 대신 AI 생성 이미지/비디오·TTS·BGM을 조합해 주제만으로 완성형 숏폼 영상을 자동 생성하고 싶을 때",
      "github_url": "https://github.com/ATH-MaaS/Pixelle-Video",
      "saved_date": "2026-11-06",
      "description": "주제만 입력하면 대본·AI 이미지/영상·음성·BGM까지 자동 생성해 숏폼을 완성하는 도구.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 pixelle-video",
            "desc": "ATH-MaaS/Pixelle-Video 최신 주소로 다운로드",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "Pixelle-Video README 기준으로 필요한 API 키와 로컬 실행 방법을 정리해줘",
            "desc": "영상 자동 생성 파이프라인 구축",
            "step": "② 실행 세팅"
          }
        ],
        "exec_type": "🎬 AI 이미지/비디오 기반 숏폼 생성기",
        "flow_steps": [
          {
            "icon": "✍️",
            "label": "주제 입력",
            "detail": "원하는 스토리/정보 주제 입력"
          },
          {
            "icon": "🎨",
            "label": "대본 + AI 이미지/영상 생성",
            "detail": "장면별 AI 비주얼·음성·BGM 합성"
          },
          {
            "icon": "📱",
            "label": "완성형 숏폼 출력",
            "detail": "유튜브 쇼츠/릴스 규격 영상 생성"
          }
        ],
        "before_after": {
          "after": "AI 이미지/비디오 생성 파이프라인으로 대본에 딱 맞는 비주얼 숏폼 제작",
          "before": "기존 스톡 영상 위주 생성기는 내용과 100% 맞는 장면 연출이 어려움"
        }
      },
      "stars_at_save": null,
      "major_category": "06_media-video",
      "install_or_usage": "저장소 클론 후 README 설치 가이드 참고"
    },
    {
      "id": 30,
      "memo": "사용자가 2026-11-05 공유한 AI 에이전트 시각화 도구 글(@vibebusiness0928) 2번 화면과 가장 가까운 저장소. `geezerrrr/agent-town`과 구분 필요.",
      "name": "agentcity",
      "repo": "YehudaLevi/agentcity",
      "slug": "agentcity",
      "tags": [
        "agentcity",
        "AgentTown",
        "에이전트 시각화",
        "심시티"
      ],
      "genre": "에이전트 시각화",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "AI 에이전트가 탐색·수정하는 코드 저장소(폴더=구역, 파일=건물)를 밤의 심시티 도시 형태로 시각화해 모니터링하고 싶을 때",
      "github_url": "https://github.com/YehudaLevi/agentcity",
      "saved_date": "2026-11-06",
      "description": "심시티형 에이전트 시각화. 레포=건물·작업 종류=구역 콘셉트로, 파일→건물·폴더→구역으로 도시를 그려 에이전트 작업을 한눈에 보여줌.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 agentcity",
            "desc": "YehudaLevi/agentcity 다운로드",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "agentcity README에 따라 내 프로젝트 폴더를 도시 뷰로 띄워줘",
            "desc": "대규모 프로젝트 작업 구역 시각화",
            "step": "② 시각화 실행"
          }
        ],
        "exec_type": "🏙️ 심시티형 에이전트 작업 시각화",
        "flow_steps": [
          {
            "icon": "📁",
            "label": "레포지토리 구조 인식",
            "detail": "폴더=구역, 파일=건물 매핑"
          },
          {
            "icon": "🌃",
            "label": "심시티 스타일 도시 렌더링",
            "detail": "밤의 도시 위에서 에이전트 활동 표시"
          },
          {
            "icon": "👀",
            "label": "작업 구역 한눈에 관제",
            "detail": "어느 모듈을 수정 중인지 직관적 파악"
          }
        ],
        "before_after": {
          "after": "폴더를 구역으로, 파일을 건물로 그린 심시티 도시 위에서 실시간 관제",
          "before": "에이전트가 어떤 폴더와 파일을 건드리는지 로그 텍스트로만 확인"
        }
      },
      "stars_at_save": 1,
      "major_category": "02_ai-agents-infra",
      "install_or_usage": "저장소 클론 후 README 실행 가이드 참고"
    },
    {
      "id": 31,
      "memo": "사용자가 2026-10-19(@rammcodes_)와 2026-11-04(@ddalkkaklab) 두 차례 공유한 동일 프로젝트 — 로컬 실행은 Git + Node.js 22.12+ 필요.",
      "name": "HeyPuter/everything",
      "repo": "HeyPuter/everything",
      "slug": "everything",
      "tags": [
        "everything",
        "오픈소스 대안",
        "유료 앱 대체"
      ],
      "genre": "오픈소스 모음",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "유료 SaaS/데스크톱 툴을 대체할 가벼운 오픈소스 웹앱 51종을 한곳에서 찾아 바로 브라우저로 쓰거나 커스텀해 쓰고 싶을 때",
      "github_url": "https://github.com/HeyPuter/everything",
      "saved_date": "2026-11-06",
      "description": "유료 앱들의 무료 오픈소스판 51개 모음. 9개 분야, 브라우저 'Try it' 링크로 바로 사용 가능.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 everything",
            "desc": "HeyPuter/everything 51개 앱 목록 확인",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "Node.js 22.12+ 환경에서 everything 저장소를 실행해 51개 오픈소스 대안 앱을 띄워줘",
            "desc": "필요한 앱만 골라서 셀프호스팅",
            "step": "② 로컬 실행"
          }
        ],
        "exec_type": "🧰 유료 앱 대체 오픈소스 51선 모음",
        "flow_steps": [
          {
            "icon": "🔍",
            "label": "9개 분야 카탈로그 탐색",
            "detail": "대체하고 싶은 유료 상용 앱 선택"
          },
          {
            "icon": "🌐",
            "label": "Try it 브라우저 즉시 실행",
            "detail": "설치 없이 웹에서 바로 사용"
          },
          {
            "icon": "🛠️",
            "label": "로컬 셀프호스트 / 커스텀",
            "detail": "Node.js 22.12+로 내 서버에 띄우기"
          }
        ],
        "before_after": {
          "after": "51개 오픈소스 대안 앱을 브라우저에서 무료로 바로 쓰거나 내 입맛대로 개조",
          "before": "간단한 유틸리티·생산성 툴마다 월 구독료를 내거나 광고 사이트 이용"
        }
      },
      "stars_at_save": 7103,
      "major_category": "08_domain-apps-collections",
      "install_or_usage": "브라우저 Try it 링크 또는 저장소 클론 후 Node.js 22.12+로 로컬 실행"
    },
    {
      "id": 32,
      "memo": "사용자가 2026-11-03 공유한 @claudical_official 릴 — macOS 26 이상·Xcode 26 이상 필요, 주력 윈도우에서는 못 쓰고 맥북 에어 M1 등 맥 환경에서만 가능. 윈도우용 대안은 BAWA.",
      "name": "BAMA (Build Any Mac App)",
      "repo": "daveebbelaar/bama",
      "slug": "bama",
      "tags": [
        "BAMA",
        "Claude Code",
        "맥 앱",
        "SwiftUI",
        "플러그인"
      ],
      "genre": "Claude Code 플러그인 / 맥 앱 빌더",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "Swift",
      "use_when": "macOS 환경(맥북)에서 Claude Code를 이용해 Swift/SwiftUI 네이티브 맥 앱을 스크린샷 및 체크리스트 기반으로 자동 빌드하고 싶을 때",
      "github_url": "https://github.com/daveebbelaar/bama",
      "saved_date": "2026-11-06",
      "description": "말로 시키면 Swift/SwiftUI 네이티브 맥 앱을 만들어 Dock에 올려 주는 Claude Code 플러그인. 스킬 21개가 대상 앱 전 화면 스크린샷→기능 체크리스트→단계별 빌드, 커밋 전 전 화면 라이트/다크 모드 스냅샷 확인.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 bama",
            "desc": "주의: macOS 26+ & Xcode 26+ 필요 (윈도우 환경에선 BAWA 사용)",
            "step": "① Mac에서 클론"
          },
          {
            "cmd": "BAMA 플러그인으로 [원하는 맥 앱]을 SwiftUI 네이티브 앱으로 빌드해줘",
            "desc": "맥북 환경에서 실행",
            "step": "② 맥 앱 빌드 요청"
          }
        ],
        "exec_type": "🍎 macOS 네이티브 앱 빌더 플러그인 (21스킬)",
        "flow_steps": [
          {
            "icon": "📸",
            "label": "전 화면 스크린샷 & 체크리스트",
            "detail": "대상 앱 UI 분석 후 기능 명세 도출"
          },
          {
            "icon": "🦉",
            "label": "Swift / SwiftUI 단계별 빌드",
            "detail": "macOS 26 + Xcode 26 기반 구현"
          },
          {
            "icon": "🌗",
            "label": "라이트/다크 스냅샷 & Dock 실행",
            "detail": "커밋 전 전 화면 검증 후 맥 앱 완성"
          }
        ],
        "before_after": {
          "after": "21개 Claude Code 스킬이 스크린샷 체크리스트 기반으로 맥 앱을 자동 빌드 (Mac 전용)",
          "before": "SwiftUI 네이티브 맥 앱을 일일이 Xcode에서 손으로 배치하고 검증"
        }
      },
      "stars_at_save": 1507,
      "major_category": "01_claude-skills-plugins",
      "install_or_usage": "macOS + Xcode 환경에서 저장소 클론 후 Claude Code 플러그인 설치"
    },
    {
      "id": 33,
      "memo": "사용자가 2026-11-05 공유한 AI 에이전트 시각화 도구 글(@vibebusiness0928) 1번 — Node 18+, `/myoffice`.",
      "name": "whatsmyagentdoing",
      "repo": "Charonyuu/whatsmyagentdoing",
      "slug": "whatsmyagentdoing",
      "tags": [
        "whatsmyagentdoing",
        "에이전트 시각화",
        "오피스"
      ],
      "genre": "에이전트 시각화",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "여러 로컬 CLI 에이전트(Claude Code, Codex, Gemini CLI)가 동시에 일하거나 사용자 입력을 기다리는 상태를 직관적인 미니 오피스로 한눈에 보고 싶을 때",
      "github_url": "https://github.com/Charonyuu/whatsmyagentdoing",
      "saved_date": "2026-11-06",
      "description": "로컬에서 돌아가는 Claude Code, Codex, Gemini CLI 등의 세션을 작은 오피스로 보여주는 스킬. 일하는 에이전트는 책상에 앉아 생각·타이핑하고, 도움이 필요하면 일어나서 손을 흔듦.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 whatsmyagentdoing",
            "desc": "Node 18+ 필요",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "/myoffice",
            "desc": "로컬 오피스 시각화 대시보드 열기",
            "step": "② 오피스 뷰 실행"
          }
        ],
        "exec_type": "🏢 멀티 CLI 에이전트 오피스 시각화",
        "flow_steps": [
          {
            "icon": "🔌",
            "label": "로컬 CLI 세션 감지",
            "detail": "Claude Code·Codex·Gemini CLI 모니터링"
          },
          {
            "icon": "🪑",
            "label": "책상 타이핑 vs 손들기",
            "detail": "작업 중이면 타이핑, 질문 대기는 일어나 손듦"
          },
          {
            "icon": "👀",
            "label": "즉시 개입 타이밍 포착",
            "detail": "여러 에이전트를 동시에 돌릴 때 놓치지 않음"
          }
        ],
        "before_after": {
          "after": "도움이 필요한 에이전트가 자리에서 일어나 손을 흔들어 즉각 인지 가능",
          "before": "여러 터미널 탭을 띄워두면 어떤 에이전트가 입력 대기 중인지 일일이 확인해야 함"
        }
      },
      "stars_at_save": 377,
      "major_category": "02_ai-agents-infra",
      "install_or_usage": "Node 18+ 환경에서 저장소 클론 및 `/myoffice` 스킬 연동"
    },
    {
      "id": 34,
      "memo": "사용자가 2026-11-05 공유한 AI 에이전트 시각화 도구 글(@vibebusiness0928) — 심시티형 화면(`YehudaLevi/agentcity`)과는 기능이 다름.",
      "name": "agent-town",
      "repo": "geezerrrr/agent-town",
      "slug": "agent-town",
      "tags": [
        "agent-town",
        "AgentTown",
        "에이전트 시각화",
        "픽셀 오피스"
      ],
      "genre": "에이전트 시각화",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "OpenClaw 기반 픽셀 RPG 오피스 UI로 AI 에이전트들의 작업 현황을 시각적으로 즐기며 관제하고 싶을 때",
      "github_url": "https://github.com/geezerrrr/agent-town",
      "saved_date": "2026-11-06",
      "description": "이름이 정확히 AgentTown인 저장소. OpenClaw 기반 픽셀 RPG 오피스 형태로 에이전트 작업을 보여줌.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 agent-town",
            "desc": "geezerrrr/agent-town 다운로드 (심시티형은 agentcity 참고)",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "agent-town README에 따라 OpenClaw 기반 픽셀 오피스를 실행해줘",
            "desc": "로컬 관제 대시보드 구동",
            "step": "② 실행 확인"
          }
        ],
        "exec_type": "🎮 픽셀 RPG 오피스 에이전트 시각화",
        "flow_steps": [
          {
            "icon": "👾",
            "label": "OpenClaw 에이전트 연동",
            "detail": "실행 중인 에이전트 상태 수집"
          },
          {
            "icon": "🕹️",
            "label": "픽셀 RPG 오피스 렌더링",
            "detail": "도트 캐릭터와 사무실 맵 표현"
          },
          {
            "icon": "📺",
            "label": "게이미피케이션 관제",
            "detail": "에이전트 작업을 RPG 게임처럼 모니터링"
          }
        ],
        "before_after": {
          "after": "픽셀 RPG 오피스 캐릭터들이 움직이며 일하는 모습을 보며 재미있게 관제",
          "before": "딱딱한 검은 터미널 로그만 바라보며 작업 대기"
        }
      },
      "stars_at_save": 259,
      "major_category": "02_ai-agents-infra",
      "install_or_usage": "저장소 클론 후 README 실행 방법 참고"
    },
    {
      "id": 35,
      "memo": "사용자가 2026-10-22 공유한 관심 프로젝트 — `localhost:4777`, 토큰·패키지 설치 없음, Node.js 18+만 필요. Codex `~/.codex/sessions` 자동 인식. 한국 제작.",
      "name": "claude-office",
      "repo": "toplainsoft/claude-office",
      "slug": "claude-office",
      "tags": [
        "claude-office",
        "에이전트 시각화",
        "Claude Code",
        "Codex"
      ],
      "genre": "에이전트 시각화",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "추가 API 토큰 비용이나 복잡한 설치 없이 로컬 Claude Code / Codex 세션 로그를 실시간 한국형 미니어처 사무실 캐릭터(`localhost:4777`)로 모니터링하고 싶을 때",
      "github_url": "https://github.com/toplainsoft/claude-office",
      "saved_date": "2026-11-06",
      "description": "Claude Code(+Codex) 작업을 브라우저 속 미니처 사무실 캐릭터로 보여주는 로컬 도구. `~/.claude/projects/*.jsonl`을 0.25초마다 읽어 방(자료실·개발실·서버실·정보검색실·회의실·휴게실)으로 캐릭터 이동, 질문 시 대표실로 엘리베이터.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 claude-office",
            "desc": "한국 제작, 추가 npm 패키지·API 토큰 소모 없음",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "node server.js   # 실행 후 브라우저 http://localhost:4777 접속",
            "desc": "Claude Code & Codex 세션을 실시간 사무실 화면으로 관제",
            "step": "② 뷰어 실행"
          }
        ],
        "exec_type": "🏢 한국형 미니어처 사무실 시각화 (localhost:4777)",
        "flow_steps": [
          {
            "icon": "📂",
            "label": "세션 로그 실시간 감시",
            "detail": "~/.claude/projects/*.jsonl 0.25초 폴링"
          },
          {
            "icon": "🚪",
            "label": "부서별 방 이동 애니메이션",
            "detail": "자료실·개발실·서버실·회의실 + 질문 시 대표실"
          },
          {
            "icon": "🌐",
            "label": "localhost:4777 뷰어",
            "detail": "토큰·패키지 추가 없이 Node 18+로 즉시 실행"
          }
        ],
        "before_after": {
          "after": "자료실·개발실·대표실을 오가는 미니어처 캐릭터로 API 토큰 0원에 실시간 확인",
          "before": "에이전트가 지금 파일을 읽는지, 서버를 돌리는지, 질문을 기다리는지 한눈에 안 보임"
        }
      },
      "stars_at_save": 23,
      "major_category": "02_ai-agents-infra",
      "install_or_usage": "Node.js 18+ 환경에서 저장소 클론 후 실행 → 브라우저 `localhost:4777` 접속"
    },
    {
      "id": 36,
      "memo": "사용자가 2026-10-09 인스타 릴(@reborn.ax)로 공유한 관심 프로젝트 — 무료 Gemini 키나 로컬 모델(Ollama·LM Studio) 연동 가능.",
      "name": "Dyad",
      "repo": "dyad-sh/dyad",
      "slug": "dyad",
      "tags": [
        "Dyad",
        "앱 빌더",
        "바이브코딩",
        "Lovable 대안",
        "Supabase"
      ],
      "genre": "앱 빌더 / 바이브코딩",
      "status": "보고 싶음",
      "license": "Apache-2.0",
      "language": "",
      "use_when": "유료 Lovable 구독 대신 내 PC 로컬 환경에서 무료 API 키 또는 로컬 LLM과 Supabase를 연결해 풀스택 웹앱을 바이브코딩으로 빠르게 만들고 싶을 때",
      "github_url": "https://github.com/dyad-sh/dyad",
      "saved_date": "2026-11-06",
      "description": "말로 화면을 설명하면 앱 코드가 내 컴퓨터 폴더에 생성되는 오픈소스 앱 빌더. Lovable 대안. Supabase 연결 시 로그인·DB 연동. 윈도우·맥·리눅스 지원, 가입 없이 실행.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 dyad",
            "desc": "Windows/Mac/Linux 지원, GitHub Releases 설치 파일 제공",
            "step": "① 앱 설치 또는 클론"
          },
          {
            "cmd": "Dyad에서 Gemini API 키 또는 로컬 Ollama를 연결해 새 Supabase 웹앱을 시작하는 법 알려줘",
            "desc": "가입 없이 로컬 앱 빌더 실행",
            "step": "② 로컬 바이브코딩 시작"
          }
        ],
        "exec_type": "🖥️ 로컬 오픈소스 바이브코딩 앱 빌더",
        "flow_steps": [
          {
            "icon": "💬",
            "label": "자연어로 앱 화면 설명",
            "detail": "무료 Gemini 키 또는 로컬 Ollama 연결"
          },
          {
            "icon": "💻",
            "label": "내 PC 폴더에 코드 생성",
            "detail": "실시간 프리뷰 + Supabase 로그인/DB 연동"
          },
          {
            "icon": "🚀",
            "label": "소유권 100% 앱 배포",
            "detail": "클라우드 종속 없이 내 로컬 프로젝트 보유"
          }
        ],
        "before_after": {
          "after": "내 PC에서 무료 API/로컬 LLM으로 Supabase 풀스택 앱을 바로 제작",
          "before": "유료 Lovable 구독료 부담 + 클라우드에 코드가 묶여있는 불안감"
        }
      },
      "stars_at_save": 21759,
      "major_category": "07_app-builders-dev-tools",
      "install_or_usage": "GitHub Releases에서 데스크톱 앱 설치 또는 저장소 클론 후 실행"
    },
    {
      "id": 37,
      "memo": "사용자가 2026-10-17 공유한 관심 프로젝트 — 법제처 Open API 인증키(OC) 무료 발급 필요(`open.law.go.kr`). Claude Code는 플러그인 2줄 설치가 가장 쉬움.",
      "name": "korean-law-mcp",
      "repo": "chrisryugj/korean-law-mcp",
      "slug": "korean-law-mcp",
      "tags": [
        "korean-law-mcp",
        "MCP",
        "법제처",
        "법률 검색"
      ],
      "genre": "MCP / 법률",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "한국 법령·자치법규·행정규칙·판례를 환각 없이 실시간 법제처 DB로 조회하고, 조문 인용 검증이나 행위시법·판례 유효성을 확인하고 싶을 때",
      "github_url": "https://github.com/chrisryugj/korean-law-mcp",
      "saved_date": "2026-11-06",
      "description": "법제처 Open API 기반 MCP 서버. 법령·판례·행정규칙·자치법규·조약·해석례 검색 + 인용 검증·판례 생사 확인·행위시법 판단.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 korean-law-mcp",
            "desc": "open.law.go.kr 에서 무료 Open API 인증키(OC) 발급",
            "step": "① 저장소 클론 & OC 키 발급"
          },
          {
            "cmd": "korean-law-mcp로 [법령/조례명] 현행 조문과 관련 최신 판례를 검색해서 인용 검증해줘",
            "desc": "정확한 조문 번호와 판례 유효성 확인",
            "step": "② MCP 등록 & 질문"
          }
        ],
        "exec_type": "⚖️ 대한민국 법제처 공식 API MCP 서버",
        "flow_steps": [
          {
            "icon": "🔑",
            "label": "법제처 OC 인증키 연동",
            "detail": "open.law.go.kr 무료 발급"
          },
          {
            "icon": "📜",
            "label": "법령·판례·자치법규 조회",
            "detail": "현행 조문, 행위시법, 판례 생사 실시간 검색"
          },
          {
            "icon": "✅",
            "label": "인용 검증된 법률 답변",
            "detail": "없는 조문 지어내기(환각) 원천 차단"
          }
        ],
        "before_after": {
          "after": "법제처 Open API로 실시간 조회·인용 검증하여 정확한 법률·행정 규정 확인",
          "before": "AI에게 한국 법률·조례를 물으면 폐지된 법이나 존재하지 않는 판례 번호를 지어냄"
        }
      },
      "stars_at_save": 2700,
      "major_category": "03_mcp-servers",
      "install_or_usage": "`open.law.go.kr`에서 OC 키 무료 발급 후 저장소 README에 따라 MCP 또는 Claude Code 플러그인 설치"
    },
    {
      "id": 38,
      "memo": "사용자가 2026-10-26 인스타 릴(@aiscene.kr)로 공유한 관심 프로젝트 — 교육청 업무자동화 관점 등 사무실 워크플로우 `.md` 정의 방식 레퍼런스로도 매우 유용.",
      "name": "Anthropic knowledge-work-plugins",
      "repo": "anthropics/knowledge-work-plugins",
      "slug": "knowledge-work-plugins",
      "tags": [
        "knowledge-work-plugins",
        "Claude Code",
        "사무 자동화",
        "플러그인"
      ],
      "genre": "Claude Code 플러그인 / 사무 자동화",
      "status": "보고 싶음",
      "license": "Apache-2.0",
      "language": "Markdown",
      "use_when": "슬랙·피그마·캔바·어도비·문서 처리 등 반복적인 사무/지식노동 업무를 `.md` 기반 워크플로우 스킬로 자동화하거나 사내 업무 자동화 스킬을 설계할 때",
      "github_url": "https://github.com/anthropics/knowledge-work-plugins",
      "saved_date": "2026-11-06",
      "description": "사무직 AI 비서 플러그인 모음. 11개에서 123개로 확대, 슬랙·피그마·아마존·캔바·어도비 등 직접 플러그인 제공. 문서(.md) 1,173개·코드 27개로 일하는 법을 글로 적은 형태, 스킬 44개, `invoice-chase` 등 예시 포함.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 knowledge-work-plugins",
            "desc": "Anthropic 공식 사무 비서 플러그인 123종 다운로드",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "knowledge-work-plugins에서 내 업무(행정/기획/문서 자동화)에 참고할 만한 스킬 구조(.md)를 뽑아줘",
            "desc": "한국형/교육청 업무자동화 스킬 설계 레퍼런스",
            "step": "② 내 업무 맞춤 적용"
          }
        ],
        "exec_type": "💼 사무 자동화 플러그인 123종 모음",
        "flow_steps": [
          {
            "icon": "📂",
            "label": "직무·툴별 플러그인 선택",
            "detail": "슬랙·피그마·캔바·어도비 등 123종"
          },
          {
            "icon": "📝",
            "label": ".md 업무 매뉴얼 로드",
            "detail": "일하는 법을 글로 적은 44개 스킬 적용"
          },
          {
            "icon": "✉️",
            "label": "반복 사무 업무 자동화",
            "detail": "독촉 메일(invoice-chase)·문서 처리 자동 실행"
          }
        ],
        "before_after": {
          "after": "1,173개 .md 업무 가이드와 44개 스킬을 참고해 사무 자동화 워크플로우 즉시 적용",
          "before": "개발 코딩만 AI에게 시키고 일반 사무·기획·행정 업무 매뉴얼은 매번 새로 설명"
        }
      },
      "stars_at_save": 32000,
      "major_category": "01_claude-skills-plugins",
      "install_or_usage": "저장소 클론 후 필요한 직무별 플러그인/스킬 `.md` 문서를 Claude Code에 로드"
    },
    {
      "id": 39,
      "memo": "사용자가 2026-10-09, 10-10, 10-16 세 차례 공유한 관심 프로젝트 — Claude Code 플러그인 설치, 원본 모방 시 앱스토어 심사 차단 주의.",
      "name": "Replica",
      "repo": "Jakeschincariol/replica-skill",
      "slug": "replica-skill",
      "tags": [
        "Replica",
        "Claude Code",
        "스킬",
        "클론 앱"
      ],
      "genre": "Claude Code 스킬",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "기존 인기 서비스의 강점을 정찰(recon)하고 설계·디자인·백엔드·테스트·브랜딩·배포까지 11단계 풀 파이프라인으로 개선된 신규 제품을 빌드하고 싶을 때",
      "github_url": "https://github.com/Jakeschincariol/replica-skill",
      "saved_date": "2026-11-06",
      "description": "Claude 스킬 11종 묶음(`recon→architect→design→build→backend→test→diff→entrepreneur→brand→launch→deploy`). 인기 앱을 개선해 클론처럼 다시 만드는 흐름.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 replica-skill",
            "desc": "11종 파이프라인 스킬 다운로드 (스토어 심사 모방 주의)",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "Replica 파이프라인(recon부터 시작)으로 [참고 서비스]의 불편한 점을 개선한 새 웹앱을 기획·구현해줘",
            "desc": "단계별 산출물을 검증하며 제품 빌드",
            "step": "② 11단계 파이프라인 시작"
          }
        ],
        "exec_type": "🏗️ 11단계 풀스택 제품 클론·개선 파이프라인",
        "flow_steps": [
          {
            "icon": "🔭",
            "label": "recon → architect → design",
            "detail": "인기 앱 분석 후 더 나은 아키텍처·UI 설계"
          },
          {
            "icon": "⚙️",
            "label": "build → backend → test → diff",
            "detail": "프론트·백엔드 구현 및 원작 대비 차별화 검증"
          },
          {
            "icon": "🚀",
            "label": "brand → launch → deploy",
            "detail": "브랜딩·론칭·배포까지 11스킬 완주"
          }
        ],
        "sub_skills": [
          {
            "cmd": "/recon [참고 URL/서비스]",
            "desc": "기존 인기 서비스의 핵심 기능과 사용자 불만 포인트 파악",
            "flow": "경쟁 앱 구조·기능·약점 정찰",
            "name": "1. recon",
            "phase": "분석"
          },
          {
            "cmd": "/architect",
            "desc": "확장 가능한 전체 시스템 아키텍처 정의",
            "flow": "기술 스택·데이터 모델·폴더 설계",
            "name": "2. architect",
            "phase": "설계"
          },
          {
            "cmd": "/design",
            "desc": "차별화된 UI/UX 디자인 방향 수립",
            "flow": "디자인 시스템·화면 와이어프레임",
            "name": "3. design",
            "phase": "디자인"
          },
          {
            "cmd": "/build",
            "desc": "디자인 기반 반응형 UI 컴포넌트 제작",
            "flow": "프론트엔드 화면·인터랙션 구현",
            "name": "4. build",
            "phase": "구현"
          },
          {
            "cmd": "/backend",
            "desc": "실제 동작하는 데이터 저장 및 서버 로직 구현",
            "flow": "API·DB·인증 백엔드 연결",
            "name": "5. backend",
            "phase": "구현"
          },
          {
            "cmd": "/test",
            "desc": "버그 없이 동작하는지 자동 검증",
            "flow": "핵심 시나리오 테스트 작성·통과",
            "name": "6. test",
            "phase": "검증"
          },
          {
            "cmd": "/diff",
            "desc": "단순 복제가 아닌 확실한 우위 요소 점검",
            "flow": "원본 대비 개선점·차별성 비교",
            "name": "7. diff",
            "phase": "차별화"
          },
          {
            "cmd": "/entrepreneur",
            "desc": "가격 정책 및 비즈니스 가치 구체화",
            "flow": "수익 모델·타겟·포지셔닝 정리",
            "name": "8. entrepreneur",
            "phase": "사업화"
          },
          {
            "cmd": "/brand",
            "desc": "독자적인 브랜드 정체성과 랜딩 카피 제작",
            "flow": "네이밍·카피라이팅·톤앤매너",
            "name": "9. brand",
            "phase": "브랜딩"
          },
          {
            "cmd": "/launch",
            "desc": "프로덕트 런칭을 위한 안내/SEO 점검",
            "flow": "출시 체크리스트·홍보 자료 준비",
            "name": "10. launch",
            "phase": "론칭"
          },
          {
            "cmd": "/deploy",
            "desc": "실제 서비스 배포 완료",
            "flow": "프로덕션 호스팅·도메인 연결",
            "name": "11. deploy",
            "phase": "배포"
          }
        ],
        "before_after": {
          "after": "정찰부터 브랜딩·배포까지 11개 전용 스킬이 단계별로 빈틈없이 제품 완성",
          "before": "기존 앱을 참고해 만들다 중간에 방향을 잃고 디자인·백엔드·론칭이 따로 놂"
        }
      },
      "stars_at_save": 2800,
      "major_category": "01_claude-skills-plugins",
      "install_or_usage": "저장소 클론 후 Claude Code 플러그인으로 11종 스킬 설치"
    },
    {
      "id": 40,
      "memo": "사용자가 2026-10-14 공유한 관심 프로젝트 — 2026-03 공개.",
      "name": "CLI-Anything",
      "repo": "HKUDS/CLI-Anything",
      "slug": "cli-anything",
      "tags": [
        "CLI-Anything",
        "CLI",
        "SKILL.md",
        "Claude Code",
        "Codex"
      ],
      "genre": "CLI / AI 에이전트",
      "status": "보고 싶음",
      "license": "Apache-2.0",
      "language": "",
      "use_when": "마우스로만 조작하던 GUI 소프트웨어(Blender, Godot, Obsidian 등)를 에이전트가 제어할 수 있도록 전용 CLI와 `SKILL.md`로 자동 변환하고 싶을 때",
      "github_url": "https://github.com/HKUDS/CLI-Anything",
      "saved_date": "2026-11-06",
      "description": "GUI 앱을 전용 CLI + `SKILL.md`로 만드는 도구. 7단계 파이프라인, Claude Code·Codex 지원, Blender·Godot·Obsidian 등 하네스 보유.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 cli-anything",
            "desc": "HKUDS/CLI-Anything 7단계 하네스 다운로드",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "CLI-Anything 파이프라인을 참고해서 [대상 앱/툴]을 에이전트용 CLI와 SKILL.md로 변환해줘",
            "desc": "AI가 직접 제어할 수 있는 자동화 인터페이스 구축",
            "step": "② GUI 앱 변환"
          }
        ],
        "exec_type": "⌨️ GUI 앱 → CLI + SKILL.md 자동 변환기",
        "flow_steps": [
          {
            "icon": "🖱️",
            "label": "GUI 앱 지정",
            "detail": "Blender·Godot·Obsidian 등 대상 선택"
          },
          {
            "icon": "🔄",
            "label": "7단계 하네스 변환",
            "detail": "내부 API/파일 구조 분석 후 CLI 래핑"
          },
          {
            "icon": "📜",
            "label": "전용 CLI + SKILL.md 생성",
            "detail": "AI 에이전트가 마우스 대신 터미널로 앱 제어"
          }
        ],
        "before_after": {
          "after": "7단계 파이프라인으로 에이전트가 바로 쓸 수 있는 CLI와 SKILL.md를 자동 생성",
          "before": "Blender·Obsidian 같은 GUI 프로그램은 AI 코딩 에이전트가 직접 조작하기 어려움"
        }
      },
      "stars_at_save": 52109,
      "major_category": "01_claude-skills-plugins",
      "install_or_usage": "저장소 클론 후 README의 7단계 파이프라인 실행 및 생성된 CLI/SKILL.md 적용"
    },
    {
      "id": 41,
      "memo": "사용자가 2026-10-15 공유한 관심 프로젝트 — 홍보 이미지 수치와 실제 저장소 스타 수(6개)·라이선스 표기 불일치로 사용 전 소스 검증 권장.",
      "name": "ODS (Osmantic Deployment System)",
      "repo": "osmantic-ods/ods",
      "slug": "ods",
      "tags": [
        "ODS",
        "로컬 AI 서버",
        "Open WebUI",
        "n8n",
        "ComfyUI"
      ],
      "genre": "로컬 AI 서버",
      "status": "보고 싶음",
      "license": "혼재 (Apache-2.0 배지 / MIT LICENSE 표기)",
      "language": "",
      "use_when": "Open WebUI, llama-server, n8n, ComfyUI, Qdrant가 한 번에 연결된 로컬 AI 서버 스택 구성 스크립트를 참고하거나 구축하고 싶을 때 (소스 사전 검토 권장)",
      "github_url": "https://github.com/osmantic-ods/ods",
      "saved_date": "2026-11-06",
      "description": "PC/Mac/Linux를 로컬 AI 서버로 바꾸는 스택 설치기. Open WebUI·llama-server·n8n·ComfyUI·Qdrant 등 미리 연결.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 ods",
            "desc": "주의: 홍보 수치와 실제 저장소 차이가 있어 실행 전 스크립트 검토 필수",
            "step": "① 클론 후 소스 검토"
          },
          {
            "cmd": "ods 저장소 안의 docker-compose 및 설치 스크립트를 분석해서 안전한 부분만 설명해줘",
            "desc": "로컬 AI 스택 아키텍처 참고",
            "step": "② Docker 구성 확인"
          }
        ],
        "exec_type": "🐳 올인원 로컬 AI 서버 스택 설치기",
        "flow_steps": [
          {
            "icon": "💻",
            "label": "PC/Mac/Linux 준비",
            "detail": "로컬 머신 환경 확인 (사전 소스 검증 권장)"
          },
          {
            "icon": "🧩",
            "label": "5종 AI 스택 자동 연동",
            "detail": "Open WebUI·llama-server·n8n·ComfyUI·Qdrant"
          },
          {
            "icon": "🏠",
            "label": "프라이빗 AI 허브 구동",
            "detail": "채팅·자동화·이미지·벡터DB 통합 운영"
          }
        ],
        "before_after": {
          "after": "미리 연결된 통합 스택 구성 참고 (단, 스타 수·라이선스 혼재 이슈로 스크립트 사전 검토 필수)",
          "before": "Open WebUI, n8n, ComfyUI, 벡터DB를 각각 설치하고 포트를 일일이 연결"
        }
      },
      "stars_at_save": 6,
      "major_category": "07_app-builders-dev-tools",
      "install_or_usage": "저장소 클론 후 설치 스크립트 및 Docker 구성 사전 검토 후 실행"
    },
    {
      "id": 42,
      "memo": "멀티 에이전트 딥리서치 파이프라인 참고 — Claude Code CLI 필요.",
      "name": "Multi-agent deep research for Claude Code",
      "repo": "fivetaku/insane-research",
      "slug": "insane-research",
      "tags": [
        "insane-research",
        "Claude Code",
        "딥리서치",
        "멀티에이전트",
        "플러그인"
      ],
      "genre": "딥리서치 / Claude Code 플러그인",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "환각 없이 출처 품질 등급(A~E)과 다중 출처 삼각검증이 적용된 심층 리서치 보고서(및 인터랙티브 웹 출력)를 Claude Code에서 생성하고 싶을 때",
      "github_url": "https://github.com/fivetaku/insane-research",
      "saved_date": "2026-11-06",
      "description": "Claude Code용 멀티 에이전트 딥리서치 플러그인. 7단계 파이프라인(질문 범위 설정→검색 계획→병렬 조회→출처 삼각검증→종합→품질검증→출력). 3~5개 에이전트 병렬 실행, 출처 품질 등급 A~E, 핵심 주장은 2개 이상 독립 출처로 교차 검증, 인용 필수로 환각 방지. 요약·전체 보고서·서지·선택적 인터랙티브 웹사이트 출력.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "/plugin marketplace add https://github.com/fivetaku/gptaku_plugins.git\n/plugin install insane-research",
            "desc": "Claude Code CLI에서 플러그인 2줄 설치",
            "step": "① 마켓플레이스 & 플러그인 설치"
          },
          {
            "cmd": "/insane-research [조사할 심층 주제]",
            "desc": "7단계 파이프라인 가동 및 삼각검증 보고서 생성",
            "step": "② 딥리서치 실행"
          }
        ],
        "exec_type": "🔬 7단계 멀티에이전트 딥리서치 플러그인",
        "flow_steps": [
          {
            "icon": "🧭",
            "label": "범위 설정 & 검색 계획",
            "detail": "질문 분해 → 다각도 검색 쿼리 설계"
          },
          {
            "icon": "🕵️",
            "label": "3~5개 에이전트 병렬 조회",
            "detail": "출처 품질 등급(A~E) 부여 + 2개 이상 삼각검증"
          },
          {
            "icon": "📊",
            "label": "보고서 + 인터랙티브 웹",
            "detail": "인용 필수 검증 후 요약·전체 보고서·웹페이지 출력"
          }
        ],
        "sub_skills": [
          {
            "cmd": "Scope & Boundaries",
            "desc": "조사 범위와 제외 대상을 먼저 확정",
            "flow": "모호한 주제 구체화 및 핵심 질문 도출",
            "name": "1. 질문 범위 설정",
            "phase": "기획"
          },
          {
            "cmd": "Research Plan",
            "desc": "병렬 에이전트에게 나눌 조사 파트 설계",
            "flow": "다각도 하위 질문·검색 키워드 분배",
            "name": "2. 검색 계획 수립",
            "phase": "기획"
          },
          {
            "cmd": "3~5 Parallel Agents",
            "desc": "여러 에이전트가 동시에 1차 자료 수집",
            "flow": "동시다발 웹·문서 조회",
            "name": "3. 병렬 정보 조회",
            "phase": "수집"
          },
          {
            "cmd": "A~E Rating & Triangulation",
            "desc": "신뢰도 낮은 블로그를 거르고 공식 자료로 교차 확인",
            "flow": "출처 등급화 + 핵심 주장 2+ 독립 검증",
            "name": "4. 출처 삼각검증",
            "phase": "검증"
          },
          {
            "cmd": "Synthesis",
            "desc": "검증된 팩트만 연결해 결론 도출",
            "flow": "상충되는 데이터 대조 및 인사이트 통합",
            "name": "5. 종합 분석",
            "phase": "분석"
          },
          {
            "cmd": "Quality Gate",
            "desc": "인용 없는 주장(환각) 제거",
            "flow": "모든 주장에 인용 링크 누락 여부 감사",
            "name": "6. 품질 검증",
            "phase": "검증"
          },
          {
            "cmd": "Summary / Report / Web",
            "desc": "원하는 형태로 즉시 공유 가능한 결과물 완성",
            "flow": "요약본·전체 보고서·서지·웹페이지 생성",
            "name": "7. 다중 포맷 출력",
            "phase": "출력"
          }
        ],
        "before_after": {
          "after": "A~E 출처 등급 + 2개 이상 독립 교차 검증을 통과한 고신뢰 리서치 보고서 생성",
          "before": "AI 딥리서치 시 단일 출처 의존이나 없는 통계를 지어내는 환각 발생"
        }
      },
      "stars_at_save": null,
      "major_category": "01_claude-skills-plugins",
      "install_or_usage": "`/plugin marketplace add https://github.com/fivetaku/gptaku_plugins.git` → `/plugin install insane-research` → `/insane-research [주제]`"
    },
    {
      "id": 43,
      "memo": "자율 에이전트 시스템 구조 참고 — 연구용 프로토타입이므로 프로덕션 투입 전 주의 필요.",
      "name": "Towards a More Autonomous Agent System",
      "repo": "deepseek-ai/dsh-superagent-prototype",
      "slug": "dsh-superagent-prototype",
      "tags": [
        "dsh-superagent-prototype",
        "DeepSeek",
        "Harness",
        "코딩 에이전트",
        "프로액티브 에이전트",
        "Feishu"
      ],
      "genre": "AI 에이전트 / 코딩 에이전트",
      "status": "보고 싶음",
      "license": "MIT",
      "language": "",
      "use_when": "GitHub 이슈/요청을 스스로 감지해 격리 세션에서 작업하고 PR로 응답하는 프로액티브 자율 코딩 에이전트 아키텍처(`SETUP.md`)를 연구하거나 시험해보고 싶을 때",
      "github_url": "https://github.com/deepseek-ai/dsh-superagent-prototype",
      "saved_date": "2026-11-06",
      "description": "DeepSeek Harness용 프로액티브 코딩 에이전트 연구 프로토타입. 하나의 GitHub 저장소를 대상으로 GitHub(선택: Feishu) 요청을 듣고 작업 항목을 열어 자기 세션·디렉토리에서 작업한 뒤 PR 등으로 응답. 공식 DeepSeek 제품이 아니라 참고용 연구 코드이며, 운영 철학은 '인간 주의는 최소로, 가치는 최대로'. `SETUP.md`를 코딩 에이전트와 함께 읽으며 설치.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "powershell -File scripts\\clone-skill.ps1 dsh-superagent-prototype",
            "desc": "DeepSeek Harness 연구용 프로토타입 다운로드",
            "step": "① 저장소 클론"
          },
          {
            "cmd": "이 저장소의 SETUP.md를 읽고 프로액티브 에이전트 아키텍처와 동작 원리를 단계별로 설명해줘",
            "desc": "연구용 프로토타입이므로 프로덕션 직접 투입 전 검증 필수",
            "step": "② 코딩 에이전트와 함께 셋업"
          }
        ],
        "exec_type": "🤖 프로액티브 자율 코딩 에이전트 (연구용)",
        "flow_steps": [
          {
            "icon": "📡",
            "label": "GitHub/Feishu 요청 수신",
            "detail": "이슈·멘션 이벤트를 상시 감지"
          },
          {
            "icon": "🧪",
            "label": "격리 세션·브랜치 작업",
            "detail": "자기 세션과 디렉토리에서 자율 코딩"
          },
          {
            "icon": "📬",
            "label": "PR 생성 및 결과 보고",
            "detail": "인간 주의 최소화로 자동 풀리퀘스트 응답"
          }
        ],
        "before_after": {
          "after": "GitHub 요청을 스스로 받아 작업 후 PR로 돌려주는 프로액티브 에이전트 구조 학습",
          "before": "개발자가 매번 터미널을 열어 에이전트를 붙잡고 일일이 지시"
        }
      },
      "stars_at_save": null,
      "major_category": "02_ai-agents-infra",
      "install_or_usage": "저장소 클론 후 `SETUP.md`를 코딩 에이전트와 함께 읽으며 설정"
    },
    {
      "id": 44,
      "memo": "Antigravity 전역 플러그인(~/.gemini/config/plugins/mattpocock-skills)으로 설치 완료 (27개 스킬 활성화).",
      "name": "Matt Pocock Skills (Skills For Real Engineers)",
      "repo": "mattpocock/skills",
      "slug": "mattpocock-skills",
      "tags": [
        "mattpocock",
        "Claude Code",
        "Antigravity",
        "TDD",
        "grill-me",
        "도메인모델링",
        "코드리뷰",
        "아키텍처"
      ],
      "genre": "Claude Code 스킬",
      "status": "사용 중",
      "license": "MIT",
      "language": "Shell",
      "use_when": "바이브코딩으로 코드가 스파게티가 되는 것을 막고, 인터뷰→도메인 모델링→스펙/티켓→TDD→코드리뷰의 체계적인 엔지니어링 파이프라인으로 개발하고 싶을 때",
      "github_url": "https://github.com/mattpocock/skills",
      "saved_date": "2026-11-22",
      "description": "TypeScript Wizard Matt Pocock의 실전 소프트웨어 엔지니어링 에이전트 스킬 27종 모음. 요구사항 압박 인터뷰(grill-with-docs), 도메인 용어집(GLOSSARY.md), 스펙/티켓 분해(to-spec/to-tickets), Red-Green-Refactor TDD, 2축 코드 리뷰(code-review), 깊은 모듈 아키텍처 개선(improve-codebase-architecture) 등을 제공.",
      "visual_guide": {
        "commands": [
          {
            "cmd": "이 프로젝트에 setup-matt-pocock-skills 실행해줘",
            "desc": "이슈 트래커(GitHub/로컬 .scratch) 및 GLOSSARY.md 경로 초기 설정",
            "step": "① 프로젝트 최초 1회 세팅"
          },
          {
            "cmd": "이 기능 만들고 싶은데 grill-with-docs로 꼼꼼히 인터뷰하고 GLOSSARY.md 업데이트해줘",
            "desc": "코딩 전 설계 빈틈을 메우고 공용어 정의",
            "step": "② 개발 시작 (인터뷰 + 용어집)"
          },
          {
            "cmd": "논의한 내용을 to-spec과 to-tickets로 쪼개고, implement-spec과 code-review까지 진행해줘",
            "desc": "단일 티켓은 implement, 병렬 구현은 implement-spec 사용",
            "step": "③ 스펙 → 티켓 → TDD 구현 → 리뷰"
          },
          {
            "cmd": ".\\01_claude-skills-plugins\\mattpocock-skills\\update-global-plugin.ps1",
            "desc": "GitHub 최신 커밋을 가져와 Antigravity 전역 플러그인에 자동 반영",
            "step": "④ 전역 플러그인 최신 업데이트"
          }
        ],
        "exec_type": "⚡ Antigravity 전역 플러그인 (27종 활성화)",
        "flow_steps": [
          {
            "icon": "🎤",
            "label": "1. 인터뷰·도메인 정렬",
            "detail": "grill-with-docs → GLOSSARY.md & ADR"
          },
          {
            "icon": "📐",
            "label": "2. 스펙·티켓·TDD 구현",
            "detail": "to-spec → to-tickets → implement + tdd"
          },
          {
            "icon": "🛡️",
            "label": "3. 2축 리뷰·아키텍처·회고",
            "detail": "code-review → pr → improve-arch & retro"
          }
        ],
        "sub_skills": [
          {
            "cmd": "이 레포에 setup-matt-pocock-skills 실행해줘",
            "desc": "프로젝트 최초 1회 실행. GitHub/로컬 이슈 트래커, 라벨, GLOSSARY.md/ADR 저장 경로를 자동 세팅.",
            "flow": "레포 탐색 → 이슈 트래커·용어집 규칙 확정 → AGENTS.md/docs 설정",
            "name": "setup-matt-pocock-skills",
            "phase": "0. 초기 설정"
          },
          {
            "cmd": "ask-matt로 지금 상황에 맞는 스킬 워크플로우 추천해줘",
            "desc": "27개 스킬 중 지금 어떤 스킬을 어떤 순서로 쓰면 될지 헷갈릴 때 길잡이 역할을 하는 라우터.",
            "flow": "현재 고민 입력 → 메인/온램프 흐름 분석 → 최적 스킬 경로 제안",
            "name": "ask-matt",
            "phase": "0. 라우터"
          },
          {
            "cmd": "이 기능 만들고 싶은데 grill-with-docs로 인터뷰해줘",
            "desc": "코딩 전 설계 빈틈을 인터뷰로 메우고 프로젝트 공용어집(GLOSSARY.md)과 아키텍처 결정(ADR)을 남김.",
            "flow": "아이디어 제시 → 집요한 꼬리질문 → GLOSSARY.md & ADR 자동 기록",
            "name": "grill-with-docs",
            "phase": "1. 기획·도메인"
          },
          {
            "cmd": "이 계획/아이디어를 grill-me로 압박 인터뷰해줘",
            "desc": "레포 파일(GLOSSARY 등)을 생성하지 않는 비코드/단순 아이디어 전용 무상태(stateless) 인터뷰.",
            "flow": "기획/글 입력 → 결정 트리 전수 질문 → 모호함 0% 합의",
            "name": "grill-me",
            "phase": "1. 기획·도메인"
          },
          {
            "cmd": "(자동 호출) grilling 방식으로 요구사항을 구체화해줘",
            "desc": "grill-me, grill-with-docs, triage 등이 내부적으로 공유하는 핵심 인터뷰 엔진.",
            "flow": "사용자 결정 추출 → 에이전트 사실 확인 → 미해결 분기 해소",
            "name": "grilling",
            "phase": "1. 기획·도메인"
          },
          {
            "cmd": "domain-modeling으로 프로젝트 용어와 GLOSSARY.md를 다듬어줘",
            "desc": "하나의 단어가 여러 뜻으로 쓰이는 혼란을 정리해 변수·함수명을 공용어로 통일.",
            "flow": "모호한 용어 탐지 → 경계 사례 검증 → GLOSSARY.md & ADR 갱신",
            "name": "domain-modeling",
            "phase": "1. 기획·도메인"
          },
          {
            "cmd": "research 스킬로 [주제]를 1차 출처 기준으로 조사해줘",
            "desc": "공식 문서·코드를 백그라운드에서 조사하고 출처가 명시된 마크다운 보고서로 남김.",
            "flow": "백그라운드 서브에이전트 조사 → 1차 문서 검증 → 인용 포함 .md 저장",
            "name": "research",
            "phase": "1. 기획·도메인"
          },
          {
            "cmd": "이 UI/상태 로직을 prototype으로 빠르게 검증해줘",
            "desc": "본 구현 전에 상태 모델이나 3가지 UI 안을 단일 HTML/라우트로 띄워 눈으로 검증.",
            "flow": "설계 의문 제기 → 일회용 HTML/UI 시안 제작 → 검증 후 본 코드 반영",
            "name": "prototype",
            "phase": "1. 기획·도메인"
          },
          {
            "cmd": "wayfinder로 이 대형 프로젝트의 결정 지도를 그려줘",
            "desc": "한 세션에 못 담을 대형/초기 프로젝트의 불확실성을 결정 티켓 지도로 쪼개서 해결.",
            "flow": "거대한 불확실성 → 결정 티켓(Decision Map) 생성 → 순차 의사결정",
            "name": "wayfinder",
            "phase": "1. 기획·도메인"
          },
          {
            "cmd": "방금 논의한 내용을 to-spec으로 스펙 문서로 정리해줘",
            "desc": "인터뷰가 끝난 뒤 대화 내용을 구현 가능한 공식 스펙 문서로 변환.",
            "flow": "대화 맥락 종합 → 구조화 스펙 작성 → 이슈 트래커/문서 등록",
            "name": "to-spec",
            "phase": "2. 스펙·티켓"
          },
          {
            "cmd": "이 스펙을 to-tickets로 의존성 있는 티켓들로 쪼개줘",
            "desc": "스펙을 한 번에 구현 가능한 작은 tracer-bullet 티켓과 선후 의존 관계로 분할.",
            "flow": "스펙 분석 → 수직 슬라이스 분해 → Blocking 의존성 연결",
            "name": "to-tickets",
            "phase": "2. 스펙·티켓"
          },
          {
            "cmd": "새로 들어온 버그/요청을 triage로 분류하고 정리해줘",
            "desc": "외부에서 들어온 날것의 버그 리포트·요청을 구현 가능한 상태로 분류·정제.",
            "flow": "외부 이슈 수집 → 원인 파악·라벨링 → 에이전트 실행 가능 티켓화",
            "name": "triage",
            "phase": "2. 스펙·티켓"
          },
          {
            "cmd": "이 티켓/스펙을 implement로 TDD 기반 구현해줘",
            "desc": "단일 티켓이나 중소 규모 기능을 TDD와 자동 코드 리뷰까지 묶어서 구현.",
            "flow": "티켓 읽기 → Red-Green-Refactor TDD 구현 → 2축 코드 리뷰",
            "name": "implement",
            "phase": "3. 구현·TDD"
          },
          {
            "cmd": "implement-spec으로 티켓 그래프 전체를 병렬 구현해줘",
            "desc": "의존성이 풀린 티켓들을 여러 서브에이전트가 동시에 병렬 구현한 뒤 통합 리뷰 수행.",
            "flow": "의존성 그래프 분석 → 서브에이전트 병렬 TDD → 통합 브랜치 리뷰",
            "name": "implement-spec",
            "phase": "3. 구현·TDD"
          },
          {
            "cmd": "tdd 스킬을 적용해서 테스트 먼저 작성하고 구현해줘",
            "desc": "구현과 테스트를 한 번에 몰아 쓰지 않고 수직 슬라이스 단위로 검증하며 개발.",
            "flow": "실패 테스트(Red) → 최소 구현(Green) → 리팩토링(Refactor)",
            "name": "tdd",
            "phase": "3. 구현·TDD"
          },
          {
            "cmd": "이 수동 콘솔/시크릿 설정 과정을 wizard 스크립트로 만들어줘",
            "desc": "API 키 발급·대시보드 클릭 등 사람만 할 수 있는 절차를 대화형 셸 마법사로 자동화.",
            "flow": "수동 작업 식별 → 대화형 Bash 위저드 생성 → .env/시크릿 자동 기록",
            "name": "wizard",
            "phase": "3. 구현·TDD"
          },
          {
            "cmd": "이 버그를 diagnosing-bugs 루프로 원인부터 추적해줘",
            "desc": "추측성 수정을 금지하고 먼저 '이 버그만 빨간불 뜨는 재현 커맨드'부터 확보해 근본 해결.",
            "flow": "실패 재현 루프(Red) → 최소화·가설·계측 → 수정 & 회귀 테스트",
            "name": "diagnosing-bugs",
            "phase": "4. 디버깅·설계"
          },
          {
            "cmd": "improve-codebase-architecture로 코드베이스 리팩토링 후보를 찾아줘",
            "desc": "잘게 쪼개진 얕은 모듈들을 통합해 깊은 모듈로 개선할 수 있는 지점을 HTML 리포트로 제안.",
            "flow": "코드베이스 스캔 → 모듈 심화(Deepening) 후보 발굴 → 시각 HTML 리포트",
            "name": "improve-codebase-architecture",
            "phase": "4. 디버깅·설계"
          },
          {
            "cmd": "codebase-design 기준으로 이 모듈 인터페이스를 설계해줘",
            "desc": "Ousterhout의 깊은 모듈 철학(작은 인터페이스 + 큰 내부 구현)으로 모듈 구조를 설계.",
            "flow": "경계(Seam) 탐색 → 작은 인터페이스 설계 → 테스트 가능성 검증",
            "name": "codebase-design",
            "phase": "4. 디버깅·설계"
          },
          {
            "cmd": "현재 변경사항을 code-review로 Standards와 Spec 두 축으로 리뷰해줘",
            "desc": "코딩 표준/코드 스멜 검사와 원 스펙 충실도 검사를 독립된 두 에이전트가 병렬 수행.",
            "flow": "변경 Diff 추출 → 병렬 리뷰(코딩 표준 + 스펙 일치) → 결함 보고",
            "name": "code-review",
            "phase": "5. 리뷰·PR·회고"
          },
          {
            "cmd": "pr 스킬 포맷으로 Pull Request 본문을 작성해줘",
            "desc": "리뷰어가 한눈에 파악할 수 있는 최소 시각 자료와 머지 위험도를 포함한 PR 본문 작성.",
            "flow": "핵심 시각화 요약 → 전후 동작 증거 → 1-way/2-way 위험도 평가",
            "name": "pr",
            "phase": "5. 리뷰·PR·회고"
          },
          {
            "cmd": "방금 세션을 retro로 회고하고 에이전트 환경 개선점을 제안해줘",
            "desc": "작업 후 코드가 아닌 '에이전트 환경(규칙·테스트·네비게이션)'을 업그레이드해 재발 방지.",
            "flow": "세션 로그 회고 → 반복 실수 원인 진단 → AGENTS.md/린트/툴 개선",
            "name": "retro",
            "phase": "5. 리뷰·PR·회고"
          },
          {
            "cmd": "현재 작업 맥락을 handoff 문서로 정리해줘",
            "desc": "다른 디렉토리·다른 AI 에이전트·동료에게 작업 맥락을 손실 없이 넘길 때 사용.",
            "flow": "현재 상태·결정·파일 요약 → 이식 가능한 Handoff .md 생성 → 새 세션 인계",
            "name": "handoff",
            "phase": "6. 생산성·협업"
          },
          {
            "cmd": "상대방에게 확인받을 내용을 to-questionnaire로 질문지로 만들어줘",
            "desc": "기획자·클라이언트·동료의 결정이 필요할 때 빠짐없이 답을 받아낼 질문지를 생성.",
            "flow": "불명확한 결정 식별 → 수신자 맞춤 인터뷰 → 비동기 마크다운 질문지 생성",
            "name": "to-questionnaire",
            "phase": "6. 생산성·협업"
          },
          {
            "cmd": "wait-what 방금 설명을 우리 용어집 기준으로 쉽게 다시 풀어서 설명해줘",
            "desc": "AI의 설명이 너무 어렵거나 맥락이 건너뛰어졌을 때 쉬운 말로 즉시 다시 풀어서 설명.",
            "flow": "이해 안 된 메시지 감지 → 빠진 전제 보충 → GLOSSARY 어휘로 평이하게 재설명",
            "name": "wait-what",
            "phase": "6. 생산성·협업"
          },
          {
            "cmd": "teach 스킬로 [주제]를 단계별 미션으로 가르쳐줘",
            "desc": "현재 폴더를 상태 저장형 튜터링 공간으로 만들어 다회차 실습 학습을 진행.",
            "flow": "학습 목표 설정 → 미션·학습기록·자료 폴더 구성 → 실습 기반 다회차 학습",
            "name": "teach",
            "phase": "6. 생산성·협업"
          },
          {
            "cmd": "writing-for-agents 원칙으로 SKILL.md / AGENTS.md를 다듬어줘",
            "desc": "AI가 헷갈리지 않고 토큰을 낭비하지 않도록 스킬 문서와 AGENTS.md를 작성·리팩토링.",
            "flow": "에이전트 문서 진단 → 점진적 공개(Progressive Disclosure) 적용 → 토큰 최적화",
            "name": "writing-for-agents",
            "phase": "6. 생산성·협업"
          }
        ],
        "before_after": {
          "after": "27개 엔지니어링 스킬이 요구사항 정렬·TDD·깊은 모듈 설계·2축 리뷰를 강제해 프로급 품질 유지",
          "before": "바이브코딩으로 의도와 다른 코드가 쌓이고 시간이 갈수록 수정 불가능한 스파게티화"
        }
      },
      "stars_at_save": 330084,
      "major_category": "01_claude-skills-plugins",
      "install_or_usage": "저장소 클론 후 README 참고 (`powershell -File scripts/clone-skill.ps1 mattpocock-skills`)"
    }
  ],
  "categories": [
    {
      "id": "01_claude-skills-plugins",
      "title": "Claude Code / Antigravity 스킬 & 플러그인",
      "description": "코딩 에이전트(Claude Code, Codex, Google Antigravity)에 바로 장착해 UI 개선, 아이디어 검증, 딥리서치, 앱 빌드, 사무 자동화를 수행하는 스킬 및 플러그인 모음"
    },
    {
      "id": "02_ai-agents-infra",
      "title": "AI 에이전트 · 멀티에이전트 · 시각화 · 인프라",
      "description": "멀티 에이전트 오케스트레이션 하네스, 자율 코딩/ML 에이전트, Computer-Use 인프라, 에이전트 프록시/미들웨어 및 에이전트 작업 시각화 도구 모음"
    },
    {
      "id": "03_mcp-servers",
      "title": "MCP 서버 (Model Context Protocol)",
      "description": "법률 검색, 온톨로지 기반 DB 질의·지식베이스, 프롬프트 최적화 등 AI 클라이언트에 연결해 쓰는 MCP 서버 모음"
    },
    {
      "id": "04_prompt-engineering",
      "title": "프롬프트 엔지니어링 & 최적화",
      "description": "프롬프트 자동 생성·테스트·ELO 평가 및 구조화 프롬프트 최적화 도구 모음 (Claude 스킬/MCP 연동 도구 포함)"
    },
    {
      "id": "05_security-osint",
      "title": "AI 보안 감사 & OSINT",
      "description": "바이브코딩 앱 보안 감사, 노출된 AI 서버 점검, OSINT 위협/지오로케이션 분석 도구 모음 (인가된 보안 점검 및 본인 자산 점검 전용)"
    },
    {
      "id": "06_media-video",
      "title": "영상 생성 · 편집 · 화면 녹화",
      "description": "주제 기반 AI 숏폼 자동 생성, 에이전트 기반 영상 제작 스튜디오 파이프라인, 자동 줌/자막 데모 화면 녹화 도구 모음"
    },
    {
      "id": "07_app-builders-dev-tools",
      "title": "앱 빌더 · 바이브코딩 · 코드 시각화 · 로컬 AI",
      "description": "코드 아키텍처 지도 시각화, 바이브코딩 앱 빌더, 웹사이트→데스크톱 앱 변환, 로컬 AI 서버 스택 및 온디바이스 LLM 실행 도구"
    },
    {
      "id": "08_domain-apps-collections",
      "title": "도메인 특화 (교육 · 금융) & 오픈소스 모음",
      "description": "AI 튜터링, 인터랙티브 3D 물리 교재, 금융 터미널 및 상용 유료 앱을 대체하는 오픈소스 큐레이션 모음"
    }
  ],
  "source_url": "https://muse.ai/library/artifacts/opeunsoseu-seojae",
  "last_synced": "2026-11-22",
  "library_name": "오픈소스 서재 (Open Source & GitHub Skills Library)",
  "schema_version": "1.0"
}
;
