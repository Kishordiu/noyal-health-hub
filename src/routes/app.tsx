import { createFileRoute } from "@tanstack/react-router";
import {
  LayoutDashboard, FileText, Share2, BellRing, Bot, Hospital, ScrollText, Settings,
} from "lucide-react";
import { PortalShell, type NavItem } from "@/components/portal/PortalShell";

const items: NavItem[] = [
  { to: "/app", label: "Dashboard", icon: LayoutDashboard },
  { to: "/app/documents", label: "Documents", icon: FileText },
  { to: "/app/share", label: "Sharing", icon: Share2 },
  { to: "/app/requests", label: "Requests", icon: BellRing },
  { to: "/app/assistant", label: "AI Assistant", icon: Bot },
  { to: "/app/hospitals", label: "Hospitals", icon: Hospital },
  { to: "/app/logs", label: "Audit Logs", icon: ScrollText },
  { to: "/app/settings", label: "Settings", icon: Settings },
];

export const Route = createFileRoute("/app")({
  component: () => <PortalShell items={items} title="Patient Portal" />,
});
