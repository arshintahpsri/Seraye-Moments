import { visualStyles, waLink } from "@/lib/data";
import { Icon } from "./icons";
import Photo from "./Photo";

export default function StyleShowcase() {
  return (
    <section id="gaya-visual" className="container-page py-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Signature Visual Mood</p>
          <h2 className="section-title mt-1">Gaya Visual & Portofolio</h2>
          <p className="mt-2 text-[14px]">
            Pilih karakter visual yang paling merepresentasikan kepribadian dan
            momen bahagia Anda.
          </p>
        </div>
        <a
          href={waLink("Halo Admin Seraye Moments, saya ingin konsultasi moodboard.")}
          target="_blank"
          rel="noreferrer"
          className="text-[14px] font-semibold text-moss hover:text-moss-dark"
        >
          Konsultasi Moodboard via WhatsApp →
        </a>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {visualStyles.map((s) => (
          <article key={s.title} className="overflow-hidden rounded-3xl bg-white shadow-card">
            <div className="relative">
              <Photo
                name={s.image}
                alt={`Contoh gaya ${s.title}`}
                className="h-[240px] w-full"
              />
              <span
                className={`pill absolute left-3 top-3 ${
                  s.badgeTone === "dark" ? "bg-forest text-mint" : "bg-white text-ink"
                }`}
              >
                {s.badge}
              </span>
            </div>
            <div className="p-5">
              <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-moss">
                <Icon name={s.icon} className="h-3.5 w-3.5" />
                {s.kicker}
              </p>
              <h3 className="mt-2 font-serif text-[20px] font-bold leading-7">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-5">{s.text}</p>
              <div className="mt-6 flex items-start justify-between gap-3 border-t border-line pt-4 text-[12px]">
                <span>{s.suited}</span>
                <span className="shrink-0 text-right font-bold text-moss">{s.mood}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
