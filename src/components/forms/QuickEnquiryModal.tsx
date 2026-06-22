"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/Modal";
import { useState } from "react";
import clsx from "clsx";

const quickEnquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^[0-9]{10}$/, "Must be a valid 10-digit phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  city: z.string().optional(),
  honeypot: z.string().max(0), // must be empty
});

type QuickEnquiryForm = z.infer<typeof quickEnquirySchema>;

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export function QuickEnquiryModal({ isOpen, onClose, source = "Quick Enquiry" }: QuickEnquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuickEnquiryForm>({
    resolver: zodResolver(quickEnquirySchema)
  });

  const onSubmit = async (data: QuickEnquiryForm) => {
    setIsSubmitting(true);
    // Simulate API call to /api/enquiry
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Enquiry submitted:", { ...data, source });
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      reset();
      onClose();
    }, 3000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Enquire Now">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="w-16 h-16 rounded-full bg-[var(--color-moss)]/20 text-[var(--color-forest)] flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-serif text-2xl text-[var(--color-forest)] mb-2">Thank You</h4>
          <p className="text-[var(--color-muted)]">We have received your enquiry and will respond within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <input type="text" {...register("honeypot")} className="hidden" aria-hidden="true" tabIndex={-1} />
          
          <div>
            <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-1 font-semibold">Full Name *</label>
            <input 
              {...register("name")} 
              className={clsx(
                "w-full bg-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)] transition-shadow",
                errors.name ? "border-red-300" : "border-[var(--color-gold)]/20"
              )} 
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-1 font-semibold">Phone Number *</label>
            <input 
              {...register("phone")} 
              className={clsx(
                "w-full bg-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)] transition-shadow",
                errors.phone ? "border-red-300" : "border-[var(--color-gold)]/20"
              )} 
              placeholder="10-digit mobile number"
              type="tel"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-1 font-semibold">Email Address (Optional)</label>
            <input 
              {...register("email")} 
              className={clsx(
                "w-full bg-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)] transition-shadow",
                errors.email ? "border-red-300" : "border-[var(--color-gold)]/20"
              )} 
              placeholder="Email address"
              type="email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-1 font-semibold">City (Optional)</label>
            <input 
              {...register("city")} 
              className="w-full bg-white border border-[var(--color-gold)]/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)] transition-shadow"
              placeholder="Your city"
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="mt-6 w-full bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-soft)] hover:text-[var(--color-forest)] transition-colors px-6 py-4 rounded-xl uppercase tracking-widest text-xs font-semibold shadow-md disabled:opacity-70 flex justify-center items-center"
          >
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5 text-[var(--color-forest)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : "Submit Enquiry"}
          </button>
        </form>
      )}
    </Modal>
  );
}
