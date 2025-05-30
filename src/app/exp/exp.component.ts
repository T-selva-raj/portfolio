import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { fadeInOnEnterR } from '../shared/animations/animations';
import { PlatformService } from '../shared/platform.service';

declare var particlesJS: any;
@Component({
  selector: 'app-exp',
  imports: [],
  templateUrl: './exp.component.html',
  styleUrl: './exp.component.css',
  standalone: true,
  animations: [fadeInOnEnterR]
})
export class ExpComponent implements AfterViewInit {
  @ViewChildren('cards') observerTargets!: QueryList<ElementRef>;
  visibilityState = false;
  experiences = [
    {
      title: 'Software Developer',
      company: 'centizen inc & zenbasket',
      logo: './zenbasket-logo.png',
      duration: 'Jan 2024 – Present',
      description: 'I worked as a Software Developer at zenbasket. My responsibilities included developing and maintaining backend and frontend systems, implementing new features, and optimizing performance.'
    },
    {
      title: 'Software Developer Trainee',
      company: 'centizen inc & zenbasket',
      logo: './zenbasket-logo.png',
      duration: 'Jul 2023 – Dec 2023',
      description: 'As a Software Developer Trainee at zenbasket, I underwent comprehensive training in software development methodologies, technologies, and tools. I actively participated in various projects and gained practical experience in software development.'
    },
    {
      title: 'Intern',
      company: 'centizen inc',
      logo: './zenbasket-logo.png',
      duration: 'Feb 2023 – Jun 2023',
      description: 'During the internship, I gained hands-on experience with Node.js, Express.js, and Passport.js for backend development. I worked with MySQL and PostgreSQL for database management and learned to build RESTful APIs. I also explored Angular basics, which helped me understand front-end development and full-stack integration using the MEAN stack.'
    },
    {
      title: 'BE Computer science and engineering',
      company: 'Einstein college of engineering',
      logo: './zenbasket-logo.png',
      duration: '2019-2023',
      description: 'I pursued my Bachelor of Engineering  in computer science from Einstein College of Engineering . During this period, I acquired a solid foundation in IT concepts, software development, and related subjects'
    }
  ];

  constructor(
    private platformService: PlatformService) { }
  ngAfterViewInit(): void {
    if (this.platformService.isBrowser) {
      this.observerTargets.forEach((el: ElementRef, index: number) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              this.visibilityState = true;
            }
          },
          { threshold: 0.3 }
        );

        observer.observe(el.nativeElement);
        this.visibilityState = false;
      });
      setTimeout(() => {
        this.loadParticles();
      }, 10);
    }
  }

  loadParticles(): void {
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-exp', {
        "particles": {
          "number": {
            "value": 200,
            "density": {
              "enable": true,
              "value_area": 1362.9002517356944
            }
          },
          "color": { "value": "#ffffff" },
          "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" },
            "polygon": { "nb_sides": 5 },
            "image": { "src": "img/github.svg", "width": 100, "height": 100 }
          },
          "opacity": {
            "value": 0.5, "random": false,
            "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
          },
          "size": {
            "value": 3, "random": true,
            "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
          },
          "line_linked": {
            "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
          },
          "move": {
            "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false,
            "out_mode": "out", "bounce": false,
            "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": { "enable": false, "mode": "bubble" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
          },
          "modes": {
            "grab": { "distance": 328.891, "line_linked": { "opacity": 1 } },
            "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
            "repulse": { "distance": 200, "duration": 0.4 },
            "push": { "particles_nb": 4 },
            "remove": { "particles_nb": 2 }
          }
        },
        "retina_detect": true
      });
    }
  }
}
