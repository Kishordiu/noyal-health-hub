import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Security } from "@/components/landing/Security";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NoyalCabinet — Secure Medical Records Platform" },
      { name: "description", content: "Store, share and control your medical documents with time-limited access and complete transparency." },
      { property: "og:title", content: "NoyalCabinet — Secure Medical Records" },
      { property: "og:description", content: "Your Health Records. Your Control. Zero Trust Security." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Security />
      <Footer />
    </div>
  );
}
