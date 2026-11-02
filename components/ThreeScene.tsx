'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
}

export default function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let running = false;
    const particles: Particle[] = [];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Draw in CSS pixels but back the canvas with device pixels so lines stay crisp.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    // Runs after setup; re-checks whether to animate once the canvas gains a size.
    const resizeObserver = new ResizeObserver(() => {
      resize();
      sync();
    });
    resizeObserver.observe(canvas);

    for (let i = 0; i < 72; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.6 + 0.4,
        opacity: Math.random() * 0.55 + 0.15,
        color: Math.random() > 0.4 ? '#D4AF37' : '#A09888',
      });
    }

    // Rotating wireframe icosahedron projected onto 2D
    const icoEdges: [number, number][] = [
      [0,1],[0,2],[0,3],[0,4],[0,5],
      [1,2],[2,3],[3,4],[4,5],[5,1],
      [6,7],[7,8],[8,9],[9,10],[10,6],
      [1,6],[2,7],[3,8],[4,9],[5,10],
      [6,11],[7,11],[8,11],[9,11],[10,11],
    ];
    const phi = (1 + Math.sqrt(5)) / 2;
    const icoVerts3D: [number, number, number][] = [
      [0, 1, phi],[0,-1, phi],[0, 1,-phi],[0,-1,-phi],
      [ phi, 0, 1],[ phi, 0,-1],[-phi, 0, 1],[-phi, 0,-1],
      [1, phi, 0],[-1, phi, 0],[1,-phi, 0],[-1,-phi, 0],
    ];
    // Normalize to unit sphere
    const norm = Math.sqrt(1 + phi * phi);
    const verts = icoVerts3D.map(([x, y, z]) => [x / norm, y / norm, z / norm] as [number, number, number]);

    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }
      ctx.globalAlpha = 1;

      // Wireframe icosahedron
      const cx = width * 0.72;
      const cy = height * 0.52;
      const scale = Math.min(width, height) * 0.28;
      angle += 0.006;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const cosB = Math.cos(angle * 0.6);
      const sinB = Math.sin(angle * 0.6);

      const projected = verts.map(([x, y, z]) => {
        // Rotate Y axis
        const x1 = x * cosA - z * sinA;
        const z1 = x * sinA + z * cosA;
        // Rotate X axis
        const y2 = y * cosB - z1 * sinB;
        const z2 = y * sinB + z1 * cosB;
        // Simple perspective
        const perspective = 2.2 / (2.2 + z2);
        return { sx: cx + x1 * scale * perspective, sy: cy + y2 * scale * perspective, z: z2 };
      });

      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 0.6;
      for (const [a, b] of icoEdges) {
        const pa = projected[a];
        const pb = projected[b];
        const avgZ = (pa.z + pb.z) / 2;
        ctx.globalAlpha = (avgZ + 1) * 0.09 + 0.04;
        ctx.beginPath();
        ctx.moveTo(pa.sx, pa.sy);
        ctx.lineTo(pb.sx, pb.sy);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      if (running) animId = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      animId = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(animId);
    };

    // Only animate while the canvas is actually visible — it is display:none on
    // phones and scrolls out of view on desktop, and a hidden rAF loop burns battery.
    let inView = false;
    const sync = () => (inView && !document.hidden && width > 0 ? start() : stop());
    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    io.observe(canvas);
    document.addEventListener('visibilitychange', sync);

    // Reduced motion: one static frame instead of an animation.
    if (reduceMotion && width > 0) draw();

    return () => {
      stop();
      io.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
