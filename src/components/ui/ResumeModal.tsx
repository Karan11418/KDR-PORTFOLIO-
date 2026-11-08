import React, { useEffect } from 'react';
import { X, Download, Printer, CheckCircle, GraduationCap, Briefcase, Mail, MapPin } from 'lucide-react';
import { PROFILE_DATA, JOURNEY_DATA, SKILLS_DATA, PROJECTS_DATA } from '../../data/portfolioData.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/markdown resume export or trigger print
    const resumeText = `
KARAN DHANRAJ (KDR)
${PROFILE_DATA.role}
Email: ${PROFILE_DATA.email} | Location: ${PROFILE_DATA.location}
Website: https://kdr-portfolio.com

============================================================
SUMMARY
${PROFILE_DATA.bioSummary}

============================================================
EDUCATION
${PROFILE_DATA.education.degree} (${PROFILE_DATA.education.period})
Focus: ${PROFILE_DATA.education.focus}

============================================================
EXPERTISE & SKILLS
- AI & Agents: Multi-Agent Systems, RAG, Prompt Engineering, Gemini Multimodal API
- Frontend: React 19, TypeScript, Tailwind CSS, GSAP Motion, Canvas 2D
- Backend: Node.js, Express, REST APIs, Rate Limiting, JWT Auth
- Databases & Mobile: MongoDB, SQL, Android Development

============================================================
KEY PROJECTS
${PROJECTS_DATA.map((p) => `* ${p.title} (${p.year}) - ${p.subtitle}\n  Stack: ${p.tags.join(', ')}\n  ${p.description}`).join('\n\n')}

============================================================
EXPERIENCE & TRAJECTORY
${JOURNEY_DATA.map((j) => `* ${j.title} | ${j.organization} (${j.year})\n  ${j.description}`).join('\n\n')}
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Karan_Dhanraj_KDR_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#050505]/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-[#090b10] text-[#f3f4f6] shadow-2xl p-6 sm:p-10"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-[#38bdf8] uppercase font-bold">KDR CURRICULUM VITAE</span>
            <span aria-hidden="true" className="text-zinc-600">/</span>
            <span>VERIFIED VERSION 2024-2025</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#38bdf8] text-[#050505] text-xs font-mono font-semibold hover:bg-white transition-colors cursor-pointer"
              title="Download Resume Plaintext"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable/Readable Resume Sheet */}
        <div className="mt-8 space-y-8 font-sans">
          {/* Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-850 pb-6">
            <div>
              <h1 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                {PROFILE_DATA.fullName}
              </h1>
              <p className="text-sm sm:text-base font-mono text-[#38bdf8] mt-1 font-medium">
                {PROFILE_DATA.role}
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-400 space-y-1 text-left sm:text-right">
              <div className="flex items-center gap-1.5 sm:justify-end">
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                <span>{PROFILE_DATA.email}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:justify-end">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{PROFILE_DATA.location} · Remote</span>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-2 font-semibold">
              Executive Profile
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
              {PROFILE_DATA.bioSummary}
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-3 font-semibold">
              Core Competencies & Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg border border-zinc-850 bg-zinc-950/60">
                <span className="text-zinc-500 uppercase block mb-1">AI & Machine Intelligence</span>
                <span className="text-zinc-200">AI Agents, RAG Pipelines, Tool Calling, Vector Retrieval, Prompt Optimization</span>
              </div>
              <div className="p-3 rounded-lg border border-zinc-850 bg-zinc-950/60">
                <span className="text-zinc-500 uppercase block mb-1">Frontend Architecture</span>
                <span className="text-zinc-200">React 19, TypeScript, Tailwind CSS, GSAP Motion, 2D Canvas Physics</span>
              </div>
              <div className="p-3 rounded-lg border border-zinc-850 bg-zinc-950/60">
                <span className="text-zinc-500 uppercase block mb-1">Backend Systems</span>
                <span className="text-zinc-200">Node.js, Express.js, REST APIs, Rate Limiting, Authentication & RBAC</span>
              </div>
              <div className="p-3 rounded-lg border border-zinc-850 bg-zinc-950/60">
                <span className="text-zinc-500 uppercase block mb-1">Data & Native Mobile</span>
                <span className="text-zinc-200">MongoDB, SQL Relational DBs, Native Android SDK, Git CI/CD</span>
              </div>
            </div>
          </div>

          {/* Experience & Milestones */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-4 font-semibold">
              Experience & Milestones
            </h2>
            <div className="space-y-5">
              {JOURNEY_DATA.map((item, idx) => (
                <div key={idx} className="border-l-2 border-zinc-800 pl-4 space-y-1">
                  <div className="flex flex-wrap items-center justify-between text-xs font-mono">
                    <span className="font-bold text-white text-sm">{item.title}</span>
                    <span className="text-zinc-500">{item.year}</span>
                  </div>
                  <div className="text-xs text-[#38bdf8] font-mono">{item.organization}</div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-3 font-semibold">
              Formal Education
            </h2>
            <div className="border-l-2 border-zinc-800 pl-4 space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-white text-sm">{PROFILE_DATA.education.degree}</span>
                <span className="text-zinc-500">{PROFILE_DATA.education.period}</span>
              </div>
              <p className="text-xs text-zinc-300 font-light">
                {PROFILE_DATA.education.focus}
              </p>
            </div>
          </div>
        </div>

        {/* Footer in Modal */}
        <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-between items-center text-xs font-mono text-zinc-500">
          <span>Karan Dhanraj · Portfolio Reference</span>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
