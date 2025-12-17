"use client";

import { useState } from "react";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { type: "ok" | "error"; msg: string }>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Uzupełnij wymagane pola." });
      return;
    }
    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Błąd wysyłki");
      setStatus({ type: "ok", msg: "Dziękujemy! Wrócimy wkrótce z odpowiedzią." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      setStatus({ type: "error", msg: err.message || "Coś poszło nie tak." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="kontakt" className="section relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-150 h-150 bg-linear-to-br from-cyan-500/15 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-linear-to-l from-purple-500/15 to-transparent rounded-full blur-3xl animate-float-slower" />
      </div>

      <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-start">
        {/* Left: Title + Info */}
        <div>
          <span className="inline-block text-xs font-bold text-cyan-300 uppercase tracking-widest px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10">
            Kontakt
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            <span className="block bg-linear-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Skontaktuj się<br/>z nami
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-md leading-relaxed">
            Opowiedz krótko o projekcie, a wrócimy z wyceną i terminem zazwyczaj w 24h.
          </p>

          <div className="mt-10 space-y-3">
            <div className="group relative flex items-start gap-4 p-4 rounded-xl border border-slate-700/40 bg-slate-900/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-2xl mt-0.5">📞</div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">Telefon</p>
                <a href="tel:+48660240968" className="text-sm font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors duration-200">
                  +48 660 240 968
                </a>
                <br/>
                <a href="tel:+48500111222" className="text-sm font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors duration-200">
                  +48 730 496 403
                </a>
              </div>
            </div>
            <div className="group relative flex items-start gap-4 p-4 rounded-xl border border-slate-700/40 bg-slate-900/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-2xl mt-0.5">✉️</div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">Email</p>
                <a href="mailto:hypeweb.space@gmail.com" className="text-sm font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors duration-200">
                  hypeweb.space@gmail.com
                </a>
              </div>
            </div>
            <div className="group relative flex items-start gap-4 p-4 rounded-xl border border-slate-700/40 bg-slate-900/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-2xl mt-0.5">🕒</div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">Godziny pracy</p>
                <p className="text-sm text-slate-300">Pon–Pt: 9:00–17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="group relative rounded-3xl border border-slate-700/40 p-8 bg-linear-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_60px_rgba(34,211,238,0.2)]">
          {/* Animated gradient overlay on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.05))',
            }}
          />
          
          {/* Animated blur orb */}
          <div className="absolute -top-1/2 -right-1/4 w-100 h-100 bg-linear-to-br from-cyan-500/20 to-purple-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

          <form onSubmit={onSubmit} className="grid gap-5 relative z-10">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold text-slate-300">Imię i nazwisko *</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jan Kowalski"
                className="w-full rounded-xl bg-black/40 border border-slate-700/60 px-4 py-2.5 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/80 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold text-slate-300">Email *</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="twoj@mail.com"
                className="w-full rounded-xl bg-black/40 border border-slate-700/60 px-4 py-2.5 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/80 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-xs uppercase tracking-widest font-semibold text-slate-300">Telefon (opcjonalnie)</label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+48 500 000 000"
                className="w-full rounded-xl bg-black/40 border border-slate-700/60 px-4 py-2.5 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/80 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest font-semibold text-slate-300">Wiadomość *</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Kilka zdań o projekcie, cele, terminy..."
                className="w-full rounded-xl bg-black/40 border border-slate-700/60 px-4 py-2.5 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/80 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 resize-y"
                required
              />
            </div>

            {status && (
              <div
                className={
                  "text-sm rounded-lg px-4 py-3 font-medium " +
                  (status.type === "ok"
                    ? "bg-green-500/20 text-green-300 border border-green-500/40"
                    : "bg-red-500/20 text-red-300 border border-red-500/40")
                }
              >
                {status.msg}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="relative group/btn w-full overflow-hidden rounded-xl py-3 font-semibold text-white transition-all duration-300 disabled:opacity-60"
              style={{
                background: submitting ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.5), rgba(168, 85, 247, 0.5))' : 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                boxShadow: submitting ? 'none' : '0 8px 32px rgba(34, 211, 238, 0.3)',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 1), rgba(34, 211, 238, 1))',
                }}
              />
              <span className="relative z-10">
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    Wysyłanie...
                  </span>
                ) : (
                  "Wyślij wiadomość"
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
