import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Gem } from 'lucide-react';
import { BRIDAL_ATELIER_STEPS, ARTIST_DATA } from '../data/makeupData';

interface BridalAtelierProps {
  onBookBridal: () => void;
  currentLang: 'EN' | 'HI';
}

export const BridalAtelier: React.FC<BridalAtelierProps> = ({ onBookBridal, currentLang }) => {
  return (
    <section id="bridal-atelier" className="relative py-24 sm:py-32 bg-[#0D0714] overflow-hidden">
      {/* Decorative backdrop lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#705EFF_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1.5px] bg-[#FF6082]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              THE BRIDAL ATELIER
            </span>
            <span className="w-8 h-[1.5px] bg-[#B26CFF]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFE4F6] font-normal leading-tight mb-5">
            Your Bespoke Bridal Journey
          </h2>

          <p className="text-sm sm:text-base text-[#D8CEE8] font-light leading-relaxed">
            A sacred rite of passage designed with couture rigor. Every brush stroke harmonizes with your facial bone architecture, bridal jewelry weight, veil draping, and sacred rituals.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {BRIDAL_ATELIER_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-[#160F24] border border-[#705EFF]/25 p-7 flex flex-col justify-between relative group hover:border-[#B26CFF] transition-all duration-300 shadow-xl"
            >
              {/* Step indicator */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl sm:text-4xl text-[#FF6082] font-light tracking-widest">
                    {item.step}
                  </span>
                  <span className="w-3 h-[1px] bg-[#705EFF]/40" />
                </div>

                <h3 className="font-serif text-xl text-[#FFE4F6] mb-1 font-normal group-hover:text-[#B26CFF] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-[11px] uppercase tracking-wider text-[#B26CFF] mb-4">
                  {item.subtitle}
                </p>

                <p className="text-xs text-[#D8CEE8] leading-relaxed mb-6 font-light">
                  {item.description}
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-2 pt-4 border-t border-[#705EFF]/20">
                {item.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-[#9E8EB0]">
                    <span className="w-1.5 h-1.5 bg-[#B26CFF]/80 rounded-none shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* The Luxury Kit / Product Authenticity Vault */}
        <div className="bg-[#160F24] border border-[#705EFF]/30 p-5 sm:p-12 mb-12 sm:mb-16 relative shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
                THE KIT ARCHIVE
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#FFE4F6] font-normal mt-1 mb-4">
                Global Luxury Formulations
              </h3>
              <p className="text-xs sm:text-sm text-[#D8CEE8] font-light leading-relaxed mb-6">
                Your skin touches only authentic, non-comedogenic luxury cosmetics imported directly from Paris, New York, and London. Zero compromise on camera flash-back, tear-resistance, and luminous longevity.
              </p>
              <div className="flex items-center gap-3 text-xs text-[#FF6082]">
                <ShieldCheck className="w-4 h-4 text-[#FF6082]" />
                <span className="text-[#FFE4F6]">100% Guaranteed Original & Sanitized Tools</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {ARTIST_DATA.luxuryProducts.map((prod) => (
                  <div
                    key={prod.brand}
                    className="p-3 sm:p-3.5 bg-[#0D0714] border border-[#705EFF]/20 flex flex-col justify-between hover:border-[#B26CFF] transition-colors"
                  >
                    <span className="font-serif text-sm text-[#FFE4F6] font-normal">
                      {prod.brand}
                    </span>
                    <span className="text-[10px] text-[#9E8EB0] mt-1 line-clamp-2">
                      {prod.item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bridal Atelier CTA */}
        <div className="text-center px-2">
          <button
            onClick={onBookBridal}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold transition-all shadow-xl shadow-[#FF6082]/25 cursor-pointer text-center"
          >
            <span>RESERVE YOUR BRIDAL DATES</span>
            <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
};
