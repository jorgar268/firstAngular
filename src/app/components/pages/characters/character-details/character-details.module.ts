import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailsRoutingModule } from './character-details-routing.module';

@NgModule({
  declarations: [], //ya impportado en el modulo princip
  imports: [CommonModule, CharacterDetailsRoutingModule],
})
export class CharacterDetailsModule {}
