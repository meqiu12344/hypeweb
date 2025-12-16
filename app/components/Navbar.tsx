"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#uslugi", label: "Usługi" },
    { href: "#proces", label: "Proces" },
    { href: "#onasna", label: "O nas" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-backdrop-filter:bg-black/30">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center" aria-label="hypeweb strona główna">
          <span className="sr-only">hypeweb</span>
          <div className="relative h-15 w-28">
            <Image src="/logo.png" alt="hypeweb logo" fill className="object-contain" sizes="1250px" />
          </div>
        </a>

        <nav className="hidden sm:flex items-center gap-2 text-sm" aria-label="Główna nawigacja">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-full border border-transparent text-white/80 hover:text-white hover:border-white/15 hover:bg-white/5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 transition"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-4 w-5">
            <span
              className={`absolute inset-x-0 top-0 h-0.5 bg-white transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`absolute inset-x-0 top-1.5 h-0.5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute inset-x-0 top-3 h-0.5 bg-white transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="sm:hidden border-t border-white/10 bg-black/70 backdrop-blur">
          <div className="container py-4 flex flex-col gap-3 text-sm" aria-label="Menu mobilne">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 rounded-lg px-2 text-white/90 hover:text-cyan-200 hover:bg-white/5 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="btn btn-primary text-center"
              onClick={() => setOpen(false)}
            >
              Wyceń projekt
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
