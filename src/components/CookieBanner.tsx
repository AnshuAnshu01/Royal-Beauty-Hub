import React, { useState, useEffect } from 'react';
import { Cookie, X, ShieldCheck, Check } from 'lucide-react';
import { PageRoute } from './Navbar';

interface CookieBannerProps {
  onNavigateToPolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigateToPolicy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted/configured cookies
    const consent = localStorage.getItem('ga_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'ga_cookie_consent',
      JSON.stringify({
        status: 'accepted_all',
        necessary: true,
        analytics: true,
        marketing: true,
        timestamp: new Date().toISOString()
      })
    );
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem(
      'ga_cookie_consent',
      JSON.stringify({
        status: 'essential_only',
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: new Date().toISOString()
      })
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-3 right-3 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#160F24] border border-[#705EFF]/50 p-4 sm:p-5 shadow-2xl relative shadow-black/80 backdrop-blur-md">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-none bg-[#0D0714] border border-[#705EFF]/40 flex items-center justify-center text-[#FF6082]">
              <Cookie className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#FF6082] font-semibold block">
                Privacy & Experience
              </span>
              <h4 className="font-serif text-sm text-[#FFE4F6] leading-none">
                Cookie Preferences
              </h4>
            </div>
          </div>

          <button
            onClick={handleAcceptEssential}
            className="text-[#9E8EB0] hover:text-[#FFE4F6] p-1 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Description */}
        <p className="text-xs text-[#D8CEE8] leading-relaxed mb-4 font-light">
          We use cookies and local storage to personalize your bridal consultation experience, remember your language choices, and optimize website performance.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 border-t border-[#705EFF]/20">
          <button
            onClick={handleAcceptAll}
            className="w-full sm:flex-1 py-2 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-[11px] uppercase tracking-[0.16em] font-bold transition-opacity cursor-pointer text-center shadow-sm"
          >
            Accept All
          </button>

          <button
            onClick={handleAcceptEssential}
            className="w-full sm:w-auto px-3 py-2 bg-[#0D0714] border border-[#705EFF]/40 hover:border-[#B26CFF] text-[#FFE4F6] text-[11px] uppercase tracking-[0.14em] font-medium transition-colors cursor-pointer text-center"
          >
            Essential Only
          </button>

          <button
            onClick={() => {
              onNavigateToPolicy();
            }}
            className="text-[11px] text-[#B26CFF] hover:underline underline-offset-2 py-1 px-1 cursor-pointer whitespace-nowrap"
          >
            Cookie Policy →
          </button>
        </div>

      </div>
    </div>
  );
};
