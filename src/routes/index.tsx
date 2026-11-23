import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

const TITLE = "Eclipse Pulse | Web Design & AI Chatbots in Omaha, NE";
const DESCRIPTION = "Eclipse Pulse designs websites, builds AI chatbots, updates and fixes existing sites, and creates graphic design for Omaha small businesses, then manages your website and chatbot every month.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "og:url", content: "https://eclipsepulseomaha.com/" }],
    links: [{ rel: "canonical", href: "https://eclipsepulseomaha.com/" }],
  }),
  component: Index,
});
