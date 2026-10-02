import React from 'react';
import { Language } from '../types';

interface IntroductionProps {
  language: Language;
  isDark: boolean;
}

export const Introduction: React.FC<IntroductionProps> = ({ language, isDark }) => {
  return (
    <section
      className={`py-24 md:py-36 border-t max-w-7xl mx-auto px-6 md:px-12 ${
        isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left Editorial Numbering & Section Tag */}
        <div className="lg:col-span-3">
          <span className="font-mono text-xs tracking-widest text-[#8C8880] uppercase block mb-2 flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
            />
            01 / INTRODUCTION
          </span>
          <span className="text-xs font-mono text-[#8C8880] block">
            {language === 'ja' ? '理念と探求' : 'PHILOSOPHY & PRACTICE'}
          </span>
        </div>

        {/* Center / Right Content */}
        <div className="lg:col-span-9 space-y-12">
          {/* Large Statement */}
          <div className="space-y-2">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.1] ${
                isDark ? 'text-white' : 'text-[#141413]'
              }`}
            >
              {language === 'ja' ? (
                <>
                  <span>形を設計する。</span>
                  <br />
                  <span>時間を記録する。</span>
                  <br />
                  <span style={{ color: isDark ? '#D9383A' : '#C73E3A' }}>学び続ける。</span>
                </>
              ) : (
                <>
                  <span>I design objects.</span>
                  <br />
                  <span>I capture moments.</span>
                  <br />
                  <span style={{ color: isDark ? '#D9383A' : '#C73E3A' }}>I keep learning.</span>
                </>
              )}
            </h2>
          </div>

          {/* Short Bio Paragraph with Generous Whitespace */}
          <div
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t ${
              isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
            }`}
          >
            <div className="md:col-span-8">
              <p
                className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed ${
                  isDark ? 'text-[#B4B1A7]' : 'text-[#4A4742]'
                }`}
              >
                {language === 'ja'
                  ? 'テルコム大学プロダクトデザイン学科卒業。3Dモデリング、家具設計、写真撮影、そして映像によるビジュアルストーリーテリングに深い関心を持つ。現在は東京の九段日本語学院にて語学と日本独自の「ものづくり」の美意識を学びながら、様々なクリエイティブ領域の越境と新たな技術習得を続けている。'
                  : 'Ari Saputra is a Product Design graduate from Telkom University with an interest in 3D modeling, furniture design, photography, and visual storytelling. Currently studying Japanese in Tokyo, he continues to explore different creative disciplines and develop new skills.'}
              </p>
            </div>

            <div className="md:col-span-4 space-y-4 font-mono text-xs text-[#8C8880]">
              <div>
                <span
                  className={`block font-medium uppercase mb-1 ${
                    isDark ? 'text-white' : 'text-[#141413]'
                  }`}
                >
                  {language === 'ja' ? '専門領域' : 'DISCIPLINES'}
                </span>
                <p className="leading-relaxed">
                  Industrial Design · 3D Computational Modeling · Architectural Photography · Cinematography
                </p>
              </div>

              <div>
                <span
                  className={`block font-medium uppercase mb-1 ${
                    isDark ? 'text-white' : 'text-[#141413]'
                  }`}
                >
                  {language === 'ja' ? '現在の拠点' : 'CURRENT BASE'}
                </span>
                <p>Tokyo, Japan (Chiyoda-ku / Shinjuku)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
