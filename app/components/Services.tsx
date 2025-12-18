const ServiceIcon = ({ type }: { type: number }) => {
  const icons = [
    // UX/UI
    <svg key="0" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="12" cy="9" r="2" />
      <path d="M6 15c1-1 2.5-2 6-2s5 1 6 2" />
    </svg>,
    // Development
    <svg key="1" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>,
    // SEO & Performance
    <svg key="2" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 16 14" />
    </svg>,
    // Support
    <svg key="3" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <circle cx="9" cy="10" r="1" />
      <circle cx="12" cy="10" r="1" />
      <circle cx="15" cy="10" r="1" />
    </svg>,
  ];
  return icons[type];
};

const ServiceCard = ({ title, desc, number, icon }: { title: string; desc: string; number: number; icon: number }) => (
  <div className="group relative h-full p-6 rounded-2xl border border-slate-700/50 bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
    {/* Animated gradient background on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
      background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1))'
    }} />
    
    {/* Animated background blur orb */}
    <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-linear-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
    
    {/* Content */}
    <div className="relative z-10">
      {/* Icon container with gradient */}
      <div className="relative mb-4 inline-flex">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
          style={{
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
            boxShadow: '0 8px 24px rgba(34, 211, 238, 0.2)',
          }}
        >
          <ServiceIcon type={icon} />
        </div>
        {/* <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-xs font-bold text-slate-900">
          {number}
        </div> */}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
        {desc}
      </p>

      {/* Bottom accent bar */}
      <div className="mt-4 h-1 w-0 bg-linear-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-500" />
    </div>
  </div>
);

export default function Services() {
  const items = [
    { t: 'Projektowanie UX/UI', d: 'Makiety, design system, prototypy, dostępność. Pracujemy nad doświadczeniem użytkownika na każdym kroku.' },
    { t: 'Wdrożenie', d: 'Next.js, TypeScript, React, Tailwind, Node.js. Najnowsze technologie, best practices, skalowalne rozwiązania.' },
    { t: 'SEO & Wydajność', d: 'Optymalizacja struktury, metadane, Core Web Vitals 90+, szybkość ładowania, bezpieczeństwo.' },
  ];

  return (
    <section id="uslugi" className="relative py-24 bg-slate-950 text-white">
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-300 bg-emerald-500/10">
            Nasze usługi
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-emerald-400 via-green-400 to-emerald-300">
            Kompleksowe rozwiązania
          </h2>
          <p className="mt-3 text-slate-300">Od pomysłu do publikacji – prowadzimy każdy projekt na wszystkich etapach. Gwarancja jakości, wsparcie i rozwój.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <a
              key={i}
              href="#kontakt"
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur supports-backdrop-filter hover:shadow-2xl hover:shadow-emerald-500/20 transition-transform duration-300 hover:-translate-y-1 p-8 flex flex-col"
            >
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-green-500/20 blur-2xl group-hover:scale-125 transition-transform duration-500" />
              <div className="relative z-10 flex flex-col grow">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-200 transition-colors duration-300 mb-3">
                  {item.t}
                </h3>
                <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed mb-4 grow">
                  {item.d}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300 group-hover:text-emerald-200 transition-colors">
                  <span>Dowiedz się więcej</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="mt-4 h-1 w-0 bg-linear-to-r from-emerald-500 to-green-500 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
