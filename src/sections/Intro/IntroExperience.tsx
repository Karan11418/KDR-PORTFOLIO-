import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, FastForward } from 'lucide-react';

interface IntroExperienceProps {
  onComplete: () => void;
  forceShow?: boolean;
}

export const IntroExperience: React.FC<IntroExperienceProps> = ({ onComplete, forceShow = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const verticalLineRef = useRef<SVGLineElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const kickerRef = useRef<HTMLDivElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const buttonWrapperRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    // Reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && !forceShow) {
      onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      // Progress timeline
      const tlProgress = gsap.timeline();
      const progressObj = { val: 0 };

      tlProgress.to(progressObj, {
        val: 100,
        duration: 2.4,
        ease: 'power2.inOut',
        onUpdate: () => {
          const current = Math.round(progressObj.val);
          setProgress(current);
          if (progressFillRef.current) {
            progressFillRef.current.style.width = `${current}%`;
          }
        },
        onComplete: () => {
          setIsReady(true);
        },
      });

      // Master visual choreography timeline
      const masterTl = gsap.timeline();

      // 1. Initial line entry
      if (lineRef.current) {
        masterTl.fromTo(
          lineRef.current,
          { strokeDashoffset: 1000 },
          { strokeDashoffset: 0, duration: 0.9, ease: 'power3.out' }
        );
      }

      // 2. Vertical line expansion
      if (verticalLineRef.current) {
        masterTl.fromTo(
          verticalLineRef.current,
          { strokeDashoffset: 600, opacity: 0 },
          { strokeDashoffset: 0, opacity: 0.7, duration: 0.7, ease: 'power2.out' },
          '-=0.4'
        );
      }

      // 3. KDR Letters reveal with stagger
      if (lettersRef.current.length > 0) {
        masterTl.fromTo(
          lettersRef.current,
          { y: 70, opacity: 0, filter: 'blur(10px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.8,
            stagger: 0.15,
            ease: 'expo.out',
          },
          '-=0.3'
        );
      }

      // 4. Kicker reveal ("DIGITAL EXPERIENCE / PORTFOLIO")
      if (kickerRef.current) {
        masterTl.fromTo(
          kickerRef.current,
          { opacity: 0, letterSpacing: '0.4em' },
          { opacity: 1, letterSpacing: '0.25em', duration: 0.7, ease: 'power2.out' },
          '-=0.4'
        );
      }

      // 5. Professional identity reveal
      if (identityRef.current) {
        masterTl.fromTo(
          identityRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        );
      }

      // 6. Enter button fade in
      if (buttonWrapperRef.current) {
        masterTl.fromTo(
          buttonWrapperRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' },
          '+=0.1'
        );
      }
    }, containerRef);

    // Keyboard shortcut to skip intro
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      ctx.revert();
    };
  }, [forceShow]);

  const handleEnter = () => {
    if (hasEntered) return;
    setHasEntered(true);

    try {
      sessionStorage.setItem('kdr_intro_seen', 'true');
    } catch {
      // Ignore storage restrictions
    }

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 1.05,
        filter: 'blur(12px)',
        duration: 0.7,
        ease: 'power3.inOut',
        onComplete: () => {
          onComplete();
        },
      });
    } else {
      onComplete();
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#050505] text-[#f3f4f6] px-6 py-8 sm:px-12 sm:py-10 select-none overflow-hidden"
    >
      {/* Background Subtle Noise & Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Top Bar: Brand Monogram & Skip Button */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-[#38bdf8] uppercase">
            ARCH // KDR.SYS
          </span>
          <span className="text-zinc-600 font-mono text-xs">/</span>
          <span className="text-zinc-400 font-mono text-xs uppercase hidden sm:inline">
            Interactive Experience
          </span>
        </div>

        <button
          onClick={handleEnter}
          className="group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 hover:border-zinc-700 text-xs font-mono text-zinc-400 hover:text-white transition-all cursor-pointer"
          title="Skip straight to the portfolio"
        >
          <span>Skip Intro</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 group-hover:text-zinc-200">
            ESC
          </span>
          <FastForward className="w-3.5 h-3.5 text-[#38bdf8] group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Centerpiece: Cinematic SVG Grid Lines & KDR Typography */}
      <div className="relative z-10 my-auto flex flex-col items-center text-center max-w-4xl w-full">
        {/* SVG Animated Laser Lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
          <svg className="w-full h-72 sm:h-96" viewBox="0 0 1000 400" fill="none">
            {/* Horizontal Electric Line */}
            <line
              ref={lineRef}
              x1="50"
              y1="200"
              x2="950"
              y2="200"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="1000"
              strokeDashoffset="0"
              className="opacity-70 shadow-[0_0_15px_#38bdf8]"
            />
            {/* Vertical Center Pulse Line */}
            <line
              ref={verticalLineRef}
              x1="500"
              y1="40"
              x2="500"
              y2="360"
              stroke="#0284c7"
              strokeWidth="1"
              strokeDasharray="600"
              strokeDashoffset="0"
              className="opacity-50"
            />
            {/* Geometric Center Reticle */}
            <circle cx="500" cy="200" r="140" stroke="#38bdf8" strokeWidth="0.75" strokeDasharray="4 6" className="opacity-20 animate-spin" style={{ animationDuration: '40s' }} />
            <circle cx="500" cy="200" r="180" stroke="#818cf8" strokeWidth="0.5" strokeDasharray="8 8" className="opacity-15" />
          </svg>
        </div>

        {/* Brand KDR Letters with Mask Reveal */}
        <div className="overflow-hidden py-2">
          <div className="flex items-center justify-center gap-2 sm:gap-6 font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white drop-shadow-[0_10px_35px_rgba(56,189,248,0.2)]">
            {['K', 'D', 'R'].map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  if (el) lettersRef.current[index] = el;
                }}
                className="inline-block transition-transform hover:text-[#38bdf8] duration-300"
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Digital Experience / Portfolio */}
        <div
          ref={kickerRef}
          className="mt-3 text-xs sm:text-sm font-mono tracking-[0.25em] text-[#38bdf8] uppercase font-semibold"
        >
          DIGITAL EXPERIENCE / PORTFOLIO
        </div>

        {/* Identity: AI OPERATOR & FULL STACK DEVELOPER */}
        <div
          ref={identityRef}
          className="mt-4 flex flex-col items-center gap-2"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent" />
          <h2 className="text-sm sm:text-base md:text-lg font-medium text-zinc-300 tracking-wider">
            AI OPERATOR & FULL STACK DEVELOPER
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-md px-4 mt-1 font-normal">
            Autonomous Agents · High-Throughput Web · Native Android
          </p>
        </div>

        {/* Enter Portfolio Action Button */}
        <div ref={buttonWrapperRef} className="mt-10">
          <button
            onClick={handleEnter}
            className={`group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
              isReady
                ? 'bg-[#38bdf8] text-[#050505] shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:bg-white hover:scale-105 active:scale-95'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
            }`}
          >
            <span>{isReady ? 'ENTER PORTFOLIO' : 'INITIALIZING EXPERIENCE'}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Bottom Bar: Loading Status & Telemetry Percentage */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="text-zinc-400">STATUS:</span>
            <span className={isReady ? 'text-[#38bdf8]' : 'text-zinc-400'}>
              {isReady ? 'READY TO EXPLORE' : 'COMPILING CORE PIPELINE'}
            </span>
          </div>
          <div className="text-right tabular-nums text-zinc-400 font-medium">
            {progress}%
          </div>
        </div>

        {/* Thin High-Fidelity Progress Line */}
        <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/60">
          <div
            ref={progressFillRef}
            className="h-full bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#93c5fd] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
