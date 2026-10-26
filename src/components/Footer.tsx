import React from 'react';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ARTIST_DATA } from '../data/makeupData';
import { PageRoute } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onBookClick: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookClick }) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#200C3B]/92 backdrop-blur-2xl border-t border-[#705EFF]/30 pt-16 pb-28 sm:pb-20 lg:pb-16 text-[#E2D8EE] shadow-2xl relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#705EFF]/20">
          
          {/* Column 1: Big Logo & Atelier Narrative (5 cols) */}
          <div className="lg:col-span-5">
            <button
              onClick={() => handleNav('home')}
              className="mb-5 text-left cursor-pointer group focus:outline-none"
            >
              {/* Big Luxury Logo */}
              <img
                src={ARTIST_DATA.logoUrl}
                alt="Royal Beauty Hub Luxury Makeup Studio & Academy"
                className="h-24 sm:h-28 md:h-32 w-auto object-contain filter drop-shadow-[0_4px_25px_rgba(178,108,255,0.45)] -ml-2 transition-transform duration-300 group-hover:scale-105"
              />
            </button>

            <p className="text-xs text-[#BFAFD4] leading-relaxed mb-6 font-light max-w-sm">
              Luxury bridal atelier dedicated to immortalizing timeless Indian grace, couture eye artistry, and radiant glass skin for royal weddings and celebrations worldwide.
            </p>

            {/* Redesigned Minimal Social & WhatsApp Icons */}
            <div className="flex items-center gap-3">
              <a
                href={ARTIST_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#705EFF]/30 hover:border-[#FF6082] bg-[#2E1354]/80 text-[#B26CFF] hover:text-[#FFE4F6] flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 rounded-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Minimal Redesigned WhatsApp Icon in Royal Palette */}
              <a
                href={`https://wa.me/${ARTIST_DATA.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#705EFF]/30 hover:border-[#FF6082] bg-[#2E1354]/80 text-[#B26CFF] hover:bg-gradient-to-r hover:from-[#FF6082] hover:to-[#705EFF] hover:text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 rounded-sm"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>

              <a
                href={`tel:${ARTIST_DATA.phone.replace(/\s+/g, '')}`}
                className="w-10 h-10 border border-[#705EFF]/30 hover:border-[#B26CFF] bg-[#2E1354]/80 text-[#B26CFF] hover:text-[#FFE4F6] flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 rounded-sm"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore Pages (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#FF6082] font-semibold mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#FFE4F6] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#FFE4F6] transition-colors cursor-pointer">
                  Services & Packages
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('bridal')} className="hover:text-[#FFE4F6] transition-colors cursor-pointer">
                  Bridal Atelier
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-[#FFE4F6] transition-colors cursor-pointer">
                  Looks Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('founder')} className="hover:text-[#FFE4F6] transition-colors cursor-pointer">
                  Founder & Artist
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('locations')} className="hover:text-[#FFE4F6] transition-colors cursor-pointer">
                  Locations & Travel
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio & VIP Inquiries (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#B26CFF] font-semibold mb-4">
              Atelier & Destination Travel
            </h4>
            <ul className="space-y-3 text-xs text-[#9E8EB0] mb-6">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6082] shrink-0 mt-0.5" />
                <span>{ARTIST_DATA.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B26CFF] shrink-0" />
                <a href={`tel:${ARTIST_DATA.phone.replace(/\s+/g, '')}`} className="hover:text-[#FFE4F6] transition-colors">
                  {ARTIST_DATA.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#705EFF] shrink-0" />
                <a href={`mailto:${ARTIST_DATA.email}`} className="hover:text-[#FFE4F6] transition-colors">
                  {ARTIST_DATA.email}
                </a>
              </li>
            </ul>

            <div className="p-3 bg-[#160F24] border border-[#705EFF]/30 text-[11px] text-[#D8CEE8]">
              <span className="text-[#FF6082] font-semibold block mb-1">Pan-India & Global Bookings:</span>
              <span>Available for destination bridal weddings across Jaipur, Udaipur, Goa, Delhi NCR, Mumbai, and worldwide.</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: All rights reserved followed by designed and developed sentence in center */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#9E8EB0] gap-4">
          
          {/* Quick Legal links on the left */}
          <div className="flex items-center gap-4 text-center md:text-left order-2 md:order-1">
            <button
              onClick={() => handleNav('cookie-policy')}
              className="hover:text-[#FFE4F6] transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <span>•</span>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-[#FFE4F6] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>

          {/* CENTRE OF FOOTER: All rights reserved followed by designed and developed sentence */}
          <div className="text-center order-1 md:order-2 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
            <span>© {new Date().getFullYear()} Royal Beauty Hub. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#FF6082] font-medium tracking-[0.05em] py-0.5 no-underline hover:text-[#FFE4F6] transition-colors">
              Designed and Developed by ACCustomLabs
            </span>
          </div>

          {/* Social Handle on the right */}
          <div className="order-3 text-center md:text-right">
            <a
              href={ARTIST_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B26CFF] hover:text-[#FF6082] transition-colors"
            >
              {ARTIST_DATA.handle}
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
