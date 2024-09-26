import { Component } from '@angular/core';
import { CharacterPreviewComponent } from './character-preview/character-preview.component';
import { CharacterCustomizationComponent } from './character-customization/character-customization.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharacterPreviewComponent, CharacterCustomizationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'character-editor';
}