import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LenisProvider from '@/components/motion/LenisProvider';
import PagePreloader from '@/components/motion/PagePreloader';
import SiteTextReveal from '@/components/motion/SiteTextReveal';
import JsonLd from '@/components/ui/JsonLd';
import { BASE_URL, generateLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: "The Rockin’ Roofer LTD | Roofing services in Belvedere", template: '%s' },
  description: "Roof repairs, roof replacement and roofline services in Belvedere. Call The Rockin’ Roofer LTD on +44 7570 354661.",
  keywords: ["The Rockin’ Roofer LTD", 'roofing services Belvedere and surrounding areas', 'roof repairs'],
  authors: [{ name: "The Rockin’ Roofer LTD" }],
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    shortcut: [{ url: '/favicon.png', type: 'image/png' }],
    apple: [{ url: '/favicon.png', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-paper text-forest-ink min-h-screen flex flex-col selection:bg-[#E8DADD] selection:text-[#292326]">
        <PagePreloader />
        <SiteTextReveal />
        <JsonLd data={generateLocalBusinessSchema()} />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <LenisProvider>
          <Navbar />
          <main id="main-content" className="flex-grow pt-[88px] sm:pt-[100px] md:pt-[112px]">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
