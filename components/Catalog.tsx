"use client";

import { CalendarCheck, ChevronLeft, ChevronRight, MessageSquareText, MoveHorizontal } from "lucide-react";
import { useRef, useState } from "react";
import {
  catalogPerks,
  categories,
  DP_AMOUNT,
  packages,
  rupiah,
  waLink,
  type PackageCategory,
  type PhotoPackage,
} from "@/lib/data";
import { useBooking } from "./BookingProvider";
import { Icon } from "./icons";

type Filter = "semua" | PackageCategory;

function PackageCard({ pkg }: { pkg: PhotoPackage }) {
  const { packageId, setPackageId } = useBooking();
  const category = categories.find((c) => c.id === pkg.category)!;
  const selected = packageId === pkg.id;
  const saving = pkg.normalPrice - pkg.price;

  return (
    <article
      className={`relative flex w-[300px] shrink-0 snap-start flex-col rounded-2xl bg-tint p-5 sm:w-[380px] ${
        pkg.popular ? "border-2 border-moss bg-white" : "border border-transparent"
      }`}
    >
      {pkg.popular && (
        <span className="absolute -top-px right-5 rounded-b-md bg-moss px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-white">
          Paling Populer
        </span>
      )}

      <div className="flex items-center justify-between gap-2">
        <span className="pill bg-mint text-moss-dark">
          <Icon name={category.icon} className="h-3 w-3" />
          {category.label}
        </span>
        <span className="pill bg-rose-soft text-rose">Hemat {rupiah(saving)}</span>
      </div>

      <h3 className="mt-5 font-serif text-[22px] font-bold leading-tight">{pkg.name}</h3>
      <p className="mt-2 min-h-[36px] text-[12px] leading-[18px]">{pkg.description}</p>

      <p className="mt-4 flex items-baseline gap-2">
        <span className="font-serif text-[28px] font-bold leading-none text-moss">
          {rupiah(pkg.price)}
        </span>
        <s className="text-[12px] text-body/70">{rupiah(pkg.normalPrice)}</s>
      </p>

      <ul className="mt-4 space-y-2 border-t border-line pt-4 text-[12px]">
        {pkg.features.map((f) => (
          <li key={f.lead} className="flex items-start gap-2">
            <Icon name={f.icon} className="mt-0.5 h-3.5 w-3.5 shrink-0 text-moss" />
            <span>
              <strong className="font-bold text-ink">{f.lead}</strong>
              {f.rest}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-2 pt-6">
        <a
          href="#booking"
          onClick={() => setPackageId(pkg.id)}
          className={`btn flex-1 rounded-xl py-2.5 text-[12px] ${
            selected || pkg.popular
              ? "bg-moss text-white hover:bg-moss-dark"
              : "bg-white text-ink hover:bg-line"
          }`}
        >
          Pilih di Form
        </a>
        <a
          href={waLink(`Halo Admin Seraye Moments, saya tertarik dengan paket ${pkg.name} (${rupiah(pkg.price)}).`)}
          target="_blank"
          rel="noreferrer"
          aria-label={`Tanya paket ${pkg.name} via WhatsApp`}
          className="btn gap-1 rounded-xl bg-wa px-3 py-2.5 text-[12px] text-forest hover:bg-wa-dark"
        >
          <MessageSquareText aria-hidden className="h-3.5 w-3.5" />
          WA
        </a>
      </div>
    </article>
  );
}

export default function Catalog() {
  const [filter, setFilter] = useState<Filter>("semua");
  const scroller = useRef<HTMLDivElement>(null);

  const visible = packages.filter((p) => filter === "semua" || p.category === filter);
  const count = (id: PackageCategory) => packages.filter((p) => p.category === id).length;

  const scroll = (dir: 1 | -1) =>
    scroller.current?.scrollBy({ left: dir * 404, behavior: "smooth" });

  const chip = (active: boolean) =>
    `inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold transition ${
      active
        ? "border-moss bg-moss text-white"
        : "border-line bg-white text-ink hover:bg-tint"
    }`;

  return (
    <section id="paket" className="container-page pb-16 pt-16 sm:pt-24">
      <span className="inline-flex items-center gap-2 rounded-full bg-mint px-3 py-1.5 text-[11px] font-semibold text-moss-dark">
        <CalendarCheck aria-hidden className="h-3.5 w-3.5" />
        Target Rilis: Akhir Oktober 2026 | DP {rupiah(DP_AMOUNT)} Terverifikasi Admin WhatsApp
      </span>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Official Pricelist 2026</p>
          <h2 className="section-title mt-1 font-bold">Pilihan Paket Wisuda & Event</h2>
          <p className="mt-2 max-w-[560px] text-[13px] leading-5">
            Semua paket dikerjakan on-location outdoor. Jelajahi pilihan
            fotografi, videografi, dan dokumentasi event dalam satu baris geser
            horizontal.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-medium sm:inline-flex">
            <MoveHorizontal aria-hidden className="h-3.5 w-3.5" />
            Geser Horizontal
          </span>
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Paket sebelumnya"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white text-ink hover:bg-tint"
          >
            <ChevronLeft aria-hidden className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Paket berikutnya"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white text-ink hover:bg-tint"
          >
            <ChevronRight aria-hidden className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Kategori paket">
        <button
          type="button"
          role="tab"
          aria-selected={filter === "semua"}
          onClick={() => setFilter("semua")}
          className={chip(filter === "semua")}
        >
          <Icon name="sparkles" className="h-3 w-3" />
          Semua Paket
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={filter === c.id}
            onClick={() => setFilter(c.id)}
            className={chip(filter === c.id)}
          >
            <Icon name={c.icon} className="h-3 w-3" />
            {c.label}
            {count(c.id) > 0 && ` (${count(c.id)} Paket)`}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-x-8 gap-y-3 rounded-xl border border-line bg-mint/40 p-5 text-[12px] sm:grid-cols-2">
        {catalogPerks.map((p) => (
          <p key={p.lead} className="flex items-center gap-2">
            <Icon name={p.icon} className="h-3.5 w-3.5 shrink-0 text-moss" />
            <span>
              <strong className="font-bold text-ink">{p.lead}</strong> {p.text}
            </span>
          </p>
        ))}
      </div>

      {visible.length > 0 ? (
        <div
          ref={scroller}
          className="-mx-4 mt-6 flex snap-x gap-6 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0"
        >
          {visible.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      ) : (
        <p className="mt-6 rounded-2xl border border-dashed border-line bg-white p-8 text-center text-[13px]">
          Detail paket kategori ini belum tersedia. Tanyakan langsung ke admin
          lewat{" "}
          <a href={waLink()} target="_blank" rel="noreferrer" className="font-bold text-moss underline">
            WhatsApp
          </a>
          .
        </p>
      )}
    </section>
  );
}
