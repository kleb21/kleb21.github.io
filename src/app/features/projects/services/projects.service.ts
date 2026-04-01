import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  readonly projects = signal<Project[]>([
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio built with Angular and Tailwind CSS featuring interactive canvas background, dark/light theme toggle, and smooth scroll animations.',
      url: 'https://example.com',
      repoUrl: 'https://github.com/example/portfolio',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
      featured: true,
    },
    {
      title: 'Task Management App',
      description:
        'A full-stack task management application with real-time updates, drag-and-drop kanban boards, and team collaboration features.',
      url: 'https://example.com',
      repoUrl: 'https://github.com/example/task-app',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'WebSockets'],
      featured: true,
    },
    {
      title: 'E-Commerce Dashboard',
      description:
        'An analytics dashboard for e-commerce platforms with interactive charts, real-time sales tracking, and inventory management.',
      url: 'https://example.com',
      repoUrl: 'https://github.com/example/dashboard',
      technologies: ['Angular', 'D3.js', 'TypeScript', 'REST API'],
      featured: true,
    },
    {
      title: 'Weather App',
      description:
        'A minimalist weather application with location-based forecasts, beautiful animations, and offline support via service workers.',
      url: 'https://example.com',
      repoUrl: 'https://github.com/example/weather',
      technologies: ['Angular', 'PWA', 'OpenWeather API'],
      featured: false,
    },
  ]);
}
