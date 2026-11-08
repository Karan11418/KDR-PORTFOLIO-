import React, { useState } from 'react';
import { EXPERTISE_DATA, ExpertiseItem } from '../../data/portfolioData.ts';
import { ArrowUpRight, Cpu, Layers, Smartphone, Globe, Workflow, Check } from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>(EXPERTISE_DATA[0].id);

  // Custom 2D Animated SVG Graphics for each expertise block
  const renderVisual = (id: string) => {
    switch (id) {
      case 'ai-agents':
        return (
          <div className="relative w-full h-48 sm:h-64 flex items-center justify-center overflow-hidden">
            <svg className="w-full h-full max-w-sm" viewBox="0 0 400 240" fill="none">
              {/* Outer Pulsing Orbit */}
              <circle cx="200" cy="120" r="85" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 6" className="animate-spin opacity-30" style={{ animationDuration: '30s' }} />
              <circle cx="200" cy="120" r="50" stroke="#818cf8" strokeWidth="1" strokeDasharray="4 4" className="animate-spin opacity-40" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
              
              {/* Central Neural Node */}
              <circle cx="200" cy="120" r="22" fill="#0284c7" className="animate-pulse" />
              <circle cx="200" cy="120" r="10" fill="#ffffff" />

              {/* Satellite Agent Nodes */}
              <g className="animate-pulse" style={{ animationDuration: '2s' }}>
                <line x1="200" y1="120" x2="130" y2="70" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="130" cy="70" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                <circle cx="130" cy="70" r="4" fill="#38bdf8" />
              </g>

              <g className="animate-pulse" style={{ animationDuration: '2.5s' }}>
                <line x1="200" y1="120" x2="270" y2="70" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="270" cy="70" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                <circle cx="270" cy="70" r="4" fill="#38bdf8" />
              </g>

              <g className="animate-pulse" style={{ animationDuration: '3s' }}>
                <line x1="200" y1="120" x2="150" y2="180" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="150" cy="180" r="12" fill="#0f172a" stroke="#818cf8" strokeWidth="2" />
                <circle cx="150" cy="180" r="4" fill="#818cf8" />
              </g>

              <g className="animate-pulse" style={{ animationDuration: '2.2s' }}>
                <line x1="200" y1="120" x2="250" y2="180" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="250" cy="180" r="12" fill="#0f172a" stroke="#818cf8" strokeWidth="2" />
                <circle cx="250" cy="180" r="4" fill="#818cf8" />
              </g>

              <text x="200" y="225" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace" letterSpacing="0.2em">
                MULTI-AGENT COGNITIVE GRAPH
              </text>
            </svg>
          </div>
        );

      case 'fullstack-dev':
        return (
          <div className="relative w-full h-48 sm:h-64 flex items-center justify-center overflow-hidden">
            <svg className="w-full h-full max-w-sm" viewBox="0 0 400 240" fill="none">
              {/* Client Layer (Top) */}
              <rect x="100" y="30" width="200" height="35" rx="6" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" />
              <text x="200" y="52" textAnchor="middle" fill="#e0e7ff" fontSize="11" fontFamily="monospace" fontWeight="600">
                REACT 19 / CLIENT VIEW
              </text>

              {/* Data Flow Conduit (Middle) */}
              <line x1="200" y1="65" x2="200" y2="105" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />

              {/* Express API Gateway (Middle) */}
              <rect x="120" y="105" width="160" height="35" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="200" y="127" textAnchor="middle" fill="#bae6fd" fontSize="11" fontFamily="monospace" fontWeight="600">
                NODE / EXPRESS API
              </text>

              {/* Database Flow (Bottom) */}
              <line x1="200" y1="140" x2="200" y2="175" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />

              {/* Database Cylinder / Storage (Bottom) */}
              <rect x="140" y="175" width="120" height="35" rx="6" fill="#0f172a" stroke="#34d399" strokeWidth="1.5" />
              <text x="200" y="197" textAnchor="middle" fill="#a7f3d0" fontSize="11" fontFamily="monospace" fontWeight="600">
                MONGODB / SQL STORE
              </text>
            </svg>
          </div>
        );

      case 'android-dev':
        return (
          <div className="relative w-full h-48 sm:h-64 flex items-center justify-center overflow-hidden">
            <svg className="w-full h-full max-w-sm" viewBox="0 0 400 240" fill="none">
              {/* Smartphone Frame */}
              <rect x="140" y="15" width="120" height="210" rx="18" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
              {/* Speaker Notch */}
              <line x1="185" y1="28" x2="215" y2="28" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
              {/* Screen Content Simulation */}
              <rect x="150" y="42" width="100" height="30" rx="4" fill="#1e293b" />
              <circle cx="165" cy="57" r="6" fill="#34d399" />
              <line x1="178" y1="54" x2="225" y2="54" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
              <line x1="178" y1="60" x2="205" y2="60" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />

              {/* Feed Card */}
              <rect x="150" y="80" width="100" height="60" rx="4" fill="#1e293b" />
              <rect x="156" y="86" width="88" height="35" rx="3" fill="#090d16" />
              <line x1="156" y1="128" x2="210" y2="128" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />

              {/* Bottom Touch Gesture Bar */}
              <line x1="180" y1="212" x2="220" y2="212" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />

              {/* Signal Ripples */}
              <circle cx="80" cy="80" r="15" stroke="#34d399" strokeWidth="1" strokeDasharray="2 4" className="animate-ping opacity-30" />
              <circle cx="320" cy="140" r="20" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" className="animate-ping opacity-25" style={{ animationDuration: '3s' }} />
            </svg>
          </div>
        );

      case 'web-apps':
        return (
          <div className="relative w-full h-48 sm:h-64 flex items-center justify-center overflow-hidden">
            <svg className="w-full h-full max-w-sm" viewBox="0 0 400 240" fill="none">
              {/* Browser Window Chrome */}
              <rect x="50" y="30" width="300" height="180" rx="10" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
              {/* Window Dots */}
              <circle cx="70" cy="46" r="4" fill="#f43f5e" />
              <circle cx="82" cy="46" r="4" fill="#fbbf24" />
              <circle cx="94" cy="46" r="4" fill="#34d399" />
              <line x1="50" y1="60" x2="350" y2="60" stroke="#1e293b" strokeWidth="1" />

              {/* Animated Layout Wireframe */}
              <rect x="70" y="75" width="80" height="12" rx="3" fill="#f43f5e" opacity="0.8" />
              <rect x="70" y="95" width="140" height="8" rx="2" fill="#64748b" opacity="0.6" />
              <rect x="70" y="108" width="120" height="8" rx="2" fill="#64748b" opacity="0.4" />

              {/* Interactive Visual Block */}
              <rect x="225" y="75" width="105" height="75" rx="6" fill="#1e293b" stroke="#f43f5e" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="277" cy="112" r="16" fill="#f43f5e" className="animate-pulse" />

              {/* 60 FPS Badge */}
              <rect x="70" y="165" width="90" height="25" rx="4" fill="#0284c7" />
              <text x="115" y="181" textAnchor="middle" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="bold">
                60 FPS GSAP
              </text>
            </svg>
          </div>
        );

      case 'ai-automation':
        return (
          <div className="relative w-full h-48 sm:h-64 flex items-center justify-center overflow-hidden">
            <svg className="w-full h-full max-w-sm" viewBox="0 0 400 240" fill="none">
              {/* Trigger Node (Left) */}
              <rect x="40" y="100" width="70" height="40" rx="6" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="75" y="124" textAnchor="middle" fill="#fef08a" fontSize="10" fontFamily="monospace">
                TRIGGER
              </text>

              {/* Flow Line 1 */}
              <line x1="110" y1="120" x2="160" y2="120" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 3" className="animate-pulse" />

              {/* Decision Diamond (Center) */}
              <polygon points="200,90 235,120 200,150 165,120" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="200" y="124" textAnchor="middle" fill="#bae6fd" fontSize="9" fontFamily="monospace">
                AI EVAL
              </text>

              {/* Flow Line Top */}
              <path d="M 235 120 L 260 120 L 260 80 L 290 80" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 3" />
              <rect x="290" y="60" width="80" height="40" rx="6" fill="#0f172a" stroke="#34d399" strokeWidth="1.5" />
              <text x="330" y="84" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontFamily="monospace">
                ACTION A
              </text>

              {/* Flow Line Bottom */}
              <path d="M 235 120 L 260 120 L 260 160 L 290 160" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 3" />
              <rect x="290" y="140" width="80" height="40" rx="6" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" />
              <text x="330" y="164" textAnchor="middle" fill="#e0e7ff" fontSize="10" fontFamily="monospace">
                ACTION B
              </text>
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  const currentItem = EXPERTISE_DATA.find((e) => e.id === activeItem) || EXPERTISE_DATA[0];

  return (
    <section
      id="expertise"
      className="relative py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-zinc-900 overflow-hidden"
    >
      {/* Section Header */}
      <div className="mb-16 sm:mb-20">
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-3">
          <span>02</span>
          <span aria-hidden="true" className="text-zinc-600">/</span>
          <span>Core Capabilities</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
          TURNING IDEAS INTO <br className="hidden sm:inline" />
          <span className="text-zinc-500">DIGITAL REALITY.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl font-light">
          Five specialized engineering vectors engineered for maximum resilience, performance, and real-world utility.
        </p>
      </div>

      {/* Interactive Bento Master Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 5 Interactive Expertise Selectors */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {EXPERTISE_DATA.map((item) => {
            const isSelected = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`group text-left p-5 sm:p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-[#38bdf8] bg-zinc-900/90 shadow-[0_0_25px_rgba(56,189,248,0.15)]'
                    : 'border-zinc-850 bg-zinc-950/60 hover:bg-zinc-900/40 hover:border-zinc-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-[#38bdf8] transition-colors">
                      {item.index}.
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#38bdf8] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isSelected
                        ? 'text-[#38bdf8] translate-x-0.5 -translate-y-0.5'
                        : 'text-zinc-600 group-hover:text-zinc-300'
                    }`}
                  />
                </div>
                <p className="mt-2 text-xs sm:text-sm text-zinc-400 line-clamp-1 font-light">
                  {item.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Expertise Deep-Dive Card with Custom 2D Graphics */}
        <div className="lg:col-span-7 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 sm:p-10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {/* Subtle Ambient Accent Glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20 -z-10"
            style={{ backgroundColor: currentItem.visualAccent }}
          />

          {/* Top Identifier */}
          <div className="flex items-center justify-between border-b border-zinc-900 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                CAPABILITY VECTOR {currentItem.index}
              </span>
              <span className="text-zinc-700">·</span>
              <span className="text-xs font-mono text-[#38bdf8]">ACTIVE</span>
            </div>
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentItem.visualAccent }} />
          </div>

          {/* Heading & Detailed Narrative */}
          <h4 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            {currentItem.title}
          </h4>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            {currentItem.description}
          </p>

          {/* Dynamic 2D Motion Graphic Container */}
          <div className="my-6 p-4 rounded-xl border border-zinc-900 bg-[#07090e] shadow-inner">
            {renderVisual(currentItem.id)}
          </div>

          {/* Deliverable Capabilities List */}
          <div>
            <h5 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Core Deliverables & Implementations
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentItem.capabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: currentItem.visualAccent }} />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
