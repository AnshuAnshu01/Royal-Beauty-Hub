import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

export type PageRoute =
  | 'home'
  | 'services'
  | 'bridal'
  | 'gallery'
  | 'transformations'
  | 'founder'
  | 'locations'
  | 'about'
  | 'reviews'
  | 'contact'
  | 'cookie-policy'
  | 'terms';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onBookClick: () => void;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onBookClick,
  isMobileMenuOpen,
  onMobileMenuToggle
}) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (pageId: PageRoute) => {
    onMobileMenuToggle(false);
    setIsMoreOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Primary visible navigation items on desktop
  const primaryNavItems: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'bridal', label: 'Bridal Atelier' },
    { id: 'gallery', label: 'Gallery' }
  ];

  // Secondary items in the minimal "More" menu (strictly NO icons as requested)
  const moreNavItems: { id: PageRoute; label: string }[] = [
    { id: 'founder', label: 'Founder & Artist' },
    { id: 'transformations', label: 'Transformations' },
    { id: 'locations', label: 'Locations & Travel' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'about', label: 'About Atelier' },
    { id: 'contact', label: 'Contact' }
  ];

  const isMoreActive = moreNavItems.some((item) => item.id === currentPage);

  return (
    <>
      {/* Sticky Header: Sits cleanly above the hero section with zero overlap */}
      <header className="sticky top-0 z-50 bg-[#FAF7FC]/92 backdrop-blur-xl border-b border-[#705EFF]/18 shadow-[0_4px_20px_-2px_rgba(112,94,255,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            
            {/* Brand Logo with "| Royal Beauty Hub" */}
            <button
              onClick={() => handleLinkClick('home')}
              className="group flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none cursor-pointer select-none"
              aria-label="Royal Beauty Hub Home"
            >
              <img
                src={ARTIST_DATA.logoUrl}
                alt="Royal Beauty Hub Logo"
                className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(112,94,255,0.25)]"
              />
              <span className="text-[#705EFF]/30 text-lg sm:text-xl font-light">|</span>
              <span className="font-serif text-base sm:text-xl md:text-2xl font-semibold tracking-wide text-[#1A0B26] group-hover:text-[#705EFF] transition-colors whitespace-nowrap">
                Royal Beauty Hub
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
              {primaryNavItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`text-[13px] uppercase tracking-[0.15em] font-medium transition-colors py-1 relative group focus:outline-none cursor-pointer ${
                      isActive ? 'text-[#705EFF] font-bold' : 'text-[#2D183E] hover:text-[#FF6082]'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </button>
                );
              })}

              {/* Minimal "More" Menu Dropdown (strictly no icons) */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className={`inline-flex items-center gap-1.5 text-[13px] uppercase tracking-[0.15em] font-medium transition-colors py-1 cursor-pointer focus:outline-none ${
                    isMoreActive || isMoreOpen
                      ? 'text-[#705EFF] font-bold'
                      : 'text-[#2D183E] hover:text-[#FF6082]'
                  }`}
                  aria-expanded={isMoreOpen}
                >
                  <span>More</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isMoreOpen ? 'rotate-180 text-[#705EFF]' : 'text-[#7A698F]'
                    }`}
                  />
                </button>

                {isMoreOpen && (
                  <div className="absolute right-0 mt-3 w-56 glass-dropdown py-2 shadow-2xl border border-[#705EFF]/20 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="py-1">
                      {moreNavItems.map((item) => {
                        const isActive = currentPage === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleLinkClick(item.id)}
                            className={`w-full text-left px-5 py-2.5 text-xs uppercase tracking-[0.14em] transition-colors cursor-pointer block ${
                              isActive
                                ? 'bg-[#705EFF]/10 text-[#705EFF] font-bold border-l-2 border-[#705EFF]'
                                : 'text-[#2D183E] hover:bg-[#FAF7FC] hover:text-[#FF6082]'
                            }`}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Controls: Book Now CTA & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 text-xs uppercase tracking-[0.18em] font-bold bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white transition-all duration-300 shadow-md shadow-[#FF6082]/25 hover:shadow-lg hover:shadow-[#FF6082]/35 cursor-pointer"
              >
                Book Now
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => onMobileMenuToggle(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#1A0B26] hover:text-[#705EFF] focus:outline-none cursor-pointer transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Minimal Mobile Menu Drawer - No icons in navigation list */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[80] bg-[#FAF7FC]/98 backdrop-blur-2xl flex flex-col justify-between pt-6 pb-10 px-6 overflow-y-auto animate-in fade-in duration-200">
          <div>
            {/* Header row in mobile drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-[#705EFF]/20 mb-6">
              <div className="flex items-center gap-2">
                <img
                  src={ARTIST_DATA.logoUrl}
                  alt="Royal Beauty Hub"
                  className="h-10 w-auto object-contain"
                />
                <span className="text-[#705EFF]/30 text-lg">|</span>
                <span className="font-serif text-lg font-semibold text-[#1A0B26]">
                  Royal Beauty Hub
                </span>
              </div>
              <button
                onClick={() => onMobileMenuToggle(false)}
                className="p-2 text-[#7A698F] hover:text-[#1A0B26] cursor-pointer"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Clean Typographic Navigation List (strictly NO icons) */}
            <div className="space-y-1">
              {[...primaryNavItems, ...moreNavItems].map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full text-left py-3 px-3 text-sm uppercase tracking-[0.16em] transition-colors cursor-pointer border-b border-[#705EFF]/10 ${
                      isActive
                        ? 'text-[#705EFF] font-bold bg-[#705EFF]/5 border-l-2 border-l-[#705EFF]'
                        : 'text-[#2D183E] hover:text-[#FF6082]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Drawer Actions */}
          <div className="pt-6 border-t border-[#705EFF]/20 mt-6">
            <button
              onClick={() => {
                onMobileMenuToggle(false);
                onBookClick();
              }}
              className="w-full py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-lg shadow-[#FF6082]/25 cursor-pointer text-center"
            >
              Reserve Wedding Date
            </button>
          </div>
        </div>
      )}
    </>
  );
};
