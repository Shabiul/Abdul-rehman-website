'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const tabItems = [
  {
    label: 'Buy / Sell',
    content: [
      'Curated property listings across Bangalore',
      'End-to-end transaction support and legal guidance',
      'Verified titles and transparent pricing',
    ],
  },
  {
    label: 'Construction',
    content: [
      'Residential and commercial construction projects',
      'Quality materials and on-time delivery',
      'Architectural planning and execution',
    ],
  },
  {
    label: 'Land & Ventures',
    content: [
      'Land acquisition and development in Bangalore',
      'Joint venture opportunities with landowners',
      'Ariston Developers project partnerships',
    ],
  },
];

export default function ServiceTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-6 rounded-[32px] border border-black/[0.08] bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-3 sm:grid-cols-3">
        {tabItems.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`rounded-3xl border px-5 py-4 text-left transition ${
              activeIndex === index
                ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#1A1A18]'
                : 'border-black/10 bg-[#FAF9F6] text-[#6B6860] hover:bg-[#F2EFE8]'
            }`}
          >
            <span className="block text-sm uppercase tracking-[0.25em] text-[#625E56]">{item.label}</span>
            <span className="mt-3 block font-semibold text-xl text-[#1A1A18]">Explore</span>
          </button>
        ))}
      </div>
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-[28px] border border-black/[0.08] bg-[#FAF9F6] p-8"
      >
        <h3 className="mb-4 text-xl font-semibold text-[#1A1A18]">{tabItems[activeIndex].label}</h3>
        <div className="grid gap-4">
          {tabItems[activeIndex].content.map((line) => (
            <div key={line} className="flex gap-4 rounded-3xl border border-black/[0.08] bg-white p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/15 text-[#755A0E]">✓</div>
              <p className="text-sm leading-6 text-[#6B6860]">{line}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
