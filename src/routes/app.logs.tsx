import { createFileRoute } from "@tanstack/react-router";
import { Download, Eye } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Button } from "@/components/ui/button";

const logs = [
  { who: "Dr. Anitha Rao", doc: "Blood Report - Nov 2026", action: "Viewed", time: "Nov 19, 12:04 PM", duration: "4 min" },
  { who: "Apollo Hospital", doc: "MRI Spine", action: "Downloaded", time: "Nov 18, 09:21 AM", duration: "—" },
  { who: "Dr. Karthik V.", doc: "ECG_Oct.pdf", action: "Viewed", time: "Nov 17, 06:42 PM", duration: "2 min" },
  { who: "System", doc: "Share NX-7H2K", action: "Expired", time: "Nov 17, 06:00 PM", duration: "—" },
];

export const Route = createFileRoute("/app/logs")({
  component: () => (
    <div>
      <PageHeader
        eyebrow="Transparency"
        title="Access Audit Logs"
        description="Every view, every download — fully accountable."
        action={
          <Button variant="outline" className="rounded-xl border-gold/40">
            <Download className="mr-2 h-4 w-4" /> Download Report
          </Button>
        }
      />
      <div className="overflow-hidden rounded-2xl glass">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-5 py-3">Who</th>
              <th className="hidden px-5 py-3 sm:table-cell">Document</th>
              <th className="px-5 py-3">Action</th>
              <th className="hidden px-5 py-3 md:table-cell">When</th>
              <th className="hidden px-5 py-3 md:table-cell">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {logs.map((l, i) => (
              <tr key={i} className="hover:bg-accent/40">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <Eye className="h-3.5 w-3.5 text-gold-deep" />
                    <span className="truncate font-medium">{l.who}</span>
                  </div>
                </td>
                <td className="hidden px-5 py-3.5 text-muted-foreground sm:table-cell">{l.doc}</td>
                <td className="px-5 py-3.5">
                  <span className="rounded-full bg-gradient-gold/30 px-2.5 py-0.5 text-xs">{l.action}</span>
                </td>
                <td className="hidden px-5 py-3.5 text-muted-foreground md:table-cell">{l.time}</td>
                <td className="hidden px-5 py-3.5 text-muted-foreground md:table-cell">{l.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
});
