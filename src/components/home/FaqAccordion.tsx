"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const FAQ_DATA = [
  {
    category: "Stay",
    items: [
      { q: "What types of cottages are available?", a: "We offer Garden Cottages for couples and solo travellers, and Premium Cottages for families and extended stays. Both feature panoramic garden views." },
      { q: "What are the check-in and check-out times?", a: "Check-in is at 2:00 PM and check-out is at 11:00 AM." },
      { q: "Is the swimming pool accessible to all guests?", a: "Yes, our resort pool is accessible to all in-house guests during designated hours." },
      { q: "Are families and couples both welcome?", a: "Absolutely. We cater to families, couples, and solo travelers seeking a peaceful escape." }
    ]
  },
  {
    category: "Weddings & Events",
    items: [
      { q: "What is the capacity of your wedding lawns?", a: "We have multiple spaces: Intimate lawns (up to 150 guests), Signature lawns (150-400), and a Grand lawn (400+ guests). [confirm exact capacity]" },
      { q: "Do you provide in-house décor or can we bring our own?", a: "We offer in-house décor support but also welcome outside planners and decorators." },
      { q: "Can guests stay at the resort during the wedding?", a: "Absolutely. We offer full-resort buyouts so your guests can stay in our garden cottages." },
      { q: "Do you allow DJs and music?", a: "Yes, music is permitted in designated event areas. Timing and volume guidelines apply per local regulations." }
    ]
  },
  {
    category: "Dining & Catering",
    items: [
      { q: "Do you offer in-house catering?", a: "Yes, we have a multi-cuisine dining experience. [confirm in-house vs outside]" },
      { q: "Do you serve pure vegetarian or Jain food?", a: "We can customize the menu to be pure vegetarian or Jain based on your requirements." },
      { q: "What is your bar policy?", a: "Please reach out to us directly to discuss our bar and beverage policies for events." }
    ]
  },
  {
    category: "Dates & Booking",
    items: [
      { q: "How do I check availability?", a: "You can use the 'Check Availability' widget on our homepage or contact us directly via WhatsApp or phone." },
      { q: "What is the cancellation policy?", a: "Cancellation policies vary based on whether it is a room booking or an event booking. [confirm]" }
    ]
  }
];

export function FaqAccordion() {
  const [activeTab, setActiveTab] = useState(FAQ_DATA[0].category);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeFaqs = FAQ_DATA.find(d => d.category === activeTab)?.items || [];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.flatMap(category => 
      category.items.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    )
  };

  return (
    <section className="py-24 bg-[var(--color-ivory)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 block font-semibold">Questions</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-forest)] mb-6">Frequently Asked Questions</h2>
          <div className="w-12 h-[1px] bg-[var(--color-gold)] mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {FAQ_DATA.map(tab => (
            <button
              key={tab.category}
              onClick={() => { setActiveTab(tab.category); setOpenIndex(null); }}
              className={clsx(
                "px-6 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all",
                activeTab === tab.category 
                  ? "bg-[var(--color-forest)] text-[var(--color-ivory)] shadow-md" 
                  : "border border-[var(--color-forest)]/20 text-[var(--color-forest)] hover:bg-[var(--color-forest)]/5"
              )}
            >
              {tab.category}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="border border-[var(--color-gold)]/20 rounded-xl mb-4 overflow-hidden bg-white/50 backdrop-blur-sm">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className="font-serif text-lg text-[var(--color-forest)] font-medium pr-4">{faq.q}</span>
                      <ChevronDown 
                        className={clsx("text-[var(--color-gold)] transition-transform duration-300 flex-shrink-0", isOpen ? "rotate-180" : "")} 
                        size={20} 
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-2 text-[var(--color-muted)] leading-relaxed text-sm md:text-base border-t border-[var(--color-ivory)]/50">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
