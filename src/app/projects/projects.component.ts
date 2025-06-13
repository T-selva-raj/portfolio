import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: "Personal Portfolio",
      image: "./projects/portfolio.png",
      description: "I developed a modern personal portfolio using Angular 18 and Tailwind CSS to showcase my skills, projects, and experience. The application features smooth animations to enhance user engagement and interactivity. It is fully responsive, ensuring optimal performance across devices. I deployed the project using Vercel for fast and reliable hosting",
      link: '#'
    },
    {
      name: "Task Management Application",
      image: "./projects/task.png",
      description: "I developed a full-stack Task Management Application using Angular and Angular Material for a clean, responsive user interface. The backend is powered by Node.js and Express, with data stored and managed in a PostgreSQL database. The app allows users to create, update, categorize, and track tasks efficiently, with a focus on usability and performance across devices.",
      link: 'https://to-do-selva.vercel.app'
    },
    {
      name: "RKC (Kabaddi Tournament Management Application)",
      image: "./projects/rkc.png",
      description: "Currently developing a full-stack Kabaddi Tournament Management Application using Angular, Node.js, MongoDB, and PrimeNG. The app will handle key features like team registration, player verification, fixtures, and score updates, aiming to simplify event coordination. The goal is to create a responsive, centralized platform that helps organizers manage kabaddi tournaments more efficiently.",
      link: 'https://github.com/T-selva-raj/RKC-admin'
    }
  ]
}
