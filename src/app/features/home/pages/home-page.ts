import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
  afterNextRender,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActiveSectionService } from '../../../core/services/active-section.service';
import { AboutComponent } from '../components/about';
import { ExperienceListComponent } from '../components/experience-list';
import { ContactComponent } from '../components/contact';

@Component({
  selector: 'app-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AboutComponent, ExperienceListComponent, ContactComponent],
  template: `
    <app-about />
    <app-experience-list/>
    <!-- <app-featured-projects /> -->
    <app-contact />
  `,
})
export class HomePageComponent implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly activeSectionService = inject(ActiveSectionService);
  private observer: IntersectionObserver | null = null;

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      this.setupScrollSpy();
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupScrollSpy(): void {
    const sections = document.querySelectorAll<HTMLElement>(
      '#hero, #about, #experience, #projects, #contact'
    );

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSectionService.setActive(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => this.observer!.observe(section));
  }
}
