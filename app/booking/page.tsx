"use client";

import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  CalendarDays,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cloud,
  Contact,
  GraduationCap,
  Info,
  Mail,
  MapPin,
  MessageSquareText,
  Moon,
  ShieldCheck,
  Sparkles,
  Timer,
  Palette,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Photo from "@/components/Photo";

type Slot = {
  time: string;
  title: string;
  desc: string;
  status: "tersedia" | "terisi" | "tidak-ada" | "terbatas";
  summary?: string;
};

const slots: Slot[] = [
  { time: "09:00", title: "Sesi Pagi", desc: "Cahaya Alami Lembut • Area Taman UI", status: "tersedia", summary: "09:00 WIB (Sesi Pagi)" },
  { time: "10:00", title: "Sesi Menjelang Siang", desc: "Telah Dipesan oleh Klien Lain", status: "terisi" },
  { time: "11:00", title: "Sesi Emas Pasca-Sidang", desc: "Sesi Emas Pasca-Sidang • Depan Balairung", status: "tersedia", summary: "11:00 WIB (Sesi Siang Pasca-Sidang)" },
  { time: "13:00", title: "Jeda Kru & Gear", desc: "Istirahat Kru & Sterilisasi Lensa", status: "tidak-ada" },
  { time: "15:00", title: "Sesi Sore (Golden Hour Balairung)", desc: "Cahaya Senja Dramatis • Danau Kenanga & Selasar Kolom", status: "terbatas", summary: "15:00 WIB (Golden Hour Balairung)" },
];

const steps = [
  { label: "01 Layanan", sub: "Graduation Series", done: true },
  { label: "02 Paket", sub: "Balairung UI Exclusive", done: true },
  { label: "03 Jadwal", sub: "24 Apr • 11:00 WIB", current: true },
  { label: "04 Data Pemesan", sub: "Detail & Wisudawan" },
  { label: "05 Pembayaran", sub: "Konfirmasi DP 50%" },
];

// April 2026 dimulai hari Rabu; kolom pertama = Minggu.
const monthStartOffset = 3;
const daysInMonth = 30;
const unavailable = new Set([23, 25]);
const weekdayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

function buildCells() {
  const cells: { day: number; muted: boolean }[] = [];
  for (let i = monthStartOffset - 1; i >= 0; i--) cells.push({ day: 31 - i, muted: true });
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, muted: false });
  let next = 1;
  while (cells.length % 7 !== 0) cells.push({ day: next++, muted: true });
  return cells;
}

const cells = buildCells();

