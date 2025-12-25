import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 bg-black min-h-screen">
      <div className="max-w-6xl w-full space-y-24">
        <section className="text-center space-y-12 fade-in-up">
          <div className="flex flex-col items-center space-y-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center rounded-sm rotate-45 shadow-[0_0_40px_rgba(16,185,129,0.3)] mb-4">
              <span className="text-3xl -rotate-45">⚡</span>
            </div>
            <h1 className="tesla-header text-4xl md:text-6xl tracking-[0.4em] uppercase">
              THE <span className="gradient-text">MISSION</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light tracking-[0.2em] leading-relaxed max-w-2xl mx-auto uppercase font-montserrat">
            REIMAGINING CELEBRATION THROUGH GLOBAL SOCIAL IMPACT.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
          <div className="glass-card p-12 border-l-4 border-l-emerald-500 fade-in-up delay-100 group">
            <h2 className="tesla-header text-xl mb-8 tracking-[0.2em] uppercase group-hover:text-emerald-500 transition-colors">The Purpose</h2>
            <p className="text-slate-400 font-montserrat font-light leading-loose uppercase tracking-[0.15em] text-[11px]">
              Celebrate for Change is a student-built social impact platform designed to redirect the generosity of personal celebrations—like birthdays—toward verified organizations addressing real-world problems.
            </p>
          </div>

          <div className="glass-card p-12 border-l-4 border-l-teal-500 fade-in-up delay-200 group">
            <h2 className="tesla-header text-xl mb-8 tracking-[0.2em] uppercase group-hover:text-teal-500 transition-colors">The Mission</h2>
            <p className="text-slate-400 font-montserrat font-light leading-loose uppercase tracking-[0.15em] text-[11px]">
              I curate a selection of high-impact, verified charities across key sectors. By redirecting users directly to official donation pages, I remove intermediaries and maximize transparency.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 items-stretch">
          <div className="relative group overflow-hidden glass-card p-2 rounded-sm border-emerald-500/30 flex flex-col h-full min-h-[400px]">
            <div className="relative w-full h-full flex-grow">
              <Image
                src="/images/creator/rignesh.png"
                alt="Rignesh - Creator"
                fill
                className="grayscale group-hover:grayscale-0 transition-all duration-700 object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none"></div>
          </div>

          <div className="space-y-8 glass-card p-12 border-r-4 border-r-emerald-500 fade-in-up delay-300 flex flex-col justify-center h-full">
            <div className="space-y-4">
              <h2 className="tesla-header text-2xl tracking-[0.3em] text-white">The Visionary</h2>
              <div className="tesla-header text-xs text-emerald-500 tracking-[0.5em]">Rignesh | Student</div>
            </div>

            <div className="space-y-6 text-slate-400 font-montserrat font-light leading-loose uppercase tracking-[0.15em] text-[11px]">
              <p>Seeing the world through a lens of purpose and possibility.</p>
              <p>Driven to make an impact and leave things better than I found them.</p>
              <p className="text-white border-l-2 border-emerald-500 pl-4 py-2 bg-emerald-500/5">
                Join me in making the world a better place—one birthday at a time.
              </p>
            </div>
          </div>
        </section>

        <section className="glass-card p-16 border-t border-white/10 fade-in-up delay-400">
          <h2 className="tesla-header text-2xl text-center mb-16 tracking-[0.3em] uppercase">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center uppercase tracking-[0.2em] text-[10px] font-montserrat font-light">
            <div className="space-y-6 group">
              <div className="text-emerald-500 text-3xl group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="tesla-header text-xs group-hover:text-emerald-400 transition-colors">Ethical Design</h3>
              <p className="text-slate-500 leading-relaxed">No tracking. No ads. No profit motive.</p>
            </div>
            <div className="space-y-6 group">
              <div className="text-emerald-500 text-3xl group-hover:scale-110 transition-transform">💎</div>
              <h3 className="tesla-header text-xs group-hover:text-emerald-400 transition-colors">Transparency</h3>
              <p className="text-slate-500 leading-relaxed">Direct-to-charity routing protocols.</p>
            </div>
            <div className="space-y-6 group">
              <div className="text-emerald-500 text-3xl group-hover:scale-110 transition-transform">🎓</div>
              <h3 className="tesla-header text-xs group-hover:text-emerald-400 transition-colors">Education</h3>
              <p className="text-slate-500 leading-relaxed">Showcasing the intersection of tech and empathy.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
