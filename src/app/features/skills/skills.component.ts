import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', logo: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1756074608/angularlogo_tlw9h7.png' },
    { name: 'Spring Boot', logo: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1756073786/SpringBoot_logo_e12wxe.png' },
    { name: 'TypeScript', logo: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1756073770/aws__Log1_tellwe.png' },
    { name: 'HTML5 & CSS3', logo: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1756073780/WWEb_logo_r1e0ja.png' },
    { name: 'Java', logo: 'https://res.cloudinary.com/tecnologi-zifrikc/image/upload/v1756073791/JAva_Logo_lnxeop.png' }
  ];
}
