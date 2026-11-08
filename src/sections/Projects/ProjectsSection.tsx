import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '../../data/portfolioData.ts';
import { ProjectModal } from '../../components/ui/ProjectModal.tsx';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI' | 'Full Stack' | 'Android' | 'Experiments'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs: { label: string; value: 'All' | 'AI' | 'Full Stack' | 'Android' | 'Experiments' }[] = [
    { label: 'All Works', value: 'All' },
    { label: 'AI & Agents', value: 'AI' },
    { label: 'Full Stack', value: 'Full Stack' },
    { label: 'Android Apps', value: 'Android' },
    { label: 'Experiments', value: 'Experiments' },
  ];

  const filteredProjects =
    filter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-zinc-900 overflow-hidden"
    >
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-3">
          <span>04</span>
          <span aria-hidden="true" className="text-zinc-600">/</span>
          <span>Portfolio Works</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              SELECTED WORKS.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-xl font-light">
              Real systems, autonomous agents, and fluid web experiences built with architectural discipline.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-zinc-900/70 rounded-xl border border-zinc-800/80 w-fit">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  filter === tab.value
                    ? 'bg-[#38bdf8] text-[#050505] font-semibold shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Showcase Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project, index) => {
          const isLargeCard = index === 0 && filter === 'All';

          return (
            <div
              key={project.id}
              className={`group relative rounded-2xl border border-zinc-850 bg-zinc-950/80 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-zinc-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)] ${
                isLargeCard ? 'md:col-span-2' : ''
              }`}
            >
              {/* Media Preview Container */}
              <div
                onClick={() => setSelectedProject(project)}
                className="relative aspect-video w-full overflow-hidden bg-zinc-900 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Corner Badge & Year (Unboxed text) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#050505]/80 backdrop-blur-md border border-zinc-800 text-[#38bdf8] uppercase">
                    <span>{project.category}</span>
                  </div>
                  <div className="px-3 py-1 rounded-md bg-[#050505]/80 backdrop-blur-md border border-zinc-800 text-zinc-400">
                    {project.year}
                  </div>
                </div>

                {/* View Details Hover Cue */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="px-4 py-2 rounded-xl bg-[#050505]/90 border border-zinc-700 text-xs font-mono text-white tracking-wider uppercase flex items-center gap-1.5 shadow-xl">
                    <span>Inspect System</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#38bdf8]" />
                  </span>
                </div>
              </div>

              {/* Card Meta & Narrative */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#38bdf8] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Row (If available) */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5 pt-4 border-t border-zinc-900">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="font-display font-bold text-base sm:text-lg text-white tabular-nums">
                          {m.value}
                        </span>
                        <span className="text-[11px] font-mono uppercase text-zinc-500">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies & Action Links */}
                <div className="pt-4 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono text-zinc-400">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-zinc-600 text-[11px] self-center">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3.5 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-600 bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-[#38bdf8] text-[#050505] hover:bg-white transition-colors cursor-pointer"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
