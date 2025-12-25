'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleShare = (link: string, index: number) => {
    const url = `${window.location.origin}${link}`;
    navigator.clipboard.writeText(url);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const regions = [
    {
      name: "UNITED STATES",
      link: "/usa",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
      description: "Turning birthdays into support for classrooms, environmental protection, and food security.",
      cta: "View Causes →"
    },
    {
      name: "INDIA",
      link: "/india",
      image: "/images/india_landing_new.png",
      description: "Empowering rural communities and supporting elderly citizens through direct, verified giving.",
      cta: "View Causes →"
    },
    {
      name: "UNITED KINGDOM",
      link: "/uk",
      image: "/images/uk_wildlife.jpg",
      description: "Protecting wildlife and supporting healthcare initiatives across the UK.",
      cta: "View Causes →"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Intense Tesla-style Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 animated-gradient opacity-20 blur-3xl scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-10"></div>
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black to-black opacity-60 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative text-center space-y-12 max-w-5xl mx-auto z-10 px-4">
          <div className="space-y-4 fade-in-up">
            <div className="tesla-logo text-emerald-500 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.8em] font-light mb-4 text-center">
              ESTABLISHED 2025
            </div>
            <h1 className="tesla-header text-4xl md:text-8xl leading-tight float-animation">
              CELEBRATE <span className="gradient-text block mt-2">FOR CHANGE</span>
            </h1>
          </div>

          <p className="text-sm md:text-lg text-white/50 max-w-2xl mx-auto fade-in-up delay-100 font-montserrat tracking-[0.3em] leading-relaxed text-center">
            Turning personal celebrations into <br className="hidden md:block" /> direct social impact.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center pt-12 fade-in-up delay-200">
            <Link
              href="#missions"
              className="px-6 py-3 md:px-16 md:py-5 bg-white text-black tesla-header text-[12px] tracking-[0.3em] hover:bg-emerald-500 transition-all duration-500 transform active:scale-95 shadow-2xl"
            >
              View Causes
            </Link>
            <Link
              href="#how-it-works"
              className="px-6 py-3 md:px-16 md:py-5 bg-transparent border border-white/20 text-white tesla-header text-[12px] tracking-[0.3em] hover:bg-white/10 transition-all duration-500 backdrop-blur-md"
            >
              How It Works
            </Link>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 animate-bounce opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent"></div>
        </div>
      </section>

      {/* How it Works - Minimalist Grid */}
      <section id="how-it-works" className="w-full py-40 bg-black">
        <div className="max-w-6xl mx-auto px-8 space-y-32">
          <h2 className="tesla-header text-2xl md:text-3xl tracking-[0.4em] text-white text-center">
            FROM CELEBRATION <span className="gradient-text">TO IMPACT</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { id: '01', title: 'SELECT COUNTRY', desc: 'Choose where you want your birthday to make a difference.' },
              { id: '02', title: 'CHOOSE A CAUSE', desc: 'Pick a verified nonprofit aligned with what matters to you.' },
              { id: '03', title: 'DIRECT IMPACT', desc: 'Donate directly to the organization — no middlemen, full transparency.' }
            ].map((step) => (
              <div key={step.id} className="space-y-8 group border-t border-white/10 pt-10 hover:border-emerald-500/50 transition-colors">
                <div className="tesla-header text-6xl text-white/40 group-hover:text-emerald-500 transition-colors duration-500">
                  {step.id}
                </div>
                <h3 className="tesla-header text-sm text-white tracking-[0.3em]">{step.title}</h3>
                <p className="text-[10px] text-white/60 font-montserrat tracking-[0.2em] leading-loose">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region Slideshow - Tesla Style Full Bleed */}
      <section id="missions" className="w-full">
        {regions.map((region, idx) => (
          <div
            key={region.name}
            className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-between py-32 group border-b border-white/5"
          >
            {/* Background Image with Zoom */}
            <div
              className="absolute inset-0 z-0 grayscale transition-all duration-[2000ms] group-hover:grayscale-0 group-hover:scale-105 opacity-40 group-hover:opacity-60"
              style={{
                backgroundImage: `url(${region.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>

            {/* Edge Glow Overlays */}
            <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black to-transparent z-10"></div>
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent z-10"></div>

            {/* Content Top */}
            <div className="relative z-20 text-center space-y-6 px-4 fade-in-up">
              <h2 className="tesla-header text-4xl md:text-7xl text-white tracking-[0.2em] md:tracking-[0.5em] group-hover:text-emerald-400 transition-colors duration-700">
                {region.name}
              </h2>
              <p className="text-white/40 text-[10px] md:text-xs font-montserrat tracking-[0.4em] max-w-xl mx-auto leading-loose">
                {region.description}
              </p>
            </div>

            {/* Action Bar */}
            <div className="relative z-20 flex flex-col md:flex-row gap-4 w-full max-w-md px-8 fade-in-up delay-200">
              <Link
                href={region.link}
                className="flex-[3] bg-white text-black py-5 rounded-none tesla-header text-[12px] tracking-[0.2em] transition-all duration-500 hover:bg-emerald-500 transform active:scale-95 text-center shadow-2xl"
              >
                {region.cta}
              </Link>
              <button
                onClick={() => handleShare(region.link, idx)}
                className="flex-1 bg-white/5 hover:bg-white/10 text-white py-5 rounded-none tesla-header transition-all duration-500 backdrop-blur-md border border-white/10 transform active:scale-95 flex items-center justify-center gap-2 group/share"
                aria-label="Share"
              >
                {copiedIndex === idx ? (
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-[9px] tracking-[0.2em] font-bold">COPIED</span>
                  </div>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover/share:opacity-100 transition-opacity"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
                )}
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}