import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard, KeyRound, FileText, History } from "lucide-react";
import { PortalShell, type NavItem } from "@/components/portal/PortalShell";

const items: NavItem[] = [
  { to: "/provider", label: "Dashboard", icon: LayoutDashboard },
  { to: "/provider/code", label: "Enter Code", icon: KeyRound },
  { to: "/provider/shared", label: "Shared Documents", icon: FileText },
  { to: "/provider/history", label: "Access History", icon: History },
];

export const Route = createFileRoute("/provider")({
  component: () => <PortalShell items={items} title="Provider Portal" />,
});
