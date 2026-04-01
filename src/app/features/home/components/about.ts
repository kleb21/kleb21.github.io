import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionComponent } from '../../../shared/reusable-data/components/section';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animation.directive';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionComponent, ScrollAnimateDirective],
  template: `
    <app-section sectionId="about" title="About">
      <div appScrollAnimate>
        <div class="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
          <p>
            Front-end engineer with 3+ years of experience specializing in Angular and modern web
            development. Passionate about continuous learning, currently expanding my skill set with
            others front-end frameworks. I work closely with backend teams to deliver end-to-end
            solutions and prioritize clean architecture to build Scalable and maintainable
            applications
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
        </div>

        <ul class="grid grid-cols-3 gap-x-4 gap-y-2 mt-5 text-sm" role="list">
          @for (tech of technologies; track tech) {
            <li class="flex items-center gap-2 text-[var(--color-text-secondary)]">
              <span class="text-[var(--color-accent)] text-xs" aria-hidden="true">▹</span>
              {{ tech }}
            </li>
          }
        </ul>
      </div>
    </app-section>
  `,
})
export class AboutComponent {
  readonly technologies = [
    'Angular',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'RxJS',
    'PostgreSQL',
    'GraphQL',  
    'html',
    'css',
    '.NET',
    'Node.js'
  ];
}
