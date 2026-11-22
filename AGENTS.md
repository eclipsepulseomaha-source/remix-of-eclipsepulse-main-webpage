# Project rules

- Stack is TanStack Start (SSR) with file routes in `src/routes/`; head metadata (SEO tags, JSON-LD) lives in `src/routes/__root.tsx` `head()` because there is no index.html.
- Render-time randomness (e.g. Fireflies) must be generated in `useEffect`, not during render, to avoid SSR hydration mismatches.
- Contact form and Clipsie chat call backend functions `send-contact-email` and `chat-webhook` via `supabase.functions.invoke`; keep them as backend functions.
