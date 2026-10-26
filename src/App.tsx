import React, { useState, useEffect } from 'react';
import { Navbar, PageRoute } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileQuickBar } from './components/MobileQuickBar';
import { BookingModal } from './components/BookingModal';
import { CookieBanner } from './components/CookieBanner';
import { ScrollToTop } from './components/ScrollToTop';
import { LuxuryPreloader } from './components/LuxuryPreloader';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { BridalPage } from './pages/BridalPage';
import { GalleryPage } from './pages/GalleryPage';
import { TransformationsPage } from './pages/TransformationsPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { TermsPage } from './pages/TermsPage';
import { MakeupService, GalleryItem, TransformationItem } from './data/makeupData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [currentLang, setCurrentLang] = useState<'EN' | 'HI'>('EN');

  // Floating Booking Modal State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalInitialService, setModalInitialService] = useState<string | undefined>(undefined);
  const [modalInitialLook, setModalInitialLook] = useState<string | undefined>(undefined);

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Theme State: 'dark' | 'light' with localStorage persistence and default
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('rbh_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {
      // ignore
    }
    return 'dark';
  });

  useEffect(() => {
    try {
      localStorage.setItem('rbh_theme', theme);
    } catch {
      // ignore
    }
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Key to force-remount CookieBanner if user resets from policy page
  const [cookieBannerKey, setCookieBannerKey] = useState(0);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Always open to Home page on initial load / refresh, clearing any hash
  useEffect(() => {
    // Force reset to home page on page load / reload
    setCurrentPage('home');
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validPages: PageRoute[] = [
        'home',
        'services',
        'bridal',
        'gallery',
        'transformations',
        'about',
        'reviews',
        'contact',
        'cookie-policy',
        'terms'
      ];
      if (validPages.includes(hash as PageRoute)) {
        setCurrentPage(hash as PageRoute);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingModal = (serviceId?: string, lookTitle?: string) => {
    setModalInitialService(serviceId);
    setModalInitialLook(lookTitle);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setModalInitialService(undefined);
    setModalInitialLook(undefined);
  };

  const handleResetCookiePreferences = () => {
    // Trigger remount of banner
    setCookieBannerKey((k) => k + 1);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'light' ? 'bg-[#FAF7FC] text-[#1F112B]' : 'bg-[#0D0714] text-[#FFE4F6]'
      } selection:bg-[#FF6082]/30 selection:text-[#FFE4F6] flex flex-col justify-between`}
    >
      {/* Clean Luxury Preloader */}
      <LuxuryPreloader />

      {/* 1. Minimal Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onBookClick={() => handleOpenBookingModal()}
        currentLang={currentLang}
        onLangToggle={setCurrentLang}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={setIsMobileMenuOpen}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* 2. Distinct Page Views */}
      <main className="flex-1 pb-20 lg:pb-0">
        {currentPage === 'home' && (
          <HomePage
            onOpenBookingModal={handleOpenBookingModal}
            onNavigate={handleNavigate}
            currentLang={currentLang}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onSelectServiceToBook={(service: MakeupService) => handleOpenBookingModal(service.id)}
            currentLang={currentLang}
          />
        )}

        {currentPage === 'bridal' && (
          <BridalPage
            onBookBridal={() => handleOpenBookingModal('royal-bridal')}
            currentLang={currentLang}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onBookLook={(look: GalleryItem) => handleOpenBookingModal(undefined, look.title)}
            currentLang={currentLang}
          />
        )}

        {currentPage === 'transformations' && (
          <TransformationsPage
            onBookTransformation={(item: TransformationItem) => handleOpenBookingModal(undefined, item.title)}
            currentLang={currentLang}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onBookConsultation={() => handleOpenBookingModal()}
            currentLang={currentLang}
          />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPage
            onBookClick={() => handleOpenBookingModal()}
            currentLang={currentLang}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenBookingModal={() => handleOpenBookingModal()}
            currentLang={currentLang}
          />
        )}

        {currentPage === 'cookie-policy' && (
          <CookiePolicyPage
            onResetPreferences={handleResetCookiePreferences}
            currentLang={currentLang}
          />
        )}

        {currentPage === 'terms' && (
          <TermsPage
            currentLang={currentLang}
          />
        )}
      </main>

      {/* 3. Luxury Dark Footer with ACCustomLabs Center Credit & Legal Links */}
      <Footer
        onNavigate={handleNavigate}
        onBookClick={(serviceId) => handleOpenBookingModal(serviceId)}
      />

      {/* 4. Floating Booking Modal (Opens when Book Now is clicked) */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        initialServiceId={modalInitialService}
        initialLookTitle={modalInitialLook}
        currentLang={currentLang}
      />

      {/* 5. Functional Cookie Consent Banner (Always shows for new users) */}
      <CookieBanner
        key={cookieBannerKey}
        onNavigateToPolicy={() => handleNavigate('cookie-policy')}
      />

      {/* 6, 7, 8. Floating Controls: Only render when mobile menu is closed */}
      {!isMobileMenuOpen && (
        <>
          <ScrollToTop />
          <FloatingWhatsApp />
          <MobileQuickBar
            currentPage={currentPage}
            onNavigate={handleNavigate}
            onBookClick={() => handleOpenBookingModal()}
            currentLang={currentLang}
            theme={theme}
          />
        </>
      )}
    </div>
  );
}
