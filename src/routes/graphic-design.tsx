import { createFileRoute } from "@tanstack/react-router";
import PageHeading from "@/components/PageHeading";

const TITLE = "Graphic Design in Omaha, NE | Eclipse Pulse";
const DESCRIPTION = "Logos, letterhead, work orders, and brand graphics for Omaha businesses. Eclipse Pulse gives your business a polished, professional look in print and online.";
const URL = "https://eclipsepulseomaha.com/graphic-design";

export const Route = createFileRoute("/graphic-design")({
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
  component: GraphicDesignPage,
});

function GraphicDesignPage() {
  return <PageHeading title="Graphic Design" />;
}
