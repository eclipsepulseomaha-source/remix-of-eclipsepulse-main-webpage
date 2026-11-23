import { createFileRoute } from "@tanstack/react-router";
import PageHeading from "@/components/PageHeading";

const TITLE = "AI Chatbots for Omaha Businesses | Eclipse Pulse";
const DESCRIPTION = "Custom AI chatbots that answer questions, book appointments, and capture leads 24/7. Built for your Omaha business and managed by Eclipse Pulse every month.";
const URL = "https://eclipsepulseomaha.com/ai-chatbots";

export const Route = createFileRoute("/ai-chatbots")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: AiChatbotsPage,
});

function AiChatbotsPage() {
  return <PageHeading title="AI Chatbots" />;
}
