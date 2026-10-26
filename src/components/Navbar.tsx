import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Calendar, Sun, Moon } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

export type PageRoute = 'home' | 'services' | 'bridal' | 'gallery' | 'transformations' | 'about' | 'reviews' | 'contact' | 'cookie-policy' | 'terms';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onBookClick: () => void;
  currentLang: 'EN' | 'HI';
  onLangToggle: (lang: 'EN' | 'HI') => void;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: (open: boolean) => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onBookClick,
  currentLang,
  onLangToggle,
  isMobileMenuOpen,
  onMobileMenuToggle,
  theme = 'dark',
  onToggleTheme = () => {}
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageRoute; label: string }[] = [
    { id: 'services', label: currentLang === 'EN' ? 'Services' : 'सेवाएं' },
    { id: 'bridal', label: currentLang === 'EN' ? 'Bridal Atelier' : 'ब्राइडल' },
    { id: 'gallery', label: currentLang === 'EN' ? 'Gallery' : 'गैलरी' },
    { id: 'transformations', label: currentLang === 'EN' ? 'Transformations' : 'ट्रांसफॉर्मेशन' },
    { id: 'about', label: currentLang === 'EN' ? 'About' : 'परिचय' },
    { id: 'reviews', label: currentLang === 'EN' ? 'Reviews' : 'समीक्षाएं' },
    { id: 'contact', label: currentLang === 'EN' ? 'Contact' : 'संपर्क' },
  ];

  const handleLinkClick = (pageId: PageRoute) => {
    onMobileMenuToggle(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          theme === 'light'
            ? scrolled
              ? 'bg-[#FAF7FC]/95 backdrop-blur-md border-b border-[#705EFF]/25 py-2.5 shadow-md shadow-purple-900/5'
              : 'bg-[#FAF7FC]/90 backdrop-blur-md border-b border-[#705EFF]/20 py-3 shadow-sm'
            : scrolled
              ? 'bg-[#0D0714]/95 backdrop-blur-md border-b border-[#705EFF]/30 py-2.5 shadow-xl shadow-black/80'
              : 'bg-[#0D0714]/85 backdrop-blur-md border-b border-[#705EFF]/20 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo with Name (Official Transparent Luxury Mark) */}
            <button
              onClick={() => handleLinkClick('home')}
              className="group flex items-center text-left focus:outline-none cursor-pointer"
              aria-label="Royal Beauty Hub Home"
            >
              <img
                src={ARTIST_DATA.logoUrl}
                alt="Royal Beauty Hub Luxury Makeup Studio & Academy"
                className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] filter drop-shadow-[0_2px_12px_rgba(178,108,255,0.45)]"
              />
            </button>

            {/* Distinct Page Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-[13px] font-medium tracking-wide transition-colors py-1 relative group focus:outline-none cursor-pointer ${
                      isActive
                        ? theme === 'light'
                          ? 'text-[#705EFF] font-bold'
                          : 'text-[#FFE4F6] font-bold'
                        : theme === 'light'
                          ? 'text-[#1F112B] hover:text-[#FF6082]'
                          : 'text-[#FFE4F6]/85 hover:text-[#FF6082]'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Right Controls: Theme Toggle Converter, Minimal Language Switch & Floating Book CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Dark / Light Theme Converter Button */}
              <button
                onClick={onToggleTheme}
                type="button"
                className={`relative inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-xs border transition-all duration-300 cursor-pointer shadow-sm group ${
                  theme === 'light'
                    ? 'border-[#705EFF]/35 bg-white/95 text-[#2D1B3E] hover:border-[#FF6082] hover:bg-[#FFE4F6]/30'
                    : 'border-[#705EFF]/40 bg-[#160F24]/90 text-[#FFE4F6] hover:border-[#FF6082] hover:bg-[#1E1430]'
                }`}
                aria-label={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
                title={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#705EFF] group-hover:text-[#B26CFF] transition-transform duration-300 group-hover:-rotate-12" />
                    <span className="hidden md:inline text-[11px] font-semibold tracking-wider text-[#4A3860]">DARK</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-[#FFE4F6] group-hover:text-[#FF6082] transition-transform duration-300 group-hover:rotate-45" />
                    <span className="hidden md:inline text-[11px] font-semibold tracking-wider text-[#D8CEE8] group-hover:text-[#FFE4F6]">LIGHT</span>
                  </>
                )}
              </button>

              {/* Minimal Language Switcher */}
              <div className={`hidden sm:inline-flex items-center text-xs tracking-wider border overflow-hidden ${
                theme === 'light'
                  ? 'border-[#705EFF]/35 bg-white/95'
                  : 'border-[#705EFF]/40 bg-[#160F24]/90'
              }`}>
                <button
                  onClick={() => onLangToggle('EN')}
                  className={`px-2.5 py-1 transition-colors cursor-pointer ${
                    currentLang === 'EN'
                      ? 'bg-gradient-to-r from-[#705EFF] to-[#B26CFF] text-white font-bold'
                      : theme === 'light'
                        ? 'text-[#55436A] hover:text-[#1F112B]'
                        : 'text-[#D8CEE8] hover:text-[#FFE4F6]'
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  onClick={() => onLangToggle('HI')}
                  className={`px-2.5 py-1 transition-colors cursor-pointer ${
                    currentLang === 'HI'
                      ? 'bg-gradient-to-r from-[#705EFF] to-[#B26CFF] text-white font-bold'
                      : theme === 'light'
                        ? 'text-[#55436A] hover:text-[#1F112B]'
                        : 'text-[#D8CEE8] hover:text-[#FFE4F6]'
                  }`}
                  aria-label="Switch to Hindi"
                >
                  HI
                </button>
              </div>

              {/* Book Now Button: Opens Floating Booking Modal */}
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center px-3.5 sm:px-5 py-2 text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-bold bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-90 text-white transition-all duration-300 shadow-md shadow-[#FF6082]/25 cursor-pointer"
              >
                {currentLang === 'EN' ? 'Book Now' : 'बुक करें'}
              </button>

              {/* Mobile Hamburger Toggle (3 Lines) */}
              <button
                onClick={() => onMobileMenuToggle(!isMobileMenuOpen)}
                className={`lg:hidden p-2 focus:outline-none cursor-pointer transition-colors ${
                  theme === 'light'
                    ? 'text-[#2D1B3E] hover:text-[#FF6082]'
                    : 'text-[#FFE4F6] hover:text-[#FF6082]'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* User-Friendly Mobile Menu Drawer - High Z-Index so no floating buttons bleed through */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden fixed inset-0 z-[80] flex flex-col justify-between pt-16 pb-8 px-6 border-b border-[#705EFF]/30 overflow-y-auto animate-in fade-in duration-200 ${
            theme === 'light' ? 'bg-[#FAF7FC] text-[#1F112B]' : 'bg-[#0D0714] text-[#FFE4F6]'
          }`}
        >
          {/* Top Close bar */}
          <div className="flex items-center justify-between pb-3 border-b border-[#705EFF]/25 mb-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B26CFF]">
              ATELIER NAVIGATION
            </span>
            <button
              onClick={() => onMobileMenuToggle(false)}
              className="p-1.5 text-[#B26CFF] hover:text-[#FF6082] border border-[#705EFF]/40 cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col space-y-3 text-center my-auto">
            {/* Logo in mobile drawer */}
            <div className="flex flex-col items-center justify-center mb-1">
              <img
                src={ARTIST_DATA.logoUrl}
                alt="Royal Beauty Hub Luxury Makeup Studio & Academy"
                className="h-12 w-auto object-contain filter drop-shadow-[0_2px_15px_rgba(178,108,255,0.45)] mb-1"
              />
            </div>

            <button
              onClick={() => handleLinkClick('home')}
              className={`font-serif text-lg tracking-wide py-1.5 transition-colors cursor-pointer text-center ${
                currentPage === 'home'
                  ? 'text-[#FF6082] font-semibold'
                  : theme === 'light'
                    ? 'text-[#1F112B]'
                    : 'text-[#FFE4F6]'
              }`}
            >
              {currentLang === 'EN' ? 'Home' : 'मुख्य पृष्ठ'}
            </button>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-serif text-lg tracking-wide py-1.5 transition-colors cursor-pointer text-center ${
                  currentPage === link.id
                    ? 'text-[#FF6082] font-semibold'
                    : theme === 'light'
                      ? 'text-[#1F112B] hover:text-[#B26CFF]'
                      : 'text-[#FFE4F6] hover:text-[#B26CFF]'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Theme and Language toggles inside mobile menu */}
            <div className="pt-3 flex flex-col items-center gap-2.5">
              {/* Theme converter in mobile drawer */}
              <button
                onClick={onToggleTheme}
                className={`inline-flex items-center gap-2 px-4 py-1.5 text-xs uppercase tracking-wider border transition-colors cursor-pointer ${
                  theme === 'light'
                    ? 'border-[#705EFF]/40 bg-white text-[#2D1B3E] hover:border-[#FF6082]'
                    : 'border-[#705EFF]/40 bg-[#160F24] text-[#FFE4F6] hover:border-[#FF6082]'
                }`}
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-4 h-4 text-[#705EFF]" />
                    <span>Switch to Dark Theme</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 text-[#FF6082]" />
                    <span>Switch to Light Theme</span>
                  </>
                )}
              </button>

              {/* Language toggle inside mobile menu */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => onLangToggle('EN')}
                  className={`px-3 py-1 text-xs uppercase tracking-wider ${
                    currentLang === 'EN'
                      ? 'border border-[#705EFF] text-white font-semibold bg-gradient-to-r from-[#705EFF] to-[#B26CFF]'
                      : theme === 'light'
                        ? 'text-[#4A3860]'
                        : 'text-[#D8CEE8]'
                  }`}
                >
                  English
                </button>
                <span className="text-[#B26CFF]/40">|</span>
                <button
                  onClick={() => onLangToggle('HI')}
                  className={`px-3 py-1 text-xs uppercase tracking-wider ${
                    currentLang === 'HI'
                      ? 'border border-[#705EFF] text-white font-semibold bg-gradient-to-r from-[#705EFF] to-[#B26CFF]'
                      : theme === 'light'
                        ? 'text-[#4A3860]'
                        : 'text-[#D8CEE8]'
                  }`}
                >
                  हिन्दी
                </button>
              </div>
            </div>
          </div>

          {/* Clean Primary Action in Mobile Menu (No floating overlay clutter) */}
          <div className="flex flex-col gap-2.5 pt-4 border-t border-[#705EFF]/25 mt-4">
            <button
              onClick={() => {
                onMobileMenuToggle(false);
                onBookClick();
              }}
              className="w-full py-3 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.2em] font-bold text-center cursor-pointer shadow-lg shadow-[#FF6082]/25"
            >
              {currentLang === 'EN' ? 'RESERVE WEDDING DATE →' : 'तारीख बुक करें →'}
            </button>
          </div>

        </div>
      )}
    </>
  );
};
