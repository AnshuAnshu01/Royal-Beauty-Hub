import React from 'react';
import { Home, Brush, Crown, Images, Calendar, MessageCircle } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';
import { PageRoute } from './Navbar';

interface MobileQuickBarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onBookClick: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  currentPage,
  onNavigate,
  onBookClick
}) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    {
      id: 'home' as PageRoute,
      label: 'Home',
      icon: Home,
      isActive: currentPage === 'home'
    },
    {
      id: 'services' as PageRoute,
      label: 'Services',
      icon: Brush,
      isActive: currentPage === 'services'
    },
    {
      id: 'bridal' as PageRoute,
      label: 'Bridal',
      icon: Crown,
      isActive: currentPage === 'bridal'
    },
    {
      id: 'gallery' as PageRoute,
      label: 'Gallery',
      icon: Images,
      isActive: currentPage === 'gallery'
    }
  ];

  return (
    <>
      {/* Modern Luxury Smartphone Bottom Navigation Bar */}
      <nav
        role="navigation"
        aria-label="Mobile Bottom Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#705EFF]/20 shadow-[0_-4px_25px_rgba(112,94,255,0.08)] pb-[env(safe-area-inset-bottom,0px)]"
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
                className={`flex flex-col items-center justify-center h-full py-1.5 transition-all select-none cursor-pointer ${
                  active ? 'text-[#705EFF]' : 'text-[#7A698F] hover:text-[#2D183E]'
                }`}
                aria-label={item.label}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 transition-transform ${active ? 'scale-110 stroke-[2.2]' : 'stroke-[1.8]'}`} />
                  {active && (
                    <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FF6082] to-[#B26CFF]" />
                  )}
                </div>
                <span className={`text-[10px] tracking-wider mt-1 ${active ? 'font-bold' : 'font-normal'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* 5th Highlighted CTA Button: Book Date */}
          <button
            onClick={() => onBookClick()}
            className="flex flex-col items-center justify-center h-full py-1 text-center group cursor-pointer"
            aria-label="Book Bridal Date"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF6082] via-[#B26CFF] to-[#705EFF] flex items-center justify-center text-white shadow-md shadow-[#FF6082]/30 group-active:scale-95 transition-transform">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <span className="text-[9px] uppercase tracking-wider text-[#FF6082] font-bold mt-0.5">
              Book
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
