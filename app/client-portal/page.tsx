import {
  BadgeCheck,
  Camera,
  Check,
  Clock,
  Download,
  GraduationCap,
  Headset,
  Contact,
  Images,
  Info,
  Lock,
  MessageSquareText,
  Palette,
  Scan,
  ShieldCheck,
  Sun,
  Wand2,
  Circle,
  CircleDot,
  Cloud,
} from "lucide-react";
import Photo from "@/components/Photo";

type Milestone = {
  title: string;
  desc: string;
  meta: string;
  state: "done" | "active" | "pending";
};

const milestones: Milestone[] = [
  { title: "Booking Confirmed", desc: "Pemesanan awal tanggal telah dicatat dalam agenda studio.", meta: "08 Apr 2026", state: "done" },
  { title: "DP Paid (Terverifikasi)", desc: "Pembayaran 50% diterima. Slot fotografer terkunci.", meta: "10 Apr 2026", state: "done" },
  { title: "Schedule Confirmed", desc: "24 April 2026, 11:00 WIB • Balairung UI (Pertemuan titik A).", meta: "12 Apr 2026", state: "done" },
  { title: "Photography Session", desc: "Sesi lapangan berlangsung dalam 4 hari. Tim siap berkoordinasi langsung.", meta: "In Progress", state: "active" },
  { title: "Editing & Color Grading", desc: "Penyortiran 40 karya terbaik dan sentuhan warna khas Seraye.", meta: "Est. 3-5 Hari", state: "pending" },
  { title: "Photos Ready via Cloud Drive", desc: "Tautan pribadi dengan proteksi enkripsi untuk download tanpa batas.", meta: "Google Drive Vault", state: "pending" },
  { title: "Completed Milestone", desc: "Arsip kenangan tersimpan rapi selamanya.", meta: "", state: "pending" },
];

