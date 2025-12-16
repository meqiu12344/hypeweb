import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności | hypeweb",
  description: "Polityka prywatności hypeweb – informacje o danych, cookies i prawach użytkownika.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="section">
      <div className="container space-y-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Polityka prywatności</p>
          <h1 className="text-4xl md:text-5xl font-bold">Jak chronimy Twoje dane</h1>
          <p className="text-slate-300 max-w-3xl">
            Dbamy o przejrzystość i bezpieczeństwo. Poniżej opisujemy, jakie dane zbieramy, po co to robimy
            i jakie masz prawa. Jeśli masz pytania, napisz na hello@hypeweb.space.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Administrator danych</h2>
            <p className="text-slate-300">hypeweb, kontakt: hello@hypeweb.space, tel. +48 500 111 222.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Zakres przetwarzania</h2>
            <p className="text-slate-300">Dane z formularza kontaktowego (imię, e-mail, telefon opcjonalnie, treść wiadomości) – wyłącznie do kontaktu zwrotnego.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Podstawa prawna</h2>
            <p className="text-slate-300">Art. 6 ust. 1 lit. b RODO – działania przed zawarciem umowy; lit. f – prawnie uzasadniony interes (korespondencja biznesowa).</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Okres przechowywania</h2>
            <p className="text-slate-300">Dane z formularza: do zakończenia korespondencji lub maks. 12 miesięcy od ostatniego kontaktu, chyba że przepisy wymagają dłużej.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Odbiorcy danych</h2>
            <p className="text-slate-300">Dostawcy hostingu, narzędzi e-mail, dostawcy usług IT – tylko gdy jest to niezbędne do obsługi zapytań.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Twoje prawa</h2>
            <p className="text-slate-300">Dostęp, sprostowanie, usunięcie, ograniczenie, sprzeciw, przeniesienie danych oraz skarga do PUODO.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Cookies i logi</h2>
            <p className="text-slate-300">Używamy plików cookie i logów serwera wyłącznie do celów technicznych i statystycznych. Możesz zarządzać cookies w ustawieniach przeglądarki.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-white">Kontakt w sprawach RODO</h2>
            <p className="text-slate-300">hello@hypeweb.space – napisz, jeśli chcesz zrealizować swoje prawa lub zadać pytanie.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
