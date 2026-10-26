import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Heart, MapPin } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

interface AboutArtistProps {
  onDiscoverMore: () => void;
  onBookClick: () => void;
  currentLang: 'EN' | 'HI';
}

export const AboutArtist: React.FC<AboutArtistProps> = ({ onDiscoverMore, onBookClick, currentLang }) => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0D0714] overflow-hidden">
      {/* Subtle royal lilac glow behind photo */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#B26CFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Portrait / Bridal Artistry Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer offset royal border accent */}
              <div className="absolute -inset-3 border border-[#705EFF]/30 translate-x-2 translate-y-2 pointer-events-none" />
              
              {/* Luxury Frame with art passe-partout padding */}
              <div className="relative bg-[#160F24] border border-[#705EFF]/40 shadow-2xl p-3 group">
                {/* 4 Corner Accents */}
                <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#FF6082]" />
                <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#B26CFF]" />
                <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#B26CFF]" />
                <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#FF6082]" />

                {/* Inner Bordered Image Container - Engineered to show full photo */}
                <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden border border-[#705EFF]/30 bg-[#09040F] flex items-center justify-center">
                  <img
                    src="/assets/aistudio/Screenshot_2026-10-25_224048_8767214b.png"
                    alt="Gautam Aadi Luxury Bridal Artistry"
                    className="w-full h-full object-contain filter brightness-[0.98] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                  
                  {/* Subtle Shimmer Sweep on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#B26CFF]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Signature Philosophy Caption Plate */}
                <div className="mt-3 p-3.5 bg-[#0D0714] border border-[#705EFF]/30 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#FF6082] font-semibold mb-0.5">
                      Signature Philosophy
                    </p>
                    <p className="font-serif text-xs sm:text-sm text-[#FFE4F6] italic">
                      “Skin that looks like royal skin, never a mask.”
                    </p>
                  </div>
                  <span className="w-2.5 h-2.5 border border-[#B26CFF] shrink-0 ml-3" />
                </div>
              </div>

              {/* Outer accent corner emblem */}
              <div className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-[#FF6082]" />
              <div className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-[#B26CFF]" />
            </div>
          </div>

          {/* Right Column: Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small uppercase kicker */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1.5px] bg-[#FF6082]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
                THE ARTIST & ATELIER
              </span>
            </div>

            {/* Large Statement Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FFE4F6] font-normal leading-[1.15] mb-6">
              Enhancing your beauty. <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFE4F6] via-[#B26CFF] to-[#FF6082]">
                Creating your sacred moment.
              </span>
            </h2>

            {/* Biography */}
            <p className="text-base text-[#D8CEE8] leading-relaxed mb-6 font-light">
              Founded by master beauty craftsman <strong className="text-[#FFE4F6] font-medium">Gautam Aadi</strong>, our atelier is revered for redefining Indian bridal makeup with high-fashion editorial sensitivity. Having adorned over 500 brides across Bihar, Uttar Pradesh, West Bengal, and luxury destination weddings, Gautam blends ancient Indian regal adornment with modern dermatological skincare science.
            </p>

            <p className="text-sm text-[#9E8EB0] leading-relaxed mb-8 font-light">
              Every appointment is treated as an intimate artistic collaboration. We curate bespoke skin preparation, analyze jewellery light reflection, customize waterproof undertones, and execute hair architecture that remains breathtaking and comfortable for 24 hours.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-4 border-t border-[#705EFF]/20">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#FF6082] mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#FFE4F6] font-semibold mb-1">
                    Couture Kit Authenticity
                  </h4>
                  <p className="text-xs text-[#9E8EB0]">
                    Exclusively Dior, Charlotte Tilbury, Huda Beauty & MAC. 100% original.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#B26CFF] mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#FFE4F6] font-semibold mb-1">
                    Pan-India Travel
                  </h4>
                  <p className="text-xs text-[#9E8EB0]">
                    Available for destination weddings across Rajasthan, Goa, and metro hubs.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={onDiscoverMore}
                className="group inline-flex items-center text-xs uppercase tracking-[0.25em] text-[#B26CFF] hover:text-[#FF6082] font-semibold transition-colors py-2 cursor-pointer"
              >
                <span>DISCOVER THE BRIDAL JOURNEY</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onBookClick}
                className="px-6 py-2.5 border border-[#705EFF]/50 hover:border-[#B26CFF] text-[#FFE4F6] hover:text-[#B26CFF] text-xs uppercase tracking-[0.2em] font-medium transition-all bg-[#160F24] cursor-pointer"
              >
                REQUEST CONSULTATION
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
