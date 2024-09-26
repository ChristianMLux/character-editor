import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-preview.component.html',
  styleUrls: ['./character-preview.component.scss']
})
export class CharacterPreviewComponent {
  private characterService = inject(CharacterService);
  
  character = this.characterService.character;
}