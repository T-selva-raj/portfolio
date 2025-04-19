import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements AfterViewInit, OnInit {
  @ViewChild('skillsContainer') skillsContainer!: ElementRef;
  skills = [
    { name: 'HTML', icon: './skills/html.png' },
    { name: 'CSS', icon: './skills/css.png' },
    { name: 'Vanilla JS', icon: './skills/js.png' },
    { name: 'Bootstrap', icon: './skills/bootstrap.png' },
    { name: 'Tailwind CSS', icon: './skills/tailwind.png' },
    { name: 'Angular', icon: './skills/angular.png' },
    { name: 'Angular material', icon: './skills/angular-material.png' },
    { name: 'Node Js', icon: './skills/node.png' },
    { name: 'Express Js', icon: './skills/express.png' },
    { name: 'GraphQl', icon: './skills/GraphQL.png' },
    { name: 'Passport JS', icon: './skills/passport.png' },
    { name: 'MYSQL', icon: './skills/sql.png' },
    { name: 'Postgres SQL', icon: './skills/postgres.png' },
    { name: 'MongoDB', icon: './skills/mongodb.png' },
    { name: 'Git', icon: './skills/git.png' },
    { name: 'Github', icon: './skills/github.png' },
    { name: 'NPM', icon: './skills/npm.png' },
    { name: 'Firebase', icon: './skills/firebase.png' },
    { name: 'Python', icon: './skills/python.png' },
    { name: 'C', icon: './skills/c.png' },
    { name: 'Canva', icon: './skills/canva.png' },
    { name: 'Postman', icon: './skills/postman.png' },
    { name: 'VS code', icon: './skills/vscode.png' },
    { name: 'React basics', icon: './skills/react.png' },
    { name: 'Swagger Documentation', icon: './skills/swagger.png' }
  ];

  visibleIcons = signal<boolean[]>([]);

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  ngOnInit() {
    this.visibleIcons.set(Array(this.skills.length).fill(false));
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateIcons();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(this.el.nativeElement);
    }
  }

  animateIcons() {
    const icons = this.visibleIcons();
    for (let i = 0; i < icons.length; i++) {
      setTimeout(() => {
        const updated = [...this.visibleIcons()];
        updated[i] = true;
        this.visibleIcons.set(updated);
      }, i * 200);
    }
  }
}
