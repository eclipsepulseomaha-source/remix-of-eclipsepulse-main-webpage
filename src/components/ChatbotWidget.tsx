import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import clipsieAvatar from "@/assets/clipsie-avatar.png";
import clipsieChatAvatar from "@/assets/clipsie-chat-avatar.png";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    text: "Hello. I'm Clipsie. Where should we start?",
    sender: "bot",
  },
];

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("open-clipsie-chat", handler);
    return () => window.removeEventListener("open-clipsie-chat", handler);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now(),
      text: input.trim(),
      sender: "user",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Mock bot reply after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Thanks for your message! I'm just a visual prototype for now — my brain is being wired up in n8n. Stay tuned! 🚀",
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Clipsie 3D button + label */}
      <div
        style={{ bottom: "10px", right: "18px" }}
        className={cn(
          "fixed z-50 flex flex-col items-end gap-3 transition-all duration-150",
          isOpen && "scale-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Button wrapper — needs relative positioning for the shadow base */}
        <div className="relative h-[84px] w-[84px]">
          {/* Glow behind everything */}
          <div
            className="absolute rounded-full pulse-glow"
            style={{
              width: "84px",
              height: "84px",
              top: "0px",
              left: "0px",
              zIndex: 0,
            }}
          />
          {/* 3D base — the shadow that grounds the button */}
          <div
            className="absolute rounded-full"
            style={{
              zIndex: 1,
              width: "84px",
              height: "84px",
              top: "6px",
              left: "6px",
              background: "hsl(220 10% 12%)",
              boxShadow:
                "0 6px 20px hsl(0 0% 0% / 0.6), " +
                "0 12px 40px hsl(0 0% 0% / 0.4), " +
                "0 2px 6px hsl(0 0% 0% / 0.5)",
            }}
          />
          {/* Clickable button face */}
          <button
            style={{ zIndex: 2 }}
            onClick={() => setIsOpen(true)}
            className={cn(
              "relative h-[84px] w-[84px] rounded-full transition-all duration-100 focus:outline-none",
              "translate-x-[-3px] translate-y-[-3px]",
              "active:translate-x-[1px] active:translate-y-[1px]",
            )}
            aria-label="Open chat with Clipsie"
          >
            {/* Outer chrome ring — the main 3D metallic rim */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 200deg, " +
                  "hsl(210 4% 82%) 0deg, " +
                  "hsl(210 6% 92%) 30deg, " +
                  "hsl(210 5% 98%) 60deg, " +
                  "hsl(210 4% 88%) 90deg, " +
                  "hsl(210 3% 72%) 120deg, " +
                  "hsl(210 4% 58%) 160deg, " +
                  "hsl(210 3% 45%) 200deg, " +
                  "hsl(210 4% 40%) 240deg, " +
                  "hsl(210 3% 48%) 280deg, " +
                  "hsl(210 4% 62%) 310deg, " +
                  "hsl(210 5% 75%) 340deg, " +
                  "hsl(210 4% 82%) 360deg)",
                boxShadow:
                  "inset 0 2px 4px hsl(0 0% 100% / 0.5), " +
                  "inset 0 -3px 6px hsl(0 0% 0% / 0.4), " +
                  "inset 2px 0 3px hsl(0 0% 100% / 0.2), " +
                  "inset -2px 0 4px hsl(0 0% 0% / 0.2), " +
                  "0 4px 12px hsl(0 0% 0% / 0.5), " +
                  "0 1px 3px hsl(0 0% 0% / 0.4)",
              }}
            >
              {/* Brushed metal texture overlay */}
              <div
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background:
                    "repeating-linear-gradient(135deg, transparent, transparent 2px, hsl(0 0% 100% / 0.08) 2px, transparent 3px), " +
                    "repeating-linear-gradient(125deg, transparent, transparent 4px, hsl(0 0% 100% / 0.05) 4px, transparent 5px), " +
                    "repeating-linear-gradient(145deg, transparent, transparent 3px, hsl(0 0% 0% / 0.06) 3px, transparent 4px)",
                }}
              />
              {/* Specular highlight — bright arc top-left */}
              <div
                className="absolute rounded-full"
                style={{
                  top: "3px",
                  left: "6px",
                  width: "55%",
                  height: "30%",
                  background: "linear-gradient(160deg, hsl(0 0% 100% / 0.6) 0%, hsl(0 0% 100% / 0) 100%)",
                  borderRadius: "50%",
                  filter: "blur(2px)",
                }}
              />
              {/* Inner bevel — creates depth between rim and face */}
              <div
                className="absolute rounded-full"
                style={{
                  top: "6px",
                  left: "6px",
                  right: "6px",
                  bottom: "6px",
                  boxShadow:
                    "inset 0 2px 5px hsl(0 0% 0% / 0.5), " +
                    "inset 0 -1px 3px hsl(0 0% 100% / 0.3), " +
                    "0 1px 2px hsl(0 0% 100% / 0.15)",
                  background: "transparent",
                }}
              />
            </div>

            {/* Inner face — gradient ring + avatar */}
            <div
              className="absolute rounded-full bg-gradient-to-br from-secondary/80 to-primary/80 p-[2px]"
              style={{
                top: "7px",
                left: "7px",
                right: "7px",
                bottom: "7px",
              }}
            >
              <div className="h-full w-full rounded-full overflow-hidden bg-card">
                <img
                  src={clipsieAvatar}
                  alt="Clipsie"
                  className="h-full w-full object-cover scale-[1.17] translate-y-[7%] -translate-x-[8%]"
                />
              </div>
            </div>
          </button>
        </div>

        {/* "Curious how I work?" label */}
        <button
          onClick={() => setIsOpen(true)}
          className="px-5 py-2 rounded-xl text-primary-foreground text-sm font-bold text-center hover:opacity-90 transition-opacity cursor-pointer"
          style={{
            background: "linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)",
            boxShadow:
              "inset 0 2px 3px hsl(0 0% 100% / 0.35), " +
              "inset 0 -2px 4px hsl(0 0% 0% / 0.3), " +
              "0 3px 8px hsl(0 0% 0% / 0.4), " +
              "0 1px 2px hsl(0 0% 0% / 0.3)",
            textShadow: "0 2px 4px rgba(0,0,0,0.2), 0 -1px 0 rgba(255,255,255,0.15)",
          }}
          aria-label="Open chat with Clipsie"
        >
          Curious how I work?
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/60 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Side drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full sm:w-[400px] flex flex-col bg-card border-l border-border shadow-2xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Minimal header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full p-[2px]" style={{ background: "linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--gradient-amber)))" }}>
              <img
                src={clipsieChatAvatar}
                alt="Clipsie"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-semibold text-foreground">Clipsie</span>
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-accent" />
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages area */}
        <div
          className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
          style={{
            background: "linear-gradient(22deg, hsl(220 20% 7%) 40%, hsl(217 91% 60% / 0.25) 100%)",
            forcedColorAdjust: "none",
            // @ts-ignore
            msHighContrastAdjust: "none",
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex gap-2.5",
                msg.sender === "user" ? "flex-row-reverse" : "flex-row"
              )}
            >
              {msg.sender === "bot" && (
                <img
                  src={clipsieChatAvatar}
                  alt="Clipsie"
                  className="h-7 w-7 rounded-full object-cover flex-shrink-0 mt-1"
                />
              )}
              <div
                className={cn(
                  "max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                  msg.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md"
                )}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="border-t border-border px-4 py-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-xl border border-border bg-muted/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground transition-all disabled:opacity-40 disabled:cursor-not-allowed active:translate-y-[1px]"
              style={{
                background: "linear-gradient(180deg, hsl(217 91% 65%) 0%, hsl(217 91% 50%) 100%)",
                boxShadow:
                  "inset 0 2px 3px hsl(0 0% 100% / 0.35), " +
                  "inset 0 -2px 4px hsl(0 0% 0% / 0.3), " +
                  "0 3px 8px hsl(0 0% 0% / 0.4), " +
                  "0 1px 2px hsl(0 0% 0% / 0.3)",
                textShadow: "0 1px 2px rgba(0,0,0,0.3)",
              }}
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatbotWidget;
