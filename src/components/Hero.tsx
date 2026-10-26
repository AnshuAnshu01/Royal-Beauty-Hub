import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[calc(100dvh-76px)] w-full flex items-center bg-[#0D0714] overflow-hidden"
    >
      {/* Background Video Layer covering 100% of the Hero viewport frame */}
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

        {/* Seamless Full-Width Cinematic Scrim Overlays - Light/Vibrant Gradient Blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0714]/90 via-[#0D0714]/65 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0D0714]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0D0714]/70 to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-[#705EFF]/20 blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Layout - Perfectly aligned with zero header overlap */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-xl lg:max-w-2xl flex flex-col justify-center">
          
          {/* Eyebrow Kicker */}
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-5 sm:w-6 h-[2px] bg-[#FF6082]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              THE ART OF LUXURY BEAUTY
            </span>
            <span className="w-5 sm:w-6 h-[2px] bg-[#705EFF]" />
          </div>

          {/* Elegant Serif Headline with Text Blue Reveal Effect */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#FFE4F6] leading-[1.08] tracking-tight mb-3 sm:mb-4">
            Where Beauty <br />
            <span className="text-blue-reveal italic font-light">
              Becomes Art
            </span>
          </h1>

          {/* Sleek Minimal Royal Gradient Line Divider */}
          <div className="flex items-center gap-2 my-2 sm:my-3">
            <div className="w-12 sm:w-16 h-[2px] bg-[#FF6082]" />
            <div className="w-20 sm:w-28 h-[2px] bg-gradient-to-r from-[#705EFF] to-transparent" />
          </div>

          {/* Luxury Statement */}
          <p className="text-xs sm:text-sm lg:text-base text-[#E5D5EE] leading-relaxed max-w-lg font-light mb-5 sm:mb-7 drop-shadow-sm">
            Luxury bridal makeup and beauty artistry crafted around your individuality. Redefining modern regal brides with timeless elegance and ethereal glass skin.
          </p>

          {/* CTAs: Responsive button sizing with bespoke royal palette */}
          <div className="flex flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button
              onClick={onBookClick}
              className="group flex-1 sm:flex-initial inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-lg shadow-[#FF6082]/30 hover:shadow-[#FF6082]/50 cursor-pointer text-center"
            >
              <span>BOOK DATE</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-white" />
            </button>

            <button
              onClick={onExploreClick}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-3.5 border border-white/40 hover:border-white bg-white/10 hover:bg-white/20 text-white transition-all duration-300 cursor-pointer backdrop-blur-md text-center text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold shadow-md"
            >
              <span>SERVICES</span>
              <span className="ml-2 text-[#FF6082]">→</span>
            </button>
          </div>

          {/* Subtle Trust Indicators */}
          <div className="pt-4 border-t border-[#705EFF]/30 grid grid-cols-3 gap-2 sm:gap-4 max-w-md">
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl text-[#FFE4F6] font-light">500+</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#B26CFF]">Royal Brides</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl text-[#FF6082] font-light">6+ Yrs</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#B26CFF]">Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl text-white font-light">Pan-India</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#B26CFF]">Travel</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
