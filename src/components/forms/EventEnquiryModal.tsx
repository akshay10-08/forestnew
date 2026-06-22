"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, ArrowRight, ArrowLeft } from "lucide-react";

const eventSchema = z.object({
  name: z.string().min(2, "Name is required"),
  partnerName: z.string().optional(),
  phone: z.string().min(10, "Valid 10-digit phone is required"),
  email: z.string().email("Valid email is required"),
  city: z.string().optional(),
  occasion: z.string().min(1, "Please select an occasion"),
  guests: z.string().min(1, "Please select expected guests"),
  season: z.string().optional(),
  ceremonies: z.array(z.string()).optional(),
  foodPref: z.string().min(1, "Please select a food preference"),
  stayRequirements: z.string().optional(),
  notes: z.string().optional(),
  website: z.string().optional() // honeypot
});

type EventFormData = z.infer<typeof eventSchema>;

interface EventEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOccasion?: string;
}

export function EventEnquiryModal({ isOpen, onClose, defaultOccasion }: EventEnquiryModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isValid }, trigger, watch } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    mode: "onChange",
    defaultValues: {
      occasion: defaultOccasion || ""
    }
  });

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ['name', 'phone', 'email'];
    if (step === 2) fieldsToValidate = ['occasion', 'guests'];
    
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) setStep(s => s + 1);
  };

  const onSubmit = async (data: EventFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setIsSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-[var(--color-cream)] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div className="flex items-center justify-between p-6 md:p-8 border-b border-[var(--color-gold)]/20 bg-white">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-gold)] font-semibold block mb-1">Plan Your Event</span>
              <h2 className="font-serif text-2xl text-[var(--color-forest)]">Event Enquiry</h2>
            </div>
            <button onClick={onClose} className="w-10 h-10 rounded-full border border-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-forest)] hover:bg-[var(--color-gold)]/5 transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="p-6 md:p-8 overflow-y-auto">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/20 text-[var(--color-gold)] flex items-center justify-center mx-auto mb-6">
                  <ArrowRight size={32} className="transform rotate-90" />
                </div>
                <h3 className="font-serif text-3xl text-[var(--color-forest)] mb-4">Request Received</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Thank you for considering Royal Forest Resort for your special occasion. Our events team will contact you within 24 hours with a customized proposal.
                </p>
                <button onClick={onClose} className="mt-8 uppercase text-xs tracking-widest px-8 py-3.5 rounded-full bg-[var(--color-forest)] text-[var(--color-ivory)] hover:bg-[var(--color-forest-700)] transition-colors">
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot */}
                <input type="text" {...register("website")} className="hidden" />

                {/* Step Indicators */}
                <div className="flex gap-2 mb-8">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`h-1.5 flex-1 rounded-full ${step >= i ? 'bg-[var(--color-gold)]' : 'bg-[var(--color-gold)]/20'}`} />
                  ))}
                </div>

                {/* Step 1: Contact Details */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-2 font-semibold">Your Name *</label>
                        <input {...register("name")} className="w-full bg-white border border-[var(--color-gold)]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]" />
                        {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-2 font-semibold">Partner's Name</label>
                        <input {...register("partnerName")} className="w-full bg-white border border-[var(--color-gold)]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-2 font-semibold">Phone *</label>
                        <input type="tel" {...register("phone")} className="w-full bg-white border border-[var(--color-gold)]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]" />
                        {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-2 font-semibold">Email *</label>
                        <input type="email" {...register("email")} className="w-full bg-white border border-[var(--color-gold)]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]" />
                        {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Event Details */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-2 font-semibold">Occasion *</label>
                      <select {...register("occasion")} className="w-full bg-white border border-[var(--color-gold)]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]">
                        <option value="">Select an occasion...</option>
                        <option value="Wedding Multi-day">Wedding (Multi-day)</option>
                        <option value="Wedding Day">Wedding (Single day)</option>
                        <option value="Sangeet Reception">Sangeet & Reception</option>
                        <option value="Corporate">Corporate Offsite</option>
                        <option value="Other">Other Celebration</option>
                      </select>
                      {errors.occasion && <span className="text-red-500 text-xs mt-1 block">{errors.occasion.message}</span>}
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-2 font-semibold">Expected Guests *</label>
                      <select {...register("guests")} className="w-full bg-white border border-[var(--color-gold)]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]">
                        <option value="">Select guest count...</option>
                        <option value="Under 150">Under 150 (Intimate)</option>
                        <option value="150-250">150 – 250</option>
                        <option value="250-400">250 – 400</option>
                        <option value="400+">400+ (Grand)</option>
                      </select>
                      {errors.guests && <span className="text-red-500 text-xs mt-1 block">{errors.guests.message}</span>}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Catering & Stay */}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-2 font-semibold">Food Preference *</label>
                      <select {...register("foodPref")} className="w-full bg-white border border-[var(--color-gold)]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]">
                        <option value="">Select preference...</option>
                        <option value="Pure Veg">Pure Vegetarian</option>
                        <option value="Jain">Jain available</option>
                        <option value="Veg + Non-veg">Mixed (Veg & Non-veg)</option>
                        <option value="Discuss">To be discussed</option>
                      </select>
                      {errors.foodPref && <span className="text-red-500 text-xs mt-1 block">{errors.foodPref.message}</span>}
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-2 font-semibold">Vision / Notes</label>
                      <textarea {...register("notes")} rows={3} className="w-full bg-white border border-[var(--color-gold)]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]" placeholder="Tell us about your dream event..." />
                    </div>
                  </motion.div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-[var(--color-gold)]/20">
                  {step > 1 ? (
                    <button type="button" onClick={() => setStep(s => s - 1)} className="inline-flex items-center text-xs uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-forest)]">
                      <ArrowLeft size={14} className="mr-2" /> Back
                    </button>
                  ) : <div></div>}
                  
                  {step < 3 ? (
                    <button type="button" onClick={nextStep} className="inline-flex items-center uppercase text-xs tracking-widest px-8 py-3.5 rounded-full bg-[var(--color-forest)] text-[var(--color-ivory)] hover:bg-[var(--color-forest-700)] transition-colors shadow-md">
                      Next Step <ArrowRight size={14} className="ml-2" />
                    </button>
                  ) : (
                    <button type="submit" disabled={isSubmitting} className="inline-flex items-center uppercase text-xs tracking-widest px-8 py-3.5 rounded-full bg-[var(--color-gold)] text-[var(--color-forest)] hover:bg-[var(--color-gold-soft)] transition-colors shadow-md font-semibold disabled:opacity-50">
                      {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
