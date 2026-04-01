import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectCardComponent } from './project-card';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animation.directive';

@Component({
  selector: 'app-project-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectCardComponent, ScrollAnimateDirective],
  template: `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      @for (project of projects(); track project.title) {
        <div appScrollAnimate>
          <app-project-card [project]="project" />
        </div>
      }
    </div>
  `,
})
export class ProjectGridComponent {
  readonly projects = input.required<Project[]>();
}
