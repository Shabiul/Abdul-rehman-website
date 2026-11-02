import type React from 'react';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import JsonLd from '@/components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  // 'optional' avoids a late re-paint of all body text when Inter arrives on
  // slow mobile connections (that swap was setting the page's LCP). next/font's
  // metric-matched fallback keeps the first-visit look nearly identical.
  display: 'optional',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aristondevelopers.com'),
  title: {
    default: 'Ariston Developers | Premium Properties & Real Estate in Bangalore',
    template: '%s | Ariston Developers',
  },
  description:
    'Ariston Developers — premium property developer in Bangalore for buying, selling, construction, land development and joint ventures. Call +91 99457 26707.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    siteName: 'Ariston Developers',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bangalore, Karnataka, India',
    'geo.position': '12.9191608;77.5974554',
    'ICBM': '12.9191608, 77.5974554',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-[#FAF9F6] text-[#1A1A18] selection:bg-[#D4AF37]/40 selection:text-black">
        <JsonLd />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
