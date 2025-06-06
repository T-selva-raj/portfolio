import { AfterViewInit, Component } from '@angular/core';
import { fadeInUp } from '../shared/animations/animations';

declare var particlesJS: any;

@Component({
  selector: 'app-about-me',
  imports: [],
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [fadeInUp]
})
export class AboutMeComponent implements AfterViewInit {
  ngAfterViewInit(): void {


    setTimeout(() => {
      this.loadParticles();
    }, 0);
  }

  loadParticles(): void {
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-about', {
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


