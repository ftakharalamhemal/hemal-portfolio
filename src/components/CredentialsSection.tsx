import { Award, BookOpen, Globe, Mail, Phone, ShieldCheck } from 'lucide-react';
import { CREDENTIALS, EDUCATION, LANGUAGES, REFERENCES } from '../data/portfolioData';

export default function CredentialsSection() {
  const memberships = CREDENTIALS.filter((c) => c.type === 'Membership');
  const trainings = CREDENTIALS.filter((c) => c.type === 'Training');

  return (
    <div id="credentials">
      {/* Dark Slate Credentials & Memberships Band */}
      <section className="py-16 lg:py-20 bg-slate-900 text-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-400 tracking-wide">
              Accreditations &amp; Training
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance">
              Professional Registrations &amp; Specialized Procurement Training
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Memberships Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 tracking-wide">
                <ShieldCheck className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <span>Professional Memberships</span>
              </div>

              {memberships.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-6"
                >
                  <p className="font-mono text-xs text-blue-300 tabular-nums">
                    {item.identifier}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs text-slate-300">{item.issuer}</p>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* Training Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 tracking-wide">
                <Award className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <span>Certified Trainings &amp; Workshops</span>
              </div>

              <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl divide-y divide-slate-700/80">
                {trainings.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs text-slate-300">{item.issuer}</span>
                      <span className="font-mono text-xs text-blue-300 tabular-nums">
                        {item.identifier}
                      </span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Education, Languages & References Band */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Academic Qualification Table */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wide">
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span>Academic Background</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Academic Qualifications
            </h2>

            <div className="mt-6 overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600">
                    <th className="py-3.5 px-5">Academic Degree</th>
                    <th className="py-3.5 px-5">Department / Stream</th>
                    <th className="py-3.5 px-5">University / Institute</th>
                    <th className="py-3.5 px-5">Result</th>
                    <th className="py-3.5 px-5 text-right">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                  {EDUCATION.map((edu) => (
                    <tr key={edu.degree} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-5 font-semibold text-slate-900">{edu.degree}</td>
                      <td className="py-4 px-5">{edu.department}</td>
                      <td className="py-4 px-5">{edu.institution}</td>
                      <td className="py-4 px-5 font-mono text-xs sm:text-sm tabular-nums text-slate-900">
                        {edu.result}
                      </td>
                      <td className="py-4 px-5 font-mono text-xs sm:text-sm tabular-nums text-right text-slate-600">
                        {edu.year}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Languages & References Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Languages */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wide">
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span>Communication</span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-slate-900">Language Proficiency</h3>

              <div className="mt-5 border border-slate-200 rounded-xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600">
                      <th className="py-3 px-4">Language</th>
                      <th className="py-3 px-4">Reading</th>
                      <th className="py-3 px-4">Writing</th>
                      <th className="py-3 px-4">Speaking</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                    {LANGUAGES.map((lang) => (
                      <tr key={lang.language}>
                        <td className="py-3.5 px-4 font-semibold text-slate-900">
                          {lang.language}
                        </td>
                        <td className="py-3.5 px-4">{lang.reading}</td>
                        <td className="py-3.5 px-4">{lang.writing}</td>
                        <td className="py-3.5 px-4">{lang.speaking}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* References */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold text-blue-700 tracking-wide">
                Endorsements
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">Professional References</h3>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {REFERENCES.map((ref) => (
                  <div
                    key={ref.email}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-base font-semibold text-slate-900">{ref.name}</h4>
                      <p className="mt-1 text-xs font-medium text-blue-700">{ref.designation}</p>
                      <p className="mt-1 text-xs text-slate-600">{ref.organization}</p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-700">
                      <a
                        href={`tel:${ref.phone.replace(/[^+\d]/g, '')}`}
                        className="flex items-center gap-2 hover:text-blue-700 transition-colors font-mono tabular-nums"
                      >
                        <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                        <span>{ref.phone}</span>
                      </a>
                      <a
                        href={`mailto:${ref.email}`}
                        className="flex items-center gap-2 hover:text-blue-700 transition-colors truncate"
                      >
                        <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                        <span className="truncate">{ref.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
