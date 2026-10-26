import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="hidden lg:flex fixed bottom-8 right-6 z-40 items-center gap-3">
      {/* Subtle Luxury Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#160F24] border border-[#705EFF]/40 text-[#FFE4F6] px-3.5 py-2 shadow-2xl animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF6082] animate-pulse" />
          <span className="text-[11px] uppercase tracking-wider text-[#FFE4F6] font-medium">
            Chat with Gautam
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#9E8EB0] hover:text-[#FF6082] ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Anchor with royal jewel gradient */}
      <a
        href={`https://wa.me/${ARTIST_DATA.whatsappNumber}?text=${encodeURIComponent(
          "Hello Gautam! I'm interested in booking your luxury makeup services for my upcoming wedding event."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#705EFF] via-[#B26CFF] to-[#FF6082] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer border-2 border-[#0D0714] shadow-[#B26CFF]/30"
        aria-label="Direct WhatsApp Consultation"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-white group-hover:scale-105 transition-transform" />
      </a>
    </div>
  );
};
