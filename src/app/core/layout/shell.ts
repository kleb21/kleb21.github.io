import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { ActiveSectionService } from '../services/active-section.service';
import { NavbarComponent } from './navbar';
import { FooterComponent } from './footer';

@Component({
  selector: 'app-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div class="lg:flex lg:justify-between lg:gap-4">
        <!-- Left side: sticky navbar -->
        <div class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <app-navbar
            class="block flex-1"
            [activeSection]="activeSectionService.activeSection()"
            [isDark]="themeService.isDark()"
            (themeToggle)="themeService.toggle()"
            (navClick)="activeSectionService.setActive($event)"
          />
        </div>

        <!-- Right side: main content -->
        <main
          id="main-content"
          class="pt-24 lg:w-1/2 lg:py-24"
          role="main"
        >
          <router-outlet />
        </main>
      </div>
      
      <!-- Footer: Out of the sidebar, at the end of everything -->
      <app-footer class="block mt-12 w-full" />
    </div>
  `,
})
export class ShellComponent {
  protected readonly themeService = inject(ThemeService);
  protected readonly activeSectionService = inject(ActiveSectionService);
}
