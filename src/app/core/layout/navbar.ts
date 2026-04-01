import { Component, ChangeDetectionStrategy, input, output, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinksComponent } from '../../shared/reusable-data/components/social-links';
import { Translations } from '../i18n/translation.model';
import { ThemePreference } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SocialLinksComponent, RouterLink],
  template: `
    <header class="h-full flex flex-col justify-between">
      <div>
        <!-- Logo / Name -->
        <a routerLink="/" class="group inline-block mb-2" aria-label="Home">
          <h1
            class="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]
                   group-hover:text-[var(--color-accent)] transition-colors duration-300"
          >
            Caleb
          </h1>
        </a>
        <h2 class="text-lg lg:text-xl font-medium text-[var(--color-text-primary)] mt-1">
          {{ t().navbar.subtitle }}
        </h2>
        <p class="text-[var(--color-text-secondary)] mt-3 max-w-xs leading-relaxed text-sm">
          {{ t().navbar.description }}
        </p>

        <!-- Navigation Links (visible on lg+) -->
        <nav class="hidden lg:block mt-12" aria-label="Main navigation">
          <ul class="flex flex-col gap-4" role="list">
            @for (item of navItems(); track item.id) {
              <li>
                <a
                  [routerLink]="item.path"
                  [fragment]="item.fragment"
                  (click)="navClick.emit(item.id)"
                  class="group flex items-center gap-3 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
                >
                  <span
                    class="h-px transition-all duration-300"
                    [class]="activeSection() === item.id
                      ? 'w-16 bg-[var(--color-text-primary)]'
                      : 'w-8 bg-[var(--color-text-secondary)] group-hover:w-16 group-hover:bg-[var(--color-text-primary)]'"
                  ></span>
                  <span
                    class="text-xs font-bold uppercase tracking-widest transition-colors duration-300"
                    [class]="activeSection() === item.id
                      ? 'text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]'"
                  >
                    {{ item.label }}
                  </span>
                </a>
              </li>
            }
          </ul>
        </nav>
      </div>

      <!-- Bottom: Social Links -->
      <div class="flex items-center gap-4 mt-8 lg:mt-0">
        <app-social-links />
      </div>

      <!-- Language Toggle (Fixed Top Right) -->
      <button
        type="button"
        (click)="localeToggle.emit()"
        [attr.aria-label]="t().language.switchTo"
        class="fixed top-4 right-28 lg:top-8 lg:right-24 z-50 p-2 rounded-lg
               bg-[var(--color-nav-bg)] lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none
               text-[var(--color-text-secondary)]
               hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-muted)]
               transition-colors duration-300 font-mono text-sm font-bold"
      >
        {{ locale() === 'en' ? 'ES' : 'EN' }}
      </button>

      <!-- Theme Toggle (Fixed Top Right) -->
      <button
        type="button"
        (click)="themeToggle.emit()"
        [attr.aria-label]="themeAriaLabel()"
        class="fixed top-4 right-16 lg:top-8 lg:right-12 z-50 p-2 rounded-lg
               bg-[var(--color-nav-bg)] lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none
               text-[var(--color-text-secondary)]
               hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-muted)]
               transition-colors duration-300"
      >
        @if (themePreference() === 'system') {
          <!-- Monitor icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        } @else if (isDark()) {
          <!-- Sun icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        } @else {
          <!-- Moon icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        }
      </button>

      <!-- Mobile Menu Button -->
      <button
        type="button"
        class="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg
               bg-[var(--color-nav-bg)] backdrop-blur-sm
               text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]
               transition-colors duration-300"
        (click)="mobileMenuOpen.set(!mobileMenuOpen())"
        [attr.aria-expanded]="mobileMenuOpen()"
        aria-label="Toggle navigation menu"
      >
        @if (mobileMenuOpen()) {
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        } @else {
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        }
      </button>

      <!-- Mobile Menu Overlay -->
      @if (mobileMenuOpen()) {
        <div
          class="lg:hidden fixed inset-0 z-40 bg-[var(--color-nav-bg)] backdrop-blur-md
                 flex flex-col items-center justify-center gap-8"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav aria-label="Mobile navigation">
            <ul class="flex flex-col items-center gap-6" role="list">
              @for (item of navItems(); track item.id) {
                <li>
                  <a
                    [routerLink]="item.path"
                    [fragment]="item.fragment"
                    (click)="navClick.emit(item.id); mobileMenuOpen.set(false)"
                    class="text-lg font-mono text-[var(--color-text-primary)]
                           hover:text-[var(--color-accent)] transition-colors duration-300"
                  >
                    <span class="text-[var(--color-accent)] mr-1">{{ item.index }}.</span>
                    {{ item.label }}
                  </a>
                </li>
              }
            </ul>
          </nav>
        </div>
      }
    </header>
  `,
})
export class NavbarComponent {
  readonly activeSection = input<string>('hero');
  readonly isDark = input(true);
  readonly themePreference = input<ThemePreference>('system');
  readonly locale = input<'en' | 'es'>('en');
  readonly t = input.required<Translations>();
  readonly themeToggle = output<void>();
  readonly localeToggle = output<void>();
  readonly navClick = output<string>();

  readonly mobileMenuOpen = signal(false);

  readonly themeAriaLabel = computed(() => {
    const pref = this.themePreference();
    const t = this.t();
    if (pref === 'system') return t.theme.switchToLight;
    if (pref === 'light') return t.theme.switchToDark;
    return t.theme.switchToSystem;
  });

  readonly navItems = computed(() => {
    const t = this.t();
    return [
      { id: 'about', label: t.nav.about, path: '/', fragment: 'about', index: '01' },
      { id: 'experience', label: t.nav.experience, path: '/', fragment: 'experience', index: '02' },
      { id: 'contact', label: t.nav.contact, path: '/', fragment: 'contact', index: '04' },
    ];
  });
}
