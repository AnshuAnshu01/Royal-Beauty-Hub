import React, { useState } from 'react';
import { ArrowRight, Clock, Check, ChevronRight } from 'lucide-react';
import { SERVICES, MakeupService } from '../data/makeupData';

interface ServicesSectionProps {
  onSelectServiceToBook: (service: MakeupService) => void;
  currentLang: 'EN' | 'HI';
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceToBook,
  currentLang
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'bridal' | 'celebration' | 'specialty'>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'bridal', label: 'Bridal Artistry' },
    { id: 'celebration', label: 'Celebration & Glam' },
    { id: 'specialty', label: 'Hair & Draping' },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#160F24] border-t border-[#705EFF]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#FF6082]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              BESPOKE ARTISTRY PORTFOLIO
            </span>
            <span className="w-6 h-[1.5px] bg-[#B26CFF]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#FFE4F6] font-normal tracking-tight mb-4">
            Curated Beauty Experiences
          </h2>

          <p className="text-sm sm:text-base text-[#D8CEE8] font-light leading-relaxed">
            Every service is meticulously tailored to your facial symmetry, lighting conditions, and sacred event couture.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex items-center justify-start sm:justify-center gap-2 mt-6 sm:mt-8 overflow-x-auto no-scrollbar pb-2 px-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`shrink-0 px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white font-bold shadow-md shadow-[#FF6082]/25'
                    : 'bg-[#0D0714] text-[#D8CEE8] hover:text-[#FFE4F6] border border-[#705EFF]/30 hover:border-[#B26CFF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#1E1430] border border-[#705EFF]/25 hover:border-[#B26CFF] transition-all duration-500 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl hover:shadow-black/70"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#FF6082] to-[#B26CFF] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 shadow-md shadow-[#FF6082]/30">
                  Signature
                </div>
              )}

              {/* Luxury Frame with Passe-Partout Padding & Corner Accents */}
              <div className="p-2 sm:p-2.5 bg-[#160F24] border-b border-[#705EFF]/25 relative">
                {/* 4 Royal Corner Accents */}
                <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-[#FF6082] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-[#B26CFF] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-[#B26CFF] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-[#FF6082] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />

                {/* Inner Bordered Image Container - Engineered to show full photo */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden border border-[#705EFF]/30 bg-[#09040F] flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain filter brightness-[0.98] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                  
                  {/* Subtle Shimmer Sweep on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#B26CFF]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                  
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-[#FFE4F6] z-20">
                    <span className="flex items-center gap-1.5 text-[#B26CFF] font-medium bg-[#0D0714]/95 px-2.5 py-1 backdrop-blur-md border border-[#705EFF]/35 text-[10px] tracking-wider uppercase">
                      <Clock className="w-3 h-3 text-[#FF6082]" />
                      {service.duration}
                    </span>
                    <span className="font-serif text-xs text-[#FFE4F6] bg-[#0D0714]/95 px-2.5 py-1 backdrop-blur-md border border-[#705EFF]/35 font-medium">
                      Bespoke Package
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FFE4F6] group-hover:text-[#B26CFF] transition-colors mb-2 font-normal">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#FF6082] uppercase tracking-wider mb-3 font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-[#D8CEE8] leading-relaxed mb-5 font-light">
                    {service.description}
                  </p>

                  {/* Included features list */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#705EFF]/20">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#9E8EB0]">
                        <span className="w-1.5 h-1.5 bg-[#B26CFF]/80 mt-1 shrink-0 inline-block" />
                        <span>{feat}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <button
                        onClick={() => setExpandedServiceId(expandedServiceId === service.id ? null : service.id)}
                        className="text-[11px] text-[#B26CFF] hover:text-[#FF6082] hover:underline pt-1 inline-block cursor-pointer"
                      >
                        {expandedServiceId === service.id ? '− Show less details' : `+ ${service.features.length - 3} more included amenities`}
                      </button>
                    )}
                    {expandedServiceId === service.id && (
                      <div className="space-y-2 pt-2 border-t border-[#705EFF]/20 animate-in fade-in duration-200">
                        {service.features.slice(3).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#9E8EB0]">
                            <span className="w-1.5 h-1.5 bg-[#B26CFF]/80 mt-1 shrink-0 inline-block" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => onSelectServiceToBook(service)}
                  className="w-full py-3 border border-[#705EFF]/50 group-hover:bg-gradient-to-r group-hover:from-[#FF6082] group-hover:to-[#705EFF] group-hover:text-white group-hover:border-transparent text-[#B26CFF] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:shadow-md group-hover:shadow-[#FF6082]/20"
                >
                  <span>BOOK / ENQUIRE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Package Consultation Callout */}
        <div className="mt-16 p-8 border border-[#705EFF]/30 bg-[#0D0714] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF6082] font-semibold">
              Multi-Day & Destination Weddings
            </span>
            <h3 className="font-serif text-2xl text-[#FFE4F6] mt-1 font-normal">
              Planning Multiple Functions or a Destination Wedding?
            </h3>
            <p className="text-xs text-[#D8CEE8] mt-2">
              We offer bespoke multi-ceremony bridal packages (Engagement + Mehendi + Haldi + Wedding + Reception) with dedicated on-site artist stay and bridal entourage coverage.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceToBook(SERVICES[0])}
            className="shrink-0 px-6 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-90 text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow-lg shadow-[#FF6082]/25"
          >
            CUSTOM WEDDING QUOTE →
          </button>
        </div>

      </div>
    </section>
  );
};
