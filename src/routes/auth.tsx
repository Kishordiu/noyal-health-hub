import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Stethoscope, User } from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — NoyalCabinet" },
      { name: "description", content: "Access your secure NoyalCabinet account." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [role, setRole] = useState<"patient" | "doctor">("patient");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: role === "patient" ? "/app" : "/provider" });
  };

  return (
    <div className="relative grid min-h-screen place-items-center px-4 py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="relative w-full max-w-md">
        <Link to="/" className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" /> Back
        </Link>
        <div className="rounded-3xl glass-strong p-7">
          <div className="flex flex-col items-center text-center">
            <Logo />
            <h1 className="mt-5 font-display text-2xl font-semibold">
              {mode === "login" ? "Welcome back" : "Create your account"}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {mode === "login" ? "Sign in to your secure vault." : "Start securing your records in minutes."}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2 rounded-xl border border-border/60 bg-muted/40 p-1">
            {(["patient", "doctor"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                  role === r ? "bg-gradient-gold text-charcoal shadow-gold-glow" : "text-muted-foreground"
                }`}
              >
                {r === "patient" ? <User className="h-3.5 w-3.5" /> : <Stethoscope className="h-3.5 w-3.5" />}
                {r === "patient" ? "Patient" : "Provider"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {mode === "signup" && (
              <div className="space-y-1.5">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" placeholder="Jane Doe" required />
              </div>
            )}
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>
            <Button type="submit" className="w-full rounded-xl bg-gradient-gold text-charcoal hover:opacity-90">
              {mode === "login" ? "Sign in" : "Create account"}
            </Button>
          </form>

          <p className="mt-5 text-center text-sm text-muted-foreground">
            {mode === "login" ? "New here?" : "Already have an account?"}{" "}
            <button
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {mode === "login" ? "Create account" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
