import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Twoja Czekoladziarnia",
      description:
        "Elegancka strona dla rzemieślniczej czekoladziarni. Prezentacja oferty, galerii produktów oraz informacji o firmie z funkcjonalnością menu i kontaktu.",
      image:
        "https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=80",
      url: "https://czekoladziarnia.vercel.app/",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
    },
    {
      title: "Agata Leonard - Coaching",
      description:
        "Profesjonalna strona dla międzynarodowego coacha RTT (Rapid Transformational Therapy). Prezentacja usług, testimoniale klientów, formularz kontaktowy i integracja z systemem rezerwacji.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      url: "https://agataleonard.com/",
      tech: ["HTML", "CSS", "JavaScript", "Calendly"],
    },
    {
      title: "SodaExtreme",
      description:
        "Platforma wymiany cylindrów CO₂ z dowozem we Wrocławiu. System zamówień online, cennik, FAQ oraz pełna integracja z formularzem kontaktowym i obszarem dostaw.",
      image: "/bubbles.svg",
      url: "https://www.sodaextreme.pl/",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp API"],
    },
    {
      title: "Drukarnia XYZ",
      description:
        "Kompleksowa platforma dla drukarni wielkoformatowej. Zaawansowane kalkulatory online (druk, skan, kopia), system zamówień z integracją płatności, wybór paczkomatu InPost i panel administracyjny.",
      image: "https://www.drukarniaxyz.pl/hero1.jpg",
      url: "https://www.drukarniaxyz.pl/",
      tech: ["Next.js", "TypeScript", "InPost API", "Payment Gateway"],
    },
    {
      title: "SLASerwis - Warsztat Samochodowy",
      description:
        "Strona internetowa dla warsztatu samochodowego w Długołęce. Prezentacja usług, cennik, galeria, formularz kontaktowy oraz integracja z Google Maps i social media.",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      url: "https://slaserwis.pl/",
      tech: ["PHP", "HTML", "CSS", "JavaScript", "Google Maps API"],
    },
  ];

  return (
    <section id="portfolio" className="relative py-24 bg-slate-950 text-white">
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-orange-500/30 text-orange-300 bg-orange-500/10">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-orange-400 via-pink-400 to-orange-300">
            Wybrane realizacje
          </h2>
          <p className="mt-3 text-slate-300">Przykładowe projekty stron, które zbudowaliśmy.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur supports-backdrop-filter hover:shadow-2xl hover:shadow-orange-500/20 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-pink-500/20 blur-2xl group-hover:scale-125 transition-transform duration-500" />

              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-900/90" />
              </div>

              <div className="relative z-10 p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-200 transition-colors duration-300 mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed mb-4 grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-orange-300 group-hover:text-orange-200 transition-colors">
                  <span>Zobacz projekt</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                <div className="mt-4 h-1 w-0 bg-linear-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
