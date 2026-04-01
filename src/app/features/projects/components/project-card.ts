import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Project } from '../models/project.model';
import { CursorHighlightDirective } from '../../../core/directives/cursor-highlight.directive';

@Component({
  selector: 'app-project-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CursorHighlightDirective],
  template: `
    <article
      appCursorHighlight
      class="group relative p-6 rounded-lg bg-[var(--color-bg-card)]
             border border-[var(--color-border)]
             hover:border-[var(--color-accent)]
             transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
             flex flex-col h-full"
    >
      <!-- Header: folder icon + links -->
      <div class="flex items-center justify-between mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 text-[var(--color-accent)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
        </svg>

        <div class="flex gap-3">
          @if (project().repoUrl) {
            <a
              [href]="project().repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on GitHub (opens in a new tab)"
              class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]
                     transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35
                         6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91
                         1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09
                         1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3
                         6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
          }
          <a
            [href]="project().url"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live project (opens in a new tab)"
            class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]
                   transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Title -->
      <h3 class="text-lg font-semibold mb-2">
        <a
          [href]="project().url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[var(--color-text-primary)]
                 group-hover:text-[var(--color-accent)]
                 transition-colors duration-300"
        >
          {{ project().title }}
        </a>
      </h3>

      <!-- Description -->
      <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
        {{ project().description }}
      </p>

      <!-- Tech stack -->
      <ul class="flex flex-wrap gap-x-3 gap-y-1 mt-4 text-xs font-mono text-[var(--color-text-secondary)]"
          role="list" aria-label="Technologies used">
        @for (tech of project().technologies; track tech) {
          <li>{{ tech }}</li>
        }
      </ul>
    </article>
  `,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
