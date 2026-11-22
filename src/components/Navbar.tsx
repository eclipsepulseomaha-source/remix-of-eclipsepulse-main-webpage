import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/EclipsePulse_Logo.png";

const menuItems = [
  { to: "/", label: "Home" },
  { to: "/website-design", label: "Website Design" },
  { to: "/ai-chatbots", label: "AI Chatbots" },
  { to: "/website-updates-fixes", label: "Website Updates/Fixes" },
  { to: "/graphic-design", label: "Graphic Design" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t) || buttonRef.current?.contains(t)) return;
      setIsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:relative">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center overflow-hidden h-12 md:h-14 pr-12 -ml-12 pl-12" style={{ background: 'linear-gradient(to right, hsl(0,0%,0%) calc(100% - 35px), transparent 100%)' }}>
            <img
              src={logo}
              alt="EclipsePulse company logo"
              className="h-20 md:h-[6.25rem] w-auto"
            />
          </Link>

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="site-menu"
            className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-transparent text-[#F8FAFC] transition-colors duration-150 hover:bg-[#21242C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C83F6]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      <div
        id="site-menu"
        ref={panelRef}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={[
          "absolute left-0 right-0 top-full border-b border-[#272C35] bg-[#0E1115] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]",
          "sm:left-auto sm:w-80 sm:mt-2 sm:rounded-xl sm:border sm:right-4",
          "transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-opacity motion-reduce:translate-y-0",
          isOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2",
        ].join(" ")}
      >
        <ul className="flex flex-col">
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setIsOpen(false)}
                activeOptions={{ exact: true }}
                className="relative block rounded-lg px-4 py-3 text-base font-medium text-[#94A3B8] transition-colors duration-150 hover:bg-[#21242C] hover:text-[#F8FAFC] data-[status=active]:text-[#F8FAFC]"
                activeProps={{ "aria-current": "page" }}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span
                        aria-hidden
                        className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full"
                        style={{ background: "linear-gradient(to bottom, #3C83F6, #F99E1F, #F97015)" }}
                      />
                    )}
                    {item.label}
                  </>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
