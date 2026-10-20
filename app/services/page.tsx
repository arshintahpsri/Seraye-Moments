import {
  ArrowDown,
  CalendarPlus,
  Cloud,
  CircleCheck,
  Clapperboard,
  Clock,
  Contact,
  GraduationCap,
  LayoutList,
  MessageSquareText,
  Palette,
  Plus,
  Sparkles,
  UsersRound,
  Wand2,
  Zap,
  Star,
  Check,
} from "lucide-react";
import Link from "next/link";
import Photo from "@/components/Photo";

type Tier = {
  level: string;
  levelClass: string;
  name: string;
  desc: string;
  price: string;
  unit: string;
  note?: string;
  features: { bold: string; rest: string }[];
  disabled?: string[];
  cta: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    level: "Tingkat 01 · Solo & Pasangan",
    levelClass: "text-ink",
    name: "Graduation Intimate",
    desc: "Fokus eksklusif pada wisudawan personal beserta keluarga inti dalam suasana santai tanpa terburu-buru.",
    price: "IDR 450k",
    unit: "/ sesi",
    features: [
      { bold: "90 Menit", rest: "durasi pemotretan leluasa" },
      { bold: "1 Fotografer Utama", rest: "bersertifikat Seraye" },
      { bold: "20 Foto High-Res", rest: "color-graded & retouch halus" },
      { bold: "", rest: "Seluruh File Asli (RAW/JPEG) di Cloud Drive" },
      { bold: "", rest: "Private Online Web Gallery (Aktif 30 hari)" },
    ],
    disabled: ["Cinematic Video Reels", "Cetak Mini Photobook Hardcover"],
    cta: "Pilih Paket Intimate",
  },
  {
    level: "Tingkat 02 · Geng & Sahabat Seperjuangan",
    levelClass: "text-ink",
    name: "Graduation Group & Story",
    desc: "Kombinasi komprehensif foto rombongan, candid ekspresif, plus video cinematic yang siap dibagikan ke media sosial.",
    price: "IDR 750k",
    unit: "/ sesi grup (maks 6 org)",
    note: "Hanya ~IDR 125.000 / orang untuk grup 6 orang",
    features: [
      { bold: "120 Menit", rest: "durasi (Outdoor & ikon fakultas)" },
      { bold: "2 Fotografer", rest: "(Lead + Candid Spotter)" },
      { bold: "40 Foto High-Res", rest: "full signature color graded" },
      { bold: "", rest: "Seluruh File Asli (RAW/JPEG) di Cloud Vault Seraye" },
      { bold: "Cinematic 60s Reel Video", rest: "(Audio lisensi resmi)" },
      { bold: "Printed Mini Photobook", rest: "14x14 cm hardcover eksklusif" },
      { bold: "", rest: "Private Web Gallery (Aktif 60 hari)" },
    ],
    cta: "Pilih Paket Group & Story",
    featured: true,
  },
  {
    level: "Tingkat 03 · Full Archival Keepsake",
    levelClass: "text-rose",
    name: "Full Milestone Celebration",
    desc: "Paket komplit tanpa batasan. Dari sesi studio privat hingga jalan santai di sudut kota Yogyakarta berkesan.",
    price: "IDR 1.250k",
    unit: "/ hari",
    features: [
      { bold: "180 Menit", rest: "(Fleksibel Studio + Kampus/Outdoor)" },
      { bold: "Semua Foto Terpilih Diedit", rest: "(Tanpa batas kuota edit)" },
      { bold: "Boutique Hardcover Photo Album", rest: "20x20 cm (Linen Cover)" },
      { bold: "Teaser Video 4K + Reels", rest: "dengan wawancara singkat" },
      { bold: "", rest: "Konsultasi Moodboard & Wardrobe Stylist Seraye" },
      { bold: "", rest: "Prioritas Kurasi Kilat (Rilis 4 Hari Kerja)" },
      { bold: "", rest: "Private Web Gallery Premium (Aktif 1 Tahun)" },
    ],
    cta: "Pilih Paket Milestone",
  },
];

