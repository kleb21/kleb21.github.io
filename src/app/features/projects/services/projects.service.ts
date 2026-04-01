import { Injectable, computed, inject } from '@angular/core';
import { Project } from '../models/project.model';
import { TranslationService } from '../../../core/i18n/translation.service';

interface ProjectMeta {
  url: string;
  repoUrl: string;
  featured: boolean;
}

const projectMeta: ProjectMeta[] = [
  { url: 'https://example.com', repoUrl: 'https://github.com/example/portfolio', featured: true },
  { url: 'https://example.com', repoUrl: 'https://github.com/example/task-app', featured: true },
  { url: 'https://example.com', repoUrl: 'https://github.com/example/dashboard', featured: true },
  { url: 'https://example.com', repoUrl: 'https://github.com/example/weather', featured: false },
];

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly translationService = inject(TranslationService);

  readonly projects = computed<Project[]>(() => {
    const t = this.translationService.translations();
    return t.projects.items.map((item, i) => ({
      title: item.title,
      description: item.description,
      technologies: item.technologies,
      url: projectMeta[i].url,
      repoUrl: projectMeta[i].repoUrl,
      featured: projectMeta[i].featured,
    }));
  });
}
