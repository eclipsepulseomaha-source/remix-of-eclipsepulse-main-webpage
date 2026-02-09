import { MessageSquare, Zap, Clock, Users, Activity, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: MessageSquare,
    title: "Custom AI Chatbots",
    description: "We build chatbots that understand your business and speak your language. They answer customer questions instantly, just like your best employee would.",
  },
  {
    icon: Clock,
    title: "24/7 Customer Support",
    description: "Your chatbot never sleeps, takes breaks, or calls in sick. Customers get help any time of day or night, even on holidays. Appointments get booked, services get ordered, and requests get handled instantly — no phone calls, no hold times, no delays.",
  },
  {
    icon: Zap,
    title: "Seamless Integration",
    description: "We install our chatbots right on your existing website. No rebuilding needed. It just works alongside what you already have.",
  },
  {
    icon: Users,
    title: "Human at Heart",
    description: "You'll always have direct access to me as your human point of contact. The chatbot simply works behind the scenes, seamlessly supporting and enhancing the systems you already use. It helps your business do more — without changing how you prefer to work.",
  },
  {
    icon: Activity,
    title: "Analytics & Insights",
    description: "See what your customers are asking about most. Use this info to improve your business and answer questions before they're asked.",
  },
  {
    icon: Shield,
    title: "Continuously Tailored AI",
    description: "We are your ongoing chatbot and AI management team. After integration, we actively monitor, optimize, and guide your systems so you never have to run the technology yourself. We work alongside you as your business grows — keeping your AI aligned with your goals, your operations, and your customers.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What <span className="gradient-text">We Do</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We make AI simple for small businesses. No tech skills needed—we handle everything 
            so you can focus on your customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
