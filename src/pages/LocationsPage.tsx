import React from 'react';
import { MapPin, Plane, Clock, Phone, Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

interface LocationsPageProps {
  onBookClick: () => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onBookClick }) => {
  const destinationHubs = [
    {
      city: 'Udaipur & Jaipur',
      region: 'Rajasthan Palaces',
      desc: 'Heritage forts and luxury lakeside palaces. Full mobile VIP bridal setup with high-output makeup vanity lighting.'
    },
    {
      city: 'Goa & Alibaug',
      region: 'Coastal & Beach Weddings',
      desc: 'Humidity-proof, waterproof airbrush formulations guaranteed to resist tropical warmth and sea breeze.'
    },
    {
      city: 'Delhi NCR & Punjab',
      region: 'Grand Royal Celebrations',
      desc: 'High-glamour reception statements, dramatic couture lashes, and royal jewellery pairing.'
    },
    {
      city: 'Mumbai & Bengaluru',
      region: 'Metropolitan Contemporary',
      desc: 'Modern glass skin, pastel bridal aesthetics, and seamless morning-to-night transformation.'
    },
    {
      city: 'Dubai & International',
      region: 'Global Destination Brides',
      desc: 'Full bridal entourage travel packages including passport-ready kits, trial runs, and pre-wedding event looks.'
    }
  ];

  return (
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Proper Landscape AI-Generated Hero Section */}
      <div className="relative w-full h-[52vh] min-h-[380px] max-h-[580px] overflow-hidden bg-[#0D0714]">
        <img
          src="/assets/heroes/locations_hero.jpg"
          alt="Luxury Destination Wedding Palaces"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0714] via-[#0D0714]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0714]/85 via-transparent to-[#0D0714]/70" />

        {/* Hero Title Container */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 sm:pb-14">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#FF6082]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
                STUDIO ATELIER & WORLDWIDE TRAVEL
              </span>
              <span className="w-6 h-[2px] bg-[#705EFF]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
              Locations & Destination <br />
              <span className="text-blue-reveal italic font-light">
                Bridal Concierge
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Studio Boutique Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch mb-16 sm:mb-24">
          
          <div className="lg:col-span-6 glass-card p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#FF6082]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#FF6082] font-semibold">
                  FLAGSHIP ATELIER
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal mb-4">
                The Luxury Bridal Suite
              </h2>

              <p className="text-xs sm:text-sm text-[#4A3A5E] font-light leading-relaxed mb-6">
                Our private studio provides an oasis of tranquility for bridal consultations, customized skin prep previews, and couture draping sessions. Designed with true-color CRI 98 studio lighting, you will see exactly how your makeup performs before your wedding day.
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#2D183E] border-t border-[#705EFF]/15 pt-5 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FF6082] shrink-0 mt-0.5" />
                  <span>{ARTIST_DATA.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#705EFF] shrink-0" />
                  <span>Tuesday – Sunday: 10:00 AM – 7:30 PM (By Appointment Only)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#1E3A8A] shrink-0" />
                  <a href={`tel:${ARTIST_DATA.phone.replace(/\s+/g, '')}`} className="hover:text-[#705EFF] transition-colors">
                    {ARTIST_DATA.phone}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-md shadow-[#FF6082]/25 hover:opacity-95 transition-all cursor-pointer"
              >
                <span>Book In-Studio Trial Session</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Pan-India Travel Guarantee */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-10 flex flex-col justify-between border-l-4 border-l-[#705EFF]">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <Plane className="w-4 h-4 text-[#705EFF]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#705EFF] font-semibold">
                  ON-LOCATION SERVICES
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal mb-4">
                We Travel To Your Venue
              </h2>

              <p className="text-xs sm:text-sm text-[#4A3A5E] font-light leading-relaxed mb-6">
                Whether you are exchanging vows in a regal fort in Jodhpur, a palace in Udaipur, a cliffside resort in Goa, or an international hotel ballroom in Dubai, Gautam Aadi and his senior artistry entourage travel to your location with complete luxury kits.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 bg-[#FAF7FC] border border-[#705EFF]/15 text-xs">
                  <span className="font-semibold text-[#1A0B26] block">Zero Stress Setup</span>
                  <span className="text-[#7A698F] text-[11px]">We arrive 2 hours prior to start time with vanity lights</span>
                </div>
                <div className="p-3 bg-[#FAF7FC] border border-[#705EFF]/15 text-xs">
                  <span className="font-semibold text-[#1A0B26] block">Entourage Coverage</span>
                  <span className="text-[#7A698F] text-[11px]">Bridesmaids, mothers, and family styling teams available</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-[#705EFF]/5 border border-[#705EFF]/20 text-xs text-[#4A3A5E]">
              <span className="text-[#FF6082] font-semibold">Travel Protocol:</span> Flights/train transit and hotel accommodations for on-location destination bookings are coordinated seamlessly by our bridal concierge.
            </div>
          </div>

        </div>

        {/* Popular Destination Hubs */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold block mb-2">
              FREQUENT DESTINATION DESTINATIONS
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26]">
              Where We Create Magic
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinationHubs.map((dest) => (
              <div key={dest.city} className="glass-card p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#FF6082] font-semibold block mb-1">
                    {dest.region}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1A0B26] font-semibold mb-2.5">
                    {dest.city}
                  </h3>
                  <p className="text-xs text-[#4A3A5E] font-light leading-relaxed mb-4">
                    {dest.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#705EFF]/15 flex items-center justify-between text-xs text-[#705EFF] font-medium">
                  <span>Available on booking</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
