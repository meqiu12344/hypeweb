const ProcessIcon = ({ number }: { number: number }) => {
  const icons = [
    // Analiza - magnifying glass
    <svg key="0" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
      <circle cx="11" cy="11" r="5" fill="currentColor" opacity="0.1" />
    </svg>,
    // Projekt - palette
    <svg key="1" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="8" cy="8" r="1.5" fill="currentColor" />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      <circle cx="12" cy="18" r="1.5" fill="currentColor" />
    </svg>,
    // Wdrożenie - code
    <svg key="2" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <path d="M14.5 4l-5 16" />
    </svg>,
    // Optymalizacja - trending up
    <svg key="3" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>,
  ];
  return icons[number - 1];
};

export default function Process() {
  const steps = [
    { s: '1', t: 'Analiza', d: 'Odkrywamy cele biznesowe, grupę docelową, konkurencję i zakres projektu.' },
    { s: '2', t: 'Projekt', d: 'Tworzymy makiety, design system i prototypy w iteracjach ze zwrotną informacją.' },
    { s: '3', t: 'Wdrożenie', d: 'Responsywny kod, integracje z CMS, API, hosting i testy zapewniające jakość.' },
    { s: '4', t: 'Optymalizacja', d: 'SEO, wydajność, monitoring, wsparcie i ciągły rozwój aplikacji.' },
  ];

  return (
    <section id="proces" className="relative py-24 bg-slate-950 text-white">
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-indigo-500/30 text-indigo-300 bg-indigo-500/10">
            Proces pracy
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-violet-400 to-indigo-300">
            Jak pracujemy
          </h2>
          <p className="mt-3 text-slate-300">Cztery dobrze zdefiniowane etapy, które prowadzą od koncepcji do doskonałego wdrożenia i ciągłego wsparcia.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((it, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur supports-backdrop-filter hover:shadow-2xl hover:shadow-indigo-500/20 transition-transform duration-300 hover:-translate-y-1 p-8 flex flex-col"
            >
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl group-hover:scale-125 transition-transform duration-500" />
              
              <div className="relative z-10 flex flex-col grow">
                <div className="mb-4 inline-flex items-center gap-2 w-fit px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Etap {it.s}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors duration-300 mb-3">
                  {it.t}
                </h3>
                
                <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed mb-4 grow">
                  {it.d}
                </p>

                <div className="mt-4 h-1 w-0 bg-linear-to-r from-indigo-500 to-violet-500 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
