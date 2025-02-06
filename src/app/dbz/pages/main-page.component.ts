import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
  standalone: false
})

export class MainPageComponent {
  public characters: Character[] = [{
    name: 'krillin',
    power: 500,
  },
  {
    name: 'goku',
    power: 10000
  },
  {
    name: 'vegeta',
    power: 7500
  }
]
}
