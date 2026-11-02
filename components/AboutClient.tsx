'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { siteBlur } from '@/lib/siteBlur';

const milestones = [
  { year: '2020', title: 'Where It All Began', description: 'Abdul Rehaman founded Ariston Developers in Jayanagar, Bangalore — with a single promise: to make property buying honest, simple and rewarding for every client.' },
  { year: '2021', title: 'First Projects Delivered', description: 'Completed our first residential projects in South Bangalore. Word spread fast — clients trusted us not just for the buildings, but for the way we treated people.' },
  { year: '2022', title: 'Growing Across Bangalore', description: 'Expanded into BTM Layout, Koramangala and Jayanagar 9th Block. Our team grew alongside our reputation — every deal done with full transparency.' },
  { year: '2023', title: 'Marvella Heights Launched', description: 'Launched our flagship project Marvella Heights — a premium residential development that sold out within months and set a new benchmark in the area.' },
  { year: '2024', title: 'Trusted by 300+ Families', description: 'Over 300 families placed their trust in us across buying, selling, construction and land development. Every project delivered on time, every promise kept.' },
  { year: '2025', title: 'Expanding Our Vision', description: 'Took on joint venture projects with landowners across South Bangalore, offering transparent models and maximum value — together building something bigger.' },
  { year: '2026', title: 'The Journey Continues', description: 'Today Ariston Developers stands as a name synonymous with integrity in Bangalore real estate. Our next chapter focuses on legacy projects and empowering more families to own their dream home.' },
];

const team = [
  { name: 'Abdul Rehaman', role: 'Founder', social: '+91 99457 26707' },
];

const values = [
  { title: 'Integrity', description: 'Honest guidance with every luxury transaction.' },
  { title: 'Transparency', description: 'Clear communication and documented advice.' },
  { title: 'Excellence', description: 'Premium service across every client touchpoint.' },
  { title: 'Innovation', description: 'Digital-first property experiences and insights.' },
  { title: 'Customer Success', description: 'Priority on long-term investment outcomes.' },
];

