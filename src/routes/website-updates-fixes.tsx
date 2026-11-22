import { createFileRoute } from "@tanstack/react-router";
import PageHeading from "@/components/PageHeading";

const TITLE = "Website Updates & Fixes in Omaha | Eclipse Pulse";
const DESCRIPTION = "Wrong hours, broken links, or outdated info? Eclipse Pulse updates and fixes websites for Omaha businesses, whether we built your site or someone else did.";
const URL = "https://eclipsepulseomaha.com/website-updates-fixes";

export const Route = createFileRoute("/website-updates-fixes")({
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
  component: WebsiteUpdatesFixesPage,
});

function WebsiteUpdatesFixesPage() {
  return <PageHeading title="Website Updates/Fixes" />;
}
