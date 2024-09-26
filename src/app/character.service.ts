import { Injectable, computed, signal } from '@angular/core';

export type CharacterClass = 'Krieger' | 'Magier' | 'Schurke' | 'Kleriker';

export interface Character {
  name: string;
  class: CharacterClass;
  bodyColor: string;
  headColor: string;
  armsColor: string;
  legsColor: string;
  stats: {
    INT: number;
    STR: number;
    DEX: number;
    CON: number;
  };
  weapon: string;
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseStats = 10;
  private additionalPoints = 5;

  character = signal<Character>({
    name: 'Neuer Held',
    class: 'Krieger',
    bodyColor: '#FFB6C1',
    headColor: '#FFA07A',
    armsColor: '#98FB98',
    legsColor: '#87CEFA',
    stats: {
      INT: this.baseStats,
      STR: this.baseStats,
      DEX: this.baseStats,
      CON: this.baseStats
    },
    weapon: ''
  });

  remainingPoints = computed(() => {
    const stats = this.character().stats;
    const usedPoints = Object.values(stats).reduce((sum, stat) => sum + stat - this.baseStats, 0);
    return this.additionalPoints - usedPoints;
  });

  classWeapons: Record<CharacterClass, string[]> = {
    'Krieger': ['Schwert', 'Axt'],
    'Magier': ['Stab', 'Zauberbuch'],
    'Schurke': ['Dolch', 'Kurzbogen'],
    'Kleriker': ['Streitkolben', 'Heiliger Fokus']
  };

  updateCharacter(newCharacter: Partial<Character>) {
    this.character.update(char => ({ ...char, ...newCharacter }));
  }

  updateStat(stat: keyof Character['stats'], value: number) {
    if (this.remainingPoints() >= value - this.character().stats[stat]) {
      this.character.update(char => ({
        ...char,
        stats: { ...char.stats, [stat]: value }
      }));
    }
  }

  updateWeapon(weapon: string) {
    const characterClass = this.character().class;
    if (this.classWeapons[characterClass].includes(weapon)) {
      this.updateCharacter({ weapon });
    }
  }
}