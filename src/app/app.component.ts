import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
import { SkillsComponent } from "./skills/skills.component";
import { ExpComponent } from "./exp/exp.component";

@Component({
    selector: 'app-root',
    imports: [NavBarComponent, HomeComponent, AboutMeComponent, SkillsComponent, ExpComponent],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            AOS.init();
            document.addEventListener('scroll', () => AOS.refresh())
        }
    }


}
