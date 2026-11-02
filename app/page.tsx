import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
  title: { absolute: 'Ariston Developers | Luxury Properties & Real Estate in Bangalore' },
  description:
    "Ariston Developers — Bangalore's premier luxury property developer. Buy, sell, build & invest in premium properties across Jayanagar, Koramangala, Whitefield, Indiranagar & HSR Layout. Call +91 99457 26707.",
  keywords: [
    'Ariston Developers',
    'luxury real estate Bangalore',
    'premium property developer Bangalore',
    'buy property Bangalore',
    'sell property Bangalore',
    'construction company Bangalore',
    'land developer Bangalore',
    'joint venture real estate Bangalore',
    'property developer Jayanagar',
    'property developer Koramangala',
    'property developer Whitefield',
    'property developer Indiranagar',
    'property developer HSR Layout',
    'property developer JP Nagar',
    'luxury apartments Bangalore',
    'luxury villas Bangalore',
    'residential property Bangalore',
    'real estate investment Bangalore',
    'Abdul Rehaman developer',
    'premium housing Bangalore',
    'property for sale Bangalore',
    'new projects Bangalore',
    'Bangalore real estate 2026',
    'South Bangalore property developer',
  ],
  openGraph: {
    title: 'Ariston Developers | Luxury Properties in Bangalore',
    description:
      "Bangalore's premier luxury property developer — buying, selling, construction, land development & joint ventures across Jayanagar, Koramangala, Whitefield & beyond.",
    url: 'https://www.aristondevelopers.com/',
    siteName: 'Ariston Developers',
    images: [
      {
        url: '/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Ariston Developers — Luxury Property Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ariston Developers | Luxury Properties in Bangalore',
    description:
      'Buy, sell & invest in premium Bangalore properties with Ariston Developers — 8+ years, 20-25 properties, ₹75 Cr+ placed.',
    images: ['/og/home.jpg'],
  },
  alternates: {
    canonical: 'https://www.aristondevelopers.com/',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
