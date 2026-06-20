import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Clock, FileText, Eye } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Button } from "@/components/ui/button";

const docs = [
  { name: "Blood Report - Nov 2026.pdf", type: "Lab", size: "1.2 MB" },
  { name: "MRI Spine.dcm", type: "Imaging", size: "24.6 MB" },
  { name: "Prescription_Nov.pdf", type: "Prescription", size: "412 KB" },
];

export const Route = createFileRoute("/provider/shared")({
  component: SharedPage,
});

function SharedPage() {
  const [secondsLeft, setSecondsLeft] = useState(60 * 14 + 32);

  useEffect(() => {
    const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div>
      <PageHeader
        eyebrow="Active Session"
        title="Patient: Noyal S."
        description="Documents shared by patient consent."
        action={
          <div className="flex items-center gap-2 rounded-xl border border-gold/40 bg-card/60 px-4 py-2">
            <Clock className="h-4 w-4 text-gold-deep" />
            <span className="font-mono text-sm font-semibold">{mm}:{ss}</span>
            <span className="text-xs text-muted-foreground">until expiry</span>
          </div>
        }
      />

      <div className="grid gap-3">
        {docs.map((d) => (
          <div key={d.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl glass p-4 hover-lift">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-gold/30 text-gold-deep">
                <FileText className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{d.name}</p>
                <p className="text-xs text-muted-foreground">{d.type} · {d.size}</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="shrink-0 rounded-lg">
              <Eye className="mr-1.5 h-3.5 w-3.5" /> View
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
