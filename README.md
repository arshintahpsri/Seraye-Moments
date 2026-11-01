# Seraye Moments — Front End

Front end Next.js (App Router, TypeScript, Tailwind CSS 3) dari desain Figma,
page **Design Fix** (frame **After**).

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

Satu halaman (`/`), urut dari atas:

| Anchor        | Section                                          |
| ------------- | ------------------------------------------------ |
| —             | Hero "Capture the moments worth keeping."        |
| `#paket`      | Find the Perfect Package for Your Moment (6 paket, geser horizontal) |
| `#booking`    | Formulir Pemesanan Sesi + Ringkasan Sesi         |
| `#portofolio` | Moments Worth Remembering (2 baris galeri geser) |
| `#faq`        | Pertanyaan yang Sering Diajukan                  |

## Struktur

- `app/` — layout (font Playfair Display & Plus Jakarta Sans via `next/font`) dan halaman.
- `components/` — satu komponen per section; `BookingProvider` menyimpan paket
  terpilih yang dipakai bersama katalog dan formulir.
- `lib/data.ts` — seluruh konten (paket, galeri, FAQ, harga, DP).
- `public/images/` — foto yang diekspor dari Figma (`hero`, `logo`, `package-*`, `gallery-*`).

## Catatan

- Judul hero dan pertanyaan FAQ memakai serif sistem (Liberation Serif/Times)
  seperti yang tampil di Figma; judul section lain memakai Playfair Display.
- Foto paket 4–6 dan galeri 4, 5, 6, 10, 11, 12 terpotong di Figma, jadi
  diambil dari gambar aslinya dan dipotong ulang sesuai ukuran kartu.
- Formulir membuka WhatsApp dengan draf pesan otomatis; DP Rp 100.000, sisa
  pelunasan dihitung dari harga paket.
