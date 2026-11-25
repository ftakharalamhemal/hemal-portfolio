import { useState } from 'react';
import { Briefcase, Building2, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function ExperienceSection() {
  const [selectedId, setSelectedId] = useState<string>(EXPERIENCES[0].id);
  const [viewMode, setViewMode] = useState<'focused' | 'all'>('focused');

  const activeRole = EXPERIENCES.find((item) => item.id === selectedId) ?? EXPERIENCES[0];

  return (
    <section id="experience" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-700 tracking-wide">
              Career Progression
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
              Professional Experience &amp; Key Responsibilities
            </h2>
          </div>

          <div
            role="group"
            aria-label="Experience view mode"
            className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto"
          >
            <button
              type="button"
              onClick={() => setViewMode('focused')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 ${
                viewMode === 'focused'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Role Inspector
            </button>
            <button
              type="button"
              onClick={() => setViewMode('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 ${
                viewMode === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Full Timeline
            </button>
          </div>
        </div>

        {viewMode === 'focused' ? (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Role Selector Rail */}
            <div className="lg:col-span-5 space-y-2">
              {EXPERIENCES.map((exp) => {
                const isActive = exp.id === activeRole.id;
                return (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => setSelectedId(exp.id)}
                    className={`w-full text-left p-5 rounded-xl border transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-blue-700 ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-900 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <p
                      className={`font-mono text-xs tabular-nums ${
                        isActive ? 'text-blue-300' : 'text-slate-500'
                      }`}
                    >
                      {exp.duration}
                    </p>
                    <p className="mt-1.5 text-base font-semibold">{exp.designation}</p>
                    <p
                      className={`mt-1 text-xs ${
                        isActive ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {exp.organization}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Role Detail Dossier */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                <span>{activeRole.focus}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{activeRole.duration}</span>
                <span aria-hidden="true">·</span>
                <span>{activeRole.location}</span>
              </div>

              <h3 className="mt-3 text-xl sm:text-2xl font-bold text-slate-900">
                {activeRole.designation}
              </h3>
              <p className="mt-1 text-sm font-medium text-blue-700">
                {activeRole.organization}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="text-xs font-semibold text-slate-900 tracking-wide">
                  Core Mandate &amp; Deliverables
                </h4>
                <ul className="mt-4 space-y-3">
                  {activeRole.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-700 leading-relaxed flex items-start gap-3"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 w-1.5 h-1.5 rounded-sm bg-blue-700 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-10 space-y-6">
            {EXPERIENCES.map((exp) => (
              <article
                key={exp.id}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-slate-200">
                  <div>
                    <p className="text-xs font-medium text-blue-700">{exp.focus}</p>
                    <h3 className="mt-1 text-xl font-bold text-slate-900">{exp.designation}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-slate-400" aria-hidden="true" />
                        {exp.organization}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400" aria-hidden="true" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-600 tabular-nums shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
                  {exp.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-700 leading-relaxed flex items-start gap-2.5"
                    >
                      <Briefcase className="w-3.5 h-3.5 mt-1 text-slate-400 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
