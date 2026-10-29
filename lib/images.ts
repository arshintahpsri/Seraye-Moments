/**
 * Peta gambar desain (diekspor dari Figma ke `public/images`).
 * Ganti nilainya dengan `null` untuk kembali ke placeholder gradien.
 */
export const images = {
  styleNatural: "/images/style-natural.jpg",
  styleStrobist: "/images/style-strobist.jpg",
  styleCandid: "/images/style-candid.jpg",
  campusBandung: "/images/campus-bandung.jpg",
  campusJakarta: "/images/campus-jakarta.jpg",
  campusJatinangor: "/images/campus-jatinangor.jpg",
  campusYogyakarta: "/images/campus-yogyakarta.jpg",
} as const satisfies Record<string, string | null>;

export type ImageKey = keyof typeof images;
