import React from 'react';

export const TrustStrip: React.FC = () => {
  const items = [
    "ROYAL BRIDAL",
    "ENGAGEMENT & ROKA",
    "RECEPTION GLAMOUR",
    "HD & AIRBRUSH",
    "SANGEET & COCKTAIL",
    "COUTURE DRAPING",
    "HAIR SCULPTURE",
    "DESTINATION WEDDINGS"
  ];

  return (
    <div className="relative z-20 bg-[#160F24] border-y border-[#705EFF]/30 py-4 overflow-hidden shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop display */}
        <div className="hidden md:flex items-center justify-between text-xs tracking-[0.25em] text-[#FFE4F6] font-medium uppercase">
          {items.map((item, index) => (
            <React.Fragment key={item}>
              <span className="hover:text-[#FF6082] transition-colors">{item}</span>
              {index < items.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#B26CFF]/60 inline-block mx-2" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Marquee */}
        <div className="md:hidden flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap text-[11px] tracking-[0.2em] text-[#FFE4F6]">
          {items.map((item, index) => (
            <div key={item} className="flex items-center gap-4 shrink-0">
              <span className="hover:text-[#FF6082]">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B26CFF]/60 inline-block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
