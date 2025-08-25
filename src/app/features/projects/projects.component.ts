import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Analizador de imagenes de minerales ',
      description: 'Proyecto con java script y python para el analisis de imagenes de minerales usando inteligencia artificial ultralitics y roboflow',
      imageUrl: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1732908394/d78a3f28-3e47-4140-8236-75bf97bbab00.png'
    },
    {
      title: 'Ionic App',
      description: 'Calculadora de  numeros Base 10 para colegios',
      imageUrl: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1756075983/project2_slide_j28jrm.png'
    },
    // Agrega más proyectos según sea necesario
  ];
}
