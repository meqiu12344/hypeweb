import Image from "next/image";

export default function Hero() {
  return (
    <section className="section hero-wrap overflow-hidden">
      {/* Dekoracje tła */}
      <div aria-hidden className="absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full blob blob-cyan float-slow" />
      <div aria-hidden className="absolute -bottom-24 -right-32 w-[40rem] h-[40rem] rounded-full blob blob-purple float-slower" />
      <div aria-hidden className="absolute inset-0 grid-overlay" />

      <div className="container grid gap-10 md:grid-cols-2 md:items-center relative">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Projektujemy strony
            <span className="block gradient-text">które robią wrażenie</span>
          </h1>
          <p className="mt-4 text-base md:text-lg muted max-w-prose">
            Od UX/UI po wdrożenie i SEO. Skupiamy się na szybkości, dostępności i wynikach biznesowych.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#kontakt" className="btn btn-primary">Porozmawiajmy</a>
            <a href="#uslugi" className="btn btn-secondary">Zobacz usługi</a>
          </div>

          {/* Badges */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs opacity-80">
            <span className="px-3 py-1 rounded-full border border-white/15">Core Web Vitals 90+</span>
            <span className="px-3 py-1 rounded-full border border-white/15">Semantyka & A11y</span>
            <span className="px-3 py-1 rounded-full border border-white/15">Next.js & TypeScript</span>
          </div>
        </div>

        {/* Zdjęcie hero */}
        <div className="relative border-gradient rounded-xl overflow-hidden aspect-[4/3] md:aspect-[5/4]">
          <Image
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1600&q=80"
            alt="Zespół pracujący nad stroną — hypeweb"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Pasek „marquee” z technologiami */}
      <div className="container mt-12">
        <div className="marquee text-sm opacity-80">
          <div className="marquee-track">
            <span>Next.js</span><span>•</span><span>TypeScript</span><span>•</span><span>Tailwind</span><span>•</span><span>Headless CMS</span><span>•</span><span>SEO</span><span>•</span><span>Analytics</span>
            <span className="ml-8">Next.js</span><span>•</span><span>TypeScript</span><span>•</span><span>Tailwind</span><span>•</span><span>Headless CMS</span><span>•</span><span>SEO</span><span>•</span><span>Analytics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
