import React from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { ARTIST_DATA } from '../data/makeupData';

interface ContactPageProps {
  onOpenBookingModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Royal Palette Gradient Hero Banner (No background image, pure luxury gradient & separate palette glows) */}
      <div className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#120524] via-[#1E0938] to-[#0A0314] overflow-hidden text-white border-b border-[#705EFF]/25">
        <div className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-[#705EFF]/25 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#FF6082]/20 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 rounded-full bg-[#B26CFF]/20 blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <span className="font-cursive text-3xl sm:text-4xl text-[#FF6082] block mb-2">
            We Are Here For You
          </span>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#FF6082]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B26CFF] font-semibold">
              Get In Touch
            </span>
            <span className="w-5 h-[2px] bg-[#705EFF]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight mb-4">
            Contact Royal Beauty Hub
          </h1>
          <p className="text-sm sm:text-base text-[#D8CEE8] font-light max-w-xl leading-relaxed">
            Have questions about dates, services, or locations? Reach out to us directly by phone, WhatsApp, or booking form.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-10 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF6082] font-semibold block mb-2">
                REACH US DIRECTLY
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A0B26]">
                Studio & Contact Details
              </h2>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#705EFF]/15">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#FF6082] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#1A0B26] block">Studio Address</span>
                  <span className="text-xs text-[#4A3A5E]">{ARTIST_DATA.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#705EFF] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#1A0B26] block">Phone Number</span>
                  <a href={`tel:${ARTIST_DATA.phone.replace(/\s+/g, '')}`} className="text-xs text-[#705EFF] hover:underline">
                    {ARTIST_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#1A0B26] block">Email Address</span>
                  <a href={`mailto:${ARTIST_DATA.email}`} className="text-xs text-[#1E3A8A] hover:underline">
                    {ARTIST_DATA.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action in Royal Palette */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${ARTIST_DATA.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Royal Beauty Hub! I'd like to inquire about wedding date bookings."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-wider font-bold shadow-md hover:opacity-95 transition-all rounded-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Chat with us on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Date Reservation Panel */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 text-center flex flex-col justify-between">
            <div className="max-w-md mx-auto my-auto py-6">
              <div className="w-16 h-16 rounded-full bg-[#705EFF]/10 border border-[#705EFF]/30 flex items-center justify-center text-[#705EFF] mx-auto mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] mb-3">
                Check Wedding Date Availability
              </h3>
              <p className="text-xs sm:text-sm text-[#4A3A5E] font-light leading-relaxed mb-8">
                We accept only one bride per wedding day to ensure 100% focused attention. Fill out our simple form to secure your date.
              </p>
              <button
                onClick={onOpenBookingModal}
                className="w-full py-4 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-lg shadow-[#FF6082]/25 hover:opacity-95 transition-all cursor-pointer rounded-sm"
              >
                Open Booking Request Form
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
