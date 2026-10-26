import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieBannerProps {
  onNavigateToPolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigateToPolicy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('rbh_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'rbh_cookie_consent',
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
      'rbh_cookie_consent',
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
      <div className="glass-card p-4 sm:p-5 shadow-2xl relative border border-[#705EFF]/30 text-[#1A0B26]">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-none bg-[#705EFF]/10 border border-[#705EFF]/30 flex items-center justify-center text-[#FF6082]">
              <Cookie className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#FF6082] font-semibold block">
                PRIVACY & EXPERIENCE
              </span>
              <h4 className="font-serif text-sm text-[#1A0B26] font-semibold leading-none">
                Cookie Preferences
              </h4>
            </div>
          </div>

          <button
            onClick={handleAcceptEssential}
            className="text-[#7A698F] hover:text-[#1A0B26] p-1 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Description */}
        <p className="text-xs text-[#4A3A5E] leading-relaxed mb-4 font-light">
          We use essential cookies to ensure smooth date reservation and optimal performance during your visit to Royal Beauty Hub.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 border-t border-[#705EFF]/15">
          <button
            onClick={handleAcceptAll}
            className="w-full sm:flex-1 py-2 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-[11px] uppercase tracking-[0.16em] font-bold transition-opacity cursor-pointer text-center shadow-sm"
          >
            Accept All
          </button>

          <button
            onClick={handleAcceptEssential}
            className="w-full sm:w-auto px-3 py-2 bg-white border border-[#705EFF]/30 hover:border-[#705EFF] text-[#2D183E] text-[11px] uppercase tracking-[0.14em] font-medium transition-colors cursor-pointer text-center"
          >
            Essential Only
          </button>

          <button
            onClick={() => onNavigateToPolicy()}
            className="text-[11px] text-[#705EFF] hover:text-[#FF6082] hover:underline underline-offset-2 py-1 px-1 cursor-pointer whitespace-nowrap"
          >
            Policy →
          </button>
        </div>

      </div>
    </div>
  );
};
