import { useEffect } from "react";
import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  useRouter,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import ChatbotWidget from "@/components/ChatbotWidget";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClipsieProvider } from "@/components/ClipsieContext";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import appCss from "../styles.css?url";

const OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/U66skdrikLdYtavINj4vI4zb4X82/social-images/social-1771091737163-Screenshot_2026-02-14_115428.webp";

const LOCAL_BUSINESS_LD = "    {\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"LocalBusiness\",\n      \"name\": \"Eclipse Pulse\",\n      \"url\": \"https://eclipsepulseomaha.com/\",\n      \"logo\": \"https://eclipsepulseomaha.com/favicon.png\",\n      \"description\": \"Eclipse Pulse builds smart AI chatbots for Omaha businesses \u2014 automating customer support and booking appointments 24/7.\",\n      \"telephone\": \"+1-402-235-6013\",\n      \"email\": \"hello@eclipsepulseomaha.com\",\n      \"address\": {\n        \"@type\": \"PostalAddress\",\n        \"addressLocality\": \"Omaha\",\n        \"addressRegion\": \"NE\",\n        \"addressCountry\": \"US\"\n      },\n      \"openingHoursSpecification\": {\n        \"@type\": \"OpeningHoursSpecification\",\n        \"dayOfWeek\": [\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"],\n        \"opens\": \"00:00\",\n        \"closes\": \"23:59\"\n      }\n    }";

const WEBSITE_LD = "    {\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"WebSite\",\n      \"name\": \"Eclipse Pulse\",\n      \"url\": \"https://eclipsepulseomaha.com/\"\n    }";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Eclipse Pulse | AI Chatbots for Omaha Businesses" },
      {
        name: "description",
        content:
          "Eclipse Pulse builds smart AI chatbots for Omaha small businesses — automating customer support, answering questions, and booking appointments 24/7.",
      },
      { name: "author", content: "Curtis Emmanuel Lovegren" },
      { name: "keywords", content: "AI chatbot, Omaha NE, small business, customer support, automation, EclipsePulse" },
      { name: "google-site-verification", content: "QPmWKAGdlIE3LQyzw2WoVBJvDlg8vGt8jAAo6fXOv7A" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Eclipse Pulse | AI Chatbots for Omaha Businesses" },
      {
        property: "og:description",
        content: "Smart AI chatbots for Omaha businesses — automating customer support and booking appointments 24/7.",
      },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@EclipsePulse" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
    scripts: [
      { type: "application/ld+json", children: LOCAL_BUSINESS_LD },
      { type: "application/ld+json", children: WEBSITE_LD },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ClipsieProvider>
            <Navbar />
            <Outlet />
            <Footer />
            <ChatbotWidget />
          </ClipsieProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

function RootErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold">This page didn't load</h1>
        <p className="mb-6 text-muted-foreground">Something went wrong. Please try again.</p>
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <a href="/" className="rounded-md border border-border px-4 py-2">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
