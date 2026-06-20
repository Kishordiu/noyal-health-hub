import { createFileRoute } from "@tanstack/react-router";
import { History } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";

const history = [
  { patient: "Noyal S.", docs: 3, date: "Nov 19, 2026", duration: "12 min" },
  { patient: "Ravi K.", docs: 1, date: "Nov 15, 2026", duration: "4 min" },
  { patient: "Asha M.", docs: 2, date: "Nov 10, 2026", duration: "8 min" },
];

export const Route = createFileRoute("/provider/history")({
  component: () => (
    <div>
      <PageHeader eyebrow="Audit" title="Access History" description="Your past consented sessions." />
      <div className="overflow-hidden rounded-2xl glass">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-5 py-3">Patient</th>
              <th className="hidden px-5 py-3 sm:table-cell">Documents</th>
              <th className="px-5 py-3">Date</th>
              <th className="hidden px-5 py-3 md:table-cell">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {history.map((h, i) => (
              <tr key={i} className="hover:bg-accent/40">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <History className="h-3.5 w-3.5 text-gold-deep" />
                    <span className="font-medium">{h.patient}</span>
                  </div>
                </td>
                <td className="hidden px-5 py-3.5 text-muted-foreground sm:table-cell">{h.docs} shared</td>
                <td className="px-5 py-3.5 text-muted-foreground">{h.date}</td>
                <td className="hidden px-5 py-3.5 text-muted-foreground md:table-cell">{h.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
});