export default function ClientPortalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-soft/40 via-sand to-mint/30">
        <div className="container-page flex flex-col justify-between gap-8 pb-16 pt-12 lg:flex-row lg:items-end">
          <div>
            <span className="badge rounded-full bg-cream/80 text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-moss-dark" />
              Portal Klien Eksklusif
              <span className="mx-1 text-muted">·</span>
              <span className="normal-case tracking-normal">Musim Wisuda 2026</span>
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-[60px]">
              Your Moment,{" "}
              <span className="font-normal italic text-moss-dark">All in One Place.</span>
            </h1>
            <p className="mt-4 max-w-[600px] text-[16px] leading-relaxed">
              Halo, Nadia. Pantau persiapan dokumentasi wisudamu dan kelola
              rincian administrasi studio secara langsung.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <div className="flex items-center gap-3 rounded-lg bg-white/90 p-3 pr-5 shadow-card">
              <Contact size={22} className="text-moss-dark" />
              <div>
                <p className="font-label text-[9px] uppercase tracking-wide text-muted">ID Sesi Aktif</p>
                <p className="text-[18px] font-bold">SM-2026-0424-08</p>
              </div>
            </div>
            <p className="flex items-center gap-2 rounded-full bg-stone px-4 py-2 font-label text-[11px] font-semibold">
              <GraduationCap size={14} /> Nadia Larasati · UI Balairung Series
            </p>
          </div>
        </div>
      </section>

      <section className="container-page grid items-start gap-8 pb-24 pt-14 lg:grid-cols-[1.45fr_1fr]">
        {/* Invoice */}
        <article className="card p-10">
          <header className="flex items-start justify-between">
            <div>
              <p className="font-serif text-[26px] font-bold">Seraye Moments ✦</p>
              <p className="mt-1 font-label text-[10px] uppercase tracking-wide text-muted">
                Studio Fotografi &amp; Videografi
              </p>
            </div>
            <span className="badge rounded-md bg-mint px-3 py-2 text-moss-dark">
              <BadgeCheck size={14} /> Receipt / Digital Invoice
            </span>
          </header>

          <dl className="mt-6 grid grid-cols-2 gap-4 rounded-lg bg-sand p-5 text-[13px] sm:grid-cols-4">
            {[
              ["No. Tagihan", "INV/SM/2026/04/082"],
              ["Tanggal Terbit", "10 April 2026"],
              ["Klien", "Nadia Larasati"],
              ["Institusi", "Universitas Indonesia"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-label text-[9px] uppercase tracking-wide text-muted">{label}</dt>
                <dd className="mt-1 font-semibold">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="relative mt-6 overflow-hidden rounded-lg">
            <Photo name="invoiceLocation" alt="Balairung UI, Depok" className="h-44 w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-3 left-4 text-white">
              <p className="font-label text-[9px] uppercase tracking-wide opacity-90">Pratinjau lokasi &amp; suasana</p>
              <p className="text-[16px] font-semibold">Balairung UI, Depok • Sesi Lapangan</p>
            </div>
            <span className="absolute bottom-3 right-4 rounded bg-white/20 px-2 py-1 font-label text-[9px] font-semibold uppercase text-white backdrop-blur">
              Archival Preview
            </span>
          </div>

          <div className="mt-6 flex items-center justify-between font-label text-[11px] font-bold uppercase tracking-wide">
            <span>Rincian layanan terpilih</span>
            <span>Biaya</span>
          </div>

          <div className="mt-3 rounded-lg bg-sand p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[19px] font-bold">Paket Graduation Group &amp; Story</h3>
                <p className="text-[12px] text-muted">Dokumentasi seremonial personal &amp; rekan wisudawan terdekat</p>
              </div>
              <p className="shrink-0 text-[17px] font-semibold text-moss-dark">Rp 750.000</p>
            </div>
            <ul className="mt-4 grid gap-x-6 gap-y-3 text-[12px] sm:grid-cols-2">
              {[
                { icon: Clock, text: "2 Jam Durasi Dokumentasi Lapangan" },
                { icon: Camera, text: "2 Fotografer Profesional Seraye Moments" },
                { icon: Wand2, text: "40 Foto Terkurasi & Full Retouched Tone" },
                { icon: Cloud, text: "Semua File RAW & High-Res via Cloud Drive" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon size={14} className="mt-0.5 shrink-0 text-moss-dark" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="my-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-line" />
            <span className="font-label text-[10px] uppercase tracking-wide text-muted">Rangkuman finansial</span>
            <span className="h-px flex-1 bg-line" />
          </div>

          <div className="space-y-2 rounded-lg bg-sand p-5 text-[13px]">
            <p className="flex justify-between"><span>Subtotal Layanan</span><span className="font-semibold">Rp 750.000</span></p>
            <p className="flex justify-between text-moss-dark">
              <span className="flex items-center gap-2"><Check size={14} /> Down Payment (50% Terverifikasi)</span>
              <span className="font-semibold">- Rp 375.000</span>
            </p>
            <div className="!mt-4 flex items-end justify-between border-t border-line pt-4">
              <div>
                <p className="text-[17px] font-bold">Sisa Pelunasan</p>
                <p className="text-[11px] text-muted">Dibayarkan saat Sesi Hari H (24 Apr 2026)</p>
              </div>
              <p className="font-serif text-[24px] font-bold text-rose">Rp 375.000</p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between rounded-lg bg-mint/50 p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-moss-dark text-white">
                <Lock size={15} />
              </span>
              <div>
                <p className="font-label text-[10px] font-bold uppercase">Status pembayaran</p>
                <p className="text-[12px]">DP PAID · VERIFIED VIA BANK TRANSFER</p>
              </div>
            </div>
            <ShieldCheck size={20} className="text-moss-dark" />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button type="button" className="btn-primary !py-3.5">
              <Download size={15} /> Download Invoice PDF
            </button>
            <button type="button" className="btn-soft !py-3.5">
              <Images size={15} /> Lihat Vault Foto
            </button>
          </div>

          <footer className="mt-8 text-center text-[11px] text-muted">
            <p className="font-label uppercase tracking-wide">
              PT Seraye Karya Abadi · Jakarta Selatan · Digital Archival Ledger #82
            </p>
            <p className="mt-1">Dokumen elektronik sah terdaftar dalam sistem reservasi Seraye Moments.</p>
          </footer>
        </article>

        {/* Kolom kanan */}
        <div className="space-y-6">
          <section className="card p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-label text-[10px] uppercase tracking-wide text-muted">Progres dokumentasi</p>
                <h2 className="text-[24px] font-bold">Milestone Tracker</h2>
              </div>
              <span className="badge rounded-full bg-mint !normal-case !tracking-normal text-moss-dark">
                Langkah 4 dari 7
              </span>
            </div>

            <ol className="mt-6 space-y-5">
              {milestones.map((item) => (
                <li key={item.title} className="relative flex gap-3">
                  <span className="mt-1 shrink-0">
                    {item.state === "done" ? (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-moss-dark text-white">
                        <Check size={11} strokeWidth={3} />
                      </span>
                    ) : item.state === "active" ? (
                      <CircleDot size={20} className="rounded-full bg-moss-dark text-white" />
                    ) : (
                      <Circle size={10} className="m-[5px] fill-line text-line" />
                    )}
                  </span>
                  <div
                    className={`flex-1 ${
                      item.state === "active" ? "-mt-1 rounded-lg bg-rose-soft/50 p-3" : ""
                    } ${item.state === "pending" ? "text-ink/55" : ""}`}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className={`font-sans text-[16px] font-semibold ${item.state === "active" ? "text-rose" : ""}`}>
                        {item.title}
                      </h3>
                      {item.state === "active" ? (
                        <span className="rounded bg-rose-soft px-2 py-0.5 font-label text-[9px] font-bold uppercase text-rose">
                          In Progress
                        </span>
                      ) : (
                        <span className="shrink-0 text-[10px] text-muted">{item.meta}</span>
                      )}
                    </div>
                    <p className="mt-0.5 text-[12px] leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl bg-sand p-8">
            <div className="flex items-start justify-between">
              <h2 className="text-[22px] font-bold">Studio Archival Memo</h2>
              <span className="font-label text-[9px] font-semibold uppercase tracking-wide">Catatan tim</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md bg-cream p-3 text-[12px] leading-relaxed">
                <p className="mb-2 flex items-center gap-2 font-label text-[10px] font-bold uppercase text-muted">
                  <Scan size={13} /> Lensa &amp; Gear
                </p>
                Dual Prime Lens (35mm f/1.4 &amp; 85mm f/1.8) disiapkan untuk
                tangkapan visual detail toga &amp; potret natural.
              </div>
              <div className="rounded-md bg-cream p-3 text-[12px] leading-relaxed">
                <p className="mb-2 flex items-center gap-2 font-label text-[10px] font-bold uppercase text-honey-dark">
                  <Sun size={13} /> Pencahayaan
                </p>
                Rekomendasi area bayang pepohonan Balairung pukul 11:00 WIB,
                dilanjutkan sesi golden hour bila waktu mencukupi.
              </div>
            </div>
            <p className="mt-3 flex items-start gap-2 rounded-md bg-stone p-3 text-[12px]">
              <Info size={14} className="mt-0.5 shrink-0" />
              Harap hadir di titik kumpul Balairung 15 menit sebelum waktu
              pemotretan untuk persiapan toga dan aksesoris.
            </p>
          </section>

          <section className="card flex items-center justify-between gap-4 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-moss-dark text-white">
                <Headset size={20} />
              </span>
              <div>
                <p className="text-[15px] font-semibold">Concierge Studio Seraye</p>
                <p className="text-[12px] text-muted">Perlu penyesuaian jam atau info tambahan lokasi?</p>
              </div>
            </div>
            <a href="https://wa.me/6281234567890" className="btn-primary shrink-0 !px-4 !py-2.5 !text-[11px]">
              <MessageSquareText size={14} /> Chat WhatsApp
            </a>
          </section>
        </div>
      </section>
    </>
  );
}
