import Link from 'next/link';

export default function Disclaimer() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-8 bg-black min-h-[80vh]">
      <div className="glass-card max-w-2xl w-full p-16 text-center space-y-16 border-t-2 border-t-emerald-500 fade-in-up">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-emerald-500 text-4xl mb-4">⚖️</div>
          <h1 className="tesla-header text-2xl md:text-3xl tracking-[0.4em] uppercase text-white">
            LEGAL <span className="gradient-text">DISCLAIMER</span>
          </h1>
        </div>

        <div className="space-y-12">
          <p className="text-white font-montserrat text-xs md:text-sm leading-loose uppercase tracking-[0.2em] font-light">
            This website does not collect or process donations. All contributions are made directly through the official donation pages of the respective nonprofit organizations.
          </p>

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto"></div>

          <p className="text-slate-500 font-montserrat text-[10px] md:text-[11px] leading-relaxed uppercase tracking-[0.15em] font-light">
            Developed as a student project for educational and social-impact purposes.
          </p>
        </div>

        <div className="pt-8">
          <Link
            href="/"
            className="inline-block px-12 py-4 bg-white text-black tesla-header text-[12px] tracking-[0.2em] hover:bg-emerald-500 transition-all duration-500 transform active:scale-95 shadow-2xl"
          >
            Back to Site
          </Link>
        </div>
      </div>
    </div>
  );
}
