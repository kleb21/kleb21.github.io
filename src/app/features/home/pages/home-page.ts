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
  private scrollListener = () => this.checkScrollBottom();

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      
      // Force scroll to top on initial load, slightly delayed to override router's default navigation behavior
      setTimeout(() => {
        window.history.replaceState(null, document.title, window.location.pathname);
        window.scrollTo(0, 0);
      }, 50);

      this.setupScrollSpy();
      window.addEventListener('scroll', this.scrollListener, { passive: true });
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private checkScrollBottom(): void {
    // If the user has scrolled to the absolute bottom of the page, forcefully activate the last section
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 50) {
      this.activeSectionService.setActive('contact');
    }
  }

  private setupScrollSpy(): void {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(
      '#about, #experience, #contact'
    ));

    const visibleSections = new Set<string>();

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        }

        // Find the first visible section based on DOM order
        const firstVisible = sections.find(section => visibleSections.has(section.id));
        if (firstVisible) {
          this.activeSectionService.setActive(firstVisible.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => this.observer!.observe(section));
  }
}
