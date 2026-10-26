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
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#FAF7FC] flex flex-col items-center justify-center p-6 transition-opacity duration-500 ${
        fadeExit ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading Royal Beauty Hub Luxury Atelier"
    >
      <div className="flex flex-col items-center text-center max-w-sm animate-in fade-in zoom-in-95 duration-500">
        
        {/* Logo with gentle royal glow & pulse */}
        <div className="relative mb-6">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6082]/20 via-[#B26CFF]/20 to-[#705EFF]/20 rounded-full blur-xl animate-pulse" />
          <img
            src={ARTIST_DATA.logoUrl}
            alt="Royal Beauty Hub Logo"
            className="relative h-20 sm:h-24 w-auto object-contain filter drop-shadow-[0_4px_20px_rgba(112,94,255,0.35)]"
          />
        </div>

        {/* Brand Name Text with Blue Reveal */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-[#1A0B26]">
            Royal Beauty Hub
          </span>
        </div>

        {/* Loading status text in tracked blush */}
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#705EFF] font-semibold mb-3">
          Couture Artistry Loading...
        </p>

        {/* Minimal Luxury Royal Progress Bar */}
        <div className="w-48 h-[2.5px] bg-[#FAF7FC] border border-[#705EFF]/25 relative overflow-hidden rounded-full">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] w-full animate-[progress_1.1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};
