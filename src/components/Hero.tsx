import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
  currentLang: 'EN' | 'HI';
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick, currentLang }) => {
  return (
    <section id="hero-section" className="relative h-[100dvh] min-h-[100dvh] max-h-[100dvh] w-full flex items-center bg-[#0D0714] overflow-hidden">
      {/* Background Video Layer covering 100% of the viewport frame */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/aistudio/Royal Beauty Hub Logo.png"
          className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.08] scale-105"
        >
          <source src="/assets/aistudio/HERO.mp4" type="video/mp4" />
        </video>

        {/* Seamless Full-Width Cinematic Scrim Overlays - No Side Partitions */}
        <div className="hero-main-scrim absolute inset-0 w-full pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#B26CFF]/15 blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Layout - Safely positioned below the fixed navbar across all screen heights */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8">
        <div className="max-w-xl lg:max-w-2xl flex flex-col justify-center">
          
          {/* Eyebrow kicker with generous clearance from navbar */}
          <div className="inline-flex items-center gap-2 mb-2.5 sm:mb-3.5">
            <span className="w-5 sm:w-6 h-[1.5px] bg-[#FF6082]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              {currentLang === 'EN' ? 'THE ART OF LUXURY BEAUTY' : 'सौंदर्य की सर्वोच्च कला'}
            </span>
            <span className="w-5 sm:w-6 h-[1.5px] bg-[#B26CFF]" />
          </div>

          {/* Elegant Serif Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#FFE4F6] leading-[1.1] tracking-tight mb-2.5 sm:mb-3.5">
            {currentLang === 'EN' ? (
              <>
                Where Beauty <br />
                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFE4F6] via-[#B26CFF] to-[#FF6082]">
                  Becomes Art
                </span>
              </>
            ) : (
              <>
                जहां रूप और श्रृंगार <br />
                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFE4F6] via-[#B26CFF] to-[#FF6082]">
                  कला बन जाता है
                </span>
              </>
            )}
          </h1>

          {/* Sleek Minimal Royal Gradient Line Divider */}
          <div className="flex items-center gap-2 my-2 sm:my-3">
            <div className="w-12 sm:w-16 h-[1.5px] bg-[#FF6082]" />
            <div className="w-20 sm:w-28 h-[1.5px] bg-gradient-to-r from-[#B26CFF] to-transparent" />
          </div>

          {/* Luxury Statement */}
          <p className="text-xs sm:text-sm lg:text-base text-[#D8CEE8] leading-relaxed max-w-lg font-light mb-3.5 sm:mb-5 drop-shadow-sm line-clamp-3 sm:line-clamp-none">
            {currentLang === 'EN'
              ? 'Luxury bridal makeup and beauty artistry crafted around your individuality. Redefining modern regal brides with timeless elegance and ethereal glass skin.'
              : 'आपकी विशिष्ट सुंदरता और शालीनता के अनुरूप लक्जरी ब्राइडल मेकअप। रॉयल्टी, प्राकृतिक चमक और 24-घंटे चलने वाले वाटरप्रूफ फिनिश के साथ।'}
          </p>

          {/* CTAs: Responsive button sizing with bespoke royal palette */}
          <div className="flex flex-row items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <button
              onClick={onBookClick}
              className="group flex-1 sm:flex-initial inline-flex items-center justify-center px-4 sm:px-8 py-2.5 sm:py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-lg shadow-[#FF6082]/25 hover:shadow-[#FF6082]/40 cursor-pointer text-center"
            >
              <span className="text-white font-bold">{currentLang === 'EN' ? 'BOOK DATE' : 'तारीख बुक करें'}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1 text-white" />
            </button>

            <button
              onClick={onExploreClick}
              className="hero-explore-btn flex-1 sm:flex-initial inline-flex items-center justify-center px-4 sm:px-8 py-2.5 sm:py-3.5 border transition-all duration-300 cursor-pointer backdrop-blur-md text-center text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold shadow-md"
            >
              <span className="hero-explore-btn-text">{currentLang === 'EN' ? 'SERVICES' : 'सेवाएं'}</span>
              <span className="ml-1.5 text-[#FF6082]">→</span>
            </button>
          </div>

          {/* Subtle Trust Indicators */}
          <div className="pt-3 sm:pt-4 border-t border-[#705EFF]/25 grid grid-cols-3 gap-2 sm:gap-4 max-w-md">
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl text-[#FFE4F6] font-light">500+</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#9E8EB0]">Brides</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl text-[#B26CFF] font-light">6+ Yrs</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#9E8EB0]">Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl text-[#FF6082] font-light">Pan-India</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#9E8EB0]">Travel</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
