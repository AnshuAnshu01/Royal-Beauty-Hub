import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/makeupData';

interface GalleryPageProps {
  onBookLook: (look: GalleryItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onBookLook }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'traditional', label: 'Traditional Bridal' },
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
      {/* 1. Royal Palette Gradient Hero Banner (No background image, pure luxury gradient & separate palette glows) */}
      <div className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#120524] via-[#1E0938] to-[#0A0314] overflow-hidden text-white border-b border-[#705EFF]/25">
        <div className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-[#B26CFF]/25 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#FF6082]/20 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 rounded-full bg-[#705EFF]/20 blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <span className="font-cursive text-3xl sm:text-4xl text-[#FF6082] block mb-2">
            Moments of Pure Grace
          </span>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#FF6082]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B26CFF] font-semibold">
              Real Wedding Gallery
            </span>
            <span className="w-5 h-[2px] bg-[#705EFF]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight mb-4">
            Our Bridal Lookbook
          </h1>
          <p className="text-sm sm:text-base text-[#D8CEE8] font-light max-w-xl leading-relaxed">
            Take a look at real brides and celebrations we've had the joy to be a part of. Tap any look to see the full photo and details.
          </p>
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
              className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 text-xs uppercase tracking-[0.16em] transition-all cursor-pointer rounded-sm ${
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
              className="glass-card p-2 sm:p-2.5 cursor-pointer flex flex-col justify-between group overflow-hidden shadow-md hover:shadow-xl transition-all relative"
            >
              {/* 4 Corner Accents */}
              <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#FF6082] pointer-events-none z-20" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#B26CFF] pointer-events-none z-20" />
              <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#705EFF] pointer-events-none z-20" />
              <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#FF6082] pointer-events-none z-20" />

              {/* Uncropped Portrait Frame */}
              <div className="relative w-full aspect-[4/5] overflow-hidden border border-[#705EFF]/20 bg-gradient-to-b from-[#140A1E] to-[#0A0410] flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-contain object-center filter brightness-[0.99] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#B26CFF]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
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
              className="absolute top-3 right-3 z-30 p-2 text-white bg-black/50 hover:bg-black/80 transition-colors cursor-pointer"
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
                  <div><strong>Style:</strong> {currentLightboxItem.technique}</div>
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
                  className="w-full py-3 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-wider font-bold shadow-lg cursor-pointer hover:opacity-95 rounded-sm"
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
