"use client";

import { useState } from "react";
import clsx from "clsx";
import { Calendar, Users, ChevronDown } from "lucide-react";
import { RESORT_FACTS } from "@/lib/constants";

type Tab = "stay" | "event";

export function AvailabilityWidget() {
  const [activeTab, setActiveTab] = useState<Tab>("stay");
  const [isExpandedMobile, setIsExpandedMobile] = useState(false);

  // State for Stay
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  // State for Event
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventGuests, setEventGuests] = useState("");

  const handleCheckAvailability = () => {
    // In a full implementation, this opens the modal or links to WhatsApp
    let waText = "";
    if (activeTab === "stay") {
      waText = `Hello ${RESORT_FACTS.name}, I'd like to enquire.\nType: Stay\nDates: ${checkIn} to ${checkOut}\nGuests: ${guests}\nNotes: `;
    } else {
      waText = `Hello ${RESORT_FACTS.name}, I'd like to enquire.\nType: Event (${eventType})\nDate: ${eventDate}\nGuests: ${eventGuests}\nNotes: `;
    }
    
    const waUrl = `${RESORT_FACTS.whatsappLink}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="w-full">
      {/* Mobile Collapsed Button */}
      <button 
        className="md:hidden w-full uppercase text-xs tracking-widest px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-[var(--color-gold)]/40 text-[var(--color-ivory)] shadow-lg flex items-center justify-between"
        onClick={() => setIsExpandedMobile(!isExpandedMobile)}
      >
        <span>Check Availability</span>
        <ChevronDown size={16} className={clsx("transition-transform duration-300", isExpandedMobile ? "rotate-180" : "")} />
      </button>

      {/* Main Widget Card */}
      <div className={clsx(
        "bg-[var(--color-ivory)]/10 backdrop-blur-xl border border-[var(--color-gold)]/30 rounded-2xl md:rounded-full overflow-hidden shadow-2xl transition-all duration-300",
        "md:block",
        isExpandedMobile ? "block mt-2" : "hidden"
      )}>
        {/* Tabs */}
        <div className="flex md:hidden border-b border-[var(--color-ivory)]/20">
          <button 
            className={clsx("flex-1 py-3 text-sm font-medium uppercase tracking-wider transition-colors", activeTab === "stay" ? "bg-[var(--color-gold)]/20 text-[var(--color-gold)]" : "text-[var(--color-ivory)]/70")}
            onClick={() => setActiveTab("stay")}
          >
            Stay
          </button>
          <button 
            className={clsx("flex-1 py-3 text-sm font-medium uppercase tracking-wider transition-colors", activeTab === "event" ? "bg-[var(--color-gold)]/20 text-[var(--color-gold)]" : "text-[var(--color-ivory)]/70")}
            onClick={() => setActiveTab("event")}
          >
            Event
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center p-4 md:p-2 gap-4 md:gap-2">
          
          {/* Desktop Tabs Toggle */}
          <div className="hidden md:flex bg-black/20 rounded-full p-1 border border-white/10 mr-2 flex-shrink-0">
            <button 
              className={clsx("px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all", activeTab === "stay" ? "bg-[var(--color-ivory)] text-[var(--color-forest)] font-semibold shadow-md" : "text-[var(--color-ivory)] hover:text-white")}
              onClick={() => setActiveTab("stay")}
            >
              Stay
            </button>
            <button 
              className={clsx("px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all", activeTab === "event" ? "bg-[var(--color-ivory)] text-[var(--color-forest)] font-semibold shadow-md" : "text-[var(--color-ivory)] hover:text-white")}
              onClick={() => setActiveTab("event")}
            >
              Event
            </button>
          </div>

          <div className="flex-1 w-full flex flex-col md:flex-row gap-3">
            {activeTab === "stay" ? (
              <>
                <div className="flex-1 bg-black/20 md:bg-transparent rounded-xl md:rounded-none p-3 md:p-0 md:px-4 md:border-r border-[var(--color-ivory)]/20 flex flex-col justify-center">
                  <label className="text-[10px] uppercase tracking-wider text-[var(--color-ivory)]/70 mb-1 flex items-center"><Calendar size={10} className="mr-1"/> Check-in</label>
                  <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="bg-transparent border-none outline-none text-[var(--color-ivory)] text-sm md:text-base w-full focus:ring-0 p-0 [&::-webkit-calendar-picker-indicator]:invert" style={{ fontSize: '16px' }} />
                </div>
                <div className="flex-1 bg-black/20 md:bg-transparent rounded-xl md:rounded-none p-3 md:p-0 md:px-4 md:border-r border-[var(--color-ivory)]/20 flex flex-col justify-center">
                  <label className="text-[10px] uppercase tracking-wider text-[var(--color-ivory)]/70 mb-1 flex items-center"><Calendar size={10} className="mr-1"/> Check-out</label>
                  <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="bg-transparent border-none outline-none text-[var(--color-ivory)] text-sm md:text-base w-full focus:ring-0 p-0 [&::-webkit-calendar-picker-indicator]:invert" style={{ fontSize: '16px' }} />
                </div>
                <div className="flex-1 bg-black/20 md:bg-transparent rounded-xl md:rounded-none p-3 md:p-0 md:px-4 flex flex-col justify-center">
                  <label className="text-[10px] uppercase tracking-wider text-[var(--color-ivory)]/70 mb-1 flex items-center"><Users size={10} className="mr-1"/> Guests</label>
                  <select value={guests} onChange={(e) => setGuests(e.target.value)} className="bg-transparent border-none outline-none text-[var(--color-ivory)] text-sm md:text-base w-full focus:ring-0 p-0 appearance-none" style={{ fontSize: '16px' }}>
                    <option value="1" className="text-black">1 Guest</option>
                    <option value="2" className="text-black">2 Guests</option>
                    <option value="3" className="text-black">3 Guests</option>
                    <option value="4" className="text-black">4 Guests</option>
                    <option value="5+" className="text-black">5+ Guests</option>
                  </select>
                </div>
              </>
            ) : (
              <>
                <div className="flex-1 bg-black/20 md:bg-transparent rounded-xl md:rounded-none p-3 md:p-0 md:px-4 md:border-r border-[var(--color-ivory)]/20 flex flex-col justify-center">
                  <label className="text-[10px] uppercase tracking-wider text-[var(--color-ivory)]/70 mb-1 flex items-center"><Calendar size={10} className="mr-1"/> Event Date</label>
                  <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="bg-transparent border-none outline-none text-[var(--color-ivory)] text-sm md:text-base w-full focus:ring-0 p-0 [&::-webkit-calendar-picker-indicator]:invert" style={{ fontSize: '16px' }} />
                </div>
                <div className="flex-1 bg-black/20 md:bg-transparent rounded-xl md:rounded-none p-3 md:p-0 md:px-4 md:border-r border-[var(--color-ivory)]/20 flex flex-col justify-center">
                  <label className="text-[10px] uppercase tracking-wider text-[var(--color-ivory)]/70 mb-1 flex items-center">Event Type</label>
                  <select value={eventType} onChange={(e) => setEventType(e.target.value)} className="bg-transparent border-none outline-none text-[var(--color-ivory)] text-sm md:text-base w-full focus:ring-0 p-0 appearance-none" style={{ fontSize: '16px' }}>
                    <option value="" disabled className="text-black">Select Type</option>
                    <option value="Wedding" className="text-black">Wedding</option>
                    <option value="Pre-wedding" className="text-black">Pre-wedding</option>
                    <option value="Corporate" className="text-black">Corporate</option>
                    <option value="Other" className="text-black">Other</option>
                  </select>
                </div>
                <div className="flex-1 bg-black/20 md:bg-transparent rounded-xl md:rounded-none p-3 md:p-0 md:px-4 flex flex-col justify-center">
                  <label className="text-[10px] uppercase tracking-wider text-[var(--color-ivory)]/70 mb-1 flex items-center"><Users size={10} className="mr-1"/> Guests</label>
                  <select value={eventGuests} onChange={(e) => setEventGuests(e.target.value)} className="bg-transparent border-none outline-none text-[var(--color-ivory)] text-sm md:text-base w-full focus:ring-0 p-0 appearance-none" style={{ fontSize: '16px' }}>
                    <option value="" disabled className="text-black">Approx Size</option>
                    <option value="Under 150" className="text-black">Under 150</option>
                    <option value="150-400" className="text-black">150-400</option>
                    <option value="400+" className="text-black">400+</option>
                  </select>
                </div>
              </>
            )}
          </div>

          <div className="w-full md:w-auto mt-2 md:mt-0 flex-shrink-0">
            <button 
              onClick={handleCheckAvailability}
              className="w-full md:w-auto bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-soft)] hover:text-[var(--color-forest)] transition-colors px-8 py-3.5 md:py-4 rounded-xl md:rounded-full uppercase tracking-widest text-xs font-semibold shadow-md"
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
