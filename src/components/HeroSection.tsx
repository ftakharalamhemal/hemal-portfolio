import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin } from 'lucide-react';
import { HERO_SNAPSHOT, PROFILE } from '../data/portfolioData';

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="about" className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Typographic Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-blue-700">{PROFILE.roleLine}</p>

              <h1 className="mt-4 text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-slate-900 leading-[1.2] text-balance">
                {PROFILE.headline}
              </h1>

              <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl">
                {PROFILE.summary}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="#expertise"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  Explore Expertise
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                      <span>Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 text-slate-500" aria-hidden="true" />
                      <span>{PROFILE.email}</span>
                      <Copy className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                  {PROFILE.location}
                </span>
                <span aria-hidden="true" className="hidden sm:inline text-slate-300">·</span>
                <span className="font-mono tabular-nums">{PROFILE.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Portrait Card Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 flex flex-col bg-slate-100 border border-slate-200 rounded-xl overflow-hidden">
              <div className="relative flex-1 min-h-[320px] sm:min-h-[360px] bg-white flex items-center justify-center overflow-hidden">
                {!imgError ? (
                  <img
                    src={PROFILE.portraitUrl}
                    alt="Portrait of Iftakhar Alam Hemal, Civil Engineer"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-100">
                    <span className="font-display text-4xl font-bold text-slate-400">IAH</span>
                    <span className="mt-2 text-sm font-medium text-slate-600">{PROFILE.name}</span>
                  </div>
                )}
              </div>

              <div className="px-5 py-4 bg-slate-50 border-t border-slate-200">
                <p className="text-sm font-semibold text-slate-900">{PROFILE.currentRole}</p>
                <p className="mt-0.5 text-xs text-slate-600">{PROFILE.currentOrg}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Snapshot Strip */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-slate-200 rounded-xl bg-slate-50 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {HERO_SNAPSHOT.map((item) => (
            <div key={item.label} className="p-5 sm:p-6">
              <p className="font-mono text-xl font-medium text-slate-900 tabular-nums">
                {item.value}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-slate-800">{item.label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{item.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
