import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import Fireflies from "@/components/Fireflies";

interface ServicePageLayoutProps {
  title: string;
  headingPlain: string;
  headingGradient: string;
  paragraphs: ReactNode[];
  credentials?: ReactNode;
  closingLine: string;
  buttonText?: string;
  buttonLink?: string;
}

const ServicePageLayout = ({
  title,
  headingPlain,
  headingGradient,
  paragraphs,
  credentials,
  closingLine,
  buttonText = "Contact Us",
  buttonLink = "/contact",
}: ServicePageLayoutProps) => {
  return (
    <div className="relative">
      {/* Firefly sparkles: same effect as the home page, sitting behind all content */}
      <div aria-hidden="true" className="absolute inset-0 z-[1] pointer-events-none">
        <Fireflies count={64} />
      </div>

      <div className="relative z-10">
        <PageHeading title={title} bottomPaddingClass="pb-6" transparentBackground />
        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
              {headingPlain}<span className="gradient-text">{headingGradient}</span>
            </h2>
            <div className="space-y-6 text-left text-lg leading-relaxed text-muted-foreground rounded-lg bg-card/50 backdrop-blur p-6 md:p-8">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {credentials ? (
              <p className="mt-8 text-center text-sm text-muted-foreground">{credentials}</p>
            ) : null}
            <h2
              className="mt-12 text-center text-xl md:text-2xl font-semibold text-foreground italic"
              style={{
                textShadow: "0 0 10px rgba(60, 131, 246, 0.55), 0 0 22px rgba(60, 131, 246, 0.35)",
              }}
            >
              {closingLine}
            </h2>
            <div className="mt-6 flex justify-center">
              <Link
                to={buttonLink}
                className="group inline-flex items-center gap-2 h-14 px-10 rounded-xl border-0 text-lg font-medium transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(to right, #3C83F6, #F99E1F, #F97015)",
                  color: "#080A0C",
                }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicePageLayout;
