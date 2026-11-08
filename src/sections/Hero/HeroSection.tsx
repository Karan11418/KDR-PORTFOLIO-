import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowDown, Code2, Sparkles, Terminal, FileText } from 'lucide-react';
import { PROFILE_DATA } from '../../data/portfolioData.ts';
import { useLenis } from '../../components/common/LenisScroll.tsx';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const { scrollTo } = useLenis();
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 2D Interactive Background Canvas (Lightweight neural nodes & connecting lines)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes for pure 2D motion
    const nodesCount = Math.min(35, Math.floor(width / 35));
    const nodes = Array.from({ length: nodesCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.8,
    }));

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Move nodes
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Mouse reactive connection
        const dx = nodeA.x - mouse.x;
        const dy = nodeA.y - mouse.y;
        const mouseDist = Math.sqrt(dx * dx + dy * dy);
        if (mouseDist < 160) {
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.25 * (1 - mouseDist / 160)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (badgeRef.current) {
        tl.from(badgeRef.current, { y: 20, opacity: 0, duration: 0.8 }, 0.2);
      }

      if (headlineRef.current) {
        tl.from(
          headlineRef.current,
          { y: 40, opacity: 0, duration: 1, filter: 'blur(8px)' },
          0.4
        );
      }

      if (copyRef.current) {
        tl.from(copyRef.current, { y: 20, opacity: 0, duration: 0.8 }, 0.6);
      }

      if (ctaRef.current) {
        tl.from(ctaRef.current, { y: 20, opacity: 0, duration: 0.8 }, 0.8);
      }

      if (metricsRef.current) {
        tl.from(metricsRef.current, { y: 20, opacity: 0, duration: 0.8 }, 1.0);
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* 2D Interactive Particle & Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto -z-10 opacity-70"
      />

      {/* Subtle Radial Electric Glow Backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#0284c7]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Hero Content */}
      <div className="my-auto flex flex-col items-start max-w-4xl pt-6 sm:pt-10">
        {/* Identity Eyebrow / Kicker (Unboxed clean typography) */}
        <div ref={badgeRef} className="flex items-center gap-3 text-xs sm:text-sm font-mono text-zinc-400 mb-6">
          <span className="text-[#38bdf8] font-semibold tracking-wider">KDR</span>
          <span aria-hidden="true" className="text-zinc-600">/</span>
          <span className="tracking-wide uppercase text-zinc-300">
            {PROFILE_DATA.role}
          </span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span className="text-zinc-500 hidden sm:inline">Production AI Systems</span>
        </div>

        {/* Oversized Cinematic Headline */}
        <h1
          ref={headlineRef}
          className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight leading-[1.05] text-white"
          style={{ textWrap: 'balance' }}
        >
          I BUILD INTELLIGENT <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-zinc-200 to-[#38bdf8] bg-clip-text text-transparent">
            DIGITAL EXPERIENCES.
          </span>
        </h1>

        {/* Supporting Narrative */}
        <p
          ref={copyRef}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-light"
        >
          {PROFILE_DATA.subheadline}
        </p>

        {/* Primary Action Buttons */}
        <div
          ref={ctaRef}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="group px-7 py-3.5 rounded-xl bg-[#38bdf8] text-[#050505] font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Explore My Work
          </button>

          <button
            onClick={() => scrollTo('#about')}
            className="px-6 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white font-medium text-sm transition-all cursor-pointer whitespace-nowrap"
          >
            About Me
          </button>

          <button
            onClick={onOpenResume}
            className="group flex items-center gap-2 px-5 py-3.5 rounded-xl border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900 hover:border-[#38bdf8]/40 text-zinc-400 hover:text-[#38bdf8] font-mono text-xs transition-all cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-4 h-4 text-[#38bdf8] group-hover:scale-110 transition-transform" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>

      {/* Full-width Metrics Row (Placed below hero per Portfolio & Photography guidelines) */}
      <div
        ref={metricsRef}
        className="mt-12 sm:mt-16 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
      >
        {PROFILE_DATA.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight tabular-nums">
              {stat.value}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Scroll Down Affordance */}
      <div className="mt-8 flex items-center justify-between text-xs font-mono text-zinc-600">
        <button
          onClick={() => scrollTo('#about')}
          className="group flex items-center gap-2 hover:text-zinc-300 transition-colors cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#38bdf8] group-hover:translate-y-1 transition-transform" />
        </button>

        <div className="flex items-center gap-4 text-zinc-500">
          <span className="hidden sm:inline">2D MOTION ARCHITECTURE</span>
          <span className="text-[#38bdf8]">60 FPS</span>
        </div>
      </div>
    </section>
  );
};
