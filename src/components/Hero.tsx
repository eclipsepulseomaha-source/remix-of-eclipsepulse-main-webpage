import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/EclipsePulse_Logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient glow effects */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      
      {/* Full-width logo background - seamlessly merged */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-center">
        <img 
          src={logo} 
          alt="" 
          aria-hidden="true"
          className="w-full h-auto max-h-screen object-contain brightness-110 contrast-105"
          style={{
            filter: 'brightness(1.1) contrast(1.05) drop-shadow(0 0 60px rgba(255, 200, 100, 0.4))',
          }}
        />
      </div>
      
      {/* Left edge fade overlay - narrower to preserve center */}
      <div 
        className="absolute left-0 top-0 h-full w-1/5 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 40%, transparent 100%)',
        }}
      />
      
      {/* Right edge fade overlay - narrower to preserve center */}
      <div 
        className="absolute right-0 top-0 h-full w-1/5 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, hsl(var(--background)) 0%, hsl(var(--background)) 40%, transparent 100%)',
        }}
      />
      
      {/* Bottom edge fade overlay - aggressive blend starting from middle */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-full pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(to top, hsl(220 15% 12%) 0%, hsl(220 18% 8%) 20%, hsl(220 20% 6%) 35%, hsl(220 20% 5%) 45%, transparent 70%)',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center stagger-children">
          {/* Badge */}
          <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">AI-Powered Solutions for Local Businesses</span>
          </div>

          {/* Spacer to push content below logo text area */}
          <div className="h-32 md:h-48" />

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_8px_40px_rgba(59,130,246,0.7)]">
            Smart AI Chatbots for
            <br />
            <span className="gradient-text">Your Business</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm">
            Help your customers find answers instantly, 24/7. Our AI chatbots handle questions, 
            book appointments, and free up your time—so you can focus on what you do best.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="gradient"
              size="xl"
              className="group"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Straight to Us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/40 via-accent/30 to-secondary/40 blur-xl opacity-60 animate-glow-pulse" />
              <Button
                variant="outline"
                size="xl"
                className="relative"
                onClick={() => {
                  // TODO: Navigate to chatbot page
                  console.log("Navigate to chatbot");
                }}
              >
                Meet Our Chatbot
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by businesses across Omaha, NE
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground/60">
              <span className="text-sm font-medium">Restaurants</span>
              <span className="text-sm font-medium">Plumbers</span>
              <span className="text-sm font-medium">Retail Shops</span>
              <span className="text-sm font-medium">Dental Offices</span>
              <span className="text-sm font-medium">HVAC Services</span>
              <span className="text-sm font-medium">Law Firms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
