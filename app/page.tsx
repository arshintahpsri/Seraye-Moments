import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Eye,
  Handshake,
  Heart,
  HandHeart,
  Quote,
  Star,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import Photo from "@/components/Photo";
import PhotoBoothForm from "@/components/PhotoBoothForm";

const pillars = [
  {
    tag: "Pillar 01",
    tagClass: "bg-mint text-moss-dark",
    icon: BadgeCheck,
    iconClass: "text-moss-dark",
    title: "Business",
    sub: "Professional & Sustainable Profit",
    subClass: "text-rose",
    body: "Membangun ekosistem kreatif yang sehat dan transparan. Kami memberlakukan pembagian kompensasi yang adil bagi seluruh fotografer muda serta menjaga standar layanan prima tanpa kompromi estetika.",
    points: ["Standar Etika Kontrak & Royalti", "Hasil Kurasi Bergaransi Kualitas"],
    pointClass: "text-moss-dark",
  },
  {
    tag: "Pillar 02",
    tagClass: "bg-rose-soft text-rose",
    icon: UsersRound,
    iconClass: "text-rose",
    title: "Community",
    sub: "Education & Mentorship",
    subClass: "text-moss-dark",
    body: "Ruang tumbuh bagi mahasiswa dan talenta visual muda. Melalui workshop teknis, bedah portofolio terbuka, dan bimbingan lapangan berkala untuk mencetak generasi pencerita visual masa depan.",
    points: ["Seraye Academy Lab Mingguan", "Open Portfolio Review Gratis"],
    pointClass: "text-rose",
  },
  {
    tag: "Pillar 03",
    tagClass: "bg-honey text-honey-dark",
    icon: HandHeart,
    iconClass: "text-honey-dark",
    title: "Humanity",
    sub: "Empathy & Social Impact",
    subClass: "text-honey-dark",
    body: "Dedikasi tulus bagi sesama. Dokumentasi cuma-cuma untuk panti asuhan, lembaga nirlaba independen, dan gerakan kerelawanan komunitas yang membutuhkan arsip visual bermartabat.",
    points: ["100% Pro Bono untuk Yayasan", "Alokasi 5% Laba untuk Inisiatif Sosial"],
    pointClass: "text-honey-dark",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section id="portfolio" className="container-page grid items-center gap-12 pb-24 pt-20 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="badge bg-rose-soft text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-rose" />
            Karna setiap momen patut dirayakan
          </span>
          <h1 className="mt-8 text-5xl font-bold leading-[1.1] md:text-[64px]">
            Every Moment Has a Story.
            <span className="block font-normal italic text-moss-dark">
              Let Us Capture Yours.
            </span>
          </h1>
          <p className="mt-6 max-w-[540px] text-[17px] leading-relaxed text-ink/90">
            Mengabadikan momen wisuda, perayaan, dan berbagai cerita berharga
            melalui fotografi dan videografi yang dibuat dengan rasa, kejujuran
            visual, serta kehangatan abadi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/booking" className="btn-primary !px-6">
              Book Your Moment <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-soft !px-6">
              Lihat Portfolio <Eye size={16} />
            </Link>
          </div>

          <div className="mt-12 grid max-w-[560px] grid-cols-3 gap-4 rounded-xl bg-white/80 p-6 shadow-card">
            {[
              { value: "1,200+", label: "Kisah Terabadikan", color: "text-moss-dark" },
              { value: "100%", label: "Dibuat dengan Hati", color: "text-rose" },
              { value: "4.9/5", label: "Rating Mahasiswa", color: "text-honey-dark", star: true },
            ].map((stat) => (
              <div key={stat.label}>
                <p className={`font-serif text-[22px] font-bold ${stat.color}`}>
                  {stat.value}
                  {stat.star && <Star className="ml-1 inline fill-current" size={16} />}
                </p>
                <p className="mt-1 font-label text-[10px] font-semibold uppercase tracking-wide text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative pb-10">
          <div className="card p-4">
            <div className="relative overflow-hidden rounded-lg">
              <Photo
                name="heroGraduation"
                alt="Dua wisudawati tertawa membawa buket bunga"
                className="aspect-[4/5] w-full"
              />
              <span className="badge absolute left-3 top-3 bg-cream/95 text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-moss" />
                Editorial Series
              </span>
            </div>
            <div className="flex items-center justify-between px-2 pb-1 pt-5">
              <p className="min-w-0 flex-1 pl-[200px] font-serif text-[16px] font-bold">
                Golden Hour — 35mm Warm Tone
              </p>
              <span className="badge shrink-0 whitespace-nowrap rounded bg-mint text-moss-dark">
                Jakarta, 2024
              </span>
            </div>
          </div>

          <div className="absolute -bottom-2 left-[-24px] w-[220px] -rotate-3 rounded-md bg-white p-3 shadow-lift">
            <span className="badge rounded bg-honey text-ink">Keepsake No. 12</span>
            <Photo
              name="keepsakePolaroid"
              alt="Tangan menerima gulungan ijazah berpita emas"
              className="mt-2 aspect-[4/3] w-full rounded-sm"
            />
            <p className="mt-2 text-[10px] font-semibold">Graduation Day — Sarah Jenkins</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-serif text-[11px] italic">“Tangible Memories”</span>
              <Heart size={13} />
            </div>
          </div>
        </div>
      </section>

      {/* Tiga Pilar */}
      <section id="pilar" className="bg-sand py-24">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-6 bg-moss-dark" /> Filosofi &amp; Prinsip Studio
              </p>
              <h2 className="mt-3 text-4xl font-bold md:text-[42px]">
                Pondasi Kami — Tiga Pilar Seraye
              </h2>
            </div>
            <p className="max-w-[450px] text-[14px] leading-relaxed text-muted">
              Menyeimbangkan komitmen profesional, edukasi komunitas, serta
              kebaikan sosial demi ekosistem visual Indonesia yang inklusif dan
              bermartabat.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="card flex flex-col p-10">
                  <div className="flex items-center justify-between">
                    <span className={`badge rounded ${pillar.tagClass}`}>{pillar.tag}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-sand">
                      <Icon size={20} className={pillar.iconClass} />
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-bold">{pillar.title}</h3>
                  <p className={`mt-2 font-label text-[10px] font-semibold uppercase tracking-wide ${pillar.subClass}`}>
                    {pillar.sub}
                  </p>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/90">{pillar.body}</p>
                  <ul className="mt-8 space-y-3 text-[13px]">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5">
                        <CheckCircle2 size={16} className={pillar.pointClass} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Banner inisiatif */}
      <section className="container-page grid gap-6 py-24 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-xl bg-moss p-12 text-white shadow-card">
          <div className="absolute right-0 top-0 h-32 w-28 rounded-bl-3xl bg-white/10" />
          <div className="absolute bottom-0 right-0 h-48 w-52 rounded-tl-3xl bg-white/10" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="badge bg-moss-dark text-white">Inisiatif Sosial</span>
              <span className="flex items-center gap-1.5 font-label text-[10px] font-medium uppercase tracking-wide">
                <span className="h-1.5 w-1.5 rounded-full bg-honey" /> Open Submission
              </span>
            </div>
            <h2 className="mt-8 max-w-[440px] text-[32px] font-medium leading-tight">
              Seraye for Humanity: Dokumentasi Gratis untuk Kebaikan
            </h2>
            <p className="mt-5 max-w-[480px] text-[15px] leading-relaxed text-white/85">
              Apakah Anda mengelola yayasan panti asuhan, aksi lingkungan, atau
              inisiatif sosial yang membutuhkan bantuan dokumentasi video dan
              foto berkualitas untuk laporan dan donatur? Kami siap hadir tanpa
              pungutan biaya.
            </p>
            <div className="mt-6 flex items-center gap-4 rounded-lg bg-moss-dark/50 p-4 text-[13px]">
              <Handshake className="shrink-0 text-honey" size={26} />
              Setiap bulan kami memilih hingga 3 inisiatif sosial di wilayah
              Jabodetabek &amp; Bandung.
            </div>
            <div className="mt-10 flex flex-col items-start gap-5">
              <button type="button" className="btn-light !px-6">
                Ajukan Kegiatan <HandHeart size={16} />
              </button>
              <button type="button" className="px-2 font-label text-[12px] font-semibold uppercase tracking-wide">
                Pelajari Pedoman Proposal
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-sand p-12 shadow-card">
          <div className="flex items-center justify-between">
            <span className="badge bg-rose text-white">Coming Soon</span>
            <span className="font-label text-[10px] font-semibold uppercase tracking-wide">
              Q3 2025 Edition
            </span>
          </div>
          <h2 className="mt-8 text-[32px] font-medium leading-tight">Seraye Modular Photo Booth</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            Menghadirkan studio cetak instan bergaya editorial di pesta wisuda,
            pernikahan intimate, dan perayaan personal Anda. Pencahayaan lembut
            khas Seraye dengan frame fisik eksklusif.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {(["photoBoothStrip1", "photoBoothStrip2", "photoBoothStrip3"] as const).map(
              (key, index) => (
                <div
                  key={key}
                  className={`rounded-md bg-white p-1.5 shadow-card ${
                    index === 1 ? "-rotate-1" : index === 2 ? "rotate-1" : "-rotate-1"
                  }`}
                >
                  <Photo name={key} alt={`Contoh cetak photo booth ${index + 1}`} className="aspect-[3/4] w-full rounded-sm" />
                </div>
              ),
            )}
          </div>
          <PhotoBoothForm />
        </div>
      </section>

      {/* Kutipan */}
      <section className="bg-stone/70 py-24">
        <div className="container-page text-center">
          <Quote className="mx-auto fill-current text-moss-dark" size={22} aria-hidden />
          <blockquote className="mx-auto mt-4 max-w-[760px] font-serif text-[30px] italic leading-snug">
            “Fotografi bagi kami bukan sekadar membekukan waktu, melainkan
            merawat kehangatan agar selalu dapat dirasakan kembali bertahun-tahun
            nanti.”
          </blockquote>
          <p className="mt-6 font-label text-[11px] font-semibold uppercase tracking-widest">
            — Seraye Moments Collective Journal, Jakarta
          </p>
        </div>
      </section>
    </>
  );
}
