import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="hidden lg:flex fixed bottom-8 right-6 z-40">
      <a
        href={`https://wa.me/${ARTIST_DATA.whatsappNumber}?text=${encodeURIComponent(
          "Hello Royal Beauty Hub! I would like to inquire about bridal dates and service availability."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#705EFF] via-[#B26CFF] to-[#FF6082] text-white shadow-xl shadow-[#705EFF]/30 hover:shadow-2xl hover:shadow-[#FF6082]/40 border border-white/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Direct WhatsApp Consultation"
        title="Chat on WhatsApp"
      >
        {/* Minimal WhatsApp Icon in Royal Luxury Palette */}
        <MessageCircle className="w-5 h-5 fill-white stroke-white group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
