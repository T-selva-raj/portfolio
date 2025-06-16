import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TypeComponent } from "../type/type.component";
import { fadeInOnEnterL, fadeInOnEnterR } from '../shared/animations/animations';
import { PlatformService } from '../shared/platform.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.css'],
  animations: [fadeInOnEnterL, fadeInOnEnterR],
  imports: [TypeComponent]
})
export class HomeComponent implements AfterViewInit {
  headings: string[] = ["AN ANGULAR DEVELOPER", "A NODE JS DEVELOPER", "AN UI/UX DESIGNER"];
  @ViewChildren('observerTarget') observerTargets!: QueryList<ElementRef>;
  visibilityStates: boolean[] = [];
  constructor(
    private platformService: PlatformService) { }
  ngAfterViewInit(): void {
    if (this.platformService.isBrowser) {
      this.observerTargets.forEach((el: ElementRef, index: number) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              this.visibilityStates[index] = true;
            }
          },
          { threshold: 0.3 }
        );

        observer.observe(el.nativeElement);
        this.visibilityStates[index] = false;
      });
    }
  }
  openResume() {
    window.open('https://drive.google.com/file/d/1PyDDHFeaec5a7qfZNaLqzhp_D9WZjen0/view?usp=drive_link', '_blank');
  }

}
