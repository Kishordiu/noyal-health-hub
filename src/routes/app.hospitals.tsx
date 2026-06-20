import { createFileRoute } from "@tanstack/react-router";
import { Star, MapPin, Clock, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";

const hospitals = [
  { name: "Apollo Hospital", city: "Chennai", specialty: "Cardiology", rating: 4.8, wait: "20 min", insurance: "Star, HDFC Ergo" },
  { name: "Fortis Malar", city: "Chennai", specialty: "Neurology", rating: 4.6, wait: "35 min", insurance: "Bajaj, ICICI" },
  { name: "MIOT International", city: "Chennai", specialty: "Orthopedics", rating: 4.7, wait: "25 min", insurance: "Star, Religare" },
  { name: "Kauvery Hospital", city: "Trichy", specialty: "Multi-specialty", rating: 4.5, wait: "15 min", insurance: "Most insurers" },
];

export const Route = createFileRoute("/app/hospitals")({
  component: () => (
    <div>
      <PageHeader eyebrow="Discover" title="Recommended Hospitals" description="Curated by specialty, location, ratings and insurance." />
      <div className="grid gap-4 md:grid-cols-2">
        {hospitals.map((h) => (
          <div key={h.name} className="rounded-2xl glass p-5 hover-lift">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <div className="min-w-0">
                <h3 className="truncate font-display text-lg font-semibold">{h.name}</h3>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {h.city} · {h.specialty}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-gradient-gold/30 px-2.5 py-0.5 text-xs font-medium">
                <Star className="h-3 w-3 fill-current text-gold-deep" /> {h.rating}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> Wait ~{h.wait}</span>
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> {h.insurance}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
});
