import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgTemplateOutlet],
  template: `
    @if (href()) {
      <a
        [href]="href()"
        [target]="external() ? '_blank' : null"
        [rel]="external() ? 'noopener noreferrer' : null"
        class="inline-flex items-center justify-center px-6 py-3 rounded border font-mono text-sm
               border-[var(--color-accent)] text-[var(--color-accent)]
               hover:bg-[var(--color-accent-muted)]
               transition-colors duration-300 focus-visible:outline-none
               focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] gap-2"
        [class]="variant() === 'primary' ? 'bg-[var(--color-accent-muted)]' : ''"
      >
        <ng-container *ngTemplateOutlet="content" />
      </a>
    } @else if (route()) {
      <a
        [routerLink]="route()"
        [fragment]="fragment()"
        class="inline-flex items-center justify-center px-6 py-3 rounded border font-mono text-sm
               border-[var(--color-accent)] text-[var(--color-accent)]
               hover:bg-[var(--color-accent-muted)]
               transition-colors duration-300 focus-visible:outline-none
               focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] gap-2"
        [class]="variant() === 'primary' ? 'bg-[var(--color-accent-muted)]' : ''"
      >
        <ng-container *ngTemplateOutlet="content" />
      </a>
    } @else {
      <button
        type="button"
        class="inline-flex items-center justify-center px-6 py-3 rounded border font-mono text-sm
               border-[var(--color-accent)] text-[var(--color-accent)]
               hover:bg-[var(--color-accent-muted)]
               transition-colors duration-300 focus-visible:outline-none
               focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] gap-2"
        [class]="variant() === 'primary' ? 'bg-[var(--color-accent-muted)]' : ''"
      >
        <ng-container *ngTemplateOutlet="content" />
      </button>
    }

    <ng-template #content>
      <ng-content />
    </ng-template>
  `,
})
export class ButtonComponent {
  readonly variant = input<'primary' | 'outline'>('outline');
  readonly href = input<string>('');
  readonly route = input<string | any[]>();
  readonly fragment = input<string>();
  readonly external = input(false);
}
