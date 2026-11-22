(() => {
  "use strict";

  const STORAGE_CATALOG_KEY = "skills_library_catalog_v1";
  const STORAGE_GH_KEY = "skills_library_gh_config_v1";
  const STORAGE_THEME_KEY = "skills_library_theme_v1";
  const STATUS_LIST = ["보고 싶음", "써보는 중", "사용 중", "보관"];

  const SITUATION_GUIDE = [
    {
      title: "바이브코딩 후 UI가 AI 티(AI-slop) 날 때",
      slugs: ["unslop", "stageshow"],
      note: "UI 감사/리디자인 및 데모 영상 기반 자가 수정"
    },
    {
      title: "새 아이디어·기획을 냉정하게 검증/비평받고 싶을 때",
      slugs: ["court-skill", "arena-skill"],
      note: "법정 찬반 검증(VERDICT.md) 또는 다중 에이전트 토너먼트"
    },
    {
      title: "막연한 요청을 고품질 프롬프트로 다듬고 싶을 때",
      slugs: ["prompt-master", "mcp-prompt-optimizer", "gpt-prompt-engineer"],
      note: "되묻기 기반 구조화 프롬프트 생성 및 ELO 테스트"
    },
    {
      title: "복잡한 코드베이스 구조 파악 및 헬스 체크",
      slugs: ["floorplan"],
      note: "화면·서버·DB·외부 서비스 아키텍처 지도 시각화"
    },
    {
      title: "웹/앱 배포 전 보안 취약점 감사",
      slugs: ["security-audit-skill", "aimap"],
      note: "6단계 보안 감사(findings.json) 및 노출 AI 서버 점검"
    },
    {
      title: "한국 법령·판례 검색 및 인용 검증",
      slugs: ["korean-law-mcp"],
      note: "법제처 Open API 연동 MCP 서버"
    },
    {
      title: "DB 질의(Text-to-SQL) 및 개인 지식베이스(Obsidian)",
      slugs: ["auto-ontology-mcp"],
      note: "NVIDIA Auto Ontology 시맨틱 레이어 MCP 서버"
    },
    {
      title: "여러 AI 에이전트 작업 상태를 한눈에 모니터링",
      slugs: ["claude-office", "whatsmyagentdoing", "agent-town", "agentcity"],
      note: "실시간 미니 오피스·픽셀 RPG·심시티 스타일 시각화"
    },
    {
      title: "멀티 에이전트 팀 구성 및 자율 코딩 하네스",
      slugs: ["openrig", "dsh-superagent-prototype", "cua"],
      note: "YAML 팀 부팅, PR 자동 응답 에이전트, Computer-Use VM"
    },
    {
      title: "Windows / Mac 네이티브 앱 빌드 또는 웹→앱 패키징",
      slugs: ["bawa", "bama", "pake", "dyad"],
      note: "WinUI 3 / SwiftUI 네이티브 빌드, Tauri 패키징, 로컬 앱 빌더"
    },
    {
      title: "GUI 소프트웨어를 에이전트용 CLI + SKILL.md로 변환",
      slugs: ["cli-anything"],
      note: "Blender·Godot·Obsidian 등 GUI 앱 자동 CLI/스킬화"
    },
    {
      title: "숏폼 영상·장편 스튜디오·제품 데모 녹화",
      slugs: ["moneyprinterturbo", "pixelle-video", "openmontage", "openscreen"],
      note: "AI 숏폼 자동화, 12단계 영상 파이프라인, 커서 자동 줌 녹화"
    },
    {
      title: "출처 삼각검증 기반 딥리서치 & 사무 자동화",
      slugs: ["insane-research", "knowledge-work-plugins"],
      note: "환각 방지 7단계 딥리서치 및 123개 사무 비서 플러그인"
    },
    {
      title: "로컬 AI 서버 구축 및 온디바이스 LLM 실행",
      slugs: ["ods", "litert-lm", "free-claude-code"],
      note: "로컬 AI 스택 설치, Gemma GPU/NPU 가속, 다중 모델 프록시"
    }
  ];

  const LIFECYCLE_PIPELINES = [
    {
      title: "1️⃣ 기획 · 프롬프트 다듬기 · 아이디어 검증 · 딥리서치",
      stages: [
        { label: "① 프롬프트·요구사항 구체화", slugs: ["prompt-master", "mcp-prompt-optimizer", "gpt-prompt-engineer"] },
        { label: "② 논리 찬반·토너먼트 검증", slugs: ["court-skill", "arena-skill"] },
        { label: "③ 출처 삼각검증 딥리서치", slugs: ["insane-research", "korean-law-mcp", "auto-ontology-mcp"] }
      ]
    },
    {
      title: "2️⃣ 바이브코딩 · 네이티브 앱 빌드 · UI 폴리싱 · 배포",
      stages: [
        { label: "① 앱/제품 빌드", slugs: ["dyad", "replica-skill", "bawa", "bama"] },
        { label: "② AI 슬롭 UI 제거·자가수정", slugs: ["unslop", "stageshow"] },
        { label: "③ 경량 데스크톱 앱 변환", slugs: ["pake", "cli-anything"] }
      ]
    },
    {
      title: "3️⃣ 실전 엔지니어링 · 아키텍처 · 배포 전 보안 감사",
      stages: [
        { label: "① 인터뷰·스펙·티켓·TDD", slugs: ["mattpocock-skills"] },
        { label: "② 코드 구조 시각화·헬스체크", slugs: ["floorplan"] },
        { label: "③ 배포 전 보안 감사·서버 점검", slugs: ["security-audit-skill", "aimap", "voidaccess", "netryx-astra-v2"] }
      ]
    },
    {
      title: "4️⃣ 에이전트 실시간 관제 · 멀티에이전트 · 로컬 AI 인프라",
      stages: [
        { label: "① 멀티에이전트·VM 하네스", slugs: ["openrig", "dsh-superagent-prototype", "cua"] },
        { label: "② 사무실/도시 실시간 시각화", slugs: ["claude-office", "whatsmyagentdoing", "agent-town", "agentcity"] },
        { label: "③ 로컬 AI 스택·온디바이스", slugs: ["ods", "litert-lm", "free-claude-code", "ds2api"] }
      ]
    },
    {
      title: "5️⃣ 숏폼 자동 생성 · 영상 스튜디오 · 데모 녹화",
      stages: [
        { label: "① 주제 기반 숏폼 자동 제작", slugs: ["moneyprinterturbo", "pixelle-video"] },
        { label: "② 12단계 에이전트 스튜디오", slugs: ["openmontage"] },
        { label: "③ 커서 자동 줌 데모 녹화", slugs: ["openscreen"] }
      ]
    }
  ];

  const state = {
    catalog: null,
    syncMode: "browser", // "local" | "github" | "browser"
    viewMode: "cards", // "cards" | "visual" | "situations" | "table"
    filters: {
      query: "",
      status: "전체",
      category: "전체",
      genre: "전체",
      sort: "recent"
    },
    genresExpanded: false,
    visualMattPhase: "전체",
    ghConfig: loadGhConfig()
  };

  // DOM helpers
  const $ = (id) => document.getElementById(id);

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function showToast(message, type = "info") {
    const container = $("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3600);
  }

  function copyText(text, label = "내용") {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(
        () => showToast(`${label} 복사 완료!`, "success"),
        () => fallbackCopy(text, label)
      );
    } else {
      fallbackCopy(text, label);
    }
  }

  function fallbackCopy(text, label) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showToast(`${label} 복사 완료!`, "success");
    } catch {
      showToast("복사에 실패했습니다. 직접 선택해 복사해주세요.", "error");
    }
    ta.remove();
  }

  function utf8ToBase64(str) {
    const bytes = new TextEncoder().encode(str);
    let binary = "";
    const chunkSize = 0x8000;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
    }
    return btoa(binary);
  }

  function base64ToUtf8(b64) {
    const binary = atob(b64.replace(/\n/g, ""));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  }

  function slugify(text) {
    return String(text || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\-_]+/g, "-")
      .replace(/-{2,}/g, "-")
      .replace(/^[-_]+|[-_]+$/g, "") || "skill-item";
  }

  function parseGithubRepo(rawInput) {
    const raw = String(rawInput || "").trim().replace(/\/+$/, "").replace(/\.git$/, "");
    const m = raw.match(/^(?:https?:\/\/github\.com\/)?([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)(?:\/.*)?$/);
    if (!m) return null;
    return `${m[1]}/${m[2]}`;
  }

  function statusClass(status) {
    switch (status) {
      case "사용 중": return "status-using";
      case "써보는 중": return "status-trying";
      case "보관": return "status-archived";
      default: return "status-want";
    }
  }

  function formatStars(stars) {
    if (typeof stars === "number" && !Number.isNaN(stars)) {
      return `★ ${stars.toLocaleString("ko-KR")}`;
    }
    return "★ 미표기";
  }

  function loadGhConfig() {
    try {
      const raw = localStorage.getItem(STORAGE_GH_KEY);
      if (!raw) return { repo: "Logic-k/opensource-skills-library", branch: "main", token: "", autoPush: true };
      return { repo: "Logic-k/opensource-skills-library", branch: "main", autoPush: true, ...JSON.parse(raw) };
    } catch {
      return { repo: "Logic-k/opensource-skills-library", branch: "main", token: "", autoPush: true };
    }
  }

  function saveGhConfigToStorage(cfg) {
    state.ghConfig = cfg;
    localStorage.setItem(STORAGE_GH_KEY, JSON.stringify(cfg));
  }

  // Theme
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_THEME_KEY) || "dark";
    applyTheme(saved);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME_KEY, theme);
    $("btnTheme").textContent = theme === "dark" ? "☀️" : "🌙";
  }

  // Sync Mode & Persistence
  async function detectAndLoadCatalog() {
    // 1. Check Server Backend (/api/health -> Vercel Supabase API or Local Live-Sync Server)
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 3000);
      const res = await fetch("/api/health", { signal: ctrl.signal, cache: "no-store" });
      clearTimeout(timer);
      if (res.ok) {
        const health = await res.json();
        if (health && health.ok) {
          if (health.mode === "supabase_cloud") {
            state.syncMode = "supabase";
          } else {
            state.syncMode = health.supabase_synced ? "local_supabase" : "local";
          }
          const dataRes = await fetch("/api/skills", { cache: "no-store" });
          if (dataRes.ok) {
            state.catalog = await dataRes.json();
            localStorage.setItem(STORAGE_CATALOG_KEY, JSON.stringify(state.catalog));
            updateSyncBadge();
            return;
          }
        }
      }
    } catch {
      // Static hosting without API or file://
    }

    // 2. Check GitHub Cloud Sync
    if (state.ghConfig.repo && state.ghConfig.token) {
      state.syncMode = "github";
      try {
        const ghCatalog = await fetchCatalogFromGitHub(state.ghConfig);
        if (ghCatalog && Array.isArray(ghCatalog.skills)) {
          state.catalog = ghCatalog;
          localStorage.setItem(STORAGE_CATALOG_KEY, JSON.stringify(ghCatalog));
          updateSyncBadge();
          return;
        }
      } catch (err) {
        showToast(`GitHub 최신 동기화 실패 (${err.message}). 캐시 데이터로 표시합니다.`, "error");
      }
    } else {
      state.syncMode = "browser";
    }

    // 3. Check localStorage cache -> ./data/skills.json -> window.__INITIAL_SKILLS_CATALOG__
    const cached = localStorage.getItem(STORAGE_CATALOG_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (parsed && Array.isArray(parsed.skills)) {
          state.catalog = parsed;
          updateSyncBadge();
          return;
        }
      } catch {
        // Ignore broken cache
      }
    }

    try {
      const staticRes = await fetch("./data/skills.json", { cache: "no-store" });
      if (staticRes.ok) {
        state.catalog = await staticRes.json();
        updateSyncBadge();
        return;
      }
    } catch {
      // Fallback to inline script
    }

    if (window.__INITIAL_SKILLS_CATALOG__) {
      state.catalog = structuredClone(window.__INITIAL_SKILLS_CATALOG__);
    } else {
      state.catalog = { schema_version: "1.0", library_name: "오픈소스 서재", categories: [], skills: [] };
    }
    updateSyncBadge();
  }

  function updateSyncBadge() {
    const badge = $("syncModeBadge");
    const txt = $("syncModeText");
    badge.className = "sync-badge";
    if (state.syncMode === "supabase") {
      badge.classList.add("mode-local");
      txt.textContent = "Supabase 실시간 DB 연동중";
    } else if (state.syncMode === "local_supabase") {
      badge.classList.add("mode-local");
      txt.textContent = "로컬 + Supabase 실시간 연동";
    } else if (state.syncMode === "local") {
      badge.classList.add("mode-local");
      txt.textContent = "로컬 파일 실시간 연동";
    } else if (state.syncMode === "github") {
      badge.classList.add("mode-github");
      txt.textContent = `GitHub 클라우드 연동 (${state.ghConfig.repo})`;
    } else {
      txt.textContent = "브라우저 저장소 모드";
    }
  }

  async function persistCatalog(actionLabel = "저장") {
    state.catalog.last_synced = new Date().toISOString().slice(0, 10);
    localStorage.setItem(STORAGE_CATALOG_KEY, JSON.stringify(state.catalog));

    if (state.syncMode === "supabase" || state.syncMode === "local" || state.syncMode === "local_supabase") {
      try {
        const res = await fetch("/api/skills", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state.catalog)
        });
        if (!res.ok) {
          const errJson = await res.json().catch(() => ({}));
          throw new Error(errJson.error || `HTTP ${res.status}`);
        }
        if (state.syncMode === "supabase") {
          showToast(`${actionLabel} 완료! (Supabase DB에 즉시 저장됨)`, "success");
        } else if (state.syncMode === "local_supabase") {
          showToast(`${actionLabel} 완료! (로컬 SKILL.md + Supabase 동시 반영됨)`, "success");
        } else {
          showToast(`${actionLabel} 완료! (SKILL.md 및 README 자동 갱신됨)`, "success");
        }
        return;
      } catch (err) {
        showToast(`서버 DB 저장 오류: ${err.message}`, "error");
        return;
      }
    }

    if (state.syncMode === "github" && state.ghConfig.autoPush && state.ghConfig.repo && state.ghConfig.token) {
      try {
        await pushCatalogToGitHub(state.catalog, state.ghConfig, `chore(skills): ${actionLabel}`);
        showToast(`${actionLabel} 완료 및 GitHub 커밋 완료!`, "success");
        return;
      } catch (err) {
        showToast(`브라우저에는 저장됐으나 GitHub 커밋 실패: ${err.message}`, "error");
        return;
      }
    }

    showToast(`${actionLabel} 완료! (브라우저 저장소에 반영됨)`, "success");
  }

  // GitHub Contents API helpers
  async function ghApiRequest(path, cfg, options = {}) {
    const url = `https://api.github.com/repos/${cfg.repo}/contents/${path}?ref=${encodeURIComponent(cfg.branch || "main")}`;
    const headers = {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${cfg.token}`,
      ...(options.headers || {})
    };
    const fetchUrl = options.method === "PUT"
      ? `https://api.github.com/repos/${cfg.repo}/contents/${path}`
      : url;

    const res = await fetch(fetchUrl, { ...options, headers });
    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      throw new Error(errBody.message || `HTTP ${res.status}`);
    }
    return res.json();
  }

  async function fetchCatalogFromGitHub(cfg) {
    const fileData = await ghApiRequest("catalog/skills.json", cfg);
    const jsonText = base64ToUtf8(fileData.content);
    return JSON.parse(jsonText);
  }

  async function commitSingleFileToGitHub(path, contentStr, cfg, commitMessage) {
    let sha;
    try {
      const existing = await ghApiRequest(path, cfg);
      sha = existing.sha;
    } catch {
      // File may not exist yet
    }
    const payload = {
      message: commitMessage,
      content: utf8ToBase64(contentStr),
      branch: cfg.branch || "main"
    };
    if (sha) payload.sha = sha;

    await ghApiRequest(path, cfg, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  }

  async function pushCatalogToGitHub(catalog, cfg, commitMessage) {
    const jsonStr = JSON.stringify(catalog, null, 2) + "\n";
    await commitSingleFileToGitHub("catalog/skills.json", jsonStr, cfg, commitMessage);
    await commitSingleFileToGitHub("web/data/skills.json", jsonStr, cfg, `${commitMessage} (sync web data)`);
  }

  // GitHub public repo metadata fetch
  async function fetchGithubRepoMeta(ownerRepo) {
    const res = await fetch(`https://api.github.com/repos/${ownerRepo}`, {
      headers: { Accept: "application/vnd.github+json" }
    });
    if (!res.ok) {
      throw new Error(`GitHub 조회 실패 (HTTP ${res.status})`);
    }
    const data = await res.json();
    const lic = data.license || {};
    return {
      name: data.name || ownerRepo.split("/")[1],
      description: data.description || "",
      stars: typeof data.stargazers_count === "number" ? data.stargazers_count : null,
      language: data.language || "",
      license: lic.spdx_id || lic.name || "미확인",
      topics: Array.isArray(data.topics) ? data.topics : []
    };
  }

  // Filtering & Sorting
  function getCategoryMap() {
    const map = {};
    for (const c of state.catalog.categories || []) {
      map[c.id] = c;
    }
    return map;
  }

  function getFilteredSkills() {
    const skills = state.catalog.skills || [];
    const q = state.filters.query.trim().toLowerCase();
    const status = state.filters.status;
    const category = state.filters.category;
    const genre = state.filters.genre;

    const filtered = skills.filter((s) => {
      if (status !== "전체" && (s.status || "보고 싶음") !== status) return false;
      if (category !== "전체" && s.major_category !== category) return false;
      if (genre !== "전체" && (s.genre || "기타") !== genre) return false;
      if (q) {
        const hay = [
          s.id,
          s.slug,
          s.name,
          s.repo,
          s.genre,
          s.description,
          s.use_when,
          s.memo,
          s.language,
          s.license,
          ...(s.tags || [])
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    const sortMode = state.filters.sort;
    filtered.sort((a, b) => {
      if (sortMode === "stars") {
        return (b.stars_at_save ?? -1) - (a.stars_at_save ?? -1);
      }
      if (sortMode === "name") {
        return (a.name || "").localeCompare(b.name || "", "ko");
      }
      if (sortMode === "id-asc") {
        return (a.id ?? 0) - (b.id ?? 0);
      }
      if (sortMode === "id-desc") {
        return (b.id ?? 0) - (a.id ?? 0);
      }
      if (sortMode === "category") {
        const c = (a.major_category || "").localeCompare(b.major_category || "");
        return c !== 0 ? c : (a.id ?? 0) - (b.id ?? 0);
      }
      // recent (saved_date desc, then id asc)
      const dateCmp = (b.saved_date || "").localeCompare(a.saved_date || "");
      return dateCmp !== 0 ? dateCmp : (a.id ?? 0) - (b.id ?? 0);
    });

    return filtered;
  }

  // Render All
  function renderAll() {
    if (!state.catalog) return;
    renderHeaderStats();
    renderFilters();
    renderActiveFilterBar();

    const filtered = getFilteredSkills();
    const isCustomView = state.viewMode === "situations" || state.viewMode === "visual";
    const isEmpty = !isCustomView && filtered.length === 0;

    $("cardsView").classList.toggle("hidden", state.viewMode !== "cards" || isEmpty);
    $("visualView").classList.toggle("hidden", state.viewMode !== "visual");
    $("situationsView").classList.toggle("hidden", state.viewMode !== "situations");
    $("tableView").classList.toggle("hidden", state.viewMode !== "table" || isEmpty);
    $("emptyState").classList.toggle("hidden", !isEmpty);

    if (state.viewMode === "cards" && !isEmpty) {
      renderCards(filtered);
    } else if (state.viewMode === "visual") {
      renderVisualGuide();
    } else if (state.viewMode === "situations") {
      renderSituations();
    } else if (state.viewMode === "table" && !isEmpty) {
      renderTable(filtered);
    }
  }

  function renderHeaderStats() {
    const skills = state.catalog.skills || [];
    const cats = state.catalog.categories || [];
    const genres = new Set(skills.map((s) => s.genre || "기타"));
    const counts = { "사용 중": 0, "써보는 중": 0, "보고 싶음": 0, "보관": 0 };
    for (const s of skills) {
      const st = s.status || "보고 싶음";
      counts[st] = (counts[st] || 0) + 1;
    }

    $("libraryTitle").textContent = state.catalog.library_name || "오픈소스 서재";
    $("statsLine").textContent =
      `${skills.length}권이 서재에 꽂혀 있어요 · 사용 중 ${counts["사용 중"]} · 써보는 중 ${counts["써보는 중"]} · 보고 싶음 ${counts["보고 싶음"]} · 보관 ${counts["보관"]} · ${cats.length}대 분야 · ${genres.size}가지 장르`;
    $("footerLastSync").textContent = `마지막 동기화: ${state.catalog.last_synced || "-"}`;
  }

  function renderFilters() {
    const skills = state.catalog.skills || [];
    const categories = state.catalog.categories || [];

    // Status pills
    const statusCounts = { 전체: skills.length };
    for (const st of STATUS_LIST) statusCounts[st] = 0;
    for (const s of skills) {
      const st = s.status || "보고 싶음";
      statusCounts[st] = (statusCounts[st] || 0) + 1;
    }
    $("statusPills").innerHTML = ["전체", ...STATUS_LIST]
      .map((st) => {
        const active = state.filters.status === st ? "active" : "";
        return `<button class="pill ${active}" data-status="${escapeHtml(st)}" type="button">${escapeHtml(st)} <span class="count">${statusCounts[st] ?? 0}</span></button>`;
      })
      .join("");

    // Category pills
    const catCounts = {};
    for (const s of skills) {
      catCounts[s.major_category] = (catCounts[s.major_category] || 0) + 1;
    }
    const catButtons = [
      `<button class="pill ${state.filters.category === "전체" ? "active" : ""}" data-category="전체" type="button">전체 <span class="count">${skills.length}</span></button>`
    ];
    for (const c of categories) {
      const active = state.filters.category === c.id ? "active" : "";
      const shortNum = c.id.split("_")[0];
      catButtons.push(
        `<button class="pill ${active}" data-category="${escapeHtml(c.id)}" type="button" title="${escapeHtml(c.title)}">${escapeHtml(shortNum)}. ${escapeHtml(c.title)} <span class="count">${catCounts[c.id] || 0}</span></button>`
      );
    }
    $("categoryPills").innerHTML = catButtons.join("");

    // Genre pills (scoped by selected category if any)
    const scopedSkills =
      state.filters.category === "전체"
        ? skills
        : skills.filter((s) => s.major_category === state.filters.category);
    const genreCounts = {};
    for (const s of scopedSkills) {
      const g = s.genre || "기타";
      genreCounts[g] = (genreCounts[g] || 0) + 1;
    }
    const genreNames = Object.keys(genreCounts).sort((a, b) => a.localeCompare(b, "ko"));
    $("genreCount").textContent = String(genreNames.length);

    if (state.filters.genre !== "전체" && !genreCounts[state.filters.genre]) {
      state.filters.genre = "전체";
    }

    const genreButtons = [
      `<button class="pill ${state.filters.genre === "전체" ? "active" : ""}" data-genre="전체" type="button">전체</button>`
    ];
    for (const g of genreNames) {
      const active = state.filters.genre === g ? "active" : "";
      genreButtons.push(
        `<button class="pill ${active}" data-genre="${escapeHtml(g)}" type="button">${escapeHtml(g)} <span class="count">${genreCounts[g]}</span></button>`
      );
    }
    const genreGroup = $("genrePills");
    genreGroup.innerHTML = genreButtons.join("");
    genreGroup.classList.toggle("collapsed", !state.genresExpanded);
    $("btnToggleGenres").textContent = state.genresExpanded ? "장르 접기 ▴" : "장르 펼치기 ▾";
  }

  function renderActiveFilterBar() {
    const f = state.filters;
    const hasFilter = f.query || f.status !== "전체" || f.category !== "전체" || f.genre !== "전체";
    const bar = $("activeFilterBar");
    bar.classList.toggle("hidden", !hasFilter || state.viewMode === "situations" || state.viewMode === "visual");
    if (hasFilter) {
      const count = getFilteredSkills().length;
      $("resultCountText").textContent = `필터 결과: ${count}개 표시 중`;
    }
  }

  function getPrimaryCommand(skill) {
    const vg = skill.visual_guide || {};
    const cmds = vg.commands || [];
    if (cmds.length > 1) return cmds[1].cmd || cmds[0].cmd || "";
    if (cmds.length === 1) return cmds[0].cmd || "";
    return `powershell -File scripts\\clone-skill.ps1 ${skill.slug}`;
  }

  function renderCardFlowBar(skill) {
    const steps = skill.visual_guide?.flow_steps || [];
    if (!steps.length) return "";
    const nodes = steps
      .map(
        (st) => `
          <div class="card-flow-step" title="${escapeHtml(st.detail || st.label)}">
            <span class="card-flow-step-icon">${escapeHtml(st.icon || "•")}</span>
            <span class="card-flow-step-label">${escapeHtml(st.label || "")}</span>
          </div>
        `
      )
      .join('<span class="card-flow-arrow">➔</span>');
    return `<div class="card-flow-bar" aria-label="작동 흐름">${nodes}</div>`;
  }

  function renderCards(skills) {
    const catMap = getCategoryMap();
    $("cardsView").innerHTML = skills
      .map((s) => {
        const catTitle = catMap[s.major_category]?.title || s.major_category;
        const st = s.status || "보고 싶음";
        const tagsHtml = (s.tags || [])
          .map((t) => `<span class="tag-chip" data-tag="${escapeHtml(t)}">#${escapeHtml(t)}</span>`)
          .join("");
        const execBadge = s.visual_guide?.exec_type
          ? `<span class="badge badge-exec">${escapeHtml(s.visual_guide.exec_type)}</span>`
          : "";
        const langBadge = s.language ? `<span class="badge">${escapeHtml(s.language)}</span>` : "";
        const licBadge = s.license ? `<span class="badge">${escapeHtml(s.license)}</span>` : "";
        const useWhen = s.use_when || s.description || "";
        const flowBarHtml = renderCardFlowBar(s);
        const primaryCmd = getPrimaryCommand(s);

        return `
          <article class="skill-card" data-id="${s.id}">
            <div class="card-top">
              <div class="card-title-group">
                <div class="card-id-repo">
                  <span>#${s.id}</span>
                  <span>·</span>
                  <span>${escapeHtml(s.repo)}</span>
                  <span>·</span>
                  <span>${escapeHtml(formatStars(s.stars_at_save))}</span>
                </div>
                <h3 class="card-title">${escapeHtml(s.name)}</h3>
              </div>
              <select class="status-select ${statusClass(st)}" data-action="quick-status" data-id="${s.id}" aria-label="상태 변경">
                ${STATUS_LIST.map((opt) => `<option value="${opt}" ${opt === st ? "selected" : ""}>${opt}</option>`).join("")}
              </select>
            </div>

            <div class="card-badges">
              <span class="badge badge-cat">${escapeHtml(catTitle)}</span>
              ${execBadge}
              <span class="badge">${escapeHtml(s.genre || "기타")}</span>
              ${langBadge}
              ${licBadge}
            </div>

            ${flowBarHtml}

            <p class="card-desc">${escapeHtml(s.description || "")}</p>

            <div class="use-when-box">
              <strong>🎯 언제 꺼내 쓰나</strong>
              <span>${escapeHtml(useWhen)}</span>
            </div>

            ${
              primaryCmd
                ? `<div class="card-cmd-bar">
                    <span class="card-cmd-text" title="${escapeHtml(primaryCmd)}">$ ${escapeHtml(primaryCmd)}</span>
                    <button class="btn btn-ghost btn-sm" data-action="copy-cmd" data-cmd="${escapeHtml(primaryCmd)}" type="button" title="명령어/프롬프트 복사">📋</button>
                  </div>`
                : ""
            }

            ${tagsHtml ? `<div class="card-tags">${tagsHtml}</div>` : ""}

            ${s.memo ? `<div class="card-memo" title="${escapeHtml(s.memo)}">📝 ${escapeHtml(s.memo)}</div>` : ""}

            <div class="card-links">
              <a class="link-pill" href="${escapeHtml(s.github_url)}" target="_blank" rel="noopener noreferrer">저장소 ↗</a>
              <a class="link-pill" href="${escapeHtml(s.github_url)}#readme" target="_blank" rel="noopener noreferrer">README ↗</a>
              <a class="link-pill" href="${escapeHtml(s.github_url)}/issues" target="_blank" rel="noopener noreferrer">이슈 ↗</a>
              <a class="link-pill" href="${escapeHtml(s.github_url)}/releases" target="_blank" rel="noopener noreferrer">릴리스 ↗</a>
            </div>

            <div class="card-actions">
              <div class="card-actions-left">
                <button class="btn btn-secondary btn-sm" data-action="detail" data-id="${s.id}" type="button">🧭 도식·명령어</button>
                <button class="btn btn-ghost btn-sm" data-action="edit" data-id="${s.id}" type="button">수정</button>
              </div>
              <div class="card-actions-right">
                <button class="btn btn-ghost btn-sm" data-action="refresh" data-id="${s.id}" type="button" title="GitHub 스타·정보 새로고침">🔄</button>
                <button class="btn btn-ghost btn-sm danger-text danger-btn" data-action="delete" data-id="${s.id}" type="button">삭제</button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderVisualGuide() {
    const skills = state.catalog.skills || [];
    const bySlug = {};
    for (const s of skills) bySlug[s.slug] = s;
    const q = state.filters.query.trim().toLowerCase();

    const pipelinesHtml = LIFECYCLE_PIPELINES.map((pipe) => {
      const stagesHtml = pipe.stages
        .map((st) => {
          const btns = st.slugs
            .map((sl) => {
              const item = bySlug[sl];
              if (!item) return "";
              return `<button class="pipeline-node-btn" data-action="detail" data-id="${item.id}" type="button" title="${escapeHtml(item.use_when || item.description)}">${escapeHtml(item.name)}</button>`;
            })
            .filter(Boolean)
            .join("");
          return `
            <div class="pipeline-stage">
              <div class="pipeline-stage-label">${escapeHtml(st.label)}</div>
              <div class="pipeline-nodes">${btns}</div>
            </div>
          `;
        })
        .join('<span class="modal-flow-arrow">➔</span>');

      return `
        <div class="pipeline-card">
          <div class="pipeline-title">${escapeHtml(pipe.title)}</div>
          <div class="pipeline-track">${stagesHtml}</div>
        </div>
      `;
    }).join("");

    const mpSkill = bySlug["mattpocock-skills"];
    const mpSubs = mpSkill?.visual_guide?.sub_skills || [];
    const phases = ["전체", ...new Set(mpSubs.map((sub) => sub.phase))];
    const activePhase = phases.includes(state.visualMattPhase) ? state.visualMattPhase : "전체";

    const filteredMp = mpSubs.filter((sub) => {
      if (activePhase !== "전체" && sub.phase !== activePhase) return false;
      if (q) {
        const hay = `${sub.name} ${sub.phase} ${sub.flow} ${sub.desc} ${sub.cmd}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    const phasePillsHtml = phases
      .map(
        (ph) =>
          `<button class="pill ${ph === activePhase ? "active" : ""}" data-mp-phase="${escapeHtml(ph)}" type="button">${escapeHtml(ph)}</button>`
      )
      .join("");

    const mpGridHtml = filteredMp
      .map(
        (sub) => `
        <div class="subskill-card">
          <div class="subskill-head">
            <span class="subskill-name">${escapeHtml(sub.name)}</span>
            <span class="badge">${escapeHtml(sub.phase)}</span>
          </div>
          <div class="subskill-flow">${escapeHtml(sub.flow)}</div>
          <p class="subskill-desc">${escapeHtml(sub.desc)}</p>
          <div class="subskill-cmd-row">
            <code title="${escapeHtml(sub.cmd)}">${escapeHtml(sub.cmd)}</code>
            <button class="btn btn-ghost btn-sm" data-action="copy-cmd" data-cmd="${escapeHtml(sub.cmd)}" type="button">📋 복사</button>
          </div>
        </div>
      `
      )
      .join("");

    $("visualView").innerHTML = `
      <div class="visual-section-card">
        <div>
          <h2 class="visual-section-title">🧭 상황별 5대 오픈소스 스킬 파이프라인</h2>
          <p class="visual-section-sub">각 단계의 스킬 버튼을 누르면 작동 흐름도·Before/After·실행 명령어 GUI 플레이북이 열립니다.</p>
        </div>
        <div class="pipeline-list">${pipelinesHtml}</div>
      </div>

      ${
        mpSubs.length
          ? `<div class="visual-section-card">
              <div>
                <h2 class="visual-section-title">⚡ Antigravity 전역 스킬 27종 GUI 치트시트 (Matt Pocock Skills)</h2>
                <p class="visual-section-sub">현재 PC 전역에 설치된 27개 스킬입니다. 단계별 필터를 고르고 명령어/프롬프트를 1클릭으로 복사해 채팅창에 바로 붙여넣으세요.</p>
              </div>
              <div class="subskills-filter-bar">${phasePillsHtml}</div>
              <div class="subskills-grid">${mpGridHtml || '<p class="help-text">검색 조건에 맞는 세부 스킬이 없습니다.</p>'}</div>
            </div>`
          : ""
      }
    `;
  }

  function renderSituations() {
    const bySlug = {};
    for (const s of state.catalog.skills || []) {
      bySlug[s.slug] = s;
    }
    const q = state.filters.query.trim().toLowerCase();

    const cards = SITUATION_GUIDE.map((sit) => {
      const resolved = sit.slugs.map((sl) => bySlug[sl]).filter(Boolean);
      if (q) {
        const hay = `${sit.title} ${sit.note} ${resolved.map((r) => `${r.name} ${r.description} ${(r.tags || []).join(" ")}`).join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return "";
      }
      const itemsHtml = resolved
        .map(
          (item) => `
          <div class="situation-skill-item" data-action="detail" data-id="${item.id}">
            <div>
              <strong>${escapeHtml(item.name)}</strong>
              <div class="help-text">${escapeHtml(item.repo)} · ${escapeHtml(formatStars(item.stars_at_save))}</div>
            </div>
            <span class="badge">${escapeHtml(item.status || "보고 싶음")}</span>
          </div>
        `
        )
        .join("");

      return `
        <div class="situation-card">
          <div>
            <h3>🎯 ${escapeHtml(sit.title)}</h3>
            <p class="situation-note">${escapeHtml(sit.note)}</p>
          </div>
          <div class="situation-skills">${itemsHtml}</div>
        </div>
      `;
    }).filter(Boolean);

    $("situationsView").innerHTML = cards.length
      ? `<div class="situations-grid">${cards.join("")}</div>`
      : `<div class="empty-state"><p>검색어와 일치하는 추천 시나리오가 없습니다.</p></div>`;
  }

  function renderTable(skills) {
    const catMap = getCategoryMap();
    const rows = skills
      .map((s) => {
        const catTitle = catMap[s.major_category]?.title || s.major_category;
        const st = s.status || "보고 싶음";
        return `
          <tr>
            <td>#${s.id}</td>
            <td>
              <strong><a href="#" data-action="detail" data-id="${s.id}">${escapeHtml(s.name)}</a></strong><br />
              <small class="help-text">${escapeHtml(s.repo)}</small>
            </td>
            <td>${escapeHtml(catTitle)}<br /><small class="help-text">${escapeHtml(s.genre || "-")}</small></td>
            <td><span class="status-select ${statusClass(st)}">${escapeHtml(st)}</span></td>
            <td>${escapeHtml(formatStars(s.stars_at_save))}</td>
            <td>${escapeHtml(s.use_when || s.description || "")}</td>
            <td style="white-space:nowrap;">
              <a class="btn btn-ghost btn-sm" href="${escapeHtml(s.github_url)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <button class="btn btn-ghost btn-sm" data-action="edit" data-id="${s.id}" type="button">수정</button>
              <button class="btn btn-ghost btn-sm danger-text" data-action="delete" data-id="${s.id}" type="button">삭제</button>
            </td>
          </tr>
        `;
      })
      .join("");

    $("tableView").innerHTML = `
      <table class="skills-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>스킬 / 저장소</th>
            <th>분야 / 장르</th>
            <th>상태</th>
            <th>스타</th>
            <th>적재적소 활용 시점</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  // Modals
  function openModal(id) {
    $(id).classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal(id) {
    $(id).classList.add("hidden");
    const anyOpen = [...document.querySelectorAll(".modal-backdrop")].some((el) => !el.classList.contains("hidden"));
    if (!anyOpen) document.body.style.overflow = "";
  }

  function populateFormSelects() {
    const categories = state.catalog.categories || [];
    $("fCategory").innerHTML = categories
      .map((c) => `<option value="${escapeHtml(c.id)}">${escapeHtml(c.id)} — ${escapeHtml(c.title)}</option>`)
      .join("");

    const genres = [...new Set((state.catalog.skills || []).map((s) => s.genre).filter(Boolean))].sort((a, b) =>
      a.localeCompare(b, "ko")
    );
    $("genreSuggestions").innerHTML = genres.map((g) => `<option value="${escapeHtml(g)}"></option>`).join("");
  }

  function openAddSkillModal() {
    populateFormSelects();
    $("formModalTitle").textContent = "새 GitHub 스킬 추가";
    $("skillForm").reset();
    $("editSkillId").value = "";
    $("fSavedDate").value = new Date().toISOString().slice(0, 10);
    if (state.filters.category !== "전체") {
      $("fCategory").value = state.filters.category;
    }
    openModal("skillFormModal");
    $("fRepo").focus();
  }

  function openEditSkillModal(skillId) {
    const skill = (state.catalog.skills || []).find((s) => s.id === skillId);
    if (!skill) return;
    populateFormSelects();
    $("formModalTitle").textContent = `스킬 수정 — ${skill.name}`;
    $("editSkillId").value = String(skill.id);
    $("fRepo").value = skill.github_url || skill.repo || "";
    $("fName").value = skill.name || "";
    $("fSlug").value = skill.slug || "";
    $("fCategory").value = skill.major_category || "01_claude-skills-plugins";
    $("fGenre").value = skill.genre || "";
    $("fStatus").value = skill.status || "보고 싶음";
    $("fStars").value = skill.stars_at_save ?? "";
    $("fLanguage").value = skill.language || "";
    $("fLicense").value = skill.license || "";
    $("fDescription").value = skill.description || "";
    $("fUseWhen").value = skill.use_when || "";
    $("fTags").value = (skill.tags || []).join(", ");
    $("fSavedDate").value = skill.saved_date || new Date().toISOString().slice(0, 10);
    $("fExecType").value = skill.visual_guide?.exec_type || "";
    $("fPrimaryCmd").value = getPrimaryCommand(skill);
    $("fInstallUsage").value = skill.install_or_usage || "";
    $("fMemo").value = skill.memo || "";
    openModal("skillFormModal");
  }

  function generateSkillMarkdown(skill) {
    const catMap = getCategoryMap();
    const catTitle = catMap[skill.major_category]?.title || skill.major_category;
    const tagsStr = (skill.tags || []).map((t) => `\`#${t}\``).join(" ");
    return [
      "---",
      `name: ${skill.slug}`,
      `title: "${(skill.name || "").replace(/"/g, '\\"')}"`,
      `category: ${skill.major_category}`,
      `genre: "${(skill.genre || "").replace(/"/g, '\\"')}"`,
      `status: "${skill.status || "보고 싶음"}"`,
      `repo: "${skill.repo}"`,
      `github_url: "${skill.github_url}"`,
      `description: "${(skill.use_when || skill.description || "").replace(/"/g, '\\"')}"`,
      "---",
      "",
      `# ${skill.name}`,
      "",
      `> **[${catTitle}](../README.md)** · 세부 장르: \`${skill.genre || "기타"}\` · 상태: \`${skill.status || "보고 싶음"}\``,
      "",
      skill.description || "",
      "",
      "## 언제 꺼내 쓰나 (적재적소 활용 시점)",
      "",
      `- ${skill.use_when || skill.description || ""}`,
      "",
      "## 기본 정보",
      "",
      `- GitHub: [${skill.repo}](${skill.github_url})`,
      `- 스타: ${formatStars(skill.stars_at_save)} · 라이선스: ${skill.license || "미확인"}`,
      `- 태그: ${tagsStr}`,
      "",
      "## 설치 및 활용 방법",
      "",
      `- ${skill.install_or_usage || "저장소 README 참고"}`,
      "",
      "## 서재 메모",
      "",
      skill.memo || "등록된 메모 없음"
    ].join("\n");
  }

  function renderModalVisualSection(skill) {
    const vg = skill.visual_guide || {};
    const steps = vg.flow_steps || [];
    const ba = vg.before_after || {};
    const cmds = vg.commands || [];
    const subs = vg.sub_skills || [];

    const flowHtml = steps.length
      ? `
        <div class="detail-section">
          <h4>🧭 한눈에 보는 작동 흐름 (Visual Flow)</h4>
          <div class="modal-flow-diagram">
            ${steps
              .map(
                (st) => `
                <div class="modal-flow-node">
                  <div class="modal-flow-node-head">
                    <span>${escapeHtml(st.icon || "⚡")}</span>
                    <span>${escapeHtml(st.label || "")}</span>
                  </div>
                  <div class="modal-flow-node-detail">${escapeHtml(st.detail || "")}</div>
                </div>
              `
              )
              .join('<div class="modal-flow-arrow">➔</div>')}
          </div>
        </div>
      `
      : "";

    const baHtml =
      ba.before || ba.after
        ? `
        <div class="before-after-grid">
          <div class="ba-box ba-before">
            <span class="ba-title">❌ 기존 방식의 불편함 (Before)</span>
            <div>${escapeHtml(ba.before || "")}</div>
          </div>
          <div class="ba-box ba-after">
            <span class="ba-title">✅ 스킬 적용 후 변화 (After)</span>
            <div>${escapeHtml(ba.after || "")}</div>
          </div>
        </div>
      `
        : "";

    const cmdsHtml = cmds.length
      ? `
        <div class="detail-section">
          <h4>⌨️ 단계별 명령어 & 프롬프트 치트시트</h4>
          <div class="command-playbook">
            ${cmds
              .map(
                (c) => `
                <div class="cmd-card">
                  <div class="cmd-card-header">
                    <span class="cmd-card-step">${escapeHtml(c.step || "실행")}</span>
                    <span class="cmd-card-desc">${escapeHtml(c.desc || "")}</span>
                    <button class="btn btn-ghost btn-sm" data-action="copy-cmd" data-cmd="${escapeHtml(c.cmd || "")}" type="button">📋 복사</button>
                  </div>
                  <pre class="cmd-card-code">${escapeHtml(c.cmd || "")}</pre>
                </div>
              `
              )
              .join("")}
          </div>
        </div>
      `
      : "";

    let subsHtml = "";
    if (subs.length) {
      const phases = ["전체", ...new Set(subs.map((sub) => sub.phase || "기타"))];
      subsHtml = `
        <div class="detail-section" id="modalSubskillsBox">
          <h4>🧩 세부 스킬 / 파이프라인 단계 (${subs.length}종) — 클릭하여 복사</h4>
          ${
            phases.length > 2
              ? `<div class="subskills-filter-bar">
                  ${phases
                    .map(
                      (ph, idx) =>
                        `<button class="pill ${idx === 0 ? "active" : ""}" data-modal-phase="${escapeHtml(ph)}" type="button">${escapeHtml(ph)}</button>`
                    )
                    .join("")}
                </div>`
              : ""
          }
          <div class="subskills-grid" id="modalSubskillsGrid">
            ${subs
              .map(
                (sub) => `
                <div class="subskill-card" data-sub-phase="${escapeHtml(sub.phase || "기타")}">
                  <div class="subskill-head">
                    <span class="subskill-name">${escapeHtml(sub.name)}</span>
                    <span class="badge">${escapeHtml(sub.phase || "")}</span>
                  </div>
                  <div class="subskill-flow">${escapeHtml(sub.flow || "")}</div>
                  <p class="subskill-desc">${escapeHtml(sub.desc || "")}</p>
                  <div class="subskill-cmd-row">
                    <code title="${escapeHtml(sub.cmd || "")}">${escapeHtml(sub.cmd || "")}</code>
                    <button class="btn btn-ghost btn-sm" data-action="copy-cmd" data-cmd="${escapeHtml(sub.cmd || "")}" type="button">📋</button>
                  </div>
                </div>
              `
              )
              .join("")}
          </div>
        </div>
      `;
    }

    return flowHtml + baHtml + cmdsHtml + subsHtml;
  }

  function openDetailModal(skillId) {
    const skill = (state.catalog.skills || []).find((s) => s.id === skillId);
    if (!skill) return;
    const catMap = getCategoryMap();
    const catTitle = catMap[skill.major_category]?.title || skill.major_category;

    $("detailBadges").innerHTML = `
      <span class="badge badge-cat">${escapeHtml(catTitle)}</span>
      ${skill.visual_guide?.exec_type ? `<span class="badge badge-exec">${escapeHtml(skill.visual_guide.exec_type)}</span>` : ""}
      <span class="badge">${escapeHtml(skill.genre || "기타")}</span>
      <span class="badge">${escapeHtml(formatStars(skill.stars_at_save))}</span>
      ${skill.language ? `<span class="badge">${escapeHtml(skill.language)}</span>` : ""}
      ${skill.license ? `<span class="badge">${escapeHtml(skill.license)}</span>` : ""}
    `;
    $("detailTitle").textContent = `#${skill.id} ${skill.name}`;

    const cloneCmd = `powershell -File scripts\\clone-skill.ps1 ${skill.slug}`;
    const gitCloneCmd = `git clone ${skill.github_url}`;
    const agentPrompt = `현재 작업에 '${skill.name}' (${skill.github_url}) 오픈소스 스킬을 적용하고 싶습니다.\n- 목적/활용 시점: ${skill.use_when || skill.description}\n- 참고 메모: ${skill.memo || "없음"}\n이 도구의 설치 및 적용 방법을 안내하고 현재 프로젝트에 맞게 도와주세요.`;
    const visualSectionHtml = renderModalVisualSection(skill);

    $("detailBody").innerHTML = `
      <p style="margin:0;">${escapeHtml(skill.description || "")}</p>

      <div class="use-when-box">
        <strong>🎯 언제 꺼내 쓰나 (적재적소 활용 시점)</strong>
        <span>${escapeHtml(skill.use_when || skill.description || "")}</span>
      </div>

      ${visualSectionHtml}

      <div class="detail-section">
        <h4>🔗 저장소 및 설치 방법</h4>
        <div class="card-links" style="margin-bottom:8px;">
          <a class="link-pill" href="${escapeHtml(skill.github_url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(skill.repo)} ↗</a>
          <a class="link-pill" href="${escapeHtml(skill.github_url)}#readme" target="_blank" rel="noopener noreferrer">README ↗</a>
          <a class="link-pill" href="${escapeHtml(skill.github_url)}/issues" target="_blank" rel="noopener noreferrer">Issues ↗</a>
          <a class="link-pill" href="${escapeHtml(skill.github_url)}/releases" target="_blank" rel="noopener noreferrer">Releases ↗</a>
        </div>
        <div class="help-text">${escapeHtml(skill.install_or_usage || "저장소 README 참고")}</div>
        <div class="help-text" style="margin-top:4px;">로컬 카드 경로: <code>${escapeHtml(skill.major_category)}/${escapeHtml(skill.slug)}/SKILL.md</code></div>
      </div>

      <div class="detail-section">
        <h4>📝 서재 메모 (Context & Caveats)</h4>
        <div style="font-size:0.88rem;">${escapeHtml(skill.memo || "등록된 메모가 없습니다.")}</div>
      </div>

      <div class="detail-section">
        <h4>⚡ 원클릭 복사 & 실행</h4>
        <div class="copy-bar">
          <button id="btnCopyAgentPrompt" class="btn btn-primary btn-sm" type="button">🤖 AI 에이전트 적용 프롬프트 복사</button>
          <button id="btnCopyClonePs" class="btn btn-secondary btn-sm" type="button">💻 서재 클론 명령 복사</button>
          <button id="btnCopyGitClone" class="btn btn-secondary btn-sm" type="button">📦 git clone URL 복사</button>
          <button id="btnCopySkillMd" class="btn btn-secondary btn-sm" type="button">📄 SKILL.md 마크다운 복사</button>
          ${state.syncMode === "local" || state.syncMode === "local_supabase" ? `<button id="btnLocalCloneNow" class="btn btn-secondary btn-sm" type="button">⬇️ 지금 내 PC에 클론</button>` : ""}
        </div>
      </div>
    `;

    $("detailBody").onclick = (ev) => {
      const copyBtn = ev.target.closest("[data-action='copy-cmd']");
      if (copyBtn) {
        copyText(copyBtn.dataset.cmd || "", "명령어/프롬프트");
        return;
      }
      const phaseBtn = ev.target.closest("[data-modal-phase]");
      if (phaseBtn) {
        const chosen = phaseBtn.dataset.modalPhase;
        $("detailBody").querySelectorAll("[data-modal-phase]").forEach((b) => {
          b.classList.toggle("active", b === phaseBtn);
        });
        $("detailBody").querySelectorAll("#modalSubskillsGrid .subskill-card").forEach((card) => {
          const match = chosen === "전체" || card.dataset.subPhase === chosen;
          card.classList.toggle("hidden", !match);
        });
      }
    };

    $("detailFooter").innerHTML = `
      <div>
        <button id="btnDetailDelete" class="btn btn-ghost danger-text" type="button">🗑️ 삭제</button>
      </div>
      <div style="display:flex; gap:8px;">
        <button id="btnDetailEdit" class="btn btn-secondary" type="button">✏️ 수정</button>
        <button class="btn btn-primary" data-close="skillDetailModal" type="button">닫기</button>
      </div>
    `;

    $("btnCopyAgentPrompt").onclick = () => copyText(agentPrompt, "AI 적용 프롬프트");
    $("btnCopyClonePs").onclick = () => copyText(cloneCmd, "서재 클론 명령어");
    $("btnCopyGitClone").onclick = () => copyText(gitCloneCmd, "git clone 명령어");
    $("btnCopySkillMd").onclick = () => copyText(generateSkillMarkdown(skill), "SKILL.md 마크다운");
    $("btnDetailEdit").onclick = () => {
      closeModal("skillDetailModal");
      openEditSkillModal(skill.id);
    };
    $("btnDetailDelete").onclick = () => {
      closeModal("skillDetailModal");
      deleteSkill(skill.id);
    };

    const localCloneBtn = $("btnLocalCloneNow");
    if (localCloneBtn) {
      localCloneBtn.onclick = async () => {
        localCloneBtn.disabled = true;
        localCloneBtn.textContent = "클론 진행 중...";
        try {
          const res = await fetch("/api/clone", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug: skill.slug })
          });
          const result = await res.json();
          if (!res.ok || !result.ok) throw new Error(result.error || "클론 실패");
          showToast(`'${skill.name}' 저장소를 로컬 ./repo에 클론했습니다!`, "success");
        } catch (err) {
          showToast(`로컬 클론 실패: ${err.message}`, "error");
        } finally {
          localCloneBtn.disabled = false;
          localCloneBtn.textContent = "⬇️ 지금 내 PC에 클론";
        }
      };
    }

    openModal("skillDetailModal");
  }

  function buildDefaultVisualGuide({ name, slug, description, use_when, execType, primaryCmd }) {
    const cmd = primaryCmd || `${name} 스킬을 현재 작업에 맞게 실행하는 방법을 안내해줘`;
    return {
      exec_type: execType || "⚡ GitHub 오픈소스 스킬",
      flow_steps: [
        { icon: "📥", label: "요구사항·대상 입력", detail: use_when || description || name },
        { icon: "⚙️", label: `${name} 실행`, detail: description || "핵심 워크플로우 처리" },
        { icon: "✨", label: "결과물 출력", detail: "작업 완료 및 검증" }
      ],
      before_after: {
        before: `${name} 없이 수동으로 반복 처리`,
        after: `${name} 자동화로 빠르고 일관된 결과 확보`
      },
      commands: [
        { step: "① 저장소 클론", cmd: `powershell -File scripts\\clone-skill.ps1 ${slug}`, desc: "로컬 ./repo 폴더에 다운로드" },
        { step: "② 실행 / 호출", cmd, desc: "핵심 실행 명령어 또는 AI 호출 프롬프트" }
      ]
    };
  }

  // CRUD Handlers
  async function handleFormSubmit(e) {
    e.preventDefault();
    const repoParsed = parseGithubRepo($("fRepo").value);
    if (!repoParsed) {
      showToast("올바른 GitHub URL 또는 'owner/repo' 형식을 입력해 주세요.", "error");
      return;
    }

    const editId = $("editSkillId").value ? Number($("editSkillId").value) : null;
    const catId = $("fCategory").value;
    const name = $("fName").value.trim();
    const rawSlug = $("fSlug").value.trim() || repoParsed.split("/")[1];
    let slug = slugify(rawSlug);
    const starsVal = $("fStars").value.trim() === "" ? null : Number($("fStars").value);
    const tags = $("fTags").value
      .split(",")
      .map((t) => t.trim().replace(/^#/, ""))
      .filter(Boolean);

    const skills = state.catalog.skills;

    const execTypeVal = $("fExecType").value.trim();
    const primaryCmdVal = $("fPrimaryCmd").value.trim();

    if (editId) {
      const target = skills.find((s) => s.id === editId);
      if (!target) return;
      const existingVg = target.visual_guide ? structuredClone(target.visual_guide) : buildDefaultVisualGuide({ name, slug, description: $("fDescription").value.trim(), use_when: $("fUseWhen").value.trim(), execType: execTypeVal, primaryCmd: primaryCmdVal });
      if (execTypeVal) existingVg.exec_type = execTypeVal;
      if (primaryCmdVal) {
        if (!Array.isArray(existingVg.commands) || existingVg.commands.length === 0) {
          existingVg.commands = [{ step: "① 실행 명령", cmd: primaryCmdVal, desc: "핵심 실행/호출 명령" }];
        } else if (existingVg.commands.length > 1) {
          existingVg.commands[1].cmd = primaryCmdVal;
        } else {
          existingVg.commands[0].cmd = primaryCmdVal;
        }
      }
      Object.assign(target, {
        name,
        slug,
        repo: repoParsed,
        github_url: `https://github.com/${repoParsed}`,
        major_category: catId,
        genre: $("fGenre").value.trim() || getCategoryMap()[catId]?.title || "기타",
        status: $("fStatus").value,
        stars_at_save: starsVal,
        language: $("fLanguage").value.trim(),
        license: $("fLicense").value.trim() || "미확인",
        description: $("fDescription").value.trim(),
        use_when: $("fUseWhen").value.trim(),
        tags,
        saved_date: $("fSavedDate").value || target.saved_date,
        install_or_usage: $("fInstallUsage").value.trim(),
        memo: $("fMemo").value.trim(),
        visual_guide: existingVg
      });
      closeModal("skillFormModal");
      renderAll();
      await persistCatalog(`'${target.name}' 수정`);
      return;
    }

    // Check duplicate repo
    const dup = skills.find((s) => s.repo.toLowerCase() === repoParsed.toLowerCase());
    if (dup) {
      showToast(`이미 서재에 등록된 저장소입니다 (#${dup.id} ${dup.name}).`, "error");
      return;
    }

    // Deduplicate slug within category
    const used = new Set(skills.filter((s) => s.major_category === catId).map((s) => s.slug));
    const baseSlug = slug;
    let counter = 2;
    while (used.has(slug)) {
      slug = `${baseSlug}-${counter++}`;
    }

    const nextId = skills.reduce((max, s) => Math.max(max, s.id || 0), 0) + 1;
    const descVal = $("fDescription").value.trim();
    const useWhenVal = $("fUseWhen").value.trim();
    const newSkill = {
      id: nextId,
      slug,
      name,
      repo: repoParsed,
      github_url: `https://github.com/${repoParsed}`,
      major_category: catId,
      genre: $("fGenre").value.trim() || getCategoryMap()[catId]?.title || "기타",
      status: $("fStatus").value,
      stars_at_save: starsVal,
      language: $("fLanguage").value.trim(),
      license: $("fLicense").value.trim() || "미확인",
      saved_date: $("fSavedDate").value || new Date().toISOString().slice(0, 10),
      description: descVal,
      tags,
      memo: $("fMemo").value.trim(),
      use_when: useWhenVal,
      install_or_usage:
        $("fInstallUsage").value.trim() ||
        `저장소 클론 후 README 참고 (powershell -File scripts/clone-skill.ps1 ${slug})`,
      visual_guide: buildDefaultVisualGuide({
        name,
        slug,
        description: descVal,
        use_when: useWhenVal,
        execType: execTypeVal,
        primaryCmd: primaryCmdVal
      })
    };

    skills.unshift(newSkill);
    closeModal("skillFormModal");
    renderAll();
    await persistCatalog(`'${newSkill.name}' 추가`);
  }

  async function deleteSkill(skillId) {
    const skills = state.catalog.skills || [];
    const target = skills.find((s) => s.id === skillId);
    if (!target) return;
    if (!confirm(`'${target.name}' (${target.repo}) 항목을 서재에서 삭제할까요?`)) return;
    state.catalog.skills = skills.filter((s) => s.id !== skillId);
    renderAll();
    await persistCatalog(`'${target.name}' 삭제`);
  }

  async function refreshSkillStars(skillId) {
    const skill = (state.catalog.skills || []).find((s) => s.id === skillId);
    if (!skill) return;
    showToast(`${skill.repo} 최신 정보를 불러오는 중...`);
    try {
      const meta = await fetchGithubRepoMeta(skill.repo);
      if (meta.stars !== null) skill.stars_at_save = meta.stars;
      if (meta.language) skill.language = meta.language;
      if (meta.license && meta.license !== "NOASSERTION") skill.license = meta.license;
      renderAll();
      await persistCatalog(`'${skill.name}' GitHub 정보 새로고침`);
    } catch (err) {
      showToast(`GitHub 새로고침 실패: ${err.message}`, "error");
    }
  }

  async function quickChangeStatus(skillId, newStatus) {
    const skill = (state.catalog.skills || []).find((s) => s.id === skillId);
    if (!skill) return;
    skill.status = newStatus;
    renderAll();
    await persistCatalog(`'${skill.name}' 상태 → ${newStatus}`);
  }

  // Sync Modal Handlers
  function openSyncModal(defaultTab = "github") {
    $("ghRepo").value = state.ghConfig.repo || "";
    $("ghBranch").value = state.ghConfig.branch || "main";
    $("ghToken").value = state.ghConfig.token || "";
    $("ghAutoPush").checked = state.ghConfig.autoPush !== false;
    $("ghStatusMsg").textContent = "";
    switchSyncTab(defaultTab);
    openModal("syncModal");
  }

  function switchSyncTab(tabName) {
    document.querySelectorAll("[data-sync-tab]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.syncTab === tabName);
    });
    $("syncTabGithub").classList.toggle("hidden", tabName !== "github");
    $("syncTabBackup").classList.toggle("hidden", tabName !== "backup");
    $("syncTabDeploy").classList.toggle("hidden", tabName !== "deploy");
  }

  function bindEvents() {
    $("btnTheme").addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme");
      applyTheme(cur === "dark" ? "light" : "dark");
    });

    $("btnAddSkill").addEventListener("click", openAddSkillModal);
    $("btnEmptyAdd").addEventListener("click", openAddSkillModal);
    $("btnOpenSync").addEventListener("click", () => openSyncModal("github"));
    $("syncModeBadge").addEventListener("click", () => openSyncModal("github"));

    // View tabs
    document.querySelectorAll(".view-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        state.viewMode = tab.dataset.view;
        document.querySelectorAll(".view-tab").forEach((t) => {
          const active = t === tab;
          t.classList.toggle("active", active);
          t.setAttribute("aria-selected", String(active));
        });
        renderAll();
      });
    });

    // Search & sort
    const searchInput = $("searchInput");
    searchInput.addEventListener("input", () => {
      state.filters.query = searchInput.value;
      $("btnClearSearch").classList.toggle("hidden", !searchInput.value);
      renderAll();
    });
    $("btnClearSearch").addEventListener("click", () => {
      searchInput.value = "";
      state.filters.query = "";
      $("btnClearSearch").classList.add("hidden");
      renderAll();
    });
    $("sortSelect").addEventListener("change", (e) => {
      state.filters.sort = e.target.value;
      renderAll();
    });

    // Filter pill clicks (event delegation)
    $("statusPills").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-status]");
      if (!btn) return;
      state.filters.status = btn.dataset.status;
      renderAll();
    });
    $("categoryPills").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-category]");
      if (!btn) return;
      state.filters.category = btn.dataset.category;
      state.filters.genre = "전체";
      renderAll();
    });
    $("genrePills").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-genre]");
      if (!btn) return;
      state.filters.genre = btn.dataset.genre;
      renderAll();
    });
    $("btnToggleGenres").addEventListener("click", () => {
      state.genresExpanded = !state.genresExpanded;
      renderFilters();
    });

    const resetFilters = () => {
      state.filters.query = "";
      state.filters.status = "전체";
      state.filters.category = "전체";
      state.filters.genre = "전체";
      searchInput.value = "";
      $("btnClearSearch").classList.add("hidden");
      renderAll();
    };
    $("btnResetFilters").addEventListener("click", resetFilters);
    $("btnEmptyReset").addEventListener("click", resetFilters);

    // Card / Situation / Table / Visual Guide actions (delegation)
    const handleListClick = (e) => {
      const mpPhaseBtn = e.target.closest("[data-mp-phase]");
      if (mpPhaseBtn) {
        state.visualMattPhase = mpPhaseBtn.dataset.mpPhase;
        renderVisualGuide();
        return;
      }

      const tagEl = e.target.closest("[data-tag]");
      if (tagEl) {
        searchInput.value = tagEl.dataset.tag;
        state.filters.query = tagEl.dataset.tag;
        $("btnClearSearch").classList.remove("hidden");
        renderAll();
        return;
      }

      const actEl = e.target.closest("[data-action]");
      if (!actEl) return;
      if (actEl.tagName === "SELECT") return;
      const action = actEl.dataset.action;
      if (action === "copy-cmd") {
        copyText(actEl.dataset.cmd || "", "명령어/프롬프트");
        return;
      }
      const id = Number(actEl.dataset.id);
      if (action === "detail") {
        e.preventDefault();
        openDetailModal(id);
      } else if (action === "edit") {
        openEditSkillModal(id);
      } else if (action === "delete") {
        deleteSkill(id);
      } else if (action === "refresh") {
        refreshSkillStars(id);
      }
    };

    $("cardsView").addEventListener("click", handleListClick);
    $("visualView").addEventListener("click", handleListClick);
    $("situationsView").addEventListener("click", handleListClick);
    $("tableView").addEventListener("click", handleListClick);

    $("cardsView").addEventListener("change", (e) => {
      const sel = e.target.closest("[data-action='quick-status']");
      if (!sel) return;
      quickChangeStatus(Number(sel.dataset.id), sel.value);
    });

    // Modal close buttons & backdrop click (delegated so dynamically rendered buttons also work)
    document.addEventListener("click", (e) => {
      const closeBtn = e.target.closest("[data-close]");
      if (closeBtn) closeModal(closeBtn.dataset.close);
    });
    document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) closeModal(backdrop.id);
      });
    });

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll(".modal-backdrop:not(.hidden)").forEach((m) => closeModal(m.id));
      } else if (e.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
        e.preventDefault();
        searchInput.focus();
      }
    });

    // Add/Edit form events
    $("skillForm").addEventListener("submit", handleFormSubmit);
    $("btnFetchGithub").addEventListener("click", async () => {
      const parsed = parseGithubRepo($("fRepo").value);
      if (!parsed) {
        showToast("먼저 올바른 GitHub URL 또는 'owner/repo'를 입력하세요.", "error");
        return;
      }
      const btn = $("btnFetchGithub");
      btn.disabled = true;
      btn.textContent = "불러오는 중...";
      try {
        const meta = await fetchGithubRepoMeta(parsed);
        if (!$("fName").value.trim()) $("fName").value = meta.name;
        if (!$("fSlug").value.trim()) $("fSlug").value = slugify(parsed.split("/")[1]);
        if (meta.stars !== null) $("fStars").value = meta.stars;
        if (meta.language) $("fLanguage").value = meta.language;
        if (meta.license && meta.license !== "NOASSERTION") $("fLicense").value = meta.license;
        if (!$("fDescription").value.trim() && meta.description) $("fDescription").value = meta.description;
        if (!$("fTags").value.trim() && meta.topics.length) $("fTags").value = meta.topics.slice(0, 6).join(", ");
        showToast("GitHub 정보를 자동으로 채웠습니다!", "success");
      } catch (err) {
        showToast(err.message, "error");
      } finally {
        btn.disabled = false;
        btn.textContent = "⚡ GitHub 자동 채우기";
      }
    });

    // Sync modal tabs & actions
    document.querySelectorAll("[data-sync-tab]").forEach((btn) => {
      btn.addEventListener("click", () => switchSyncTab(btn.dataset.syncTab));
    });

    $("btnSaveGhConfig").addEventListener("click", async () => {
      const repo = parseGithubRepo($("ghRepo").value);
      const branch = $("ghBranch").value.trim() || "main";
      const token = $("ghToken").value.trim();
      const autoPush = $("ghAutoPush").checked;

      if (!repo || !token) {
        $("ghStatusMsg").textContent = "⚠️ 저장소(owner/repo)와 Personal Access Token을 모두 입력해 주세요.";
        return;
      }

      $("ghStatusMsg").textContent = "GitHub 연결 확인 중...";
      const cfg = { repo, branch, token, autoPush };
      try {
        await fetchCatalogFromGitHub(cfg);
        saveGhConfigToStorage(cfg);
        if (state.syncMode !== "local") state.syncMode = "github";
        updateSyncBadge();
        $("ghStatusMsg").textContent = `✅ 연결 성공! (${repo} · ${branch})`;
        showToast("GitHub 클라우드 저장 연동이 활성화되었습니다!", "success");
      } catch (err) {
        $("ghStatusMsg").textContent = `❌ 연결 실패: ${err.message}`;
      }
    });

    $("btnPullFromGh").addEventListener("click", async () => {
      const repo = parseGithubRepo($("ghRepo").value) || state.ghConfig.repo;
      const branch = $("ghBranch").value.trim() || state.ghConfig.branch || "main";
      const token = $("ghToken").value.trim() || state.ghConfig.token;
      if (!repo || !token) {
        showToast("저장소와 토큰을 입력해 주세요.", "error");
        return;
      }
      try {
        const ghCatalog = await fetchCatalogFromGitHub({ repo, branch, token });
        state.catalog = ghCatalog;
        localStorage.setItem(STORAGE_CATALOG_KEY, JSON.stringify(ghCatalog));
        renderAll();
        $("ghStatusMsg").textContent = `✅ GitHub(${repo})에서 ${ghCatalog.skills.length}개 스킬을 불러왔습니다.`;
        showToast("GitHub 최신 서재 데이터를 불러왔습니다!", "success");
      } catch (err) {
        $("ghStatusMsg").textContent = `❌ 불러오기 실패: ${err.message}`;
      }
    });

    $("btnPushToGh").addEventListener("click", async () => {
      const repo = parseGithubRepo($("ghRepo").value) || state.ghConfig.repo;
      const branch = $("ghBranch").value.trim() || state.ghConfig.branch || "main";
      const token = $("ghToken").value.trim() || state.ghConfig.token;
      if (!repo || !token) {
        showToast("저장소와 토큰을 입력해 주세요.", "error");
        return;
      }
      $("ghStatusMsg").textContent = "GitHub에 업로드하는 중...";
      try {
        await pushCatalogToGitHub(state.catalog, { repo, branch, token }, "chore(skills): sync skills library from web UI");
        $("ghStatusMsg").textContent = "✅ GitHub 커밋 완료! (GitHub Pages/Vercel이 곧 최신 내용으로 반영됩니다)";
        showToast("GitHub 저장소에 서재 데이터를 저장했습니다!", "success");
      } catch (err) {
        $("ghStatusMsg").textContent = `❌ 저장 실패: ${err.message}`;
      }
    });

    $("btnClearGhConfig").addEventListener("click", () => {
      localStorage.removeItem(STORAGE_GH_KEY);
      state.ghConfig = { repo: "", branch: "main", token: "", autoPush: true };
      $("ghRepo").value = "";
      $("ghToken").value = "";
      if (state.syncMode === "github") state.syncMode = "browser";
      updateSyncBadge();
      $("ghStatusMsg").textContent = "GitHub 클라우드 연동을 해제했습니다.";
    });

    // JSON Backup & Import
    $("btnDownloadJson").addEventListener("click", () => {
      const jsonStr = JSON.stringify(state.catalog, null, 2) + "\n";
      const blob = new Blob([jsonStr], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `skills-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("skills.json 파일을 다운로드했습니다.", "success");
    });

    $("fileImportJson").addEventListener("change", async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const imported = JSON.parse(text);
        if (!imported || !Array.isArray(imported.skills)) {
          throw new Error("유효한 skills.json 형식이 아닙니다.");
        }
        const mode = $("importMode").value;
        if (mode === "replace") {
          state.catalog = imported;
        } else {
          const byRepo = new Map(state.catalog.skills.map((s) => [s.repo.toLowerCase(), s]));
          let nextId = state.catalog.skills.reduce((m, s) => Math.max(m, s.id || 0), 0) + 1;
          for (const item of imported.skills) {
            const key = (item.repo || "").toLowerCase();
            if (byRepo.has(key)) {
              Object.assign(byRepo.get(key), item, { id: byRepo.get(key).id });
            } else {
              state.catalog.skills.push({ ...item, id: nextId++ });
            }
          }
        }
        renderAll();
        await persistCatalog("JSON 가져오기");
      } catch (err) {
        showToast(`가져오기 실패: ${err.message}`, "error");
      } finally {
        e.target.value = "";
      }
    });

    $("btnResetLocalCache").addEventListener("click", async () => {
      if (!confirm("이 브라우저의 임시 편집 캐시를 지우고 서버/기본 데이터로 되돌릴까요?")) return;
      localStorage.removeItem(STORAGE_CATALOG_KEY);
      await detectAndLoadCatalog();
      renderAll();
      showToast("브라우저 캐시를 초기화했습니다.", "success");
    });
  }

  async function init() {
    initTheme();
    bindEvents();
    await detectAndLoadCatalog();
    renderAll();
  }

  init();
})();