export default function AboutClient() {
  return (
    <main className="bg-[#FAF9F6] text-[#1A1A18]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_transparent_30%),_linear-gradient(180deg,_#FAF9F6_0%,_#F2EFE8_100%)] px-5 py-16 sm:px-6 sm:py-24 md:px-12">
        <Image
          src="/property-4.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={70}
          placeholder="blur"
          blurDataURL={siteBlur['/property-4.jpeg']}
          className="absolute inset-0 object-cover object-center opacity-[0.24]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl space-y-5 text-center sm:space-y-6">
          <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">About Us</span>
          <h1 className="text-3xl font-semibold leading-tight text-[#1A1A18] sm:text-5xl">Building Trust Through Exceptional Real Estate Experiences</h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#6B6860]">
            Ariston Developers delivers premium property journeys founded on discretion, deep market knowledge and luxury lifestyle curation across Bangalore.
          </p>
          <Link href="#journey" className="inline-flex rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#c99b28]">
            Discover Our Journey
          </Link>
        </div>
      </section>

      <section className="border-t border-black/[0.08] bg-[#FAF9F6] px-5 py-12 sm:px-6 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Founder Story</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A18] sm:text-4xl md:text-5xl">Crafting a legacy of confidence for luxury property seekers.</h2>
            <p className="max-w-3xl text-lg leading-8 text-[#6B6860]">
              Founded in 2020 by Abdul Rehaman, Ariston Developers was built on a simple belief — every family deserves honest guidance and a home they are proud of.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#625E56]">Experience</p>
                <p className="mt-3 text-[#4A4A40]">8+ years in residential property development, construction, land development and joint ventures across South Bangalore.</p>
              </div>
              <div className="glass-card p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#625E56]">Achievements</p>
                <p className="mt-3 text-[#4A4A40]">300+ families served, projects delivered in Jayanagar, BTM Layout and Koramangala — every project completed on time and on promise.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-[32px] border border-black/[0.08] bg-white p-8 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/8 via-transparent to-[#F2EFE8]/60" />
              <div className="relative flex h-full flex-col justify-between gap-6">
                <div className="text-[#4A4A40]">
                  <div className="mb-4 inline-flex rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#6B6860]">Founder</div>
                  <p className="text-xl font-semibold text-[#1A1A18]">Abdul Rehaman</p>
                  <p className="mt-1 text-sm text-[#755A0E]">+91 99457 26707</p>
                  <p className="mt-3 text-[#6B6860]">Property developer, land strategist and founder of Ariston Developers, Bangalore.</p>
                </div>
                <div className="grid gap-4 rounded-[28px] border border-black/[0.08] bg-[#FAF9F6] p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#625E56]">Vision Statement</p>
                  <p className="text-[#4A4A40]">To set the benchmark for premium living experiences through curated spaces, intelligent investment and celebrated service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="border-t border-black/[0.08] bg-[#F2EFE8] px-5 py-12 sm:px-6 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Company Journey</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1A1A18] sm:text-4xl md:text-5xl">A dynamic growth story driven by curated excellence.</h2>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-black/[0.08] bg-white p-8 shadow-sm">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-black/[0.06] lg:block" />
            <div className="space-y-10">
              {milestones.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col gap-4 rounded-3xl border border-black/[0.08] bg-[#FAF9F6] p-6 sm:flex-row sm:items-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37]/15 text-xl font-semibold text-[#755A0E]">
                    {item.year}
                  </div>
                  <div className="sm:flex-1">
                    <h3 className="text-2xl font-semibold text-[#1A1A18]">{item.title}</h3>
                    <p className="mt-2 text-[#6B6860]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.08] bg-[#FAF9F6] px-5 py-12 sm:px-6 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Team</span>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A18] sm:text-4xl md:text-5xl">A modern team built for Ariston Developers and investment advisory.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#6B6860]">
              Our team combines boutique service, legal expertise, and market execution to deliver premium results across every luxury engagement.
            </p>
          </div>
          <div className="grid gap-6 max-w-sm">
            {team.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -8 }}
                className="glass-card rounded-[32px] p-6"
              >
                <div className="mb-6 h-40 rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent)] p-6">
                  <div className="flex h-full items-end">
                    <div className="rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm uppercase tracking-[0.25em] text-[#6B6860]">{member.role}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A18]">{member.name}</h3>
                <p className="mt-2 text-sm text-[#625E56]">{member.role}</p>
                <p className="mt-4 text-sm text-[#755A0E]">{member.social}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.08] bg-[#F2EFE8] px-5 py-12 sm:px-6 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Core Values</span>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A18] sm:text-4xl md:text-5xl">Principles that shape every premium client relationship.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#6B6860]">
              Our values define how we source assets, structure advice, and deliver tailored outcomes for each luxury property seeker.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <motion.div
                key={value.title}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-[32px] p-8"
              >
                <h3 className="text-2xl font-semibold text-[#1A1A18]">{value.title}</h3>
                <p className="mt-4 text-[#6B6860]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.08] bg-[#F2EFE8] px-5 py-12 sm:px-6 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Our Projects</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1A1A18] sm:text-4xl md:text-5xl">A portfolio of landmark properties across Bangalore.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: '/property-3.jpeg', title: 'Marvella Heights', loc: 'BHEL Layout' },
              { src: '/property-4.jpeg', title: 'AR Mansion', loc: 'Jayanagar 9th Block' },
              { src: '/property-7.jpeg', title: 'Bait-Al-Nasr', loc: 'BTM 1st Stage' },
              { src: '/property-9.jpeg', title: 'MD Royal Heights', loc: 'BTM 1st Stage' },
            ].map((p) => (
              <div key={p.src} className="group overflow-hidden rounded-[24px] border border-black/[0.08] bg-white shadow-sm">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={p.src}
                    alt={`${p.title}, ${p.loc}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={72}
                    placeholder={siteBlur[p.src] ? 'blur' : 'empty'}
                    blurDataURL={siteBlur[p.src]}
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-[#1A1A18]">{p.title}</p>
                  <p className="mt-1 text-sm text-[#625E56]">{p.loc}, Bangalore</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
