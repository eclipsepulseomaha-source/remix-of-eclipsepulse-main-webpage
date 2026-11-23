import { createFileRoute } from "@tanstack/react-router";
import PageHeading from "@/components/PageHeading";
import Fireflies from "@/components/Fireflies";
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
  return (
    <div className="relative">
      {/* Firefly sparkles: the same component as the home page, behind all content */}
      <div aria-hidden="true" className="absolute inset-0 z-[1] pointer-events-none">
        <Fireflies count={64} />
      </div>

      <div className="relative z-10">
        <PageHeading title="About" bottomPaddingClass="pb-6" transparentBackground />
        {/* The home page's Founders section, reused as-is. pt-0 keeps the gap
            under the page heading at the same ~48px the service pages use;
            pb-24 is the 96px of space before the footer. */}
        <About
          topPaddingClass="pt-0"
          bottomPaddingClass="pb-24"
          transparentBackground
        />
      </div>
    </div>
  );
}
