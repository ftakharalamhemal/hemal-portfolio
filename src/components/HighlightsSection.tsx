import { useEffect, useState } from 'react';
import { Calendar, Expand, MapPin, X } from 'lucide-react';
import { EVENT_HIGHLIGHTS, EventPhoto } from '../data/portfolioData';

export default function HighlightsSection() {
  const [activePhoto, setActivePhoto] = useState<EventPhoto | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePhoto(null);
      }
    };
    if (activePhoto) {
      window.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activePhoto]);

  return (
    <section id="highlights" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-blue-700 tracking-wide">
            Institutional Representation &amp; Workshops
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
            Industry Engagement &amp; Technical Forums
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {EVENT_HIGHLIGHTS.map((event, idx) => {
            const allLandscape = event.photos.every((p) => p.aspect === 'landscape');
            const someLandscape = event.photos.some((p) => p.aspect === 'landscape');
            const isFullSpan =
              EVENT_HIGHLIGHTS.length % 2 === 1 && idx === EVENT_HIGHLIGHTS.length - 1;
            const photoAspectClass = allLandscape
              ? 'aspect-video'
              : someLandscape
              ? 'aspect-[4/3]'
              : 'aspect-[3/4]';
            return (
              <article
                key={event.id}
                className={`bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between ${
                  isFullSpan ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                    <span className="font-medium text-blue-700">{event.kicker}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1 font-mono tabular-nums">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                      {event.date}
                    </span>
                  </div>

                  <h3 className="mt-2.5 text-xl font-bold text-slate-900 leading-snug text-balance">
                    {event.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-600 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                    <span>{event.venue}</span>
                  </p>

                  <div className="mt-4 space-y-3 text-sm text-slate-700 leading-relaxed">
                    {event.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  <div
                    className={`grid gap-4 ${
                      someLandscape ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2'
                    }`}
                  >
                    {event.photos.map((photo) => {
                      const hasFailed = failedImages[photo.src];
                      const isLandscape = photo.aspect === 'landscape';
                      return (
                        <button
                          key={photo.src}
                          type="button"
                          onClick={() => !hasFailed && setActivePhoto(photo)}
                          aria-label={`View larger photo: ${photo.caption}`}
                          className={`group relative w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-100 text-left focus-visible:outline-2 focus-visible:outline-blue-700 ${photoAspectClass}`}
                        >
                          {!hasFailed ? (
                            <>
                              <img
                                src={photo.src}
                                alt={photo.alt}
                                referrerPolicy="no-referrer"
                                onError={() =>
                                  setFailedImages((prev) => ({ ...prev, [photo.src]: true }))
                                }
                                className={`w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.02] ${
                                  isLandscape ? 'object-center' : 'object-top'
                                }`}
                              />
                              <span className="absolute top-2.5 right-2.5 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/75 text-white">
                                <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                              </span>
                            </>
                          ) : (
                            <span className="flex items-center justify-center w-full h-full p-4 text-xs text-slate-500">
                              {photo.caption}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-3">
                    {event.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-[11px] text-slate-500">{stat.label}</p>
                        <p className="mt-0.5 font-mono text-xs font-semibold text-slate-900 tabular-nums">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Photo Lightbox */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.caption}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-xs"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-slate-200">
              <p className="text-xs sm:text-sm font-medium text-slate-800 truncate">
                {activePhoto.caption}
              </p>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                aria-label="Close photo viewer"
                className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-slate-100 max-h-[78vh] flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                referrerPolicy="no-referrer"
                className="max-h-[78vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
