import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { SectionComponent } from '../../../shared/reusable-data/components/section';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animation.directive';
import { TranslationService } from '../../../core/i18n/translation.service';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionComponent, ScrollAnimateDirective],
  template: `
    <app-section sectionId="about" [title]="t().about.title">
      <div appScrollAnimate>
        <div class="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
          <p>{{ t().about.paragraph1 }}</p>
          <p>{{ t().about.paragraph2 }}</p>
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
  private readonly translationService = inject(TranslationService);
  protected readonly t = this.translationService.translations;

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
