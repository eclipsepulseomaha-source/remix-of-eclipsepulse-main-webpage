import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    title: "Make Time, Make Money",
    description: "Your chatbot can handle hundreds of customer questions at once — instantly and accurately. Backed by our team managing it for you, it books appointments, captures new opportunities, and keeps revenue flowing even when you're busy. That means less time spent on the phone and more time running your business, so you can focus on the work you love.",
  },
  {
    title: "No Customer Goes Unserved",
    description: "During peak business hours or in the middle of the night, your chatbot helps your clients get the answers they need, book the right service, find solutions, and move forward on their terms — no hold times, no waiting, no barriers.",
  },
  {
    title: "Elevated Business Presence",
    description: "Professional, instant customer service reflects the strength of your business. Powered by our continuously managed AI chatbot, you operate with the same competitive strength as major corporations while staying true to your company's identity.",
  },
  {
    title: "Updates? We Handle It All",
    description: "Changes happen. Whether it's new hours, new services, or new information, just let us know — we'll take care of your chatbot updates quickly and seamlessly so everything stays in sync without you lifting a finger.",
  },
];

const stats = [
  { value: "50%", label: "Less Time on Phone Support" },
  { value: "24/7", label: "Always Available" },
  { value: "3x", label: "More Leads Captured" },
  { value: "<5", label: "Seconds to Answers" },
];

interface BenefitItemProps {
  title: string;
  description: string;
}

const BenefitItem = ({ title, description }: BenefitItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex gap-4 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
        <Check className="w-4 h-4 text-primary-foreground" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold text-foreground">
            {title}
          </h3>
          <ChevronDown 
            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
              isHovered ? 'rotate-180' : ''
            }`} 
          />
        </div>
        <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              isHovered ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section id="benefits" className="pt-12 pb-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why <span className="gradient-text">AI Chatbots</span> Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Think of a chatbot as a helpful assistant that never gets tired. 
            Here's how it helps your business grow.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card/50 border border-border"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitItem 
              key={index}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
