import { galleryRows } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="portofolio" className="py-14 sm:py-16">
      <div className="container-page">
        <p className="eyebrow">Visual Archive</p>
        <h2 className="section-title mt-1">Moments Worth Remembering</h2>
      </div>

      <div className="container-page mt-8 space-y-5">
        {galleryRows.map((row, i) => (
          <div
            key={i}
            className="rail -mx-4 flex gap-5 overflow-x-auto px-4 sm:mx-0 sm:px-0"
            role="group"
            aria-label={`Galeri foto baris ${i + 1}`}
          >
            {row.map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={p.src}
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={p.w}
                height={p.h}
                style={{ width: p.w, height: p.h }}
                className="shrink-0 rounded-xl object-cover"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
