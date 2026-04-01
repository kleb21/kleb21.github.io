import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionComponent } from '../../../shared/reusable-data/components/section';
import { ProjectGridComponent } from '../../projects/components/project-grid';
import { ProjectsService } from '../../projects/services/projects.service';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animation.directive';
import { TranslationService } from '../../../core/i18n/translation.service';

@Component({
  selector: 'app-featured-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionComponent, ProjectGridComponent, RouterLink, ScrollAnimateDirective],
  template: `
    <app-section sectionId="projects" [title]="t().projects.sectionTitle">
      <app-project-grid [projects]="featuredProjects()" />
      
      <div class="mt-12" appScrollAnimate>
        <a
          routerLink="/projects"
          class="group inline-flex items-center gap-1 font-mono text-sm
                 text-[var(--color-text-primary)]
                 hover:text-[var(--color-accent)] transition-colors duration-300"
        >
          {{ t().projects.viewArchive }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 transition-transform duration-300
                   group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </app-section>
  `,
})
export class FeaturedProjectsComponent {
  private readonly projectsService = inject(ProjectsService);
  private readonly translationService = inject(TranslationService);
  protected readonly t = this.translationService.translations;
  readonly featuredProjects = computed(() => 
    this.projectsService.projects().filter((p) => p.featured)
  );
}
