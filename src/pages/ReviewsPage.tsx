import React from 'react';
import { Star, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, ARTIST_DATA } from '../data/makeupData';

interface ReviewsPageProps {
  onBookClick: () => void;
  currentLang: 'EN' | 'HI';
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onBookClick, currentLang }) => {
  const stats = [
    { number: "500+", label: "Brides Adorned", subtitle: "Across 15+ Indian cities" },
    { number: "6+", label: "Years Experience", subtitle: "Bridal & celebrity artistry" },
    { number: "1,200+", label: "Transformations", subtitle: "Traditional, HD & Airbrush" },
    { number: "100%", label: "Personalized Looks", subtitle: "Zero generic cookie-cutter styles" },
  ];

  return (
    <div className="pt-24 pb-28 bg-[#0D0714] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto pt-8 pb-14 border-b border-[#705EFF]/25">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#FF6082]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              KIND WORDS FROM OUR BRIDES
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#FF6082]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#FFE4F6] font-normal tracking-tight mb-4">
            Love Letters & Reviews
          </h1>

          <p className="text-sm sm:text-base text-[#D8CEE8] font-light leading-relaxed max-w-2xl mx-auto">
            Honored impressions from genuine brides who chose Gautam Aadi for their wedding vows, sangeet galas, and grand reception ceremonies.
          </p>
        </div>

        {/* Numbers & Trust Counter */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-16 pb-16 border-b border-[#705EFF]/25">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#160F24] border border-[#705EFF]/30 text-center flex flex-col justify-center items-center hover:border-[#FF6082] transition-colors shadow-lg"
            >
              <span className="font-serif text-3xl sm:text-5xl text-[#FF6082] font-light mb-1">
                {stat.number}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#FFE4F6] font-medium mb-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-[#9E8EB0]">
                {stat.subtitle}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#160F24] border border-[#705EFF]/30 p-8 sm:p-10 flex flex-col justify-between relative shadow-xl hover:border-[#FF6082] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-[#FF6082]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF6082]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#B26CFF]/25" />
              </div>

              <blockquote className="font-serif text-base sm:text-lg text-[#FFE4F6] leading-relaxed mb-8 font-light italic">
                “{t.review}”
              </blockquote>

              <div className="pt-6 border-t border-[#705EFF]/20 flex items-center gap-4">
                <div className="relative p-1 bg-[#0D0714] border border-[#705EFF]/40 shrink-0">
                  <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-[#FF6082]" />
                  <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 border-t border-r border-[#FF6082]" />
                  <div className="w-13 h-16 overflow-hidden border border-[#705EFF]/30 bg-[#09040F] flex items-center justify-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-base text-[#FFE4F6] font-medium">
                    {t.name}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#FF6082]">
                    {t.lookTitle}
                  </span>
                  <span className="text-[10px] text-[#9E8EB0]">
                    {t.location} • {t.eventDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Callout */}
        <div className="text-center bg-[#160F24] border border-[#705EFF]/35 p-10 max-w-3xl mx-auto shadow-2xl">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#FFE4F6] mb-3">
            Ready to Create Your Own Unforgettable Bridal Memory?
          </h2>
          <p className="text-xs sm:text-sm text-[#D8CEE8] max-w-lg mx-auto mb-6 font-light">
            Slots for the 2025–2026 wedding calendar are filling quickly. Contact our concierge to reserve your auspicious date.
          </p>
          <button
            onClick={onBookClick}
            className="px-8 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.2em] font-bold transition-opacity shadow-xl shadow-[#705EFF]/25 cursor-pointer"
          >
            RESERVE YOUR DATE NOW →
          </button>
        </div>

      </div>
    </div>
  );
};
