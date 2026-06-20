import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bot, Send, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Button } from "@/components/ui/button";

type Msg = { role: "user" | "ai"; text: string };

const initial: Msg[] = [
  { role: "ai", text: "Hi Noyal. I can answer questions about your records, summarize reports, or explain results. How can I help today?" },
];

const suggestions = ["Summarize my last blood report", "What's my LDL trend?", "Explain my MRI findings"];

export const Route = createFileRoute("/app/assistant")({
  component: AssistantPage,
});

function AssistantPage() {
  const [messages, setMessages] = useState<Msg[]>(initial);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [
      ...m,
      { role: "user", text },
      { role: "ai", text: "Based on your records, this is a placeholder response. Real AI responses will be available once the assistant backend is wired up." },
    ]);
    setInput("");
  };

  return (
    <div className="flex h-[calc(100vh-9rem)] flex-col">
      <PageHeader eyebrow="Private" title="AI Health Assistant" description="Trained on your records. Always private." />

      <div className="flex-1 overflow-y-auto rounded-2xl glass p-5">
        <div className="mx-auto max-w-2xl space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.role === "user" ? "justify-end" : ""}`}>
              {m.role === "ai" && (
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-gold/40 text-gold-deep">
                  <Bot className="h-4 w-4" />
                </span>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-charcoal text-background"
                    : "bg-card/80 text-foreground"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-card/60 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
            >
              <Sparkles className="h-3 w-3 text-gold-deep" /> {s}
            </button>
          ))}
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); send(input); }}
          className="flex items-center gap-2 rounded-2xl glass-strong p-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about your health records…"
            className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
          />
          <Button type="submit" size="icon" className="rounded-xl bg-gradient-gold text-charcoal hover:opacity-90">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
