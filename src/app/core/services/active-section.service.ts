import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActiveSectionService {
  readonly activeSection = signal<string>('hero');

  setActive(section: string): void {
    this.activeSection.set(section);
  }
}
