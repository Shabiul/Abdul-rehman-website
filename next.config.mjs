const nextConfig = {
  reactStrictMode: true,
  // Site is hosted on Vercel (www.aristondevelopers.com -> Vercel DNS), so
  // the Next.js server runs there and can optimize images on the fly —
  // no need for a static export.
  trailingSlash: true,

  // Inline the (small) Tailwind stylesheet into the HTML so it doesn't block
  // first paint with an extra request.
  experimental: {
    inlineCss: true,
  },

  images: {
    // Keep optimized variants in Vercel's cache for a year. Image filenames
    // are stable, so there is nothing to invalidate.
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      {
        // The image optimizer copies the upstream Cache-Control onto the
        // optimized response. Without this, files in /public are served
        // `max-age=0, must-revalidate`, so browsers re-request every image
        // on every visit and every scroll-back.
        source: '/:path*.(jpeg|jpg|png|svg|webp|avif|mp4)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
