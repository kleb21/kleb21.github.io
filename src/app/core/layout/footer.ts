import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="pb-6 lg:pb-8 text-center w-full flex justify-center pt-8 mt-8 lg:mt-0">
      <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-md text-center">
        Loosely designed and coded by
        <span class="text-[var(--color-text-primary)] font-medium">Caleb</span>.
        Built with
        <a
          href="https://angular.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[var(--color-text-primary)] hover:text-[var(--color-accent)]
                 transition-colors duration-300"
        >
          Angular
        </a>
        and
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[var(--color-text-primary)] hover:text-[var(--color-accent)]
                 transition-colors duration-300"
        >
          Tailwind CSS
        </a>.
      </p>
    </footer>
  `,
})
export class FooterComponent {}
