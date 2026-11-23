import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import ServicePageLayout from "@/components/ServicePageLayout";
import { useClipsie } from "@/components/ClipsieContext";

const TITLE = "AI Chatbots for Omaha Businesses | Eclipse Pulse";
const DESCRIPTION = "Custom AI chatbots that answer questions, book appointments, and capture leads 24/7. Built for your Omaha business and managed by Eclipse Pulse every month.";
const URL = "https://eclipsepulseomaha.com/ai-chatbots";

export const Route = createFileRoute("/ai-chatbots")({
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
  component: AiChatbotsPage,
});

function Lead({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

function AiChatbotsPage() {
  const { openClipsie } = useClipsie();
  return (
    <ServicePageLayout
      title="AI Chatbots"
      headingPlain="What We Can Do "
      headingGradient="For You"
      paragraphs={[
        <><Lead>Every customer gets an answer, any time.</Lead> Your AI assistant lives on your website and answers questions in seconds, day or night, weekends and holidays included. It speaks in a friendly voice that fits your business, and because it learns from the information you give us, its answers are your answers.</>,
        <><Lead>Open the next morning with new customers waiting.</Lead> When someone finds you at 10 p.m. and is ready to move forward, your assistant takes down their contact information. They get peace of mind knowing they'll hear from you instead of moving on to someone else.</>,
        <><Lead>It does more than answer questions.</Lead> We can set it up to book appointments and even take payments, right there in the chat. You choose what it handles.</>,
        <><Lead>Get your time back.</Lead> During your busiest hours, it can help many customers at once, so no one waits on hold. The questions you hear ten times a day, like your hours, prices, and directions, get answered without you or your staff stopping what you're doing.</>,
        <><Lead>We handle all of it.</Lead> When something changes, like new hours, a new service, or a holiday schedule, just let us know and your assistant is updated. As customers start asking new questions, we keep teaching it, so it keeps getting more helpful. It's a professional touch that makes even a small business feel as responsive as a big one, and you never have to touch the tech.</>,
      ]}
      credentials={
        <>
          Want to see one in action?{" "}
          <button
            type="button"
            onClick={openClipsie}
            aria-label="Open Clipsie chat"
            className="inline p-0 m-0 bg-transparent border-0 text-primary font-medium hover:underline underline-offset-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C83F6]"
          >
            Meet Clipsie
          </button>
          , the assistant in the corner of this page. She was built by Eclipse Pulse.
        </>
      }
      closingLine="Let's give your business its own AI assistant."
      buttonText="Contact Us"
      buttonLink="/contact"
    />
  );
}
