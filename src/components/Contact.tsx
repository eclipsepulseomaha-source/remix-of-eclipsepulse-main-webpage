import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import Fireflies from "@/components/Fireflies";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(402) 555-0187",
    href: "tel:+14025550187",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@eclipsepulse.com",
    href: "mailto:hello@eclipsepulse.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Omaha, NE",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Our chatbot Clipsie works around the clock, 24/7. Curtis covers all the human hours.",
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We'll be in touch soon.");
  };

  return (
    <section id="contact" className="pt-12 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-50" />
      <Fireflies count={48} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's chat about how an AI chatbot can help your business. 
            No pressure, no tech speak—just an honest conversation.
          </p>
        </div>

        <div id="contact-form" className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto scroll-mt-20">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur border-border">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                We'd Love to Talk
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Chatbot Button */}
                <Button
                  type="button"
                  className="w-full h-10 justify-start px-3 bg-gradient-to-r from-primary via-accent to-secondary border-0 text-primary-foreground font-bold"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 -1px 0 rgba(255,255,255,0.2)' }}
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent("open-clipsie-chat"));
                  }}
                >
                  Use Our Chatbot
                </Button>
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted/50 border-border"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-muted/50 border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-muted/50 border-border"
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Business Name"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="bg-muted/50 border-border"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your business and what you're looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-muted/50 border-border min-h-32"
                    required
                  />
                </div>
                <Button type="submit" variant="gradient" size="lg" className="w-full group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 
              className="text-xl font-semibold text-primary"
              style={{ textShadow: '0 0 20px hsl(var(--secondary) / 0.6), 0 0 40px hsl(var(--secondary) / 0.3)' }}
            >
              Get In Touch
            </h3>
            <p className="text-muted-foreground">
              Reach out directly. We'd love to hear from you. 
              Call or email—we're here to help.
            </p>

            <div className="space-y-4 mt-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
