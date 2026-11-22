module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  const configured = Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
  return res.status(200).json({
    ok: configured,
    mode: configured ? "supabase_cloud" : "static",
    backend: configured ? "supabase" : "none"
  });
};
