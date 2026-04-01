import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { ActiveSectionService } from '../../../core/services/active-section.service';
import { ProjectGridComponent } from '../components/project-grid';
import { SectionComponent } from '../../../shared/reusable-data/components/section';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animation.directive';
import { TranslationService } from '../../../core/i18n/translation.service';

@Component({
  selector: 'app-project-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectGridComponent, SectionComponent, ScrollAnimateDirective],
  template: `
    <app-section sectionId="projects" [title]="t().projects.sectionTitle">
      <div appScrollAnimate>
        <p class="text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-lg">
          {{ t().projects.pageDescription }}
        </p>
      </div>
      <app-project-grid [projects]="projectsService.projects()" />
    </app-section>
  `,
})
export class ProjectListPageComponent implements OnInit {
  protected readonly projectsService = inject(ProjectsService);
  private readonly activeSectionService = inject(ActiveSectionService);
  private readonly translationService = inject(TranslationService);
  protected readonly t = this.translationService.translations;

  ngOnInit(): void {
    this.activeSectionService.setActive('projects');
  }
}
