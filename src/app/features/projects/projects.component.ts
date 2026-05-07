import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

interface ProjectTech {
  name: string;
  logo: string;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
  stars: number;
  techPower: number;
  complexity: number;
  technologies: ProjectTech[];
  fullDescription: string;
  github?: string;
  demo?: string;
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
      id: 1,
      title: 'Analizador de Imágenes de Minerales',
      description: 'Proyecto con JavaScript y Python para análisis de imágenes de minerales usando inteligencia artificial',
      imageUrl: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1732908394/d78a3f28-3e47-4140-8236-75bf97bbab00.png',
      icon: '🤖',
      stars: 4,
      techPower: 95,
      complexity: 85,
      technologies: [
        { name: 'Python', logo: '🐍', color: '#3776AB' },
        { name: 'JavaScript', logo: '📜', color: '#F7DF1E' },
        { name: 'Ultralytics', logo: '🔬', color: '#00B0FF' },
        { name: 'Roboflow', logo: '📊', color: '#FF6B6B' }
      ],
      fullDescription: 'Sistema inteligente de visión por computadora que clasifica y analiza imágenes de minerales en tiempo real usando redes neuronales convolucionales. Integra Ultralytics YOLO para detección de objetos y Roboflow para gestión de datasets.',
      github: 'https://github.com/Zifrikc/AnaliticGameCSGO',
      demo: 'https://demo.com'
    },
    {
      id: 2,
      title: 'Ionic App - Calculadora Base 10',
      description: 'Calculadora de números Base 10 para colegios con interfaz educativa intuitiva',
      imageUrl: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1756075983/project2_slide_j28jrm.png',
      icon: '📱',
      stars: 3,
      techPower: 70,
      complexity: 55,
      technologies: [
        { name: 'Ionic', logo: '⚡', color: '#176BFF' },
        { name: 'Angular', logo: '🔴', color: '#DD0031' },
        { name: 'TypeScript', logo: '💙', color: '#2B7A0B' },
        { name: 'Mobile', logo: '📱', color: '#1abc9c' }
      ],
      fullDescription: 'Aplicación móvil educativa desarrollada con Ionic Framework que permite a estudiantes practicar conversión y operaciones en sistema numérico Base 10. Incluye ejercicios progresivos, estadísticas de aprendizaje y interfaz gamificada.',
      github: 'https://github.com/Zifrikc/CalculatorTop',
      demo: 'https://demo.com'
    },
    {
      id: 3,
      title: 'Dashboard de Análisis Retencion Cliente (ChurnInsight)',
      description: 'Plataforma web para visualización de datos de retencion de clientes en tiempo real',
      imageUrl: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1778130570/cf17671f-914d-4ddf-8efa-6162e323d6db.png',
      icon: '📈',
      stars: 5,
      techPower: 90,
      complexity: 80,
      technologies: [
        { name: 'Streamlit', logo: '🔴', color: '#DD0031' },
        { name: 'Python', logo: '🔄', color: '#B7178C' },
        { name: 'Matplotlib', logo: '📊', color: '#F9A03C' },
        { name: 'Java', logo: '🟢', color: '#339933' }
      ],
      fullDescription: 'Un dashboard interactivo construido con Angular y D3.js para monitorear métricas financieras clave. Incluye gráficos dinámicos, actualizaciones en tiempo real via WebSockets y exportación de reportes a PDF.',
      github: 'https://github.com/HackathonONELatam-ChurnInsight',
      demo: 'https://ChurnInsight.vercel.app/'
    },
    {
      id: 4,
      title: 'Crud AWS Serverless',
      description: 'Software empresarial para control de stock y facturación',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8ed745d140?q=80&w=800&auto=format&fit=crop',
      icon: '📦',
      stars: 4,
      techPower: 85,
      complexity: 75,
      technologies: [
        { name: 'Java', logo: '☕', color: '#007396' },
        { name: 'Spring Boot', logo: '🍃', color: '#6DB33F' },
        { name: 'PostgreSQL', logo: '🐘', color: '#336791' },
        { name: 'Docker', logo: '🐳', color: '#2496ED' }
      ],
      fullDescription: 'Aplicación backend robusta desarrollada en Java con Spring Boot para la gestión integral de inventarios. Cuenta con API REST, autenticación JWT, manejo de roles de usuario y despliegue contenedorizado con Docker.',
      github: 'https://github.com/FS-DevAsh/CrudAwsApp',
      demo: 'https://demo.com'
    },
    {
      id: 5,
      title: 'Multi Cloud Reporting Metrics',
      description: 'Dashboard de gestion de alertas de servicios en la nube',
      imageUrl: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1778133179/f6b0e5da-94a9-4c86-afaf-6dedee52de19.png',
      icon: '🛒',
      stars: 4,
      techPower: 80,
      complexity: 70,
      technologies: [
        { name: 'Angular', logo: '⚛️', color: '#61DAFB' },
        { name: 'Node.js', logo: '▲', color: '#000000' },
        { name: 'Java', logo: '🌊', color: '#06B6D4' },
        { name: 'Python', logo: '💳', color: '#008CDD' }
      ],
      fullDescription: 'Plataforma de comercio electrónico de alto rendimiento desarrollada con Next.js. Ofrece navegación ultrarrápida, carrito de compras persistente, integración de pagos con Stripe y diseño responsive con Tailwind CSS.',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 6,
      title: 'App de Gestión de Tareas Colaborativa',
      description: 'Aplicación en tiempo real para organizar equipos y proyectos',
      imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop',
      icon: '✅',
      stars: 5,
      techPower: 88,
      complexity: 82,
      technologies: [
        { name: 'Vue.js', logo: '💚', color: '#4FC08D' },
        { name: 'Firebase', logo: '🔥', color: '#FFCA28' },
        { name: 'Vuex', logo: '📦', color: '#4FC08D' },
        { name: 'Sass', logo: '💅', color: '#CC6699' }
      ],
      fullDescription: 'Herramienta de productividad que permite a los equipos crear tableros Kanban, asignar tareas, comentar y recibir notificaciones instantáneas gracias a la base de datos en tiempo real de Firebase.',
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  selectedProject: Project | null = null;
  isModalOpen: boolean = false;
  hoveredProjectId: number | null = null;

  openProjectModal(project: Project): void {
    this.selectedProject = project;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal(): void {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
    this.selectedProject = null;
  }

  getStarArray(count: number): number[] {
    return Array(count).fill(0).map((_, i) => i);
  }
}
