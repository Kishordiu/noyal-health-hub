import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Share2, Clock, Copy, Check } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Button } from "@/components/ui/button";

const durations = ["15 Minutes", "1 Hour", "24 Hours", "Custom"];

const active = [
  { code: "NX-7H2K", to: "Dr. Anitha Rao", expires: "in 42 min", docs: 2 },
  { code: "NX-9P1V", to: "Apollo Hospital", expires: "in 3 hr", docs: 5 },
];

export const Route = createFileRoute("/app/share")({
  component: SharePage,
});

function SharePage() {
  const [duration, setDuration] = useState("1 Hour");
  const [copied, setCopied] = useState(false);
  const sample = "NX-A3F9";

  return (
    <div>
      <PageHeader eyebrow="Zero Trust" title="Share Access" description="Generate a temporary, single-purpose share code." />

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl glass-strong p-6">
          <h3 className="font-display text-lg font-semibold">New Share</h3>
          <p className="mt-1 text-sm text-muted-foreground">Time-limited access. Auto-expires.</p>

          <div className="mt-5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Access Window</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {durations.map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`rounded-xl border px-3.5 py-2 text-xs transition-all ${
                    duration === d
                      ? "border-gold/60 bg-gradient-gold/30 text-foreground"
                      : "border-border/60 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Clock className="mr-1.5 inline h-3 w-3" />{d}
                </button>
              ))}
            </div>
          </div>

          <Button className="mt-6 w-full rounded-xl bg-gradient-gold text-charcoal hover:opacity-90">
            <Share2 className="mr-2 h-4 w-4" /> Generate Share Code
          </Button>

          <div className="mt-5 rounded-2xl border border-dashed border-gold/40 bg-card/60 p-5 text-center">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Sample Code</p>
            <p className="mt-1 font-display text-3xl font-semibold tracking-[0.3em] text-gradient-gold">{sample}</p>
            <button
              onClick={() => { navigator.clipboard?.writeText(sample); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
            >
              {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              {copied ? "Copied" : "Copy code"}
            </button>
          </div>
        </div>

        <div className="rounded-2xl glass p-6">
          <h3 className="font-display text-lg font-semibold">Active Shares</h3>
          <ul className="mt-4 space-y-3">
            {active.map((s) => (
              <li key={s.code} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border/60 bg-card/60 p-4">
                <div className="min-w-0">
                  <p className="font-mono text-sm font-semibold text-gold-deep">{s.code}</p>
                  <p className="mt-0.5 truncate text-sm">{s.to}</p>
                  <p className="text-xs text-muted-foreground">{s.docs} documents · expires {s.expires}</p>
                </div>
                <Button variant="outline" size="sm" className="shrink-0 rounded-lg">Revoke</Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
