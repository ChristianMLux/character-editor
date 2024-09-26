import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { CharacterService, Character } from '../character.service';

type BodyPart = 'body' | 'head' | 'arms' | 'legs';
type Stat = 'INT' | 'STR' | 'DEX' | 'CON';

@Component({
  selector: 'app-character-customization',
  standalone: true,
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './character-customization.component.html',
  styleUrls: ['./character-customization.component.scss']
})
export class CharacterCustomizationComponent {
  private characterService = inject(CharacterService);
  
  character = this.characterService.character;
  remainingPoints = this.characterService.remainingPoints;

  characterClasses = ['Krieger', 'Magier', 'Schurke', 'Kleriker'] as const;
  bodyParts: BodyPart[] = ['body', 'head', 'arms', 'legs'];
  stats: Stat[] = ['INT', 'STR', 'DEX', 'CON'];

  updateName(name: string) {
    this.characterService.updateCharacter({ name });
  }

  updateClass(characterClass: typeof this.characterClasses[number]) {
    this.characterService.updateCharacter({ class: characterClass, weapon: '' });
  }

  updateColor(part: BodyPart, color: string) {
    this.characterService.updateCharacter({ [`${part}Color`]: color } as Partial<Character>);
  }

  updateStat(stat: Stat, value: number) {
    this.characterService.updateStat(stat, value);
  }

  updateWeapon(weapon: string) {
    this.characterService.updateWeapon(weapon);
  }

  get availableWeapons() {
    return this.characterService.classWeapons[this.character().class] || [];
  }

  getColor(part: BodyPart): string {
    return this.character()[`${part}Color`];
  }
}