import { Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-border/60 bg-background/40 backdrop-blur">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Your health records. Your control. Zero trust security.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Product</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#features" className="hover:text-foreground">Features</a></li>
            <li><a href="#security" className="hover:text-foreground">Security</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Contact</h4>
          <a
            href="tel:+919677285223"
            className="mt-3 inline-flex items-center gap-2 text-sm text-foreground hover:text-gold-deep"
          >
            <Phone className="h-3.5 w-3.5" /> +91 9677285223
          </a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 ProtoxForge. All Rights Reserved.</span>
          <span>Built by ProtoxForge</span>
        </div>
      </div>
    </footer>
  );
}
