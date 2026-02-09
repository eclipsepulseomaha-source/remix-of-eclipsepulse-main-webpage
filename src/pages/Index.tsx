import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Ambient floating orbs */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      >
        <div
          className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full opacity-[0.12]"
          style={{
            background: 'radial-gradient(circle, hsl(217 91% 60% / 0.6) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'float-1 18s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.10]"
          style={{
            background: 'radial-gradient(circle, hsl(24 95% 53% / 0.6) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'float-2 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[15%] left-[40%] w-[450px] h-[450px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, hsl(35 95% 55% / 0.5) 0%, transparent 70%)',
            filter: 'blur(100px)',
            animation: 'float-3 15s ease-in-out infinite',
          }}
        />
      </div>
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
