import React, { useState } from 'react';
import { JOURNEY_DATA, JourneyMilestone } from '../../data/portfolioData.ts';
import { Briefcase, GraduationCap, Award, ExternalLink, CheckCircle } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const [selectedProof, setSelectedProof] = useState<JourneyMilestone | null>(null);

  const getIcon = (type: JourneyMilestone['type']) => {
    switch (type) {
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-[#38bdf8]" />;
      case 'Certification':
        return <Award className="w-4 h-4 text-emerald-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section
      id="journey"
      className="relative py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto border-t border-zinc-900 overflow-hidden"
    >
      {/* Section Header */}
      <div className="mb-16 sm:mb-20">
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-3">
          <span>05</span>
          <span aria-hidden="true" className="text-zinc-600">/</span>
          <span>Trajectory</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
          MY JOURNEY SO FAR.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl font-light">
          A continuous evolution through formal computer science engineering, self-directed research, and production AI system deployments.
        </p>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l border-zinc-800 space-y-12 sm:space-y-16 max-w-4xl">
        {JOURNEY_DATA.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline Node Reticle */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-6 h-6 rounded-full bg-[#050505] border-2 border-[#38bdf8] flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.5)] group-hover:scale-125 transition-transform duration-300">
              <div className="w-2 h-2 rounded-full bg-[#38bdf8]" />
            </div>

            {/* Milestone Card */}
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-850 bg-zinc-950/70 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-900 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800">
                    {getIcon(item.type)}
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#38bdf8]">
                    {item.year}
                  </span>
                  <span aria-hidden="true" className="text-zinc-700">·</span>
                  <span className="text-xs font-mono text-zinc-400">
                    {item.type}
                  </span>
                </div>

                {item.credentialUrl && (
                  <button
                    onClick={() => setSelectedProof(item)}
                    className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-[#38bdf8] transition-colors cursor-pointer"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                {item.title}
              </h3>
              <div className="text-xs sm:text-sm font-mono text-zinc-400 mt-1">
                {item.organization}
              </div>

              <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {item.description}
              </p>

              {/* Key Highlights */}
              <div className="mt-5 space-y-2 pt-4 border-t border-zinc-900">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                    <CheckCircle className="w-3.5 h-3.5 text-[#38bdf8] mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Credential Verification Modal */}
      {selectedProof && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-[#090b10] text-white shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
                <Award className="w-4 h-4" />
                <span>CREDENTIAL RECORD</span>
              </div>
              <button
                onClick={() => setSelectedProof(null)}
                className="text-xs font-mono text-zinc-400 hover:text-white cursor-pointer px-2 py-1 rounded bg-zinc-900 border border-zinc-800"
              >
                Close (ESC)
              </button>
            </div>

            <div className="mt-5">
              <h4 className="font-display font-bold text-xl text-white">
                {selectedProof.title}
              </h4>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Issued by {selectedProof.organization} · {selectedProof.year}
              </p>
              <div className="my-6 p-4 rounded-xl border border-zinc-800 bg-zinc-950 font-mono text-xs text-zinc-300 space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Status:</span>
                  <span className="text-emerald-400 font-semibold">Verified & Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Candidate:</span>
                  <span>Karan Dhanraj</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Focus:</span>
                  <span>Machine Learning, Neural Agents & System Design</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Academic and industry verification records are archived and accessible upon formal recruiter or client inquiry.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedProof(null)}
                className="px-5 py-2 rounded-lg bg-[#38bdf8] text-[#050505] text-xs font-mono font-semibold hover:bg-white transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
