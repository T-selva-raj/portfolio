import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import { PlatformService } from '../shared/platform.service';

@Component({
  selector: 'app-type',
  imports: [],
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})
export class TypeComponent implements AfterViewInit {
  @ViewChild('typedText') typedTextElement: ElementRef | undefined;
  @Input('strings') strings: string[] = ["AN ANGULAR DEVELOPER", "A NODE JS DEVELOPER", "AN UI/UX DESIGNER"];
  constructor(private platformService: PlatformService) { }
  ngAfterViewInit(): void {
    if (this.platformService.isBrowser && this.typedTextElement) {
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
