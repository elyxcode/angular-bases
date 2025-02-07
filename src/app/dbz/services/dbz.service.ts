import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'krillin',
      power: 500,
    },
    {
      id: uuid(),
      name: 'goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'vegeta',
      power: 7500
    }
  ];

  setCharacter(character: Character): void {

    const newCharacter: Character = { ...character, id: uuid() }

    this.characters.push(newCharacter)
  }

  // removeCharacter(index: number){
  //   this.characters.splice(index, 1);
  // }

  removeCharacterbyId(id: string){
    this.characters =  this.characters.filter(c => c.id !== id)
  }

}
