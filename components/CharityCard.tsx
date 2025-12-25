'use client';

import { Charity } from '@/data/charities';
import { useState } from 'react';

// Enhanced color mapping for categories with gradients
const categoryStyles = {
  'Environment': {
    badge: 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white',
    gradient: 'from-emerald-50 to-teal-50',
    darkGradient: 'from-emerald-950 to-teal-950'
  },
  'Education': {
    badge: 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white',
    gradient: 'from-blue-50 to-indigo-50',
    darkGradient: 'from-blue-950 to-indigo-950'
  },
  'Elderly Support': {
    badge: 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black',
    gradient: 'from-amber-50 to-yellow-50',
    darkGradient: 'from-amber-950 to-yellow-950'
  },
};

// New categoryColors mapping for the updated badge style
const categoryColors = {
  'Environment': 'text-emerald-400',
  'Education': 'text-blue-400',
  'Elderly Support': 'text-amber-400',
};

export default function CharityCard({ charity }: { charity: Charity }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(charity.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative overflow-hidden bg-black border border-white/10 transition-all duration-700 hover:shadow-[0_0_50px_rgba(251,191,36,0.1)] min-h-[400px] flex flex-col">
      {/* Background Image with Zoom and Enhanced Opacity */}
      {charity.image && (
        <>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-105 opacity-80 group-hover:opacity-100"
            style={{ backgroundImage: `url(${charity.image})` }}
          ></div>
          {/* Multi-layer gradient overlay for depth and readability */}
          <div className="absolute inset-0 z-1 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-700 group-hover:opacity-60"></div>
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/60 via-transparent to-black/40"></div>
        </>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 flex-grow p-10 flex flex-col transition-all duration-500">
        <div className="flex justify-between items-start mb-8">
          <span className={`px-5 py-2 text-[10px] tesla-header ${categoryColors[charity.category]} bg-black/60 shadow-2xl backdrop-blur-xl border border-white/10`}>
            {charity.category}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl tesla-header mb-6 tracking-[0.1em] text-white drop-shadow-lg group-hover:text-emerald-400 transition-colors duration-500 leading-tight">
          {charity.name}
        </h3>

        <p className="text-white text-xs font-light leading-loose mb-10 flex-grow line-clamp-4 font-montserrat tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] opacity-90 group-hover:opacity-100 transition-opacity duration-500">
          {charity.description || "Support this verified organization making real-world impact through your donation."}
        </p>

        <div className="flex gap-4">
          <a
            href={charity.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] py-5 text-center tesla-header text-[12px] bg-white text-black transition-all duration-500 hover:bg-emerald-500 hover:text-black transform group-hover:translate-y-[-4px] active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            Donate Now →
          </a>
          <button
            onClick={handleShare}
            className="flex-1 py-5 text-center tesla-header bg-white/5 text-white border border-white/10 transition-all duration-500 hover:bg-white/10 active:scale-95 backdrop-blur-md flex items-center justify-center gap-2 group/share"
            aria-label="Share"
          >
            {copied ? (
              <div className="flex items-center gap-1 text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span className="text-[8px] tracking-[0.1em] font-bold uppercase">Copied</span>
              </div>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover/share:opacity-100 transition-opacity"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}