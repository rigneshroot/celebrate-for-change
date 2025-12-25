import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-black/90 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      {/* Subtle bottom border glow */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-8 h-24 flex items-center justify-between">
        <Link href="/" className="group flex flex-col items-start text-white">
          <span className="tesla-logo text-[12px] md:text-xl tracking-[0.5em] transition-all duration-700 group-hover:tracking-[0.8em] group-hover:text-emerald-400">
            CELEBRATE <span className="text-emerald-500 font-normal">FOR</span> CHANGE
          </span>
        </Link>
        <div className="flex items-center space-x-4 md:space-x-12">
          <Link href="/about" className="tesla-header text-[10px] tracking-[0.3em] text-white/50 hover:text-emerald-500 transition-all duration-300">
            ABOUT
          </Link>
          <Link
            href="/#missions"
            className="px-4 py-2 md:px-8 md:py-3 bg-white text-black tesla-header text-[10px] tracking-[0.2em] hover:bg-emerald-500 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-emerald-500/40"
          >
            Choose a Cause
          </Link>
        </div>
      </div>
    </nav>
  );
}