import { Component } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ChangeDetectionStrategy, inject, signal} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

// Variable de las fruticas para el chips
export interface Game {
  name: string;
}

@Component({
  selector: 'app-components',
  imports: [MatCardModule, MatFormFieldModule, MatChipsModule, MatIconModule, MatProgressBarModule],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsComponent {
  // º CHIPS º //
  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  readonly games = signal<Game[]>([{name: 'Final Fantasy VII'}, {name: 'Splatoon'}, {name: 'The Legend of Zelda'}]);
  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our game
    if (value) {
      this.games.update(games => [...games, {name: value}]);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(game: Game): void {
    this.games.update(games => {
      const index = games.indexOf(game);
      if (index < 0) {
        return games;
      }

      games.splice(index, 1);
      this.announcer.announce(`Removed ${game.name}`);
      return [...games];
    });
  }

  edit(game: Game, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove game if it no longer has a name
    if (!value) {
      this.remove(game);
      return;
    }

    // Edit existing game
    this.games.update(games => {
      const index = games.indexOf(game);
      if (index >= 0) {
        games[index].name = value;
        return [...games];
      }
      return games;
    });
  }
}
