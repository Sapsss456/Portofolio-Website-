import React, { useState } from 'react';
import { MotionItem, Language } from '../types';
import { Play, Pause, Volume2, VolumeX, X, Film } from 'lucide-react';

interface MotionGalleryProps {
  motionWorks: MotionItem[];
  language: Language;
  isDark: boolean;
}

export const MotionGallery: React.FC<MotionGalleryProps> = ({
  motionWorks,
  language,
  isDark,
}) => {
  const [activeVideo, setActiveVideo] = useState<MotionItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(25);

  const renderCinematicVisual = (type: string) => {
    switch (type) {
      case 'kotabaru':
        return (
          <div className="relative w-full h-full bg-[#18201A] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F1710] via-[#1D2B1E] to-[#2E4230]" />
            <div className="absolute inset-0 opacity-30 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 600 350" fill="none">
                <path d="M 0 300 Q 150 180 300 240 T 600 200 L 600 350 L 0 350 Z" fill="#0C140D" />
                <path d="M 100 350 Q 250 120 450 190 T 600 140" stroke="#486B4D" strokeWidth="2" fill="none" opacity="0.6" />
                <circle cx="480" cy="100" r="40" fill="#E2E8D8" opacity="0.15" />
              </svg>
            </div>
            <div className="absolute top-4 left-4 font-mono text-[10px] text-white/40">
              2.39:1 CINEMATIC · WEST JAVA
            </div>
          </div>
        );

      case 'cleanup':
        return (
          <div className="relative w-full h-full bg-[#1E232B] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#12161C] via-[#1C2736] to-[#26374D]" />
            <div className="absolute inset-0 opacity-40 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 600 350" fill="none">
                <circle cx="300" cy="175" r="80" stroke="#60A5FA" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <path d="M 50 280 Q 200 160 380 220 T 580 180" stroke="#38BDF8" strokeWidth="3" fill="none" opacity="0.7" />
              </svg>
            </div>
            <div className="absolute top-4 left-4 font-mono text-[10px] text-white/40">
              1,200 VOLUNTEERS · BANDUNG
            </div>
          </div>
        );

      case 'tokyo-nocturne':
        return (
          <div className="relative w-full h-full bg-[#0D0E12] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#090A0E] via-[#121520] to-[#0A0B0F]" />
            <div className="absolute inset-0 opacity-50">
              <div className="absolute top-1/3 inset-x-0 h-1 bg-[#F59E0B]/30 blur-[2px]" />
              <div className="absolute top-1/2 inset-x-0 h-2 bg-[#06B6D4]/30 blur-[4px]" />
              <div className="absolute bottom-8 left-12 w-32 h-44 bg-[#EC4899]/20 blur-xl" />
            </div>
            <div className="absolute top-4 left-4 font-mono text-[10px] text-white/40">
              SHINJUKU / SHIBUYA · 35mm
            </div>
          </div>
        );

      case 'lenslines-manifesto':
      default:
        return (
          <div className="relative w-full h-full bg-[#121214] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F11] via-[#1B1B1E] to-[#0C0C0E]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-white/20" />
              </div>
            </div>
            <div className="absolute top-4 left-4 font-mono text-[10px] text-white/40">
              MANIFESTO · STUDIO DIRECTION
            </div>
          </div>
        );
    }
  };

  return (
    <section
      id="motion"
      className={`py-24 md:py-36 border-t max-w-7xl mx-auto px-6 md:px-12 ${
        isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
      }`}
    >
      {/* Editorial Header */}
      <div
        className={`flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b gap-4 ${
          isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
        }`}
      >
        <div>
          <span className="font-mono text-xs tracking-widest text-[#8C8880] uppercase block mb-2 flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
            />
            04 / CINEMATOGRAPHY
          </span>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-light tracking-tight ${
              isDark ? 'text-white' : 'text-[#141413]'
            }`}
          >
            {language === 'ja' ? '映像制作' : 'MOTION'}
          </h2>
          <p
            className={`text-lg md:text-xl font-light mt-2 tracking-tight ${
              isDark ? 'text-[#B4B1A7]' : 'text-[#52504B]'
            }`}
          >
            {language === 'ja'
              ? '建築記録、アフタームービー、ドローン空撮アーカイブ。'
              : 'SELECTED VIDEO AND DOCUMENTATION WORK.'}
          </p>
        </div>

        <p className="font-mono text-xs text-[#8C8880] max-w-sm">
          {language === 'ja'
            ? 'Kotabaru–Parahyanganの空間記録やWorld Cleanup Dayなどの公式記録映像。クリックでプレビュー再生。'
            : 'Event documentation, community after-movies, and aerial perspectives. Click thumbnail to initiate reel playback.'}
        </p>
      </div>

      {/* Motion Grid with Cinematic Thumbnails */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {motionWorks.map((motion) => (
          <div
            key={motion.id}
            onClick={() => {
              setActiveVideo(motion);
              setIsPlaying(true);
            }}
            className="group cursor-pointer flex flex-col space-y-4"
          >
            {/* Cinematic 16:9 Thumbnail Container */}
            <div
              className={`relative aspect-[16/9] w-full overflow-hidden rounded-sm border transition-all duration-500 ${
                isDark
                  ? 'border-[#2A2A2E] bg-[#121214] group-hover:border-[#D9383A]'
                  : 'border-[#E8E6E0] bg-[#121214] group-hover:border-[#C73E3A]'
              }`}
            >
              <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                {renderCinematicVisual(motion.motionVisualType)}
              </div>

              {/* Minimal Play Symbol on Hover */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                  }}
                >
                  <Play
                    size={18}
                    className="text-white fill-white ml-0.5"
                    style={{ color: isDark ? '#D9383A' : '#C73E3A', fill: isDark ? '#D9383A' : '#C73E3A' }}
                  />
                </div>
              </div>

              {/* Bottom Metadata Bar on Video Frame */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between text-xs font-mono text-white/80">
                <span className="tracking-wider">{motion.category}</span>
                <span className="tabular-nums">{motion.duration}</span>
              </div>
            </div>

            {/* Title & Context */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#8C8880] mb-1">
                <span>{motion.clientContext[language]}</span>
                <span>·</span>
                <span>{motion.year}</span>
              </div>
              <h3
                className={`text-lg md:text-xl font-medium tracking-tight transition-colors ${
                  isDark
                    ? 'text-white group-hover:text-[#D9383A]'
                    : 'text-[#141413] group-hover:text-[#C73E3A]'
                }`}
              >
                {motion.title[language]}
              </h3>
              <p
                className={`text-xs sm:text-sm font-light mt-1.5 leading-relaxed line-clamp-2 ${
                  isDark ? 'text-[#B4B1A7]' : 'text-[#52504B]'
                }`}
              >
                {motion.synopsis[language]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Preview Player Modal */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0E0E10]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#18181B] text-white border border-[#2A2A2E] rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Player Top Navigation */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2A2E] bg-[#121214]">
              <div className="flex items-center gap-3 font-mono text-xs text-white/70">
                <Film size={14} style={{ color: isDark ? '#D9383A' : '#C73E3A' }} />
                <span>{activeVideo.category}</span>
                <span>·</span>
                <span className="text-white font-medium">{activeVideo.title[language]}</span>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                aria-label="Close video player"
                className="text-white/60 hover:text-white p-1 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Screen Simulation */}
            <div className="relative aspect-[16/9] w-full bg-[#0A0A0C] flex items-center justify-center overflow-hidden">
              {renderCinematicVisual(activeVideo.motionVisualType)}

              {/* Timecode overlay */}
              <div className="absolute top-6 left-6 font-mono text-xs text-white/80 bg-black/60 px-2 py-1 rounded">
                TC 00:01:14:08
              </div>

              {/* Center Play/Pause button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/25 transition-colors"
              >
                {isPlaying ? (
                  <Pause size={20} className="text-white" />
                ) : (
                  <Play size={20} className="text-white fill-white ml-0.5" />
                )}
              </button>
            </div>

            {/* Custom Interactive Player Control Bar */}
            <div className="p-6 bg-[#141416] space-y-4">
              {/* Scrub line */}
              <div
                className="relative w-full h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  setProgress(Math.round(pos * 100));
                }}
              >
                <div
                  className="h-full transition-all duration-150"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: isDark ? '#D9383A' : '#C73E3A',
                  }}
                />
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-white/70">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-white transition-colors"
                  >
                    {isPlaying ? 'PAUSE' : 'PLAY'}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    <span>{isMuted ? 'UNMUTE' : 'MUTE'}</span>
                  </button>
                  <span className="tabular-nums">
                    01:14 / {activeVideo.duration}
                  </span>
                </div>

                <div className="hidden sm:block text-white/40">
                  ROLE: {activeVideo.role[language]}
                </div>
              </div>

              {/* Director Synopsis */}
              <div className="pt-4 border-t border-[#2A2A2E]">
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {activeVideo.synopsis[language]}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
