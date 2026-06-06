import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  isBrowser: boolean;
  
  // Typing Effect Properties
  phrases = [
    'Desarrollador web profesional.',
    'Ingeniero de Software Backend & Cloud.',
    'Especialista en Inteligencia Artificial y Datos.',
    'Creador de Soluciones Web de Alto Rendimiento.'
  ];
  currentText = '';
  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimeout: any = null;

  certificates = [
    {
      title: 'Java y Spring Boot',
      issuer: 'Alura Latam',
      image: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1756080086/7a4241a9-9f44-4a1d-a5fa-2970dd5a8f5e.png'
    },
    {
      title: 'Certificado Programa',
      issuer: 'Alura Latam',
      image: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1756080113/39d992d1-ed90-4f5e-bc5f-57acedd599e9.png'
    },
    {
      title: 'Inteligencia Artificial',
      issuer: 'Oracle + Alura',
      image: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1756080131/de4b6f6c-2cd2-4b06-a057-1e05dc6a81fc.png'
    },
    {
      title: 'Nuevo Certificado 1',
      issuer: 'Plataforma / Institución',
      image: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1778127771/36056847-5c4f-42a3-b47e-3572dc4f7db7.png'
    },
    {
      title: 'Nuevo Certificado 2',
      issuer: 'Plataforma / Institución',
      image: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1778127629/579ddbaa-b95b-4a5f-87b2-e8f8260a8fff.png'
    },
    {
      title: 'Nuevo Certificado 3',
      issuer: 'Plataforma / Institución',
      image: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1778127614/df7c3054-2c95-4f83-9149-577ac929ccdf.png'
    },
    {
      title: 'Nuevo Certificado 4',
      issuer: 'Plataforma / Institución',
      image: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1778127588/189d450d-693e-47a8-a17c-f419dcea9440.png'
    },
    {
      title: 'OCI Foundations Associate',
      issuer: 'Oracle',
      image: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1778127564/OCI25FNDCFA_r4zdtn.jpg'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.typePhrase();
    } else {
      this.currentText = this.phrases[0];
    }
  }

  ngOnDestroy() {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
  }

  // Pure dynamic terminal text typing effect
  typePhrase() {
    const currentPhrase = this.phrases[this.phraseIndex];
    
    if (this.isDeleting) {
      this.currentText = currentPhrase.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentText = currentPhrase.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.isDeleting ? 30 : 75;

    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      typeSpeed = 2000; // Wait 2s on full typed phrase
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      typeSpeed = 500; // Pause 0.5s before next phrase
    }

    this.typingTimeout = setTimeout(() => {
      this.typePhrase();
    }, typeSpeed);
  }
}
