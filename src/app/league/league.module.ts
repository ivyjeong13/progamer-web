import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LeagueComponent } from './league.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LeagueComponent
  ],
  exports: [
    LeagueComponent
  ]
})
export class LeagueModule {}
