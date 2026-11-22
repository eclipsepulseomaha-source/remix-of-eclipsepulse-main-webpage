import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/EclipsePulse_Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="EclipsePulse company logo"
                className="h-10 w-auto mb-4"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Websites, AI chatbots, site updates, and graphic design for Omaha small businesses, all from one local team.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <nav aria-label="Services" className="space-y-3">
              <Link to="/website-design" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Website Design
              </Link>
              <Link to="/ai-chatbots" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                AI Chatbots
              </Link>
              <Link to="/website-updates-fixes" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Website Updates/Fixes
              </Link>
              <Link to="/graphic-design" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Graphic Design
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <nav aria-label="Company" className="space-y-3">
              <Link to="/" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+14022356013" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                (402) 235-6013
              </a>
              <a href="mailto:hello@eclipsepulseomaha.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                hello@eclipsepulseomaha.com
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
