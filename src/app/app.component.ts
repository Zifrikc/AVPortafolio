import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { SkillsComponent } from './features/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HeroComponent, ProjectsComponent, FooterComponent, SkillsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landingPortafolioApp';
  showMecha = false;

  openMecha() {
    this.showMecha = true;
    document.body.style.overflow = 'hidden';
    // ESC key to close
    window.addEventListener('keydown', this.onEscKey);
  }

  closeMecha() {
    this.showMecha = false;
    document.body.style.overflow = '';
    window.removeEventListener('keydown', this.onEscKey);
  }

  onEscKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') this.closeMecha();
  };
}

