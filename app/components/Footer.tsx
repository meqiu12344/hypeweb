import Image from "next/image";

export default function Footer() {
  return (
    <footer className="section relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-linear-to-br from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute -right-16 bottom-0 w-64 h-64 bg-linear-to-tr from-purple-500/15 to-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_45%)]" />
      </div>

      <div className="container relative z-10 border-t border-white/10 pt-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="relative overflow-hidden rounded-lg px-2 py-1 flex items-center justify-center">
                <Image src="/logo.png" alt="hypeweb" width={150} height={75} className="object-contain" />
              </div>
              <span className="text-xs text-white/60">{new Date().getFullYear()}</span>
            </div>
            <p className="text-lg font-semibold bg-linear-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Tworzymy cyfrowe produkty, które robią wrażenie i dowożą wyniki biznesowe.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-white/70">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Gwarancja</span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Estetyka</span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">Doświadczenie</span>
            </div>
          </div>

          {/* Szybkie linki */}
          <div>
            <p className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-3">Nawigacja</p>
            <div className="grid gap-2 text-sm text-white/70">
              <a href="#uslugi" className="hover:text-cyan-200 transition-colors">Usługi</a>
              <a href="#proces" className="hover:text-cyan-200 transition-colors">Proces</a>
              <a href="#onasna" className="hover:text-cyan-200 transition-colors">O nas</a>
              <a href="#kontakt" className="hover:text-cyan-200 transition-colors">Kontakt</a>
              <a href="/polityka-prywatnosci" className="hover:text-cyan-200 transition-colors">Polityka prywatności</a>
              <a href="/regulamin" className="hover:text-cyan-200 transition-colors">Regulamin</a>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-3">Kontakt</p>
            <div className="space-y-2 text-sm text-white/70">
              <a href="mailto:hello@hypeweb.space" className="block hover:text-cyan-200 transition-colors">hello@hypeweb.space</a>
              <a href="tel:+48500111222" className="block hover:text-cyan-200 transition-colors">+48 500 111 222</a>
              <a href="tel:+48730496403" className="block hover:text-cyan-200 transition-colors">+48 730 496 403</a>
              <p className="text-white/50">Pon–Pt: 9:00–17:00</p>
            </div>
            <div className="mt-4 flex gap-3 text-lg text-white/70">
              <span aria-hidden>↗</span>
              <span aria-hidden>✉</span>
              <span aria-hidden>★</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-white/50">
          <span>© {new Date().getFullYear()} hypeweb. Wszystkie prawa zastrzeżone.</span>
          <span>Bez kompromisów dla wydajności, dostępności i SEO.</span>
        </div>
      </div>
    </footer>
  );
}
