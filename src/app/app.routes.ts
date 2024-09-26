import { Routes } from '@angular/router';
import { CharacterCustomizationComponent } from './character-customization/character-customization.component';


export const routes: Routes = [
    { path: '', redirectTo: '/customize', pathMatch: 'full' },
    { path: 'customize', component: CharacterCustomizationComponent },
  ];