"use client";

import { Menu, MessageSquareText, QrCode, X } from "lucide-react";
import { useState } from "react";
import { navLinks, waLink } from "@/lib/data";
import { Icon } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-page flex items-center justify-between gap-6 py-3">
        <a href="#" className="shrink-0">
          <span className="block text-[22px] font-extrabold uppercase leading-none tracking-tight text-ink sm:text-[26px]">
            Seraye Moments
          </span>
          <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.5px] text-moss sm:block">
            Dokumentasi Wisuda Outdoor & Event Digital
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navigasi utama">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex items-center gap-1.5 text-[14px] font-medium leading-tight text-ink transition hover:text-moss"
            >
              <Icon name={l.icon} className="h-4 w-4 text-moss" />
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#booking" className="btn-outline px-3.5 py-2 text-[12px]">
            <QrCode aria-hidden className="h-4 w-4" />
            Cek Kode Pesanan
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="btn-wa px-5 py-2.5 text-[13px]"
          >
            <MessageSquareText aria-hidden className="h-4 w-4" />
            Chat WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="rounded-full border border-line p-2 text-ink md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white md:hidden">
          <nav className="container-page flex flex-col gap-1 py-3" aria-label="Navigasi seluler">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg px-2 py-2.5 text-[14px] font-medium text-ink hover:bg-tint"
              >
                <Icon name={l.icon} className="h-4 w-4 text-moss" />
                {l.label}
              </a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-wa mt-2"
            >
              <MessageSquareText aria-hidden className="h-4 w-4" />
              Chat WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
