"use client";

import { Check, CircleCheck, Hourglass, ShieldCheck, Star } from "lucide-react";
import { photographers, type Photographer, type SlotState } from "@/lib/data";
import { useBooking } from "./BookingProvider";

const tagTone: Record<Photographer["tagTone"], string> = {
  moss: "bg-moss text-white",
  dark: "bg-forest text-white",
  light: "bg-white text-ink",
};

function Slot({ label, state }: { label: string; state: SlotState }) {
  const low = state.kind === "low";
  return (
    <p className="flex items-center justify-between gap-2">
      <span>{label}</span>
      <span
        className={`flex items-center gap-1 font-semibold ${low ? "text-rose" : "text-moss-dark"}`}
      >
        {low ? (
          <Hourglass aria-hidden className="h-3.5 w-3.5" />
        ) : (
          <CircleCheck aria-hidden className="h-3.5 w-3.5" />
        )}
        {low ? `Sisa ${state.left} Slot` : `${state.count} Slot Tersedia`}
      </span>
    </p>
  );
}

export default function PhotographerPicker() {
  const { photographerId, setPhotographerId } = useBooking();

  return (
    <section className="container-page py-6">
      <div className="rounded-3xl border border-line bg-white p-5 sm:p-8 sm:pt-[72px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Pencocokan Jadwal & Gaya Visual</p>
            <h2 className="section-title mt-1 text-[24px] font-bold sm:text-[30px]">
              Kurasi Fotografer & Status Slot Golden Time
            </h2>
            <p className="mt-2 text-[14px]">
              Pilih fotografer yang selaras dengan mood wisuda Anda. Booking
              langsung tanpa antre Google Form yang rumit.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-[12px] font-semibold text-ink">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mint/40 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-wa" />
              Live Slot Monitoring
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-mint/40 px-3 py-1.5">
              <ShieldCheck aria-hidden className="h-3.5 w-3.5" />
              100% Data Handled by Admin
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-6 border-t border-line pt-6 md:grid-cols-3">
          {photographers.map((p) => {
            const selected = photographerId === p.id;
            return (
              <article
                key={p.id}
                className={`flex flex-col rounded-2xl bg-tint p-5 ${
                  selected ? "border-2 border-moss/60" : "border-2 border-transparent"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`pill ${tagTone[p.tagTone]}`}>{p.tag}</span>
                  <span className="flex items-center gap-1 text-[12px] text-body">
                    <Star aria-hidden className="h-3.5 w-3.5" />
                    {p.rating} ({p.clients} Klien)
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-[18px] font-bold">
                  {p.name} ({p.role})
                </h3>
                <p className="mt-2 text-[12px] leading-5">{p.description}</p>
                <div className="mt-4 space-y-1.5 text-[12px]">
                  <Slot label="Slot Pagi (07.00 - 09.00):" state={p.morning} />
                  <Slot label="Slot Sore (15.30 - 17.30):" state={p.evening} />
                </div>
                <button
                  type="button"
                  onClick={() => setPhotographerId(p.id)}
                  aria-pressed={selected}
                  className={`btn mt-5 w-full rounded-xl border text-[13px] ${
                    selected
                      ? "border-moss bg-moss text-white hover:bg-moss-dark"
                      : "border-line bg-white text-ink hover:bg-line"
                  }`}
                >
                  <Check aria-hidden className="h-4 w-4" />
                  Pilih {p.name.replace(/ [A-Z]\.$/, "")}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
