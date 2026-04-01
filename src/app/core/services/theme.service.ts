import { Injectable, signal, computed, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';
export type ThemePreference = 'system' | 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly systemDark = signal(this.getSystemDark());
  readonly preference = signal<ThemePreference>(this.getInitialPreference());

  readonly theme = computed<Theme>(() => {
    const pref = this.preference();
    if (pref === 'system') return this.systemDark() ? 'dark' : 'light';
    return pref;
  });

  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    if (this.isBrowser) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      mql.addEventListener('change', (e) => this.systemDark.set(e.matches));
    }

    effect(() => {
      const current = this.theme();
      const pref = this.preference();
      if (this.isBrowser) {
        document.documentElement.setAttribute('data-theme', current);
        localStorage.setItem('theme-preference', pref);
      }
    });
  }

  toggle(): void {
    this.preference.update((p) => {
      if (p === 'system') return 'light';
      if (p === 'light') return 'dark';
      return 'system';
    });
  }

  private getSystemDark(): boolean {
    if (!this.isBrowser) return true;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private getInitialPreference(): ThemePreference {
    if (!this.isBrowser) return 'system';
    const stored = localStorage.getItem('theme-preference');
    if (stored === 'system' || stored === 'light' || stored === 'dark') return stored;
    return 'system';
  }
}
