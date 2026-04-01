import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { SectionComponent } from '../../../shared/reusable-data/components/section';
import { ButtonComponent } from '../../../shared/reusable-data/components/button';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animation.directive';
import { TranslationService } from '../../../core/i18n/translation.service';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionComponent, ButtonComponent, ScrollAnimateDirective],
  template: `
    <app-section sectionId="contact" [title]="t().contact.sectionTitle">
      <div appScrollAnimate class="text-center max-w-lg mx-auto">
        <h3 class="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
          {{ t().contact.heading }}
        </h3>
        <p class="text-[var(--color-text-secondary)] leading-relaxed mb-8">
          {{ t().contact.paragraph }}
        </p>
        <app-button href="mailto:hello@caleb.mmacha@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          {{ t().contact.button }}
        </app-button>
      </div>
    </app-section>
  `,
})
export class ContactComponent {
  private readonly translationService = inject(TranslationService);
  protected readonly t = this.translationService.translations;
}
