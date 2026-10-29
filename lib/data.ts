/**
 * Konten halaman, disalin dari frame Figma
 * "Seraye Moments — Direct WhatsApp Business Booking & Portfolio Catalog".
 */

export const DP_AMOUNT = 100_000;

export const rupiah = (n: number) =>
  "Rp " + n.toLocaleString("id-ID").replace(/,/g, ".");

/** Nomor WhatsApp admin (format internasional tanpa +). Kosong = pilih kontak manual di WhatsApp. */
export const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "";

export const waLink = (text = "") =>
  `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const navLinks = [
  { href: "#paket", label: "Paket & Pricelist", icon: "tag" },
  { href: "#gaya-visual", label: "Gaya Visual", icon: "palette" },
  { href: "#alur", label: "Alur Pemesanan", icon: "split" },
  { href: "#syarat", label: "Syarat & Ketentuan", icon: "gavel" },
  { href: "#kampus", label: "Kampus & Kota", icon: "graduation" },
] as const;

/* ---------- Paket ---------- */

export type PackageCategory = "foto" | "video" | "event";

export const categories: { id: PackageCategory; label: string; icon: string }[] = [
  { id: "foto", label: "Fotografi Wisuda", icon: "camera" },
  { id: "video", label: "Videografi Wisuda", icon: "video" },
  { id: "event", label: "Event & Himpunan", icon: "sparkles" },
];

export type PackageFeature = {
  icon: "user" | "clock" | "image" | "users" | "drive" | "film";
  lead: string;
  rest?: string;
};

export type PhotoPackage = {
  id: string;
  category: PackageCategory;
  name: string;
  description: string;
  price: number;
  normalPrice: number;
  popular?: boolean;
  features: PackageFeature[];
};

/**
 * Hanya tiga kartu paket yang terlihat di Figma (kartu lain terpotong oleh
 * area geser horizontal). Tambahkan paket lain di sini.
 */
export const packages: PhotoPackage[] = [
  {
    id: "sekejap",
    category: "foto",
    name: "Sekejap",
    description:
      "Sesi wisuda outdoor ringkas, fokus pada momen personal dan potret terbaik.",
    price: 329_000,
    normalPrice: 350_000,
    features: [
      { icon: "user", lead: "1 Graduate", rest: " (Wisudawan Utama)" },
      { icon: "clock", lead: "Durasi 60 Menit", rest: " Sesi Outdoor" },
      { icon: "image", lead: "15 Foto Edit", rest: " High-Resolution" },
      { icon: "users", lead: "Unlimited People", rest: " (Friends & Family)" },
      { icon: "drive", lead: "All Raw Photos", rest: " via Google Drive" },
    ],
  },
  {
    id: "sejenak",
    category: "foto",
    name: "Sejenak",
    description:
      "Sesi lebih leluasa untuk eksplor banyak spot kampus bersama teman dan keluarga besar.",
    price: 429_000,
    normalPrice: 450_000,
    popular: true,
    features: [
      { icon: "user", lead: "1 Graduate", rest: " (Wisudawan Utama)" },
      { icon: "clock", lead: "Durasi 90 Menit", rest: " (Lebih Leluasa & Santai)" },
      { icon: "image", lead: "25 Foto Edit", rest: " High-Resolution" },
      { icon: "users", lead: "Unlimited People", rest: " (Friends & Family)" },
      { icon: "drive", lead: "All Raw Photos", rest: " via Google Drive" },
    ],
  },
  {
    id: "sekejap-video",
    category: "video",
    name: "Sekejap (Video)",
    description:
      "Video reels singkat yang estetik dan siap tayang untuk Instagram Reels & TikTok.",
    price: 250_000,
    normalPrice: 350_000,
    features: [
      { icon: "user", lead: "1 Graduate", rest: " (Wisudawan Utama)" },
      { icon: "clock", lead: "Durasi 30 Menit", rest: " Sesi Outdoor" },
      { icon: "film", lead: "1 Video Edit", rest: " (Portrait/Landscape) 30 Detik" },
      { icon: "drive", lead: "All Raw Photo & Video Footage", rest: " Google Drive" },
      { icon: "users", lead: "Unlimited People", rest: " (Friends & Family) + Spot" },
    ],
  },
];

export const catalogPerks = [
  {
    icon: "users",
    lead: "Unlimited People:",
    text: "Boleh ajak sahabat circle, pasangan & keluarga tanpa biaya ekstra.",
  },
  {
    icon: "spot",
    lead: "Unlimited Spot & Shoot:",
    text: "Eksplor seluruh spot ikonik kampus selama durasi.",
  },
  {
    icon: "drive",
    lead: "Google Drive Privat:",
    text: "High-res archive tersimpan aman hingga 1 tahun.",
  },
] as const;

/* ---------- Gaya visual ---------- */

export const visualStyles = [
  {
    image: "styleNatural",
    badge: "Natural Sunlit",
    badgeTone: "light",
    kicker: "Signature Style",
    icon: "sun",
    title: "Light & Natural",
    text: "Cerah, hangat, dan natural dengan sentuhan golden hour khas kampus. Menghadirkan warna kulit yang segar serta ambience dedaunan yang lembut.",
    suited: "Cocok untuk: Sesi Solo & Couple Pagi/Sore",
    mood: "Warm Tones",
  },
  {
    image: "styleStrobist",
    badge: "High Contrast & Sharp",
    badgeTone: "dark",
    kicker: "Dramatic Outdoor",
    icon: "zap",
    title: "Strobist",
    text: "Pencahayaan dramatis layaknya studio di area outdoor dengan teknik lampu kilat terarah, tajam, dan memisahkan subjek secara elegan dari latar belakang.",
    suited: "Cocok untuk: Editorial Toga & Gedung Landmark",
    mood: "Crisp & Punchy",
  },
  {
    image: "styleCandid",
    badge: "Pure Emotion",
    badgeTone: "light",
    kicker: "Genuine Moments",
    icon: "heart",
    title: "Candid & Storytelling",
    text: "Menangkap momen kebahagiaan, tawa spontan, ekspresi natural, dan interaksi emosional bersama sahabat seperjuangan dan orang tua tanpa pose kaku.",
    suited: "Cocok untuk: Sahabat Circle & Pelukan Keluarga",
    mood: "Emotional Memory",
  },
] as const;

/* ---------- Fotografer ---------- */

export type SlotState = { kind: "open"; count: number } | { kind: "low"; left: number };

export type Photographer = {
  id: string;
  name: string;
  role: string;
  tag: string;
  tagTone: "moss" | "dark" | "light";
  rating: string;
  clients: string;
  description: string;
  morning: SlotState;
  evening: SlotState;
  /** Label gaya visual yang dipakai di formulir booking. */
  visual: string;
};

export const photographers: Photographer[] = [
  {
    id: "dimas",
    name: "Kak Dimas K.",
    role: "Lead Outdoor",
    tag: "Warm & Natural",
    tagTone: "moss",
    rating: "4.9",
    clients: "420+",
    description:
      "Spesialisasi tone hangat, pencahayaan alami kampus pagi, dan framing arsitektur kampus estetis.",
    morning: { kind: "open", count: 2 },
    evening: { kind: "low", left: 1 },
    visual: "Light & Natural",
  },
  {
    id: "aris",
    name: "Kak Aris R.",
    role: "Flash Specialist",
    tag: "Strobist Editorial",
    tagTone: "dark",
    rating: "4.9",
    clients: "380+",
    description:
      "Pencahayaan flash studio di outdoor, hasil tajam, punchy, memisahkan toga secara elegan dari background.",
    morning: { kind: "open", count: 3 },
    evening: { kind: "open", count: 2 },
    visual: "Strobist Editorial",
  },
  {
    id: "nanda",
    name: "Kak Nanda V.",
    role: "Storyteller",
    tag: "Candid & Cinematic",
    tagTone: "light",
    rating: "5.0",
    clients: "310+",
    description:
      "Menangkap tawa spontan, gesture kehangatan orang tua, dan video reels sinematik micro-story.",
    morning: { kind: "low", left: 1 },
    evening: { kind: "open", count: 3 },
    visual: "Candid & Cinematic",
  },
];

export const sessions = [
  "Pagi Golden Hour (07.00 - 09.00 WIB) - Cahaya Lembut",
  "Sore Golden Hour (15.30 - 17.30 WIB)",
];

/* ---------- Alur pemesanan ---------- */

export const orderSteps = [
  {
    no: "01",
    title: "Pilih Paket",
    text: [
      "Tentukan paket yang diinginkan: ",
      ["Sekejap"],
      ", ",
      ["Sejenak"],
      ", atau dokumentasi ",
      ["Event"],
      ".",
    ],
    foot: "Sesuai Kebutuhan",
    icon: "checklist",
  },
  {
    no: "02",
    title: "Hubungi Admin",
    text: [
      "Hubungi admin melalui ",
      ["WhatsApp"],
      " untuk cek ketersediaan slot tanggal dan jam sesi kampus Anda.",
    ],
    foot: "Fast Response WA",
    icon: "message",
  },
  {
    no: "03",
    title: "Pembayaran DP",
    text: [
      "Lakukan DP sebesar ",
      ["Rp 100.000"],
      " melalui admin WhatsApp untuk mengunci jadwal (fix booking).",
    ],
    foot: "Slot Terkunci Aman",
    icon: "lock",
  },
  {
    no: "04",
    title: "Konfirmasi Jadwal",
    text: [
      "Konfirmasi jadwal dan titik kumpul sesi on-location bersama fotografer & admin Seraye.",
    ],
    foot: "Briefing Lokasi",
    icon: "calendar",
  },
  {
    no: "05",
    title: "Pengiriman Hasil",
    text: [
      "Hasil foto & video dikirim via link WhatsApp privat: ",
      ["H+3 Highlight + Raw"],
      ", dan ",
      ["H+7 Full Edited"],
      ".",
    ],
    foot: "Google Drive 1 Tahun",
    icon: "cloud",
  },
] as const;

/* ---------- Syarat & ketentuan ---------- */

type Rich = readonly (string | readonly [string])[];

export const terms: {
  icon: string;
  title: string;
  body: Rich[];
  foot: string;
  footTone: "rose" | "moss" | "ink";
}[] = [
  {
    icon: "banknote",
    title: "DP (Booking Fee)",
    body: [
      [
        "Uang muka (DP) sebesar ",
        ["Rp 100.000"],
        " diperlukan untuk mengunci jadwal (fix booking). DP bersifat ",
        ["non-refundable"],
        " (tidak dapat dikembalikan atau hangus jika dibatalkan oleh pihak klien).",
      ],
    ],
    foot: "Non-Refundable • Fix Booking",
    footTone: "rose",
  },
  {
    icon: "calendarCheck",
    title: "Pelunasan H-1",
    body: [
      [
        "Pelunasan sisa biaya paket wajib diselesaikan selambat-lambatnya ",
        ["H-1 (satu hari sebelum sesi dimulai)"],
        " melalui konfirmasi transfer rekening resmi yang diberikan admin.",
      ],
    ],
    foot: "Maksimal H-1 Sesi Foto",
    footTone: "moss",
  },
  {
    icon: "history",
    title: "Kebijakan Reschedule",
    body: [
      [
        "Perubahan jadwal (reschedule) hanya diperbolehkan ",
        ["maksimal 1 kali"],
        ", dengan konfirmasi minimal ",
        ["H-3 (tiga hari sebelum sesi)"],
        " dan tergantung ketersediaan slot fotografer.",
      ],
    ],
    foot: "Maks. 1× • Konfirmasi Min. H-3",
    footTone: "ink",
  },
  {
    icon: "hourglass",
    title: "Ketentuan Keterlambatan",
    body: [
      [
        "Keterlambatan dari pihak klien yang melebihi ",
        ["15 menit"],
        " dari jam janjian akan ",
        ["memotong total durasi sesi"],
        " yang tersisa demi menjaga jadwal klien wisuda berikutnya.",
      ],
    ],
    foot: "Toleransi 15 Menit Awal",
    footTone: "rose",
  },
  {
    icon: "truck",
    title: "Estimasi Pengiriman Hasil",
    body: [
      [
        "• ",
        ["H+3:"],
        " Pengiriman 5 foto highlight + seluruh Raw file via Google Drive privat.",
      ],
      [
        "• ",
        ["H+7:"],
        " Pengiriman sisa seluruh hasil editan resolusi penuh + bonus video/recap.",
      ],
    ],
    foot: "H+3 Highlight • H+7 Full Edit",
    footTone: "moss",
  },
  {
    icon: "gavel",
    title: "Add-On & Hak Cipta",
    body: [
      ["• ", ["Add-On Foto Edit:"], " Rp 10.000 / foto tambahan."],
      [
        "• ",
        ["Hak Publikasi:"],
        " Seraye berhak menggunakan karya untuk portofolio & promosi.",
      ],
      [
        "• ",
        ["Persetujuan:"],
        " Pembayaran DP dianggap sebagai persetujuan penuh atas seluruh ketentuan di atas.",
      ],
    ],
    foot: "DP = Persetujuan Resmi S&K",
    footTone: "ink",
  },
];

/* ---------- Kampus ---------- */

export const campuses = [
  { image: "campusBandung", city: "Bandung", note: "Tel-U & ITB Ganesha", tone: "from-[#5E7A5A] to-[#26382A]" },
  { image: "campusJakarta", city: "Jakarta & Depok", note: "Universitas Indonesia", tone: "from-[#6C8A7C] to-[#2A3F37]" },
  { image: "campusJatinangor", city: "Jatinangor", note: "Unpad & ITB Jatinangor", tone: "from-[#7E8F62] to-[#34422A]" },
  { image: "campusYogyakarta", city: "Yogyakarta", note: "UGM Bulaksumur", tone: "from-[#8A8466] to-[#3C3A28]" },
] as const;

export const campusOptions = [
  "Telkom University (Bandung)",
  "ITB Ganesha (Bandung)",
  "Universitas Indonesia (Depok)",
  "Unpad & ITB Jatinangor",
  "UGM Bulaksumur (Yogyakarta)",
];

/* ---------- Footer ---------- */

export const footerColumns = [
  {
    title: "Katalog & Informasi",
    items: [
      "Paket Foto Sekejap & Sejenak",
      "Paket Video Reels & Sinematik",
      "Dokumentasi Event Semarak & Seremoni",
      "Gaya Visual (Light, Strobist, Candid)",
      "5 Langkah Pemesanan WhatsApp",
    ],
  },
  {
    title: "Titik Temu Kampus",
    items: ["Telkom University (Gedung TULT & Danau Galau)"],
  },
  {
    title: "Syarat & Ketentuan",
    items: [
      "Ketentuan DP Rp 100.000",
      "Pelunasan H-1 Sesi",
      "Kebijakan Reschedule H-3",
      "Toleransi Keterlambatan 15 Menit",
      "Estimasi H+3 & H+7",
    ],
  },
] as const;
