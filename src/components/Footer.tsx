import React from 'react';
import { Instagram, MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ARTIST_DATA, SERVICES } from '../data/makeupData';
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
    <footer className="bg-[#08040E] border-t border-[#705EFF]/30 pt-16 pb-28 sm:pb-20 lg:pb-16 text-[#D8CEE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#705EFF]/20">
          
          {/* Column 1: Brand & Atelier Narrative (4 cols) */}
          <div className="lg:col-span-4">
            <button
              onClick={() => handleNav('home')}
              className="mb-4 text-left cursor-pointer"
            >
              <img
                src={ARTIST_DATA.logoUrl}
                alt="Royal Beauty Hub Luxury Makeup Studio & Academy"
                className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-[0_2px_15px_rgba(178,108,255,0.4)] -ml-1"
              />
            </button>

            <p className="text-xs text-[#9E8EB0] leading-relaxed mb-6 font-light max-w-sm">
              Luxury bridal atelier dedicated to immortalizing timeless Indian grace, couture eye artistry, and radiant glass skin for royal weddings and celebrations worldwide.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={ARTIST_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#705EFF]/30 hover:border-[#B26CFF] bg-[#160F24] text-[#B26CFF] hover:text-[#FFE4F6] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${ARTIST_DATA.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#705EFF]/30 hover:border-[#B26CFF] bg-[#160F24] text-[#B26CFF] hover:text-[#FFE4F6] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${ARTIST_DATA.phone.replace(/\s+/g, '')}`}
                className="w-9 h-9 border border-[#705EFF]/30 hover:border-[#B26CFF] bg-[#160F24] text-[#B26CFF] hover:text-[#FFE4F6] flex items-center justify-center transition-colors"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
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
                  Services
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
                <button onClick={() => handleNav('transformations')} className="hover:text-[#FFE4F6] transition-colors cursor-pointer">
                  Transformations
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#FFE4F6] transition-colors cursor-pointer">
                  About Gautam
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reviews')} className="hover:text-[#FFE4F6] transition-colors cursor-pointer">
                  Bride Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#FFE4F6] transition-colors cursor-pointer">
                  Contact & Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Signature Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#FF6082] font-semibold mb-4">
              Signature Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onBookClick(service.id)}
                    className="hover:text-[#B26CFF] transition-colors text-left cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio & Policies (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#FF6082] font-semibold mb-4">
              Studio & Atelier
            </h4>
            
            <div className="space-y-3 text-xs text-[#9E8EB0]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6082] shrink-0 mt-0.5" />
                <span>Aurangabad, Bihar, India (Pan-India Travel for Destination Weddings)</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B26CFF] shrink-0 mt-0.5" />
                <span>Mon – Sun: 09:00 AM – 08:00 PM (By Appointment Only)</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6082] shrink-0 mt-0.5" />
                <a href="tel:9931689790" className="hover:text-[#FFE4F6] transition-colors font-medium text-[#FFE4F6]/90">
                  Contact: 9931689790
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="mt-5 pt-4 border-t border-[#705EFF]/20 flex items-center gap-4 text-xs">
              <button
                onClick={() => handleNav('cookie-policy')}
                className="text-[#B26CFF] hover:text-[#FF6082] hover:underline cursor-pointer"
              >
                Cookie Policy
              </button>
              <span className="text-[#9E8EB0]">/</span>
              <button
                onClick={() => handleNav('terms')}
                className="text-[#B26CFF] hover:text-[#FF6082] hover:underline cursor-pointer"
              >
                Terms & Conditions
              </button>
            </div>

            <button
              onClick={() => onBookClick()}
              className="mt-5 w-full py-2.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.2em] font-bold transition-opacity cursor-pointer shadow-md shadow-[#FF6082]/25"
            >
              OPEN FLOATING BOOKING FORM
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright on Left, ACCustomLabs in Center, Policies on Right */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#9E8EB0] gap-4">
          
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} Makeup by Gautam Aadi. All rights reserved.</p>
          </div>

          {/* Centre: Designed and Developed by ACCustomLabs */}
          <div className="text-center">
            <span className="inline-block text-[#FF6082] font-medium tracking-[0.08em] hover:text-[#FFE4F6] transition-colors py-0.5 border-b border-[#FF6082]/40">
              Designed and Developed by ACCustomLabs
            </span>
          </div>

          {/* Right: Quick Links */}
          <div className="flex items-center gap-4 text-center md:text-right">
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
            <span>•</span>
            <a
              href={ARTIST_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B26CFF] hover:text-[#FF6082] hover:underline"
            >
              {ARTIST_DATA.handle}
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
