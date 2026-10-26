import React, { useState } from 'react';
import { ArrowRight, Clock, Check, ShieldCheck, Gem } from 'lucide-react';
import { SERVICES, MakeupService } from '../data/makeupData';

interface ServicesPageProps {
  onSelectServiceToBook: (service: MakeupService) => void;
  currentLang: 'EN' | 'HI';
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectServiceToBook,
  currentLang
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'bridal' | 'celebration' | 'specialty'>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'bridal', label: 'Bridal Artistry' },
    { id: 'celebration', label: 'Celebration & Glam' },
    { id: 'specialty', label: 'Hair & Draping' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="pt-24 pb-28 bg-[#0D0714] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto pt-8 pb-14 border-b border-[#705EFF]/25">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#FF6082]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              ATELIER SERVICE DIRECTORY
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#FF6082]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#FFE4F6] font-normal tracking-tight mb-4">
            Curated Beauty Experiences
          </h1>

          <p className="text-sm sm:text-base text-[#D8CEE8] font-light leading-relaxed max-w-2xl mx-auto">
            From regal traditional red bridal transformations and 4K HD airbrushing to cocktail glam and master hair architecture. All services include luxury skin prep and 24-hour waterproof longevity.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.18em] transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white font-bold shadow-md shadow-[#705EFF]/30'
                    : 'bg-[#160F24] text-[#D8CEE8] hover:text-[#FFE4F6] border border-[#705EFF]/30 hover:border-[#B26CFF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#160F24] border border-[#705EFF]/30 hover:border-[#B26CFF] transition-all duration-500 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl hover:shadow-black/70"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#FF6082] to-[#B26CFF] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 shadow-md">
                  Signature
                </div>
              )}

              {/* Luxury Frame with Passe-Partout Padding & Corner Accents */}
              <div className="p-2 sm:p-2.5 bg-[#0D0714] border-b border-[#705EFF]/25 relative">
                {/* 4 Royal Corner Accents */}
                <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-[#FF6082] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-[#FF6082] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-[#B26CFF] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-[#B26CFF] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />

                {/* Inner Bordered Image Container - Engineered to show full photo */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden border border-[#705EFF]/30 bg-[#09040F] flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain filter brightness-[0.98] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                  
                  {/* Subtle Shimmer Sweep on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FF6082]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                  
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-[#FFE4F6] z-20">
                    <span className="flex items-center gap-1.5 text-[#FFE4F6] font-medium bg-[#0D0714]/95 px-2.5 py-1 backdrop-blur-md border border-[#705EFF]/40 text-[10px] tracking-wider uppercase">
                      <Clock className="w-3 h-3 text-[#FF6082]" />
                      {service.duration}
                    </span>
                    <span className="font-serif text-xs sm:text-sm text-[#FFE4F6] bg-[#0D0714]/95 px-2.5 py-1 backdrop-blur-md border border-[#705EFF]/40 font-medium">
                      From {service.startingPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-serif text-2xl text-[#FFE4F6] group-hover:text-[#FF6082] transition-colors mb-1 font-normal">
                    {service.title}
                  </h2>
                  <p className="text-xs text-[#B26CFF] uppercase tracking-wider mb-3 font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-[#D8CEE8] leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Included features */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#705EFF]/20">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#9E8EB0]">
                        <span className="w-1.5 h-1.5 bg-[#FF6082]/80 mt-1 shrink-0 inline-block" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Action Button */}
                <button
                  onClick={() => onSelectServiceToBook(service)}
                  className="w-full py-3.5 bg-[#0D0714] border border-[#705EFF]/50 group-hover:border-[#FF6082] group-hover:bg-gradient-to-r group-hover:from-[#FF6082] group-hover:via-[#B26CFF] group-hover:to-[#705EFF] text-[#FFE4F6] text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>BOOK / ENQUIRE NOW</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Function Wedding Callout */}
        <div className="mt-20 p-8 sm:p-12 border border-[#705EFF]/40 bg-[#160F24] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF6082] font-semibold">
              Bespoke Wedding Packages
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#FFE4F6] mt-1 font-normal">
              Planning Multiple Functions or Destination Wedding?
            </h3>
            <p className="text-xs sm:text-sm text-[#D8CEE8] mt-3 font-light leading-relaxed">
              We offer comprehensive bridal entourage packages (Haldi, Mehendi, Sangeet, Wedding, and Reception) with dedicated on-site artist stay and personalized entourage beauty schedules.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceToBook(SERVICES[0])}
            className="shrink-0 px-8 py-4 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.25em] font-bold transition-opacity cursor-pointer shadow-xl shadow-[#705EFF]/30"
          >
            REQUEST CUSTOM QUOTE →
          </button>
        </div>

      </div>
    </div>
  );
};
