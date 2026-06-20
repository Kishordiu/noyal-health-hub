import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Button } from "@/components/ui/button";

const requests = [
  { from: "Apollo Hospital", reason: "Pre-admission review", docs: ["MRI Spine", "Blood Report"], when: "1 hour ago" },
  { from: "Dr. Karthik V.", reason: "Cardiology follow-up", docs: ["ECG_Oct.pdf"], when: "3 hours ago" },
  { from: "Fortis Diagnostics", reason: "Lab comparison", docs: ["Lipid Panel - Sept"], when: "Yesterday" },
];

export const Route = createFileRoute("/app/requests")({
  component: () => (
    <div>
      <PageHeader eyebrow="Consent" title="Pending Requests" description="Approve or deny access — you're always in control." />
      <div className="space-y-3">
        {requests.map((r, i) => (
          <div key={i} className="rounded-2xl glass p-5 hover-lift">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="truncate font-display text-base font-semibold">{r.from}</h4>
                  <span className="text-xs text-muted-foreground">· {r.when}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{r.reason}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {r.docs.map((d) => (
                    <span key={d} className="rounded-full border border-gold/30 bg-card/60 px-2.5 py-0.5 text-xs">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button size="sm" variant="outline" className="rounded-lg"><X className="h-3.5 w-3.5" /></Button>
                <Button size="sm" className="rounded-lg bg-gradient-gold text-charcoal hover:opacity-90"><Check className="mr-1 h-3.5 w-3.5" /> Approve</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
});
