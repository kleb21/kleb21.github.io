import { Component, ChangeDetectionStrategy, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.id]': 'sectionId()',
  },
  template: `
    <section class="mb-4   md:mb-8 lg:mb-16 scroll-mt-16">
      @if (title()) {
        <h2
          class="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)] mb-8 md:mb-10 sticky top-0 z-20 -mx-6 px-6 py-5 bg-[var(--color-bg)]/75 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:px-0 lg:py-0 lg:bg-transparent lg:backdrop-blur-none"
        >
          {{ title() }}
        </h2>
      }
      <ng-content />
    </section>
  `,
})
export class SectionComponent implements OnInit {
  readonly sectionId = input.required<string>();
  readonly title = input<string>('');

  ngOnInit() {
    console.log(this.title())
  }
}
