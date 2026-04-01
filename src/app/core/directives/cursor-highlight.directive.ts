import { Directive, ElementRef, inject, input, numberAttribute, OnDestroy, afterNextRender } from '@angular/core';

@Directive({
  selector: '[appCursorHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mousemove)': 'onMouseMove($event)',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class CursorHighlightDirective implements OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  readonly intensity = input(0.08, { alias: 'appCursorHighlight', transform: (v: unknown) => (v === '' || v === undefined ? 0.08 : numberAttribute(v)) });
  private overlay: HTMLDivElement | null = null;
  private isBrowser = false;
  private removeTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    afterNextRender(() => {
      this.isBrowser = true;
    });
  }

  onMouseEnter(): void {
    if (!this.isBrowser) return;
    const host = this.el.nativeElement;
    host.style.position = host.style.position || 'relative';
    host.style.overflow = 'hidden';

    this.overlay = document.createElement('div');
    Object.assign(this.overlay.style, {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: '1',
      opacity: '0',
      transition: 'opacity 0.3s ease',
      borderRadius: getComputedStyle(host).borderRadius,
    });
    host.appendChild(this.overlay);
    requestAnimationFrame(() => {
      if (this.overlay) this.overlay.style.opacity = '1';
    });
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.overlay) return;
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const alpha = typeof this.intensity() === 'number' ? this.intensity() : 0.08;
    this.overlay.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(100, 255, 218, ${alpha}), transparent 40%)`;
  }

  onMouseLeave(): void {
    if (this.overlay) {
      this.overlay.style.opacity = '0';
      const ref = this.overlay;
      this.removeTimeout = setTimeout(() => ref.remove(), 300);
      this.overlay = null;
    }
  }

  ngOnDestroy(): void {
    if (this.removeTimeout) {
      clearTimeout(this.removeTimeout);
    }
    this.overlay?.remove();
  }
}
