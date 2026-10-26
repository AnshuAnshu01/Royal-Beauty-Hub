import React from 'react';
import { ArrowRight, ShieldCheck, Gem, Heart, CheckCircle2, Sparkles } from 'lucide-react';
import { BRIDAL_ATELIER_STEPS, ARTIST_DATA, FAQ_ITEMS } from '../data/makeupData';

interface BridalPageProps {
  onBookBridal: () => void;
}

export const BridalPage: React.FC<BridalPageProps> = ({ onBookBridal }) => {
  return (
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Proper Landscape AI-Generated Hero Section */}
      <div className="relative w-full h-[54vh] min-h-[400px] max-h-[600px] overflow-hidden bg-[#0D0714]">
        <img
          src="/assets/heroes/bridal_hero.jpg"
          alt="Regal Indian Royal Bride"
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0714] via-[#0D0714]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0714]/85 via-transparent to-[#0D0714]/70" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 sm:pb-14">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#FF6082]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
                THE BRIDAL ATELIER
              </span>
              <span className="w-6 h-[2px] bg-[#705EFF]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
              Your Bespoke <br />
              <span className="text-blue-reveal italic font-light">
                Bridal Journey
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Intro Manifesto */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal mb-4">
            A Sacred Rite of Passage Crafted with Couture Rigor
          </h2>
          <p className="text-sm sm:text-base text-[#4A3A5E] font-light leading-relaxed mb-6">
            Every brush stroke harmonizes with your facial bone architecture, bridal jewelry weight, veil draping, and sacred rituals. Designed to look breathtaking under intimate wedding candlelight and immaculate in 4K cinematography.
          </p>
          <button
            onClick={onBookBridal}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-lg shadow-[#FF6082]/25 hover:opacity-95 transition-all cursor-pointer"
          >
            <span>Reserve Your Bridal Dates</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* 4-Step Process Grid */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold block mb-2">
              THE 4-STEP ATELIER METHOD
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#1A0B26]">
              From Consultation to Sacred Vows
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

        {/* The Kit Archive */}
        <div className="glass-panel p-6 sm:p-12 mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold block mb-2">
                AUTHENTIC PRODUCT ARCHIVE
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal mb-4">
                Global Luxury Formulations
              </h3>
              <p className="text-xs sm:text-sm text-[#4A3A5E] font-light leading-relaxed mb-6">
                Your skin touches only authentic, non-comedogenic luxury cosmetics imported from Paris, London, and New York. Zero flashback, sweatproof longevity, and luminous glass skin all night.
              </p>
              <div className="flex items-center gap-2.5 text-xs text-[#705EFF] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#FF6082]" />
                <span>100% Guaranteed Original & Sanitized Tools</span>
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
              FREQUENT INQUIRIES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A0B26]">
              Bridal Concierge FAQs
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
