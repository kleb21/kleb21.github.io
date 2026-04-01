import {
  Directive,
  ElementRef,
  inject,
  input,
  numberAttribute,
  OnDestroy,
  afterNextRender,
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
})
export class ScrollAnimateDirective implements OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  readonly threshold = input(0.15, { alias: 'appScrollAnimate', transform: (v: unknown) => (v === '' || v === undefined ? 0.15 : numberAttribute(v)) });
  private observer: IntersectionObserver | null = null;

  constructor() {
    afterNextRender(() => {
      const element = this.el.nativeElement;
      element.classList.add('scroll-animate');

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              this.observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: typeof this.threshold() === 'number' ? this.threshold() : 0.15,
        }
      );

      this.observer.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
