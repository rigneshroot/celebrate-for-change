import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/5 py-24 mt-auto relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent blur-sm"></div>

      <div className="max-w-6xl mx-auto px-8 flex flex-col items-center gap-8 text-center">
        <div className="space-y-4">
          <p className="font-montserrat text-[10px] tracking-[0.2em] text-white/60 font-light max-w-md mx-auto leading-loose">
            © 2026 Celebrate for Change <br />
            A global social impact initiative focused on transparent giving.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 font-montserrat text-[10px] tracking-[0.2em] text-white/80">
          <Link href="/disclaimer" className="hover:text-emerald-500 transition-all duration-300">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}