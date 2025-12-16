export default function Services() {
  const items = [
    { t: 'Projektowanie UX/UI', d: 'Makiety, design system, dostępność.' },
    { t: 'Development', d: 'Next.js, TypeScript, Tailwind, CMS.' },
    { t: 'SEO & Wydajność', d: 'Struktura, metadane, CWV 90+.' },
    { t: 'Wsparcie', d: 'Hosting, monitoring, rozwój.' },
  ];
  return (
    <section id="uslugi" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">Usługi</h2>
        <p className="mt-2 muted max-w-prose">Kompleksowo prowadzimy projekt – od pomysłu po publikację.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="card border-gradient card-hover">
              <div
                className="w-10 h-10 rounded-lg mb-3 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))' }}
              >
                <span>★</span>
              </div>
              <h3 className="font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm muted">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
