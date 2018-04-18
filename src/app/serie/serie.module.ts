import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SerieComponent } from './serie.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SerieComponent
  ],
  exports: [
    SerieComponent
  ]
})
export class SerieModule {}
