import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ExpComponent } from "./exp/exp.component";
import { ProjectsComponent } from "./projects/projects.component";
import { PlatformService } from './shared/platform.service';
import { SectionService } from './shared/section.service';

@Component({
    selector: 'app-root',
    imports: [NavBarComponent, HomeComponent, AboutMeComponent, SkillsComponent, ExpComponent, ProjectsComponent],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    @ViewChildren('sectionRef') sectionRefs!: QueryList<ElementRef>;
    currentSection = '';
    constructor(private platformService: PlatformService, private sectionService: SectionService) { }

    ngOnInit(): void {

    }
    onContainerScroll() {
        if (this.platformService.isBrowser)
            for (const section of this.sectionRefs) {
                const rect = section.nativeElement.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    const id = section.nativeElement.getAttribute('id');
                    if (id && this.currentSection !== id) {
                        this.currentSection = id;
                        this.sectionService.currentSectionId.set(this.currentSection);
                    }
                    break;
                }
            }
    }
}
