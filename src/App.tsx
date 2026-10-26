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
import { FounderPage } from './pages/FounderPage';
import { LocationsPage } from './pages/LocationsPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { TermsPage } from './pages/TermsPage';
import { MakeupService, GalleryItem, TransformationItem } from './data/makeupData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  // Floating Booking Modal State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalInitialService, setModalInitialService] = useState<string | undefined>(undefined);
  const [modalInitialLook, setModalInitialLook] = useState<string | undefined>(undefined);

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        'founder',
        'locations',
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
    setCookieBannerKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen bg-[#FAF7FC] text-[#1A0B26] selection:bg-[#FF6082]/20 selection:text-[#1A0B26] flex flex-col justify-between">
      {/* Luxury Loading Animation Screen */}
      <LuxuryPreloader />

      {/* 1. Sticky Minimal Navigation (Zero overlap with Hero) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onBookClick={() => handleOpenBookingModal()}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={setIsMobileMenuOpen}
      />

      {/* 2. Distinct Page Views */}
      <main className="flex-1 pb-20 lg:pb-0">
        {currentPage === 'home' && (
          <HomePage
            onOpenBookingModal={handleOpenBookingModal}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onSelectServiceToBook={(service: MakeupService) => handleOpenBookingModal(service.id)}
          />
        )}

        {currentPage === 'bridal' && (
          <BridalPage
            onBookBridal={() => handleOpenBookingModal('royal-bridal')}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onBookLook={(look: GalleryItem) => handleOpenBookingModal(undefined, look.title)}
          />
        )}

        {currentPage === 'transformations' && (
          <GalleryPage
            onBookLook={(look: GalleryItem) => handleOpenBookingModal(undefined, look.title)}
          />
        )}

        {currentPage === 'founder' && (
          <FounderPage
            onBookClick={() => handleOpenBookingModal()}
          />
        )}

        {currentPage === 'locations' && (
          <LocationsPage
            onBookClick={() => handleOpenBookingModal()}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onBookConsultation={() => handleOpenBookingModal()}
          />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPage
            onBookClick={() => handleOpenBookingModal()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenBookingModal={() => handleOpenBookingModal()}
          />
        )}

        {currentPage === 'cookie-policy' && (
          <CookiePolicyPage
            onResetPreferences={handleResetCookiePreferences}
          />
        )}

        {currentPage === 'terms' && (
          <TermsPage />
        )}
      </main>

      {/* 3. Luxury Dark Footer with Big Logo & Center Credit */}
      <Footer
        onNavigate={handleNavigate}
        onBookClick={(serviceId) => handleOpenBookingModal(serviceId)}
      />

      {/* 4. Floating Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        initialServiceId={modalInitialService}
        initialLookTitle={modalInitialLook}
      />

      {/* 5. Functional Cookie Consent Banner */}
      <CookieBanner
        key={cookieBannerKey}
        onNavigateToPolicy={() => handleNavigate('cookie-policy')}
      />

      {/* 6. Floating Minimal WhatsApp & Mobile Quick Bar */}
      {!isMobileMenuOpen && (
        <>
          <ScrollToTop />
          <FloatingWhatsApp />
          <MobileQuickBar
            currentPage={currentPage}
            onNavigate={handleNavigate}
            onBookClick={() => handleOpenBookingModal()}
          />
        </>
      )}
    </div>
  );
}
