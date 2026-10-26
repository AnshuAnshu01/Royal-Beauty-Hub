import React, { useState } from 'react';
import { Clock, Check } from 'lucide-react';
import { SERVICES, MakeupService } from '../data/makeupData';

interface ServicesPageProps {
  onSelectServiceToBook: (service: MakeupService) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectServiceToBook
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'bridal' | 'celebration' | 'specialty'>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'bridal', label: 'Bridal Makeup' },
    { id: 'celebration', label: 'Party & Engagement' },
    { id: 'specialty', label: 'Hair & Saree Draping' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Royal Palette Gradient Hero Banner (No background image, pure luxury gradient & separate palette glows) */}
      <div className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#120524] via-[#1E0938] to-[#0A0314] overflow-hidden text-white border-b border-[#705EFF]/25">
        {/* Layered glowing auras with separate palette colors */}
        <div className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-[#705EFF]/25 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#FF6082]/20 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 rounded-full bg-[#B26CFF]/20 blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <span className="font-cursive text-3xl sm:text-4xl text-[#FF6082] block mb-2">
            Crafted for Your Special Moments
          </span>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#FF6082]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B26CFF] font-semibold">
              Our Services & Packages
            </span>
            <span className="w-5 h-[2px] bg-[#705EFF]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight mb-4">
            Makeup Services & Packages
          </h1>
          <p className="text-sm sm:text-base text-[#D8CEE8] font-light max-w-xl leading-relaxed">
            From your wedding day to pre-wedding celebrations, explore our services designed to give you a natural, flawless glow that lasts all day.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        
        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-3 px-1 mb-10 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`shrink-0 px-5 py-2.5 text-xs uppercase tracking-[0.16em] transition-all cursor-pointer rounded-sm ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white font-bold shadow-md shadow-[#FF6082]/25'
                  : 'bg-white text-[#4A3A5E] hover:text-[#1A0B26] border border-[#705EFF]/20 hover:border-[#705EFF]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Fully Visible Uncropped Frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card flex flex-col justify-between overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Fully visible portrait image */}
              <div className="p-2.5 sm:p-3 bg-[#FAF7FC] border-b border-[#705EFF]/15 relative">
                {service.popular && (
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-[#FF6082] to-[#B26CFF] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 shadow-md shadow-[#FF6082]/30">
                    Most Popular
                  </div>
                )}

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#FF6082] pointer-events-none z-20" />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#B26CFF] pointer-events-none z-20" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#705EFF] pointer-events-none z-20" />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#FF6082] pointer-events-none z-20" />

                <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#705EFF]/25 bg-gradient-to-b from-[#140A1E] to-[#0A0410] flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-contain object-center filter brightness-[0.99] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#B26CFF]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#705EFF] font-medium mb-1.5">
                    <span className="uppercase tracking-[0.16em] text-[10px] text-[#FF6082] font-semibold">
                      {service.category.toUpperCase()}
                    </span>
                    <span className="flex items-center gap-1 text-[#7A698F]">
                      <Clock className="w-3.5 h-3.5 text-[#705EFF]" />
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#1A0B26] font-normal mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#4A3A5E] font-light leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 mb-5 pt-3 border-t border-[#705EFF]/15">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#2D183E]">
                        <Check className="w-3.5 h-3.5 text-[#705EFF] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#705EFF]/15 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#705EFF] font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.duration}</span>
                  </div>

                  <button
                    onClick={() => onSelectServiceToBook(service)}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-wider font-bold shadow-md shadow-[#FF6082]/25 hover:opacity-95 transition-all cursor-pointer rounded-sm"
                  >
                    Select & Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
