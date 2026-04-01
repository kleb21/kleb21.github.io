import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionComponent } from '../../../shared/reusable-data/components/section';
import { ButtonComponent } from '../../../shared/reusable-data/components/button';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animation.directive';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionComponent, ButtonComponent, ScrollAnimateDirective],
  template: `
    <app-section sectionId="contact" title="What's Next?">
      <div appScrollAnimate class="text-center max-w-lg mx-auto">
        <h3 class="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
          Get In Touch
        </h3>
        <p class="text-[var(--color-text-secondary)] leading-relaxed mb-8">
          I'm currently looking for new opportunities. Whether you have a question
          or just want to say hi, my inbox is always open. I'll try my best to get
          back to you!
        </p>
        <app-button href="mailto:hello&#64;caleb.mmacha@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Say Hello
        </app-button>
      </div>
    </app-section>
  `,
})
export class ContactComponent {}
