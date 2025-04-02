import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typedText') typedTextElement: ElementRef | undefined;

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined' && this.typedTextElement) {
      const options = {
        strings: ["An Angular developer", "A Node js developer", "An UI designer"],
        typeSpeed: 20,
        backSpeed: 10,
        backDelay: 1500,
        startDelay: 600,
        loop: true,
      };
      const typed = new Typed(this.typedTextElement.nativeElement, options);
    }
  }
}
