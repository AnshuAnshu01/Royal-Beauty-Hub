import React from 'react';
import { MapPin, Plane, Clock, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

interface LocationsPageProps {
  onBookClick: () => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onBookClick }) => {
  const destinationHubs = [
    {
      city: 'Udaipur & Jaipur',
      region: 'Rajasthan Weddings',
      desc: 'Heritage palaces and royal wedding venues. Complete mobile setup with professional vanity lighting.'
    },
    {
      city: 'Goa & Coastal',
      region: 'Beach Weddings',
      desc: 'Waterproof and humidity-resistant makeup that stays fresh under coastal weather and sea breeze.'
    },
    {
      city: 'Delhi NCR & North India',
      region: 'Grand Celebrations',
      desc: 'Glowing bridal looks and reception styling tailored to your wedding decor and outfit.'
    },
    {
      city: 'Mumbai & Bengaluru',
      region: 'Destination & City Weddings',
      desc: 'Natural glass skin and graceful bridal hairstyles for intimate and grand ceremonies alike.'
    },
    {
      city: 'Dubai & Worldwide',
      region: 'International Weddings',
      desc: 'Complete travel packages for international brides and families with prior look consultations.'
    }
  ];

  return (
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Royal Palette Gradient Hero Banner (No background image, pure luxury gradient & separate palette glows) */}
      <div className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#120524] via-[#1E0938] to-[#0A0314] overflow-hidden text-white border-b border-[#705EFF]/25">
        <div className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-[#FF6082]/25 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#705EFF]/20 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 rounded-full bg-[#B26CFF]/20 blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <span className="font-cursive text-3xl sm:text-4xl text-[#FF6082] block mb-2">
            Wherever Your Wedding Takes You
          </span>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#FF6082]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B26CFF] font-semibold">
              Studio & Destination Travel
            </span>
            <span className="w-5 h-[2px] bg-[#705EFF]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight mb-4">
            Studio & Wedding Locations
          </h1>
          <p className="text-sm sm:text-base text-[#D8CEE8] font-light max-w-xl leading-relaxed">
            Visit our private beauty studio or have Gautam Aadi and our team travel directly to your wedding venue across India and overseas.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Studio & On-Location Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch mb-16 sm:mb-24">
          
          <div className="lg:col-span-6 glass-card p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#FF6082]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#FF6082] font-semibold">
                  OUR STUDIO
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal mb-4">
                Visit Our Studio
              </h2>

              <p className="text-xs sm:text-sm text-[#4A3A5E] font-light leading-relaxed mb-6">
                Our peaceful studio is equipped with professional makeup lighting, private changing areas, and high-end tools so you can experience your bridal look in full comfort.
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#2D183E] border-t border-[#705EFF]/15 pt-5 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FF6082] shrink-0 mt-0.5" />
                  <span>{ARTIST_DATA.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#705EFF] shrink-0" />
                  <span>Tuesday – Sunday: 10:00 AM – 7:30 PM (By Appointment)</span>
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
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-md shadow-[#FF6082]/25 hover:opacity-95 transition-all cursor-pointer rounded-sm"
              >
                <span>Book a Studio Visit</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Destination Travel */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-10 flex flex-col justify-between border-l-4 border-l-[#705EFF]">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <Plane className="w-4 h-4 text-[#705EFF]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#705EFF] font-semibold">
                  WE COME TO YOU
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal mb-4">
                We Travel to Your Venue
              </h2>

              <p className="text-xs sm:text-sm text-[#4A3A5E] font-light leading-relaxed mb-6">
                Whether your wedding is at a heritage resort, a beach hotel, or your hometown, Gautam Aadi travels to you with all required lighting and professional kits.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 bg-[#FAF7FC] border border-[#705EFF]/15 text-xs">
                  <span className="font-semibold text-[#1A0B26] block">Early Arrival</span>
                  <span className="text-[#7A698F] text-[11px]">We arrive well before your event time so you never feel rushed</span>
                </div>
                <div className="p-3 bg-[#FAF7FC] border border-[#705EFF]/15 text-xs">
                  <span className="font-semibold text-[#1A0B26] block">Family Styling</span>
                  <span className="text-[#7A698F] text-[11px]">Team members available to style mother, sisters, and bridesmaids</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-[#705EFF]/5 border border-[#705EFF]/20 text-xs text-[#4A3A5E]">
              <span className="text-[#FF6082] font-semibold">Travel Details:</span> Travel and hotel arrangements for outstation weddings can be easily coordinated directly with our team upon booking.
            </div>
          </div>

        </div>

        {/* Wedding Locations */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold block mb-2">
              DESTINATION WEDDINGS
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26]">
              Popular Wedding Destinations
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
                  <span>Available for Bookings</span>
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
