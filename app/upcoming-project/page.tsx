import type { Metadata } from 'next';
import UpcomingProjectClient from '@/components/UpcomingProjectClient';

export const metadata: Metadata = {
  title: 'Ariston Classic — Upcoming Project in Jayanagar',
  description:
    'Ariston Classic — luxury 4BHK residences launching June 2027 in Jayanagar, Bengaluru. Explore interior renders — master bedroom and three bedrooms, room by room.',
  openGraph: {
    title: 'Ariston Classic | Ariston Developers',
    description:
      'Luxury 4BHK residences launching June 2027 in Jayanagar, Bengaluru — a room-by-room walkthrough of the interior design for our next residence.',
    url: 'https://www.aristondevelopers.com/upcoming-project/',
    siteName: 'Ariston Developers',
    images: [
      {
        url: '/og/upcoming-project.jpg',
        width: 1200,
        height: 630,
        alt: 'Ariston Developers — Upcoming Project Interior Render',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.aristondevelopers.com/upcoming-project/',
  },
};

export default function UpcomingProjectPage() {
  return <UpcomingProjectClient />;
}
