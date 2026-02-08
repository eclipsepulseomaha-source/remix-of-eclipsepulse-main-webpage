import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import founderPhoto from "@/assets/founder-photo.png";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-br from-secondary via-accent to-primary bg-clip-text text-transparent">Founders</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm <strong className="text-foreground">Curtis Emmanuel Lovegren</strong>, 
                  founder of EclipsePulse. I started this company with one simple goal: 
                  make AI accessible to local businesses.
                </p>
                <p>
                  I've seen too many small businesses struggle to keep up with big corporations 
                  that have huge tech budgets. That's not fair. With EclipsePulse, you get 
                  the same smart technology at a price that makes sense.
                </p>
                <p>
                  Based right here in Omaha, Nebraska, I work directly with each client 
                  to understand their unique needs. No corporate runaround—just honest, 
                  effective AI solutions.
                </p>
              </div>

              <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Proudly serving businesses in Omaha, NE and surrounding areas</span>
              </div>

              <Button variant="gradient" size="lg" className="mt-8 group">
                Let's Talk
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Founder Photo */}
            <div className="relative max-w-[calc(100%-30px)]">
              <div 
                className="relative rounded-2xl overflow-hidden"
                style={{
                  boxShadow: '0 0 60px hsl(24 95% 53% / 0.6), 0 0 120px hsl(217 91% 60% / 0.5), 0 0 180px hsl(24 95% 53% / 0.3)',
                }}
              >
                <img 
                  src={founderPhoto} 
                  alt="Curtis Emmanuel Lovegren, Founder of EclipsePulse"
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
        </div>
      </div>
    </section>
  );
};

export default About;
