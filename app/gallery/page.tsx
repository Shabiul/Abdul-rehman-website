import type { Metadata } from 'next';
import GalleryClient from '@/components/GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Watch video walkthroughs of premium properties by Ariston Developers across Bangalore — Marvella Heights, AR Mansion, Bait-Al-Nasr and more.',
  openGraph: {
    title: 'Gallery | Ariston Developers',
    description: 'Video walkthroughs of our premium residential developments across Bangalore.',
    url: 'https://www.aristondevelopers.com/gallery/',
    siteName: 'Ariston Developers',
    images: [{ url: '/og/gallery.jpg', width: 1200, height: 630, alt: 'Ariston Developers Gallery' }],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.aristondevelopers.com/gallery/',
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
