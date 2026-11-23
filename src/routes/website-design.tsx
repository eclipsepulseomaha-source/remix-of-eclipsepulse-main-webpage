import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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
    <>
      <PageHeading title="Website Design" bottomPaddingClass="pb-12" />
      <section className="bg-background px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
            What We Can Do <span className="gradient-text">For You</span>
          </h2>
          <div className="space-y-6 text-left text-lg leading-relaxed text-muted-foreground">
            <p>
              Your website is often the first thing people see before they ever call or walk through your door. We build you one that makes your business look as professional and trustworthy as it really is, whether that's a clean, simple site that tells people who you are and how to reach you, or a full online storefront.
            </p>
            <p>
              If you sell products, we can build a Shopify store right into your website and bring your eBay listings onto your site, so customers can buy without ever going to eBay. If you go live, your livestreams and live sales can run right on your website. Your videos and vlogs can play there too, and a blog can help new customers find you on Google.
            </p>
            <p>
              You choose what fits your business. We take care of the rest: the hosting, the security, and everything that keeps your site running smoothly. When your hours change, your prices change, or new inventory comes in, just let us know and it's done. You never have to touch the tech.
            </p>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
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
          </p>
          <h2 className="mt-12 text-center text-xl md:text-2xl font-semibold text-foreground">
            Let's build the website your business deserves.
          </h2>
          <div className="mt-6 flex justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 h-14 px-10 rounded-xl border-0 text-lg font-medium transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(to right, #3C83F6, #F99E1F, #F97015)",
                color: "#080A0C",
              }}
            >
              Contact Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
