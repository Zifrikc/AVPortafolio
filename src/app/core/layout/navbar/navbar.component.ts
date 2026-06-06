import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isBrowser: boolean;
  isDiagnosticsOpen = false;
  
  // Custom HUD Diagnostics States
  isAudioMuted = false;
  isGlitchesReduced = false;
  activeColorTheme: 'cian' | 'fucsia' = 'cian';

  navLinks: NavLink[] = [
    { label: 'INICIO', path: '#home', icon: 'home' },
    { label: 'HABILIDADES', path: '#skills', icon: 'bolt' },
    { label: 'PROYECTOS', path: '#projects', icon: 'work' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.applySavedTheme();
    }
  }

  toggleDiagnostics() {
    this.isDiagnosticsOpen = !this.isDiagnosticsOpen;
    this.playUIAudio(600, 'sine', 0.08); // Diagnostic beep
  }

  // Smooth single page scroll function
  scrollToSection(event: Event, path: string) {
    if (!this.isBrowser) return;
    event.preventDefault();

    const targetElement = document.querySelector(path);
    if (targetElement) {
      this.playUIAudio(880, 'sine', 0.05); // High frequency nav click sound
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      this.isDiagnosticsOpen = false; // Close diagnostics on navigation
    }
  }

  // Diagnostics Toggles
  toggleAudioEffects() {
    this.isAudioMuted = !this.isAudioMuted;
    if (this.isBrowser) {
      if (this.isAudioMuted) {
        document.body.classList.add('effects-muted');
      } else {
        document.body.classList.remove('effects-muted');
      }
      localStorage.setItem('sys_audio_muted', this.isAudioMuted ? 'true' : 'false');
    }
    this.playUIAudio(400, 'sine', 0.1);
  }

  toggleGlitches() {
    this.isGlitchesReduced = !this.isGlitchesReduced;
    if (this.isBrowser) {
      if (this.isGlitchesReduced) {
        document.body.classList.add('reduced-glitches');
      } else {
        document.body.classList.remove('reduced-glitches');
      }
      localStorage.setItem('sys_glitches_reduced', this.isGlitchesReduced ? 'true' : 'false');
    }
    this.playUIAudio(500, 'triangle', 0.1);
  }

  changeColorTheme(theme: 'cian' | 'fucsia') {
    this.activeColorTheme = theme;
    if (this.isBrowser) {
      if (theme === 'fucsia') {
        document.body.classList.add('theme-pink-neon');
      } else {
        document.body.classList.remove('theme-pink-neon');
      }
      localStorage.setItem('sys_color_theme', theme);
    }
    this.playUIAudio(700, 'sine', 0.12);
  }

  private applySavedTheme() {
    const savedAudio = localStorage.getItem('sys_audio_muted') === 'true';
    const savedGlitch = localStorage.getItem('sys_glitches_reduced') === 'true';
    const savedTheme = localStorage.getItem('sys_color_theme') as 'cian' | 'fucsia' || 'cian';

    this.isAudioMuted = savedAudio;
    this.isGlitchesReduced = savedGlitch;
    this.activeColorTheme = savedTheme;

    if (savedAudio) document.body.classList.add('effects-muted');
    if (savedGlitch) document.body.classList.add('reduced-glitches');
    if (savedTheme === 'fucsia') document.body.classList.add('theme-pink-neon');
  }

  // Mini native synth for navigation audio feedback
  private playUIAudio(frequency: number, type: 'sine' | 'triangle' = 'sine', duration = 0.1) {
    if (!this.isBrowser || this.isAudioMuted) return;

    try {
      const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      
      gainNode.gain.setValueAtTime(0.015, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  }
}
