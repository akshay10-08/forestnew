# Royal Forest Resort - Official Website

This repository contains the production-ready website for **Royal Forest Resort** (Mandhana, Bithoor Road, Kanpur). It is built as a "Resort-First" platform with a dual focus on leisure stays (cottages) and destination weddings.

## Tech Stack
- Next.js 14+ (App Router, SSG)
- Tailwind CSS
- Framer Motion & Lenis (Smooth Scrolling)
- React Hook Form + Zod

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Build for production (generates sitemaps & static pages):
   ```bash
   npm run build
   ```

## Handover Checklist for the Owner / Developer

Before taking this site fully live, complete the following steps:

### 1. Swap Placeholders (Images)
All image placeholders in the code are encapsulated in the `<Placeholder />` component and marked with `[Square Brackets]`. 
- **Action:** Replace these components with `next/image` tags pointing to real, optimized photos of the resort.
- **Priority:** Ensure the `[Hero Video]` or `[Hero Image]` is swapped first to set the primary aesthetic.

### 2. Verify Constants
All factual data is centralized in `src/lib/constants.ts` and `src/lib/data.ts`.
- **Action:** Confirm the exact number of cottages, room types, banquet capacities, and catering policies. Update the objects in `data.ts` to match reality.
- **Action:** Confirm the official booking email address.

### 3. Replace the Wordmark Font
Currently, the site uses `Cormorant Garamond` as the fallback display serif for the logo.
- **Action:** In `src/app/globals.css`, locate the `/* TODO: replace --font-wordmark with exact brand typeface from logo */` comment and update it with the brand's official font, or swap the text `<Wordmark>` component for an SVG image of the logo.

### 4. Wire the Enquiry API (Email / CRM)
The form submissions currently hit `/api/enquiry/route.ts` and log to the console.
- **Action:** Set up Resend, Nodemailer, or a Google Sheets integration inside `src/app/api/enquiry/route.ts` using environment variables. 
- Example Environment Variables to add to `.env.local`:
  ```env
  RESEND_API_KEY=your_api_key
  CONTACT_EMAIL=bookings@royalforestresort.com
  ```

### 5. Future Booking Engine Integration
The `AvailabilityWidget` on the home page currently acts as a lead generation tool (opening enquiry forms).
- **Action:** Once a real booking engine (like BookingJini, RezNext, or Razorpay deposits) is acquired, wire the "Check Availability" buttons to pass the dates and guest count directly to the booking engine URL.

### 6. Deployment
- **Action:** Deploy easily via [Vercel](https://vercel.com/new). The project is pre-configured for SSG optimization and includes a `postbuild` script for `next-sitemap`. Ensure `SITE_URL` is set in Vercel environment variables for correct sitemap generation.
