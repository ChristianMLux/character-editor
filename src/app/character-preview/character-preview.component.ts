import { Component, inject } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-preview',
  standalone: true,
  templateUrl: './character-preview.component.html',
  styleUrls: ['./character-preview.component.scss']
})
export class CharacterPreviewComponent {
  private characterService = inject(CharacterService);
  
  character = this.characterService.character;
  stats = ['INT', 'STR', 'DEX', 'CON'] as const;

  getStat(stat: typeof this.stats[number]): number {
    return this.character().stats[stat];
  }
}