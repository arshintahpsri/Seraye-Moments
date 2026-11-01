/**
 * Konten halaman, disalin dari page "Design Fix" (frame "After") di Figma.
 */

export const DP_AMOUNT = 100_000;

export const rupiah = (n: number) =>
  "Rp " + n.toLocaleString("id-ID").replace(/,/g, ".");

/** Nomor WhatsApp admin (format internasional tanpa +). Kosong = pilih kontak manual di WhatsApp. */
export const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "";

export const waLink = (text = "") =>
  `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/** Teks dengan bagian tebal: string biasa = teks, `[teks]` = tebal. */
export type Rich = readonly (string | readonly [string])[];

export type PackageFeature = { icon: string; text: Rich };

export type PhotoPackage = {
  id: string;
  /** Kode singkat di kartu ringkasan sesi. */
  code: string;
  /** Nama di formulir & ringkasan, mis. "Sejenak Photo". */
  label: string;
  name: string;
  kind: string;
  badge: string;
  badgeTone: "rose" | "forest";
  image: string;
  imageAlt: string;
  description: string;
  price: number;
  unit: "sesi" | "acara";
  featured?: boolean;
  features: PackageFeature[];
  cta: string;
  ctaIcon: "check" | "heart";
};

export const packages: PhotoPackage[] = [
  {
    id: "sekejap-photo",
    code: "SKJP",
    label: "Sekejap Photo",
    name: "Sekejap",
    kind: "Photo Session",
    badge: "Populer Wisuda",
    badgeTone: "rose",
    image: "/images/package-sekejap.jpg",
    imageAlt: "Wisudawati tersenyum membawa gulungan ijazah di taman kampus",
    description: "Ideal untuk sesi wisuda solo & foto ringkas bersama keluarga inti.",
    price: 329_000,
    unit: "sesi",
    features: [
      { icon: "clock", text: ["Durasi ", ["60 Menit"], " Pemotretan"] },
      { icon: "wand", text: [["15 Foto Edit"], " Warm Editorial"] },
      { icon: "users", text: [["Unlimited Teman & Keluarga"]] },
      { icon: "pin", text: [["Unlimited Spot"], " dalam 1 area"] },
      { icon: "cloud", text: ["Semua Raw File via Google Drive (H+1)"] },
    ],
    cta: "Pilih Paket Sekejap",
    ctaIcon: "check",
  },
  {
    id: "sejenak-photo",
    code: "SJJP",
    label: "Sejenak Photo",
    name: "Sejenak",
    kind: "Photo Session",
    badge: "Best Value",
    badgeTone: "forest",
    image: "/images/package-sejenak.jpg",
    imageAlt: "Wisudawati melempar buket bersama sahabat di kampus",
    description:
      "Paling leluasa untuk sesi wisuda komplit bersama sahabat & keluarga besar.",
    price: 429_000,
    unit: "sesi",
    featured: true,
    features: [
      { icon: "clock", text: ["Durasi ", ["90 Menit"], " Santai & Bebas Terburu"] },
      { icon: "wand", text: [["25 Foto Edit Premium"], " Masterpiece"] },
      { icon: "bulb", text: [["Moodboard Tematik"], " & Directing Pose Salsa"] },
      { icon: "pin", text: [["Unlimited Spot"], " Berpindah Lokasi"] },
      { icon: "bolt", text: ["Highlight 5 Foto Teaser dalam ", ["H+2"]] },
    ],
    cta: "Pilih Paket Sejenak",
    ctaIcon: "heart",
  },
  {
    id: "sekejap-video",
    code: "SKJV",
    label: "Sekejap Video",
    name: "Sekejap",
    kind: "Videography",
    badge: "Reels / TikTok",
    badgeTone: "rose",
    image: "/images/package-sekejap-video.jpg",
    imageAlt: "Wisudawati berjalan di jalan batu sambil direkam videografer",
    description:
      "Video estetik berdurasi pendek untuk kenang-kenangan reels & TikTok.",
    price: 250_000,
    unit: "sesi",
    features: [
      { icon: "clock", text: ["Durasi ", ["30 Menit"], " Video Recording"] },
      { icon: "film", text: [["1 Edited Video (30 Detik)"], " 9:16 Vertical"] },
      { icon: "music", text: ["Trending Audio / Request Lagu Favorit"] },
      { icon: "folder", text: ["Semua Raw Video Footage Diberikan"] },
    ],
    cta: "Pilih Paket Sekejap Video",
    ctaIcon: "check",
  },
  {
    id: "sejenak-video",
    code: "SJJV",
    label: "Sejenak Video",
    name: "Sejenak",
    kind: "Videography",
    badge: "Cinematic Highlight",
    badgeTone: "rose",
    image: "/images/package-sejenak-video.jpg",
    imageAlt: "Videografer merekam wisudawati yang dipeluk ayahnya",
    description:
      "Video sinematik lengkap merekam gelak tawa dan haru pelukan orang tersayang.",
    price: 350_000,
    unit: "sesi",
    features: [
      { icon: "clock", text: ["Durasi ", ["60 Menit"], " Video On-Site"] },
      { icon: "film", text: [["1 Video Cinematic (60 Detik / 1 Menit)"]] },
      { icon: "palette", text: ["Cinematic Warm Color Grading & Audio Voiceover"] },
      { icon: "folder", text: ["All Uncut Raw Footage 4K/60fps"] },
    ],
    cta: "Pilih Paket Sejenak Video",
    ctaIcon: "check",
  },
  {
    id: "semarak-event",
    code: "SMRK",
    label: "Semarak Event",
    name: "Semarak",
    kind: "Event Dokumentasi",
    badge: "Foto + Video",
    badgeTone: "rose",
    image: "/images/package-semarak.jpg",
    imageAlt: "Perayaan wisuda dengan balon dan dekorasi bunga",
    description:
      "Paket komplit syukuran wisuda, tasyakuran, gathering, atau intimate party.",
    price: 1_450_000,
    unit: "acara",
    features: [
      { icon: "clock", text: ["Maksimal ", ["180 Menit (3 Jam)"], " Standby"] },
      { icon: "crew", text: [["1 Fotografer + 1 Videografer"], " On-Site"] },
      { icon: "gallery", text: [["30 Foto Edit"], " + 1 Video Recap (1–2 Min)"] },
      {
        icon: "video",
        text: ["1 Konten Reels/TikTok + Raw Footage Behind The Scene"],
      },
    ],
    cta: "Pilih Paket Semarak",
    ctaIcon: "check",
  },
  {
    id: "seremoni-event",
    code: "SRMN",
    label: "Seremoni Event",
    name: "Seremoni",
    kind: "Event Dokumentasi",
    badge: "Full Coverage",
    badgeTone: "rose",
    image: "/images/package-seremoni.jpg",
    imageAlt: "Jamuan malam perayaan wisuda di ballroom",
    description:
      "Liputan menyeluruh dari awal arak-arakan hingga perayaan malam hari.",
    price: 1_750_000,
    unit: "acara",
    features: [
      { icon: "clock", text: ["Maksimal ", ["300 Menit (5 Jam)"], " Liputan Penuh"] },
      { icon: "gallery", text: [["80 Foto Edit"], " Warna Seraye"] },
      { icon: "film", text: [["2 Video Recap"], " + 2 Konten TikTok/Reels"] },
      { icon: "archive", text: ["Semua Raw Files Cloud Backup Selama 1 Tahun"] },
    ],
    cta: "Pilih Paket Seremoni",
    ctaIcon: "check",
  },
];

export const guarantees = [
  ["H+1:", "Semua file unedited masuk Google Drive."],
  ["H+3:", "Highlight 5 file edit utama selesai."],
  ["H+7:", "Seluruh hasil edit resolusi tinggi dikirim tuntas."],
] as const;

/* ---------- Galeri ---------- */

export type GalleryPhoto = { src: string; alt: string; w: number; h: number };

const g = (n: number, w: number, h: number, alt: string): GalleryPhoto => ({
  src: `/images/gallery-${String(n).padStart(2, "0")}.jpg`,
  alt,
  w,
  h,
});

export const galleryRows: GalleryPhoto[][] = [
  [
    g(1, 300, 380, "Wisudawati membawa buket bunga matahari di perpustakaan"),
    g(2, 420, 380, "Wisudawati berkebaya hijau sage memegang topi toga"),
    g(3, 320, 380, "Sahabat tertawa bersama di atas tikar dengan foto polaroid"),
    g(4, 440, 380, "Wisudawati dicium kedua orang tua berbatik"),
    g(5, 310, 380, "Wisudawan berjubah di bawah lengkung gerbang batu kampus"),
    g(6, 380, 380, "Sepasang wisudawan berfoto di studio dengan toga"),
  ],
  [
    g(7, 440, 340, "Rombongan wisudawan berjalan di halaman kampus"),
    g(8, 300, 340, "Wisudawati tersenyum di antara kelopak bunga"),
    g(9, 390, 340, "Keluarga merayakan kelulusan dengan tumpeng"),
    g(10, 310, 340, "Wisudawati kedokteran berstetoskop memegang gulungan ijazah"),
    g(11, 360, 340, "Wisudawati diangkat teman-temannya saat merayakan kelulusan"),
    g(12, 420, 340, "Siluet wisudawati melempar topi saat matahari terbenam"),
  ],
];

/* ---------- FAQ ---------- */

export type Faq = {
  tag: string;
  tone: "leaf" | "rose" | "honey";
  question: string;
  answer: Rich;
};

export const faqs: Faq[] = [
  {
    tag: "Pengiriman & File",
    tone: "leaf",
    question: "Berapa lama estimasi pengiriman hasil foto & video?",
    answer: [
      "Seluruh file unedited (RAW JPEG) diunggah ke Google Drive paling lambat ",
      ["H+1 malam"],
      ". Teaser 5 foto highlight terbaik dikirim dalam ",
      ["H+3"],
      ", dan seluruh kurasi foto full-retouched resolusi tinggi tuntas dalam ",
      ["H+7"],
      ".",
    ],
  },
  {
    tag: "Sesi Pemotretan",
    tone: "rose",
    question: "Bisa request lokasi outdoor di luar kampus / luar Bandung?",
    answer: [
      "Tentu bisa! Area Kota Bandung & Jatinangor (ITB, Unpad, UPI, Telkom, Parahyangan) sudah ",
      ["bebas biaya transportasi"],
      ". Untuk sesi luar kota (Jakarta, Bogor, Yogyakarta, dll), berlaku penyesuaian biaya akomodasi & tiket perjalanan.",
    ],
  },
  {
    tag: "Fleksibilitas Jadwal",
    tone: "honey",
    question: "Bagaimana jika seremonial wisuda molor atau turun hujan?",
    answer: [
      "Kami sangat memahami dinamika hari wisuda. Fotografer kami memberikan toleransi penyesuaian jam di hari H. Jika cuaca hujan, sesi dialihkan ke spot koridor teduh semi-outdoor atau cafe terdekat tanpa mengurangi estetika hangat khas Seraye.",
    ],
  },
  {
    tag: "Pengarahan Gaya",
    tone: "leaf",
    question: "Apakah ada arahan gaya/pose (directing) saat sesi pemotretan?",
    answer: [
      "Pasti ada! Tim Seraye Moments memandu secara interaktif dan rileks. Tidak ada pose kaku atau intimidatif, kami mengutamakan percakapan hangat, tawa natural, dan gestur spontan yang autentik merefleksikan kebahagiaanmu bersama keluarga.",
    ],
  },
  {
    tag: "Pendamping & Tamu",
    tone: "leaf",
    question: "Bolehkah mengajak keluarga besar dan bestie sahabat?",
    answer: [
      "Sangat diperbolehkan! ",
      ["Tanpa biaya tambahan"],
      " untuk jumlah anggota keluarga inti maupun sahabat. Foto formasi keluarga, teman satu geng, hingga foto solo personal semuanya sudah tercakup dalam durasi sesi.",
    ],
  },
  {
    tag: "Pemesanan & Pembayaran",
    tone: "rose",
    question: "Bagaimana sistem DP dan pelunasan pembayaran?",
    answer: [
      "Cukup DP ",
      ["Rp 100.000"],
      " untuk mengunci tanggal dan jam di kalender kami. Bukti booking langsung kami kirimkan via WhatsApp invoice. Pelunasan sisa biaya dapat diselesaikan paling lambat ",
      ["H-1 acara"],
      ".",
    ],
  },
];
