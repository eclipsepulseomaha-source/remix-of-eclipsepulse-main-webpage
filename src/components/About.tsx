import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import foundersPhoto from "@/assets/founders-photo.jpg";

const About = () => {
  return (
    <section id="about" className="pt-4 pb-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section title - centered on full page */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center">
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to bottom right, hsl(var(--secondary)) 0%, hsl(var(--secondary)) 25%, hsl(var(--primary)) 100%)'
              }}
            >Founders</span>
          </h2>
          <p className="text-center text-xl mb-2">
            <strong className="text-foreground">Curtis Emmanuel Lovegren and Ivan Lovegren</strong>
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-8 italic">
            Rooted in Omaha. Built for Omaha Businesses.
          </h3>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Content - upper portion */}
            <div className="relative z-10">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We're brothers who grew up in Omaha. After years of working with businesses on the East and West Coasts, we came back home to put that experience to work for the city that raised us.
                </p>
                <p>
                  Our tech education started at our dad's side. In the early 1990s, he was helping small Omaha businesses get online: installing modems, wiring offices, and literally connecting people to a new future.
                </p>
              </div>
            </div>

            {/* Founder Photo */}
            <div className="relative max-w-[calc(100%-30px)] mx-auto md:mx-0">
              <div 
                className="relative rounded-2xl overflow-hidden"
                style={{
                  boxShadow: '0 0 60px hsl(24 95% 53% / 0.6), 0 0 120px hsl(217 91% 60% / 0.5), 0 0 180px hsl(24 95% 53% / 0.3)',
                }}
              >
                <img 
                  src={foundersPhoto} 
                  alt="Curtis and Ivan Lovegren, Founders of EclipsePulse"
                  className="w-full h-auto object-cover rounded-2xl"
                  style={{
                    maskImage: 'linear-gradient(to right, transparent 0px, black 15px, black calc(100% - 15px), transparent 100%), linear-gradient(to bottom, transparent 0px, black 15px, black calc(100% - 15px), transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0px, black 15px, black calc(100% - 15px), transparent 100%), linear-gradient(to bottom, transparent 0px, black 15px, black calc(100% - 15px), transparent 100%)',
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'source-in',
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Continued text - full width */}
          <div className="relative z-10 text-muted-foreground leading-relaxed space-y-4 mt-4">
            <p>
              Back then, getting connected gave Omaha businesses a new edge. Today, AI does the same. It's a practical tool that helps local businesses compete with companies many times their size.
            </p>
            <p>
              We don't just want to keep Omaha businesses current. We want to help them lead. That's why we design websites, build AI chatbots, keep existing sites up to date, and create the graphics that tie a brand together. Then we stay on to manage it all, so you can focus on what you do best.
            </p>
            <p>
              For us, this is about loyalty to the community that raised us and partnership with the people who keep it running. That's the spirit behind Eclipse Pulse: an Omaha company, built to grow alongside Omaha businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
