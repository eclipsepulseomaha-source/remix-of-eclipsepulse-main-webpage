import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import foundersPhoto from "@/assets/founders-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-br from-secondary via-accent to-primary bg-clip-text text-transparent">Founders</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-center">
                  <strong className="text-foreground">Curtis Emmanuel Lovegren + Ivan Lovegren</strong>
                </p>
                <p>
                  We grew up in Omaha, and after two decades each helping businesses on the East Coast and West Coast, we've both come home to bring that experience back to the city that raised us.
                </p>
                <p>
                  Our goal is to helping local businesses use tech to save time and scale with confidence.
                </p>
                <p>
                  Our hands-on technical education started early, alongside our dad in the 1990s as he helped small Omaha businesses get online - installing modems, wiring offices, and supporting teams as technology changed how commerce worked. We see AI as the next practical advantage for small businesses when it's implemented the right way.
                </p>
                <p>
                  At Eclipse Pulse, we build and manage AI chatbots and the systems around them so your business can respond faster, reduce repetitive work, and stay focused on what you do best.
                </p>
                <p>
                  Between us, we've led customer-facing operations and technical implementation across fast-moving businesses including major internet marketplaces, turning new tools into workflows teams actually adopt.
                </p>
              </div>

              <Button variant="gradient" size="lg" className="mt-8 group">
                Let's Talk
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Founder Photo */}
            <div className="relative max-w-[calc(100%-30px)] md:-mt-32">
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
        </div>
      </div>
    </section>
  );
};

export default About;
