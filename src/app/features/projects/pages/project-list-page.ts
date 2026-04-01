import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { ActiveSectionService } from '../../../core/services/active-section.service';
import { ProjectGridComponent } from '../components/project-grid';
import { SectionComponent } from '../../../shared/reusable-data/components/section';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animation.directive';

@Component({
  selector: 'app-project-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectGridComponent, SectionComponent, ScrollAnimateDirective],
  template: `
    <app-section sectionId="projects" title="Projects">
      <div appScrollAnimate>
        <p class="text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-lg">
          A collection of projects I've worked on. Each one taught me something new
          and pushed me to grow as a developer.
        </p>
      </div>
      <app-project-grid [projects]="projectsService.projects()" />
    </app-section>
  `,
})
export class ProjectListPageComponent implements OnInit {
  protected readonly projectsService = inject(ProjectsService);
  private readonly activeSectionService = inject(ActiveSectionService);

  ngOnInit(): void {
    this.activeSectionService.setActive('projects');
  }
}
