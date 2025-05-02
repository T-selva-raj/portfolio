import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor() { }
  currentSectionId = signal<string>('home');
}
