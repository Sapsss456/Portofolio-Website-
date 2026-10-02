import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ language, isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t py-12 text-xs font-mono transition-colors ${
        isDark ? 'border-[#2A2A2E] bg-[#0A0A0C] text-[#8C8880]' : 'border-[#E8E6E0] bg-[#FBFBF9] text-[#78756E]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          {/* Subtle red stamp */}
          <span
            className="w-3.5 h-3.5 rounded-[2px] text-white flex items-center justify-center text-[8px] font-bold"
            style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
          >
            有
          </span>
          <span className={`font-semibold ${isDark ? 'text-white' : 'text-[#141413]'}`}>
            ARI SAPUTRA
          </span>
          <span className="hidden sm:inline">·</span>
          <span>PRODUCT DESIGN & MULTIDISCIPLINARY CREATIVE</span>
          <span className="hidden sm:inline">·</span>
          <span>TOKYO</span>
        </div>

        <div className="flex items-center gap-6">
          <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`flex items-center gap-1.5 transition-colors ${
              isDark ? 'text-white hover:text-[#D9383A]' : 'text-[#141413] hover:text-[#C73E3A]'
            }`}
          >
            <span>{language === 'ja' ? 'トップへ戻る' : 'BACK TO TOP'}</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};
