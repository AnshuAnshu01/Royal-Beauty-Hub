import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';
import { SERVICES, ARTIST_DATA } from '../data/makeupData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialLookTitle?: string;
  currentLang: 'EN' | 'HI';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialLookTitle,
  currentLang
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
    budgetRange: '₹20,000 – ₹35,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync initial service/look when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (initialServiceId) {
        const found = SERVICES.find(s => s.id === initialServiceId);
        if (found) {
          setFormData(prev => ({ ...prev, makeupService: found.title }));
        }
      }
      if (initialLookTitle) {
        setFormData(prev => ({
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
    const text = `*New Bridal Booking Request - Makeup by Gautam Aadi*
Name: ${formData.name || 'Not provided'}
Event: ${formData.eventType}
Date: ${formData.eventDate || 'TBD'}
Location: ${formData.eventLocation || 'TBD'}
Service: ${formData.makeupService}
Hairstyling: ${formData.hairstyling}
Draping: ${formData.draping}
Entourage: ${formData.guestCount}
Budget: ${formData.budgetRange}
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
      className="fixed inset-0 z-50 bg-[#0D0714]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Floating Dialog Container */}
      <div
        className="relative w-full max-w-2xl max-h-[94dvh] flex flex-col bg-[#160F24] border border-[#705EFF]/45 shadow-2xl my-auto overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#0D0714] px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#705EFF]/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <img
              src={ARTIST_DATA.logoUrl}
              alt="Royal Beauty Hub Logo"
              className="h-8 sm:h-9 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(178,108,255,0.4)]"
            />
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#FF6082] font-semibold block">
                Bridal Concierge
              </span>
              <h3 className="font-serif text-base sm:text-lg text-[#FFE4F6] leading-none">
                Reserve Your Wedding Date
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#D8CEE8] hover:text-[#FFE4F6] hover:bg-[#705EFF]/10 border border-[#705EFF]/30 transition-colors cursor-pointer"
            aria-label="Close Booking Modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Body with smooth scrolling */}
        <div className="p-4 sm:p-8 overflow-y-auto -webkit-overflow-scrolling-touch flex-1">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#FF6082]/15 border border-[#FF6082] flex items-center justify-center text-[#FF6082] mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FFE4F6] mb-2">
                Booking Request Received
              </h3>
              <p className="text-xs sm:text-sm text-[#D8CEE8] max-w-md mb-6 font-light leading-relaxed">
                Thank you, <strong className="text-[#FFE4F6] font-medium">{formData.name || 'Bride'}</strong>! We have recorded your date request for <span className="text-[#FF6082]">{formData.eventDate || 'your ceremony'}</span> in {formData.eventLocation || 'your venue'}. Gautam Aadi’s team will review slot availability and respond via WhatsApp within 2 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <button
                  onClick={handleWhatsAppDirect}
                  className="flex-1 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.2em] font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#FF6082]/25"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat Directly on WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="py-3 px-5 border border-[#705EFF]/40 text-[#D8CEE8] hover:text-[#FFE4F6] text-xs uppercase tracking-wider cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#FF6082] mb-1 font-medium">
                    Bride / Client Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Priyanka Sharma"
                    className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#B26CFF] placeholder:text-[#9E8EB0]/60"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#FF6082] mb-1 font-medium">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    required
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#B26CFF] placeholder:text-[#9E8EB0]/60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-1 font-medium">
                    Occasion / Event *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#B26CFF]"
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
                  <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-1 font-medium">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#B26CFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-1 font-medium">
                    Event City / Venue *
                  </label>
                  <input
                    type="text"
                    name="eventLocation"
                    required
                    value={formData.eventLocation}
                    onChange={handleChange}
                    placeholder="e.g. Patna / Aurangabad / Varanasi"
                    className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#B26CFF] placeholder:text-[#9E8EB0]/60"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-1 font-medium">
                    Primary Service
                  </label>
                  <select
                    name="makeupService"
                    value={formData.makeupService}
                    onChange={handleChange}
                    className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#B26CFF]"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.startingPrice})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-1 font-medium">
                    Hairstyling
                  </label>
                  <select
                    name="hairstyling"
                    value={formData.hairstyling}
                    onChange={handleChange}
                    className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-3 py-2 text-xs focus:outline-none focus:border-[#B26CFF]"
                  >
                    <option value="Yes, Required">Yes, Required</option>
                    <option value="Not Required">Not Required</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-1 font-medium">
                    Draping
                  </label>
                  <select
                    name="draping"
                    value={formData.draping}
                    onChange={handleChange}
                    className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-3 py-2 text-xs focus:outline-none focus:border-[#B26CFF]"
                  >
                    <option value="Yes, Required">Yes, Required</option>
                    <option value="Double Dupatta">Double Dupatta</option>
                    <option value="Not Required">Not Required</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-1 font-medium">
                    Budget Range
                  </label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-3 py-2 text-xs focus:outline-none focus:border-[#B26CFF]"
                  >
                    <option value="₹15,000 – ₹25,000">₹15k – ₹25k</option>
                    <option value="₹25,000 – ₹40,000">₹25k – ₹40k</option>
                    <option value="₹40,000 – ₹75,000">₹40k – ₹75k</option>
                    <option value="₹75,000+ (Destination)">₹75k+ (Destination)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-1 font-medium">
                  Special Wishes / Lehenga & Outfit Details
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about outfit colors, jewelry, or preferred style..."
                  className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-3.5 py-2 text-xs focus:outline-none focus:border-[#B26CFF] placeholder:text-[#9E8EB0]/60"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-md shadow-[#FF6082]/25 cursor-pointer text-center"
                >
                  CHECK AVAILABILITY & SUBMIT →
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-5 py-3.5 border border-[#705EFF]/60 hover:bg-[#705EFF]/15 text-[#B26CFF] text-xs uppercase tracking-[0.16em] font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#FF6082]" />
                  Send on WhatsApp
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#9E8EB0] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF6082]" />
                <span>Zero spam guarantee. 100% confidential bridal reservation.</span>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
