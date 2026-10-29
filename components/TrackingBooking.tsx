"use client";

import {
  Ban,
  Check,
  CircleCheck,
  Eye,
  Hash,
  MessageSquareText,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import {
  campusOptions,
  categories,
  DP_AMOUNT,
  packages,
  photographers,
  rupiah,
  sessions,
  waLink,
  type PhotoPackage,
} from "@/lib/data";
import { useBooking } from "./BookingProvider";

/* ---------- Lacak status ---------- */

const DEMO_CODE = "SM-2026-TLU89";
const DEMO_PHONE = "081234567890";

const norm = (s: string) => s.replace(/\s+/g, "").toUpperCase();

function Tracking() {
  const [code, setCode] = useState(DEMO_CODE);
  const [phone, setPhone] = useState(DEMO_PHONE);
  const [found, setFound] = useState(true);

  const check = (e: FormEvent) => {
    e.preventDefault();
    setFound(norm(code) === DEMO_CODE && norm(phone) === DEMO_PHONE);
  };

  return (
    <div className="flex flex-col rounded-3xl border border-line bg-white p-6 sm:p-8">
      <span className="pill self-start bg-tint text-moss-dark">
        <Search aria-hidden className="h-3 w-3" />
        Guest Code Tracking
      </span>
      <h2 className="mt-4 font-serif text-[26px] font-bold leading-tight">
        Lacak Status & Berkas Foto
      </h2>
      <p className="mt-2 text-[13px] leading-5">
        Privasi terlindungi: tidak butuh mengingat kata sandi. Cukup masukkan{" "}
        <strong className="text-ink">Kode Pesanan</strong> Anda dan nomor
        WhatsApp terdaftar.
      </p>

      <form onSubmit={check} className="mt-6 space-y-4">
        <div>
          <label htmlFor="track-code" className="field-label">
            Kode Pesanan
          </label>
          <div className="relative">
            <Hash aria-hidden className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body" />
            <input
              id="track-code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="field pl-10 font-medium"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="track-phone" className="field-label">
            Nomor WhatsApp Terdaftar
          </label>
          <div className="relative">
            <Smartphone aria-hidden className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body" />
            <input
              id="track-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="field pl-10 font-medium"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn-moss w-full rounded-lg py-3">
          <Search aria-hidden className="h-4 w-4" />
          Cek Status & Unduh Drive
        </button>
      </form>

      {found ? (
        <div className="mt-5 rounded-xl border border-line bg-tint p-4 text-[12px]">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono font-bold text-ink">#{DEMO_CODE}</span>
            <span className="pill bg-mint text-moss-dark">DP Rp100.000 Valid</span>
          </div>
          <p className="mt-3 font-semibold text-ink">
            Sabrina Clarissa • Paket Foto Sejenak (90 Menit)
          </p>
          <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5">
            <div>
              <dt className="inline">Jadwal: </dt>
              <dd className="inline font-bold text-ink">15 Nov 2026</dd>
            </div>
            <div>
              <dt className="inline">Fotografer: </dt>
              <dd className="inline font-bold text-ink">Kak Dimas K.</dd>
            </div>
            <div>
              <dt className="inline">Pelunasan: </dt>
              <dd className="inline">H-1 Sesi</dd>
            </div>
            <div>
              <dt className="inline">Google Drive: </dt>
              <dd className="inline">H+3 Highlight + Raw</dd>
            </div>
          </dl>
        </div>
      ) : (
        <p role="status" className="mt-5 rounded-xl border border-rose-soft bg-rose-soft/40 p-4 text-[12px] text-rose">
          Kode pesanan atau nomor WhatsApp tidak cocok. Periksa kembali, atau
          hubungi admin lewat WhatsApp.
        </p>
      )}

      <div className="mt-auto pt-6">
        <p className="flex items-center gap-1.5 border-t border-line pt-4 text-[11px]">
          <CircleCheck aria-hidden className="h-3.5 w-3.5 text-moss" />
          Akses Google Drive aman dengan verifikasi WhatsApp.
        </p>
        <div className="mt-4 rounded-xl border border-line bg-tint p-4 text-[11px] leading-4">
          <p className="flex items-center gap-1.5 font-bold text-ink">
            <ShieldCheck aria-hidden className="h-3.5 w-3.5 text-moss" />
            Keamanan & Privasi Data Wisudawan
          </p>
          <p className="mt-1">
            100% Data Handled by Admin — Tanpa Risiko Kebocoran Database Publik.
            Pengiriman aman tersimpan di Google Drive Resmi privat selama 1
            tahun penuh.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Booking ---------- */

const CAMPUS_CODE: Record<string, string> = {
  "Telkom University (Bandung)": "TLU",
  "ITB Ganesha (Bandung)": "ITB",
  "Universitas Indonesia (Depok)": "UIX",
  "Unpad & ITB Jatinangor": "JTN",
  "UGM Bulaksumur (Yogyakarta)": "UGM",
};

const CATEGORY_SHORT = { foto: "Foto", video: "Video", event: "Event" } as const;

const packageLabel = (p: PhotoPackage) =>
  `Paket ${CATEGORY_SHORT[p.category]} ${p.name.replace(/ \(Video\)$/, "")}`;

const longDate = (iso: string) =>
  iso
    ? new Date(`${iso}T00:00:00`).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

/** Kode booking deterministik dari data pemesan agar draf pesan stabil. */
const bookingCode = (campus: string, name: string, phone: string) => {
  const seed = [...(name + phone)].reduce((n, c) => n + c.charCodeAt(0), 0);
  return `SM-2026-${CAMPUS_CODE[campus] ?? "SRY"}${(seed % 90) + 10}`;
};

function BookingForm() {
  const { packageId, setPackageId, photographerId, setPhotographerId } = useBooking();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [campus, setCampus] = useState(campusOptions[0]);
  const [session, setSession] = useState(sessions[0]);
  const [date, setDate] = useState("");
  const [agree, setAgree] = useState(false);

  const pkg = packages.find((p) => p.id === packageId) ?? packages[0];
  const photographer = photographers.find((p) => p.id === photographerId) ?? photographers[0];

  const sample = {
    name: "Salsa Nabilla, S.T.",
    phone: "081298765432",
    date: "18 November 2026",
  };
  const shownName = name.trim() || sample.name;
  const shownPhone = phone.trim() || sample.phone;
  const shownDate = longDate(date) || sample.date;
  const code = bookingCode(campus, shownName, shownPhone);

  const message = [
    "Halo Admin Seraye Moments, saya ingin booking sesi wisuda:",
    "",
    `• Kode Booking: ${code}`,
    `• Nama: ${shownName}`,
    `• No WA: ${shownPhone}`,
    `• Kampus: ${campus}`,
    `• Paket: ${packageLabel(pkg)} (${rupiah(pkg.price)})`,
    `• Sesi: ${session.replace(/\) - .*$/, ")")}`,
    `• Preferensi Fotografer: ${photographer.name} (${photographer.visual})`,
    `• Tanggal: ${shownDate}`,
    `• DP Pengunci Jadwal: ${rupiah(DP_AMOUNT)}`,
    "",
    "Mohon instruksi nomor rekening resmi untuk pelunasan DP. Terima kasih!",
  ].join("\n");

  const open = () => window.open(waLink(message), "_blank", "noopener,noreferrer");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    open();
  };

  return (
    <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="pill bg-mint text-moss-dark">
          <MessageSquareText aria-hidden className="h-3 w-3" />
          Quick Booking to WhatsApp Bisnis
        </span>
        <span className="pill bg-rose-soft text-rose">DP Manual {rupiah(DP_AMOUNT)}</span>
        <span className="ml-auto text-[11px]">Tanpa Gateway QRIS Rumit</span>
      </div>
      <h2 className="mt-4 font-serif text-[26px] font-bold leading-tight">
        Kunci Slot Sesi Wisuda Langsung ke Admin
      </h2>
      <p className="mt-2 text-[13px] leading-5">
        Isi data pemesanan di bawah. Sistem akan menghasilkan{" "}
        <strong className="text-ink">Kode Booking Unik</strong> dan langsung
        membuka obrolan WhatsApp Bisnis resmi Seraye Moments dengan draf
        pemesanan otomatis.
      </p>

      <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="b-name" className="field-label">Nama Lengkap Wisudawan / Pemesan *</label>
          <input id="b-name" required value={name} onChange={(e) => setName(e.target.value)} placeholder={sample.name} className="field" />
        </div>
        <div>
          <label htmlFor="b-phone" className="field-label">Nomor WhatsApp Aktif *</label>
          <input id="b-phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={sample.phone} className="field" />
        </div>
        <div>
          <label htmlFor="b-campus" className="field-label">Pilihan Kampus / Kota *</label>
          <select id="b-campus" value={campus} onChange={(e) => setCampus(e.target.value)} className="field">
            {campusOptions.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="b-package" className="field-label">Paket Wisuda / Event Pilihan *</label>
          <select id="b-package" value={pkg.id} onChange={(e) => setPackageId(e.target.value)} className="field">
            {categories.map((c) => {
              const list = packages.filter((p) => p.category === c.id);
              return list.length ? (
                <optgroup key={c.id} label={c.label}>
                  {list.map((p) => (
                    <option key={p.id} value={p.id}>
                      {packageLabel(p)} — {rupiah(p.price)}
                    </option>
                  ))}
                </optgroup>
              ) : null;
            })}
          </select>
        </div>
        <div>
          <label htmlFor="b-session" className="field-label">Jadwal & Sesi Golden Hour *</label>
          <select id="b-session" value={session} onChange={(e) => setSession(e.target.value)} className="field">
            {sessions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="b-photographer" className="field-label">Preferensi Fotografer & Visual *</label>
          <select id="b-photographer" value={photographer.id} onChange={(e) => setPhotographerId(e.target.value)} className="field">
            {photographers.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.visual})
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="b-date" className="field-label">Perkiraan Tanggal Pelaksanaan Wisuda *</label>
          <input id="b-date" type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="field" />
        </div>

        <label className="flex items-start gap-2 text-[11px] leading-4 sm:col-span-2">
          <input
            type="checkbox"
            required
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-moss"
          />
          <span>
            Saya memahami bahwa booking terkunci setelah verifikasi DP{" "}
            {rupiah(DP_AMOUNT)} melalui admin WhatsApp resmi Seraye Moments
            (Pelunasan H-1, Maksimal 1x Reschedule H-3).
          </span>
        </label>

        <div className="flex flex-wrap gap-3 sm:col-span-2">
          <button type="submit" className="btn-wa rounded-lg px-6 py-3 text-[13px]">
            <Send aria-hidden className="h-4 w-4" />
            Kirim Booking via WhatsApp Bisnis
          </button>
          <a
            href="#draft"
            className="btn-outline rounded-lg px-5 py-3 text-[13px]"
          >
            <Eye aria-hidden className="h-4 w-4" />
            Lihat Draf Pesan WA
          </a>
        </div>
      </form>

      <div id="draft" className="mt-5 scroll-mt-28 rounded-2xl border border-line bg-tint p-4">
        <div className="flex items-center justify-between gap-2 text-[10px]">
          <span className="flex items-center gap-1.5 font-bold uppercase tracking-[0.06em] text-ink">
            <MessageSquareText aria-hidden className="h-3.5 w-3.5 text-moss" />
            Format Pesan Otomatis WhatsApp
          </span>
          <span className="pill bg-mint text-moss-dark">{code}</span>
        </div>
        <pre className="mt-3 whitespace-pre-wrap break-words rounded-lg bg-white p-4 font-mono text-[11px] leading-[17px] text-ink">
          {message}
        </pre>
        <div className="mt-3 flex items-center justify-between gap-3 text-[11px]">
          <span className="flex items-center gap-1.5">
            <Ban aria-hidden className="h-3.5 w-3.5" />
            Tanpa gateway QRIS perantara, transfer langsung ke rekening resmi admin.
          </span>
          <button type="button" onClick={open} className="btn-wa shrink-0 rounded-md px-3 py-1.5 text-[11px]">
            <Check aria-hidden className="h-3 w-3" />
            Buka WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TrackingBooking() {
  return (
    <section id="booking" className="container-page pb-16 pt-6">
      <div className="grid items-start gap-8 lg:grid-cols-[5fr_7fr]">
        <Tracking />
        <BookingForm />
      </div>
    </section>
  );
}
