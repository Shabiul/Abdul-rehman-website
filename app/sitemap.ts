import { MetadataRoute } from 'next';

const siteUrl = 'https://www.aristondevelopers.com';

// Bump when page content meaningfully changes, so crawlers get a real signal.
const lastModified = new Date('2026-11-02');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/upcoming-project/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/about/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/gallery/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/contact/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/privacy-policy/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/terms-and-conditions/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
