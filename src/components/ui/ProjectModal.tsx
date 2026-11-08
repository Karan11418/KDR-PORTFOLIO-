import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Calendar, UserCheck, Layers } from 'lucide-react';
import { Project } from '../../data/portfolioData.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#050505]/90 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Background click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-[#090b10] text-[#f3f4f6] shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-[#38bdf8] uppercase">{project.category}</span>
            <span aria-hidden="true" className="text-zinc-600">/</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Preview */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden mt-6 border border-zinc-800 bg-zinc-950">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-60" />
        </div>

        {/* Project Titles & Subtitle */}
        <div className="mt-6">
          <h3 id="modal-project-title" className="font-display font-extrabold text-2xl sm:text-3xl text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-[#38bdf8] font-mono mt-1 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Key Metrics Strip (If available) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6 p-4 rounded-xl border border-zinc-850 bg-zinc-950/70">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col gap-0.5">
                <span className="font-display font-bold text-lg sm:text-xl text-white tabular-nums">
                  {m.value}
                </span>
                <span className="text-xs font-mono uppercase text-zinc-500">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Description */}
        <div className="space-y-4 my-6 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
          <p>{project.longDescription}</p>
        </div>

        {/* Project Metadata Details */}
        <div className="pt-6 border-t border-zinc-850 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-[#38bdf8]" />
            <span>Role: {project.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#38bdf8]" />
            <span>Timeline: {project.year}</span>
          </div>
        </div>

        {/* Technologies List (Clean unboxed tags with subtle separators) */}
        <div className="my-6">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2.5">
            Engineered With
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-zinc-800">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#38bdf8] text-[#050505] font-semibold text-xs font-mono uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Preview</span>
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};
