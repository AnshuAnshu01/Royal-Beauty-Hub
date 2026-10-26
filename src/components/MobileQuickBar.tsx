import React from 'react';
import { Home, Sparkles, Crown, Images, Calendar, MessageCircle } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';
import { PageRoute } from './Navbar';

interface MobileQuickBarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onBookClick: () => void;
  currentLang: 'EN' | 'HI';
  theme: 'dark' | 'light';
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  currentPage,
  onNavigate,
  onBookClick,
  currentLang,
  theme
}) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    {
      id: 'home' as PageRoute,
      label: currentLang === 'EN' ? 'Home' : 'होम',
      icon: Home,
      isActive: currentPage === 'home'
    },
    {
      id: 'services' as PageRoute,
      label: currentLang === 'EN' ? 'Services' : 'सेवाएं',
      icon: Sparkles,
      isActive: currentPage === 'services'
    },
    {
      id: 'bridal' as PageRoute,
      label: currentLang === 'EN' ? 'Bridal' : 'ब्राइडल',
      icon: Crown,
      isActive: currentPage === 'bridal'
    },
    {
      id: 'gallery' as PageRoute,
      label: currentLang === 'EN' ? 'Gallery' : 'गैलरी',
      icon: Images,
      isActive: currentPage === 'gallery' || currentPage === 'transformations'
    }
  ];

  return (
    <>
      {/* Floating Quick WhatsApp Action Button - Positioned safely above bottom nav bar */}
      <div className="lg:hidden fixed bottom-[72px] right-3.5 z-40 pointer-events-auto">
        <a
          href={`https://wa.me/${ARTIST_DATA.whatsappNumber}?text=${encodeURIComponent(
            "Hello Royal Beauty Hub! I'd like to inquire about bridal makeup and service availability."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-xl shadow-black/40 border-2 border-white/20 active:scale-95 transition-transform"
          aria-label="Direct WhatsApp Consultation"
        >
          {/* Subtle live activity pulse */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366] border border-white" />
          </span>
          <MessageCircle className="w-6 h-6 fill-white stroke-white" />
        </a>
      </div>

      {/* Modern Luxury Smartphone Bottom Navigation Bar */}
      <nav
        role="navigation"
        aria-label="Mobile Bottom Navigation"
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 transition-colors duration-300 pb-[env(safe-area-inset-bottom,0px)] ${
          theme === 'light'
            ? 'bg-[#FAF7FC]/95 backdrop-blur-xl border-t border-[#705EFF]/25 shadow-[0_-8px_25px_rgba(112,94,255,0.12)]'
            : 'bg-[#0D0714]/95 backdrop-blur-xl border-t border-[#705EFF]/30 shadow-[0_-8px_30px_rgba(0,0,0,0.8)]'
        }`}
      >
        <div className="grid grid-cols-5 items-center max-w-lg mx-auto h-[60px] px-1">
          {/* 4 Core Navigation Menus */}
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = item.isActive;

            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`flex flex-col items-center justify-center py-1 relative transition-all duration-200 active:scale-95 cursor-pointer ${
                  active
                    ? theme === 'light'
                      ? 'text-[#705EFF]'
                      : 'text-[#FF6082]'
                    : theme === 'light'
                      ? 'text-[#5F4D70] hover:text-[#1F112B]'
                      : 'text-[#FFE4F6]/70 hover:text-[#FFE4F6]'
                }`}
                aria-label={item.label}
              >
                {/* Active indicator glowing dot */}
                {active && (
                  <span className="absolute top-0.5 w-1 h-1 rounded-full bg-gradient-to-r from-[#FF6082] to-[#B26CFF]" />
                )}

                <Icon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    active ? 'scale-110' : 'opacity-85'
                  }`}
                />
                
                <span
                  className={`text-[10px] tracking-wider mt-1 transition-all ${
                    active
                      ? 'font-bold'
                      : 'font-medium'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* 5th Elevated CTA: Instant Book Date Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={onBookClick}
              className="flex flex-col items-center justify-center w-full py-1 active:scale-95 transition-transform cursor-pointer group"
              aria-label={currentLang === 'EN' ? 'Book Date' : 'तारीख बुक करें'}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white flex items-center justify-center shadow-md shadow-[#FF6082]/30 group-hover:shadow-[0_0_15px_rgba(255,96,130,0.6)] transition-all">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <span className="text-[9.5px] uppercase tracking-wider mt-0.5 font-bold bg-gradient-to-r from-[#FF6082] to-[#B26CFF] bg-clip-text text-transparent">
                {currentLang === 'EN' ? 'BOOK' : 'बुक करें'}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