const steps = [
  {
    title: "Inquiry & Lock Jadwal",
    body: "Pilih tanggal, diskusikan lokasi fakultas atau outdoor, dan amankan slot dengan DP ringan 30%.",
    style: "bg-moss-dark text-white",
  },
  {
    title: "Moodboard & Brief",
    body: "Kami membagikan panduan pose natural, panduan outfit, dan rute pemotretan optimal sesuai arah cahaya matahari.",
    style: "bg-stone text-ink",
  },
  {
    title: "The Shoot Day",
    body: "Sesi santai bersama fotografer Seraye. Kami memandu pose luwes tanpa rasa kaku atau canggung di depan kamera.",
    style: "bg-stone text-ink",
  },
  {
    title: "Archival Proof & Vault",
    body: "Seluruh file color-graded dikirim ke Cloud Web Gallery dalam 7 hari kerja, siap diunduh dan dipamerkan.",
    style: "bg-mint text-moss-dark",
  },
];

const metrics = [
  { value: 98, label: "On-Time Delivery", desc: "Galeri rilis dalam batas 7 hari", color: "#3F5530" },
  { value: 96, label: "Direct Recommendation", desc: "Direkomendasikan ke adik tingkat", color: "#7B4A4A" },
  { value: 100, label: "High-Res Vault", desc: "Penyimpanan cloud aman bergaransi", color: "#3F5530" },
];

