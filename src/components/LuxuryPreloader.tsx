import React, { useState, useEffect } from 'react';
import { ARTIST_DATA } from '../data/makeupData';

export const LuxuryPreloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeExit, setFadeExit] = useState(false);

  useEffect(() => {
    // Elegant luxury reveal timer
    const timer = setTimeout(() => {
      setFadeExit(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Wait for fade-out transition
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0D0714] flex flex-col items-center justify-center p-6 transition-opacity duration-500 ${
        fadeExit ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading Gautam Aadi Luxury Makeup Atelier"
    >
      <div className="flex flex-col items-center text-center max-w-xs animate-in fade-in zoom-in-95 duration-500">
        {/* Logo with gentle royal glow */}
        <div className="relative mb-6">
          <img
            src={ARTIST_DATA.logoUrl}
            alt="Royal Beauty Hub Logo"
            className="h-20 sm:h-24 w-auto object-contain filter drop-shadow-[0_4px_25px_rgba(178,108,255,0.45)]"
          />
        </div>

        {/* Loading text in tracked royal blush */}
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#FFE4F6] font-medium mb-3">
          Loading...
        </p>

        {/* Minimal Luxury Royal Progress Bar */}
        <div className="w-40 h-[2px] bg-[#160F24] border border-[#705EFF]/30 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] w-full animate-[progress_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};
