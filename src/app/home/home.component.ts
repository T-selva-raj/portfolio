import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TypeComponent } from "../type/type.component";
import { fadeInOnEnterL, fadeInOnEnterR } from '../shared/animations/animations';

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

  ngAfterViewInit(): void {
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