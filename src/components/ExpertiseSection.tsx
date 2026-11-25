import { EXPERTISE_AREAS } from '../data/portfolioData';

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-700 tracking-wide">
              Areas of Expertise
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
              Core Engineering, Procurement &amp; Field Practice
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Four interconnected disciplines guiding projects from opportunity identification through
            compliant tender submission and on-site verification.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {EXPERTISE_AREAS.map((area) => (
            <article
              key={area.index}
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 text-xs text-slate-500">
                  <span className="font-mono font-semibold text-blue-700 tabular-nums">
                    {area.index}.
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{area.subtitle}</span>
                </div>

                <h3 className="mt-2.5 text-xl font-bold text-slate-900">{area.title}</h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{area.description}</p>
              </div>

              <ul className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {area.capabilities.map((cap) => (
                  <li key={cap} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-blue-700 shrink-0"
                    />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
