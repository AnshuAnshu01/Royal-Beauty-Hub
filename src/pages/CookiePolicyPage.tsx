import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, CheckCircle2, RotateCcw } from 'lucide-react';

interface CookiePolicyPageProps {
  onResetPreferences: () => void;
  currentLang?: 'EN' | 'HI';
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ onResetPreferences }) => {
  const [currentConsent, setCurrentConsent] = useState<any>(null);
  const [resetMessage, setResetMessage] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('rbh_cookie_consent') || localStorage.getItem('ga_cookie_consent');
    if (consent) {
      try {
        setCurrentConsent(JSON.parse(consent));
      } catch (e) {
        setCurrentConsent({ status: consent });
      }
    }
  }, []);

  const handleReset = () => {
    localStorage.removeItem('rbh_cookie_consent');
    localStorage.removeItem('ga_cookie_consent');
    setCurrentConsent(null);
    setResetMessage(true);
    onResetPreferences();
    setTimeout(() => setResetMessage(false), 4000);
  };

  return (
    <div className="pt-10 pb-20 bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center pt-8 pb-14 border-b border-[#705EFF]/25">
          <div className="inline-flex items-center gap-2 mb-3">
            <Cookie className="w-4 h-4 text-[#FF6082]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              PRIVACY & TRANSPARENCY
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#FFE4F6] font-normal tracking-tight mb-4">
            Cookie Policy
          </h1>

          <p className="text-sm sm:text-base text-[#D8CEE8] font-light leading-relaxed max-w-2xl mx-auto">
            This Cookie Policy explains how Makeup by Gautam Aadi uses cookies and browser storage technologies to provide an effortless, secure, and personalized luxury experience.
          </p>

          <p className="text-xs text-[#9E8EB0] mt-2">
            Last Updated: October 2026 • Effective Immediately
          </p>
        </div>

        {/* Current Status Box */}
        <div className="my-10 p-6 bg-[#160F24] border border-[#705EFF]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#FF6082] font-semibold block mb-1">
              Your Current Status
            </span>
            <p className="text-sm text-[#FFE4F6]">
              {currentConsent ? (
                <>
                  Preferences stored: <strong className="text-[#FF6082] uppercase">{currentConsent.status || 'Active'}</strong>
                  {currentConsent.timestamp && (
                    <span className="text-xs text-[#9E8EB0] block sm:inline sm:ml-2">
                      (Saved on {new Date(currentConsent.timestamp).toLocaleDateString()})
                    </span>
                  )}
                </>
              ) : (
                'No consent record found (Default essential session rules apply).'
              )}
            </p>
          </div>

          <button
            onClick={handleReset}
            className="shrink-0 px-4 py-2 bg-[#0D0714] hover:bg-gradient-to-r hover:from-[#FF6082] hover:to-[#705EFF] text-[#FFE4F6] border border-[#705EFF]/50 hover:border-[#FF6082] text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#FF6082]" />
            Reset Cookie Preferences
          </button>
        </div>

        {resetMessage && (
          <div className="mb-8 p-4 bg-[#FF6082]/15 border border-[#FF6082] text-xs text-[#FFE4F6] flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-[#FF6082]" />
            Your cookie preferences have been reset. The consent banner is now active again.
          </div>
        )}

        {/* Policy Body */}
        <div className="space-y-10 text-[#D8CEE8] text-sm leading-relaxed font-light">
          
          <section className="bg-[#160F24] border border-[#705EFF]/25 p-6 sm:p-8 shadow-xl">
            <h2 className="font-serif text-2xl text-[#FFE4F6] mb-3 font-normal">
              1. What Are Cookies?
            </h2>
            <p className="mb-3">
              Cookies are small alphanumeric text files stored on your computer or mobile device when you browse websites. They enable the website to recognize your device, remember preferences (such as your chosen language or selected bridal package), and ensure smooth functionality across page transitions.
            </p>
            <p>
              We also utilize modern client-side storage technologies like <code className="text-[#FF6082] bg-[#0D0714] px-1.5 py-0.5 border border-[#705EFF]/30 font-mono text-xs">localStorage</code> to preserve temporary booking details and language preferences without transmitting unnecessary tracking payloads.
            </p>
          </section>

          <section className="bg-[#160F24] border border-[#705EFF]/25 p-6 sm:p-8 shadow-xl">
            <h2 className="font-serif text-2xl text-[#FFE4F6] mb-3 font-normal">
              2. Categories of Cookies We Use
            </h2>
            
            <div className="space-y-6 mt-4">
              <div className="border-l-2 border-[#FF6082] pl-4">
                <h3 className="font-serif text-lg text-[#FFE4F6] font-normal mb-1">
                  A. Strictly Necessary & Functional Cookies
                </h3>
                <p className="text-xs text-[#9E8EB0] mb-2">Always Active • Essential for Website Operation</p>
                <p className="text-xs">
                  These cookies are mandatory for security, routing across our multi-page portfolio, maintaining video playback performance, and remembering your consent status. Without these, core features of the website cannot function properly.
                </p>
              </div>

              <div className="border-l-2 border-[#B26CFF] pl-4">
                <h3 className="font-serif text-lg text-[#FFE4F6] font-normal mb-1">
                  B. Preference & Atelier Customization Cookies
                </h3>
                <p className="text-xs text-[#9E8EB0] mb-2">Optional • Enhanced Luxury Experience</p>
                <p className="text-xs">
                  These allow our website to remember choices you make (such as English vs. Hindi language toggles, or pre-filling services you clicked in the gallery into the floating booking form).
                </p>
              </div>

              <div className="border-l-2 border-[#705EFF] pl-4">
                <h3 className="font-serif text-lg text-[#FFE4F6] font-normal mb-1">
                  C. Performance & Analytics Cookies
                </h3>
                <p className="text-xs text-[#9E8EB0] mb-2">Optional • Performance Optimization</p>
                <p className="text-xs">
                  These help us understand anonymous visitor interaction metrics—such as which bridal looks or before & after transformations generate the highest interest—enabling us to refine our bridal portfolio.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#160F24] border border-[#705EFF]/25 p-6 sm:p-8 shadow-xl">
            <h2 className="font-serif text-2xl text-[#FFE4F6] mb-3 font-normal">
              3. Managing & Withdrawing Your Consent
            </h2>
            <p className="mb-3">
              You can modify or withdraw your cookie consent at any time using the "Reset Cookie Preferences" button on this page. Doing so will immediately clear your saved choices and reactivate the consent selector.
            </p>
            <p>
              Additionally, most web browsers allow you to manage cookie settings through their options or preferences menu (e.g. Chrome, Safari, Firefox, Edge). Please note that completely disabling cookies may degrade certain aesthetic features and interactive booking elements.
            </p>
          </section>

          <section className="bg-[#160F24] border border-[#705EFF]/25 p-6 sm:p-8 shadow-xl">
            <h2 className="font-serif text-2xl text-[#FFE4F6] mb-3 font-normal">
              4. Contact for Privacy Inquiries
            </h2>
            <p>
              If you have any questions or concerns regarding our Cookie Policy or data handling practices, please contact our atelier team by phone or WhatsApp at <strong className="text-[#FFE4F6]">9931689790</strong> (+91 99316 89790) or connect directly via Instagram at <strong className="text-[#FF6082]">@makeup_by_gautam_aadi</strong>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
