# Seraye Moments — Front End

Front end Next.js (App Router, TypeScript, Tailwind CSS 3) dari desain Figma
"Seraye Moments — Desktop".

## Menjalankan

Butuh Node.js 18.18+.

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Halaman

| Route            | Frame Figma                              |
| ---------------- | ---------------------------------------- |
| `/`              | Desktop Home                             |
| `/services`      | Desktop Services & Packages              |
| `/booking`       | Desktop Booking & Schedule               |
| `/client-portal` | Desktop Client Portal & Invoice          |

## Struktur

- `app/` — halaman dan layout (font Playfair Display, Outfit, Montserrat via `next/font`).
- `components/` — Navbar, Footer, Photo, PhotoBoothForm.
- `lib/images.ts` — peta gambar. Foto diekspor dari Figma ke `public/images/`.

## Mengganti foto

1. Ekspor gambar baru dari Figma (pilih layer gambar → Export) ke `public/images/`.
2. Ubah path-nya di `lib/images.ts`. Nilai `null` menampilkan placeholder gradien.

Catatan: di Figma, gambar polaroid "Keepsake" dan strip photo booth ke-2 dan ke-3
berupa tangkapan layar halaman, jadi yang dipakai hanya hasil potongan area fotonya.

## Catatan

- Warna dan token ada di `tailwind.config.ts`; nilainya diperkirakan dari
  tangkapan layar Figma, jadi cocokkan dengan nilai hex aslinya bila perlu.
- Kalender/slot di `/booking` interaktif; data masih statis (April 2026).
- Tombol "Lanjut ke Pembayaran", "Download Invoice PDF", dan "Ajukan Kegiatan"
  belum terhubung ke backend.
