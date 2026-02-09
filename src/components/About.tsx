import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import foundersPhoto from "@/assets/founders-photo.jpg";

const About = () => {
  return (
    <section id="about" className="pt-4 pb-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-br from-secondary via-primary via-[35%] to-primary bg-clip-text text-transparent">Founders</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-center">
                  <strong className="text-foreground">Curtis Emmanuel Lovegren and Ivan Lovegren</strong>
                </p>
                <p>
                  We grew up in Omaha, and after years of working with businesses on the East and West Coasts, we've come back home to bring that experience to the work we do here. We are grateful to be part of this city again and to serve the businesses that make it thrive.
                </p>
                <p>
                  Our hands-on technical education began beside our dad who was helping small Omaha businesses get online in the early 1990s, installing modems, wiring offices, and literally connecting people to a new future. Back then, connectivity gave local businesses new power in a rapidly changing world. Today, we see AI as another practical tool to help local businesses compete.
                </p>
                <p>
                  Our aim is not just to keep Omaha businesses current with where commerce is headed. We want to help move them forward. We work with local companies to build and manage AI chatbots, and the surrounding digital pieces that make them work well, so they can operate with more confidence, more capacity, and more freedom to focus on what they do best.
                </p>
                <p>
                  This is ultimately about loyalty to the community that raised us and partnership with the people who keep it running. That is the spirit behind Eclipse Pulse, built to power Omaha businesses as you continue to grow and evolve, with us alongside you.
                </p>
              </div>
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
