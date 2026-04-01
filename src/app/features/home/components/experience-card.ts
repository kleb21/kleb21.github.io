import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Experience } from '../models/experience.model';
import { CursorHighlightDirective } from '../../../core/directives/cursor-highlight.directive';

@Component({
  selector: 'app-experience-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CursorHighlightDirective],
  template: `
    <div
      appCursorHighlight
      class="group relative grid gap-4 p-4 -mx-4
             rounded-lg transition-all duration-300
             hover:bg-[var(--color-accent-muted)] hover:shadow-lg"
    >
      <!-- Date range -->
      <div
        class="text-xs font-mono text-[var(--color-text-secondary)] pt-1 whitespace-nowrap
               uppercase tracking-wide min-w-[120px]"
        aria-label="Period"
      >
        {{ experience().dateRange }}
      </div>

      <!-- Content -->
      <div>
        <h3 class="font-medium leading-snug">
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="text-[var(--color-text-primary)]
                   group-hover:text-[var(--color-accent)]
                   transition-colors duration-300
                   inline-flex items-center gap-1"
          >
            {{ experience().title }}
            <span class="text-[var(--color-text-secondary)]">·</span>
            {{ experience().company }}
          </a>
        </h3>

        <ul class="text-sm text-[var(--color-text-secondary)] mt-3 mb-2 leading-relaxed list-none space-y-2">
          @for (desc of experience().description; track desc) {
            <li class="relative pl-5">
              <span class="absolute left-0 top-1.5 text-[var(--color-accent)] text-xs">▹</span>
              {{ desc }}
            </li>
          }
        </ul>

        <!-- Tech badges -->
        <ul class="flex flex-wrap gap-2 mt-3" role="list" aria-label="Technologies used">
          @for (tech of experience().technologies; track tech) {
            <li
              class="px-3 py-1 text-xs font-mono rounded-full
                     bg-[var(--color-accent-muted)] text-[var(--color-accent)]"
            >
              {{ tech }}
            </li>
          }
        </ul>
      </div>
    </div>
  `,
})
export class ExperienceCardComponent {
  readonly experience = input.required<Experience>();
}
