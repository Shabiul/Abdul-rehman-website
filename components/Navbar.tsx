'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#properties', label: 'Properties' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Solid when scrolled OR when the mobile menu is open
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-black/[0.07] bg-white/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-mark.png"
            alt="Ariston Developers"
            width={48}
            height={48}
            className="object-contain"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-lg font-semibold text-[#1A1A18]">Ariston Developers</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#755A0E]">We Build Your Dream Home</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#6B6860] transition hover:text-[#D4AF37]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919945726707?text=Hello%2C%20i%20wanted%20some%20property%20inquries%20%3F"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#c99b28]"
          >
            Book Consultation
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-[#1A1A18] transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-[#1A1A18] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-[#1A1A18] transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/[0.07] bg-white/95 px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#4A4A40] transition hover:text-[#D4AF37]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919945726707?text=Hello%2C%20i%20wanted%20some%20property%20inquries%20%3F"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#c99b28]"
            >
              Book Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
