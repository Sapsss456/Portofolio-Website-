export type Language = 'en' | 'ja';

export interface ProjectSpecification {
  material: { en: string; ja: string };
  dimensions: string;
  software: string;
  manufacturing: { en: string; ja: string };
  status: { en: string; ja: string };
}

export interface CaseStudyData {
  overview: { en: string; ja: string };
  problem: { en: string; ja: string };
  research: { en: string; ja: string };
  concept: { en: string; ja: string };
  development: { en: string; ja: string };
  finalDesign: { en: string; ja: string };
  specifications: ProjectSpecification;
  highlights: { en: string[]; ja: string[] };
  diagramType: 'moduble' | 'lwork' | 'renewa' | 'lensandlines' | 'kinetic';
}

export interface Project {
  id: string;
  title: string;
  japaneseTitle: string;
  category: string;
  japaneseCategory: string;
  year: string;
  tagline: { en: string; ja: string };
  shortDescription: { en: string; ja: string };
  featured: boolean;
  gridSpan: 'full' | 'col-2' | 'standard';
  disciplines: string[];
  tools: string[];
  caseStudy: CaseStudyData;
}

export type PhotoCategory =
  | 'all'
  | 'tokyo'
  | 'architecture'
  | 'people'
  | 'events'
  | 'concerts'
  | 'studio'
  | 'street';

export interface PhotographyItem {
  id: string;
  title: { en: string; ja: string };
  category: PhotoCategory;
  location: { en: string; ja: string };
  year: string;
  aspect: 'portrait' | 'landscape' | 'square';
  exif: {
    camera: string;
    lens: string;
    shutter: string;
    aperture: string;
    iso: string;
  };
  observation: { en: string; ja: string };
  visualType: string;
}

export type MotionCategory = 'EVENT' | 'DOCUMENTATION' | 'AFTER MOVIE' | 'DRONE';

export interface MotionItem {
  id: string;
  title: { en: string; ja: string };
  category: MotionCategory;
  duration: string;
  year: string;
  clientContext: { en: string; ja: string };
  synopsis: { en: string; ja: string };
  role: { en: string; ja: string };
  motionVisualType: string;
}

export interface ExperienceItem {
  role: { en: string; ja: string };
  company: { en: string; ja: string };
  period: string;
  location: string;
  description: { en: string; ja: string };
}

export interface EducationItem {
  institution: { en: string; ja: string };
  degree: { en: string; ja: string };
  period: string;
  location: string;
  notes: { en: string; ja: string };
}
