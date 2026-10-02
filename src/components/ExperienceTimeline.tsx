import React from 'react';
import { ExperienceItem, Language } from '../types';

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
  language: Language;
  isDark: boolean;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  language,
  isDark,
}) => {
  return (
    <section
      className={`py-24 md:py-32 border-t max-w-7xl mx-auto px-6 md:px-12 ${
        isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
      }`}
    >
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
            06 / TRAJECTORY
          </span>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-light tracking-tight ${
              isDark ? 'text-white' : 'text-[#141413]'
            }`}
          >
            {language === 'ja' ? '職務経歴' : 'EXPERIENCE'}
          </h2>
        </div>
        <p className="font-mono text-xs text-[#8C8880] max-w-sm">
          {language === 'ja'
            ? 'デザイン共同設立、持続可能生産、プレプロダクション実務の記録。'
            : 'Studio co-founding, sustainable material manufacturing, and visual documentation roles.'}
        </p>
      </div>

      {/* Clean Editorial Horizontal-to-Vertical Timeline Grid */}
      <div
        className={`grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6 border-t pt-8 ${
          isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
        }`}
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between space-y-4 pt-2 md:border-r md:last:border-r-0 md:pr-6 ${
              isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#8C8880] tabular-nums">
                  {exp.period}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
                />
              </div>

              <h3
                className={`text-lg font-medium tracking-tight mb-1 ${
                  isDark ? 'text-white' : 'text-[#141413]'
                }`}
              >
                {exp.company[language]}
              </h3>

              <p
                className="text-xs font-mono mb-3"
                style={{ color: isDark ? '#D9383A' : '#C73E3A' }}
              >
                {exp.role[language]}
              </p>

              <p
                className={`text-xs font-light leading-relaxed ${
                  isDark ? 'text-[#9E9B93]' : 'text-[#78756E]'
                }`}
              >
                {exp.description[language]}
              </p>
            </div>

            <div
              className={`font-mono text-[10px] uppercase pt-4 border-t ${
                isDark ? 'border-[#222226] text-[#78756E]' : 'border-[#F0EFEA] text-[#A39F97]'
              }`}
            >
              {exp.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
