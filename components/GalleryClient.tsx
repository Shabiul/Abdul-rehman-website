'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const videos = [
  '/gallery-1.mp4',
  '/gallery-2.mp4',
  '/gallery-3.mp4',
  '/gallery-4.mp4',
  '/gallery-5.mp4',
  '/gallery-6.mp4',
  '/gallery-7.mp4',
  '/gallery-8.mp4',
];

const posterFor = (src: string) => src.replace('/gallery-', '/posters/gallery-').replace('.mp4', '.jpg');

type FullscreenVideoElement = HTMLVideoElement & {
  webkitEnterFullscreen?: () => void;
  webkitExitFullscreen?: () => void;
  webkitDisplayingFullscreen?: boolean;
};

type FullscreenDocument = Document & {
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => void;
};

function VideoCard({ src, index }: { src: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const historyPushed = useRef(false);

  // Any exit path (Esc, native close control, programmatic) lands here.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const handleExit = () => {
      const doc = document as FullscreenDocument;
      const stillFullscreen = doc.fullscreenElement === el || doc.webkitFullscreenElement === el;
      if (stillFullscreen) return;
      setIsFullscreen(false);
      el.pause();
      if (historyPushed.current) {
        historyPushed.current = false;
      }
    };

    document.addEventListener('fullscreenchange', handleExit);
    document.addEventListener('webkitfullscreenchange', handleExit);
    el.addEventListener('webkitendfullscreen', handleExit);
    return () => {
      document.removeEventListener('fullscreenchange', handleExit);
      document.removeEventListener('webkitfullscreenchange', handleExit);
      el.removeEventListener('webkitendfullscreen', handleExit);
    };
  }, []);

  // Back button (or Android's back gesture) should close fullscreen, not leave the page.
  useEffect(() => {
    const onPopState = () => {
      if (!isFullscreen) return;
      const el = videoRef.current as FullscreenVideoElement | null;
      if (!el) return;
      if (document.fullscreenElement) document.exitFullscreen?.();
      else if ((document as FullscreenDocument).webkitFullscreenElement) (document as FullscreenDocument).webkitExitFullscreen?.();
      else el.webkitExitFullscreen?.();
      setIsFullscreen(false);
      el.pause();
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [isFullscreen]);

  const play = async () => {
    const el = videoRef.current as FullscreenVideoElement | null;
    if (!el) return;

    // iOS Safari doesn't support Fullscreen API on arbitrary elements —
    // it exposes a dedicated native fullscreen mode on <video> instead.
    if (typeof el.webkitEnterFullscreen === 'function' && !el.requestFullscreen) {
      el.muted = false;
      el.play().catch(() => {});
      el.webkitEnterFullscreen();
      setIsFullscreen(true);
      window.history.pushState({ galleryFullscreen: true }, '');
      historyPushed.current = true;
      return;
    }

    try {
      el.muted = false;
      await el.play();
      await el.requestFullscreen();
      setIsFullscreen(true);
      window.history.pushState({ galleryFullscreen: true }, '');
      historyPushed.current = true;
    } catch {
      // Fullscreen was blocked — still let it play inline rather than do nothing.
      el.play().catch(() => {});
    }
  };

  const handleClick = () => {
    if (isFullscreen) return;
    play();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label="Play video full screen"
      className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-[28px] border border-black/[0.08] bg-black shadow-sm outline-none transition-shadow duration-300 hover:shadow-[0_30px_80px_-40px_rgba(212,175,55,0.5)] focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
    >
      <video
        ref={videoRef}
        src={src}
        poster={posterFor(src)}
        playsInline
        preload="none"
        controls={isFullscreen}
        className={isFullscreen ? 'h-full w-full bg-black object-contain' : 'h-full w-full object-cover'}
      />

      {/* Play overlay — hidden once fullscreen playback takes over */}
      {!isFullscreen && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/30">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37] shadow-lg">
            <svg className="ml-1 h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Gold accent ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-[#D4AF37]/0 transition duration-300 group-hover:ring-[#D4AF37]/40" />
    </motion.div>
  );
}

export default function GalleryClient() {
  return (
    <main className="bg-[#FAF9F6] text-[#1A1A18]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_transparent_30%),_linear-gradient(180deg,_#FAF9F6_0%,_#F2EFE8_100%)] px-5 py-16 sm:px-6 sm:py-24 md:px-12">
        <div className="relative mx-auto max-w-6xl space-y-5 text-center sm:space-y-6">
          <span className="text-sm uppercase tracking-[0.35em] text-[#755A0E]">Gallery</span>
          <h1 className="text-3xl font-semibold leading-tight text-[#1A1A18] sm:text-5xl">
            See Our Properties Come to Life
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#6B6860]">
            Explore video walkthroughs of our premium residential developments across Bangalore — crafted by Ariston Developers.
          </p>
          <p className="text-sm text-[#625E56]">Tap any video to watch full screen</p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="border-t border-black/[0.08] bg-[#FAF9F6] px-5 py-12 sm:px-6 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {videos.map((src, index) => (
              <VideoCard key={src} src={src} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
