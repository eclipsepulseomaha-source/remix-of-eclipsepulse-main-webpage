import { createFileRoute } from "@tanstack/react-router";
import PageHeading from "@/components/PageHeading";
import Fireflies from "@/components/Fireflies";
import Contact from "@/components/Contact";

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
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 z-[1] pointer-events-none">
        <Fireflies count={64} />
      </div>
      <div className="relative z-10">
        <PageHeading title="Contact" bottomPaddingClass="pb-6" transparentBackground />
        {/* Home page contact section reused as-is; pb-24 (its default) = 96px before footer */}
        <Contact topPaddingClass="pt-0" transparentBackground />
      </div>
    </div>
  );
}
