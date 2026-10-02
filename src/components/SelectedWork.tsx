import React, { useState } from 'react';
import { Project, Language } from '../types';
import { ProjectVisual } from './ProjectVisual';
import { ProjectCarousel } from './ProjectCarousel';
import { LayoutGrid, Sliders } from 'lucide-react';

interface SelectedWorkProps {
  projects: Project[];
  language: Language;
  isDark: boolean;
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  projects,
  language,
  isDark,
  onSelectProject,
}) => {
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  return (
    <section
      id="work"
      className={`py-24 md:py-36 border-t max-w-7xl mx-auto px-6 md:px-12 ${
        isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
      }`}
    >
      {/* Section Header */}
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
            02 / PORTFOLIO
          </span>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-light tracking-tight ${
              isDark ? 'text-white' : 'text-[#141413]'
            }`}
          >
            {language === 'ja' ? '主要作品' : 'SELECTED WORK'}
          </h2>
        </div>

        {/* View Mode Switcher: Carousel vs Grid */}
        <div className="flex items-center gap-2">
          <div
            className={`p-1 rounded-sm border flex items-center gap-1 font-mono text-xs ${
              isDark ? 'border-[#2A2A2E] bg-[#161619]' : 'border-[#E0DED7] bg-[#F4F3EE]'
            }`}
          >
            <button
              onClick={() => setViewMode('carousel')}
              aria-label="Carousel presentation view"
              className={`flex items-center gap-1.5 py-1 px-2.5 rounded-sm transition-colors ${
                viewMode === 'carousel'
                  ? isDark
                    ? 'bg-[#2A2A30] text-white font-medium shadow-sm'
                    : 'bg-white text-[#141413] font-medium shadow-sm'
                  : 'text-[#8C8880] hover:text-[#141413] dark:hover:text-white'
              }`}
            >
              <Sliders size={13} style={{ color: viewMode === 'carousel' ? (isDark ? '#D9383A' : '#C73E3A') : undefined }} />
              <span>CAROUSEL</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              aria-label="Editorial grid view"
              className={`flex items-center gap-1.5 py-1 px-2.5 rounded-sm transition-colors ${
                viewMode === 'grid'
                  ? isDark
                    ? 'bg-[#2A2A30] text-white font-medium shadow-sm'
                    : 'bg-white text-[#141413] font-medium shadow-sm'
                  : 'text-[#8C8880] hover:text-[#141413] dark:hover:text-white'
              }`}
            >
              <LayoutGrid size={13} style={{ color: viewMode === 'grid' ? (isDark ? '#D9383A' : '#C73E3A') : undefined }} />
              <span>GRID</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Carousel Mode */}
      {viewMode === 'carousel' && (
        <div className="mb-16">
          <ProjectCarousel
            projects={projects}
            language={language}
            isDark={isDark}
            onSelectProject={onSelectProject}
          />
        </div>
      )}

      {/* Editorial Varied Project Layout (Visible in Grid mode, or toggled) */}
      {viewMode === 'grid' && (
        <div className="space-y-16 md:space-y-24 animate-in fade-in duration-300">
          {/* Project 1: MODUBLE (Full-Width Showcase) */}
          {projects.find((p) => p.id === 'moduble') && (() => {
            const moduble = projects.find((p) => p.id === 'moduble')!;
            return (
              <div
                key={moduble.id}
                onClick={() => onSelectProject(moduble)}
                className={`group cursor-pointer block border rounded-sm overflow-hidden transition-all duration-500 ${
                  isDark
                    ? 'border-[#2A2A2E] bg-[#161619] hover:border-[#D9383A]'
                    : 'border-[#E8E6E0] bg-[#F4F3EE] hover:border-[#C73E3A]'
                }`}
              >
                <div className="h-[360px] sm:h-[480px] md:h-[560px] w-full">
                  <ProjectVisual id="moduble" />
                </div>
                <div
                  className={`p-8 md:p-10 border-t ${
                    isDark ? 'bg-[#111113] border-[#2A2A2E]' : 'bg-[#FBFBF9] border-[#E8E6E0]'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                    <div className="md:col-span-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#8C8880] mb-2">
                        <span>{moduble.category}</span>
                        <span>·</span>
                        <span>{moduble.year}</span>
                      </div>
                      <h3
                        className={`text-2xl md:text-3xl font-medium tracking-tight transition-colors ${
                          isDark
                            ? 'text-white group-hover:text-white/80'
                            : 'text-[#141413] group-hover:text-[#696761]'
                        }`}
                      >
                        {moduble.title}
                      </h3>
                      <p className="text-xs font-mono text-[#8C8880] mt-1">
                        {moduble.japaneseTitle}
                      </p>
                    </div>

                    <div className="md:col-span-6">
                      <p
                        className={`text-sm md:text-base font-normal leading-relaxed ${
                          isDark ? 'text-[#B4B1A7]' : 'text-[#52504B]'
                        }`}
                      >
                        {moduble.shortDescription[language]}
                      </p>
                    </div>

                    <div className="md:col-span-2 flex md:justify-end items-center">
                      <span
                        className={`text-xs font-mono group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-1.5 ${
                          isDark ? 'text-[#D9383A]' : 'text-[#C73E3A]'
                        }`}
                      >
                        {language === 'ja' ? 'ケーススタディ' : 'VIEW CASE STUDY'} →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* 2-Column Grid: L-WORK DESK + RENEWA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* L-WORK DESK */}
            {projects.find((p) => p.id === 'l-work-desk') && (() => {
              const lwork = projects.find((p) => p.id === 'l-work-desk')!;
              return (
                <div
                  key={lwork.id}
                  onClick={() => onSelectProject(lwork)}
                  className={`group cursor-pointer flex flex-col justify-between border rounded-sm overflow-hidden transition-all duration-500 ${
                    isDark
                      ? 'border-[#2A2A2E] bg-[#161619] hover:border-[#D9383A]'
                      : 'border-[#E8E6E0] bg-[#18181A] hover:border-[#C73E3A]'
                  }`}
                >
                  <div className="h-[320px] md:h-[380px] w-full">
                    <ProjectVisual id="l-work-desk" />
                  </div>
                  <div
                    className={`p-8 border-t flex-1 flex flex-col justify-between ${
                      isDark ? 'bg-[#111113] border-[#2A2A2E]' : 'bg-[#FBFBF9] border-[#E8E6E0]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#8C8880] mb-2">
                        <span>{lwork.category}</span>
                        <span>·</span>
                        <span>{lwork.year}</span>
                      </div>
                      <h3
                        className={`text-2xl font-medium tracking-tight mb-3 transition-colors ${
                          isDark
                            ? 'text-white group-hover:text-white/80'
                            : 'text-[#141413] group-hover:text-[#696761]'
                        }`}
                      >
                        {lwork.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed mb-6 ${
                          isDark ? 'text-[#B4B1A7]' : 'text-[#52504B]'
                        }`}
                      >
                        {lwork.shortDescription[language]}
                      </p>
                    </div>

                    <div
                      className={`pt-4 border-t flex items-center justify-between text-xs font-mono ${
                        isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
                      }`}
                    >
                      <span className="text-[#8C8880]">STEEL & SOLID ASH</span>
                      <span
                        className={`group-hover:translate-x-1 transition-transform ${
                          isDark ? 'text-[#D9383A]' : 'text-[#C73E3A]'
                        }`}
                      >
                        {language === 'ja' ? '詳細を見る' : 'EXPLORE'} →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* RENEWA */}
            {projects.find((p) => p.id === 'renewa') && (() => {
              const renewa = projects.find((p) => p.id === 'renewa')!;
              return (
                <div
                  key={renewa.id}
                  onClick={() => onSelectProject(renewa)}
                  className={`group cursor-pointer flex flex-col justify-between border rounded-sm overflow-hidden transition-all duration-500 ${
                    isDark
                      ? 'border-[#2A2A2E] bg-[#161619] hover:border-[#D9383A]'
                      : 'border-[#E8E6E0] bg-[#ECE8E1] hover:border-[#C73E3A]'
                  }`}
                >
                  <div className="h-[320px] md:h-[380px] w-full">
                    <ProjectVisual id="renewa" />
                  </div>
                  <div
                    className={`p-8 border-t flex-1 flex flex-col justify-between ${
                      isDark ? 'bg-[#111113] border-[#2A2A2E]' : 'bg-[#FBFBF9] border-[#E8E6E0]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#8C8880] mb-2">
                        <span>{renewa.category}</span>
                        <span>·</span>
                        <span>{renewa.year}</span>
                      </div>
                      <h3
                        className={`text-2xl font-medium tracking-tight mb-3 transition-colors ${
                          isDark
                            ? 'text-white group-hover:text-white/80'
                            : 'text-[#141413] group-hover:text-[#696761]'
                        }`}
                      >
                        {renewa.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed mb-6 ${
                          isDark ? 'text-[#B4B1A7]' : 'text-[#52504B]'
                        }`}
                      >
                        {renewa.shortDescription[language]}
                      </p>
                    </div>

                    <div
                      className={`pt-4 border-t flex items-center justify-between text-xs font-mono ${
                        isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
                      }`}
                    >
                      <span className="text-[#8C8880]">100% RECYCLED HDPE</span>
                      <span
                        className={`group-hover:translate-x-1 transition-transform ${
                          isDark ? 'text-[#D9383A]' : 'text-[#C73E3A]'
                        }`}
                      >
                        {language === 'ja' ? '詳細を見る' : 'EXPLORE'} →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Project 4: LENS&LINES */}
          {projects.find((p) => p.id === 'lens-and-lines') && (() => {
            const lenslines = projects.find((p) => p.id === 'lens-and-lines')!;
            return (
              <div
                key={lenslines.id}
                onClick={() => onSelectProject(lenslines)}
                className={`group cursor-pointer grid grid-cols-1 lg:grid-cols-12 border rounded-sm overflow-hidden transition-all duration-500 ${
                  isDark
                    ? 'border-[#2A2A2E] bg-[#121214] hover:border-[#D9383A]'
                    : 'border-[#E8E6E0] bg-[#121214] hover:border-[#C73E3A]'
                }`}
              >
                <div className="lg:col-span-7 h-[300px] sm:h-[360px] lg:h-[420px]">
                  <ProjectVisual id="lens-and-lines" />
                </div>
                <div
                  className={`lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l ${
                    isDark ? 'bg-[#111113] border-[#2A2A2E]' : 'bg-[#FBFBF9] border-[#E8E6E0]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#8C8880] mb-3">
                      <span>{lenslines.category}</span>
                      <span>·</span>
                      <span>{lenslines.year}</span>
                    </div>
                    <h3
                      className={`text-2xl md:text-3xl font-medium tracking-tight mb-4 transition-colors ${
                        isDark ? 'text-white group-hover:text-white/80' : 'text-[#141413] group-hover:text-[#696761]'
                      }`}
                    >
                      {lenslines.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed mb-6 ${
                        isDark ? 'text-[#B4B1A7]' : 'text-[#52504B]'
                      }`}
                    >
                      {lenslines.shortDescription[language]}
                    </p>
                  </div>

                  <div
                    className={`pt-6 border-t flex items-center justify-between text-xs font-mono ${
                      isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
                    }`}
                  >
                    <span className="text-[#8C8880]">COLLABORATIVE STUDIO</span>
                    <span
                      className={`group-hover:translate-x-1.5 transition-transform ${
                        isDark ? 'text-[#D9383A]' : 'text-[#C73E3A]'
                      }`}
                    >
                      {language === 'ja' ? 'スタジオ記録' : 'VIEW SYSTEM'} →
                    </span>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </section>
  );
};
