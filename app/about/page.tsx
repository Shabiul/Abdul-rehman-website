import type { Metadata } from 'next';
import AboutClient from '@/components/AboutClient';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about Ariston Developers — founded by Abdul Rehaman in 2020, Bangalore's premier luxury property developer with 8+ years of expertise in residential real estate, construction and land development across South Bangalore.",
  keywords: [
    'About Ariston Developers',
    'Abdul Rehaman property developer Bangalore',
    'Bangalore luxury real estate company',
    'premium developer Jayanagar Bangalore',
    'property developer South Bangalore',
    'real estate company Karnataka',
    'luxury home builder Bangalore',
    'Ariston Developers history',
    'best property developer Bangalore',
    'trusted real estate Bangalore',
  ],
  openGraph: {
    title: 'About Ariston Developers | Premier Property Developer Bangalore',
    description:
      'Founded by Abdul Rehaman in 2020 — 8+ years building luxury residential properties across Bangalore with transparency, integrity and design excellence.',
    url: 'https://www.aristondevelopers.com/about/',
    siteName: 'Ariston Developers',
    images: [
      {
        url: '/og/about.jpg',
        width: 1200,
        height: 630,
        alt: 'Ariston Developers — About Us',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ariston Developers | Premier Property Developer Bangalore',
    description:
      '8+ years of luxury real estate excellence in Bangalore. 20-25 properties. ₹75 Cr+ in investment value.',
    images: ['/og/about.jpg'],
  },
  alternates: {
    canonical: 'https://www.aristondevelopers.com/about/',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
