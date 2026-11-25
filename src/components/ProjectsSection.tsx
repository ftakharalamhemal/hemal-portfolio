import { useState } from 'react';
import {
  FEASIBILITY_STUDIES,
  PROPOSAL_SUBMISSIONS,
  ProjectCategory,
} from '../data/portfolioData';

const FILTER_TABS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'proposals', label: 'Proposal & EOI Submission' },
  { id: 'feasibility', label: 'Feasibility Study' },
];

interface SummaryBlock {
  id: Exclude<ProjectCategory, 'all' | 'rail'>;
  index: string;
  title: string;
  countHeadline: string;
  countSubtext: string;
  description: string;
  sectors: string[];
  authorities: string;
}

const PROJECT_SUMMARIES: SummaryBlock[] = [
  {
    id: 'proposals',
    index: '01',
    title: 'Proposal & EOI Submission',
    countHeadline: 'More than 30',
    countSubtext: 'EOI, RFP, Technical & Financial Proposals and e-GP Bids',
    description:
      'End-to-end preparation, compliance verification, and e-GP / donor submission for national ministries, multilateral agencies, and international NGOs across water, climate adaptation, healthcare, agriculture, blue economy, highways, and labor policy.',
    sectors: [
      'Water, Climate & Coastal Adaptation (MAR, PSF, RO, Watershed)',
      'Healthcare Infrastructure, Land & Highway Consultancy Bids',
      'Agriculture, Livestock & Blue-Economy Master Plans',
      'National Policy, Port HR Reform & Labor Assessments',
    ],
    authorities:
      'UNDP · ILO · ICIMOD · WaterAid · Planning Commission · IMED · PWD · RHD · DGHS · DAE · DLS · Department of Fisheries · Department of Youth Development · Mongla Port Authority · SAJIDA Foundation · Uttaran',
  },
  {
    id: 'feasibility',
    index: '02',
    title: 'Feasibility Study Projects',
    countHeadline: 'More than 25',
    countSubtext: 'Feasibility Studies, DPP Preparation, EIA & Technical Surveys',
    description:
      'Preparation and technical review of comprehensive feasibility studies, Development Project Proformas (DPP), Environmental Impact Assessments (EIA), masterplans, and baseline field surveys nationwide.',
    sectors: [
      'Medical College Hospitals, Specialized Institutes & 100–1000 Bed Facilities',
      'District & Central Jail Reconstructions and Government Quarters',
      'National Highways & SASEC Corridor Improvement Studies',
      'Satellite Townships, Training Academies, Day Care & Divisional Office Complexes',
    ],
    authorities:
      'DGHS & NAPD · Health Services Division & PWD · Roads and Highways Department (RHD) · Rajshahi City Corporation · Anti-Corruption Commission (ACC) · Department of Narcotics Control (DNC) · Department of Women Affairs (DWA)',
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory>('all');

  return (
    <section id="projects" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold text-blue-700 tracking-wide">
              Project Track Record
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
              Proposal Submissions &amp; Feasibility Study Portfolio
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter project categories"
            className="inline-flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start lg:self-auto shrink-0 overflow-x-auto max-w-full"
          >
            {FILTER_TABS.map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-700 ${
                    active
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* All Projects Tab: Executive Summary Overview Cards */}
        {filter === 'all' && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {PROJECT_SUMMARIES.map((block) => (
              <article
                key={block.id}
                className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-xs font-semibold text-blue-700 tabular-nums">
                      {block.index}. {block.title}
                    </p>
                  </div>

                  <div className="mt-4 pb-5 border-b border-slate-200">
                    <p className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 tabular-nums">
                      {block.countHeadline}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-600">
                      {block.countSubtext}
                    </p>
                  </div>

                  <p className="mt-5 text-sm text-slate-600 leading-relaxed">
                    {block.description}
                  </p>

                  <div className="mt-5 pt-5 border-t border-slate-200">
                    <h3 className="text-xs font-semibold text-slate-900 tracking-wide">
                      Key Project Sectors
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {block.sectors.map((sector) => (
                        <li
                          key={sector}
                          className="text-sm text-slate-700 flex items-start gap-2.5"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 w-1.5 h-1.5 rounded-sm bg-blue-700 shrink-0"
                          />
                          <span>{sector}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200">
                  <p className="text-xs font-semibold text-slate-900">
                    Key Clients, Ministries &amp; Donors
                  </p>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {block.authorities}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Proposal & EOI Submission Tab: Detailed Submission Register */}
        {filter === 'proposals' && (
          <div className="mt-10 bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Proposal &amp; EOI Submission Register
                </h3>
                <p className="mt-0.5 text-xs text-slate-600">
                  National &amp; Donor-Funded Tender Submissions
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[680px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600">
                    <th className="py-3.5 px-5 w-16">Sl.</th>
                    <th className="py-3.5 px-5">Project / Tender Assignment</th>
                    <th className="py-3.5 px-5 w-72">Authority / Funding Agency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                  {PROPOSAL_SUBMISSIONS.map((item) => (
                    <tr
                      key={item.index}
                      className="hover:bg-slate-50/70 transition-colors"
                    >
                      <td className="py-4 px-5 font-mono text-xs text-slate-500 tabular-nums align-top">
                        {item.index}.
                      </td>
                      <td className="py-4 px-5 align-top">
                        <p className="font-medium text-slate-900 leading-relaxed">
                          {item.title}
                        </p>
                        {item.packageRef && (
                          <p className="mt-1 font-mono text-xs text-slate-500 tabular-nums">
                            {item.packageRef}
                          </p>
                        )}
                      </td>
                      <td className="py-4 px-5 text-xs sm:text-sm font-medium text-slate-700 align-top">
                        {item.authority}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Feasibility Study Tab: Completed Study Register */}
        {filter === 'feasibility' && (
          <div className="mt-10 bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Feasibility Study Project Register
                </h3>
                <p className="mt-0.5 text-xs text-slate-600">
                  Feasibility Studies, DPP Preparation, EIA &amp; Baseline Surveys
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[780px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600">
                    <th className="py-3.5 px-5 w-16">Sl.</th>
                    <th className="py-3.5 px-5">Project Name</th>
                    <th className="py-3.5 px-5 w-60">Funding Agency / Client</th>
                    <th className="py-3.5 px-5 w-48">Duration &amp; Period</th>
                    <th className="py-3.5 px-5 w-44">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                  {FEASIBILITY_STUDIES.map((study) => (
                    <tr
                      key={study.index}
                      className="hover:bg-slate-50/70 transition-colors"
                    >
                      <td className="py-4 px-5 font-mono text-xs text-slate-500 tabular-nums align-top">
                        {study.index}.
                      </td>
                      <td className="py-4 px-5 font-medium text-slate-900 leading-relaxed align-top">
                        {study.title}
                      </td>
                      <td className="py-4 px-5 text-xs sm:text-sm text-slate-700 align-top">
                        {study.client}
                      </td>
                      <td className="py-4 px-5 align-top">
                        <p className="font-mono text-xs font-semibold text-slate-900 tabular-nums">
                          {study.duration}
                        </p>
                        <p className="mt-0.5 font-mono text-xs text-slate-500 tabular-nums">
                          {study.period}
                        </p>
                      </td>
                      <td className="py-4 px-5 text-xs sm:text-sm text-slate-600 align-top">
                        {study.location}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

