import { Link } from "@tanstack/react-router";
import { Monitor, MessageSquare, Wrench, Palette, ArrowRight } from "lucide-react";
import Fireflies from "@/components/Fireflies";

const services = [
  {
    icon: Monitor,
    title: "Website Design",
    description: "Modern, mobile-friendly websites built around your business, including Shopify stores. We design it, launch it, and manage it every month so it stays fast and up to date.",
    to: "/website-design",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "A custom AI assistant on your website that answers questions, books appointments, and captures leads 24/7. We build it around your business and manage it every month.",
    to: "/ai-chatbots",
  },
  {
    icon: Wrench,
    title: "Website Updates/Fixes",
    description: "Wrong hours, broken links, or outdated info? We update and fix your current website, whether we built it or someone else did.",
    to: "/website-updates-fixes",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Logos, letterhead, work orders, and brand graphics that give your business a polished, professional look in print and online.",
    to: "/graphic-design",
  },
] as const;

const Services = () => {
  return (
    <section id="services" className="pt-10 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <Fireflies count={42} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            What <span className="gradient-text">We Do</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {services.map((service) => (
            <Link
              key={service.to}
              to={service.to}
              className="rounded-lg border bg-card/50 backdrop-blur border-border shadow-sm hover:border-primary/50 transition-all duration-300 group flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C83F6]"
            >
              <div className="p-6 flex flex-col w-full">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <span className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
