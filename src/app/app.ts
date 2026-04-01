import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParticleBackgroundComponent } from './canvas/particle-background';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParticleBackgroundComponent],
  template: `
    <app-particle-background />
    <div class="relative z-10">
      <router-outlet />
    </div>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100vh;
    }
  `,
})
export class App {}
