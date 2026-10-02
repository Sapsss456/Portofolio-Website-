import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  language: Language;
  onToggleLanguage: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  language,
  onToggleLanguage,
  isDark,
  onToggleTheme,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'work', label: language === 'ja' ? '作品' : 'WORK' },
    { id: 'photography', label: language === 'ja' ? '写真' : 'PHOTOGRAPHY' },
    { id: 'motion', label: language === 'ja' ? '映像' : 'MOTION' },
    { id: 'about', label: language === 'ja' ? '経歴' : 'ABOUT' },
    { id: 'contact', label: language === 'ja' ? '連絡' : 'CONTACT' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? 'py-3.5 bg-[#0E0E10]/90 backdrop-blur-md border-b border-[#2A2A2E]'
              : 'py-3.5 bg-[#FBFBF9]/90 backdrop-blur-md border-b border-[#E8E6E0]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark + subtle Japanese Red Hanko Stamp */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            {/* Japanese Hanko red seal mark */}
            <span
              className="w-4 h-4 rounded-[2px] flex items-center justify-center text-[9px] font-bold text-white transition-transform group-hover:scale-110"
              style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
              title="有 (Ari)"
            >
              有
            </span>
            <span
              className={`text-sm font-semibold tracking-widest uppercase transition-colors ${
                isDark ? 'text-white group-hover:text-white/70' : 'text-[#141413] group-hover:text-[#696761]'
              }`}
            >
              ARI SAPUTRA
            </span>
          </button>

          {/* Zone 2: Clean text navigation links */}
          <nav
            className={`hidden md:flex items-center gap-8 text-[12px] font-medium tracking-wider ${
              isDark ? 'text-[#9E9B93]' : 'text-[#696761]'
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative transition-colors py-1 ${
                  activeSection === item.id
                    ? isDark
                      ? 'text-white font-semibold'
                      : 'text-[#141413] font-semibold'
                    : isDark
                    ? 'hover:text-white'
                    : 'hover:text-[#141413]'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                    style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Dark Mode + Language Toggle & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-1.5 rounded-sm border transition-colors ${
                isDark
                  ? 'border-[#2A2A2E] text-white/80 hover:text-white hover:border-[#D9383A] bg-white/5'
                  : 'border-[#E0DED7] text-[#52504B] hover:text-[#141413] hover:border-[#C73E3A] bg-black/5'
              }`}
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Language Switcher */}
            <button
              onClick={onToggleLanguage}
              aria-label="Toggle language between English and Japanese"
              className={`text-[12px] font-mono tracking-wider py-1 px-2 border rounded-sm transition-colors ${
                isDark
                  ? 'border-[#2A2A2E] text-white/70 hover:text-white hover:border-white/40'
                  : 'border-[#E0DED7] text-[#696761] hover:text-[#141413] hover:border-[#141413]'
              }`}
            >
              <span className={language === 'en' ? (isDark ? 'text-white font-semibold' : 'text-[#141413] font-semibold') : 'opacity-50'}>EN</span>
              <span className="mx-1 text-[#8C8880]">/</span>
              <span className={language === 'ja' ? (isDark ? 'text-white font-semibold' : 'text-[#141413] font-semibold') : 'opacity-50'}>日本語</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-1.5 focus:outline-none ${
                isDark ? 'text-white' : 'text-[#141413]'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Minimal Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-30 flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in duration-200 ${
            isDark ? 'bg-[#0E0E10] text-white' : 'bg-[#FBFBF9] text-[#141413]'
          }`}
        >
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs tracking-widest text-[#8C8880] uppercase flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: isDark ? '#D9383A' : '#C73E3A' }}
              />
              {language === 'ja' ? 'ナビゲーション' : 'NAVIGATION'}
            </span>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left text-2xl font-light tracking-tight transition-colors ${
                  isDark ? 'hover:text-[#D9383A]' : 'hover:text-[#C73E3A]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div
            className={`pt-8 border-t flex justify-between items-center text-xs font-mono text-[#8C8880] ${
              isDark ? 'border-[#2A2A2E]' : 'border-[#E8E6E0]'
            }`}
          >
            <span>TOKYO, JAPAN</span>
            <span>35.6762° N, 139.6503° E</span>
          </div>
        </div>
      )}
    </>
  );
};
