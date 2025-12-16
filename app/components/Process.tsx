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

const TimelineItem = ({
  step,
  title,
  desc,
  number,
  isLeft,
}: {
  step: string;
  title: string;
  desc: string;
  number: number;
  isLeft: boolean;
}) => (
  <div className="flex flex-col items-center">
    {/* Desktop: alternating left-right layout */}
    <div className={`hidden md:flex w-full gap-10 items-stretch ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content card */}
      <div className="flex-1">
        <div
          className={`group relative h-full p-8 rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] hover:scale-105 cursor-pointer ${
            isLeft ? 'text-right' : 'text-left'
          }`}
        >
          {/* Animated gradient background */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(168, 85, 247, 0.15))',
            }}
          />

          {/* Animated blur orb */}
          <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/8 to-purple-500/8 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Number badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Etap {step}</span>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300 mb-3">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed flex-grow">
              {desc}
            </p>

            {/* Bottom accent bar */}
            <div className={`mt-6 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 transition-all duration-500 rounded-full ${isLeft ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </div>
        </div>
      </div>

      {/* Center dot with connector */}
      <div className="relative flex flex-col items-center justify-center py-8">
        {/* Glow effect */}
        <div className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-xl animate-pulse" />

        {/* Icon background circle */}
        <div className="absolute w-14 h-14 rounded-full border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-500" />

        {/* Main icon circle */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white relative z-20 flex-shrink-0 text-lg"
          style={{
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
            boxShadow: '0 0 24px rgba(34, 211, 238, 0.5)',
          }}
        >
          <ProcessIcon number={number} />
        </div>

        {/* Connector line to card (horizontal gradient line) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-0.5 w-10"
          style={{
            background: `linear-gradient(to ${isLeft ? 'left' : 'right'}, rgba(34, 211, 238, 0.6), transparent)`,
            [isLeft ? 'right' : 'left']: '100%',
          }}
        />
      </div>
    </div>

    {/* Mobile: stacked vertical layout */}
    <div className="md:hidden w-full">
      <div className="flex gap-6">
        {/* Timeline dot and line */}
        <div className="flex flex-col items-center flex-shrink-0">
          {/* Glow effect */}
          <div className="absolute w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-lg" />

          {/* Icon background circle */}
          <div className="absolute w-12 h-12 rounded-full border border-cyan-500/30" />

          {/* Dot with icon */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0 relative z-10"
            style={{
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)',
            }}
          >
            <ProcessIcon number={number} />
          </div>

          {/* Vertical line (except last) - thicker and more visible */}
          {number < 4 && (
            <div className="w-1.5 flex-grow bg-gradient-to-b from-cyan-500/80 via-cyan-500/40 to-transparent mt-4 rounded-full" />
          )}
        </div>

        {/* Content card */}
        <div className="flex-1 pt-1 pb-12">
          <div className="group relative p-6 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-cyan-400/50 hover:scale-105">
            {/* Animated gradient background */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1))',
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
                Etap {step}
              </div>
              <h3 className="mt-2 text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Process() {
  const steps = [
    { s: '1', t: 'Analiza', d: 'Odkrywamy cele biznesowe, grupę docelową, konkurencję i zakres projektu.' },
    { s: '2', t: 'Projekt', d: 'Tworzymy makiety, design system i prototypy w iteracjach ze zwrotną informacją.' },
    { s: '3', t: 'Wdrożenie', d: 'Responsywny kod, integracje z CMS, API, hosting i testy zapewniające jakość.' },
    { s: '4', t: 'Optymalizacja', d: 'SEO, wydajność, monitoring, wsparcie i ciągły rozwój aplikacji.' },
  ];

  return (
    <section id="proces" className="section relative overflow-hidden">
      {/* Background decoration - premium */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="inline-block text-xs font-bold text-pink-400 uppercase tracking-widest px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/5">Nasz Proces Pracy</span>
          <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            <span className="block bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
              Jak Pracujemy
            </span>
          </h2>
          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Cztery dobrze zdefiniowane etapy, które prowadzą od koncepcji do doskonałego wdrożenia i ciągłego wsparcia.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line (only visible on md:lg breakpoint) */}
          <div className="hidden md:block lg:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent -translate-x-1/2 rounded-full" />

          {/* Desktop horizontal layout (lg+) - clean cards only */}
          <div className="hidden lg:flex gap-8 items-stretch">
            {steps.map((it, i) => (
              <div key={i} className="flex-1 flex flex-col">
                {/* Card with premium styling */}
                <div className="group relative flex-1 p-8 rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_50px_rgba(34,211,238,0.25)] hover:scale-105 hover:-translate-y-2">
                  {/* Animated gradient background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.15))',
                    }}
                  />

                  {/* Animated blur orb */}
                  <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Step number as title prefix */}
                    <div className="inline-flex items-center gap-2 mb-5 w-fit px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Krok {it.s}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300 mb-4">
                      {it.t}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed flex-grow">
                      {it.d}
                    </p>

                    {/* Bottom accent bar */}
                    <div className="mt-8 h-1 w-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 transition-all duration-500 rounded-full group-hover:w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet and mobile (md and below, md:lg hidden, then lg:hidden) */}
          <div className="lg:hidden space-y-16 md:space-y-24">
            {steps.map((it, i) => (
              <TimelineItem
                key={i}
                step={it.s}
                title={it.t}
                desc={it.d}
                number={i + 1}
                isLeft={i % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-20 text-center">
          <div className="inline-block px-8 py-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
            <p className="text-sm text-slate-300">
              <span className="text-cyan-300 font-semibold">Typowy projekt trwa 4-8 tygodni</span> w zależności od zakresu i wymagań biznesowych
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
