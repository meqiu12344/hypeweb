export default function CTA() {
  return (
    <section id="kontakt" className="section">
      <div className="container grid items-center gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Porozmawiajmy o Twojej stronie</h2>
          <p className="mt-2 muted max-w-prose">Napisz kilka zdań o projekcie — wrócimy z wyceną i terminem.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:hello@hypeweb.space" className="btn btn-primary">hello@hypeweb.space</a>
            <a href="#uslugi" className="btn btn-secondary">Zobacz ofertę</a>
          </div>
        </div>
        <div className="rounded-xl border-gradient p-6 bg-white/5 card-hover">
          <ul className="grid gap-3 text-sm">
            <li className="flex items-start gap-3"><span>📍</span> Polska / zdalnie</li>
            <li className="flex items-start gap-3"><span>🕒</span> Odpowiedź zwykle w 24h</li>
            <li className="flex items-start gap-3"><span>🤝</span> Stała współpraca lub jednorazowo</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
