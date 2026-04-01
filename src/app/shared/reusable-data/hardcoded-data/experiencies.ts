import { Experience } from '../../../features/home/models/experience.model';
import { Locale } from '../../../core/i18n/translation.model';
import { en } from '../../../core/i18n/en';
import { es } from '../../../core/i18n/es';

const dictionaries = { en, es } as const;

const experienceUrls = ['', ''];

export function getExperiences(locale: Locale): Experience[] {
  const t = dictionaries[locale];
  return t.experience.items.map((item, i) => ({
    dateRange: item.dateRange,
    title: item.title,
    company: item.company,
    url: experienceUrls[i],
    description: item.description,
    technologies: item.technologies,
  }));
}