import {
  Stethoscope, LockKeyhole, FileText, Bot, Hospital, ScrollText,
} from "lucide-react";

const features = [
  { icon: Stethoscope, title: "Secure Health Vault", desc: "Encrypted storage for every report, prescription and scan." },
  { icon: LockKeyhole, title: "Temporary Access Sharing", desc: "Grant time-bound access. Auto-expires in minutes or hours." },
  { icon: FileText, title: "Medical Report Management", desc: "Organize lab results, imaging and discharge summaries." },
  { icon: Bot, title: "AI Health Assistant", desc: "Ask questions about your records with a private AI." },
  { icon: Hospital, title: "Smart Hospital Recommendations", desc: "Find hospitals by specialty, city, insurance and rating." },
  { icon: ScrollText, title: "Complete Access Audit Logs", desc: "Every view recorded. Download transparency reports." },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Built for trust and control
        </h2>
        <p className="mt-3 text-muted-foreground">
          Every interaction is consented, encrypted and audited.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative rounded-2xl glass p-6 hover-lift"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold/80 text-charcoal shadow-gold-glow">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
