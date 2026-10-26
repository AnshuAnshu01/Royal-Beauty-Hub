import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BRIDAL_ATELIER_STEPS, ARTIST_DATA, FAQ_ITEMS } from '../data/makeupData';

interface BridalPageProps {
  onBookBridal: () => void;
}

export const BridalPage: React.FC<BridalPageProps> = ({ onBookBridal }) => {
  return (
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Royal Palette Gradient Hero Banner (No background image, pure luxury gradient & separate palette glows) */}
      <div className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#120524] via-[#1E0938] to-[#0A0314] overflow-hidden text-white border-b border-[#705EFF]/25">
        <div className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-[#FF6082]/25 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#705EFF]/25 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 rounded-full bg-[#B26CFF]/20 blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <span className="font-cursive text-3xl sm:text-4xl text-[#FF6082] block mb-2">
            Radiant & Unforgettable
          </span>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#FF6082]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B26CFF] font-semibold">
              The Bridal Experience
            </span>
            <span className="w-5 h-[2px] bg-[#705EFF]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight mb-4">
            Your Wedding Day Glow
          </h1>
          <p className="text-sm sm:text-base text-[#D8CEE8] font-light max-w-xl leading-relaxed">
            Every bride is unique. We take the time to understand your style, your outfit, and your dream look, ensuring you feel confident, radiant, and happy all day long.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="font-cursive text-3xl text-[#705EFF] block mb-2">
            Personal Attention Just For You
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal mb-4">
            Look and Feel Your Absolute Best
          </h2>
          <p className="text-sm sm:text-base text-[#4A3A5E] font-light leading-relaxed mb-6">
            We focus on enhancing your natural beauty. Whether in real life, under bright lights, or on camera, your makeup stays fresh, lightweight, and camera-ready throughout the ceremony.
          </p>
          <button
            onClick={onBookBridal}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-lg shadow-[#FF6082]/25 hover:opacity-95 transition-all cursor-pointer rounded-sm"
          >
            <span>Check Wedding Date Availability</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* 4-Step Process Grid */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold block mb-2">
              HOW IT WORKS
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#1A0B26]">
              Simple Steps to Your Wedding Look
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRIDAL_ATELIER_STEPS.map((item) => (
              <div
                key={item.step}
                className="glass-card p-6 sm:p-7 flex flex-col justify-between relative group hover:border-[#705EFF]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl text-[#705EFF] font-bold">
                      {item.step}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#FF6082]" />
                  </div>

                  <h4 className="font-serif text-lg sm:text-xl text-[#1A0B26] font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] uppercase tracking-wider text-[#705EFF] mb-3 font-medium">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#4A3A5E] font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#705EFF]/15 space-y-1.5">
                  {item.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-[#2D183E]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#705EFF]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Makeup Kit & Products */}
        <div className="glass-panel p-6 sm:p-12 mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold block mb-2">
                ONLY THE BEST FOR YOUR SKIN
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal mb-4">
                100% Genuine Luxury Products
              </h3>
              <p className="text-xs sm:text-sm text-[#4A3A5E] font-light leading-relaxed mb-6">
                We only use world-class, authentic skincare and makeup products that are gentle on your skin, sweat-proof, and designed to look natural in real life and photography.
              </p>
              <div className="flex items-center gap-2.5 text-xs text-[#705EFF] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#FF6082]" />
                <span>Original Brands & Strict Sanitization</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {ARTIST_DATA.luxuryProducts.map((prod) => (
                  <div key={prod.brand} className="glass-card p-3.5 text-center">
                    <span className="font-serif text-sm font-semibold text-[#1A0B26] block">
                      {prod.brand}
                    </span>
                    <span className="text-[10px] text-[#7A698F] mt-1 block">
                      {prod.item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold block mb-2">
              COMMON QUESTIONS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A0B26]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, idx) => (
              <div key={idx} className="glass-card p-5 sm:p-6">
                <h4 className="font-serif text-base sm:text-lg text-[#1A0B26] font-semibold mb-2">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-[#4A3A5E] font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
