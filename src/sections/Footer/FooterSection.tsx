import React from 'react';
import { ArrowUp, RotateCcw, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../../data/portfolioData.ts';
import { useLenis } from '../../components/common/LenisScroll.tsx';

interface FooterSectionProps {
  onReplayIntro: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onReplayIntro }) => {
  const { scrollTo } = useLenis();

  return (
    <footer className="relative border-t border-zinc-900 bg-[#050505] text-zinc-400 py-12 px-6 sm:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Identity & Quiet Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-display font-black text-white text-base tracking-tight">
            KDR
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-zinc-700">·</span>
          <span className="text-xs font-mono text-zinc-500">
            © {new Date().getFullYear()} {PROFILE_DATA.fullName}. All rights reserved.
          </span>
        </div>

        {/* Center: Verified Channels */}
        <div className="flex items-center gap-5 text-xs font-mono">
          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span aria-hidden="true" className="text-zinc-800">/</span>
          <a
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span aria-hidden="true" className="text-zinc-800">/</span>
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right: Real Actions (Replay Intro & Back to Top) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onReplayIntro}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-850 bg-zinc-950 hover:bg-zinc-900 text-xs font-mono text-zinc-400 hover:text-[#38bdf8] transition-colors cursor-pointer"
            title="Replay opening cinematic experience"
          >
            <RotateCcw className="w-3.5 h-3.5 group-hover:-rotate-90 transition-transform" />
            <span>Replay Intro</span>
          </button>

          <button
            onClick={() => scrollTo('#hero')}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-850 bg-zinc-950 hover:bg-zinc-900 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
