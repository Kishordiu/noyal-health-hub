import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portal/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/app/settings")({
  component: () => (
    <div>
      <PageHeader eyebrow="Account" title="Profile Settings" description="Manage your account and security preferences." />

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl glass p-6">
          <h3 className="font-display text-lg font-semibold">Personal Info</h3>
          <div className="mt-4 space-y-4">
            <div className="space-y-1.5"><Label>Full name</Label><Input defaultValue="Noyal Sebastian" /></div>
            <div className="space-y-1.5"><Label>Email</Label><Input defaultValue="noyal@example.com" /></div>
            <div className="space-y-1.5"><Label>Phone</Label><Input defaultValue="+91 9677285223" /></div>
            <Button className="rounded-xl bg-gradient-gold text-charcoal hover:opacity-90">Save Changes</Button>
          </div>
        </div>

        <div className="rounded-2xl glass p-6">
          <h3 className="font-display text-lg font-semibold">Security</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center justify-between rounded-xl border border-border/60 p-3"><span>Two-factor authentication</span><Button size="sm" variant="outline" className="rounded-lg">Enable</Button></li>
            <li className="flex items-center justify-between rounded-xl border border-border/60 p-3"><span>Active sessions</span><Button size="sm" variant="outline" className="rounded-lg">View</Button></li>
            <li className="flex items-center justify-between rounded-xl border border-border/60 p-3"><span>Change password</span><Button size="sm" variant="outline" className="rounded-lg">Update</Button></li>
          </ul>
        </div>
      </div>
    </div>
  ),
});
