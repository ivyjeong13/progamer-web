import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TournamentComponent } from './tourney.component';
import { GLHFCommonModule } from './../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GLHFCommonModule
  ],
  declarations: [
    TournamentComponent
  ],
  exports: [
    TournamentComponent
  ]
})
export class TournamentModule {}
