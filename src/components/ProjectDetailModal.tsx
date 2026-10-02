import React, { useEffect } from 'react';
import { Project, Language } from '../types';
import { ProjectVisual } from './ProjectVisual';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  allProjects: Project[];
  language: Language;
  isDark: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  allProjects,
  language,
  isDark,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const cs = project.caseStudy;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto animate-in fade-in duration-300 ${
        isDark ? 'bg-[#0E0E10] text-[#F5F5F3]' : 'bg-[#FBFBF9] text-[#141413]'
      }`}
    >
      {/* Sticky Case Study Top Navigation */}
      <div
        className={`sticky top-0 z-30 backdrop-blur-md border-b px-6 md:px-12 py-4 flex items-center justify-between ${
          isDark
            ? 'bg-[#0E0E10]/95 border-[#2A2A2E]'
            : 'bg-[#FBFBF9]/95 border-[#E8E6E0]'
        }`}
      >
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-mono hover:opacity-60 transition-opacity"
        >
          <ArrowLeft size={14} style={{ color: isDark ? '#D9383A' : '#C73E3A' }} />
          <span>{language === 'ja' ? '作品一覧に戻る' : 'BACK TO INDEX'}</span>
        </button>

        <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-[#8C8880]">
          <span className={isDark ? 'text-white font-medium' : 'text-[#141413] font-medium'}>
            {project.title}
          </span>
          <span>·</span>
          <span>{project.category}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Case Study"
          className={`p-1.5 rounded-sm transition-colors ${
            isDark ? 'text-white hover:bg-white/10' : 'text-[#141413] hover:bg-[#EAE8E2]'
          }`}
        >
          <X size={18} />
        </button>
      </div>

      {/* Case Study Content Body */}
      <article className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Header Block */}
        <header
          className={`mb-14 border-b pb-10 ${
            isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
          }`}
        >
          <div className="flex items-center gap-3 text-xs font-mono text-[#8C8880] mb-4">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
            />
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
            <span>·</span>
            <span>TOKYO ARCHIVE</span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-light tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-[#141413]'
            }`}
          >
            {project.title}
          </h1>

          <p
            className={`text-xl md:text-2xl font-light max-w-3xl leading-relaxed ${
              isDark ? 'text-[#B4B1A7]' : 'text-[#52504B]'
            }`}
          >
            {project.tagline[language]}
          </p>

          <div className="mt-8 flex flex-wrap gap-2 text-xs font-mono">
            {project.disciplines.map((d, i) => (
              <span
                key={i}
                className={`py-1 px-2.5 rounded-sm ${
                  isDark ? 'bg-[#18181C] text-[#B4B1A7]' : 'bg-[#EFECE6] text-[#52504B]'
                }`}
              >
                {d}
              </span>
            ))}
            {project.tools.map((t, i) => (
              <span
                key={i}
                className={`py-1 px-2.5 border rounded-sm ${
                  isDark ? 'border-[#2A2A2E] text-white/60' : 'border-[#E0DED7] text-[#78756E]'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* Primary Case Visual Showcase */}
        <div
          className={`mb-20 border rounded-sm overflow-hidden ${
            isDark ? 'border-[#2A2A2E] bg-[#141416]' : 'border-[#E8E6E0] bg-[#F4F3EE]'
          }`}
        >
          <div className="h-[360px] sm:h-[500px] md:h-[620px] w-full">
            <ProjectVisual id={project.id} showOverlay={true} />
          </div>
        </div>

        {/* 6-Stage Japanese Studio Case Study Layout */}
        <div className="space-y-20 md:space-y-28">
          {/* 01 — Overview */}
          <section
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 border-t pt-10 ${
              isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
            }`}
          >
            <div className="md:col-span-4">
              <span
                className="font-mono text-xs block mb-1 font-semibold"
                style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
              >
                STAGE 01
              </span>
              <h2
                className={`text-2xl font-light tracking-tight ${
                  isDark ? 'text-white' : 'text-[#141413]'
                }`}
              >
                {language === 'ja' ? '01 — 概要' : '01 — Overview'}
              </h2>
            </div>
            <div className="md:col-span-8">
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-[#B4B1A7]' : 'text-[#3E3C38]'
                }`}
              >
                {cs.overview[language]}
              </p>
            </div>
          </section>

          {/* 02 — Problem */}
          <section
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 border-t pt-10 ${
              isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
            }`}
          >
            <div className="md:col-span-4">
              <span
                className="font-mono text-xs block mb-1 font-semibold"
                style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
              >
                STAGE 02
              </span>
              <h2
                className={`text-2xl font-light tracking-tight ${
                  isDark ? 'text-white' : 'text-[#141413]'
                }`}
              >
                {language === 'ja' ? '02 — 課題の抽出' : '02 — Problem'}
              </h2>
            </div>
            <div className="md:col-span-8">
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-[#B4B1A7]' : 'text-[#3E3C38]'
                }`}
              >
                {cs.problem[language]}
              </p>
            </div>
          </section>

          {/* 03 — Research */}
          <section
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 border-t pt-10 ${
              isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
            }`}
          >
            <div className="md:col-span-4">
              <span
                className="font-mono text-xs block mb-1 font-semibold"
                style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
              >
                STAGE 03
              </span>
              <h2
                className={`text-2xl font-light tracking-tight ${
                  isDark ? 'text-white' : 'text-[#141413]'
                }`}
              >
                {language === 'ja' ? '03 — 調査と計測' : '03 — Research'}
              </h2>
            </div>
            <div className="md:col-span-8">
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-[#B4B1A7]' : 'text-[#3E3C38]'
                }`}
              >
                {cs.research[language]}
              </p>
            </div>
          </section>

          {/* 04 — Concept */}
          <section
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 border-t pt-10 ${
              isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
            }`}
          >
            <div className="md:col-span-4">
              <span
                className="font-mono text-xs block mb-1 font-semibold"
                style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
              >
                STAGE 04
              </span>
              <h2
                className={`text-2xl font-light tracking-tight ${
                  isDark ? 'text-white' : 'text-[#141413]'
                }`}
              >
                {language === 'ja' ? '04 — コンセプト提案' : '04 — Concept'}
              </h2>
            </div>
            <div className="md:col-span-8">
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-[#B4B1A7]' : 'text-[#3E3C38]'
                }`}
              >
                {cs.concept[language]}
              </p>
            </div>
          </section>

          {/* 05 — Development */}
          <section
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 border-t pt-10 ${
              isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
            }`}
          >
            <div className="md:col-span-4">
              <span
                className="font-mono text-xs block mb-1 font-semibold"
                style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
              >
                STAGE 05
              </span>
              <h2
                className={`text-2xl font-light tracking-tight ${
                  isDark ? 'text-white' : 'text-[#141413]'
                }`}
              >
                {language === 'ja' ? '05 — 試作と検証' : '05 — Development'}
              </h2>
            </div>
            <div className="md:col-span-8">
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-[#B4B1A7]' : 'text-[#3E3C38]'
                }`}
              >
                {cs.development[language]}
              </p>
            </div>
          </section>

          {/* 06 — Final Design */}
          <section
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 border-t pt-10 ${
              isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
            }`}
          >
            <div className="md:col-span-4">
              <span
                className="font-mono text-xs block mb-1 font-semibold"
                style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
              >
                STAGE 06
              </span>
              <h2
                className={`text-2xl font-light tracking-tight ${
                  isDark ? 'text-white' : 'text-[#141413]'
                }`}
              >
                {language === 'ja' ? '06 — 最終仕様' : '06 — Final Design'}
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-[#B4B1A7]' : 'text-[#3E3C38]'
                }`}
              >
                {cs.finalDesign[language]}
              </p>

              {/* Key Innovation Highlights */}
              <div
                className={`p-6 border rounded-sm space-y-3 ${
                  isDark
                    ? 'bg-[#151518] border-[#2A2A2E]'
                    : 'bg-[#F4F3EE] border-[#E8E6E0]'
                }`}
              >
                <span
                  className="font-mono text-xs uppercase font-semibold block"
                  style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
                >
                  {language === 'ja' ? '設計上の要点' : 'DESIGN HIGHLIGHTS'}
                </span>
                <ul className="space-y-2 text-sm text-[#8C8880]">
                  {cs.highlights[language].map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 font-mono text-xs text-[#8C8880]">
                        0{idx + 1}.
                      </span>
                      <span className={isDark ? 'text-[#B4B1A7]' : 'text-[#4A4742]'}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Specifications Table */}
          <section
            className={`border-t pt-10 ${
              isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
            }`}
          >
            <span className="font-mono text-xs text-[#8C8880] block mb-2 uppercase">
              TECHNICAL SPECIFICATIONS
            </span>
            <h2
              className={`text-2xl font-light tracking-tight mb-8 ${
                isDark ? 'text-white' : 'text-[#141413]'
              }`}
            >
              {language === 'ja' ? '詳細設計仕様書' : 'Specifications & Parameters'}
            </h2>

            <div
              className={`border rounded-sm divide-y font-mono text-xs ${
                isDark
                  ? 'border-[#2A2A2E] divide-[#2A2A2E]'
                  : 'border-[#E8E6E0] divide-[#E8E6E0]'
              }`}
            >
              <div
                className={`grid grid-cols-1 sm:grid-cols-12 p-4 ${
                  isDark ? 'bg-[#111113]' : 'bg-[#FBFBF9]'
                }`}
              >
                <span className="sm:col-span-4 text-[#8C8880]">MATERIALS</span>
                <span className={`sm:col-span-8 font-medium ${isDark ? 'text-white' : 'text-[#141413]'}`}>
                  {cs.specifications.material[language]}
                </span>
              </div>
              <div
                className={`grid grid-cols-1 sm:grid-cols-12 p-4 ${
                  isDark ? 'bg-[#161619]' : 'bg-[#F8F7F3]'
                }`}
              >
                <span className="sm:col-span-4 text-[#8C8880]">DIMENSIONS</span>
                <span className={`sm:col-span-8 font-medium ${isDark ? 'text-white' : 'text-[#141413]'}`}>
                  {cs.specifications.dimensions}
                </span>
              </div>
              <div
                className={`grid grid-cols-1 sm:grid-cols-12 p-4 ${
                  isDark ? 'bg-[#111113]' : 'bg-[#FBFBF9]'
                }`}
              >
                <span className="sm:col-span-4 text-[#8C8880]">SOFTWARE / CAD</span>
                <span className={`sm:col-span-8 font-medium ${isDark ? 'text-white' : 'text-[#141413]'}`}>
                  {cs.specifications.software}
                </span>
              </div>
              <div
                className={`grid grid-cols-1 sm:grid-cols-12 p-4 ${
                  isDark ? 'bg-[#161619]' : 'bg-[#F8F7F3]'
                }`}
              >
                <span className="sm:col-span-4 text-[#8C8880]">MANUFACTURING PROCESS</span>
                <span className={`sm:col-span-8 font-medium ${isDark ? 'text-white' : 'text-[#141413]'}`}>
                  {cs.specifications.manufacturing[language]}
                </span>
              </div>
              <div
                className={`grid grid-cols-1 sm:grid-cols-12 p-4 ${
                  isDark ? 'bg-[#111113]' : 'bg-[#FBFBF9]'
                }`}
              >
                <span className="sm:col-span-4 text-[#8C8880]">VERIFICATION STATUS</span>
                <span className={`sm:col-span-8 font-medium ${isDark ? 'text-white' : 'text-[#141413]'}`}>
                  {cs.specifications.status[language]}
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Project Navigation (Prev / Next) */}
        <footer
          className={`mt-24 pt-12 border-t flex flex-col sm:flex-row justify-between items-center gap-6 ${
            isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
          }`}
        >
          <button
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center gap-3 text-left group hover:opacity-70 transition-opacity"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
              style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
            />
            <div>
              <span className="font-mono text-[10px] text-[#8C8880] block uppercase">PREVIOUS</span>
              <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-[#141413]'}`}>
                {prevProject.title}
              </span>
            </div>
          </button>

          <button
            onClick={onClose}
            className={`font-mono text-xs py-2 px-4 border rounded-sm transition-colors ${
              isDark
                ? 'border-[#333338] text-white/70 hover:text-white hover:border-white'
                : 'border-[#E0DED7] text-[#8C8880] hover:text-[#141413] hover:border-[#141413]'
            }`}
          >
            {language === 'ja' ? '一覧を閉じる' : 'CLOSE CASE STUDY'}
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center gap-3 text-right group hover:opacity-70 transition-opacity"
          >
            <div>
              <span className="font-mono text-[10px] text-[#8C8880] block uppercase">NEXT</span>
              <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-[#141413]'}`}>
                {nextProject.title}
              </span>
            </div>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
              style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
            />
          </button>
        </footer>
      </article>
    </div>
  );
};
