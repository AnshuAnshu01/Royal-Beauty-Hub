import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Calendar, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { ARTIST_DATA, FAQ_ITEMS } from '../data/makeupData';

interface ContactPageProps {
  onOpenBookingModal: () => void;
  currentLang: 'EN' | 'HI';
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBookingModal, currentLang }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="pt-24 pb-28 bg-[#0D0714] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto pt-8 pb-14 border-b border-[#705EFF]/25">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#FF6082]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              ATELIER CONCIERGE
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#FF6082]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#FFE4F6] font-normal tracking-tight mb-4">
            Connect & Reserve
          </h1>

          <p className="text-sm sm:text-base text-[#D8CEE8] font-light leading-relaxed max-w-2xl mx-auto">
            Connect directly with Gautam Aadi’s bridal concierge to inquire about dates, destination wedding logistics, or schedule a personal studio trial.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-16">
          <div className="bg-[#160F24] border border-[#705EFF]/30 p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 border border-[#705EFF]/40 bg-[#0D0714] flex items-center justify-center text-[#FF6082] mb-5">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#FFE4F6] mb-2 font-normal">
                WhatsApp Concierge
              </h3>
              <p className="text-xs text-[#D8CEE8] mb-6 font-light leading-relaxed">
                Fastest response for bridal date availability, pricing estimates, and portfolio videos.
              </p>
            </div>
            <a
              href={`https://wa.me/${ARTIST_DATA.whatsappNumber}?text=Hello%20Gautam,%20I%20would%20like%20to%20enquire%20about%20bridal%20makeup.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.2em] font-bold text-center transition-opacity shadow-md shadow-[#705EFF]/30"
            >
              CHAT ON WHATSAPP →
            </a>
          </div>

          <div className="bg-[#160F24] border border-[#705EFF]/30 p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 border border-[#705EFF]/40 bg-[#0D0714] flex items-center justify-center text-[#FF6082] mb-5">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#FFE4F6] mb-2 font-normal">
                Online Date Reservation
              </h3>
              <p className="text-xs text-[#D8CEE8] mb-6 font-light leading-relaxed">
                Open our interactive floating reservation form to specify your outfit, events, and party count.
              </p>
            </div>
            <button
              onClick={onOpenBookingModal}
              className="py-3 px-4 border border-[#705EFF] hover:border-[#FF6082] hover:bg-gradient-to-r hover:from-[#FF6082] hover:to-[#705EFF] text-[#FFE4F6] text-xs uppercase tracking-[0.2em] font-bold text-center transition-all cursor-pointer shadow-sm"
            >
              OPEN BOOKING FORM →
            </button>
          </div>

          <div className="bg-[#160F24] border border-[#705EFF]/30 p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 border border-[#705EFF]/40 bg-[#0D0714] flex items-center justify-center text-[#FF6082] mb-5">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#FFE4F6] mb-2 font-normal">
                Flagship Studio
              </h3>
              <p className="text-xs text-[#D8CEE8] mb-6 font-light leading-relaxed">
                Aurangabad, Bihar, India.<br />
                Mon – Sun: 09:00 AM – 08:00 PM<br />
                <span className="text-[#FF6082] font-medium">By advance appointment only.</span>
              </p>
            </div>
            <a
              href={`tel:${ARTIST_DATA.phone.replace(/\s+/g, '')}`}
              className="py-3 px-4 border border-[#705EFF]/40 hover:border-[#B26CFF] text-[#FFE4F6] text-xs uppercase tracking-[0.2em] font-medium text-center transition-colors"
            >
              CALL: {ARTIST_DATA.phone}
            </a>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto bg-[#160F24] border border-[#705EFF]/30 p-8 sm:p-10 mb-16 shadow-xl">
          <h2 className="font-serif text-2xl text-[#FFE4F6] mb-6 font-normal text-center">
            Booking & Reservation Policies
          </h2>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, idx) => (
              <div key={idx} className="border-b border-[#705EFF]/20 pb-4 last:border-b-0">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left flex items-start justify-between gap-3 text-xs uppercase tracking-wider text-[#FFE4F6] hover:text-[#FF6082] font-semibold transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#FF6082] shrink-0 font-bold">{activeFaq === idx ? '−' : '+'}</span>
                </button>
                {activeFaq === idx && (
                  <p className="text-xs text-[#D8CEE8] leading-relaxed mt-2 font-light">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
