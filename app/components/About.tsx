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
    <section id="onasna" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-0 right-0 w-125 h-125 bg-linear-to-l from-purple-500/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-linear-to-r from-cyan-500/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-xs font-bold text-purple-400 uppercase tracking-widest px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5">
            Kim jesteśmy ?
          </span>
          <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            <span className="block bg-linear-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              Poznaj nas bliżej
            </span>
          </h2>
          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Jesteśmy dwójką młodych oraz ambitnych studentów z Wrocławia, którzy posiadają pasję do tworzenia nowoczesnych i funkcjonalnych stron internetowych. Naszym celem jest dostarczanie rozwiązań, które nie tylko spełniają oczekiwania klientów, ale także przewyższają je pod względem jakości i innowacyjności.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative flex flex-col rounded-3xl border border-slate-700/50 bg-linear-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-purple-400/60 hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]"
            >
              {/* Animated gradient background on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(34, 211, 238, 0.1))',
                }}
              />

              {/* Animated blur orb */}
              <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-linear-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

              {/* Image container */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-900/80" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col p-8">
                {/* Name */}
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm font-semibold text-purple-300 mb-4 uppercase tracking-widest">
                  {member.role}
                </p>

                {/* Bio */}
                <i className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed mb-6 grow">
                  {member.bio}
                </i>

                {/* Bottom accent line */}
                <div className="mt-6 h-1 w-0 bg-linear-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
