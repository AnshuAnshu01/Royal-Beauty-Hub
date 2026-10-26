import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS, ARTIST_DATA } from '../data/makeupData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stats = [
    { number: "500+", label: "Brides Adorned", subtitle: "Across 15+ Indian cities" },
    { number: "6+", label: "Years Experience", subtitle: "Bridal & celebrity artistry" },
    { number: "1,200+", label: "Transformations", subtitle: "Traditional, HD & Airbrush" },
    { number: "100%", label: "Personalized Looks", subtitle: "Zero generic cookie-cutter styles" },
  ];

  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-[#160F24] border-t border-[#705EFF]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Numbers & Trust Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 pb-16 border-b border-[#705EFF]/20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#0D0714] border border-[#705EFF]/25 text-center flex flex-col justify-center items-center hover:border-[#B26CFF] transition-colors shadow-lg"
            >
              <span className="font-serif text-3xl sm:text-5xl text-[#FFE4F6] font-light mb-1">
                {stat.number}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#B26CFF] font-medium mb-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-[#9E8EB0]">
                {stat.subtitle}
              </span>
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1.5px] bg-[#FF6082]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              KIND WORDS FROM OUR BRIDES
            </span>
            <span className="w-8 h-[1.5px] bg-[#B26CFF]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#FFE4F6] font-normal tracking-tight mb-4">
            Sacred Celebrations Remembered
          </h2>

          <p className="text-sm sm:text-base text-[#D8CEE8] font-light">
            Real stories and heartfelt impressions from the brides who trusted Gautam Aadi on their most meaningful day.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#0D0714] border border-[#705EFF]/30 p-8 sm:p-10 flex flex-col justify-between relative shadow-xl hover:border-[#B26CFF] transition-all duration-300"
            >
              {/* Royal Quote Mark & Verified Indicator */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] uppercase tracking-wider text-[#FF6082] font-semibold bg-[#FF6082]/10 px-2.5 py-1 rounded-sm">
                  Verified Bride
                </span>
                <Quote className="w-8 h-8 text-[#B26CFF]/35" />
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-base sm:text-lg text-[#FFE4F6] leading-relaxed mb-8 font-light italic">
                “{t.review}”
              </blockquote>

              {/* Bride Author Info */}
              <div className="pt-6 border-t border-[#705EFF]/20 flex items-center gap-4">
                <div className="relative p-1 bg-[#160F24] border border-[#705EFF]/50 shrink-0">
                  <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-[#FF6082]" />
                  <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 border-t border-r border-[#B26CFF]" />
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

      </div>
    </section>
  );
};
