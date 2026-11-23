import { createFileRoute } from "@tanstack/react-router";
import ServicePageLayout from "@/components/ServicePageLayout";

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
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: WebsiteDesignPage,
});

function WebsiteDesignPage() {
  return (
    <ServicePageLayout
      title="Website Design"
      headingPlain="What We Can Do "
      headingGradient="For You"
      paragraphs={[
        "Your website is often the first thing people see before they ever call or walk through your door. We build you one that makes your business look as professional and trustworthy as it really is, whether that's a clean, simple site that tells people who you are and how to reach you, or a full online storefront.",
        "If you sell products, we can build a Shopify store right into your website and bring your eBay listings onto your site, so customers can buy without ever going to eBay. If you go live, your livestreams and live sales can run right on your website. Your videos and vlogs can play there too, and a blog can help new customers find you on Google.",
        "You choose what fits your business. We take care of the rest: the hosting, the security, and everything that keeps your site running smoothly. When your hours change, your prices change, or new inventory comes in, just let us know and it's done. You never have to touch the tech.",
      ]}
      credentials={
        <>
          Eclipse Pulse is a{" "}
          <a
            href="https://www.shopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            Shopify
          </a>{" "}
          Partner and a member of the eBay Developers Program.
        </>
      }
      closingLine="Let's build the website your business deserves."
      buttonText="Contact Us"
      buttonLink="/contact"
    />
  );
}
