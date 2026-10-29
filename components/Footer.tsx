import { Camera, MessageSquareText, Video } from "lucide-react";
import { footerColumns } from "@/lib/data";

const socials = [
  { label: "WhatsApp", icon: MessageSquareText },
  { label: "Foto", icon: Camera },
  { label: "Video", icon: Video },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel pb-12 pt-16">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="text-[26px] font-extrabold uppercase leading-none tracking-tight text-ink">
              Seraye Moments
            </p>
            <p className="mt-4 max-w-[340px] text-[14px] leading-6">
              Dokumentasi wisuda editorial, candid, dan liputan event outdoor
              on-location di kampus ternama. Mengabadikan kilas bahagia
              kelulusan menjadi karya digital beresolusi tinggi. Inisiasi alumni
              S1 TI Telkom University.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, icon: Ic }) => (
                <span
                  key={label}
                  role="img"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink"
                >
                  <Ic aria-hidden className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-ink">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-[13px] leading-5">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Seraye Moments Indonesia. Inisiasi Alumni S1 TI Telkom
            University. All rights reserved.
          </p>
          <p className="font-medium text-ink">
            Bandung · Jakarta · Depok · Jatinangor · Yogyakarta
          </p>
        </div>
      </div>
    </footer>
  );
}
