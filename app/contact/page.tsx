import type { Metadata } from 'next';
import ContactClient from '@/components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Ariston Developers for a private property consultation. Call +91 99457 26707 or visit #1716/135 East End A Main Road, Jayanagar 9th Block, Bangalore 560069. Open Mon–Sat, 9 am–7 pm.',
  keywords: [
    'Contact Ariston Developers',
    'property consultation Bangalore',
    'real estate office Jayanagar Bangalore',
    'Bangalore property developer contact',
    'luxury property inquiry Bangalore',
    'Abdul Rehaman contact',
    'Ariston Developers phone number',
    'property developer Jayanagar 9th Block',
    'real estate agent Bangalore contact',
    'schedule property viewing Bangalore',
  ],
  openGraph: {
    title: 'Contact Ariston Developers | Private Property Consultation Bangalore',
    description:
      'Reach us at +91 99457 26707 or visit our Jayanagar 9th Block office. Private viewings, investment advice and joint venture enquiries welcome.',
    url: 'https://www.aristondevelopers.com/contact/',
    siteName: 'Ariston Developers',
    images: [
      {
        url: '/og/contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Ariston Developers — Contact Us',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Ariston Developers | Bangalore',
    description:
      'Get in touch for premium property advice, private viewings and joint venture enquiries in Bangalore.',
    images: ['/og/contact.jpg'],
  },
  alternates: {
    canonical: 'https://www.aristondevelopers.com/contact/',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
