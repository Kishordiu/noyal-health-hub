import { createFileRoute } from "@tanstack/react-router";
import { FileText, Upload, Download, MoreHorizontal } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Button } from "@/components/ui/button";

const docs = [
  { name: "Blood Report - Nov 2026.pdf", type: "Lab", size: "1.2 MB", date: "Nov 18, 2026" },
  { name: "MRI Spine.dcm", type: "Imaging", size: "24.6 MB", date: "Nov 10, 2026" },
  { name: "Prescription_Nov.pdf", type: "Prescription", size: "412 KB", date: "Nov 02, 2026" },
  { name: "Annual Checkup.pdf", type: "Report", size: "2.4 MB", date: "Sep 12, 2026" },
  { name: "Vaccination Record.pdf", type: "Record", size: "180 KB", date: "Jul 03, 2026" },
];

export const Route = createFileRoute("/app/documents")({
  component: () => (
    <div>
      <PageHeader
        eyebrow="Vault"
        title="My Documents"
        description="All your medical records, encrypted and yours alone."
        action={
          <Button className="rounded-xl bg-gradient-gold text-charcoal hover:opacity-90">
            <Upload className="mr-2 h-4 w-4" /> Upload
          </Button>
        }
      />
      <div className="overflow-hidden rounded-2xl glass">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-5 py-3">Name</th>
              <th className="hidden px-5 py-3 sm:table-cell">Type</th>
              <th className="hidden px-5 py-3 md:table-cell">Size</th>
              <th className="hidden px-5 py-3 sm:table-cell">Date</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {docs.map((d) => (
              <tr key={d.name} className="transition-colors hover:bg-accent/40">
                <td className="px-5 py-3.5">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-gold/30 text-gold-deep">
                      <FileText className="h-4 w-4" />
                    </span>
                    <span className="truncate font-medium">{d.name}</span>
                  </div>
                </td>
                <td className="hidden px-5 py-3.5 text-muted-foreground sm:table-cell">{d.type}</td>
                <td className="hidden px-5 py-3.5 text-muted-foreground md:table-cell">{d.size}</td>
                <td className="hidden px-5 py-3.5 text-muted-foreground sm:table-cell">{d.date}</td>
                <td className="px-5 py-3.5 text-right">
                  <div className="inline-flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-3.5 w-3.5" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-3.5 w-3.5" /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
});
