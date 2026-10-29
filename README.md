# Seraye Moments — Front End

Front end Next.js (App Router, TypeScript, Tailwind CSS 3) dari desain Figma
"Seraye Moments — Direct WhatsApp Business Booking & Portfolio Catalog"
(page **Akan Dikerjakan**).

## Menjalankan

Butuh Node.js 18.18+.

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

Opsional: isi `NEXT_PUBLIC_WA_NUMBER` (format internasional tanpa `+`, mis.
`6281234567890`) di `.env.local` agar tombol WhatsApp langsung membuka chat admin.
Tanpa nilai ini, WhatsApp dibuka tanpa kontak tujuan.

## Halaman

Satu halaman (`/`) dengan section berikut, urut dari atas:

| Anchor        | Section                                  |
| ------------- | ---------------------------------------- |
| `#paket`      | Pilihan Paket Wisuda & Event (pricelist) |
| `#gaya-visual`| Gaya Visual & Portofolio                 |
| —             | Kurasi Fotografer & Status Slot          |
| `#alur`       | Alur Pemesanan                           |
| `#syarat`     | Syarat & Ketentuan                       |
| `#kampus`     | Find Us In Your Campus & City            |
| `#booking`    | Lacak Status + Quick Booking WhatsApp    |

## Struktur

- `app/` — layout (font Plus Jakarta Sans via `next/font`) dan halaman.
- `components/` — satu komponen per section, plus `Header`, `Footer`,
  `BookingProvider` (pilihan paket & fotografer dipakai bersama katalog,
  kurasi, dan formulir booking).
- `lib/data.ts` — seluruh konten (paket, fotografer, langkah, ketentuan, dst.).
- `lib/images.ts` — peta gambar ke `public/images/`.

## Mengganti foto

1. Ekspor gambar dari Figma ke `public/images/`.
2. Ubah path-nya di `lib/images.ts`. Nilai `null` menampilkan placeholder gradien.

Foto gaya visual (`style-*.jpg`, 3x) dan kampus (`campus-*.jpg`, 3x) sudah
diekspor dari Figma.

## Catatan

- Heading memakai serif sistem (Liberation Serif/Georgia) sesuai desain Figma;
  teks lain Plus Jakarta Sans.
- Hanya tiga kartu paket yang terlihat di Figma (sisanya terpotong area geser).
  Tambahkan paket lain di `packages` pada `lib/data.ts`.
- Formulir booking membuka WhatsApp dengan draf pesan otomatis. "Lacak Status"
  masih memakai data contoh (tanpa backend).
