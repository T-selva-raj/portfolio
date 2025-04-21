import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import AOS from 'aos';
import { SkillsComponent } from "./skills/skills.component";
import { ExpComponent } from "./exp/exp.component";
import { ProjectsComponent } from "./projects/projects.component";
import { PlatformService } from './shared/platform.service';

@Component({
    selector: 'app-root',
    imports: [NavBarComponent, HomeComponent, AboutMeComponent, SkillsComponent, ExpComponent, ProjectsComponent],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    constructor(private platformService: PlatformService) { }

    ngOnInit(): void {
        if (this.platformService.isBrowser) {
            AOS.init();
            document.addEventListener('scroll', () => AOS.refresh())
        }
    }


}
