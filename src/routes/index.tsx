import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ property: "og:url", content: "https://eclipsepulseomaha.com/" }],
    links: [{ rel: "canonical", href: "https://eclipsepulseomaha.com/" }],
  }),
  component: Index,
});
