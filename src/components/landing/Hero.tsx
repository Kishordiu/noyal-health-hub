import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-12 md:grid-cols-2 md:items-center md:pt-24 md:pb-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-gold-deep" />
            Zero Trust Security
          </span>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Secure Medical <br className="hidden sm:block" />
            Records <span className="text-gradient-gold">Management</span> Platform
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Store, share, and control your medical documents securely with
            time-limited access and complete transparency.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-xl bg-gradient-gold text-charcoal hover:opacity-90">
              <Link to="/auth">
                Create Account <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl border-gold/40 bg-card/60 backdrop-blur">
              <Link to="/auth">Login</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> HIPAA-aligned</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> End-to-end encrypted</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Audit logged</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-gold opacity-20 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.75rem] glass-strong">
            <img
              src={heroImg}
              alt="Secure medical records illustrated with floating glass cards and a gold padlock shield"
              width={1280}
              height={1280}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
