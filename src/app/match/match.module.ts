import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatchComponent } from './match.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MatchComponent
  ],
  exports: [
    MatchComponent
  ]
})
export class MatchModule {}
