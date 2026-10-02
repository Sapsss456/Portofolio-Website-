/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Language, Project } from './types';
import {
  projectsData,
  photographyData,
  motionData,
  experienceData,
  educationData,
  skillsList,
} from './data/portfolioData';

import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { SelectedWork } from './components/SelectedWork';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PhotographyGallery } from './components/PhotographyGallery';
import { MotionGallery } from './components/MotionGallery';
import { AboutProfile } from './components/AboutProfile';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CurrentlyInTokyo } from './components/CurrentlyInTokyo';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ari_portfolio_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ari_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ari_portfolio_theme', 'light');
    }
  }, [isDark]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ja' : 'en'));
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'photography', 'motion', 'about', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isDark
          ? 'bg-[#0E0E10] text-[#F5F5F3] selection:bg-[#D9383A] selection:text-white'
          : 'bg-[#FBFBF9] text-[#141413] selection:bg-[#C73E3A] selection:text-white'
      }`}
    >
      {/* 1. Scroll Progress Bar (Japanese Vermilion Red) */}
      <ScrollProgressBar isDark={isDark} />

      {/* 2. Minimal Sticky Top Navigation with Dark Mode & Language Switch */}
      <Navigation
        language={language}
        onToggleLanguage={toggleLanguage}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      <main>
        {/* 3. Hero */}
        <Hero
          language={language}
          isDark={isDark}
          onExploreWork={handleExploreWork}
          onOpenFeaturedProject={() => {
            const moduble = projectsData.find((p) => p.id === 'moduble');
            if (moduble) setSelectedProject(moduble);
          }}
        />

        {/* 4. Introduction */}
        <Introduction language={language} isDark={isDark} />

        {/* 5. Selected Work (With Carousel Mode & Grid Mode Switcher) */}
        <SelectedWork
          projects={projectsData}
          language={language}
          isDark={isDark}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 6. Photography */}
        <PhotographyGallery
          photos={photographyData}
          language={language}
          isDark={isDark}
        />

        {/* 7. Motion / Cinematography */}
        <MotionGallery
          motionWorks={motionData}
          language={language}
          isDark={isDark}
        />

        {/* 8. About & Capabilities */}
        <AboutProfile
          language={language}
          education={educationData}
          skills={skillsList}
          isDark={isDark}
        />

        {/* 9. Experience Timeline */}
        <ExperienceTimeline
          experiences={experienceData}
          language={language}
          isDark={isDark}
        />

        {/* 10. Currently In Tokyo */}
        <CurrentlyInTokyo language={language} isDark={isDark} />

        {/* 11. Contact */}
        <ContactSection language={language} isDark={isDark} />
      </main>

      {/* 12. Footer */}
      <Footer language={language} isDark={isDark} />

      {/* Dedicated Project Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        allProjects={projectsData}
        language={language}
        isDark={isDark}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />
    </div>
  );
}
