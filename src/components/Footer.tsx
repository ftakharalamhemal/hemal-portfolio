import { PROFILE } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          <p className="font-semibold text-slate-800">{PROFILE.name}</p>
          <p className="mt-0.5">
            Civil Engineer <span aria-hidden="true">·</span> Dhaka, Bangladesh{' '}
            <span aria-hidden="true">·</span> &copy; {currentYear}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-slate-600 font-medium">
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hover:text-slate-900 transition-colors"
          >
            Email
          </a>
          <a
            href={PROFILE.cvPdfUrl}
            download="CV_Iftakhar_Alam_Hemal.pdf"
            className="hover:text-slate-900 transition-colors"
          >
            CV (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
}
