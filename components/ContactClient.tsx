'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ServiceTabs from '@/components/ServiceTabs';
import { siteBlur } from '@/lib/siteBlur';

export default function ContactClient() {
  return (
    <main className="bg-[#FAF9F6] text-[#1A1A18]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_transparent_25%),_linear-gradient(180deg,_#FAF9F6_0%,_#F2EFE8_100%)] px-5 py-16 sm:px-6 sm:py-24 md:px-12">
        <Image
          src="/property-3.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={70}
          placeholder="blur"
          blurDataURL={siteBlur['/property-3.jpeg']}
          className="absolute inset-0 object-cover object-center opacity-[0.24]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Contact</span>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#1A1A18] sm:mt-4 sm:text-5xl">Let&apos;s Find Your Perfect Property</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B6860]">
            Start your premium property journey with Ariston Developers — confidential advisory, concierge lead capture and immediate callback support.
          </p>
          <div className="mt-8 inline-flex items-center justify-center gap-3 rounded-full border border-black/10 bg-white/80 px-7 py-4 text-sm text-[#4A4A40] shadow-sm backdrop-blur-xl">
            <span className="text-[#755A0E]">Instant callback</span> +91 99457 26707
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-black/[0.08] bg-[#FAF9F6] px-5 py-12 sm:px-6 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_0.9fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Lead Capture</span>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A18] sm:text-4xl md:text-5xl">Submit your inquiry for a premium property consultation.</h2>
              <p className="max-w-2xl text-lg leading-8 text-[#6B6860]">
                Our team responds with tailored recommendations, luxury property previews and market analysis for your budget and goals.
              </p>
            </div>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div className="glass-card rounded-[32px] border border-black/[0.08] bg-white p-8 text-[#4A4A40] shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Buy • Sell • Invest</p>
              <p className="mt-4 text-lg leading-8 text-[#6B6860]">
                Choose the service path that matches your property objective and receive expert support for every stage of the real estate lifecycle.
              </p>
            </div>
            <ServiceTabs />
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.08] bg-[#F2EFE8] px-5 py-12 sm:px-6 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Our Location</span>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A18] sm:text-4xl md:text-5xl">Visit Ariston Developers at our Jayanagar office.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#6B6860]">
              Visit our boutique office for private consultations or request a site tour with our luxury property specialists.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.65fr_0.35fr]">
            <div className="rounded-[32px] border border-black/[0.08] bg-white p-6 shadow-sm">
              <div className="aspect-[16/9] overflow-hidden rounded-[28px] border border-black/[0.08]">
                <iframe
                  title="Ariston Developers — Jayanagar Office"
                  src="https://www.google.com/maps?q=Ariston+Developers,+1716/135+E+End+A+Main+Rd,+Jayanagar+9th+Block,+Bengaluru,+Karnataka+560069&output=embed"
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="space-y-6 rounded-[32px] border border-black/[0.08] bg-white p-8 shadow-sm">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Contact Information</p>
                <div className="mt-4 space-y-3 text-[#4A4A40]">
                  <p>Mobile: <Link href="tel:+919945726707" className="text-[#755A0E]">+91 99457 26707</Link></p>
                  <p>Office: <Link href="tel:08041711912" className="text-[#755A0E]">080-41711912</Link></p>
                  <p>Email: <Link href="mailto:md@aristondevelopers.com" className="text-[#755A0E]">md@aristondevelopers.com</Link></p>
                  <p>Address: #1716/135, East End &ldquo;A&rdquo; Main Road, Jayanagar 9th Block, Bangalore – 560 069</p>
                  <p>Hours: Mon – Sat / 9:00 am – 7:00 pm</p>
                </div>
              </div>
              <div className="rounded-3xl bg-[#D4AF37]/10 p-5 text-sm leading-6 text-[#4A4A40]">
                <p className="font-semibold text-[#1A1A18]">Instant consultation request</p>
                <p className="mt-3 text-[#6B6860]">Chat directly on WhatsApp for immediate concierge support and property previews.</p>
                <Link href="https://wa.me/919945726707" target="_blank" className="mt-4 inline-flex rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#c99b28]">
                  Message on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
