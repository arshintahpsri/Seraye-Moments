"use client";

import { useState } from "react";

export default function PhotoBoothForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      className="mt-8"
      onSubmit={(event) => {
        event.preventDefault();
        if (email) setSent(true);
      }}
    >
      <label
        htmlFor="photobooth-email"
        className="font-label text-[11px] font-bold uppercase tracking-wide"
      >
        Dapatkan akses awal &amp; voucher diskon 20%
      </label>
      <div className="mt-3 flex gap-3">
        <input
          id="photobooth-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Masukkan email Anda..."
          className="min-w-0 flex-1 rounded-md bg-white px-4 py-3 text-[14px] outline-none ring-rose/30 focus:ring-2"
        />
        <button
          type="submit"
          className="btn rounded-md bg-rose px-6 text-white hover:opacity-90"
        >
          {sent ? "Tersimpan ✓" : "Ingatkan saya"}
        </button>
      </div>
    </form>
  );
}
