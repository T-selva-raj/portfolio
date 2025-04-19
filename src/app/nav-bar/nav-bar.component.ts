import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements AfterViewInit {

  lastScrollTop = 0;
  isHidden = false;
  currentSection: string = 'home';
  isMenuOpen = false;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.currentSection = entry.target.id;
          }
        });
      }, options);

      const sections = document.querySelectorAll('section');
      sections.forEach(section => observer.observe(section));
    }
  }

  scrollToTop() {
    if (this.isMenuOpen == true) this.isMenuOpen = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  scrollToSection(sectionId: string) {
    if (this.isMenuOpen == true) this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
