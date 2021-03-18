import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from './../../../shared/interfaces/character.interface';

@Component({
  selector: 'app-character',
  template: ` <br /><br /><br /><br /><br />

    <div class="card">
      <div class="image">
        <a
          style="text-decoration:none"
          [routerLink]="['/character-details', character.id]"
        >
          <img
            [src]="character.image"
            [alt]="character.name"
            class="card-img-top"
          />
        </a>
      </div>
      <div class="card-inner">
        <div class="header">
          <a [routerLink]="['/character-details', character.id]">
            <h2>{{ character.name | slice: 0:15 }}</h2>
          </a>
          <h4 class="text-muted">{{ character.gender }}</h4>
          <small class="text-muted">{{ character.created | date }}</small>
        </div>
      </div>
    </div>`,
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() character?: Character; //Comunicación entre componentes
}
