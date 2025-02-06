import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './app-heroes-list.component.html',
  styleUrl: './app-heroes-list.component.css'
})
export class AppHeroesListComponent {

  public heroesName:string [] = ['spiderman', 'ironman', 'hulk', 'thor'];

  public deleteHeroe?: string = '';

  removeHeroe(): void {
    this.deleteHeroe = this.heroesName.pop();
  }
}
