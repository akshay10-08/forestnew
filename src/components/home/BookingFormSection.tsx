"use client";

import { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { RESORT_FACTS } from "@/lib/constants";

import { openWhatsApp } from "@/lib/whatsapp";

export function BookingFormSection() {
  const [activeTab, setActiveTab] = useState<"stay" | "event">("stay");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [cottagePref, setCottagePref] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setError("Please provide your Full Name and Phone Number.");
      return;
    }
    setError("");

    const tab = activeTab === "stay" ? "Stay" : "Event";
    let msg = `Hello Royal Forest Resort,\n\nNew ${tab} Enquiry:\n\nName: ${fullName}\nPhone: ${phone}\n`;

    const formatDate = (dateStr: string) => {
      if (!dateStr) return "";
      const [y, m, d] = dateStr.split('-');
      return d ? `${d}-${m}-${y}` : dateStr;
    };

    if (activeTab === "event") {
      if (eventType) msg += `Event Type: ${eventType}\n`;
      if (guests) msg += `Approx. Guests: ${guests}\n`;
      if (eventDate) msg += `Date: ${formatDate(eventDate)}\n`;
    } else {
      if (cottagePref) msg += `Cottage Preference: ${cottagePref}\n`;
      if (checkIn) msg += `Check-in: ${formatDate(checkIn)}\n`;
      if (checkOut) msg += `Check-out: ${formatDate(checkOut)}\n`;
      if (guests) msg += `Guests: ${guests}\n`;
    }

    if (message) msg += `\nDetails: ${message}\n`;
    msg += `\nThank you.`;

    openWhatsApp(msg);
  };


  return (
    <section id="booking-form" className="w-full bg-[var(--color-cream)] py-20 px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="bg-[var(--color-cream)] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[var(--color-gold)]/20">
          
          {/* Left Column: Form */}
          <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
            
            {/* Toggle at the top of the form */}
            <div className="flex bg-[#EAE3D5] rounded-full p-1 mb-10 w-full sm:w-max shadow-inner overflow-x-auto hide-scrollbar">
              <button 
                className={clsx("px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all", activeTab === "stay" ? "bg-[var(--color-ivory)] text-[var(--color-forest)] font-semibold shadow-md" : "text-[var(--color-forest)]/60 hover:text-[var(--color-forest)]")}
                onClick={() => setActiveTab("stay")}
              >
                Stay
              </button>
              <button 
                className={clsx("px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all", activeTab === "event" ? "bg-[var(--color-ivory)] text-[var(--color-forest)] font-semibold shadow-md" : "text-[var(--color-forest)]/60 hover:text-[var(--color-forest)]")}
                onClick={() => setActiveTab("event")}
              >
                Event
              </button>
            </div>

            <div className="mb-10">
              <span 
                className="font-serif italic text-2xl md:text-3xl mb-2 block" 
                style={{ color: "#c59d5f" }}
              >
                Let&apos;s Plan Your Day
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-forest)]">
                Check Availability.
              </h2>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  className="w-full bg-transparent border-b border-[var(--color-gold)]/30 pb-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder-[var(--color-forest)]/40 text-[var(--color-forest)]"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full bg-transparent border-b border-[var(--color-gold)]/30 pb-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder-[var(--color-forest)]/40 text-[var(--color-forest)]"
                />
              </div>

              {activeTab === "event" ? (
                // Event Specific Fields
                <>
                  <div>
                    <select 
                      value={eventType}
                      onChange={e => setEventType(e.target.value)}
                      className="w-full bg-transparent border-b border-[var(--color-gold)]/30 pb-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[var(--color-forest)]/70 appearance-none">
                      <option value="">Event Type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate</option>
                      <option value="other">Other Celebration</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input 
                      type="text" 
                      placeholder="Approx. Guests" 
                      value={guests}
                      onChange={e => setGuests(e.target.value)}
                      className="w-full bg-transparent border-b border-[var(--color-gold)]/30 pb-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder-[var(--color-forest)]/40 text-[var(--color-forest)]"
                    />
                    <div className="relative">
                      <input 
                        type="date" 
                        value={eventDate}
                        onChange={e => setEventDate(e.target.value)}
                        className="w-full bg-transparent border-b border-[var(--color-gold)]/30 pb-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder-[var(--color-forest)]/40 text-[var(--color-forest)] [&::-webkit-calendar-picker-indicator]:opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <input 
                      type="text" 
                      placeholder="Tell us about your celebration..." 
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className="w-full bg-transparent border-b border-[var(--color-gold)]/30 pb-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder-[var(--color-forest)]/40 text-[var(--color-forest)]"
                    />
                  </div>
                </>
              ) : (
                // Stay Specific Fields
                <>
                  <div>
                    <select 
                      value={cottagePref}
                      onChange={e => setCottagePref(e.target.value)}
                      className="w-full bg-transparent border-b border-[var(--color-gold)]/30 pb-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[var(--color-forest)]/70 appearance-none">
                      <option value="">Room / Cottage Preference</option>
                      <option value="garden">Garden Cottage</option>
                      <option value="premium">Premium Cottage</option>
                      <option value="family">Family Suite</option>
                      <option value="any">Any Available</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label className="text-[10px] uppercase tracking-wider text-[var(--color-forest)]/50 absolute -top-4 left-0">Check-in</label>
                      <input 
                        type="date" 
                        value={checkIn}
                        onChange={e => setCheckIn(e.target.value)}
                        className="w-full bg-transparent border-b border-[var(--color-gold)]/30 pb-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[var(--color-forest)] [&::-webkit-calendar-picker-indicator]:opacity-50 mt-1"
                      />
                    </div>
                    <div className="relative">
                      <label className="text-[10px] uppercase tracking-wider text-[var(--color-forest)]/50 absolute -top-4 left-0">Check-out</label>
                      <input 
                        type="date" 
                        value={checkOut}
                        onChange={e => setCheckOut(e.target.value)}
                        className="w-full bg-transparent border-b border-[var(--color-gold)]/30 pb-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[var(--color-forest)] [&::-webkit-calendar-picker-indicator]:opacity-50 mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input 
                      type="number" 
                      placeholder="Number of Guests" 
                      min="1"
                      value={guests}
                      onChange={e => setGuests(e.target.value)}
                      className="w-full bg-transparent border-b border-[var(--color-gold)]/30 pb-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder-[var(--color-forest)]/40 text-[var(--color-forest)]"
                    />
                    <input 
                      type="text" 
                      placeholder="Special Requests (Optional)" 
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className="w-full bg-transparent border-b border-[var(--color-gold)]/30 pb-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder-[var(--color-forest)]/40 text-[var(--color-forest)]"
                    />
                  </div>
                </>
              )}

              <button type="submit" className="w-full mt-8 uppercase text-xs tracking-widest px-8 py-4 rounded-xl bg-[#c59d5f] text-white hover:bg-[#a68249] transition-colors shadow-md font-semibold">
                Submit Enquiry
              </button>
            </form>

          </div>

          {/* Right Column: Contact Info Box */}
          <div className="md:w-[380px] bg-[var(--color-forest)] text-[var(--color-cream)] p-8 md:p-12 flex flex-col justify-center">
            
            <div className="space-y-8">
              
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-3 text-[var(--color-gold)] opacity-90">
                  <Phone size={16} />
                  <span className="text-xs uppercase tracking-widest font-semibold">Phone</span>
                </div>
                <span className="text-sm pl-7">{RESORT_FACTS.phoneDisplay}</span>
              </div>

              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-3 text-[var(--color-gold)] opacity-90">
                  <Mail size={16} />
                  <span className="text-xs uppercase tracking-widest font-semibold">Email</span>
                </div>
                <span className="text-sm pl-7">{RESORT_FACTS.email}</span>
              </div>

              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-3 text-[var(--color-gold)] opacity-90">
                  <MapPin size={16} />
                  <span className="text-xs uppercase tracking-widest font-semibold">Address</span>
                </div>
                <span className="text-sm pl-7 leading-relaxed opacity-90">
                  {RESORT_FACTS.address}
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-3 text-[var(--color-gold)] opacity-90">
                  <Clock size={16} />
                  <span className="text-xs uppercase tracking-widest font-semibold">Hours</span>
                </div>
                <span className="text-sm pl-7 opacity-90">Open 24x7 · Venue tours by appointment</span>
              </div>


            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col space-y-6">
              <div className="flex space-x-4">
                <a href={RESORT_FACTS.facebook} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href={RESORT_FACTS.instagram} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
              <p className="text-xs opacity-70 leading-relaxed max-w-[280px]">
                For secure bookings, please confirm only via our official number {RESORT_FACTS.phoneRaw}.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
