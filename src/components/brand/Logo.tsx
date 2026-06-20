import { Link } from "@tanstack/react-router";
import { ShieldPlus } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-gold shadow-gold-glow transition-transform group-hover:scale-105">
        <ShieldPlus className="h-4.5 w-4.5 text-charcoal" strokeWidth={2.5} />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[17px] font-semibold tracking-tight text-foreground">
            NoyalCabinet
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            by ProtoxForge
          </span>
        </span>
      )}
    </Link>
  );
}
