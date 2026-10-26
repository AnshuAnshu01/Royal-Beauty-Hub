import React from 'react';
import { ArrowRight, Award, ShieldCheck, MapPin, Compass, Heart } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

interface AboutPageProps {
  onBookConsultation: () => void;
  currentLang: 'EN' | 'HI';
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBookConsultation, currentLang }) => {
  return (
    <div className="pt-24 pb-28 bg-[#0D0714] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto pt-8 pb-14 border-b border-[#705EFF]/25">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#FF6082]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              THE ARTIST & ATELIER
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#FF6082]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#FFE4F6] font-normal tracking-tight mb-4">
            Meet Gautam Aadi
          </h1>

          <p className="text-sm sm:text-base text-[#D8CEE8] font-light leading-relaxed max-w-2xl mx-auto">
            Celebrity makeup artist, bridal educator, and founder of the premier luxury beauty atelier in Bihar, trusted by over 500 brides across India.
          </p>
        </div>

        {/* Narrative & Portrait Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-16 mb-24">
          
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 border border-[#705EFF]/30 translate-x-2 translate-y-2 pointer-events-none" />
              
              <div className="relative bg-[#160F24] border border-[#705EFF]/40 shadow-2xl p-3 group">
                {/* 4 Corner Accents */}
                <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#FF6082]" />
                <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#FF6082]" />
                <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#B26CFF]" />
                <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#B26CFF]" />

                {/* Inner Bordered Image Container - Engineered to show full photo */}
                <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden border border-[#705EFF]/30 bg-[#09040F] flex items-center justify-center">
                  <img
                    src="/assets/aistudio/Screenshot_2026-10-25_224048_8767214b.png"
                    alt="Gautam Aadi Bridal Artistry"
                    className="w-full h-full object-contain filter brightness-[0.98] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                  
                  {/* Subtle Shimmer Sweep on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FF6082]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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

              <div className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-[#FF6082]" />
              <div className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-[#705EFF]" />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FFE4F6] font-normal leading-tight mb-6">
              Enhancing your innate grace. <br />
              <span className="italic font-light royal-gradient-text">
                Crafting your timeless memory.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#D8CEE8] leading-relaxed mb-6 font-light">
              Gautam Aadi embarked on his beauty journey with a definitive vision: elevating Indian bridal adornment to the heights of high-fashion editorial couture while respecting age-old traditions and rituals.
            </p>

            <p className="text-xs sm:text-sm text-[#9E8EB0] leading-relaxed mb-8 font-light">
              Rather than adopting generic, one-size-fits-all bridal techniques, Gautam meticulously evaluates each bride's facial symmetry, eye contours, skin undertone, heirloom jewelry weight, and lehenga embroidery palette. The result is a seamless, featherweight bridal presence that radiates under venue chandeliers, daylight ceremonies, and high-definition 4K photography.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 border-t border-[#705EFF]/25 mb-8">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#FF6082] mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#FFE4F6] font-semibold mb-1">
                    Authentic Luxury Formulations
                  </h4>
                  <p className="text-xs text-[#9E8EB0]">
                    Only original Dior, Charlotte Tilbury, Huda Beauty, NARS, and MAC in our kit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#FF6082] mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#FFE4F6] font-semibold mb-1">
                    Pan-India & Destination Travel
                  </h4>
                  <p className="text-xs text-[#9E8EB0]">
                    Serving brides across Bihar, UP, Bengal, Rajasthan palaces, and metro hubs.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onBookConsultation}
                className="px-8 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.2em] font-bold transition-opacity shadow-xl shadow-[#705EFF]/25 cursor-pointer"
              >
                REQUEST BRIDAL CONSULTATION →
              </button>
            </div>
          </div>

        </div>

        {/* Studio & Academy Section */}
        <div className="bg-[#160F24] border border-[#705EFF]/30 p-8 sm:p-12 mb-16 shadow-xl">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              THE ATELIER & MASTERCLASSES
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#FFE4F6] font-normal mt-1 mb-4">
              Flagship Studio & Beauty Academy
            </h3>
            <p className="text-xs sm:text-sm text-[#D8CEE8] font-light leading-relaxed mb-6">
              In addition to bespoke bridal bookings, Gautam Aadi hosts professional masterclasses and certification academies in Aurangabad and Patna, training aspiring makeup artists in the art of HD micro-layering, airbrush mastery, and traditional dupatta architectural styling.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#FFE4F6]">
              <span className="flex items-center gap-1.5 bg-[#0D0714] px-3 py-1.5 border border-[#705EFF]/30">
                <MapPin className="w-3.5 h-3.5 text-[#FF6082]" />
                Aurangabad Atelier (Bihar)
              </span>
              <span className="flex items-center gap-1.5 bg-[#0D0714] px-3 py-1.5 border border-[#705EFF]/30">
                <Compass className="w-3.5 h-3.5 text-[#B26CFF]" />
                Destination Bridal Services Worldwide
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
