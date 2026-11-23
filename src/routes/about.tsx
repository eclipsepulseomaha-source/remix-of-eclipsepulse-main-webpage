import { createFileRoute } from "@tanstack/react-router";
import About from "@/components/About";

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
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: AboutPage,
});

function AboutPage() {
  // 128px top clears the fixed header (same as other page headings);
  // pb-24 is the 96px before the footer.
  return (
    <About
      topPaddingClass="pt-32"
      bottomPaddingClass="pb-24"
      transparentBackground
      headingLevel="h1"
      showDivider
    />
  );
}