export default function BookingPage() {
  const [day, setDay] = useState(24);
  const [slotTime, setSlotTime] = useState("11:00");

  const slot = slots.find((s) => s.time === slotTime)!;
  const weekday = weekdayNames[(monthStartOffset + day - 1) % 7];
  const longDate = `${weekday}, ${day} April 2026`;

  return (
    <div className="container-page pb-24 pt-10">
      {/* Stepper */}
      <ol className="card grid grid-cols-5 gap-2 px-8 pb-5 pt-6">
        {steps.map((step) => (
          <li key={step.label} className="flex items-center gap-3 justify-self-center">
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                step.done
                  ? "bg-moss-dark text-white"
                  : step.current
                    ? "bg-moss-dark text-white ring-4 ring-moss/25"
                    : "bg-stone text-ink"
              }`}
            >
              {step.done ? <Check size={13} /> : step.label.slice(0, 2)}
            </span>
            <span className="leading-tight">
              <span className={`block font-label text-[11px] font-semibold uppercase tracking-wide ${step.current ? "text-ink" : "text-ink/80"}`}>
                {step.label.replace(/^\d+\s/, "")}
              </span>
              <span className={`block text-[12px] ${step.current ? "font-semibold" : "text-muted"}`}>{step.sub}</span>
            </span>
          </li>
        ))}
        <li className="col-span-5 -mx-2 mt-2 h-1 overflow-hidden rounded-full bg-stone" aria-hidden>
          <div className="h-full w-[65%] rounded-full bg-moss-dark" />
        </li>
      </ol>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.55fr_1fr]">
        <div className="space-y-8">
          {/* Paket terpilih */}
          <div className="flex flex-wrap items-center gap-5 rounded-xl bg-sand p-5">
            <Photo name="bookingPackageThumb" alt="Paket Balairung UI" className="h-16 w-16 rounded-md" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <span className="badge rounded bg-rose-soft text-ink">Wisuda UI &amp; Balairung Series</span>
                <span className="flex items-center gap-1 font-sans text-[12px] font-semibold text-honey-dark">
                  <Sparkles size={12} /> Terfavorit
                </span>
              </div>
              <h2 className="mt-2 font-sans text-[20px] font-semibold">Balairung UI Exclusive Graduation</h2>
              <p className="mt-1 flex flex-wrap items-center gap-x-3 text-[12px] text-muted">
                <span className="flex items-center gap-1"><Timer size={13} /> 90 Menit Sesi</span>•
                <span className="flex items-center gap-1"><Palette size={13} /> 35 Edited Files</span>•
                <span className="flex items-center gap-1"><Cloud size={13} /> Semua RAW File</span>
              </p>
            </div>
            <Link href="/services#paket" className="btn rounded bg-white !px-4 !py-2 text-[11px] shadow-card">
              Ubah Paket
            </Link>
          </div>

          {/* Jadwal */}
          <section className="card p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="flex items-center gap-3 text-[24px] font-bold">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-moss-dark font-sans text-[11px] font-semibold text-white">3</span>
                  Pilih Tanggal &amp; Sesi Pemotretan
                </h2>
                <p className="mt-1 max-w-[470px] pl-9 text-[13px] text-muted">
                  Musim Wisuda Periode Gasal — Slot Balairung Depok terbatas
                  demi kualitas pencahayaan prima.
                </p>
              </div>
              <span className="badge rounded-md bg-mint/60 !normal-case !tracking-normal text-moss-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-moss-dark" /> Pembaruan real-time
              </span>
            </div>

            <div className="mt-6 rounded-xl bg-sand p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CalendarDays size={18} />
                  <h3 className="font-sans text-[18px] font-semibold">April 2026</h3>
                  <span className="rounded bg-stone px-2 py-1 text-[11px] text-muted">Periode Wisuda Gasal</span>
                </div>
                <div className="flex gap-2">
                  <button type="button" aria-label="Bulan sebelumnya" className="rounded bg-stone p-1.5"><ChevronLeft size={16} /></button>
                  <button type="button" aria-label="Bulan berikutnya" className="rounded bg-stone p-1.5"><ChevronRight size={16} /></button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-7 gap-y-2 text-center text-[13px]">
                {["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"].map((d) => (
                  <span key={d} className="font-label text-[10px] font-semibold tracking-wide text-muted">{d}</span>
                ))}
                {cells.map((cell, index) => {
                  if (cell.muted) {
                    return <span key={index} className="py-3 text-muted/40">{cell.day}</span>;
                  }
                  const blocked = unavailable.has(cell.day);
                  const selected = cell.day === day;
                  return (
                    <button
                      key={index}
                      type="button"
                      disabled={blocked}
                      onClick={() => setDay(cell.day)}
                      className={`mx-1 rounded-md py-3 transition ${
                        selected
                          ? "bg-moss-dark font-semibold text-white"
                          : blocked
                            ? "cursor-not-allowed bg-rose-soft/70"
                            : "hover:bg-stone"
                      }`}
                    >
                      {cell.day}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[12px] text-muted">
                <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-moss-dark" /> Tanggal Terpilih ({day} Apr)</span>
                <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-rose-soft" /> Jadwal Prosesi UI</span>
                <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-stone" /> Slot Normal</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <h3 className="font-label text-[11px] font-bold uppercase tracking-wide">
                Pilih jam sesi fotografer ({longDate.toUpperCase()})
              </h3>
              <span className="font-label text-[10px] font-medium text-muted">Durasi: 90 Menit per Sesi</span>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {slots.map((item) => {
                const disabled = item.status === "terisi" || item.status === "tidak-ada";
                const selected = item.time === slotTime;
                return (
                  <button
                    key={item.time}
                    type="button"
                    disabled={disabled}
                    onClick={() => setSlotTime(item.time)}
                    className={`flex items-center gap-3 rounded-lg p-3 text-left transition ${
                      selected
                        ? "bg-moss-dark text-white ring-2 ring-moss-dark"
                        : disabled
                          ? "cursor-not-allowed bg-stone/70 text-muted/70"
                          : "bg-sand hover:bg-stone"
                    } ${item.status === "terbatas" ? "sm:col-span-2" : ""}`}
                  >
                    {selected ? (
                      <span className="flex h-9 w-9 items-center justify-center rounded bg-moss/60"><Check size={16} /></span>
                    ) : (
                      <span className={`rounded bg-white px-2 py-2 text-[14px] font-bold ${item.status === "terbatas" ? "text-honey-dark" : disabled ? "text-muted/60" : "text-honey-dark"}`}>
                        {item.time}
                      </span>
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className={`text-[14px] font-semibold ${item.status === "terisi" ? "line-through" : ""}`}>
                          {selected ? `${item.time} WIB` : item.title}
                        </span>
                        {selected && (
                          <span className="rounded bg-white/20 px-1.5 py-0.5 font-label text-[9px] uppercase">Pilihan Anda</span>
                        )}
                      </span>
                      <span className={`block text-[12px] ${selected ? "text-white/90" : ""}`}>{item.desc}</span>
                    </span>
                    {selected ? (
                      <span className="rounded bg-white px-2 py-1 font-label text-[9px] font-bold uppercase text-moss-dark">Aktif</span>
                    ) : item.status === "tersedia" ? (
                      <span className="rounded bg-mint px-2 py-1 font-label text-[9px] font-bold uppercase text-moss-dark">Tersedia</span>
                    ) : item.status === "terbatas" ? (
                      <span className="rounded bg-honey px-2 py-1 font-label text-[9px] font-bold uppercase text-honey-dark">Tersedia (sisa 1 slot)</span>
                    ) : item.status === "terisi" ? (
                      <span className="rounded bg-stone px-2 py-1 font-label text-[9px] font-bold uppercase">Terisi</span>
                    ) : (
                      <span className="rounded bg-stone px-2 py-1 font-label text-[9px] font-bold uppercase">Tidak ada</span>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Data pribadi */}
          <section className="card p-8">
            <h2 className="flex items-center gap-3 text-[24px] font-bold">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-moss-dark font-sans text-[11px] font-semibold text-white">4</span>
              Data Pribadi &amp; Detail Acara
            </h2>
            <p className="mt-1 pl-9 text-[13px] text-muted">
              Informasi ini digunakan fotografer untuk koordinasi lapangan dan
              pengiriman arsip digital.
            </p>

            <form className="mt-6 grid gap-x-5 gap-y-5 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="nama">Nama lengkap wisudawan / pemesan *</label>
                <div className="relative">
                  <input id="nama" className="field pr-11" defaultValue="Nadia Larasati" />
                  <Contact size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="field-label" htmlFor="wa">Nomor WhatsApp aktif *</label>
                <div className="relative">
                  <input id="wa" className="field pr-11" defaultValue="+62 812-3456-7890" />
                  <MessageSquareText size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
                <p className="mt-1.5 text-[10px] text-muted">Untuk link grup koordinasi H-3 shoot</p>
              </div>
              <div>
                <label className="field-label" htmlFor="email">Email kampus / pribadi *</label>
                <div className="relative">
                  <input id="email" type="email" className="field pr-11" defaultValue="nadia.larasati@campus.ac.id" />
                  <Mail size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
                <p className="mt-1.5 text-[10px] text-muted">Akses ke Google Drive &amp; Client Vault</p>
              </div>

              <div>
                <label className="field-label" htmlFor="kampus">Universitas / institusi *</label>
                <div className="relative">
                  <input id="kampus" className="field pr-11" defaultValue="Universitas Indonesia" />
                  <GraduationCap size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>
              <div>
                <label className="field-label" htmlFor="prodi">Fakultas &amp; program studi *</label>
                <div className="relative">
                  <input id="prodi" className="field pr-11" defaultValue="Ilmu Komunikasi (FISIP)" />
                  <BookOpen size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="field-label" htmlFor="tanggal">Tanggal pelaksanaan wisuda</label>
                <div className="relative">
                  <input id="tanggal" readOnly className="field pr-11" value={longDate} />
                  <CalendarCheck size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>
              <div>
                <label className="field-label" htmlFor="lokasi">Titik kumpul / lokasi pemotretan *</label>
                <div className="relative">
                  <input id="lokasi" className="field pr-11" defaultValue="Gedung Balairung UI / Selasar Rektorat" />
                  <MapPin size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="catatan">Catatan khusus sesi &amp; rombongan</label>
                <textarea
                  id="catatan"
                  rows={3}
                  className="field resize-none"
                  defaultValue="Ingin foto bersama keluarga inti (ayah, ibu, adik) dan 4 sahabat terdekat. Menginginkan tone warna film hangat khas Seraye."
                />
                <p className="mt-2 flex items-center gap-1.5 text-[11px] text-muted">
                  <Info size={13} className="text-honey-dark" />
                  Bisa membawa properti wisuda pribadi (buket bunga, selempang gelar, balon angka).
                </p>
              </div>
            </form>
          </section>
        </div>

        {/* Ringkasan */}
        <aside className="space-y-5 lg:sticky lg:top-24">
          <div className="card overflow-hidden">
            <div className="flex items-start justify-between bg-sand p-6">
              <div>
                <p className="font-label text-[10px] font-medium uppercase tracking-wide text-muted">Ringkasan pemesanan</p>
                <h2 className="mt-1 text-[24px] font-bold">Reservasi Slot</h2>
              </div>
              <span className="badge rounded bg-honey text-honey-dark">DP 50% berlaku</span>
            </div>

            <div className="space-y-4 p-6">
              {[
                { icon: Camera, label: "Koleksi layanan", title: "Graduation Photography (Story & Group)", sub: "Paket Balairung UI • 90 Menit" },
                { icon: Clock, label: "Jadwal & jam sesi", title: longDate, sub: slot.summary ?? "", subClass: "text-moss-dark" },
                { icon: MapPin, label: "Lokasi pemotretan", title: "Spot Balairung Utama UI", sub: "Universitas Indonesia, Depok" },
                { icon: ShieldCheck, label: "Alokasi tim Seraye", title: "1 Lead Photographer + 1 Assistant", sub: "Reflector & Lighting Kit Siap Lapangan" },
              ].map((row) => {
                const Icon = row.icon;
                return (
                  <div key={row.label} className="flex gap-3">
                    <Icon size={18} className="mt-1 shrink-0 text-moss-dark" />
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-wide text-muted">{row.label}</p>
                      <p className="text-[15px] font-semibold leading-snug">{row.title}</p>
                      <p className={`text-[12px] ${row.subClass ?? "text-muted"}`}>{row.sub}</p>
                    </div>
                  </div>
                );
              })}

              <div className="space-y-2 rounded-lg bg-sand p-4 text-[12px]">
                <p className="flex justify-between"><span>Paket Balairung UI Exclusive</span><span className="font-semibold">Rp 750.000</span></p>
                <p className="flex justify-between"><span>Biaya Booking Slot Kru Lapangan</span><span className="font-semibold text-moss-dark">Termasuk</span></p>
                <p className="flex justify-between"><span>Hak Cipta Semua File RAW Master</span><span className="font-semibold text-moss-dark">Gratis</span></p>
                <div className="!mt-4 flex items-end justify-between border-t border-line pt-4">
                  <span className="text-[14px] font-semibold">Total Nilai Paket</span>
                  <span className="font-serif text-[22px] font-bold">Rp 750.000</span>
                </div>
              </div>

              <div className="space-y-2 rounded-lg bg-mint/40 p-4">
                <p className="flex items-center justify-between font-label text-[11px] font-bold uppercase">
                  DP 50% hari ini: <span className="font-serif text-[20px] normal-case text-moss-dark">Rp 375.000</span>
                </p>
                <p className="flex justify-between text-[12px]"><span>Pelunasan (H-1 Sesi Foto):</span><span className="font-semibold">Rp 375.000</span></p>
              </div>

              <p className="flex items-start gap-3 rounded-lg bg-rose-soft/60 p-4 text-[12px]">
                <Moon size={15} className="mt-0.5 shrink-0" />
                <span>
                  Slot waktu <strong>{slot.time} WIB</strong> dikunci sementara selama{" "}
                  <u className="font-semibold">30 menit</u> saat berpindah ke pembayaran.
                </span>
              </p>

              <button type="button" className="btn-primary w-full !py-4 !text-[13px]">
                Lanjut ke pembayaran <ArrowRight size={15} />
              </button>
              <div className="text-center text-[10px] text-muted">
                <p className="flex items-center justify-center gap-1.5 font-label font-medium uppercase">
                  <Check size={11} /> Bebas reschedule hingga H-7 tanpa penalti
                </p>
                <p className="mt-1">Tautan pembayaran resmi QRIS, Virtual Account BCA, Mandiri, &amp; Kartu Kredit.</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-sand p-5">
            <div className="flex items-center gap-3">
              <Photo name="leadPhotographer" alt="Arka Daniswara" className="h-10 w-10 rounded-md" />
              <div>
                <p className="font-sans text-[15px] font-semibold">Catatan Lead Photographer</p>
                <p className="text-[12px] text-muted">Arka Daniswara — Seraye UI Chapter</p>
              </div>
            </div>
            <p className="mt-3 text-[12px] leading-relaxed">
              “Balairung jam 11:00 WIB sangat ideal untuk menangkap siluet pilar
              ikonis sebelum keramaian keluarga memuncak. Kami akan standby 15
              menit lebih awal di selasar timur.”
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
