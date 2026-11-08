import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, MapPin, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../../data/portfolioData.ts';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageCardRef.current && textContentRef.current) {
        gsap.from(imageCardRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none none',
          },
          x: -40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });

        gsap.from(textContentRef.current.children, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 35%',
            toggleActions: 'play none none none',
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-zinc-900 overflow-hidden"
    >
      {/* Editorial Section Header */}
      <div className="mb-16 sm:mb-20">
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-3">
          <span>01</span>
          <span aria-hidden="true" className="text-zinc-600">/</span>
          <span>About KDR</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
          BEHIND THE CODE. <br className="hidden sm:inline" />
          <span className="text-zinc-500">BEYOND THE ORDINARY.</span>
        </h2>
      </div>

      {/* 2-Column Split: Editorial Portrait & Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Portrait Framing & Credential Card */}
        <div ref={imageCardRef} className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative group rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            {/* Aspect Ratio Container */}
            <div className="relative aspect-square w-full overflow-hidden bg-zinc-900">
              <img
                src={PROFILE_DATA.portraitImage}
                alt="Karan Dhanraj - AI Operator and Full Stack Developer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80" />
            </div>

            {/* Corner Bracket Accents (Pure 2D) */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#38bdf8] opacity-80" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#38bdf8] opacity-80" />

            {/* Inset Bio Metadata Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-1">
                Karan Dhanraj
              </div>
              <div className="text-sm font-semibold text-white">
                {PROFILE_DATA.role}
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400 mt-2 font-mono">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{PROFILE_DATA.location}</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span className="text-emerald-400">Available for Select Projects</span>
              </div>
            </div>
          </div>

          {/* Education Box */}
          <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[#38bdf8]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  {PROFILE_DATA.education.period}
                </span>
                <h4 className="text-sm font-semibold text-zinc-200">
                  {PROFILE_DATA.education.degree}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">
                  {PROFILE_DATA.education.focus}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Text & Technical Focus */}
        <div ref={textContentRef} className="lg:col-span-7 flex flex-col gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              Designing intelligence at the intersection of machine learning, modern web performance, and native mobile craft.
            </h3>
            <p className="mt-4 text-base text-zinc-300 leading-relaxed font-light">
              {PROFILE_DATA.bioSummary}
            </p>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed font-light">
              I believe modern software should not only be algorithmically potent, but also delightful to interact with. By merging real-time LLM agents with 60 FPS motion design and rock-solid backend infrastructure, I create systems that feel responsive, capable, and human-centric.
            </p>
          </div>

          {/* Core Areas of Interest */}
          <div className="pt-4 border-t border-zinc-900">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-4">
              Core Technical Interests & Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PROFILE_DATA.interests.map((interest, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg border border-zinc-900 bg-zinc-950/40 hover:border-zinc-800 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                    {interest}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Philosophy Quote */}
          <div className="p-6 rounded-xl border border-zinc-800/80 bg-gradient-to-r from-zinc-950 to-zinc-900/60 relative">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
              Engineering Manifesto
            </div>
            <p className="text-sm sm:text-base italic text-zinc-200 leading-relaxed">
              "Great AI does not replace thoughtful craftsmanship—it amplifies it. Every millisecond of latency eliminated and every smooth visual transition builds user trust."
            </p>
            <div className="mt-3 text-xs font-mono text-[#38bdf8]">
              — Karan Dhanraj (KDR)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
