import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  viewChild,
  afterNextRender,
  OnDestroy,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../core/services/theme.service';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

@Component({
  selector: 'app-particle-background',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <canvas
      #canvas
      class="fixed inset-0 w-full h-full pointer-events-none"
      style="z-index: 0;"
      aria-hidden="true"
    ></canvas>
  `,
})
export class ParticleBackgroundComponent implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private readonly themeService = inject(ThemeService);

  private ctx: CanvasRenderingContext2D | null = null;
  private particles: Particle[] = [];
  private animationId = 0;
  private mouseX = -1000;
  private mouseY = -1000;
  private readonly CONNECTION_DISTANCE = 120;
  private readonly MOUSE_RADIUS = 150;
  private readonly PARTICLE_COUNT_DESKTOP = 80;
  private readonly PARTICLE_COUNT_MOBILE = 35;

  private onMouseMove = (e: MouseEvent): void => {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  };

  private onResize = (): void => {
    const canvas = this.canvasRef().nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.initParticles();
  };

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      const canvas = this.canvasRef().nativeElement;
      this.ctx = canvas.getContext('2d');
      if (!this.ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      this.initParticles();
      this.animate();

      window.addEventListener('mousemove', this.onMouseMove, { passive: true });
      window.addEventListener('resize', this.onResize, { passive: true });
    });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('resize', this.onResize);
    }
  }

  private initParticles(): void {
    const canvas = this.canvasRef().nativeElement;
    const count = canvas.width < 768 ? this.PARTICLE_COUNT_MOBILE : this.PARTICLE_COUNT_DESKTOP;

    this.particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 0.5,
    }));
  }

  private animate = (): void => {
    if (!this.ctx) return;
    const canvas = this.canvasRef().nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    const isDark = this.themeService.isDark();
    const colorRGB = isDark ? '100, 255, 218' : '15, 118, 110'; // Teal base for dark, darker slate/teal for light

    // Update & draw particles
    for (const p of this.particles) {
      // Mouse repulsion
      const dx = p.x - this.mouseX;
      const dy = p.y - this.mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < this.MOUSE_RADIUS && dist > 0) {
        const force = (this.MOUSE_RADIUS - dist) / this.MOUSE_RADIUS;
        p.vx += (dx / dist) * force * 0.5;
        p.vy += (dy / dist) * force * 0.5;
      }

      // Apply velocity with damping
      p.vx *= 0.98;
      p.vy *= 0.98;
      p.x += p.vx;
      p.y += p.vy;

      // Wrap edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${colorRGB}, 0.5)`;
      this.ctx.fill();
    }

    // Draw connections
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.CONNECTION_DISTANCE) {
          const opacity = (1 - dist / this.CONNECTION_DISTANCE) * 0.2;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(${colorRGB}, ${opacity})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    }

    this.animationId = requestAnimationFrame(this.animate);
  };
}
