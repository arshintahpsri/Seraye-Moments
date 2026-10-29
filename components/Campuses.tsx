import { MapPin } from "lucide-react";
import { campuses } from "@/lib/data";
import Photo from "./Photo";

export default function Campuses() {
  return (
    <section id="kampus" className="container-page py-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-serif text-[28px] font-bold leading-tight text-ink">
          Find Us In Your Campus & City
        </h2>
        <p className="text-[13px] font-medium">Fotografer Stand-by On-Location</p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {campuses.map((c) => (
          <figure key={c.city} className="relative h-[146px] overflow-hidden rounded-2xl">
            <Photo
              name={c.image}
              alt={`Kampus ${c.city}`}
              fallback={c.tone}
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-forest/55" />
            <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 text-center text-white">
              <MapPin aria-hidden className="h-4 w-4" />
              <span className="text-[16px] font-bold">{c.city}</span>
              <span className="text-[10px] text-white/80">{c.note}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
