// Temporary helper: gets META verification token, verifies site, adds to GSC, and submits sitemap.
// deno-lint-ignore-file
const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const SITE = "https://eclipsepulseomaha.com/";
const SITEMAP = "https://eclipsepulseomaha.com/sitemap.xml";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const GSC = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
  if (!LOVABLE_API_KEY || !GSC) {
    return new Response(JSON.stringify({ error: "missing keys" }), { status: 500, headers: corsHeaders });
  }
  const h = {
    Authorization: `Bearer ${LOVABLE_API_KEY}`,
    "X-Connection-Api-Key": GSC,
    "Content-Type": "application/json",
  };
  const url = new URL(req.url);
  const action = url.searchParams.get("action") ?? "token";
  const out: Record<string, unknown> = { action };

  try {
    if (action === "token") {
      const r = await fetch(`${GATEWAY}/siteVerification/v1/token`, {
        method: "POST", headers: h,
        body: JSON.stringify({ site: { identifier: SITE, type: "SITE" }, verificationMethod: "META" }),
      });
      out.status = r.status; out.body = await r.json();
    } else if (action === "verify") {
      const r = await fetch(`${GATEWAY}/siteVerification/v1/webResource?verificationMethod=META`, {
        method: "POST", headers: h,
        body: JSON.stringify({ site: { identifier: SITE, type: "SITE" } }),
      });
      out.status = r.status; out.body = await r.json();
    } else if (action === "add") {
      const r = await fetch(`${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(SITE)}`, {
        method: "PUT", headers: h,
      });
      out.status = r.status; out.body = await r.text();
    } else if (action === "submit-sitemap") {
      const r = await fetch(`${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(SITE)}/sitemaps/${encodeURIComponent(SITEMAP)}`, {
        method: "PUT", headers: h,
      });
      out.status = r.status; out.body = await r.text();
    } else if (action === "list-sites") {
      const r = await fetch(`${GATEWAY}/webmasters/v3/sites`, { headers: h });
      out.status = r.status; out.body = await r.json();
    }
  } catch (e) {
    out.error = String(e);
  }
  return new Response(JSON.stringify(out, null, 2), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
});
