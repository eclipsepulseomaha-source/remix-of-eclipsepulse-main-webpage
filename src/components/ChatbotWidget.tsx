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
      {/* Floating Clipsie button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 h-[72px] w-[72px] rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background overflow-hidden",
          "bg-gradient-to-br from-primary/80 to-secondary/80 p-[3px]",
          "pulse-glow shadow-xl shadow-primary/20",
          isOpen && "scale-0 opacity-0 pointer-events-none"
        )}
        aria-label="Open chat with Clipsie"
      >
        <div className="h-full w-full rounded-full overflow-hidden bg-card">
          <img
            src={clipsieAvatar}
            alt="Clipsie"
            className="h-full w-full object-cover scale-[1.15] translate-y-[6%] translate-x-[1%]"
          />
        </div>
      </button>

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
