import { AfterViewInit, Component, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformService } from '../shared/platform.service';
import { SectionService } from '../shared/section.service';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements AfterViewInit {

  currentButton: string = 'home-button';
  isMenuOpen = false;
  currentSectionId = computed(() => this.sectionService.currentSectionId());
  constructor(
    private platformService: PlatformService,
    private sectionService: SectionService
  ) {
  }
  ngAfterViewInit(): void {
    if (this.platformService.isBrowser) {
      const currentButtonElement = document.getElementById(this.currentButton);
      currentButtonElement?.classList.add('active');

    }
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  scrollToTop() {
    if (this.isMenuOpen == true) this.isMenuOpen = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  scrollToSection(sectionId: string, event?: any) {
    if (this.isMenuOpen == true) this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (event) {
      const preivousButton = document.getElementById(this.currentButton);
      if (preivousButton) preivousButton.classList.remove('active');
      const currentActiveButton = event?.target as HTMLElement;
      this.currentButton = currentActiveButton.id;
      currentActiveButton.classList.toggle('active');
    }
  }

}
