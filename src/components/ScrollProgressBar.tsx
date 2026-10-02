import React, { useState, useEffect } from 'react';

interface ScrollProgressBarProps {
  isDark: boolean;
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ isDark }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[2.5px] bg-transparent">
      {/* Background track (delicate grey) */}
      <div className={`w-full h-full ${isDark ? 'bg-white/5' : 'bg-black/5'}`} />

      {/* Progress Fill in Japanese Vermilion Red */}
      <div
        className="absolute top-0 left-0 h-full transition-[width] duration-75 ease-out"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: isDark ? '#D9383A' : '#C73E3A',
          boxShadow: isDark ? '0 0 8px rgba(217, 56, 58, 0.6)' : '0 0 6px rgba(199, 62, 58, 0.4)',
        }}
      />
    </div>
  );
};
