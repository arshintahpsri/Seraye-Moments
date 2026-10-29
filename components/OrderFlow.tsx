import { CircleCheck, MessageSquareText } from "lucide-react";
import { orderSteps, waLink } from "@/lib/data";
import { Icon } from "./icons";
import Rich from "./Rich";

export default function OrderFlow() {
  return (
    <section id="alur" className="container-page py-6">
      <div className="rounded-3xl bg-forest p-6 sm:p-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-mint">
          How to Order
        </p>
        <h2 className="mt-1 font-serif text-[28px] font-bold leading-tight text-white sm:text-[32px]">
          Alur Pemesanan Mudah & Cepat
        </h2>
        <p className="mt-2 text-[14px] text-white/85">
          Hanya 5 langkah transparan dari pemilihan paket hingga file digital
          master mendarat di Google Drive Anda.
        </p>

        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {orderSteps.map((s) => (
            <li
              key={s.no}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/10 p-5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-[13px] font-bold text-forest">
                {s.no}
              </span>
              <h3 className="mt-4 font-serif text-[16px] font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-[12px] leading-[18px] text-white/85">
                <Rich parts={s.text} strongClass="text-white" />
              </p>
              <p className="mt-auto flex items-center gap-1.5 border-t border-white/15 pt-3 text-[11px] text-white/85">
                <Icon name={s.icon} className="h-3.5 w-3.5" />
                {s.foot}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3 text-[14px] text-white">
            <CircleCheck aria-hidden className="h-5 w-5 shrink-0 text-mint" />
            Privasi terjamin, tanpa proses login kata sandi rumit. Dapatkan kode
            pesanan otomatis.
          </p>
          <a
            href={waLink("Halo Admin Seraye Moments, saya ingin booking sesi wisuda.")}
            target="_blank"
            rel="noreferrer"
            className="btn-wa shrink-0 px-6 py-3.5 text-[14px]"
          >
            <MessageSquareText aria-hidden className="h-4 w-4" />
            Chat Admin WhatsApp untuk Booking
          </a>
        </div>
      </div>
    </section>
  );
}
