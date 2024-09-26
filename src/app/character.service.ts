import { Injectable, signal } from '@angular/core';

export interface Character {
  name: string;
  class: string;
  bodyColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  character = signal<Character>({
    name: 'Neuer Held',
    class: 'Krieger',
    bodyColor: '#FFB6C1' // Ein helles Rosa als Beispiel
  });

  updateCharacter(newCharacter: Partial<Character>) {
    this.character.update(char => ({ ...char, ...newCharacter }));
  }
}