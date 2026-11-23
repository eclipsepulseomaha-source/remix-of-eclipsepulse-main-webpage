import { createFileRoute, Link } from "@tanstack/react-router";
import ServicePageLayout from "@/components/ServicePageLayout";

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
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: WebsiteUpdatesFixesPage,
});

function WebsiteUpdatesFixesPage() {
  return (
    <ServicePageLayout
      title="Website Updates/Fixes"
      headingPlain="What We Can Do "
      headingGradient="For You"
      paragraphs={[
        "Your website should always match your business. When your website says one thing and your Google listing says another, or a link leads nowhere, customers notice. We find what's out of date or not working and make it right, whether we built your site or someone else did.",
        "We can update your hours, prices, menus, photos, and contact information, fix broken links and pages, make your site look right on phones, and clean up anything that makes it look unfinished. If your site is slow or hard to find on Google, we can help with that too.",
        "You don't need to know what's wrong or how to explain it. Just tell us what you noticed, or ask us to take a look, and we'll handle the rest. From then on, whenever something changes, just let us know and it's done.",
      ]}
      credentials={
        <>
          Not sure if anything's wrong? Ask us for a{" "}
          <Link
            to="/contact"
            className="inline text-primary font-medium hover:underline underline-offset-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C83F6]"
          >
            free website check-up
          </Link>
          .
        </>
      }
      closingLine="Let's get your website back in shape."
      buttonText="Contact Us"
      buttonLink="/contact"
    />
  );
}
