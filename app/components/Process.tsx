export default function Process() {
  const steps = [
    { s: '1', t: 'Analiza', d: 'Cele, grupa docelowa, zakres.' },
    { s: '2', t: 'Projekt', d: 'Makiety i UI w iteracjach.' },
    { s: '3', t: 'Wdrożenie', d: 'Responsywny kod, CMS, integracje.' },
    { s: '4', t: 'Optymalizacja', d: 'SEO, wydajność, testy i start.' },
  ];
  return (
    <section id="proces" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">Jak pracujemy</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((it, i) => (
            <div key={i} className="card border-gradient card-hover">
              <div className="text-sm opacity-70">Krok {it.s}</div>
              <h3 className="mt-1 font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm muted">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
