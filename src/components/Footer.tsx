import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/EclipsePulse_Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img 
              src={logo} 
              alt="EclipsePulse" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm max-w-xs">
              Making AI simple for small businesses in Omaha and beyond. 
              Smart chatbots that work for you, 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#services" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Our Services
              </a>
              <a href="#benefits" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Why Chatbots
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                About the Guys
              </a>
              <a href="#contact-form" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+14025550187" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                (402) 555-0187
              </a>
              <a href="mailto:hello@eclipsepulse.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                hello@eclipsepulse.com
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                Omaha, NE
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col items-center gap-4">
          <p className="text-sm text-primary text-center">
            Proudly serving Omaha, NE and surrounding communities
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} EclipsePulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
