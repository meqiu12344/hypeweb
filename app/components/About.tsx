import Image from 'next/image';

export default function About() {
  const team = [
    {
      name: 'Mateusz Maniak',
      role: 'Programista',
      bio: '" Od 14 roku życia interesuje się programowaniem. Już 3 lat zajmuje się profesjonalnie tworzeniem stron internetowych oraz aplikacji webowych dla prywatnych klientów. Stworzenie strony dla ciebie to dla mnie przyjemność oraz pasja. "',
      image: '/maniak2.jpg',
    },
    {
      name: 'Emil Malczak',
      role: 'Przedstawiciel Handlowy',
      bio: '" Od zawsze miałem łatwość w kontaktach inerpersonalnych oraz budowaniu relacji z klientami. Moim celem jest zrozumienie twoich potrzeb i zapewnienie, że otrzymasz najlepsze możliwe rozwiązanie dla swojej strony internetowej. "',
      image: '/emil2.png',
    }
  ];

  return (
    <section id="onasna" className="relative py-24 bg-slate-950 text-white">
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl" />
      <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-rose-500/30 text-rose-300 bg-rose-500/10">
            O nas
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-rose-400 via-fuchsia-400 to-rose-300">
            Poznaj nas bliżej
          </h2>
          <p className="mt-3 text-slate-300">Jesteśmy dwójką młodych oraz ambitnych studentów z Wrocławia, którzy posiadają pasję do tworzenia nowoczesnych i funkcjonalnych stron internetowych.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur supports-backdrop-filter hover:shadow-2xl hover:shadow-rose-500/20 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-2xl group-hover:scale-125 transition-transform duration-500" />

              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-900/80" />
              </div>

              <div className="relative z-10 p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-white group-hover:text-rose-200 transition-colors duration-300 mb-1">
                  {member.name}
                </h3>

                <p className="text-sm font-semibold text-rose-300 mb-4 uppercase tracking-widest">
                  {member.role}
                </p>

                <i className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed mb-4">
                  {member.bio}
                </i>

                <div className="mt-4 h-1 w-0 bg-linear-to-r from-rose-500 to-fuchsia-500 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
