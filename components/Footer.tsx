import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/5 py-24 mt-auto relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent blur-sm"></div>

      <div className="max-w-6xl mx-auto px-8 flex flex-col items-center gap-12 text-center">
        <div className="space-y-4">
          <p className="font-montserrat text-[10px] tracking-[0.4em] text-white/60 font-light max-w-md mx-auto leading-loose uppercase">
            A Global Social Impact Initiative <br /> Built on Transparency
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 font-montserrat text-[10px] uppercase tracking-[0.3em] text-white/80">
          <Link href="/disclaimer" className="hover:text-emerald-500 transition-all duration-300">Disclaimer</Link>
          <span className="text-white/30">•</span>
          <span className="text-white/40">© 2026</span>
        </div>

        <div className="text-[9px] font-montserrat uppercase tracking-[0.4em] text-emerald-500/50 font-bold">
          BUILT FOR IMPACT
        </div>
      </div>
    </footer>
  );
}