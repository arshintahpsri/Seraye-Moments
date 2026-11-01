import { Camera } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[520px] items-center overflow-hidden bg-forest lg:min-h-[690px]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[60%_30%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#10200d]/90 via-[#10200d]/80 to-[#10200d]/75" />

      <div className="container-page relative py-16 sm:py-24">
        <h1
          id="hero-title"
          className="max-w-[640px] font-times text-[40px] font-bold leading-[1.05] tracking-[-0.02em] !text-white sm:text-[56px]"
        >
          Capture the moments worth keeping.
        </h1>
        <p className="mt-5 max-w-[560px] text-[16px] leading-7 text-white/90 sm:text-[18px]">
          Dari perayaan kelulusan sarjana, tawa spontan bareng sahabat, hingga
          kehangatan keluarga. Nikmati dokumentasi on-location beresolusi
          tinggi dengan pengiriman digital cepat.
        </p>
        <a
          href="#paket"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-moss px-6 py-3 text-[14px] font-semibold text-white shadow-lift ring-1 ring-white/20 transition hover:bg-moss-dark"
        >
          <Camera aria-hidden className="h-4 w-4" />
          Lihat Paket &amp; Pricelist
        </a>
      </div>
    </section>
  );
}
