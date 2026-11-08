import React, { useState } from 'react';
import { SKILLS_DATA, SkillCategory } from '../../data/portfolioData.ts';
import { Terminal, Cpu, Database, Server, Smartphone, Layers, Shield, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...SKILLS_DATA.map((c) => c.title)];

  const filteredCategories: SkillCategory[] =
    selectedCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((c) => c.title === selectedCategory);

  const marqueeItems = [
    'AI AGENTS',
    'RAG RETRIEVAL',
    'REACT 19',
    'TYPESCRIPT',
    'NODE.JS',
    'EXPRESS',
    'MONGODB',
    'ANDROID SDK',
    'GSAP SCROLLTRIGGER',
    'TAILWIND CSS',
    'GEMINI MULTIMODAL',
    'RESTFUL APIS',
  ];

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-zinc-900 overflow-hidden"
    >
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-3">
          <span>03</span>
          <span aria-hidden="true" className="text-zinc-600">/</span>
          <span>Digital Toolkit</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
          MY DIGITAL TOOLKIT.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl font-light">
          A disciplined stack chosen for reliability, composability, and high-performance execution across client and server runtimes.
        </p>
      </div>

      {/* Kinetic 2D Marquee Ticker */}
      <div className="relative w-full overflow-hidden py-3 my-8 border-y border-zinc-800/80 bg-zinc-950/40 select-none">
        <div className="flex w-max animate-marquee space-x-8">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-6">
              <span className="font-mono text-xs sm:text-sm tracking-widest text-zinc-400 font-medium">
                {item}
              </span>
              <span className="text-[#38bdf8] font-bold text-xs">/</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Category Filter Tabs (Zero-pill button styling) */}
      <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-zinc-900/60 rounded-xl border border-zinc-800/80 w-fit max-w-full">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-[#38bdf8] text-[#050505] font-semibold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            {cat === 'all' ? 'All Disciplines' : cat}
          </button>
        ))}
      </div>

      {/* Skills Matrix by Category */}
      <div className="space-y-12">
        {filteredCategories.map((category, catIdx) => (
          <div key={catIdx} className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#38bdf8] flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>{category.title}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="group p-5 rounded-xl border border-zinc-850 bg-zinc-950/70 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-display font-bold text-base text-white group-hover:text-[#38bdf8] transition-colors">
                        {skill.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mt-1">
                        <span>Focus</span>
                        <span aria-hidden="true" className="text-zinc-700">·</span>
                        <span className="text-zinc-400">{skill.level}</span>
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#38bdf8]/40 group-hover:bg-[#38bdf8] group-hover:shadow-[0_0_10px_#38bdf8] transition-all" />
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
