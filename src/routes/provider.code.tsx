import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { KeyRound } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/provider/code")({
  component: CodePage,
});

function CodePage() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <PageHeader eyebrow="Consent" title="Enter Share Code" description="Patient consent is required for every session." />
      <div className="mx-auto max-w-md rounded-2xl glass-strong p-7">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold/30 text-gold-deep">
          <KeyRound className="h-5 w-5" />
        </span>
        <h3 className="mt-4 font-display text-lg font-semibold">Patient Share Code</h3>
        <p className="mt-1 text-sm text-muted-foreground">Enter the 6-character code provided by your patient.</p>

        <input
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="NX-XXXX"
          maxLength={8}
          className="mt-5 w-full rounded-xl border border-border/60 bg-card/60 px-4 py-3 text-center font-mono text-2xl tracking-[0.4em] outline-none focus:border-gold/60"
        />

        <Button
          onClick={() => navigate({ to: "/provider/shared" })}
          className="mt-5 w-full rounded-xl bg-gradient-gold text-charcoal hover:opacity-90"
        >
          Request Access
        </Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          The patient will be notified and asked to approve.
        </p>
      </div>
    </div>
  );
}
