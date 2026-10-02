import React, { useState } from 'react';
import { PhotographyItem, PhotoCategory, Language } from '../types';
import { PhotoVisual } from './PhotoVisual';
import { X, Maximize2, Camera } from 'lucide-react';

interface PhotographyGalleryProps {
  photos: PhotographyItem[];
  language: Language;
  isDark: boolean;
}

export const PhotographyGallery: React.FC<PhotographyGalleryProps> = ({
  photos,
  language,
  isDark,
}) => {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotographyItem | null>(null);

  const categories: { id: PhotoCategory; label: { en: string; ja: string } }[] = [
    { id: 'all', label: { en: 'All Works', ja: 'すべて' } },
    { id: 'tokyo', label: { en: 'Tokyo', ja: '東京' } },
    { id: 'architecture', label: { en: 'Architecture', ja: '建築' } },
    { id: 'street', label: { en: 'Street', ja: '街頭' } },
    { id: 'events', label: { en: 'Events / Festival', ja: '祭典' } },
    { id: 'concerts', label: { en: 'Concerts', ja: 'ライブ' } },
    { id: 'studio', label: { en: 'Studio', ja: 'スタジオ' } },
    { id: 'people', label: { en: 'People', ja: '人物' } },
  ];

  const filteredPhotos =
    activeCategory === 'all'
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <section
      id="photography"
      className={`py-24 md:py-36 border-t max-w-7xl mx-auto px-6 md:px-12 ${
        isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
      }`}
    >
      {/* Editorial Header */}
      <div
        className={`flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b gap-4 ${
          isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
        }`}
      >
        <div>
          <span className="font-mono text-xs tracking-widest text-[#8C8880] uppercase block mb-2 flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
            />
            03 / VISUAL ARCHIVE
          </span>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-light tracking-tight ${
              isDark ? 'text-white' : 'text-[#141413]'
            }`}
          >
            {language === 'ja' ? '写真アーカイブ' : 'PHOTOGRAPHY'}
          </h2>
          <p
            className={`text-lg md:text-xl font-light mt-2 tracking-tight ${
              isDark ? 'text-[#B4B1A7]' : 'text-[#52504B]'
            }`}
          >
            {language === 'ja'
              ? '東京、そして越境の視覚記録。'
              : 'OBSERVATIONS FROM TOKYO AND BEYOND.'}
          </p>
        </div>

        {/* Quiet Category Filter (Text Buttons, Zero-Pill) */}
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`py-1.5 px-3 rounded-sm transition-colors ${
                activeCategory === cat.id
                  ? isDark
                    ? 'bg-white text-black font-semibold'
                    : 'bg-[#141413] text-[#FBFBF9] font-semibold'
                  : isDark
                  ? 'bg-[#18181C] text-[#8C8880] hover:text-white hover:bg-[#25252A]'
                  : 'bg-[#F2EFE9] text-[#696761] hover:text-[#141413] hover:bg-[#EAE6DE]'
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group cursor-pointer flex flex-col space-y-3"
          >
            {/* Visual Frame */}
            <div
              className={`relative overflow-hidden rounded-sm border transition-all duration-500 ${
                isDark
                  ? 'border-[#2A2A2E] bg-[#141416] group-hover:border-[#D9383A]'
                  : 'border-[#E8E6E0] bg-[#141416] group-hover:border-[#C73E3A]'
              }`}
            >
              <div className="transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                <PhotoVisual type={photo.visualType} aspect={photo.aspect} />
              </div>

              {/* Minimal Hover Indicator */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-md text-white p-1.5 rounded-sm">
                <Maximize2 size={13} />
              </div>
            </div>

            {/* Quiet Unboxed Caption (No pills) */}
            <div className="flex items-baseline justify-between pt-1">
              <h3
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-white group-hover:text-[#D9383A]'
                    : 'text-[#141413] group-hover:text-[#C73E3A]'
                }`}
              >
                {photo.title[language]}
              </h3>
              <span className="font-mono text-[11px] text-[#8C8880] tabular-nums">
                {photo.year}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#8C8880]">
              <span>{photo.location[language]}</span>
              <span>·</span>
              <span>{photo.exif.lens}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal with Camera EXIF & Observation Notes */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0E0E10]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#18181B] text-white border border-[#2A2A2E] rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2A2E] bg-[#121214]">
              <div className="flex items-center gap-3 font-mono text-xs text-white/60">
                <Camera size={14} style={{ color: isDark ? '#D9383A' : '#C73E3A' }} />
                <span>EXIF & FIELD OBSERVATION</span>
                <span>·</span>
                <span className="text-white/80">{selectedPhoto.location[language]}</span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo preview"
                className="text-white/60 hover:text-white p-1 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Media Body & Metadata Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 bg-[#0D0D0E] flex items-center justify-center p-4 sm:p-8">
                <div className="w-full max-h-[65vh] flex items-center justify-center">
                  <PhotoVisual
                    type={selectedPhoto.visualType}
                    aspect={selectedPhoto.aspect}
                    className="max-h-[60vh] object-contain shadow-2xl rounded-sm"
                  />
                </div>
              </div>

              {/* Sidebar Notes & Camera Specs */}
              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#2A2A2E] bg-[#161619]">
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-white/40 block mb-1">
                      TITLE
                    </span>
                    <h3 className="text-xl font-medium tracking-tight text-white">
                      {selectedPhoto.title[language]}
                    </h3>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-white/40 block mb-1">
                      OBSERVATION NOTE
                    </span>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                      {selectedPhoto.observation[language]}
                    </p>
                  </div>

                  {/* Camera EXIF Grid */}
                  <div className="pt-4 border-t border-[#2A2A2E]">
                    <span
                      className="font-mono text-[10px] tracking-widest uppercase block mb-3 font-semibold"
                      style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
                    >
                      CAMERA PARAMETERS
                    </span>
                    <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                      <div>
                        <span className="text-white/40 block text-[10px]">CAMERA</span>
                        <span className="text-white/90">{selectedPhoto.exif.camera}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[10px]">LENS</span>
                        <span className="text-white/90">{selectedPhoto.exif.lens}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[10px]">APERTURE</span>
                        <span className="text-white/90">{selectedPhoto.exif.aperture}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[10px]">SHUTTER</span>
                        <span className="text-white/90">{selectedPhoto.exif.shutter}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[10px]">ISO</span>
                        <span className="text-white/90">{selectedPhoto.exif.iso}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[10px]">YEAR</span>
                        <span className="text-white/90">{selectedPhoto.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#2A2A2E] mt-6 flex justify-between items-center text-xs font-mono text-white/40">
                  <span>ARI SAPUTRA ARCHIVE</span>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="hover:text-white transition-colors"
                  >
                    CLOSE [ESC]
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
