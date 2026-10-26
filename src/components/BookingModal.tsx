import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SERVICES, ARTIST_DATA } from '../data/makeupData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialLookTitle?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialLookTitle
}) => {
  const [formData, setFormData] = useState({
    name: '',
    whatsappNumber: '',
    email: '',
    eventType: 'Royal Bridal',
    eventDate: '',
    eventLocation: '',
    guestCount: 'Bride Only',
    makeupService: 'Royal Traditional Bridal',
    hairstyling: 'Yes, Required',
    draping: 'Yes, Required',
    makeupStyle: 'HD Waterproof Glamour',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync initial service/look when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (initialServiceId) {
        const found = SERVICES.find((s) => s.id === initialServiceId);
        if (found) {
          setFormData((prev) => ({ ...prev, makeupService: found.title }));
        }
      }
      if (initialLookTitle) {
        setFormData((prev) => ({
          ...prev,
          message: `Inquiring specifically for "${initialLookTitle}" look.`
        }));
      }
    } else {
      document.body.style.overflow = 'unset';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialServiceId, initialLookTitle]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Bridal Booking Request - Royal Beauty Hub*
Name: ${formData.name || 'Not provided'}
Event: ${formData.eventType}
Date: ${formData.eventDate || 'TBD'}
Location: ${formData.eventLocation || 'TBD'}
Service: ${formData.makeupService}
Hairstyling: ${formData.hairstyling}
Draping: ${formData.draping}
Entourage: ${formData.guestCount}
Notes: ${formData.message || 'None'}`;

    return encodeURIComponent(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const url = `https://wa.me/${ARTIST_DATA.whatsappNumber}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Floating Dialog Container with Glassmorphism */}
      <div
        className="relative w-full max-w-2xl max-h-[92dvh] flex flex-col bg-white/98 backdrop-blur-2xl border border-[#705EFF]/25 shadow-2xl my-auto overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#FAF7FC] px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#705EFF]/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <img
              src={ARTIST_DATA.logoUrl}
              alt="Royal Beauty Hub Logo"
              className="h-8 sm:h-9 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(112,94,255,0.25)]"
            />
            <span className="text-[#705EFF]/30 text-base">|</span>
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#FF6082] font-semibold block">
                BRIDAL CONCIERGE
              </span>
              <h3 className="font-serif text-base sm:text-lg text-[#1A0B26] font-semibold leading-none">
                Reserve Your Wedding Date
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#7A698F] hover:text-[#1A0B26] hover:bg-[#705EFF]/10 border border-[#705EFF]/20 transition-colors cursor-pointer"
            aria-label="Close Booking Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with Smooth Momentum Scrolling */}
        <div className="p-4 sm:p-7 overflow-y-auto -webkit-overflow-scrolling-touch flex-1 text-[#1A0B26]">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#FF6082]/10 border border-[#FF6082] flex items-center justify-center text-[#FF6082] mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A0B26] mb-2 font-semibold">
                Booking Request Received
              </h3>
              <p className="text-xs sm:text-sm text-[#4A3A5E] max-w-md mb-6 font-light leading-relaxed">
                Thank you, <strong className="text-[#1A0B26] font-semibold">{formData.name || 'Bride'}</strong>! We have recorded your date request for <span className="text-[#705EFF] font-semibold">{formData.eventDate || 'your ceremony'}</span> in {formData.eventLocation || 'your venue'}. Gautam Aadi’s concierge team will verify date availability and respond via WhatsApp within 2 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <button
                  onClick={handleWhatsAppDirect}
                  className="flex-1 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.18em] font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#FF6082]/25"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                  Chat Directly on WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="py-3 px-5 border border-[#705EFF]/30 text-[#4A3A5E] hover:text-[#1A0B26] text-xs uppercase tracking-wider cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#FF6082] mb-1 font-semibold">
                    Bride / Client Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Priyanka Sharma"
                    className="w-full bg-white border border-[#705EFF]/25 text-[#1A0B26] px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#705EFF] placeholder:text-[#7A698F]/60"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#FF6082] mb-1 font-semibold">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    required
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-white border border-[#705EFF]/25 text-[#1A0B26] px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#705EFF] placeholder:text-[#7A698F]/60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#705EFF] mb-1 font-semibold">
                    Occasion / Event *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#705EFF]/25 text-[#1A0B26] px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#705EFF]"
                  >
                    <option value="Royal Bridal">Royal Bridal (Traditional Red)</option>
                    <option value="Modern Pastel Bridal">Modern Pastel / Day Phera</option>
                    <option value="Engagement / Roka">Engagement / Roka Ceremony</option>
                    <option value="Reception / Sangeet">Reception / Sangeet Glam</option>
                    <option value="Multi-Function Wedding">Multi-Event Wedding Package</option>
                    <option value="Party / Cocktail">Party / Cocktail / Entourage</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#705EFF] mb-1 font-semibold">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#705EFF]/25 text-[#1A0B26] px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#705EFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#705EFF] mb-1 font-semibold">
                    Event City / Venue *
                  </label>
                  <input
                    type="text"
                    name="eventLocation"
                    required
                    value={formData.eventLocation}
                    onChange={handleChange}
                    placeholder="e.g. Udaipur, Delhi, Jaipur"
                    className="w-full bg-white border border-[#705EFF]/25 text-[#1A0B26] px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#705EFF] placeholder:text-[#7A698F]/60"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#705EFF] mb-1 font-semibold">
                    Preferred Artistry Package
                  </label>
                  <input
                    type="text"
                    name="makeupService"
                    value={formData.makeupService}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#705EFF]/25 text-[#1A0B26] px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#705EFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#705EFF] mb-1 font-semibold">
                  Notes or Preferences (Optional)
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share outfit colors, ceremony timings, or any questions..."
                  className="w-full bg-white border border-[#705EFF]/25 text-[#1A0B26] px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#705EFF] placeholder:text-[#7A698F]/60 resize-none rounded-sm"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.16em] font-bold shadow-lg shadow-[#FF6082]/25 cursor-pointer text-center rounded-sm"
                >
                  Send Booking Request
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3.5 px-6 border border-[#705EFF]/50 text-[#705EFF] hover:bg-gradient-to-r hover:from-[#FF6082] hover:to-[#705EFF] hover:text-white hover:border-transparent text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer rounded-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
