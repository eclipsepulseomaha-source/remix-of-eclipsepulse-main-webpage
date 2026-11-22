import logoAsset from "@/assets/EclipsePulse_Logo_transparent.png.asset.json";

const Hero = () => {
  return (
    <section className="relative pt-[76px] sm:pt-20 pb-6 sm:pb-8">
      {/* Background layers - glow effects and edge fades, all behind the logo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div
          className="absolute left-0 top-0 h-full w-1/5"
          style={{ background: 'linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 40%, transparent 100%)' }}
        />
        <div
          className="absolute right-0 top-0 h-full w-1/5"
          style={{ background: 'linear-gradient(to left, hsl(var(--background)) 0%, hsl(var(--background)) 40%, transparent 100%)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-full"
          style={{ background: 'linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background)) 8%, transparent 65%)' }}
        />
      </div>

      {/* Hero logo and services line */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={logoAsset.url}
          alt="Eclipse Pulse logo"
          fetchPriority="high"
          decoding="async"
          width="1116"
          height="410"
          className="w-[90%] max-w-[360px] sm:w-[560px] sm:max-w-none lg:w-[760px] h-auto"
        />
        {/* Services line - page main heading */}
        <h1
          className="mt-1 sm:mt-2 text-center font-bold italic text-2xl lg:text-4xl sm:whitespace-nowrap px-4"
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
    </section>
  );
};

export default Hero;
