export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-page/90 backdrop-blur">
      <div className="container-page flex items-center justify-between gap-4 py-2">
        <a href="#" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="" className="h-10 w-auto" />
          <span className="whitespace-nowrap font-serif text-[18px] font-medium tracking-[-0.03em] text-brand sm:text-[26px]">
            Seraye Moments
          </span>
        </a>

        <nav className="flex items-center gap-5 sm:gap-8" aria-label="Navigasi utama">
          <a
            href="#portofolio"
            className="hidden text-[14px] text-body transition hover:text-forest sm:block"
          >
            Portofolio
          </a>
          <a
            href="#paket"
            className="hidden text-[14px] text-body transition hover:text-forest sm:block"
          >
            Paket
          </a>
          <a
            href="#booking"
            className="whitespace-nowrap rounded-[10px] bg-forest px-3 py-2 text-[12px] font-semibold text-white shadow-sm transition hover:bg-forest/90 sm:px-6 sm:text-[14px]"
          >
            Book Your Moment
          </a>
        </nav>
      </div>
    </header>
  );
}
