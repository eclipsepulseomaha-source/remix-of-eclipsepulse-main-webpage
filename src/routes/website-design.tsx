import { createFileRoute } from "@tanstack/react-router";
import PageHeading from "@/components/PageHeading";

const TITLE = "Website Design in Omaha, NE | Eclipse Pulse";
const DESCRIPTION = "Modern, mobile-friendly websites for Omaha small businesses. Eclipse Pulse designs your site, then keeps it running smoothly with monthly management.";
const URL = "https://eclipsepulseomaha.com/website-design";

export const Route = createFileRoute("/website-design")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: WebsiteDesignPage,
});

function WebsiteDesignPage() {
  return <PageHeading title="Website Design" />;
}
