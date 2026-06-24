import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { GlassHeader } from "@/components/layout/GlassHeader";
import { Footer } from "@/components/layout/Footer";
import { MultiChannelFloat } from "@/components/layout/MultiChannelFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.royalforestresort.in"),
  title: "Royal Forest Resort | Luxury Nature Resort & Stay in Kanpur",
  description: "A premium nature resort on Bithoor Road, Kanpur featuring luxury cottages, one of Kanpur's largest pools, wedding venues, events, and serene stays.",
  openGraph: {
    title: "Royal Forest Resort | Luxury Nature Resort & Stay in Kanpur",
    description: "A premium nature resort on Bithoor Road, Kanpur featuring luxury cottages, one of Kanpur's largest pools, wedding venues, events, and serene stays.",
    url: "https://www.royalforestresort.in",
    siteName: "Royal Forest Resort",
    images: [
      {
        url: "https://www.royalforestresort.in/images/ab.png",
        width: 1200,
        height: 630,
        alt: "Royal Forest Resort | Luxury Nature Resort & Stay in Kanpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Forest Resort | Luxury Nature Resort & Stay in Kanpur",
    description: "A premium nature resort on Bithoor Road, Kanpur featuring luxury cottages, one of Kanpur's largest pools, wedding venues, events, and serene stays.",
    images: ["https://www.royalforestresort.in/images/ab.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-gold)] selection:text-[var(--color-forest)] overflow-x-hidden" suppressHydrationWarning>
        <SmoothScrollProvider>
          <GlassHeader />
          <main className="flex-grow">{children}</main>
          <Footer />
          <MultiChannelFloat />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
