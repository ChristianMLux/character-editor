import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-customization',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character-customization.component.html',
  styleUrls: ['./character-customization.component.scss']
})
export class CharacterCustomizationComponent {
  private characterService = inject(CharacterService);
  
  character = this.characterService.character;

  characterClasses = ['Krieger', 'Magier', 'Schurke', 'Kleriker'];

  updateName(name: string) {
    this.characterService.updateCharacter({ name });
  }

  updateClass(characterClass: string) {
    this.characterService.updateCharacter({ class: characterClass });
  }

  updateBodyColor(color: string) {
    this.characterService.updateCharacter({ bodyColor: color });
  }
}