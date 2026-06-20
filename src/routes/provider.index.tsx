import { createFileRoute, Link } from "@tanstack/react-router";
import { KeyRound, FileText, History } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";

export const Route = createFileRoute("/provider/")({
  component: () => (
    <div>
      <PageHeader eyebrow="Provider" title="Welcome, Dr. Anitha" description="Access patient records securely with consent codes." />
      <div className="grid gap-4 sm:grid-cols-3">
        <QuickCard to="/provider/code" icon={KeyRound} label="Enter Share Code" desc="Use a code given by your patient." />
        <QuickCard to="/provider/shared" icon={FileText} label="Active Sessions" desc="Documents currently shared with you." />
        <QuickCard to="/provider/history" icon={History} label="Access History" desc="Past consented sessions." />
      </div>
    </div>
  ),
});

function QuickCard({ to, icon: Icon, label, desc }: { to: string; icon: typeof KeyRound; label: string; desc: string }) {
  return (
    <Link to={to} className="block rounded-2xl glass p-6 hover-lift">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold/30 text-gold-deep">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold">{label}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </Link>
  );
}
