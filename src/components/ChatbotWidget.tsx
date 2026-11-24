import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import clipsieAvatar from "@/assets/Clipsie_avatar_centered.png.asset.json";
import clipsieChatAvatar from "@/assets/clipsie-chat-avatar.png";
import { useClipsie } from "@/components/ClipsieContext";

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
  const { isOpen, openClipsie, closeClipsie } = useClipsie();
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [sessionId] = useState(() => crypto.randomUUID());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now(),
      text: input.trim(),
      sender: "user",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Build conversation history for context
    const history = messages.map((m) => ({
      role: m.sender === "bot" ? "assistant" : "user",
      content: m.text,
    }));

    try {
      const { data, error } = await supabase.functions.invoke("chat-webhook", {
        body: { message: userMsg.text, history, sessionId },
      });

      const reply =
        error || !data?.reply ? "Sorry, I couldn't reach my brain right now. Please try again later." : data.reply;

      setMessages((prev) => [...prev, { id: Date.now() + 1, text: reply, sender: "bot" }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Something went wrong. Please try again later.",
          sender: "bot",
        },
      ]);
    }
  };

  return (
    <>
      {/* Floating Clipsie 3D button + label */}
      <div
        className={cn(
          "fixed z-50 flex flex-col items-center gap-[6px] sm:gap-3 transition-all duration-150",
          "[--clipsie-size:56px] sm:[--clipsie-size:84px]",
          "bottom-[12px] right-[12px] sm:bottom-[10px] sm:right-[18px]",
          isOpen && "scale-0 opacity-0 pointer-events-none",
        )}
      >
        {/* Button wrapper — needs relative positioning for the shadow base */}
        <div className="relative h-[var(--clipsie-size)] w-[var(--clipsie-size)]">
          {/* Glow behind everything */}
          <div
            className="absolute rounded-full pulse-glow"
            style={{
              width: "var(--clipsie-size)",
              height: "var(--clipsie-size)",
              top: "0px",
              left: "0px",
              zIndex: 0,
            }}
          />
          {/* Clickable button face */}
          <button
            style={{ zIndex: 2 }}
            onClick={openClipsie}
            onTouchStart={() => {}}
            className={cn(
              "clipsie-extrude relative h-[var(--clipsie-size)] w-[var(--clipsie-size)] rounded-full focus:outline-none",
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
                  "inset 0 calc(var(--clipsie-size) * 2 / 84) calc(var(--clipsie-size) * 4 / 84) hsl(0 0% 100% / 0.5), " +
                  "inset 0 calc(var(--clipsie-size) * -3 / 84) calc(var(--clipsie-size) * 6 / 84) hsl(0 0% 0% / 0.4), " +
                  "inset calc(var(--clipsie-size) * 2 / 84) 0 calc(var(--clipsie-size) * 3 / 84) hsl(0 0% 100% / 0.2), " +
                  "inset calc(var(--clipsie-size) * -2 / 84) 0 calc(var(--clipsie-size) * 4 / 84) hsl(0 0% 0% / 0.2), " +
                  "0 calc(var(--clipsie-size) * 4 / 84) calc(var(--clipsie-size) * 12 / 84) hsl(0 0% 0% / 0.5), " +
                  "0 calc(var(--clipsie-size) * 1 / 84) calc(var(--clipsie-size) * 3 / 84) hsl(0 0% 0% / 0.4)",
              }}
            >
              {/* Brushed metal texture overlay */}
              <div
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background:
                    "repeating-linear-gradient(135deg, transparent, transparent calc(var(--clipsie-size) * 2 / 84), hsl(0 0% 100% / 0.08) calc(var(--clipsie-size) * 2 / 84), transparent calc(var(--clipsie-size) * 3 / 84)), " +
                    "repeating-linear-gradient(125deg, transparent, transparent calc(var(--clipsie-size) * 4 / 84), hsl(0 0% 100% / 0.05) calc(var(--clipsie-size) * 4 / 84), transparent calc(var(--clipsie-size) * 5 / 84)), " +
                    "repeating-linear-gradient(145deg, transparent, transparent calc(var(--clipsie-size) * 3 / 84), hsl(0 0% 0% / 0.06) calc(var(--clipsie-size) * 3 / 84), transparent calc(var(--clipsie-size) * 4 / 84))",
                }}
              />
              {/* Specular highlight — bright arc top-left */}
              <div
                className="absolute rounded-full"
                style={{
                  top: "calc(var(--clipsie-size) * 3 / 84)",
                  left: "calc(var(--clipsie-size) * 6 / 84)",
                  width: "55%",
                  height: "30%",
                  background: "linear-gradient(160deg, hsl(0 0% 100% / 0.6) 0%, hsl(0 0% 100% / 0) 100%)",
                  borderRadius: "50%",
                  filter: "blur(calc(var(--clipsie-size) * 2 / 84))",
                }}
              />
              {/* Inner bevel — creates depth between rim and face */}
              <div
                className="absolute rounded-full"
                style={{
                  top: "calc(var(--clipsie-size) * 6 / 84)",
                  left: "calc(var(--clipsie-size) * 6 / 84)",
                  right: "calc(var(--clipsie-size) * 6 / 84)",
                  bottom: "calc(var(--clipsie-size) * 6 / 84)",
                  boxShadow:
                    "inset 0 calc(var(--clipsie-size) * 2 / 84) calc(var(--clipsie-size) * 5 / 84) hsl(0 0% 0% / 0.5), " +
                    "inset 0 calc(var(--clipsie-size) * -1 / 84) calc(var(--clipsie-size) * 3 / 84) hsl(0 0% 100% / 0.3), " +
                    "0 calc(var(--clipsie-size) * 1 / 84) calc(var(--clipsie-size) * 2 / 84) hsl(0 0% 100% / 0.15)",
                  background: "transparent",
                }}
              />
            </div>

            {/* Inner face — gradient ring + avatar */}
            <div
              className="absolute rounded-full bg-gradient-to-br from-secondary/80 to-primary/80"
              style={{
                top: "calc(var(--clipsie-size) * 7 / 84)",
                left: "calc(var(--clipsie-size) * 7 / 84)",
                right: "calc(var(--clipsie-size) * 7 / 84)",
                bottom: "calc(var(--clipsie-size) * 7 / 84)",
                padding: "calc(var(--clipsie-size) * 2 / 84)",
              }}
            >
              <div className="h-full w-full rounded-full overflow-hidden bg-card">
                <img
                  src={clipsieAvatar.url}
                  alt="Clipsie chatbot avatar"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </button>
        </div>

        {/* "Meet Clipsie" label */}
        <button
          onClick={openClipsie}
          className="px-[14px] py-[6px] rounded-[10px] text-[12px] leading-[14px] sm:px-5 sm:py-2 sm:rounded-xl sm:text-sm sm:leading-[16px] text-primary-foreground font-bold text-center hover:opacity-90 transition-opacity cursor-pointer"
          style={{
            background: "linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)",
            boxShadow:
              "inset 0 2px 3px hsl(0 0% 100% / 0.35), " +
              "inset 0 -2px 4px hsl(0 0% 0% / 0.3), " +
              "0 3px 8px hsl(0 0% 0% / 0.4), " +
              "0 1px 2px hsl(0 0% 0% / 0.3)",
            textShadow: "0 2px 4px rgba(0,0,0,0.2), 0 -1px 0 rgba(255,255,255,0.15)",
            whiteSpace: "pre-line",
          }}
          aria-label="Meet Clipsie"
        >
          {"Meet\nClipsie"}
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/60 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={closeClipsie}
      />

      {/* Side drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full sm:w-[400px] flex flex-col bg-card border-l border-border shadow-2xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Minimal header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-full p-[2px]"
              style={{ background: "linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--gradient-amber)))" }}
            >
              <img src={clipsieChatAvatar} alt="Clipsie chatbot avatar" className="h-full w-full rounded-full object-cover" />
            </div>
            <div>
              <span className="text-sm font-semibold text-foreground">Clipsie</span>
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-accent" />
            </div>
          </div>
          <button
            onClick={closeClipsie}
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
            ...({ msHighContrastAdjust: "none" } as React.CSSProperties),
          }}
        >
          {messages.map((msg) => (
            <div key={msg.id} className={cn("flex gap-2.5", msg.sender === "user" ? "flex-row-reverse" : "flex-row")}>
              {msg.sender === "bot" && (
                <img
                  src={clipsieChatAvatar}
                  alt="Clipsie chatbot avatar"
                  className="h-7 w-7 rounded-full object-cover flex-shrink-0 mt-1"
                />
              )}
              <div
                className={cn(
                  "max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                  msg.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md",
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
              aria-label="Type a message"
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
