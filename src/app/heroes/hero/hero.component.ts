import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

 public name: string = 'ironman';
 public age: number = 45;

 get capitalizadeName(): string {
  return this.name.toUpperCase();
 }

 getHeroDescription(): string {
  return `${this.name} - ${this.age}`
 }

 changeHeroName(): void {
  this.name = 'captain america';
 }

 changeHeroAge(): void {
  this.age = 100;
 }
}
