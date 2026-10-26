import React from 'react';
import { Award, Sparkles, Heart, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

interface FounderPageProps {
  onBookClick: () => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({ onBookClick }) => {
  return (
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Proper Landscape AI-Generated Hero Section */}
      <div className="relative w-full h-[52vh] min-h-[380px] max-h-[580px] overflow-hidden bg-[#0D0714]">
        <img
          src="/assets/heroes/founder_hero.jpg"
          alt="Gautam Aadi Master Makeup Artist & Founder"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />
        {/* Soft luxury scrim overlay with violet-blue glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0714] via-[#0D0714]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0714]/85 via-transparent to-[#0D0714]/70" />

        {/* Hero Title Container */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 sm:pb-14">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#FF6082]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
                FOUNDER & CREATIVE DIRECTOR
              </span>
              <span className="w-6 h-[2px] bg-[#705EFF]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
              Gautam Aadi <br />
              <span className="text-blue-reveal italic font-light">
                The Master Artist
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area with Glassmorphism & Perfect Mobile Alignment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Editorial Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-24">
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Profile Portrait Card */}
              <div className="glass-card p-3 sm:p-4 rounded-none shadow-2xl relative">
                <img
                  src={ARTIST_DATA.profileImage}
                  alt="Gautam Aadi"
                  className="w-full aspect-[3/4] object-cover object-top border border-[#705EFF]/20"
                />
                <div className="pt-3 pb-1 text-center">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1A0B26]">
                    Gautam Aadi
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#705EFF] font-medium mt-0.5">
                    Celebrity & Royal Bridal Artist
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#FF6082]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF6082] font-semibold">
                ATELIER PHILOSOPHY
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal leading-tight">
              "Every bride carries an innate royalty. My craft is to honor her bone architecture and let her radiance shine without a mask."
            </h2>

            <p className="text-sm text-[#4A3A5E] font-light leading-relaxed">
              With over six years of dedicated mastery in high-definition bridal artistry, Gautam Aadi has sculpted ethereal wedding looks for more than 500 discerning brides across India and abroad. Trained with master cosmetic chemists and global editorial stylists, Gautam treats every bridal appointment not as routine grooming, but as a sacred ritual of transformation.
            </p>

            <p className="text-sm text-[#4A3A5E] font-light leading-relaxed">
              Renowned for his signature "Second-Skin Glass Glow" technique, Gautam blends micro-pigments that withstand intense 4K wedding cinematography, ceremonial heat, and sentimental tears while looking breathable and feather-light in person.
            </p>

            {/* Credential Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-[#705EFF]/15">
              <div className="glass-card p-3 sm:p-4 text-center">
                <span className="font-serif text-xl sm:text-3xl text-[#705EFF] font-bold block">500+</span>
                <span className="text-[10px] sm:text-xs text-[#7A698F] uppercase tracking-wider">Royal Brides</span>
              </div>
              <div className="glass-card p-3 sm:p-4 text-center">
                <span className="font-serif text-xl sm:text-3xl text-[#FF6082] font-bold block">100%</span>
                <span className="text-[10px] sm:text-xs text-[#7A698F] uppercase tracking-wider">Luxury Kits</span>
              </div>
              <div className="glass-card p-3 sm:p-4 text-center">
                <span className="font-serif text-xl sm:text-3xl text-[#1E3A8A] font-bold block">6+</span>
                <span className="text-[10px] sm:text-xs text-[#7A698F] uppercase tracking-wider">Years Craft</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-lg shadow-[#FF6082]/25 hover:opacity-95 transition-all cursor-pointer"
              >
                <span>Reserve Consultation with Gautam</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Master Accolades & Techniques */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold block mb-2">
              SIGNATURE TECHNIQUE & DISTINCTION
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26]">
              Why Royal Brides Trust Gautam Aadi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#705EFF]/10 border border-[#705EFF]/30 flex items-center justify-center text-[#705EFF] mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#1A0B26] font-semibold mb-2">
                  Facial Bone Geometry
                </h3>
                <p className="text-xs text-[#4A3A5E] leading-relaxed font-light">
                  Custom contouring and lighting formulas mapped precisely to your jawline, cheek symmetry, and temple structure under 360-degree photography lighting.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FF6082]/10 border border-[#FF6082]/30 flex items-center justify-center text-[#FF6082] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#1A0B26] font-semibold mb-2">
                  Cryo-Sanitized Tool Kits
                </h3>
                <p className="text-xs text-[#4A3A5E] leading-relaxed font-light">
                  Strict dermatological hygiene protocols. Every brush, sponge, and palette is sealed and sterilized before your ceremony session.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/30 flex items-center justify-center text-[#1E3A8A] mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#1A0B26] font-semibold mb-2">
                  Couture Dupatta Draping
                </h3>
                <p className="text-xs text-[#4A3A5E] leading-relaxed font-light">
                  Mastery of traditional and contemporary regional draping styles (Gujarati, Sabyasachi double-pallu, South Indian Kanjivaram pleating, and Rajputana odhna).
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
