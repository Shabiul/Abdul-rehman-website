'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import StickyCTA from '@/components/StickyCTA';
import Footer from '@/components/Footer';
import { siteBlur } from '@/lib/siteBlur';

const ThreeScene = dynamic(() => import('@/components/ThreeScene'), { ssr: false });

const upcomingProjectImages = [
  '/upcoming-1.jpeg',
  '/upcoming-2.jpeg',
  '/upcoming-3.jpeg',
  '/upcoming-4.jpeg',
];

const featuredProperties = [
  {
    name: 'Marvella Heights',
    price: 'All Sold Out',
    location: 'BHEL Layout, Bangalore',
    beds: 3,
    baths: 4,
    image: '/property-3.jpeg',
    description:
      'A premium residential development in the heart of BHEL Layout, featuring spacious 3-bedroom homes with contemporary architecture and high-end finishes.',
  },
  {
    name: 'AR Mansion',
    price: 'All Sold Out',
    location: 'Jayanagar 9th Block, Bangalore',
    beds: 3,
    baths: 3,
    image: '/property-4.jpeg',
    description:
      'An exclusive luxury residence in prestigious Jayanagar 9th Block, crafted with elegant interiors and timeless design for discerning families.',
  },
  {
    name: 'Bait-Al-Nasr',
    price: 'All Sold Out',
    location: 'BTM 1st Stage, Bangalore',
    beds: 3,
    baths: 3,
    image: '/property-7.jpeg',
    description:
      'Elegant 3-bedroom homes in BTM 1st Stage, thoughtfully designed with generous living spaces, premium fittings and excellent connectivity.',
  },
  {
    name: 'MD Royal Heights',
    price: 'All Sold Out',
    location: 'BTM 1st Stage, Bangalore',
    beds: 4,
    baths: 4,
    image: '/property-9.jpeg',
    description:
      'Spacious 4-bedroom luxury apartments in BTM 1st Stage with modern amenities, thoughtfully designed for elevated everyday living.',
  },
];

const reasons = [
  {
    title: 'Buying & Selling',
    desc: 'Verified listings, full title due diligence and expert negotiation for premium residential and commercial properties across Bangalore.',
  },
  {
    title: 'Construction',
    desc: 'Turnkey residential construction with high-end finishes, structural engineering and handover support — built to last generations.',
  },
  {
    title: 'Land Development',
    desc: 'Strategic land acquisition, layout approvals and development across high-growth Bangalore corridors for maximum returns.',
  },
  {
    title: 'Joint Ventures',
    desc: 'Transparent partnership models for landowners seeking profit-maximising development outcomes with zero compromise on quality.',
  },
  {
    title: 'End-to-End Support',
    desc: 'From property search and legal review to registration and handover — one trusted advisor for your entire property journey.',
  },
  {
    title: 'Personalised Advisory',
    desc: 'Bespoke investment guidance calibrated to your budget, lifestyle and long-term wealth goals by our senior advisors.',
  },
];

const areas = [
  'Jayanagar', 'Koramangala', 'JP Nagar', 'Indiranagar',
  'HSR Layout', 'Whitefield', 'Bannerghatta Road', 'BTM Layout',
  'Banashankari', 'Electronic City', 'Sarjapur Road', 'Kanakapura Road',
];


type Property = (typeof featuredProperties)[number];

