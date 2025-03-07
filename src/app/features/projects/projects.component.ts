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
      title: 'Proyecto 1',
      description: 'Descripción breve del proyecto 1',
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción breve del proyecto 2',
      imageUrl: 'https://via.placeholder.com/300x200'
    },
    // Agrega más proyectos según sea necesario
  ];
}
