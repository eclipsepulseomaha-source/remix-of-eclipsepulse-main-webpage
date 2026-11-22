import { createFileRoute } from "@tanstack/react-router";
import PageHeading from "@/components/PageHeading";

const TITLE = "About Eclipse Pulse | Curtis & Ivan Lovegren, Omaha";
const DESCRIPTION = "Meet Curtis and Ivan Lovegren, Omaha brothers carrying on their dad's work of helping local businesses get connected, now with websites and AI.";
const URL = "https://eclipsepulseomaha.com/about";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return <PageHeading title="About" />;
}
