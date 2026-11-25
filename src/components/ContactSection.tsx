import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function ContactSection() {
  const [senderName, setSenderName] = useState('');
  const [organization, setOrganization] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const copyValue = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setStatusMessage(`Direct contact: ${value}`);
    }
  };

  const handleComposeEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !message.trim()) {
      setStatusMessage('Please enter your name and message before sending.');
      return;
    }

    const emailSubject = subject.trim()
      ? subject.trim()
      : `Portfolio Inquiry from ${senderName.trim()}`;
    const bodyLines = [
      `Name: ${senderName.trim()}`,
      organization.trim() ? `Organization: ${organization.trim()}` : null,
      '',
      message.trim(),
    ]
      .filter((line): line is string => line !== null)
      .join('\n');

    const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(bodyLines)}`;

    window.location.href = mailtoHref;
    setStatusMessage('Your default email client has been opened with your prepared inquiry.');
  };

  const handleCopyInquiry = async () => {
    if (!senderName.trim() || !message.trim()) {
      setStatusMessage('Please enter your name and message to copy the inquiry brief.');
      return;
    }

    const formatted = [
      `To: ${PROFILE.name} <${PROFILE.email}>`,
      `From: ${senderName.trim()}${organization.trim() ? ` (${organization.trim()})` : ''}`,
      `Subject: ${subject.trim() || 'Infrastructure / Proposal Inquiry'}`,
      '',
      message.trim(),
    ].join('\n');

    try {
      await navigator.clipboard.writeText(formatted);
      setStatusMessage('Formatted inquiry brief copied to your clipboard.');
    } catch {
      setStatusMessage('Unable to access clipboard. Use "Open in Email App" instead.');
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Direct Contact Info */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-blue-700 tracking-wide">
              Contact &amp; Availability
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
              Available for Infrastructure Advisory, Tenders &amp; Engineering Roles
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Reach out directly for consultancy assignments, e-GP procurement leadership,
              feasibility studies, or full-time civil engineering opportunities.
            </p>

            <div className="mt-8 space-y-4">
              <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">Email Address</p>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="mt-0.5 block text-sm font-semibold text-slate-900 hover:text-blue-700 truncate"
                  >
                    {PROFILE.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyValue(PROFILE.email, 'email')}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors shrink-0"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">Phone / WhatsApp</p>
                  <a
                    href={`tel:${PROFILE.phone.replace(/[^+\d]/g, '')}`}
                    className="mt-0.5 block font-mono text-sm font-semibold text-slate-900 hover:text-blue-700 tabular-nums"
                  >
                    {PROFILE.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyValue(PROFILE.phone, 'phone')}
                  aria-label="Copy phone number"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors shrink-0"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <p className="text-xs text-slate-500">Location</p>
                <p className="mt-0.5 text-sm font-medium text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                  <span>{PROFILE.location}</span>
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.cvPdfUrl}
                download="CV_Iftakhar_Alam_Hemal.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white border border-slate-200 hover:border-slate-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Download Full CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Interactive Inquiry Composer */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">Send a Direct Inquiry</h3>
            <p className="mt-1 text-sm text-slate-600">
              Prepare an inquiry brief for project collaboration, proposal support, or recruitment.
            </p>

            <form onSubmit={handleComposeEmail} className="mt-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g., Md. Tanvir Rahman"
                    className="mt-1.5 w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-org"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Organization / Agency
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g., Engineering Consultancy / NGO"
                    className="mt-1.5 w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold text-slate-700"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g., Proposal Advisory / Feasibility Study Collaboration"
                  className="mt-1.5 w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share project details, timeline, or role requirements..."
                  className="mt-1.5 w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 resize-y"
                />
              </div>

              {statusMessage && (
                <p
                  role="status"
                  className="text-xs font-medium text-blue-800 bg-blue-50 border border-blue-200 rounded-lg px-4 py-2.5"
                >
                  {statusMessage}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Open in Email App</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyInquiry}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Copy Inquiry Brief</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
