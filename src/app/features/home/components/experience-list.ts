import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Experience } from '../models/experience.model';
import { SectionComponent } from '../../../shared/reusable-data/components/section';
import { ExperienceCardComponent } from './experience-card';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animation.directive';
import { experiences } from '../../../shared/reusable-data/hardcoded-data/experiencies';

@Component({
  selector: 'app-experience-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionComponent, ExperienceCardComponent, ScrollAnimateDirective],
  template: `
    <app-section sectionId="experience" title="Experience">
      <div class="space-y-2">
        @for (exp of experiences; track exp.company) {
          <div appScrollAnimate>
            <app-experience-card [experience]="exp" />
          </div>
        }
      </div>

      <div class="mt-10" appScrollAnimate>
        <a
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-1 font-mono text-sm
                 text-[var(--color-text-primary)]
                 hover:text-[var(--color-accent)] transition-colors duration-300"
        >
          View Full Resume
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
export class ExperienceListComponent {
  readonly experiences = experiences;
}
