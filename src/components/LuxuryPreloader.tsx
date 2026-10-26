import React, { useState, useEffect } from 'react';
import { ARTIST_DATA } from '../data/makeupData';

export const LuxuryPreloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeExit, setFadeExit] = useState(false);

  useEffect(() => {
    // Smooth reveal timer
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
      className={`fixed inset-0 z-[100] bg-gradient-to-b from-[#130626] via-[#1C0938] to-[#0D041A] flex flex-col items-center justify-center p-6 transition-opacity duration-500 ${
        fadeExit ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading Royal Beauty Hub"
    >
      <div className="flex flex-col items-center text-center max-w-sm animate-in fade-in zoom-in-95 duration-500">
        
        {/* BIG Logo with Royal Glow */}
        <div className="relative mb-6">
          <div className="absolute -inset-8 bg-gradient-to-tr from-[#FF6082]/30 via-[#B26CFF]/30 to-[#705EFF]/30 rounded-full blur-2xl animate-pulse" />
          <img
            src={ARTIST_DATA.logoUrl}
            alt="Royal Beauty Hub Logo"
            className="relative h-32 sm:h-40 md:h-44 w-auto object-contain filter drop-shadow-[0_8px_35px_rgba(178,108,255,0.6)]"
          />
        </div>

        {/* Cursive Brand Name */}
        <div className="mb-3">
          <span className="font-cursive text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF]">
            Royal Beauty Hub
          </span>
        </div>

        {/* Human Simple Status */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#D8CEE8] font-medium mb-4">
          Preparing your beauty experience...
        </p>

        {/* Luxury Royal Progress Bar */}
        <div className="w-48 h-[2.5px] bg-[#1F0C3D] border border-[#705EFF]/40 relative overflow-hidden rounded-full">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] w-full animate-[progress_1.1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};
