import React from 'react';
import { Sparkles } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    "ROYAL BRIDAL ATELIER",
    "ENGAGEMENT & ROKA",
    "RECEPTION GLAMOUR",
    "HD & AIRBRUSH ARTISTRY",
    "SANGEET & COCKTAIL",
    "COUTURE DUPATTA DRAPING",
    "LUXURY HAIR SCULPTURE",
    "DESTINATION WEDDINGS",
    "500+ ROYAL BRIDES",
    "100% GENUINE LUXURY BRANDS"
  ];

  // Duplicate items array to make the infinite right-to-left marquee seamless
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative z-20 bg-[#130626] border-y border-[#705EFF]/25 py-3 sm:py-3.5 overflow-hidden shadow-md select-none">
      {/* Left and Right subtle gradient fade edges for elegant entrance and exit */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 bg-gradient-to-r from-[#130626] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 bg-gradient-to-l from-[#130626] to-transparent z-10" />

      {/* Single-line continuous right-to-left moving ticker */}
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {duplicatedItems.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center shrink-0">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-medium text-[#FFE4F6] hover:text-[#FF6082] transition-colors cursor-default">
                {item}
              </span>
              <span className="inline-flex items-center mx-4 sm:mx-6 shrink-0">
                <Sparkles className="w-3 h-3 text-[#FF6082]/70" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
