function getSupabaseConfig() {
  const url = (process.env.SUPABASE_URL || "").replace(/\/+$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  if (!url || !key) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variable");
  }
  return { url, key };
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }
  if (typeof req.body === "string" && req.body.trim()) {
    return JSON.parse(req.body);
  }
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : null;
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  let cfg;
  try {
    cfg = getSupabaseConfig();
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }

  const baseHeaders = {
    apikey: cfg.key,
    Authorization: `Bearer ${cfg.key}`,
    "Content-Type": "application/json"
  };

  if (req.method === "GET") {
    try {
      const resp = await fetch(
        `${cfg.url}/rest/v1/skills_library_catalog?id=eq.main&select=payload,updated_at`,
        { method: "GET", headers: baseHeaders }
      );
      if (!resp.ok) {
        const text = await resp.text();
        return res.status(resp.status).json({ ok: false, error: text.slice(0, 300) });
      }
      const rows = await resp.json();
      if (!Array.isArray(rows) || rows.length === 0 || !rows[0].payload) {
        return res.status(404).json({ ok: false, error: "Catalog record not initialized in Supabase" });
      }
      return res.status(200).json(rows[0].payload);
    } catch (err) {
      return res.status(500).json({ ok: false, error: err.message });
    }
  }

  if (req.method === "POST" || req.method === "PUT") {
    try {
      const payload = await readJsonBody(req);
      if (!payload || typeof payload !== "object" || !Array.isArray(payload.skills)) {
        return res.status(400).json({ ok: false, error: "Invalid catalog JSON payload: skills array required" });
      }
      const nowIso = new Date().toISOString();
      payload.last_synced = nowIso.slice(0, 10);

      const resp = await fetch(`${cfg.url}/rest/v1/skills_library_catalog`, {
        method: "POST",
        headers: {
          ...baseHeaders,
          Prefer: "resolution=merge-duplicates,return=minimal"
        },
        body: JSON.stringify({
          id: "main",
          payload,
          updated_at: nowIso
        })
      });

      if (!resp.ok) {
        const text = await resp.text();
        return res.status(resp.status).json({ ok: false, error: text.slice(0, 300) });
      }

      return res.status(200).json({
        ok: true,
        count: payload.skills.length,
        updated_at: nowIso
      });
    } catch (err) {
      return res.status(500).json({ ok: false, error: err.message });
    }
  }

  return res.status(405).json({ ok: false, error: "Method not allowed" });
};
