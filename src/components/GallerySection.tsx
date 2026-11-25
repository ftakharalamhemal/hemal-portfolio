import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import {
  GALLERY_PHOTOS,
  GalleryCategory,
} from '../data/portfolioData';

const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All Photos',
  'Field & Surveys',
  'Institutional Meetings',
  'Workshops',
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All Photos');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'All Photos') {
      return GALLERY_PHOTOS;
    }
    return GALLERY_PHOTOS.filter((photo) => photo.category === selectedCategory);
  }, [selectedCategory]);

  const activePhoto = activeIndex !== null ? filteredPhotos[activeIndex] ?? null : null;

  const handleClose = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null || filteredPhotos.length === 0) return prev;
      return (prev - 1 + filteredPhotos.length) % filteredPhotos.length;
    });
  }, [filteredPhotos.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null || filteredPhotos.length === 0) return prev;
      return (prev + 1) % filteredPhotos.length;
    });
  }, [filteredPhotos.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex, handleClose, handlePrev, handleNext]);

  const handleCategoryChange = (category: GalleryCategory) => {
    setSelectedCategory(category);
    setActiveIndex(null);
  };

  return (
    <section id="gallery" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-700 tracking-wide">
              Fieldwork, Stakeholder Consultations &amp; Workshops
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
              Project &amp; Field Gallery
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              On-site surveys, government &amp; port authority briefings, and national dissemination workshops across Bangladesh.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter gallery photographs by category"
            className="inline-flex flex-wrap gap-1 p-1 bg-slate-200/70 rounded-lg self-start lg:self-auto"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-700 ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => {
            const hasFailed = failedImages[photo.src];
            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => !hasFailed && setActiveIndex(idx)}
                aria-label={`Open photograph ${photo.index}: ${photo.caption}`}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden text-left hover:border-slate-300 transition-colors duration-150 flex flex-col focus-visible:outline-2 focus-visible:outline-blue-700"
              >
                <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                  {!hasFailed ? (
                    <>
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [photo.src]: true }))
                        }
                        className="w-full h-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.02]"
                      />
                      <span className="absolute top-2.5 right-2.5 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/75 text-white">
                        <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </>
                  ) : (
                    <div className="flex items-center justify-center w-full h-full p-4 text-xs text-slate-500 text-center">
                      {photo.caption}
                    </div>
                  )}
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between gap-2 w-full">
                  <div className="flex items-center gap-2 text-xs text-slate-500 min-w-0">
                    <span className="font-mono tabular-nums font-medium text-blue-700 shrink-0">
                      {photo.index}.
                    </span>
                    <span className="shrink-0">{photo.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{photo.location}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900 leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Gallery Lightbox */}
      {activePhoto && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.caption}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xs"
          onClick={handleClose}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-slate-200">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-mono tabular-nums text-blue-700 font-medium">
                    {String(activeIndex + 1).padStart(2, '0')} /{' '}
                    {String(filteredPhotos.length).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activePhoto.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate">{activePhoto.location}</span>
                </div>
                <p className="mt-0.5 text-sm font-semibold text-slate-900 truncate">
                  {activePhoto.caption}
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close photo viewer"
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-blue-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-slate-950 h-[65vh] sm:h-[72vh] flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full w-auto object-contain"
              />
            </div>

            <div className="flex items-center justify-between gap-4 px-5 py-3 bg-slate-50 border-t border-slate-200">
              <button
                type="button"
                onClick={handlePrev}
                disabled={filteredPhotos.length <= 1}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 disabled:opacity-40 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-700"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                <span>Previous</span>
              </button>

              <p className="hidden sm:block text-xs text-slate-500 truncate">
                {activePhoto.alt}
              </p>

              <button
                type="button"
                onClick={handleNext}
                disabled={filteredPhotos.length <= 1}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 disabled:opacity-40 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-700"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
