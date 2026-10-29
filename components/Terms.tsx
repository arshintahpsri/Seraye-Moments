import { Info } from "lucide-react";
import { terms } from "@/lib/data";
import { Icon } from "./icons";
import Rich from "./Rich";

const footTone = {
  rose: "text-rose",
  moss: "text-moss-dark",
  ink: "text-ink",
} as const;

export default function Terms() {
  return (
    <section id="syarat" className="container-page py-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Legal & Agreement</p>
          <h2 className="section-title mt-1">Syarat & Ketentuan Lengkap</h2>
          <p className="mt-2 text-[14px]">
            Transparansi adalah komitmen kami agar momen wisuda Anda berjalan
            lancar tanpa kendala.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-line bg-white px-3 py-1.5 text-[12px] font-medium text-ink sm:self-auto">
          <Info aria-hidden className="h-3.5 w-3.5" />
          Berlaku untuk semua klien Seraye Moments
        </span>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {terms.map((t) => (
          <article key={t.title} className="flex flex-col rounded-3xl bg-white p-8 shadow-card">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tint text-moss">
              <Icon name={t.icon} className="h-4 w-4" />
            </span>
            <h3 className="mt-5 font-serif text-[18px] font-bold">{t.title}</h3>
            <div className="mb-6 mt-2 space-y-1 text-[13px] leading-5">
              {t.body.map((para, i) => (
                <p key={i}>
                  <Rich parts={para} />
                </p>
              ))}
            </div>
            <p
              className={`mt-auto border-t border-line pt-4 text-[11px] font-bold ${footTone[t.footTone]}`}
            >
              {t.foot}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
