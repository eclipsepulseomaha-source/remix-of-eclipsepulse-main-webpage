# Project rules

- Stack is TanStack Start (SSR) with file routes in `src/routes/`; sitewide head tags and JSON-LD live in `src/routes/__root.tsx` `head()`, while canonical and og:url live only in each leaf route `head()` so every page self-references once.
- Render-time randomness (e.g. Fireflies) must be generated in `useEffect`, not during render, to avoid SSR hydration mismatches.
- Contact form and Clipsie chat call backend functions `send-contact-email` and `chat-webhook` via `supabase.functions.invoke`; keep them as backend functions.
- Site header (Navbar), footer, and Clipsie render once in `src/routes/__root.tsx` around `<Outlet />` (Clipsie inside `ClipsieProvider`, opened via `useClipsie().openClipsie()`); pages must not render them again.
