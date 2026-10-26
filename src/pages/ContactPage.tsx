import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

interface ContactPageProps {
  onOpenBookingModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Proper Landscape AI-Generated Hero Section */}
      <div className="relative w-full h-[52vh] min-h-[380px] max-h-[580px] overflow-hidden bg-[#0D0714]">
        <img
          src="/assets/heroes/contact_hero.jpg"
          alt="Luxury Studio Concierge Contact"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0714] via-[#0D0714]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0714]/85 via-transparent to-[#0D0714]/70" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 sm:pb-14">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#FF6082]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
                BRIDAL CONCIERGE & INQUIRIES
              </span>
              <span className="w-6 h-[2px] bg-[#705EFF]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
              Connect With the <br />
              <span className="text-blue-reveal italic font-light">
                Royal Beauty Hub Atelier
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-10 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF6082] font-semibold block mb-2">
                DIRECT CHANNELS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A0B26]">
                Speak with Our Bridal Director
              </h2>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#705EFF]/15">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#FF6082] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#1A0B26] block">Studio Location</span>
                  <span className="text-xs text-[#4A3A5E]">{ARTIST_DATA.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#705EFF] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#1A0B26] block">Telephone</span>
                  <a href={`tel:${ARTIST_DATA.phone.replace(/\s+/g, '')}`} className="text-xs text-[#705EFF] hover:underline">
                    {ARTIST_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#1A0B26] block">Official Email</span>
                  <a href={`mailto:${ARTIST_DATA.email}`} className="text-xs text-[#1E3A8A] hover:underline">
                    {ARTIST_DATA.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${ARTIST_DATA.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Royal Beauty Hub! I'd like to inquire about wedding date bookings."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white text-xs uppercase tracking-wider font-bold shadow-md hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-white" />
                <span>Instant WhatsApp Concierge</span>
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
                Reserve Your Wedding Date
              </h3>
              <p className="text-xs sm:text-sm text-[#4A3A5E] font-light leading-relaxed mb-8">
                Due to strict luxury standards, Gautam Aadi accommodates only one signature bride per ceremony muhurat. Submit your date to verify exclusivity and reserve your slot.
              </p>
              <button
                onClick={onOpenBookingModal}
                className="w-full py-4 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-lg shadow-[#FF6082]/25 hover:opacity-95 transition-all cursor-pointer"
              >
                Launch Date Reservation Form
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
