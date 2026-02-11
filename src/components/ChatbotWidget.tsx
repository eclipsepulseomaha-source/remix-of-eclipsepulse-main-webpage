import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import clipsieAvatar from "@/assets/clipsie-avatar.png";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    text: "Hey there! 👋 I'm Clipsie, your EclipsePulse assistant. How can I help you today?",
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
      {/* Floating Clipsie 3D button */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 transition-all duration-150",
          isOpen && "scale-0 opacity-0 pointer-events-none"
        )}
      >
        {/* 3D base/edge — visible rim that "sinks" into the surface */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "repeating-linear-gradient(17deg, transparent 0%, transparent 48%, hsl(210 5% 82% / 0.12) 49%, transparent 50%, transparent 100%), " +
              "repeating-linear-gradient(163deg, transparent 0%, transparent 46%, hsl(210 4% 60% / 0.09) 47%, transparent 48%, transparent 100%), " +
              "repeating-linear-gradient(73deg, transparent 0%, transparent 44%, hsl(210 6% 75% / 0.11) 45%, transparent 46%, transparent 100%), " +
              "repeating-linear-gradient(112deg, transparent 0%, transparent 52%, hsl(210 5% 68% / 0.08) 53%, transparent 54%, transparent 100%), " +
              "repeating-linear-gradient(145deg, transparent 0%, transparent 40%, hsl(210 4% 80% / 0.1) 41%, transparent 42%, transparent 100%), " +
              "repeating-linear-gradient(28deg, transparent 0%, transparent 56%, hsl(210 3% 58% / 0.07) 57%, transparent 58%, transparent 100%), " +
              "repeating-linear-gradient(95deg, transparent 0%, transparent 38%, hsl(210 5% 72% / 0.09) 39%, transparent 40%, transparent 100%), " +
              "repeating-linear-gradient(45deg, transparent, hsl(210 6% 80% / 0.18) 1px, transparent 2px), " +
              "repeating-linear-gradient(50deg, transparent, hsl(210 5% 70% / 0.14) 1px, hsl(210 4% 55% / 0.08) 2px, transparent 3px), " +
              "repeating-linear-gradient(40deg, transparent, hsl(210 4% 75% / 0.1) 1px, transparent 4px), " +
              "linear-gradient(150deg, hsl(210 6% 78%) 0%, hsl(210 5% 68%) 10%, hsl(210 4% 58%) 20%, hsl(210 6% 72%) 30%, hsl(210 5% 62%) 40%, hsl(210 4% 55%) 50%, hsl(210 6% 65%) 55%, hsl(210 5% 50%) 65%, hsl(210 4% 45%) 75%, hsl(210 5% 40%) 85%, hsl(210 4% 35%) 100%)",
            height: "80px",
            width: "80px",
            top: "4px",
            left: "4px",
            boxShadow:
              "inset -12px -10px 20px hsl(0 0% 0% / 0.39), " +
              "inset -6px -4px 10px hsl(0 0% 0% / 0.32), " +
              "inset 3px 2px 4px hsl(0 0% 100% / 0.06), " +
              "6px 8px 16px hsl(0 0% 0% / 0.24), 2px 4px 8px hsl(0 0% 0% / 0.18), " +
              "12px 20px 44px hsl(0 0% 0% / 0.39), 20px 32px 64px hsl(0 0% 0% / 0.28)",
          }}
        />
        {/* Clickable button face */}
        <button
          onClick={() => setIsOpen(true)}
          className={cn(
            "relative h-[80px] w-[80px] rounded-full transition-all duration-100 focus:outline-none",
            "pulse-glow",
            // Resting: lifted up-left from the base
            "translate-x-[-2px] translate-y-[-2px]",
            // Pressed: slides down-right into the base
            "active:translate-x-[2px] active:translate-y-[2px]",
            "active:brightness-95",
            "hover:brightness-110",
          )}
          aria-label="Open chat with Clipsie"
          style={{
            boxShadow:
              "4px 7px 14px hsl(0 0% 0% / 0.5), 2px 3px 6px hsl(0 0% 0% / 0.35), " +
              "inset -2px -3px 8px hsl(0 0% 0% / 0.2), inset 2px 1px 4px hsl(0 0% 100% / 0.08)",
          }}
        >
          {/* Gradient ring + face */}
          <div className="h-full w-full rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 p-[3px]">
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
            <img
              src={clipsieAvatar}
              alt="Clipsie"
              className="h-9 w-9 rounded-full object-cover ring-2 ring-primary/40"
            />
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
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
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
                  src={clipsieAvatar}
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
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
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
