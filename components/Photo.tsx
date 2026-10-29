import { images, type ImageKey } from "@/lib/images";

type PhotoProps = {
  name: ImageKey;
  alt: string;
  className?: string;
  /** Kelas gradien untuk placeholder bila foto belum diisi di lib/images.ts. */
  fallback?: string;
};

/**
 * Menampilkan foto dari /public/images bila sudah diisi di lib/images.ts.
 * Jika belum, tampil blok gradien sebagai placeholder.
 */
export default function Photo({
  name,
  alt,
  className = "",
  fallback = "from-[#C9A878] via-[#8A7456] to-[#4B4A3A]",
}: PhotoProps) {
  const src = images[name];

  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`object-cover ${className}`} />;
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`bg-gradient-to-br ${fallback} ${className}`}
    />
  );
}
