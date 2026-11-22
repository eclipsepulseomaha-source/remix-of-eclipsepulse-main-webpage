import { createFileRoute } from "@tanstack/react-router";
import PageHeading from "@/components/PageHeading";

const TITLE = "Contact Eclipse Pulse | Omaha, NE";
const DESCRIPTION = "Call (402) 235-6013 or email hello@eclipsepulseomaha.com to talk with Eclipse Pulse about websites, AI chatbots, updates, or graphics for your Omaha business.";
const URL = "https://eclipsepulseomaha.com/contact";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return <PageHeading title="Contact" />;
}
