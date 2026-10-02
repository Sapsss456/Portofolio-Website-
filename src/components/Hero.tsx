import React from 'react';
import { Language } from '../types';
import { ProjectVisual } from './ProjectVisual';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  language: Language;
  isDark: boolean;
  onExploreWork: () => void;
  onOpenFeaturedProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  isDark,
  onExploreWork,
  onOpenFeaturedProject,
}) => {
  return (
    <section className="relative min-h-screen pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col justify-between max-w-7xl mx-auto px-6 md:px-12">
      {/* Top Editorial Identity Header */}
      <div>
        <div
          className={`flex flex-col md:flex-row md:items-baseline md:justify-between border-b pb-6 mb-8 gap-4 ${
            isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
          }`}
        >
          <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#8C8880] uppercase">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
            />
            <span>
              {language === 'ja'
                ? 'プロダクトデザイン / クリエイティブ / 写真'
                : 'PRODUCT DESIGNER / CREATIVE / PHOTOGRAPHER'}
            </span>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-[#8C8880] tracking-wider">
            <span
              className="w-1.5 h-1.5 rounded-full animate-ping"
              style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
            />
            <span>TOKYO, JAPAN</span>
            <span>·</span>
            <span className="tabular-nums">35.6762° N, 139.6503° E</span>
          </div>
        </div>

        {/* Large Typography: ARI SAPUTRA */}
        <div className="space-y-4">
          <h1
            className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[-0.035em] leading-[0.95] ${
              isDark ? 'text-white' : 'text-[#141413]'
            }`}
          >
            ARI SAPUTRA
          </h1>

          <p
            className={`text-xl sm:text-2xl md:text-3xl font-light max-w-3xl pt-2 tracking-tight ${
              isDark ? 'text-[#B4B1A7]' : 'text-[#52504B]'
            }`}
          >
            {language === 'ja'
              ? 'プロダクトを設計し、一瞬を捉え、視覚の可能性を拡張する。'
              : 'Designing objects, capturing moments, and exploring visual ideas.'}
          </p>
        </div>
      </div>

      {/* Hero Curated Visual Container — Apple-like Product Showcase */}
      <div className="my-10 md:my-14">
        <div
          onClick={onOpenFeaturedProject}
          className={`group relative cursor-pointer border rounded-sm overflow-hidden transition-all duration-500 ${
            isDark
              ? 'border-[#2A2A2E] bg-[#141416] hover:border-[#D9383A]'
              : 'border-[#E8E6E0] bg-[#F4F3EE] hover:border-[#C73E3A]'
          }`}
        >
          <div className="h-[320px] sm:h-[420px] md:h-[500px] w-full">
            <ProjectVisual id="moduble" showOverlay={false} />
          </div>

          {/* Minimalist Editorial Floating Badge */}
          <div
            className={`p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t backdrop-blur-sm ${
              isDark
                ? 'border-[#2A2A2E] bg-[#111113]/95'
                : 'border-[#E8E6E0] bg-[#FBFBF9]/95'
            }`}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8C8880]">
                <span
                  className="font-semibold"
                  style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
                >
                  FEATURED OBJECT
                </span>
                <span>·</span>
                <span>2024 CAPSTONE</span>
              </div>
              <h2
                className={`text-lg md:text-xl font-medium tracking-tight transition-colors ${
                  isDark
                    ? 'text-white group-hover:text-white/80'
                    : 'text-[#141413] group-hover:text-[#696761]'
                }`}
              >
                MODUBLE — Modular Early Childhood Furniture System
              </h2>
            </div>
            <div
              className={`flex items-center gap-2 text-xs font-mono tracking-wider group-hover:translate-x-1 transition-transform ${
                isDark ? 'text-white group-hover:text-[#D9383A]' : 'text-[#141413] group-hover:text-[#C73E3A]'
              }`}
            >
              <span>{language === 'ja' ? '詳細を見る' : 'VIEW CASE STUDY'}</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Minimal Scroll Indicator */}
      <div
        className={`flex items-center justify-between pt-4 border-t text-xs font-mono text-[#8C8880] ${
          isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
        }`}
      >
        <button
          onClick={onExploreWork}
          className={`flex items-center gap-2 transition-colors group ${
            isDark ? 'hover:text-white' : 'hover:text-[#141413]'
          }`}
        >
          <ArrowDown
            size={14}
            className="group-hover:translate-y-0.5 transition-transform"
            style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
          />
          <span>{language === 'ja' ? 'スクロールして作品を見る' : 'SCROLL TO EXPLORE WORK'}</span>
        </button>

        <div className="hidden sm:block text-right">
          <span>TOKYO STUDIO ARCHIVE</span>
        </div>
      </div>
    </section>
  );
};
