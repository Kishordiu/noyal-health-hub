import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-2xl glass px-4 py-2.5 sm:mt-6 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#security" className="transition-colors hover:text-foreground">Security</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link to="/auth">Login</Link>
          </Button>
          <Button asChild size="sm" className="bg-gradient-gold text-charcoal hover:opacity-90">
            <Link to="/auth" search={{ mode: "signup" } as never}>Create Account</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
