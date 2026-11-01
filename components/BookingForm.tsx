"use client";

import { CircleCheck, Lock } from "lucide-react";
import { useState, type FormEvent } from "react";
import {
  DP_AMOUNT,
  guarantees,
  packages,
  rupiah,
  waLink,
} from "@/lib/data";
import { useBooking } from "./BookingProvider";

const longDate = (iso: string) =>
  iso
    ? new Date(`${iso}T00:00:00`).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

export default function BookingForm() {
  const { packageId, setPackageId } = useBooking();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [notes, setNotes] = useState("");
  const [agree, setAgree] = useState(false);

  const pkg = packages.find((p) => p.id === packageId) ?? packages[1];
  const remaining = pkg.price - DP_AMOUNT;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const message = [
      "Halo Admin Seraye Moments, saya ingin booking sesi:",
      "",
      `• Nama: ${name.trim()}`,
      `• No WA: ${phone.trim()}`,
      `• Paket: ${pkg.label} (${rupiah(pkg.price)})`,
      `• Tanggal: ${longDate(date)}`,
      `• Jam: ${time}`,
      `• Lokasi Titik Temu: ${place.trim()}`,
      notes.trim() ? `• Catatan: ${notes.trim()}` : null,
      `• DP Booking Jadwal: ${rupiah(DP_AMOUNT)}`,
      "",
      "Mohon instruksi pembayaran DP. Terima kasih!",
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="bg-blush">
      <div className="container-page py-14 sm:py-16">
        <p className="eyebrow">Reserve Your Date</p>
        <h2 className="section-title mt-1">Formulir Pemesanan Sesi</h2>
        <p className="mt-2 text-[14px]">
          Lengkapi rincian wisuda untuk mengunci slot jadwal pemotretan bersama
          Seraye Moments.
        </p>

        <form
          onSubmit={submit}
          className="mt-8 grid items-start gap-6 lg:grid-cols-[1fr_340px]"
        >
          <div className="grid gap-4 rounded-2xl bg-white p-5 shadow-card sm:grid-cols-2 sm:p-8">
            <div>
              <label htmlFor="f-name" className="field-label">
                Nama Lengkap Wisudawan / Klien <span className="text-[#C0392B]">*</span>
              </label>
              <input
                id="f-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="field"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="f-phone" className="field-label">
                Nomor WhatsApp Aktif <span className="text-[#C0392B]">*</span>
              </label>
              <input
                id="f-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0812xxxxxxxx"
                className="field"
                autoComplete="tel"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="f-package" className="field-label">
                Paket Pilihan <span className="text-[#C0392B]">*</span>
              </label>
              <select
                id="f-package"
                value={pkg.id}
                onChange={(e) => setPackageId(e.target.value)}
                className="field"
              >
                {packages.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label} ({rupiah(p.price)})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="f-date" className="field-label">
                Tanggal Sesi <span className="text-[#C0392B]">*</span>
              </label>
              <input
                id="f-date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="field"
              />
            </div>
            <div>
              <label htmlFor="f-time" className="field-label">
                Jam Sesi Pemotretan <span className="text-[#C0392B]">*</span>
              </label>
              <input
                id="f-time"
                type="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="field"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="f-place" className="field-label">
                Lokasi Titik Temu (Bandung Area Only){" "}
                <span className="text-[#C0392B]">*</span>
              </label>
              <input
                id="f-place"
                required
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="Contoh: Area Kampus Outdoor (Gedung Rektorat / Taman)"
                className="field"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="f-notes" className="field-label">
                Catatan Tambahan &amp; Konsep (Opsional)
              </label>
              <textarea
                id="f-notes"
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Sebutkan warna toga/kebaya, jumlah anggota keluarga yang ikut, atau referensi pose impian..."
                className="field resize-none"
              />
            </div>
          </div>

          <aside className="rounded-2xl bg-sage p-5 shadow-card lg:sticky lg:top-24">
            <p className="eyebrow !text-[10px]">Ringkasan Sesi</p>
            <div className="mt-1 flex items-center justify-between gap-3">
              <h3 className="font-serif text-[22px] font-medium">
                {pkg.label}
              </h3>
              <span className="rounded bg-leaf px-2 py-0.5 text-[10px] font-bold text-forest">
                {pkg.code}
              </span>
            </div>

            <dl className="mt-3 space-y-2 border-t border-line/70 pt-3 text-[12px]">
              <div className="flex justify-between gap-3">
                <dt>Total Harga Paket</dt>
                <dd className="text-[15px] font-semibold text-forest">{rupiah(pkg.price)}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="flex items-center gap-1.5">
                  <Lock aria-hidden className="h-3 w-3" />
                  DP Booking Jadwal
                </dt>
                <dd className="font-semibold text-forest">{rupiah(DP_AMOUNT)}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Sisa Pelunasan (H-1)</dt>
                <dd className="font-semibold text-forest">{rupiah(remaining)}</dd>
              </div>
            </dl>

            <div className="mt-4 border-t border-line/70 pt-4 text-[12px]">
              <p className="flex items-center gap-1.5 font-semibold text-forest">
                <CircleCheck aria-hidden className="h-3.5 w-3.5" />
                Garansi Seraye Deliverables:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-9 pr-1">
                {guarantees.map(([k, v]) => (
                  <li key={k}>
                    {k} {v}
                  </li>
                ))}
              </ul>
            </div>

            <label className="mt-4 flex items-start gap-2.5 text-[11px] leading-4">
              <input
                type="checkbox"
                required
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-forest"
              />
              <span>
                Saya menyetujui ketentuan: DP Rp100.000 bersifat{" "}
                <em>non-refundable</em> untuk mengunci slot tanggal &amp; jam
                secara permanen.
              </span>
            </label>

            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-gold px-4 py-3 text-[13px] font-semibold text-forest shadow-card transition hover:bg-gold-dark"
            >
              Lanjutkan Booking via WhatsApp
            </button>
            <p className="mt-3 text-center text-[10px] text-body/80">
              Kamu akan dialihkan ke WhatsApp resmi Seraye Moments
            </p>
          </aside>
        </form>
      </div>
    </section>
  );
}
