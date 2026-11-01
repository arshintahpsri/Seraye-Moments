import { CircleHelp, Send, MessageSquareText } from "lucide-react";
import { faqs, waLink, type Faq as FaqItem } from "@/lib/data";
import Rich from "./Rich";

const tagTone: Record<FaqItem["tone"], string> = {
  leaf: "bg-leaf text-forest",
  rose: "bg-rose-soft text-rose",
  honey: "bg-honey text-forest",
};

export default function Faq() {
  return (
    <section id="faq" className="bg-blush py-14 sm:py-16">
      <div className="container-page">
        <p className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-forest">
          <CircleHelp aria-hidden className="h-3 w-3" />
          FAQ &amp; Panduan Wisudawan
        </p>
        <h2 className="mt-3 font-times text-[28px] font-normal leading-tight sm:text-[32px]">
          Pertanyaan yang Sering Diajukan
        </h2>

        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map((f, i) => (
            <li
              key={f.question}
              className="rounded-2xl border border-forest/40 bg-white p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.04em] ${tagTone[f.tone]}`}
                >
                  {f.tag}
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage font-times text-[11px] font-bold text-forest">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-3 font-times text-[17px] font-normal leading-snug">
                {f.question}
              </h3>
              <p className="mt-2 text-[12px] leading-[18px]">
                <Rich parts={f.answer} />
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-5 flex flex-col gap-4 rounded-2xl bg-forest p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
              <MessageSquareText aria-hidden className="h-5 w-5" />
            </span>
            <div>
              <p className="font-times text-[17px] text-white">
                Masih punya pertanyaan lain seputar wisudamu?
              </p>
              <p className="mt-0.5 text-[12px] text-white/80">
                Tanya langsung ketersediaan slot, moodboard visual, atau custom
                request via WhatsApp.
              </p>
            </div>
          </div>
          <a
            href={waLink("Halo Admin Seraye Moments, saya ingin konsultasi seputar sesi wisuda.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-forest transition hover:bg-sage"
          >
            <Send aria-hidden className="h-3.5 w-3.5" />
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
