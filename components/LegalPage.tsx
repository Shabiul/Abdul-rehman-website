import type React from 'react';
import Footer from '@/components/Footer';

export type LegalSection = {
  heading: string;
  body: React.ReactNode;
};

export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}) {
  return (
    <main className="bg-[#FAF9F6] text-[#1A1A18]">
      <section className="bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_transparent_25%),_linear-gradient(180deg,_#FAF9F6_0%,_#F2EFE8_100%)] px-5 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">{eyebrow}</span>
          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:mt-4 sm:text-5xl">{title}</h1>
          <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#625E56]">Last updated: {updated}</p>
        </div>
      </section>

      <section className="border-t border-black/[0.08] px-5 py-12 sm:px-6 md:px-12 md:py-16">
        <article className="mx-auto max-w-3xl">
          <div className="text-base leading-8 text-[#4A4A40]">{intro}</div>
          <ol className="mt-10 space-y-10">
            {sections.map((section, i) => (
              <li key={section.heading}>
                <h2 className="text-xl font-semibold text-[#1A1A18]">
                  <span className="mr-2 text-[#755A0E]">{String(i + 1).padStart(2, '0')}</span>
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 leading-8 text-[#4A4A40] [&_a]:text-[#755A0E] [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6">
                  {section.body}
                </div>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <Footer />
    </main>
  );
}
