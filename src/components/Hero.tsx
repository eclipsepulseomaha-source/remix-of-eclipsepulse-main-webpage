import logoAsset from "@/assets/EclipsePulse_Logo_transparent.png.asset.json";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
      {/* Background gradient glow effects */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      
      {/* Hero logo - transparent, tightly cropped artwork */}
      <div className="absolute inset-x-0 top-[2.75rem] md:top-[3.25rem] flex flex-col items-center">
        <img 
          src={logoAsset.url} 
          alt="Eclipse Pulse logo"
          fetchPriority="high"
          decoding="async"
          width="1116"
          height="410"
          className="w-[72.7%] h-auto"
        />
        {/* Services line - page main heading */}
        <h1
          className="relative z-10 mt-6 text-center font-bold italic text-2xl lg:text-4xl sm:whitespace-nowrap px-4"
          style={{ letterSpacing: "normal", lineHeight: 1.2 }}
        >
          <span className="hero-services-gradient">
            <span className="whitespace-nowrap">Web Design <span aria-hidden="true">·</span> AI Chatbots</span>
            <span className="hidden sm:inline"> <span aria-hidden="true">·</span> </span>
            <br className="sm:hidden" />
            <span className="whitespace-nowrap">Site Updates <span aria-hidden="true">·</span> Graphic Design</span>
          </span>
        </h1>
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

    </section>
  );
};

export default Hero;
