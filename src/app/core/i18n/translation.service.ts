import { Injectable, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Locale, Translations } from './translation.model';
import { en } from './en';
import { es } from './es';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly locale = signal<Locale>(this.getInitialLocale());
  readonly translations = computed<Translations>(() => (this.locale() === 'es' ? es : en));

  toggleLocale(): void {
    const next = this.locale() === 'en' ? 'es' : 'en';
    this.locale.set(next);
    if (this.isBrowser) {
      localStorage.setItem('locale', next);
      document.documentElement.lang = next;
    }
  }

  private getInitialLocale(): Locale {
    if (!this.isBrowser) return 'en';
    const stored = localStorage.getItem('locale');
    if (stored === 'en' || stored === 'es') return stored;
    return navigator.language.startsWith('es') ? 'es' : 'en';
  }
}
