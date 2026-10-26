import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageCircle, Calendar, Phone, ShieldCheck } from 'lucide-react';
import { SERVICES, ARTIST_DATA, FAQ_ITEMS } from '../data/makeupData';

interface BookingFormProps {
  initialServiceId?: string;
  initialLookTitle?: string;
  currentLang: 'EN' | 'HI';
}

export const BookingForm: React.FC<BookingFormProps> = ({
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
    makeupService: initialServiceId
      ? (SERVICES.find(s => s.id === initialServiceId)?.title || 'Royal Traditional Bridal')
      : 'Royal Traditional Bridal',
    hairstyling: 'Yes, Required',
    draping: 'Yes, Required',
    makeupStyle: 'HD Waterproof Glamour',
    budgetRange: '₹20,000 – ₹35,000',
    message: initialLookTitle ? `Inquiring specifically about the "${initialLookTitle}" look shown in the gallery.` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    if (initialServiceId) {
      const match = SERVICES.find(s => s.id === initialServiceId);
      if (match) {
        setFormData(prev => ({ ...prev, makeupService: match.title }));
      }
    }
  }, [initialServiceId]);

  useEffect(() => {
    if (initialLookTitle) {
      setFormData(prev => ({
        ...prev,
        message: `Inquiring specifically about the "${initialLookTitle}" look shown in the portfolio.`
      }));
    }
  }, [initialLookTitle]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Bridal Enquiry - Makeup by Gautam Aadi*
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
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0D0714]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1.5px] bg-[#FF6082]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              RESERVE YOUR DATES
            </span>
            <span className="w-8 h-[1.5px] bg-[#B26CFF]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFE4F6] font-normal tracking-tight mb-4">
            Let’s Create Your Perfect Look
          </h2>

          <p className="text-sm sm:text-base text-[#D8CEE8] font-light leading-relaxed">
            Due to high demand during Indian wedding seasons, bridal slots are confirmed strictly on advance notice. Fill out the form below or message directly on WhatsApp.
          </p>
        </div>

        {/* Main Form & FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#160F24] border border-[#705EFF]/40 p-6 sm:p-10 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#B26CFF]/15 to-transparent pointer-events-none" />

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#FF6082]/15 border border-[#FF6082] flex items-center justify-center text-[#FF6082] mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#FFE4F6] mb-2 font-normal">
                  Thank You, {formData.name || 'Beautiful Bride'}
                </h3>
                <p className="text-sm text-[#D8CEE8] max-w-md mb-8 font-light">
                  Your wedding date inquiry for <span className="text-[#FF6082]">{formData.eventDate || 'your event'}</span> has been received. Gautam Aadi’s bridal concierge will review your schedule and connect with you on WhatsApp within 3 hours.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="flex-1 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#FF6082]/25"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat Directly on WhatsApp
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-3.5 px-6 border border-[#705EFF]/40 text-[#D8CEE8] hover:text-[#FFE4F6] text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Bride's Name & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#FF6082] mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priyanka Sharma"
                      className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-4 py-3 text-sm focus:outline-none focus:border-[#B26CFF] placeholder:text-[#9E8EB0]/60"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#FF6082] mb-2 font-medium">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      required
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-4 py-3 text-sm focus:outline-none focus:border-[#B26CFF] placeholder:text-[#9E8EB0]/60"
                    />
                  </div>
                </div>

                {/* 2. Email & Event Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="priyanka@example.com"
                      className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-4 py-3 text-sm focus:outline-none focus:border-[#B26CFF] placeholder:text-[#9E8EB0]/60"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-2 font-medium">
                      Occasion / Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-4 py-3 text-sm focus:outline-none focus:border-[#B26CFF]"
                    >
                      <option value="Royal Bridal">Royal Bridal (Traditional Red/Crimson)</option>
                      <option value="Modern Pastel Bridal">Modern Pastel / Day Wedding</option>
                      <option value="Engagement / Roka">Engagement / Roka</option>
                      <option value="Reception / Sangeet">Reception / Sangeet Glam</option>
                      <option value="Multi-Function Wedding">Multi-Function Wedding Package (2+ Events)</option>
                      <option value="Party / Cocktail">Party / Cocktail / Family</option>
                    </select>
                  </div>
                </div>

                {/* 3. Event Date & Venue Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-2 font-medium">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-4 py-3 text-sm focus:outline-none focus:border-[#B26CFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-2 font-medium">
                      Event City / Venue *
                    </label>
                    <input
                      type="text"
                      name="eventLocation"
                      required
                      value={formData.eventLocation}
                      onChange={handleChange}
                      placeholder="e.g. Patna / Hotel Maurya / Aurangabad"
                      className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-4 py-3 text-sm focus:outline-none focus:border-[#B26CFF] placeholder:text-[#9E8EB0]/60"
                    />
                  </div>
                </div>

                {/* 4. Service Selection & Number of People */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-2 font-medium">
                      Primary Service Selected
                    </label>
                    <select
                      name="makeupService"
                      value={formData.makeupService}
                      onChange={handleChange}
                      className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-4 py-3 text-sm focus:outline-none focus:border-[#B26CFF]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.startingPrice})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-2 font-medium">
                      Number of People
                    </label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-4 py-3 text-sm focus:outline-none focus:border-[#B26CFF]"
                    >
                      <option value="Bride Only">Bride Only</option>
                      <option value="Bride + 2 Family Members">Bride + 2 (Mother / Sister)</option>
                      <option value="Bride + 4+ Bridal Entourage">Bride + 4+ (Bridal Entourage)</option>
                      <option value="Party Makeovers (3 to 8 People)">Party Makeovers (3 to 8 People)</option>
                    </select>
                  </div>
                </div>

                {/* 5. Hairstyling & Draping & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-2 font-medium">
                      Hairstyling
                    </label>
                    <select
                      name="hairstyling"
                      value={formData.hairstyling}
                      onChange={handleChange}
                      className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-3 py-3 text-xs focus:outline-none focus:border-[#B26CFF]"
                    >
                      <option value="Yes, Required">Yes, Required</option>
                      <option value="Not Required">Not Required</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-2 font-medium">
                      Dupatta / Saree Draping
                    </label>
                    <select
                      name="draping"
                      value={formData.draping}
                      onChange={handleChange}
                      className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-3 py-3 text-xs focus:outline-none focus:border-[#B26CFF]"
                    >
                      <option value="Yes, Required">Yes, Required</option>
                      <option value="Double Dupatta Setting">Double Dupatta</option>
                      <option value="Not Required">Not Required</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-2 font-medium">
                      Budget Range
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-3 py-3 text-xs focus:outline-none focus:border-[#B26CFF]"
                    >
                      <option value="₹15,000 – ₹25,000">₹15,000 – ₹25,000</option>
                      <option value="₹25,000 – ₹40,000">₹25,000 – ₹40,000</option>
                      <option value="₹40,000 – ₹75,000">₹40,000 – ₹75,000</option>
                      <option value="₹75,000+ (Destination / Multi-Day)">₹75,000+ (Destination)</option>
                    </select>
                  </div>
                </div>

                {/* 6. Message / Special Requests */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#B26CFF] mb-2 font-medium">
                    Special Wishes / Outfit Details / Questions
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your lehenga colors, jewelry, or preferred makeup style..."
                    className="w-full bg-[#0D0714] border border-[#705EFF]/30 text-[#FFE4F6] px-4 py-3 text-sm focus:outline-none focus:border-[#B26CFF] placeholder:text-[#9E8EB0]/60"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-4 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.25em] font-bold transition-all shadow-xl shadow-[#FF6082]/25 cursor-pointer text-center"
                  >
                    CHECK AVAILABILITY & GET QUOTE →
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-6 py-4 border border-[#705EFF]/60 hover:bg-[#705EFF]/15 text-[#B26CFF] text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#FF6082]" />
                    INSTANT WHATSAPP ENQUIRY
                  </button>
                </div>

                <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-[#9E8EB0]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF6082]" />
                  <span>Your contact details are strictly confidential. No spam guaranteed.</span>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: FAQs & Concierge Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-[#160F24] border border-[#705EFF]/30 p-6 sm:p-8">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF6082] font-semibold">
                DIRECT BRIDAL CONCIERGE
              </span>
              <h3 className="font-serif text-2xl text-[#FFE4F6] font-normal mt-1 mb-3">
                Prefer a Direct Call or WhatsApp?
              </h3>
              <p className="text-xs text-[#D8CEE8] leading-relaxed mb-6 font-light">
                Speak directly with Gautam Aadi’s team to discuss availability, customized bridal packages, travel logistics, and bridal trials.
              </p>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${ARTIST_DATA.whatsappNumber}?text=Hello%20Gautam,%20I%20would%20like%20to%20check%20availability%20for%20my%20wedding.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#0D0714] border border-[#705EFF]/50 hover:border-[#B26CFF] text-[#B26CFF] hover:text-[#FFE4F6] text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#FF6082]" />
                  WhatsApp: +91 98765 43210
                </a>

                <a
                  href={ARTIST_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#0D0714] border border-[#705EFF]/30 hover:border-[#B26CFF] text-[#D8CEE8] hover:text-[#FFE4F6] text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2.5 transition-colors"
                >
                  <span>Instagram: {ARTIST_DATA.handle}</span>
                </a>
              </div>
            </div>

            {/* Wedding Season FAQ Accordion */}
            <div className="bg-[#160F24] border border-[#705EFF]/30 p-6 sm:p-8">
              <h3 className="font-serif text-xl text-[#FFE4F6] font-normal mb-4">
                Frequently Asked Questions
              </h3>

              <div className="space-y-3">
                {FAQ_ITEMS.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border-b border-[#705EFF]/20 pb-3 last:border-b-0 last:pb-0"
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full text-left flex items-start justify-between gap-2 text-xs uppercase tracking-wider text-[#FFE4F6] hover:text-[#B26CFF] font-medium transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="text-[#FF6082] shrink-0 font-bold">
                        {activeFaq === idx ? '−' : '+'}
                      </span>
                    </button>
                    {activeFaq === idx && (
                      <p className="text-xs text-[#D8CEE8] leading-relaxed mt-2 font-light animate-in fade-in duration-200">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
