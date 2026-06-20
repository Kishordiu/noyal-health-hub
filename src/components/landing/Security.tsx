import { Clock, UserCheck, FileLock2 } from "lucide-react";

const pillars = [
  { icon: UserCheck, title: "Patient-Approved Access", desc: "Every share requires explicit consent — no exceptions." },
  { icon: Clock, title: "Time-Limited Windows", desc: "15 minutes, 1 hour, or a custom duration. Access expires automatically." },
  { icon: FileLock2, title: "Full Transparency", desc: "Download a signed PDF report of who viewed what, when, and for how long." },
];

export function Security() {
  return (
    <section id="security" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl glass-strong p-8 sm:p-12">
        <div className="grid gap-10 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <Icon className="h-6 w-6 text-gold-deep" />
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
