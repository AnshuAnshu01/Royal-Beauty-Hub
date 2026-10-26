import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/makeupData';

interface GalleryPageProps {
  onBookLook: (look: GalleryItem) => void;
  currentLang: 'EN' | 'HI';
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onBookLook, currentLang }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'reception', label: 'Reception' },
    { id: 'party', label: 'Party Glam' },
    { id: 'natural-glam', label: 'Natural Glam' },
    { id: 'airbrush', label: 'Airbrush HD' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const currentLightboxItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="pt-24 pb-28 bg-[#0D0714] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto pt-8 pb-14 border-b border-[#705EFF]/25">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#FF6082]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              SIGNATURE LOOKBOOK
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#FF6082]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#FFE4F6] font-normal tracking-tight mb-4">
            Editorial Looks Gallery
          </h1>

          <p className="text-sm sm:text-base text-[#D8CEE8] font-light leading-relaxed max-w-2xl mx-auto">
            Explore our curated bridal aesthetics. Click any portrait to view detailed technique notes, color palette harmonies, and book that specific signature style.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-1.5 text-xs uppercase tracking-[0.16em] transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white font-bold shadow-md shadow-[#705EFF]/30'
                    : 'bg-[#160F24] text-[#D8CEE8] hover:text-[#FFE4F6] border border-[#705EFF]/30 hover:border-[#B26CFF]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Luxury Art Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative bg-[#160F24] border border-[#705EFF]/30 p-2 sm:p-2.5 cursor-pointer shadow-xl hover:border-[#FF6082] hover:shadow-[0_12px_40px_rgba(255,96,130,0.25)] transition-all duration-500 flex flex-col justify-between"
              >
                {/* 4 Antique Royal Corner Accents */}
                <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-[#FF6082] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-[#FF6082] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-[#B26CFF] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-[#B26CFF] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />

                {/* Inner Bordered Image Container - Engineered to show full photo */}
                <div className="relative w-full aspect-[4/5] overflow-hidden border border-[#705EFF]/25 bg-[#09040F] flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain filter brightness-[0.98] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />

                  {/* Subtle Shimmer Sweep on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FF6082]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                  {/* Hover Quick Action Badge */}
                  <div className="absolute top-2.5 right-2.5 bg-[#160F24]/90 backdrop-blur-sm border border-[#705EFF]/40 p-1.5 text-[#FFE4F6] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <Eye className="w-3.5 h-3.5 text-[#FF6082]" />
                  </div>
                </div>

                {/* Museum Exhibition Caption Plate */}
                <div className="pt-2.5 pb-1 px-1.5 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#FF6082] font-semibold block mb-0.5">
                      {item.event}
                    </span>
                    <h3 className="font-serif text-base text-[#FFE4F6] group-hover:text-[#FF6082] transition-colors font-normal line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-[10px] text-[#9E8EB0] group-hover:text-[#FF6082] transition-colors font-serif italic ml-2 shrink-0">
                    View
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {currentLightboxItem && (
        <div className="fixed inset-0 z-50 bg-[#0D0714]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-2 text-[#FFE4F6] hover:text-[#FF6082] border border-[#705EFF]/40 hover:border-[#FF6082] bg-[#160F24] transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-[#FFE4F6] hover:text-[#FF6082] border border-[#705EFF]/40 hover:border-[#FF6082] bg-[#160F24] transition-colors cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-[#FFE4F6] hover:text-[#FF6082] border border-[#705EFF]/40 hover:border-[#FF6082] bg-[#160F24] transition-colors cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl w-full bg-[#160F24] border border-[#705EFF]/40 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            
            <div className="md:w-3/5 relative bg-[#09040F] flex items-center justify-center overflow-hidden">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="max-h-[70vh] md:max-h-[85vh] w-full object-contain"
              />
            </div>

            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF6082] font-semibold block mb-1">
                  {currentLightboxItem.event}
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl text-[#FFE4F6] font-normal mb-3">
                  {currentLightboxItem.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#D8CEE8] leading-relaxed mb-6 font-light">
                  {currentLightboxItem.description}
                </p>

                <div className="pt-4 border-t border-[#705EFF]/20 mb-6">
                  <h4 className="text-[11px] uppercase tracking-wider text-[#FF6082] mb-2 font-medium">
                    Artistry Technique
                  </h4>
                  <p className="text-xs text-[#FFE4F6]">
                    {currentLightboxItem.technique}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-[11px] uppercase tracking-wider text-[#B26CFF] mb-2 font-medium">
                    Harmonized Palette
                  </h4>
                  <div className="flex items-center gap-2">
                    {currentLightboxItem.palette.map((color, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 bg-[#0D0714] border border-[#705EFF]/30 px-2.5 py-1">
                        <span
                          className="w-3.5 h-3.5 rounded-none border border-white/20 inline-block"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-[10px] text-[#9E8EB0] font-mono">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#705EFF]/20">
                <button
                  onClick={() => {
                    closeLightbox();
                    onBookLook(currentLightboxItem);
                  }}
                  className="w-full py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.2em] font-bold transition-opacity shadow-md shadow-[#705EFF]/30 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>BOOK THIS SIGNATURE LOOK</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};
