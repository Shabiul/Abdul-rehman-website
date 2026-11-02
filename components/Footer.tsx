import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#properties', label: 'Properties' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Buying & Selling Properties',
  'Construction Work',
  'Land Developers',
  'Joint Ventures',
];

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-[#ECEAE2] px-5 py-10 text-sm text-[#6B6860] sm:px-6 md:px-16 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-10">

        {/* Brand */}
        <div className="space-y-5 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image src="/logo-mark.png" alt="Ariston Developers" width={48} height={48} className="object-contain" />
            <div>
              <p className="text-lg font-semibold text-[#1A1A18]">Ariston Developers</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#755A0E]">We Build Your Dream Home</p>
            </div>
          </div>
          <p className="max-w-sm leading-7 text-[#6B6860]">
            End-to-end property development in Bangalore — buying, selling, construction and land development for discerning clients.
          </p>
          <div className="flex flex-col gap-1.5 text-xs text-[#625E56]">
            <span>#1716/135, East End "A" Main Road,</span>
            <span>Jayanagar 9th Block, Bangalore – 560 069</span>
            <span className="mt-1">Mon – Sat &nbsp;/&nbsp; 9:00 am – 7:00 pm</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4 pt-1">
            <a
              href="https://wa.me/919945726707"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.instagram.com/aristondevelopers.in"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-[#6B6860] transition hover:bg-[#E1306C] hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-[#6B6860] transition hover:bg-[#0077B5] hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="mb-5 text-sm uppercase tracking-[0.28em] text-[#625E56]">Quick Links</h2>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-[#D4AF37]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="mb-5 text-sm uppercase tracking-[0.28em] text-[#625E56]">Services</h2>
          <div className="flex flex-col gap-3">
            {services.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="mb-5 text-sm uppercase tracking-[0.28em] text-[#625E56]">Contact</h2>
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-[#1A1A18]">Abdul Rehaman</p>
            <a href="tel:+919945726707" className="transition hover:text-[#D4AF37]">+91 99457 26707</a>
            <a href="tel:08041711912" className="transition hover:text-[#D4AF37]">080-41711912</a>
            <a href="mailto:md@aristondevelopers.com" className="transition hover:text-[#D4AF37]">md@aristondevelopers.com</a>
            <a href="https://www.aristondevelopers.com" target="_blank" rel="noreferrer" className="transition hover:text-[#D4AF37]">www.aristondevelopers.com</a>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919945726707"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1E7E44] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#186A39]"
          >
            <FaWhatsapp size={18} />
            Chat on WhatsApp
          </a>
        </div>

      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center gap-3 border-t border-black/[0.08] pt-8 text-center text-xs text-[#625E56] md:flex-row md:justify-between md:text-left">
        <p>© {new Date().getFullYear()} Ariston Developers. All rights reserved.</p>
        <nav aria-label="Legal" className="flex items-center gap-4">
          <Link href="/privacy-policy" className="transition hover:text-[#D4AF37]">Privacy Policy</Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms-and-conditions" className="transition hover:text-[#D4AF37]">Terms &amp; Conditions</Link>
        </nav>
        <p>
          Designed &amp; Developed by{' '}
          <a
            href="https://naazailabs.com"
            target="_blank"
            rel="noopener"
            className="font-semibold text-[#6B6860] underline decoration-[#D4AF37]/60 underline-offset-4 transition hover:text-[#D4AF37]"
          >
            Naaz AI Labs
          </a>
        </p>
      </div>
    </footer>
  );
}
