import React from 'react';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { AboutArtist } from '../components/AboutArtist';
import { ServicesSection } from '../components/ServicesSection';
import { BridalAtelier } from '../components/BridalAtelier';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { GallerySection } from '../components/GallerySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { LocationsSection } from '../components/LocationsSection';
import { InstagramFeed } from '../components/InstagramFeed';
import { PageRoute } from '../components/Navbar';
import { MakeupService, GalleryItem, TransformationItem } from '../data/makeupData';

interface HomePageProps {
  onOpenBookingModal: (serviceId?: string, lookTitle?: string) => void;
  onNavigate: (page: PageRoute) => void;
  currentLang: 'EN' | 'HI';
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBookingModal,
  onNavigate,
  currentLang
}) => {
  return (
    <div>
      {/* 1. Cinematic Hero with Video Background */}
      <Hero
        onBookClick={() => onOpenBookingModal()}
        onExploreClick={() => onNavigate('services')}
        currentLang={currentLang}
      />

      {/* 2. Slim Trust & Brand Strip */}
      <TrustStrip />

      {/* 3. About the Artist */}
      <AboutArtist
        onDiscoverMore={() => onNavigate('about')}
        onBookClick={() => onOpenBookingModal()}
        currentLang={currentLang}
      />

      {/* 4. Signature Services Highlights */}
      <ServicesSection
        onSelectServiceToBook={(service: MakeupService) => onOpenBookingModal(service.id)}
        currentLang={currentLang}
      />

      {/* 5. Bridal Atelier 4-Step Experience */}
      <BridalAtelier
        onBookBridal={() => onOpenBookingModal('royal-bridal')}
        currentLang={currentLang}
      />

      {/* 6. Interactive Before & After Transformation */}
      <BeforeAfterSlider
        onBookTransformation={(item: TransformationItem) => onOpenBookingModal(undefined, item.title)}
        currentLang={currentLang}
      />

      {/* 7. Signature Editorial Gallery with Fullscreen Lightbox */}
      <GallerySection
        onBookLook={(look: GalleryItem) => onOpenBookingModal(undefined, look.title)}
        currentLang={currentLang}
      />

      {/* 8. Verified Reviews & Statistics */}
      <TestimonialsSection />

      {/* 9. Locations & Pan-India Destinations */}
      <LocationsSection />

      {/* 10. Instagram Feed */}
      <InstagramFeed />
    </div>
  );
};
