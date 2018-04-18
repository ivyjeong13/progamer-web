import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';

import { GBService } from './giantbomb.service';

@NgModule({
  imports: [
    CommonModule,
    JsonpModule
  ],
  providers: [
    GBService
  ]
})
export class GBModule {}
