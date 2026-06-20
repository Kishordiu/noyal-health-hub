import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { Bell, LogOut } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

export type NavItem = { to: string; label: string; icon: LucideIcon };

export function PortalShell({ items, title }: { items: NavItem[]; title: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen w-full">
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border/60 bg-sidebar/80 px-4 py-6 backdrop-blur-xl md:flex">
        <Logo />
        <nav className="mt-8 flex flex-col gap-1">
          {items.map((it) => {
            const active = pathname === it.to || (it.to !== "/" && pathname.startsWith(it.to + "/"));
            return (
              <Link
                key={it.to}
                to={it.to}
                className={cn(
                  "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all",
                  active
                    ? "bg-gradient-gold/30 text-foreground shadow-gold-glow"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
                )}
              >
                <it.icon className={cn("h-4.5 w-4.5 shrink-0", active && "text-gold-deep")} />
                <span className="truncate">{it.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="md:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border/60 bg-background/70 px-4 backdrop-blur-xl sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="md:hidden"><Logo compact /></div>
            <h1 className="truncate font-display text-lg font-semibold sm:text-xl">{title}</h1>
          </div>
          <button className="grid h-9 w-9 place-items-center rounded-xl border border-border/60 bg-card/60 text-muted-foreground hover:text-foreground">
            <Bell className="h-4 w-4" />
          </button>
        </header>

        <main className="px-4 pb-24 pt-6 sm:px-8 md:pb-10">
          <Outlet />
        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-3 left-1/2 z-40 flex w-[min(94%,28rem)] -translate-x-1/2 items-center justify-between gap-1 rounded-2xl glass-strong px-2 py-2 md:hidden">
        {items.slice(0, 5).map((it) => {
          const active = pathname === it.to || (it.to !== "/" && pathname.startsWith(it.to + "/"));
          return (
            <Link
              key={it.to}
              to={it.to}
              className={cn(
                "flex flex-1 flex-col items-center gap-0.5 rounded-xl px-1 py-1.5 text-[10px] transition-colors",
                active ? "bg-gradient-gold/40 text-foreground" : "text-muted-foreground",
              )}
            >
              <it.icon className="h-4.5 w-4.5" />
              <span className="truncate">{it.label.split(" ")[0]}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