export default function HomeClient() {
  const [liked, setLiked] = useState<string[]>([]);
  const [selected, setSelected] = useState<Property | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ariston-liked-properties');
      if (saved) setLiked(JSON.parse(saved));
    } catch {
      /* ignore unavailable storage */
    }
  }, []);

  const toggleLike = (name: string) => {
    setLiked((prev) => {
      const next = prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name];
      try {
        localStorage.setItem('ariston-liked-properties', JSON.stringify(next));
      } catch {
        /* ignore unavailable storage */
      }
      return next;
    });
  };

  return (
    <main className="relative overflow-hidden">
      <StickyCTA />
      <section className="relative min-h-[92vh] overflow-hidden bg-[#FAF9F6] pt-20 sm:pt-24">
        <Image
          src="/property-9.jpeg"
          alt="MD Royal Heights — Ariston Developers flagship property"
          fill
          priority
          sizes="100vw"
          quality={70}
          placeholder="blur"
          blurDataURL={siteBlur['/property-9.jpeg']}
          className="object-cover object-center"
          style={{ opacity: 0.22 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/50 to-[#FAF9F6]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/60 via-transparent to-[#FAF9F6]/80" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 py-8 text-[#1A1A18] sm:px-6 md:px-12">
          <div className="mb-6 max-w-4xl space-y-5 sm:mb-8 sm:space-y-6">
            <span className="inline-flex rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#6B6860] backdrop-blur-xl">
              Ariston Developers
            </span>
            <h1
              className="hero-rise text-4xl font-semibold leading-[1.12] tracking-tight text-[#1A1A18] sm:text-5xl lg:text-7xl"
            >
              Luxury Real Estate<br className="hidden sm:block" /> in Bangalore
            </h1>
            <p
              className="hero-rise max-w-2xl text-base leading-7 text-[#6B6860] sm:text-lg sm:leading-8"
            >
              Premium property buying, selling, construction and land development across Jayanagar, Koramangala, Whitefield and beyond — by Ariston Developers.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="#properties" className="inline-flex justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-[#c99b28] sm:py-4">
                Explore Properties
              </Link>
              <Link href="#contact" className="inline-flex justify-center rounded-full border border-black/15 bg-black/5 px-7 py-3.5 text-sm font-semibold text-[#1A1A18] transition hover:border-[#D4AF37] hover:text-[#D4AF37] sm:py-4">
                Schedule Consultation
              </Link>
            </div>
          </div>

          <div className="relative grid gap-4 rounded-[28px] border border-black/10 bg-white/80 p-4 shadow-[0_40px_120px_-70px_rgba(212,175,55,0.2)] backdrop-blur-sm sm:rounded-[32px] sm:p-6 md:grid-cols-[1fr_0.85fr] md:p-8">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.28em] text-[#625E56] sm:gap-3 sm:text-sm sm:tracking-[0.3em]">
                <span className="rounded-full bg-black/5 px-3 py-1.5 sm:px-4 sm:py-2">Buy</span>
                <span className="rounded-full bg-black/5 px-3 py-1.5 sm:px-4 sm:py-2">Rent</span>
                <span className="rounded-full bg-black/5 px-3 py-1.5 sm:px-4 sm:py-2">Commercial</span>
                <span className="rounded-full bg-black/5 px-3 py-1.5 sm:px-4 sm:py-2">Residential</span>
                <span className="rounded-full bg-black/5 px-3 py-1.5 sm:px-4 sm:py-2">Luxury Villas</span>
              </div>
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-[0.25em] text-[#625E56] sm:text-sm">Search properties</label>
                <div className="grid gap-3 sm:grid-cols-3">
                  <input type="text" placeholder="Location or property type" className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-base sm:text-sm text-[#1A1A18] outline-none placeholder:text-[#ABABAA] focus:border-[#D4AF37] sm:rounded-3xl sm:py-4" />
                  <input type="text" placeholder="Bedrooms" className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-base sm:text-sm text-[#1A1A18] outline-none placeholder:text-[#ABABAA] focus:border-[#D4AF37] sm:rounded-3xl sm:py-4" />
                  <button className="rounded-2xl bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#c99b28] sm:rounded-3xl sm:py-4">Search</button>
                </div>
              </div>
            </div>
            <div className="relative hidden overflow-hidden rounded-[28px] border border-black/10 bg-[#F5F3EE] p-6 shadow-sm md:block">
              <ThreeScene />
              <div className="relative z-10 grid gap-4">
                <div className="rounded-3xl border border-black/10 bg-white p-5 text-[#4A4A40] shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#625E56]">Signature Estate Collection</p>
                  <p className="mt-3 text-lg font-semibold text-[#1A1A18]">Exclusive properties for high-net-worth families and investors.</p>
                </div>
                <div className="grid gap-3 rounded-3xl border border-black/10 bg-[#ECEAE2] p-5 text-[#4A4A40]">
                  <div className="flex items-center justify-between text-sm text-[#6B6860]">
                    <span>Private concierge viewings</span>
                    <span>24/7</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-[#6B6860]">
                    <span>Legal & title review</span>
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Project */}
      <section className="border-t border-black/[0.08] bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_transparent_30%),_linear-gradient(180deg,_#FAF9F6_0%,_#F2EFE8_100%)] px-5 py-16 sm:px-6 sm:py-24 md:px-12">
        <div className="mx-auto max-w-3xl space-y-5 text-center sm:space-y-6">
          <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Upcoming Project — Launching June 2027</span>
          <h2 className="text-3xl font-semibold leading-tight text-[#1A1A18] sm:text-5xl">
            <span className="gold-glow-text">Ariston Classic</span> Is Coming to Bangalore.
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#6B6860]">
            Introducing Ariston Classic in Jayanagar — luxury 4BHK residences in the final stages of planning, an exclusive address built for those who expect nothing less than exceptional.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {upcomingProjectImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-[24px] border border-black/[0.08] bg-white shadow-sm"
            >
              <Image
                src={src}
                alt={`Upcoming Ariston Developers project — preview ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                quality={72}
                placeholder={siteBlur[src] ? 'blur' : 'empty'}
                blurDataURL={siteBlur[src]}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-14">
          <Link
            href="/upcoming-project"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-black transition hover:bg-[#c99b28]"
          >
            Press for More Info
          </Link>
        </div>
      </section>

      <section className="border-t border-black/[0.08] bg-[#FAF9F6] px-5 py-12 text-[#1A1A18] sm:px-6 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl space-y-12 md:space-y-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Our Heritage</span>
              <h2 className="text-3xl font-semibold leading-tight text-[#1A1A18] sm:text-4xl md:text-5xl">A premium real estate story crafted by Ariston Developers.</h2>
              <p className="max-w-xl text-lg leading-8 text-[#6B6860]">
                Since inception, Ariston Developers has redefined luxury property discovery with bespoke planning, market intelligence and a transparent advisory model for premium investors.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-[#625E56]">Mission</p>
                <p className="mt-4 text-[#4A4A40]">Curate extraordinary living experiences through exceptional properties and trusted guidance.</p>
              </div>
              <div className="glass-card p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-[#625E56]">Vision</p>
                <p className="mt-4 text-[#4A4A40]">Lead as Bangalore&apos;s premier property developer with integrity, innovation and discerning service.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 rounded-[32px] border border-black/[0.08] bg-white p-8 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Properties Sold', value: '20-25' },
              { label: 'Happy Clients', value: '20+' },
              { label: 'Years Experience', value: '8+' },
              { label: 'Investment Value', value: '₹ 75 Cr+' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-black/[0.08] bg-[#FAF9F6] p-6 text-center">
                <p className="text-4xl font-semibold text-[#1A1A18]">{item.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#625E56]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="properties" className="border-t border-black/[0.08] bg-[#F2EFE8] px-5 py-12 sm:px-6 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-12 md:gap-6">
            <div className="max-w-3xl">
              <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Featured Properties</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1A1A18] sm:text-4xl md:mt-4 md:text-5xl">Discover curated luxury estates with premium amenities.</h2>
            </div>
            {liked.length > 0 && (
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-3 text-sm font-semibold text-[#1A1A18]">
                <span className="text-[#755A0E]">♥</span>
                {liked.length} {liked.length === 1 ? 'property' : 'properties'} saved
              </div>
            )}
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProperties.map((property) => (
              <motion.article
                key={property.name}
                whileHover={{ y: -10, scale: 1.01 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="glass-card overflow-hidden rounded-[32px]"
              >
                <div className="relative h-56 overflow-hidden sm:h-72">
                  <Image
                    src={property.image}
                    alt={`${property.name}, ${property.location}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={72}
                    placeholder={siteBlur[property.image] ? 'blur' : 'empty'}
                    blurDataURL={siteBlur[property.image]}
                    className="object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => toggleLike(property.name)}
                    aria-pressed={liked.includes(property.name)}
                    aria-label={liked.includes(property.name) ? `Remove ${property.name} from favourites` : `Save ${property.name} to favourites`}
                    className={`absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full text-xl shadow-sm backdrop-blur-sm transition ${
                      liked.includes(property.name)
                        ? 'bg-[#D4AF37] text-white'
                        : 'bg-white/80 text-[#1A1A18] hover:bg-[#D4AF37]/90 hover:text-white'
                    }`}
                  >
                    <motion.span
                      key={liked.includes(property.name) ? 'on' : 'off'}
                      initial={{ scale: 0.6 }}
                      animate={{ scale: liked.includes(property.name) ? [1.4, 1] : 1 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      ♥
                    </motion.span>
                  </button>
                </div>
                <div className="space-y-4 p-6">
                  <div className="space-y-1">
                    <p className="text-xl font-semibold text-[#1A1A18]">{property.name}</p>
                    <p className="text-sm text-[#625E56]">{property.location}</p>
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] ${
                      property.price === '1 Unit Left'
                        ? 'border-amber-300 bg-amber-50 text-amber-700'
                        : 'border-red-300 bg-red-50 text-red-700'
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${property.price === '1 Unit Left' ? 'bg-amber-500' : 'bg-red-500'}`} />
                      {property.price}
                    </span>
                  </div>
                  {'beds' in property && (
                    <div className="grid grid-cols-2 gap-3 rounded-3xl border border-black/[0.08] bg-[#F5F3EE] p-4 text-sm text-[#6B6860]">
                      <span>{property.beds} Beds</span>
                      <span>{property.baths} Baths</span>
                    </div>
                  )}
                  <button
                    onClick={() => setSelected(property)}
                    className="w-full rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#c99b28]"
                  >
                    View Details
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.08] bg-[#FAF9F6] px-5 py-12 text-[#1A1A18] sm:px-6 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-5 md:mb-12 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-6">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Why Choose Us</span>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A18] sm:text-4xl md:text-5xl">Luxury real estate service built around confidence and clarity.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#6B6860]">
              From verified assets to legal assistance, Ariston Developers&apos; full-service advisory model is tailored for premium buyers, sellers and investors.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
              <div key={item.title} className="glass-card p-8 text-[#4A4A40] transition hover:-translate-y-2 hover:bg-[#F5F3EE]">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#D4AF37]/15 text-[#755A0E] text-lg font-bold">✓</div>
                <h3 className="text-xl font-semibold text-[#1A1A18]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6B6860]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Areas we serve" className="border-t border-black/[0.08] bg-white px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs uppercase tracking-[0.35em] text-[#625E56] shrink-0">Areas We Serve</span>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-black/[0.08] bg-[#FAF9F6] px-4 py-1.5 text-xs font-medium text-[#4A4A40] transition hover:border-[#D4AF37]/50 hover:text-[#1A1A18]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.08] bg-[#FAF9F6] px-5 py-12 sm:px-6 md:px-12 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-[28px] border border-black/[0.08] bg-white px-6 py-10 text-center shadow-[0_60px_140px_-90px_rgba(212,175,55,0.35)] sm:rounded-[40px] sm:gap-8 sm:px-8 sm:py-14 md:py-16">
          <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Book Your Appointment</span>
          <h2 className="text-3xl font-semibold leading-tight text-[#1A1A18] sm:text-4xl md:text-5xl">Ready To Invest In Your Dream Property?</h2>
          <p className="max-w-2xl text-lg leading-8 text-[#6B6860]">
            Connect with Ariston Developers for confidential property advice, personalized showings and high-impact investment strategies.
          </p>
          <Link href="#contact" className="inline-flex rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-black transition hover:bg-[#c99b28]">
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* Property Details Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-[32px] bg-white shadow-2xl sm:rounded-[32px]"
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                aria-label="Close details"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1A1A18] shadow-sm backdrop-blur-sm transition hover:bg-white"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden sm:h-72">
                <Image src={selected.image} alt={selected.name} fill sizes="512px" className="object-cover" />
                <span
                  className={`absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] ${
                    selected.price === '1 Unit Left'
                      ? 'border-amber-300 bg-amber-50 text-amber-700'
                      : 'border-red-300 bg-red-50 text-red-700'
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${selected.price === '1 Unit Left' ? 'bg-amber-500' : 'bg-red-500'}`} />
                  {selected.price}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-5 p-6 sm:p-8">
                <div>
                  <h3 className="text-2xl font-semibold text-[#1A1A18]">{selected.name}</h3>
                  <p className="mt-1 text-sm text-[#625E56]">{selected.location}</p>
                </div>

                {'beds' in selected && (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-black/[0.08] bg-[#F5F3EE] p-4 text-center">
                      <p className="text-2xl font-semibold text-[#1A1A18]">{selected.beds}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#625E56]">Bedrooms</p>
                    </div>
                    <div className="rounded-2xl border border-black/[0.08] bg-[#F5F3EE] p-4 text-center">
                      <p className="text-2xl font-semibold text-[#1A1A18]">{selected.baths}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#625E56]">Bathrooms</p>
                    </div>
                  </div>
                )}

                <p className="leading-7 text-[#6B6860]">{selected.description}</p>

                <a
                  href={`https://wa.me/919945726707?text=${encodeURIComponent(`Hello, i wanted some property inquries about ${selected.name} ?`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#c99b28]"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