function Ring({ value, color }: { value: number; color: string }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className="relative mx-auto h-[84px] w-[84px]">
      <svg viewBox="0 0 84 84" className="-rotate-90">
        <circle cx="42" cy="42" r={radius} fill="none" stroke="#E3E0D9" strokeWidth="7" />
        <circle
          cx="42"
          cy="42"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - value / 100)}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[17px] font-semibold">
        {value}%
      </span>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-page pb-16 pt-14">
        <span className="badge bg-rose-soft text-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-rose" />
          Atelier Katalog Seraye · 2025 Release
        </span>
        <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[760px]">
            <h1 className="text-5xl font-bold leading-[1.1] md:text-[64px]">
              Pilihan Dokumentasi
              <span className="block font-normal italic text-moss-dark">Terbaik &amp; Terkurasi.</span>
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed">
              Sentuhan hangat, kurasi estetik, dan kenangan tak lekang waktu
              untuk setiap tonggak perjalanan hidupmu di Yogyakarta &amp;
              sekitarnya. Kami memadukan estetika editorial cetak dengan
              kehangatan rasa.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-3 rounded-lg bg-sand p-4 pr-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint">
                <Star size={16} className="fill-ink" />
              </span>
              <div>
                <p className="text-[18px] font-semibold leading-tight">4.9 / 5.0</p>
                <p className="font-label text-[9px] font-semibold uppercase tracking-wide text-muted">
                  420+ Wisudawan Puas
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-sand p-4 pr-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-soft">
                <Zap size={16} />
              </span>
              <div>
                <p className="text-[18px] font-semibold leading-tight">7 Hari Kerja</p>
                <p className="font-label text-[9px] font-semibold uppercase tracking-wide text-muted">
                  Jaminan Kurasi Rilis
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-label text-[10px] font-semibold uppercase tracking-wide text-muted">
              Layanan Utama:
            </span>
            <a href="#layanan" className="btn-primary !gap-2 !px-3 !py-2 !text-[11px]">
              <GraduationCap size={14} /> Wisuda &amp; Personal
            </a>
            <a href="#layanan" className="btn-soft !px-3 !py-2 !text-[11px]">
              <UsersRound size={14} /> Event &amp; Komunitas
            </a>
            <a href="#paket" className="btn-soft !px-3 !py-2 !text-[11px]">
              <LayoutList size={14} /> Daftar Investasi
            </a>
          </div>
          <p className="flex items-center gap-2 text-[13px] font-medium">
            <CircleCheck size={15} className="text-moss-dark" />
            Harga Transparan · Tanpa Biaya Tersembunyi
          </p>
        </div>
      </section>

      {/* Dua pilar kreasi */}
      <section id="layanan" className="container-page pb-24 pt-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">01 · Ruang Lingkup Layanan</p>
            <h2 className="mt-3 text-4xl font-bold md:text-[42px]">Dua Pilar Kreasi Seraye</h2>
          </div>
          <p className="max-w-[390px] text-[14px] leading-relaxed text-muted md:text-right">
            Setiap sesi dirancang dengan mood visual editorial, pencahayaan
            natural terencana, serta alur pengerjaan yang transparan.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[
            {
              key: "serviceWisuda" as const,
              no: "Layanan 01",
              kicker: "Ritual Kelulusan & Milestone Pribadi",
              title: "Wisuda & Selebrasi Personal",
              tags: [
                { t: "Photography", c: "bg-rose-soft text-rose" },
                { t: "Personal & Group", c: "bg-stone" },
                { t: "High-Res Edited", c: "bg-stone" },
                { t: "Cloud Vault Delivery", c: "bg-stone" },
              ],
              body: "Merayakan kelulusan bukan sekadar foto kaku di depan gedung fakultas. Seraye Moments mendokumentasikan rasa bangga, pelukan hangat keluarga, dan tawa sahabat melalui pendekatan storytelling bernuansa editorial majalah.",
              perks: [
                { icon: Palette, text: "Palet Warna Editorial Signature Seraye" },
                { icon: Cloud, text: "Online Vault Aktif Hingga 6 Bulan" },
              ],
              priceLabel: "Mulai dari",
              price: "IDR 450.000",
              priceUnit: "/ sesi",
              priceClass: "text-moss-dark",
              cta: (
                <a href="#paket" className="btn-primary">
                  Lihat Paket Wisuda <ArrowDown size={15} />
                </a>
              ),
            },
            {
              key: "serviceEvent" as const,
              no: "Layanan 02",
              kicker: "Momen Kolektif & Aktivasi Komunitas",
              title: "Dokumentasi Event & Komunitas",
              tags: [
                { t: "Event Photography", c: "bg-rose-soft text-rose" },
                { t: "Videography Reel", c: "bg-stone" },
                { t: "Project-Based", c: "bg-stone" },
                { t: "Appointment Booking", c: "bg-stone" },
              ],
              body: "Liputan dinamis untuk konser kampus, pameran seni rupa indie, gathering alumni, hingga syukuran peresmian. Kru Seraye berbaur cair merekam denyut energi autentik audiens tanpa terasa canggung.",
              perks: [
                { icon: Clapperboard, text: "Cepat Rilis: Sameday / 24-Jam Highlight Reel" },
                { icon: Contact, text: "Kru Multi-Kamera Siaga Seragam Rapi" },
              ],
              priceLabel: "Skala fleksibel",
              price: "Custom Invoicing",
              priceUnit: "/ brief",
              priceClass: "text-rose",
              cta: (
                <Link href="/booking" className="btn-soft">
                  Request Appointment <CalendarPlus size={15} />
                </Link>
              ),
            },
          ].map((service) => (
            <article key={service.title} className="card overflow-hidden">
              <div className="relative">
                <Photo name={service.key} alt={service.title} className="h-[380px] w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="badge absolute left-5 top-5 bg-cream/95 text-ink">{service.no}</span>
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <p className="font-label text-[10px] font-medium uppercase tracking-wide opacity-90">
                    {service.kicker}
                  </p>
                  <h3 className="mt-1 text-[28px] font-bold">{service.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag.t} className={`badge rounded ${tag.c}`}>
                      {tag.t}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-[14px] leading-relaxed">{service.body}</p>
                <div className="mt-5 grid grid-cols-2 gap-4 rounded-lg bg-sand p-4 text-[12px]">
                  {service.perks.map((perk) => {
                    const Icon = perk.icon;
                    return (
                      <p key={perk.text} className="flex items-center gap-3">
                        <Icon size={18} className="shrink-0 text-moss-dark" />
                        {perk.text}
                      </p>
                    );
                  })}
                </div>
                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-wide text-muted">
                      {service.priceLabel}
                    </p>
                    <p className={`text-[20px] font-semibold ${service.priceClass}`}>
                      {service.price}{" "}
                      <span className="text-[12px] font-normal text-muted">{service.priceUnit}</span>
                    </p>
                  </div>
                  {service.cta}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Paket */}
      <section id="paket" className="bg-sand py-24">
        <div className="container-page">
          <div className="text-center">
            <span className="badge rounded bg-mint text-ink">Paket Wisuda Terkurasi</span>
            <h2 className="mx-auto mt-5 max-w-[760px] text-4xl font-medium leading-tight md:text-[46px]">
              Quality Over Quantity — Dirancang Untuk Bercerita
            </h2>
            <p className="mx-auto mt-4 max-w-[740px] text-[14px] text-muted">
              Pilih paket yang paling selaras dengan ritme perayaanmu. Setiap
              frame diproses dengan grading warna hangat khas Seraye, bebas dari
              warna pucat atau editan berlebihan.
            </p>
          </div>

          <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`relative flex flex-col bg-white p-8 ${
                  tier.featured
                    ? "rounded-xl border-2 border-moss-dark pt-10 shadow-lift"
                    : "rounded-xl shadow-card"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-md bg-moss-dark px-4 py-1.5 font-label text-[10px] font-bold uppercase leading-tight tracking-wide text-white">
                    <Sparkles size={13} /> Rekomendasi Utama · Paling Favorit
                  </span>
                )}
                <p className={`font-label text-[10px] font-semibold uppercase tracking-wide ${tier.levelClass}`}>
                  {tier.level}
                </p>
                <h3 className="mt-2 text-[24px] font-bold">{tier.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{tier.desc}</p>

                <div
                  className={`mt-6 py-5 ${
                    tier.featured ? "-mx-8 bg-sand px-8" : "border-y border-line/70"
                  }`}
                >
                  <p className="font-label text-[10px] font-medium uppercase tracking-wide text-muted">
                    Investasi mulai
                  </p>
                  <p
                    className={`font-serif text-[40px] font-bold leading-tight ${
                      tier.featured ? "text-moss-dark" : ""
                    }`}
                  >
                    {tier.price}
                    <span className="ml-1 font-sans text-[12px] font-normal text-muted">{tier.unit}</span>
                  </p>
                  {tier.note && <p className="text-[11px] text-muted">{tier.note}</p>}
                </div>

                <ul className="mt-6 space-y-3 text-[13px]">
                  {tier.features.map((feature) => (
                    <li key={feature.rest} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-moss-dark text-white">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <span>
                        {feature.bold && <strong>{feature.bold} </strong>}
                        {feature.rest}
                      </span>
                    </li>
                  ))}
                  {tier.disabled?.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted/70 line-through">
                      <span className="mt-0.5 w-4 shrink-0 text-center no-underline">—</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className={`mt-8 ${tier.featured ? "btn-primary" : "btn-soft"} w-full`}
                >
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-lg bg-white/60 p-5 text-[13px] md:flex-row md:items-center">
            <p className="flex items-center gap-3">
              <Plus size={18} className="shrink-0 rounded border border-ink p-0.5" />
              <span>
                <strong>Add-On Tambahan Tersedia:</strong> Cetak Kanvas 40x60cm
                (+IDR 180k), Tambahan Waktu (+IDR 150k/jam), Roll Film Analog
                Asli 35mm (+IDR 220k termasuk cuci scan).
              </span>
            </p>
            <span className="shrink-0 font-label text-[11px] font-semibold uppercase tracking-wide text-moss-dark">
              Lihat detail add-on →
            </span>
          </div>
        </div>
      </section>

      {/* Alur layanan */}
      <section className="container-page py-24">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow !text-ink">Alur Layanan</p>
            <h2 className="mt-3 text-4xl font-bold">Bagaimana Hari Istimewamu Diproses</h2>
          </div>
          <p className="max-w-[440px] text-[13px] text-muted">
            Alur kerja yang tenang, terprediksi, dan sepenuhnya transparan agar
            kamu bisa menikmati momen selebrasi tanpa rasa cemas.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="card p-6">
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-lg text-[16px] font-semibold ${step.style}`}
              >
                {index + 1}
              </span>
              <h3 className="mt-6 font-sans text-[18px] font-semibold">{step.title}</h3>
              <p className="mt-2 text-[12px] leading-relaxed text-muted">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Komitmen */}
      <section className="container-page pb-12">
        <div className="card grid gap-10 p-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="font-label text-[11px] font-semibold uppercase tracking-wide">Komitmen Studio</p>
            <h2 className="mt-4 text-[32px] font-bold leading-tight">Mengapa Memilih Seraye Moments?</h2>
            <p className="mt-5 text-[14px] leading-relaxed">
              Kami memandang foto bukan sekadar file digital di memori gawai,
              melainkan warisan emosional yang akan kamu tengok kembali sepuluh
              tahun dari sekarang.
            </p>
            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-mint">
                  <Wand2 size={13} />
                </span>
                <div>
                  <h4 className="font-sans text-[16px] font-semibold">Grading Hangat Organik (Tanpa Filter Berlebihan)</h4>
                  <p className="mt-1 text-[12px] text-muted">
                    Tone kulit natural asli orang Indonesia dengan kontras
                    lembut filmis yang abadi.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-rose-soft">
                  <Clock size={13} />
                </span>
                <div>
                  <h4 className="font-sans text-[16px] font-semibold">Tepat Waktu &amp; Bebas Penundaan</h4>
                  <p className="mt-1 text-[12px] text-muted">
                    Jadwal tim tersistem rapi dengan komitmen rilis galeri
                    maksimal 7 hari kerja.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-sand p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-label text-[10px] uppercase tracking-wide text-muted">
                  Performa Kepuasan Klien 2024–2025
                </p>
                <h3 className="mt-1 font-sans text-[18px] font-semibold">Rasio Pengiriman &amp; Kepuasan</h3>
              </div>
              <span className="badge rounded bg-mint text-ink">Audit Terverifikasi</span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg bg-white p-4 pb-5 text-center">
                  <Ring value={metric.value} color={metric.color} />
                  <p className="mt-4 font-label text-[10px] font-bold uppercase tracking-wide">{metric.label}</p>
                  <p className="mt-1 text-[11px] text-muted">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA rombongan */}
      <section className="container-page pb-24">
        <div className="flex flex-col items-start justify-between gap-8 rounded-xl bg-moss p-12 text-white shadow-card lg:flex-row lg:items-center">
          <div className="max-w-[560px]">
            <span className="badge bg-white/15 text-white">
              <UsersRound size={13} /> Rombongan Fakultas / Angkatan Besar
            </span>
            <h2 className="mt-5 text-[40px] font-medium leading-tight">Ada konsep tematik atau rombongan fakultas?</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-white/90">
              Dapatkan proposal penawaran khusus untuk rombongan lebih dari 10
              wisudawan atau organisasi kemahasiswaan dengan diskon kolektif
              hingga 25% dan opsi fotografer standby seharian penuh.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/6281234567890" className="btn-light !px-6">
              <MessageSquareText size={15} /> Diskusi via WhatsApp
            </a>
            <Link href="/booking" className="btn bg-white/15 !px-6 text-white hover:bg-white/25">
              Kirim Formulir Brief →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
