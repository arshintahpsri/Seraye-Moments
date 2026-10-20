/**
 * Peta gambar desain (diekspor dari Figma ke `public/images`).
 * Ganti nilainya dengan `null` untuk kembali ke placeholder gradien.
 */
export const images = {
  heroGraduation: "/images/hero-graduation.jpg",
  keepsakePolaroid: "/images/keepsake-polaroid.jpg",
  photoBoothStrip1: "/images/photobooth-strip-1.jpg",
  photoBoothStrip2: "/images/photobooth-strip-2.jpg",
  photoBoothStrip3: "/images/photobooth-strip-3.jpg",
  serviceWisuda: "/images/service-wisuda.jpg",
  serviceEvent: "/images/service-event.jpg",
  invoiceLocation: "/images/invoice-location.jpg",
  bookingPackageThumb: "/images/booking-package-thumb.jpg",
  leadPhotographer: "/images/lead-photographer.jpg",
} as const satisfies Record<string, string | null>;

export type ImageKey = keyof typeof images;
