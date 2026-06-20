import { createFileRoute } from "@tanstack/react-router";
import { FileText, Share2, BellRing, Activity, TrendingUp, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app/")({
  component: Dashboard,
});

const stats = [
  { icon: FileText, label: "Total Documents", value: "24", change: "+3 this month" },
  { icon: Share2, label: "Active Shares", value: "5", change: "2 expiring soon" },
  { icon: BellRing, label: "Pending Requests", value: "2", change: "From Apollo, Fortis" },
  { icon: ShieldCheck, label: "Security Score", value: "A+", change: "Zero anomalies" },
];

const activity = [
  { who: "Dr. Anitha Rao", what: "Viewed Blood Report - Nov 2026", when: "12 min ago" },
  { who: "Apollo Hospital", what: "Requested MRI Spine access", when: "1 hour ago" },
  { who: "You", what: "Uploaded Prescription_Nov.pdf", when: "Yesterday" },
  { who: "Dr. Karthik V.", what: "Access expired automatically", when: "2 days ago" },
];

function Dashboard() {
  return (
    <div>
      <PageHeader
        eyebrow="Overview"
        title="Welcome back, Noyal"
        description="Here's what's happening with your records today."
        action={<Button className="rounded-xl bg-gradient-gold text-charcoal hover:opacity-90">Upload Record</Button>}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ icon: Icon, label, value, change }) => (
          <div key={label} className="rounded-2xl glass p-5 hover-lift">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
              <Icon className="h-4 w-4 text-gold-deep" />
            </div>
            <div className="mt-3 font-display text-3xl font-semibold">{value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{change}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <div className="rounded-2xl glass p-6 lg:col-span-2">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-gold-deep" />
            <h3 className="font-display text-lg font-semibold">Recent Activity</h3>
          </div>
          <ul className="mt-4 divide-y divide-border/60">
            {activity.map((a, i) => (
              <li key={i} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{a.who}</p>
                  <p className="truncate text-xs text-muted-foreground">{a.what}</p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">{a.when}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl glass-strong p-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-gold-deep" />
            <h3 className="font-display text-lg font-semibold">AI Insights</h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Your last 3 lipid panels show a downward LDL trend. Consider a follow-up in 60 days.
          </p>
          <Button variant="outline" className="mt-4 w-full rounded-xl border-gold/40">
            Ask the assistant
          </Button>
        </div>
      </div>
    </div>
  );
}
