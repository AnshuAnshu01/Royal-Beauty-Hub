import React, { useState } from 'react';
import { ArrowRight, Clock, Check, ShieldCheck, Gem } from 'lucide-react';
import { SERVICES, MakeupService } from '../data/makeupData';

interface ServicesPageProps {
  onSelectServiceToBook: (service: MakeupService) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectServiceToBook
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
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Proper Landscape AI-Generated Hero Section */}
      <div className="relative w-full h-[52vh] min-h-[380px] max-h-[580px] overflow-hidden bg-[#0D0714]">
        <img
          src="/assets/heroes/services_hero.jpg"
          alt="Luxury Beauty Atelier Cosmetics"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0714] via-[#0D0714]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0714]/85 via-transparent to-[#0D0714]/70" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 sm:pb-14">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#FF6082]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
                ATELIER SERVICE DIRECTORY
              </span>
              <span className="w-6 h-[2px] bg-[#705EFF]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
              Curated Beauty <br />
              <span className="text-blue-reveal italic font-light">
                Experiences & Packages
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        
        {/* Category Swipeable Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-3 px-1 mb-10 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`shrink-0 px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white font-bold shadow-md shadow-[#FF6082]/25'
                  : 'bg-white text-[#4A3A5E] hover:text-[#1A0B26] border border-[#705EFF]/20 hover:border-[#705EFF]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Glassmorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card flex flex-col justify-between overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#FF6082] to-[#B26CFF] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 shadow-md shadow-[#FF6082]/30">
                  Signature
                </div>
              )}

              {/* Service Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF7FC] border-b border-[#705EFF]/15">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#705EFF] font-medium mb-1.5">
                    <span className="uppercase tracking-[0.18em] text-[10px] text-[#FF6082] font-semibold">
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
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#7A698F] block">Investment</span>
                    <span className="font-serif text-lg sm:text-xl text-[#705EFF] font-bold">
                      {service.startingPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectServiceToBook(service)}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-wider font-bold shadow-md shadow-[#FF6082]/25 hover:opacity-95 transition-all cursor-pointer"
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
