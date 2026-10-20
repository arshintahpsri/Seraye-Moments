"use client";

import { MessageSquareText, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services & Packages" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#pilar", label: "About & Pillars" },
  { href: "/client-portal", label: "Client Portal" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-cream/95 backdrop-blur">
      <div className="container-page flex items-center justify-between gap-6 py-3">
        <Link href="/" className="shrink-0 leading-tight">
          <span className="block font-serif text-[22px] font-bold">
            Seraye Moments
          </span>
          <span className="block max-w-[150px] font-sans text-[10px] uppercase tracking-wide text-muted">
            Karna setiap momen patut dirayakan
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = link.href === pathname;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-4 py-2 text-center text-[14px] font-medium leading-tight transition ${
                  active
                    ? "bg-moss text-white"
                    : "text-ink hover:bg-stone"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/6281234567890"
            className="hidden items-center gap-2 font-label text-[11px] font-semibold uppercase tracking-wide md:flex"
          >
            <MessageSquareText size={15} />
            WhatsApp
          </a>
          <Link href="/booking" className="btn-primary hidden !py-2.5 sm:inline-flex">
            Book Your
            <br className="hidden xl:block" /> Moment
          </Link>
          <Link
            href="/client-portal"
            aria-label="Akun klien"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-moss text-white"
          >
            <User size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
