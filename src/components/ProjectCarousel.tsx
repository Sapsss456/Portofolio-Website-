import React, { useState, useEffect, useRef } from 'react';
import { Project, Language } from '../types';
import { ProjectVisual } from './ProjectVisual';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

interface ProjectCarouselProps {
  projects: Project[];
  language: Language;
  isDark: boolean;
  onSelectProject: (project: Project) => void;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
  language,
  isDark,
  onSelectProject,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentProject = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [projects.length]);

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full rounded-sm border transition-all duration-300 overflow-hidden ${
        isDark
          ? 'bg-[#141416] border-[#2A2A2E]'
          : 'bg-[#F4F3EE] border-[#E8E6E0]'
      }`}
    >
      {/* Top Header of Carousel: Slide Index & Controls */}
      <div
        className={`px-6 md:px-8 py-4 flex items-center justify-between border-b ${
          isDark
            ? 'bg-[#18181C] border-[#2A2A2E]'
            : 'bg-[#FBFBF9] border-[#E8E6E0]'
        }`}
      >
        <div className="flex items-center gap-3">
          {/* Japanese vermilion red stamp icon */}
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
          />
          <span className="font-mono text-xs tracking-wider text-[#8C8880]">
            FEATURED CAROUSEL · {language === 'ja' ? '作品スライド' : 'CURATED SLIDES'}
          </span>
        </div>

        {/* Counter and Arrows */}
        <div className="flex items-center gap-4">
          <div className="font-mono text-xs tabular-nums text-[#8C8880]">
            <span className={isDark ? 'text-white font-medium' : 'text-[#141413] font-medium'}>
              0{currentIndex + 1}
            </span>
            <span className="mx-1.5 opacity-40">/</span>
            <span>0{projects.length}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className={`p-2 rounded-sm border transition-colors ${
                isDark
                  ? 'border-[#333338] text-white/70 hover:text-white hover:border-[#D9383A] hover:bg-white/5'
                  : 'border-[#E0DED7] text-[#696761] hover:text-[#141413] hover:border-[#C73E3A] hover:bg-white'
              }`}
            >
              <ArrowLeft size={14} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className={`p-2 rounded-sm border transition-colors ${
                isDark
                  ? 'border-[#333338] text-white/70 hover:text-white hover:border-[#D9383A] hover:bg-white/5'
                  : 'border-[#E0DED7] text-[#696761] hover:text-[#141413] hover:border-[#C73E3A] hover:bg-white'
              }`}
            >
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Slide Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Visual Showcase (7 Cols) */}
        <div
          onClick={() => onSelectProject(currentProject)}
          className="lg:col-span-7 h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px] cursor-pointer group relative overflow-hidden"
        >
          <ProjectVisual id={currentProject.id} showOverlay={false} />

          {/* Quick Click Hint Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-sm text-xs font-mono flex items-center gap-1.5">
              <span>{language === 'ja' ? 'ケーススタディを開く' : 'OPEN CASE STUDY'}</span>
              <ArrowUpRight size={13} />
            </div>
          </div>
        </div>

        {/* Info & Story Panel (5 Cols) */}
        <div
          className={`lg:col-span-5 p-8 md:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l ${
            isDark
              ? 'bg-[#111113] border-[#2A2A2E]'
              : 'bg-[#FBFBF9] border-[#E8E6E0]'
          }`}
        >
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#8C8880] mb-2">
                <span className="uppercase">{currentProject.category}</span>
                <span>·</span>
                <span className="tabular-nums">{currentProject.year}</span>
              </div>

              <h3
                className={`text-3xl sm:text-4xl font-light tracking-tight mb-2 ${
                  isDark ? 'text-white' : 'text-[#141413]'
                }`}
              >
                {currentProject.title}
              </h3>

              <p className="font-mono text-xs text-[#8C8880]">
                {currentProject.japaneseTitle}
              </p>
            </div>

            <p
              className={`text-sm sm:text-base leading-relaxed font-light ${
                isDark ? 'text-[#B4B1A7]' : 'text-[#4A4742]'
              }`}
            >
              {currentProject.shortDescription[language]}
            </p>

            {/* Quick Specs Snippet */}
            <div
              className={`p-4 rounded-sm border font-mono text-xs space-y-2 ${
                isDark
                  ? 'bg-[#18181C] border-[#2A2A2E] text-[#9E9B93]'
                  : 'bg-[#F5F4EE] border-[#E8E6E0] text-[#696761]'
              }`}
            >
              <div className="flex justify-between">
                <span className="text-[#8C8880]">MAT:</span>
                <span className={isDark ? 'text-white/90' : 'text-[#141413]'}>
                  {currentProject.caseStudy.specifications.material[language].split(',')[0]}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C8880]">DIM:</span>
                <span className={isDark ? 'text-white/90' : 'text-[#141413]'}>
                  {currentProject.caseStudy.specifications.dimensions}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C8880]">CAD:</span>
                <span className={isDark ? 'text-white/90' : 'text-[#141413]'}>
                  {currentProject.caseStudy.specifications.software}
                </span>
              </div>
            </div>
          </div>

          {/* Action Footer & Slide Dots */}
          <div className="pt-8 border-t border-[#E8E6E0] dark:border-[#2A2A2E] flex items-center justify-between">
            {/* Slide Dots */}
            <div className="flex items-center gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? `w-6 ${isDark ? 'bg-[#D9383A]' : 'bg-[#C73E3A]'}`
                      : `w-1.5 ${isDark ? 'bg-white/20 hover:bg-white/40' : 'bg-black/20 hover:bg-black/40'}`
                  }`}
                />
              ))}
            </div>

            {/* View Full Case Study CTA */}
            <button
              onClick={() => onSelectProject(currentProject)}
              className={`inline-flex items-center gap-2 text-xs font-mono py-2 px-4 rounded-sm transition-colors border ${
                isDark
                  ? 'border-white/20 text-white hover:border-[#D9383A] hover:text-[#D9383A]'
                  : 'border-[#141413] text-[#141413] hover:border-[#C73E3A] hover:text-[#C73E3A]'
              }`}
            >
              <span>{language === 'ja' ? '設計書を見る' : 'CASE STUDY'}</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
