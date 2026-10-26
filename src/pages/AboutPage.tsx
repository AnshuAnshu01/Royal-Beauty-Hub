import React from 'react';
import { ShieldCheck, Award, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

interface AboutPageProps {
  onBookConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBookConsultation }) => {
  return (
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Proper Landscape AI-Generated Hero Section */}
      <div className="relative w-full h-[52vh] min-h-[380px] max-h-[580px] overflow-hidden bg-[#0D0714]">
        <img
          src="/assets/heroes/about_hero.jpg"
          alt="Royal Beauty Hub Luxury Atelier"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0714] via-[#0D0714]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0714]/85 via-transparent to-[#0D0714]/70" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 sm:pb-14">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#FF6082]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
                THE ATELIER HERITAGE
              </span>
              <span className="w-6 h-[2px] bg-[#705EFF]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
              About Royal Beauty Hub & <br />
              <span className="text-blue-reveal italic font-light">
                The Couture Vision
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal mb-4">
            Where Modern Indian Brides Find Their Authentic Grandeur
          </h2>
          <p className="text-sm sm:text-base text-[#4A3A5E] font-light leading-relaxed">
            Founded with the philosophy that royal elegance is not about heavy cosmetic masking, but about revealing the luminous truth of each bride's natural beauty. Every appointment at Royal Beauty Hub is an unhurried, private atelier experience designed for weddings of timeless distinction.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          <div className="glass-card p-6 sm:p-8 text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#705EFF]/10 border border-[#705EFF]/30 flex items-center justify-center text-[#705EFF] mx-auto mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-[#1A0B26] font-semibold mb-2">
                Couture Artistry
              </h3>
              <p className="text-xs text-[#4A3A5E] leading-relaxed font-light">
                Every look is designed collaboratively around your ceremonial outfits, family heirlooms, lighting conditions, and skin undertones.
              </p>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#FF6082]/10 border border-[#FF6082]/30 flex items-center justify-center text-[#FF6082] mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-[#1A0B26] font-semibold mb-2">
                Hygiene & Precision
              </h3>
              <p className="text-xs text-[#4A3A5E] leading-relaxed font-light">
                Medical-grade hygiene, disposable wands, and cryo-sanitized brush protocols ensure pristine skin safety and flawless pigment blending.
              </p>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/30 flex items-center justify-center text-[#1E3A8A] mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-[#1A0B26] font-semibold mb-2">
                24-Hour Longevity
              </h3>
              <p className="text-xs text-[#4A3A5E] leading-relaxed font-light">
                Micro-setting techniques ensure your glass skin, defined eyes, and sculpted contour stay luminous throughout rituals and evening festivities.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="glass-panel p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1A0B26] mb-3">
            Begin Your Bridal Journey Today
          </h3>
          <p className="text-xs sm:text-sm text-[#4A3A5E] font-light max-w-lg mx-auto mb-6">
            Inquire early to guarantee date availability for your sacred wedding ceremonies.
          </p>
          <button
            onClick={onBookConsultation}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-lg shadow-[#FF6082]/25 cursor-pointer"
          >
            <span>Book Exclusive Consultation</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

      </div>
    </div>
  );
};
