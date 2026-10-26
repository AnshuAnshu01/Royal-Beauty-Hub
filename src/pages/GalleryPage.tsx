import React, { useState } from 'react';
import { Eye, ArrowRight, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/makeupData';

interface GalleryPageProps {
  onBookLook: (look: GalleryItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onBookLook }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'Complete Lookbook' },
    { id: 'traditional', label: 'Royal Traditional' },
    { id: 'pastel', label: 'Pastel & Modern' },
    { id: 'reception', label: 'Reception Glam' },
    { id: 'cocktail', label: 'Cocktail & Party' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const currentLightboxItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Proper Landscape AI-Generated Hero Section */}
      <div className="relative w-full h-[52vh] min-h-[380px] max-h-[580px] overflow-hidden bg-[#0D0714]">
        <img
          src="/assets/heroes/gallery_hero.jpg"
          alt="Couture Bridal Exhibition Gallery"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0714] via-[#0D0714]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0714]/85 via-transparent to-[#0D0714]/70" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 sm:pb-14">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#FF6082]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
                CURATED EDITORIAL LOOKBOOK
              </span>
              <span className="w-6 h-[2px] bg-[#705EFF]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
              Signature Editorial <br />
              <span className="text-blue-reveal italic font-light">
                Bridal Gallery
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        
        {/* Filter Pills with Smooth Touch Swipe */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-3 px-1 mb-8 sm:mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 text-xs uppercase tracking-[0.16em] transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white font-bold shadow-md shadow-[#FF6082]/25'
                  : 'bg-white text-[#4A3A5E] hover:text-[#1A0B26] border border-[#705EFF]/20 hover:border-[#705EFF]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 2-Column Mobile Grid for Instant Smartphone Visual Elegance */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="glass-card p-1.5 sm:p-2.5 cursor-pointer flex flex-col justify-between group overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#FAF7FC] border border-[#705EFF]/15">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="pt-2 pb-1 px-1 flex items-center justify-between">
                <div className="min-w-0 pr-1">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.16em] text-[#FF6082] font-semibold block truncate">
                    {item.event}
                  </span>
                  <h3 className="font-serif text-xs sm:text-base text-[#1A0B26] font-medium truncate group-hover:text-[#705EFF] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <span className="hidden sm:inline text-[10px] text-[#705EFF] font-serif italic ml-1 shrink-0">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && currentLightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col sm:flex-row bg-[#0D0714] border border-[#705EFF]/30 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-3 right-3 z-30 p-2 text-white bg-black/50 hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="sm:w-3/5 bg-black flex items-center justify-center relative">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="max-h-[65vh] sm:max-h-[85vh] w-auto object-contain"
              />
            </div>

            <div className="sm:w-2/5 p-6 flex flex-col justify-between text-white bg-[#160F24]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF6082] font-semibold block mb-1">
                  {currentLightboxItem.event}
                </span>
                <h3 className="font-serif text-2xl text-[#FFE4F6] mb-3">
                  {currentLightboxItem.title}
                </h3>
                <p className="text-xs text-[#D8CEE8] font-light leading-relaxed mb-4">
                  {currentLightboxItem.description}
                </p>
                <div className="space-y-1 text-xs text-[#9E8EB0] border-t border-[#705EFF]/20 pt-3">
                  <div><strong>Technique:</strong> {currentLightboxItem.technique}</div>
                  <div><strong>Occasion:</strong> {currentLightboxItem.event}</div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    const look = currentLightboxItem;
                    setActiveLightboxIndex(null);
                    onBookLook(look);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-wider font-bold shadow-lg"
                >
                  Book This Look
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
