"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { packages, rupiah, type PhotoPackage } from "@/lib/data";
import { useBooking } from "./BookingProvider";
import { Icon } from "./icons";
import Rich from "./Rich";

const badgeTone = {
  rose: "bg-rose-soft text-rose",
  forest: "bg-forest text-white",
} as const;

function PackageCard({ pkg }: { pkg: PhotoPackage }) {
  const { packageId, setPackageId } = useBooking();
  const selected = packageId === pkg.id;

  return (
    <article
      className={`flex w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-xl bg-white sm:w-[380px] ${
        pkg.featured
          ? "border-2 border-forest shadow-lift"
          : "border border-transparent shadow-card"
      }`}
    >
      {pkg.featured && (
        <p className="bg-forest py-1 text-center text-[11px] font-semibold uppercase tracking-[0.04em] text-white">
          Most Recommended by Kak Salsa
        </p>
      )}

      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pkg.image}
          alt={pkg.imageAlt}
          className="h-[176px] w-full object-cover"
        />
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[11px] font-medium ${badgeTone[pkg.badgeTone]}`}
        >
          {pkg.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-[22px] font-medium leading-tight">{pkg.name}</h3>
          <span className="text-[12px] font-medium text-body/80">{pkg.kind}</span>
        </div>
        <p className="mt-1 text-[12px] leading-[18px]">{pkg.description}</p>

        <p className="mt-4 flex items-baseline gap-1.5">
          <span className="font-serif text-[28px] font-bold leading-none text-forest">
            {rupiah(pkg.price)}
          </span>
          <span className="text-[12px] text-body/80">/ {pkg.unit}</span>
        </p>

        <ul className="mb-5 mt-4 space-y-2.5 border-t border-line/60 pt-4 text-[12px]">
          {pkg.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Icon name={f.icon} className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest" />
              <span>
                <Rich parts={f.text} />
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          onClick={() => setPackageId(pkg.id)}
          aria-label={`${pkg.cta}${selected ? " (terpilih)" : ""}`}
          className={`mt-auto flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-semibold transition ${
            pkg.featured
              ? "bg-gold text-forest hover:bg-gold-dark"
              : "bg-sage text-forest hover:bg-leaf"
          }`}
        >
          {pkg.cta}
          <Icon name={pkg.ctaIcon} className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

export default function PackageCatalog() {
  const rail = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) =>
    rail.current?.scrollBy({ left: dir * 404, behavior: "smooth" });

  const arrow =
    "flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-card transition hover:bg-sage";

  return (
    <section id="paket" className="container-page pb-16 pt-14 sm:pb-20 sm:pt-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="section-title max-w-[520px]">
            Find the Perfect Package for Your Moment
          </h2>
          <p className="mt-2 text-[12px]">
            Geser kartu untuk melihat seluruh opsi paket pilihan
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Paket sebelumnya"
            className={arrow}
          >
            <ChevronLeft aria-hidden className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Paket berikutnya"
            className={arrow}
          >
            <ChevronRight aria-hidden className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={rail}
        className="rail -mx-4 mt-6 flex snap-x gap-6 overflow-x-auto px-4 pb-8 pt-1 sm:mx-0 sm:px-0"
      >
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}
