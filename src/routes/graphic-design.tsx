import { createFileRoute } from "@tanstack/react-router";
import ServicePageLayout from "@/components/ServicePageLayout";

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
  return (
    <ServicePageLayout
      title="Graphic Design"
      headingPlain="What We Can Do "
      headingGradient="For You"
      paragraphs={[
        "Your logo and graphics are often the first thing people remember about your business. We help you look polished and consistent everywhere your name shows up, from your website to the paperwork you hand a customer.",
        "We can design a new logo or clean up the one you already have, including versions with see-through backgrounds that look sharp on any color and print-ready versions for letterhead and work orders. We can also create business cards, flyers, social media graphics, and graphics for your website, all matching your brand.",
        "Tell us what you have and what you need, and we'll take it from there. When you need something new down the road, like a holiday promotion, a flyer for an event, or an updated menu, just let us know and it's done.",
      ]}
      closingLine="Let's make your business look as good as it is."
      buttonText="Contact Us"
      buttonLink="/contact"
    />
  );
}
