import React from 'react';
import { Language, EducationItem } from '../types';

interface AboutProfileProps {
  language: Language;
  education: EducationItem[];
  skills: string[];
  isDark: boolean;
}

export const AboutProfile: React.FC<AboutProfileProps> = ({
  language,
  education,
  skills,
  isDark,
}) => {
  return (
    <section
      id="about"
      className={`py-24 md:py-36 border-t max-w-7xl mx-auto px-6 md:px-12 ${
        isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
      }`}
    >
      {/* Section Header */}
      <div
        className={`mb-16 pb-6 border-b ${
          isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
        }`}
      >
        <span className="font-mono text-xs tracking-widest text-[#8C8880] uppercase block mb-2 flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
          />
          05 / PROFILE & BACKGROUND
        </span>
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-light tracking-tight ${
            isDark ? 'text-white' : 'text-[#141413]'
          }`}
        >
          {language === 'ja' ? 'プロフィール' : 'ABOUT & CAPABILITIES'}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Identity & Philosophy */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="font-mono text-xs tracking-widest text-[#8C8880] uppercase block mb-1">
              CREATIVE IDENTITY
            </span>
            <h3
              className={`text-3xl sm:text-4xl font-light tracking-tight mb-3 ${
                isDark ? 'text-white' : 'text-[#141413]'
              }`}
            >
              ARI SAPUTRA
            </h3>
            <p className="font-mono text-xs text-[#8C8880] tracking-wider uppercase">
              Product Designer / Creative / Photographer
            </p>
          </div>

          <div
            className={`space-y-4 text-sm sm:text-base leading-relaxed font-light ${
              isDark ? 'text-[#B4B1A7]' : 'text-[#4A4742]'
            }`}
          >
            <p>
              {language === 'ja'
                ? 'インドネシアのテルコム大学でプロダクトデザインを専攻し、2025年に学士号を取得。物理的な素材特性、人間工学的寸法、そして3Dデジタルモデリングの融合をライフワークとしています。'
                : 'Graduated with a Bachelor of Product Design from Telkom University (2021–2025). Ari specializes in bridging tactile furniture fabrication with high-fidelity 3D modeling and documentary media.'}
            </p>
            <p>
              {language === 'ja'
                ? '現在は東京に拠点を移し、九段日本語学院にて日本語を学びながら、日本の洗練された工業デザイン、ミニマリズム、建築的視覚表現を吸収し、新たなプロダクトと映像プロジェクトを推進しています。'
                : 'Currently living and studying in Tokyo, Japan at Kudan Japanese Language School—absorbing Japanese spatial discipline, material honesty (monozukuri), and developing international design collaborations.'}
            </p>
          </div>

          {/* Core Design Principles */}
          <div
            className={`p-6 border rounded-sm space-y-3 ${
              isDark
                ? 'bg-[#151518] border-[#2A2A2E]'
                : 'bg-[#F4F3EE] border-[#E8E6E0]'
            }`}
          >
            <span
              className="font-mono text-xs uppercase font-medium block"
              style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
            >
              {language === 'ja' ? '制作の指針' : 'CORE PRINCIPLES'}
            </span>
            <div className="space-y-2 text-xs font-mono text-[#8C8880]">
              <div className="flex items-center gap-2">
                <span className={isDark ? 'text-white/60' : 'text-[#141413]'}>01.</span>
                <span className={isDark ? 'text-[#B4B1A7]' : 'text-[#52504B]'}>HONESTY OF JOINERY & MATERIALS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={isDark ? 'text-white/60' : 'text-[#141413]'}>02.</span>
                <span className={isDark ? 'text-[#B4B1A7]' : 'text-[#52504B]'}>DOCUMENTARY DISCIPLINE IN VISUALS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={isDark ? 'text-white/60' : 'text-[#141413]'}>03.</span>
                <span className={isDark ? 'text-[#B4B1A7]' : 'text-[#52504B]'}>ALWAYS KEEP LEARNING AND EVOLVING</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Education & Skills */}
        <div className="lg:col-span-7 space-y-12">
          {/* Education */}
          <div>
            <span className="font-mono text-xs tracking-widest text-[#8C8880] uppercase block mb-4">
              {language === 'ja' ? '学歴' : 'ACADEMIC FORMATION'}
            </span>

            <div
              className={`space-y-6 divide-y ${
                isDark ? 'divide-[#2A2A2E]' : 'divide-[#E8E6E0]'
              }`}
            >
              {education.map((edu, idx) => (
                <div key={idx} className={idx > 0 ? 'pt-6' : ''}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h4 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-[#141413]'}`}>
                      {edu.institution[language]}
                    </h4>
                    <span className="font-mono text-xs text-[#8C8880] tabular-nums">
                      {edu.period}
                    </span>
                  </div>

                  <p
                    className="text-sm font-medium mb-1"
                    style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
                  >
                    {edu.degree[language]}
                  </p>

                  <p className="text-xs font-mono text-[#8C8880] mb-2">
                    {edu.location}
                  </p>

                  <p className={`text-xs sm:text-sm font-light leading-relaxed ${isDark ? 'text-[#9E9B93]' : 'text-[#696761]'}`}>
                    {edu.notes[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills (Clean horizontal unboxed list - strictly NO percentage skill bars) */}
          <div
            className={`pt-8 border-t ${
              isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
            }`}
          >
            <span className="font-mono text-xs tracking-widest text-[#8C8880] uppercase block mb-4">
              {language === 'ja' ? '技術・制作スキル' : 'CREATIVE & TECHNICAL SKILLS'}
            </span>
            <p className="text-xs font-mono text-[#8C8880] mb-4">
              {language === 'ja'
                ? '実務で使用するソフトウェア、造形技術、視覚機材'
                : 'Toolchains, fabrication methods, and visual workflows used in active practice'}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
                  />
                  <span className={`tracking-wide ${isDark ? 'text-[#D4D2CA]' : 'text-[#2A2926]'}`}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
