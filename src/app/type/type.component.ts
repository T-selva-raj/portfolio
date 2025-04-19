import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-type',
  imports: [],
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})
export class TypeComponent implements AfterViewInit {
  @ViewChild('typedText') typedTextElement: ElementRef | undefined;
  @Input('strings') strings: string[] = ["AN ANGULAR DEVELOPER", "A NODE JS DEVELOPER", "AN UI/UX DESIGNER"];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && this.typedTextElement) {
      const options = {
        strings: this.strings,
        typeSpeed: 80,
        backSpeed: 100,
        backDelay: 1500,
        startDelay: 300,
        loop: true,
      };
      new Typed(this.typedTextElement.nativeElement, options);
    }
  }
}
