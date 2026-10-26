import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ARTIST_DATA } from '../data/makeupData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-[76px] sm:bottom-8 right-4 sm:right-6 z-40">
      <a
        href={`https://wa.me/${ARTIST_DATA.whatsappNumber}?text=${encodeURIComponent(
          "Hello Royal Beauty Hub! I would like to inquire about bridal dates and service availability."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#705EFF] via-[#B26CFF] to-[#FF6082] text-white shadow-lg shadow-[#705EFF]/30 hover:shadow-xl hover:shadow-[#FF6082]/40 border border-white/60 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Direct WhatsApp Consultation"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 fill-white group-hover:scale-105 transition-transform" />
      </a>
    </div>
  );
};
