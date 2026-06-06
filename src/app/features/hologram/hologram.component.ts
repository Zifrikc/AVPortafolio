import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TerminalLine {
  text: string;
  type: 'input' | 'system' | 'response' | 'error';
  timestamp: string;
}

@Component({
  selector: 'app-hologram',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hologram.component.html',
  styleUrl: './hologram.component.css'
})
export class HologramComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('terminalBody') private terminalBody!: ElementRef;
  @ViewChild('audioCanvas') private audioCanvas!: ElementRef;

  isBrowser: boolean;
  isOpen = false;
  isGlitching = false;
  isMuted = false;
  isThinking = false;
  systemStability = 98.4;
  syncFrequency = 432;
  
  // Terminal state
  userInput = '';
  terminalLines: TerminalLine[] = [];
  
  // Audio Context for Synth
  private audioCtx: any = null;
  private canvasCtx: any = null;
  private animationFrameId: number | null = null;
  private glitchIntervalId: any = null;
  private stabilityIntervalId: any = null;

  // Predefined Chatbot Knowledge Base
  private answers: { [key: string]: string } = {
    help: 'Comandos disponibles: \n > about    - Información sobre el núcleo de Ashley Zifrikc\n > projects - Ver los principales proyectos\n > skills   - Ver habilidades analíticas y de desarrollo\n > system   - Estado de diagnóstico de la IA NEXUS\n > clear    - Limpiar consola de comando\n > mute     - Silenciar/Activar sonidos de interfaz\n > exit     - Apagar terminal holográfica',
    about: 'Ashley Zifrikc V.T. - Desarrollador Web Profesional.\nEspecialista en desarrollo Backend, Cloud, IA y Frontend moderno.\nVisión: Diseñar y construir aplicaciones web de alto rendimiento que conecten, inspiren y resuelvan problemas reales de manera óptima.\nEstado: Totalmente operacional.',
    projects: 'Proyectos Destacados Registrados:\n1. Analizador de Minerales (AI + Python + YOLO)\n2. ChurnInsight (Análisis de Retención de Clientes)\n3. CRUD AWS Serverless (Java, Spring, Cloud, Docker)\n4. Multi Cloud Reporting Metrics (Angular + Node + Java)\nEscribe el número del proyecto o escribe "projects" para ver más detalles.',
    skills: 'Stack Tecnológico Cargado:\n- Frontend: Angular, TypeScript, HTML5/CSS3, JavaScript\n- Backend: Spring Boot, .NET C#, Node.js\n- Datos & DevOps: SQL, AWS Cloud, Git, Docker, Python\nNivel de Integración: Excelente.',
    system: 'DIAGNÓSTICO DEL SISTEMA NEXUS v7.4.2:\n- Core: Operacional (Green)\n- Estabilidad del Enlace: 98.4%\n- Latencia: 14ms\n- Sincronización Neural: Estable (432Hz)\n- Integración ElevenLabs: Activa'
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.initTerminal();
      this.startGlitchLoop();
      this.startStabilityLoop();
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnDestroy() {
    if (this.glitchIntervalId) clearInterval(this.glitchIntervalId);
    if (this.stabilityIntervalId) clearInterval(this.stabilityIntervalId);
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    if (this.audioCtx) {
      try {
        this.audioCtx.close();
      } catch (e) {}
    }
  }

  private initTerminal() {
    const time = this.getCurrentTime();
    this.terminalLines = [
      { text: 'NEXUS COGNITIVE CORE v7.4.2 INITIALIZING...', type: 'system', timestamp: time },
      { text: 'ESTABLISHING SECURE PROTOCOL LINK...', type: 'system', timestamp: time },
      { text: 'ONLINE. Welcome, User. I am NEXUS, Ashley\'s cybernetic avatar.', type: 'response', timestamp: time },
      { text: 'Escribe "help" para ver los comandos interactivos del terminal.', type: 'system', timestamp: time }
    ];
  }

  private startGlitchLoop() {
    this.glitchIntervalId = setInterval(() => {
      if (Math.random() > 0.85) {
        this.isGlitching = true;
        this.playSynthSound(45, 'triangle', 0.1, 0.04); // Sonido de glitch aleatorio suave
        setTimeout(() => {
          this.isGlitching = false;
        }, 150 + Math.random() * 200);
      }
    }, 3000);
  }

  private startStabilityLoop() {
    this.stabilityIntervalId = setInterval(() => {
      this.systemStability = parseFloat((95 + Math.random() * 4.9).toFixed(1));
      this.syncFrequency = Math.floor(428 + Math.random() * 8);
    }, 4000);
  }

  toggleHologram() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.playSynthSound(587.33, 'sine', 0.15, 0.05); // D5 Note
      setTimeout(() => this.playSynthSound(880, 'sine', 0.2, 0.05), 80); // A5 Note
      setTimeout(() => {
        this.startWaveformVisualizer();
      }, 100);
    } else {
      this.playSynthSound(220, 'sine', 0.2, 0.08); // A3 Note
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }
    }
  }

  // --- WEB AUDIO SYNTH PROTOCOLS ---
  private initAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playSynthSound(frequency: number, type: 'sine' | 'square' | 'triangle' | 'sawtooth' = 'sine', duration = 0.1, volume = 0.05) {
    if (this.isMuted || !this.isBrowser) return;

    try {
      this.initAudioContext();
      
      const osc = this.audioCtx.createOscillator();
      const gainNode = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);
      
      // Cyberpunk glitch tone sweep if square
      if (type === 'square') {
        osc.frequency.exponentialRampToValueAtTime(frequency / 2, this.audioCtx.currentTime + duration);
      }

      gainNode.gain.setValueAtTime(volume, this.audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

      osc.connect(gainNode);
      gainNode.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio Context block or unsupported:', e);
    }
  }

  // Draw cybernetic waveforms in canvas
  private startWaveformVisualizer() {
    if (!this.audioCanvas) return;
    const canvas = this.audioCanvas.nativeElement;
    this.canvasCtx = canvas.getContext('2d');
    canvas.width = 180;
    canvas.height = 50;

    let offset = 0;
    const draw = () => {
      if (!this.isOpen) return;
      this.animationFrameId = requestAnimationFrame(draw);

      this.canvasCtx.fillStyle = 'rgba(20, 20, 22, 0.3)';
      this.canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

      this.canvasCtx.lineWidth = 1.5;
      this.canvasCtx.strokeStyle = this.isGlitching ? '#ff0055' : '#00f0ff';
      this.canvasCtx.beginPath();

      const sliceWidth = canvas.width / 50;
      let x = 0;

      for (let i = 0; i < 50; i++) {
        // Draw cyber sine waves
        const frequencyScale = this.isThinking ? 4 : 2;
        const amplitude = this.isThinking ? 15 : (this.isGlitching ? 18 : 6);
        const y = canvas.height / 2 + Math.sin(i * 0.35 + offset) * amplitude + (Math.random() - 0.5) * (this.isGlitching ? 5 : 0);

        if (i === 0) {
          this.canvasCtx.moveTo(x, y);
        } else {
          this.canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      this.canvasCtx.stroke();
      offset += this.isThinking ? 0.25 : 0.08;

      // Draw secondary matrix ring decoration
      this.canvasCtx.beginPath();
      this.canvasCtx.strokeStyle = 'rgba(26, 188, 156, 0.15)';
      this.canvasCtx.arc(canvas.width / 2, canvas.height / 2, 22, 0, Math.PI * 2);
      this.canvasCtx.stroke();
    };

    draw();
  }

  // --- TERMINAL COMMAND LOGIC ---
  handleCommandSubmit() {
    const cmd = this.userInput.trim().toLowerCase();
    if (!cmd) return;

    const time = this.getCurrentTime();
    this.terminalLines.push({ text: `guest@nexus_core:~$ ${this.userInput}`, type: 'input', timestamp: time });
    this.userInput = '';

    this.isThinking = true;
    this.playSynthSound(800, 'square', 0.04, 0.01); // Quick mechanical cursor sound

    setTimeout(() => {
      this.processCommand(cmd, time);
      this.isThinking = false;
    }, 400 + Math.random() * 300);
  }

  private processCommand(cmd: string, timestamp: string) {
    this.playSynthSound(440, 'triangle', 0.08, 0.02); // Response beep

    if (cmd === 'clear') {
      this.terminalLines = [];
      return;
    }

    if (cmd === 'mute') {
      this.isMuted = !this.isMuted;
      this.terminalLines.push({
        text: `Mute status toggled: ${this.isMuted ? 'AUDIO DISABLED' : 'AUDIO ACTIVE'}`,
        type: 'system',
        timestamp
      });
      return;
    }

    if (cmd === 'exit') {
      this.terminalLines.push({ text: 'Closing active terminal connection. Safe travels, Netrunner.', type: 'response', timestamp });
      setTimeout(() => this.toggleHologram(), 1000);
      return;
    }

    if (cmd.startsWith('project')) {
      const parts = cmd.split(' ');
      if (parts.length > 1) {
        const id = parseInt(parts[1]);
        this.getProjectDetail(id, timestamp);
        return;
      }
    }

    if (this.answers[cmd]) {
      this.terminalLines.push({ text: this.answers[cmd], type: 'response', timestamp });
    } else {
      this.terminalLines.push({
        text: `NEXUS-ERROR: Command "${cmd}" not recognized. Type "help" for a list of directives.`,
        type: 'error',
        timestamp
      });
    }
  }

  private getProjectDetail(id: number, timestamp: string) {
    const details: { [key: number]: string } = {
      1: 'PROYECTO 1: Analizador de Imágenes de Minerales\n- Framework: JavaScript + Python (YOLO, Ultralytics, Roboflow)\n- AI-Scope: Detección y clasificación automatizada de minerales en tiempo real con redes neuronales.\n- Estado: Desplegado / Operacional.',
      2: 'PROYECTO 2: Ionic App - Calculadora Base 10\n- Framework: Ionic + Angular + TypeScript\n- Scope: Aplicación móvil interactiva para entornos educativos y de aprendizaje gamificado.\n- Estado: Producción.',
      3: 'PROYECTO 3: Dashboard de Análisis Retención Cliente (ChurnInsight)\n- Framework: Python, Streamlit, Matplotlib, Java, Angular\n- Scope: Predicción y visualización analítica de Churn Rate corporativo en tiempo real.\n- Estado: Producción.',
      4: 'PROYECTO 4: CRUD AWS Serverless\n- Framework: Java, Spring Boot, PostgreSQL, Docker, AWS Lambda\n- Scope: Microservicio backend escalable para facturación y stock serverless.\n- Estado: Desplegado en la nube AWS.'
    };

    if (details[id]) {
      this.terminalLines.push({ text: details[id], type: 'response', timestamp });
    } else {
      this.terminalLines.push({ text: `Project id ${id} not found. Type "projects" to see valid IDs.`, type: 'error', timestamp });
    }
  }

  getCurrentTime(): string {
    const d = new Date();
    return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
  }

  private scrollToBottom(): void {
    if (this.terminalBody) {
      try {
        this.terminalBody.nativeElement.scrollTop = this.terminalBody.nativeElement.scrollHeight;
      } catch (err) {}
    }
  }
}
