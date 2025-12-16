import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin | hypeweb",
  description: "Regulamin świadczenia usług przez hypeweb – zasady współpracy i odpowiedzialności.",
};

export default function TermsPage() {
  return (
    <main className="section">
      <div className="container space-y-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Regulamin</p>
          <h1 className="text-4xl md:text-5xl font-bold">Zasady świadczenia usług</h1>
          <p className="text-slate-300 max-w-3xl">
            Poniżej znajdziesz skrót kluczowych zasad współpracy. Regulamin ma charakter informacyjny; szczegóły
            doprecyzowujemy w umowie lub scope of work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Strony umowy</h2>
            <p className="text-slate-300">Usługodawca: hypeweb. Usługobiorca: klient wskazany w zamówieniu/umowie.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Zakres usług</h2>
            <p className="text-slate-300">Projektowanie UX/UI, development (Next.js/TS), wdrożenia, optymalizacje SEO/Performance, wsparcie powdrożeniowe.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Warunki płatności</h2>
            <p className="text-slate-300">Harmonogram wg umowy: zaliczka/start fee, milestone’y lub miesięczne wsparcie. Faktury VAT, przelew w PLN.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Prawa autorskie</h2>
            <p className="text-slate-300">Przeniesienie autorskich praw majątkowych/licencja po pełnej płatności, w zakresie uzgodnionym w umowie.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Poufność</h2>
            <p className="text-slate-300">Obie strony zachowują w poufności informacje techniczne i biznesowe uzyskane w trakcie współpracy.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Odpowiedzialność</h2>
            <p className="text-slate-300">Odpowiadamy do wysokości wynagrodzenia za dany projekt/usługę. Nie odpowiadamy za szkody pośrednie i utracone korzyści.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Reklamacje</h2>
            <p className="text-slate-300">Zgłoszenia na hello@hypeweb.space w ciągu 14 dni od zauważenia problemu. Reagujemy i proponujemy poprawki.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Kontakt</h2>
            <p className="text-slate-300">hello@hypeweb.space, tel. +48 500 111 222 | +48 730 496 403.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
