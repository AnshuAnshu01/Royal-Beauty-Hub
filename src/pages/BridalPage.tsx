import React from 'react';
import { ArrowRight, ShieldCheck, Gem, Heart, CheckCircle2 } from 'lucide-react';
import { BRIDAL_ATELIER_STEPS, ARTIST_DATA, FAQ_ITEMS } from '../data/makeupData';

interface BridalPageProps {
  onBookBridal: () => void;
  currentLang: 'EN' | 'HI';
}

export const BridalPage: React.FC<BridalPageProps> = ({ onBookBridal, currentLang }) => {
  return (
    <div className="pt-24 pb-28 bg-[#0D0714] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto pt-8 pb-14 border-b border-[#705EFF]/25">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#FF6082]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              THE BRIDAL ATELIER
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#FF6082]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#FFE4F6] font-normal tracking-tight mb-4">
            Your Bespoke Bridal Journey
          </h1>

          <p className="text-sm sm:text-base text-[#D8CEE8] font-light leading-relaxed max-w-2xl mx-auto">
            A sacred rite of passage designed with couture rigor. Every brush stroke harmonizes with your facial bone architecture, bridal jewelry weight, veil draping, and sacred rituals.
          </p>

          <div className="mt-8">
            <button
              onClick={onBookBridal}
              className="px-8 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.2em] font-bold transition-opacity shadow-xl shadow-[#705EFF]/25 cursor-pointer"
            >
              RESERVE YOUR BRIDAL DATES →
            </button>
          </div>
        </div>

        {/* 4-Step Process Grid */}
        <div className="mt-16 mb-24">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF6082] font-medium">
              The 4-Step Method
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FFE4F6] mt-1 font-normal">
              From Consultation to Sacred Vows
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRIDAL_ATELIER_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-[#160F24] border border-[#705EFF]/30 p-7 flex flex-col justify-between relative group hover:border-[#FF6082] transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl sm:text-4xl text-[#FF6082] font-light tracking-widest">
                      {item.step}
                    </span>
                    <span className="w-3 h-[1px] bg-[#B26CFF]/40" />
                  </div>

                  <h3 className="font-serif text-xl text-[#FFE4F6] mb-1 font-normal group-hover:text-[#FF6082] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-[11px] uppercase tracking-wider text-[#B26CFF] mb-4">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-[#D8CEE8] leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#705EFF]/20">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-[#9E8EB0]">
                      <span className="w-1.5 h-1.5 bg-[#FF6082]/80 rounded-none shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Bridal Atelier Masterpieces Showcase */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF6082] font-medium">
              SIGNATURE ATELIER PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FFE4F6] mt-1 font-normal">
              Sacred Regality Captured in Real Light
            </h2>
            <p className="text-xs sm:text-sm text-[#D8CEE8] mt-2 max-w-xl mx-auto font-light">
              Authentic brides adorned by Gautam Aadi. Every portrait reflects bespoke jewellery placement, couture draping, and radiant 24-hour longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Maharani Dupatta Vows",
                event: "Royal Traditional Phera",
                image: "/assets/aistudio/Screenshot_2026-10-25_223840_9e31f0f8.png",
                aspect: "aspect-[3/4]"
              },
              {
                title: "Polki Crimson Grace",
                event: "Sacred Wedding Vows",
                image: "/assets/aistudio/Screenshot_2026-10-25_223956_93f9be68.png",
                aspect: "aspect-[3/4]"
              },
              {
                title: "White Rose Contemporary",
                event: "Daytime Royal Wedding",
                image: "/assets/aistudio/Screenshot_2026-10-25_224153_937514fc.png",
                aspect: "aspect-[3/4]"
              },
              {
                title: "Palace Destination Royalty",
                event: "Grand Evening Reception",
                image: "/assets/aistudio/Screenshot_2026-10-25_223541_a11b4b30.png",
                aspect: "aspect-[3/4]"
              }
            ].map((look, i) => (
              <div
                key={i}
                className="group relative bg-[#160F24] border border-[#705EFF]/30 p-2 sm:p-2.5 shadow-xl hover:border-[#FF6082] hover:shadow-[0_12px_35px_rgba(255,96,130,0.25)] transition-all duration-500 flex flex-col justify-between"
              >
                {/* 4 Corner Accents */}
                <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-[#FF6082] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-[#FF6082] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-[#B26CFF] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-[#B26CFF] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />

                {/* Inner Bordered Image Container - Engineered to show full photo */}
                <div className="relative w-full aspect-[4/5] overflow-hidden border border-[#705EFF]/25 bg-[#09040F] flex items-center justify-center">
                  <img
                    src={look.image}
                    alt={look.title}
                    className="w-full h-full object-contain filter brightness-[0.98] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />

                  {/* Shimmer sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FF6082]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                </div>

                {/* Caption Plate Below Image */}
                <div className="pt-2.5 pb-1 px-1.5 flex flex-col justify-start">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#FF6082] font-semibold block mb-0.5">
                    {look.event}
                  </span>
                  <h4 className="font-serif text-base text-[#FFE4F6] group-hover:text-[#FF6082] transition-colors leading-snug">
                    {look.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Luxury Kit Vault */}
        <div className="bg-[#160F24] border border-[#705EFF]/30 p-8 sm:p-12 mb-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
                THE KIT ARCHIVE
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#FFE4F6] font-normal mt-1 mb-4">
                Global Luxury Formulations
              </h2>
              <p className="text-xs sm:text-sm text-[#D8CEE8] font-light leading-relaxed mb-6">
                Your skin touches only authentic, non-comedogenic luxury cosmetics imported directly from Paris, New York, and London. Zero compromise on camera flash-back, tear-resistance, and luminous longevity.
              </p>
              <div className="flex items-center gap-3 text-xs text-[#FFE4F6]">
                <ShieldCheck className="w-4 h-4 text-[#FF6082]" />
                <span>100% Guaranteed Original & Sanitized Tools</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {ARTIST_DATA.luxuryProducts.map((prod) => (
                  <div
                    key={prod.brand}
                    className="p-3.5 bg-[#0D0714] border border-[#705EFF]/25 flex flex-col justify-between hover:border-[#FF6082]/60 transition-colors"
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

        {/* Bridal FAQs */}
        <div className="max-w-3xl mx-auto bg-[#160F24] border border-[#705EFF]/30 p-8 sm:p-10 mb-16 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF6082] font-semibold">
              BRIDAL ADVISORY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#FFE4F6] mt-1 font-normal">
              Frequently Asked Bridal Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="border-b border-[#705EFF]/20 pb-4 last:border-b-0">
                <h4 className="text-xs uppercase tracking-wider text-[#FFE4F6] font-semibold mb-2">
                  {item.q}
                </h4>
                <p className="text-xs text-[#D8CEE8] leading-relaxed font-light">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <button
            onClick={onBookBridal}
            className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.25em] font-bold transition-opacity shadow-xl shadow-[#705EFF]/30 cursor-pointer"
          >
            <span>START YOUR BRIDAL CONSULTATION</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

      </div>
    </div>
  );
};
