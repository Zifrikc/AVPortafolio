import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
export class HeroComponent {
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
}
