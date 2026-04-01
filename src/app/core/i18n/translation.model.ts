export type Locale = 'en' | 'es';

export interface ExperienceTranslation {
  dateRange: string;
  title: string;
  company: string;
  description: string[];
  technologies: string[];
}

export interface ProjectTranslation {
  title: string;
  description: string;
  technologies: string[];
}

export interface Translations {
  navbar: {
    subtitle: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    contact: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  experience: {
    title: string;
    viewResume: string;
    items: ExperienceTranslation[];
  };
  projects: {
    sectionTitle: string;
    viewArchive: string;
    pageDescription: string;
    items: ProjectTranslation[];
  };
  contact: {
    sectionTitle: string;
    heading: string;
    paragraph: string;
    button: string;
  };
  footer: {
    designedBy: string;
    builtWith: string;
    and: string;
  };
  theme: {
    switchToLight: string;
    switchToDark: string;
    switchToSystem: string;
  };
  language: {
    switchTo: string;
  };
}
