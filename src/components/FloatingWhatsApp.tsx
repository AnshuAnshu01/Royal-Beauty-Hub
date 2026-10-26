import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="hidden lg:flex fixed bottom-8 right-7 z-40">
      <a
        href={`https://wa.me/${ARTIST_DATA.whatsappNumber}?text=${encodeURIComponent(
          "Hello Royal Beauty Hub! I would like to inquire about bridal dates and service availability."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-13 h-13 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] border-2 border-white hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Direct WhatsApp Consultation"
        title="Chat on WhatsApp"
      >
        {/* Subtle Activity Ping Dot */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366] border border-white" />
        </span>

        {/* Minimal WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 fill-white stroke-white group-hover:scale-105 transition-transform" />
      </a>
    </div>
  );
};
