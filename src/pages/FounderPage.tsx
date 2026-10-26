import React from 'react';
import { Award, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

interface FounderPageProps {
  onBookClick: () => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({ onBookClick }) => {
  return (
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Royal Palette Gradient Hero Banner (No background image, pure luxury gradient & separate palette glows) */}
      <div className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#120524] via-[#1E0938] to-[#0A0314] overflow-hidden text-white border-b border-[#705EFF]/25">
        <div className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-[#705EFF]/25 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#FF6082]/20 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 rounded-full bg-[#B26CFF]/20 blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <span className="font-cursive text-3xl sm:text-4xl text-[#FF6082] block mb-2">
            The Heart Behind the Art
          </span>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#FF6082]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B26CFF] font-semibold">
              Meet Gautam Aadi
            </span>
            <span className="w-5 h-[2px] bg-[#705EFF]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight mb-4">
            Gautam Aadi
          </h1>
          <p className="text-sm sm:text-base text-[#D8CEE8] font-light max-w-xl leading-relaxed">
            With 6+ years of bridal experience and over 500 happy brides, Gautam is committed to giving you a personal, comfortable, and memorable wedding experience.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-24">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="glass-card p-3 sm:p-4 rounded-none shadow-2xl relative">
                {/* 4 Corner Accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#FF6082] pointer-events-none z-20" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#B26CFF] pointer-events-none z-20" />
                <div className="absolute bottom-16 left-2 w-3 h-3 border-b border-l border-[#705EFF] pointer-events-none z-20" />
                <div className="absolute bottom-16 right-2 w-3 h-3 border-b border-r border-[#FF6082] pointer-events-none z-20" />

                <div className="relative aspect-square sm:aspect-[4/5] w-full overflow-hidden border border-[#705EFF]/25 bg-gradient-to-b from-[#140A1E] to-[#0A0410] flex items-center justify-center">
                  <img
                    src="/assets/founder.jpg"
                    alt="Gautam Aadi – Founder & Lead Bridal Makeup Artist"
                    className="w-full h-full object-cover object-top filter brightness-[0.99] contrast-[1.02]"
                  />
                </div>
                <div className="pt-4 pb-2 text-center">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1A0B26]">
                    Gautam Aadi
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#705EFF] font-semibold mt-0.5">
                    Lead Bridal Makeup Artist
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="font-cursive text-2xl sm:text-3xl text-[#FF6082] block mb-1">
              "You are already beautiful"
            </span>
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#FF6082]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#705EFF] font-semibold">
                OUR PHILOSOPHY
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal leading-tight">
              "Makeup should never hide who you are. It should gently highlight your best features so you shine naturally."
            </h2>

            <p className="text-sm text-[#4A3A5E] font-light leading-relaxed">
              For over six years, Gautam Aadi has been dedicated to crafting graceful looks for brides across India. From morning pheras to late-night receptions, Gautam ensures your makeup is comfortable, weightless, and looks stunning in person as well as in photos and videos.
            </p>

            <p className="text-sm text-[#4A3A5E] font-light leading-relaxed">
              We understand how important your big day is. Gautam personally takes care of your makeup, hair styling, and dupatta setting so that you can relax and enjoy your celebration without any worry.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-[#705EFF]/15">
              <div className="glass-card p-3 sm:p-4 text-center">
                <span className="font-serif text-xl sm:text-3xl text-[#705EFF] font-bold block">500+</span>
                <span className="text-[10px] sm:text-xs text-[#7A698F] uppercase tracking-wider">Happy Brides</span>
              </div>
              <div className="glass-card p-3 sm:p-4 text-center">
                <span className="font-serif text-xl sm:text-3xl text-[#FF6082] font-bold block">100%</span>
                <span className="text-[10px] sm:text-xs text-[#7A698F] uppercase tracking-wider">Original Brands</span>
              </div>
              <div className="glass-card p-3 sm:p-4 text-center">
                <span className="font-serif text-xl sm:text-3xl text-[#1E3A8A] font-bold block">6+</span>
                <span className="text-[10px] sm:text-xs text-[#7A698F] uppercase tracking-wider">Years Experience</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-lg shadow-[#FF6082]/25 hover:opacity-95 transition-all cursor-pointer rounded-sm"
              >
                <span>Talk with Gautam Aadi</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* What You Can Expect */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold block mb-2">
              WHY CHOOSE US
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26]">
              Why Brides Trust Gautam
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#705EFF]/10 border border-[#705EFF]/30 flex items-center justify-center text-[#705EFF] mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#1A0B26] font-semibold mb-2">
                  Tailored to Your Face
                </h3>
                <p className="text-xs text-[#4A3A5E] leading-relaxed font-light">
                  We customize eye makeup, blush, and shades to complement your skin tone, wedding outfit color, and jewelry perfectly.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FF6082]/10 border border-[#FF6082]/30 flex items-center justify-center text-[#FF6082] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#1A0B26] font-semibold mb-2">
                  Clean & Sanitized Tools
                </h3>
                <p className="text-xs text-[#4A3A5E] leading-relaxed font-light">
                  We maintain strict cleanliness. All makeup brushes, beauty blenders, and tools are deep-cleaned and sanitized for every bride.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/30 flex items-center justify-center text-[#1E3A8A] mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#1A0B26] font-semibold mb-2">
                  Complete Saree & Dupatta Draping
                </h3>
                <p className="text-xs text-[#4A3A5E] leading-relaxed font-light">
                  Expert pin-up and secure draping for lehengas, sarees, and double veils so you can move with complete comfort and grace.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
