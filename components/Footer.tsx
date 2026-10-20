import { CalendarDays } from "lucide-react";
import Link from "next/link";

const explorations = [
  "Graduation Gallery",
  "Editorial Portraits",
  "Intimate Nuptials",
  "Archival Films",
];
const studio = [
  { label: "Curated Packages & Investment", href: "/services" },
  { label: "Philosophy & Ethos", href: "/#pilar" },
  { label: "Inquiry & Reserve Date", href: "/booking" },
  { label: "Client Proofing Vault", href: "/client-portal" },
];

export default function Footer() {
  return (
    <footer className="bg-sand">
      <div className="container-page pb-12 pt-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <p className="font-serif text-[22px] font-bold">Seraye Moments</p>
            <p className="mt-3 max-w-[360px] text-[14px] leading-relaxed text-muted">
              Boutique photography &amp; videography studio collective crafting
              tangible, timeless keepsakes for graduations, weddings, and
              personal milestones.
            </p>
            <p className="mt-5 flex items-center gap-2 font-label text-[11px] font-semibold uppercase tracking-wide">
              <span className="h-2 w-2 rounded-full bg-moss" />
              Studio open: Sen — Sab, 09:00 – 18:00 WIB
            </p>
          </div>

          <div>
            <h4 className="font-label text-[12px] font-bold uppercase tracking-wider">
              Explorations
            </h4>
            <ul className="mt-4 space-y-3 text-[13px] text-muted">
              {explorations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-label text-[12px] font-bold uppercase tracking-wider">
              The Studio
            </h4>
            <ul className="mt-4 space-y-3 text-[13px] text-muted">
              {studio.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-moss-dark">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-label text-[12px] font-bold uppercase tracking-wider">
              Studio Atelier
            </h4>
            <p className="mt-4 text-[13px] leading-relaxed text-muted">
              Jl. Kemang Timur No. 42B, Bangka, Mampang Prapatan, Jakarta
              Selatan 12730
            </p>
            <p className="mt-3 text-[13px] text-muted">halo@serayemoments.com</p>
            <Link
              href="/booking"
              className="mt-4 inline-flex items-center gap-2 font-label text-[11px] font-semibold uppercase tracking-wide text-moss-dark"
            >
              <CalendarDays size={14} />
              Schedule a studio visit
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 text-[12px] text-muted md:flex-row md:items-center md:justify-between">
          <p className="font-label font-semibold">
            <em className="font-serif font-bold italic text-moss-dark">
              “Karna Setiap Momen Patut Dirayakan”
            </em>{" "}
            — © 2025 Seraye Moments Studio. All rights reserved.
          </p>
          <div className="flex gap-6 font-label font-semibold">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Archival Rights</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
