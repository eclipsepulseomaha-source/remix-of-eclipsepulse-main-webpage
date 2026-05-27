## Steps

1. **Add a WebP version of the hero logo** — Already encoded at quality 95: `src/assets/EclipsePulse_Logo_for_site.webp` (41 KB vs the 244 KB PNG, ~6× smaller, visually identical).

2. **Swap the import in `src/components/Hero.tsx`** — Change one line:
   ```ts
   import logo from "@/assets/EclipsePulse_Logo_for_site.webp";
   ```
   All other props (`fetchPriority="high"`, dimensions, drop-shadow filter, brightness/contrast) stay exactly as they are.

3. **Skip font-display** — Confirmed the project uses no Google Fonts or `@font-face` rules, so the headline already paints with system fonts. No change needed.

4. **Skip preload tag** — Vite hashes asset filenames in production, so a hard-coded `<link rel="preload">` in `index.html` would break after every build. The existing `fetchPriority="high"` on the `<img>` already signals priority once React mounts, and the 6× smaller WebP is the dominant win.

5. **Mark the SEO finding fixed and surface the publish dialog** so the next scan re-evaluates against the new published bundle.

## What stays identical
- Logo dimensions, transparency, glow, brightness/contrast filters
- Hero layout, headline, spacing
- Navbar logo (below the fold — not LCP)
- Backend, routes, components