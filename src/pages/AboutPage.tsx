import React from 'react';
import { ShieldCheck, Award, Sparkles, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onBookConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBookConsultation }) => {
  return (
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Royal Palette Gradient Hero Banner (No background image, pure luxury gradient & separate palette glows) */}
      <div className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#120524] via-[#1E0938] to-[#0A0314] overflow-hidden text-white border-b border-[#705EFF]/25">
        <div className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-[#705EFF]/25 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#FF6082]/20 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 rounded-full bg-[#B26CFF]/20 blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <span className="font-cursive text-3xl sm:text-4xl text-[#FF6082] block mb-2">
            Our Story & Passion
          </span>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#FF6082]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B26CFF] font-semibold">
              About Our Studio
            </span>
            <span className="w-5 h-[2px] bg-[#705EFF]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight mb-4">
            About Royal Beauty Hub
          </h1>
          <p className="text-sm sm:text-base text-[#D8CEE8] font-light max-w-xl leading-relaxed">
            We believe wedding makeup should make you feel confident, radiant, and true to yourself on one of the most memorable days of your life.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="font-cursive text-3xl text-[#705EFF] block mb-2">
            Where Elegance Meets Warmth
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal mb-4">
            Celebrating Natural Beauty with Every Bride
          </h2>
          <p className="text-sm sm:text-base text-[#4A3A5E] font-light leading-relaxed">
            Royal Beauty Hub was started with a simple belief: makeup should highlight who you are, not cover you up. We provide an unhurried, peaceful experience where every detail—from your skin prep to your jewelry and dupatta—is looked after with care.
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
                Custom Styling
              </h3>
              <p className="text-xs text-[#4A3A5E] leading-relaxed font-light">
                Each look is created specifically for you, taking into account your outfit color, ceremony lighting, and personal taste.
              </p>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#FF6082]/10 border border-[#FF6082]/30 flex items-center justify-center text-[#FF6082] mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-[#1A0B26] font-semibold mb-2">
                Hygiene First
              </h3>
              <p className="text-xs text-[#4A3A5E] leading-relaxed font-light">
                We use deeply sanitized brushes and premium skincare brands so your skin stays healthy, comfortable, and glowing.
              </p>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/30 flex items-center justify-center text-[#1E3A8A] mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-[#1A0B26] font-semibold mb-2">
                All-Day Freshness
              </h3>
              <p className="text-xs text-[#4A3A5E] leading-relaxed font-light">
                Our lightweight layering technique ensures your look stays fresh, sweat-proof, and photo-ready through rituals and dancing.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="glass-panel p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <span className="font-cursive text-3xl text-[#FF6082] block mb-2">
            Let's Talk About Your Wedding Day
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1A0B26] mb-3">
            Plan Your Look with Gautam Aadi
          </h3>
          <p className="text-xs sm:text-sm text-[#4A3A5E] font-light max-w-lg mx-auto mb-6">
            Get in touch early to ensure your wedding date is reserved.
          </p>
          <button
            onClick={onBookConsultation}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-lg shadow-[#FF6082]/25 cursor-pointer rounded-sm hover:opacity-95 transition-all"
          >
            <span>Check Date Availability</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

      </div>
    </div>
  );
};
