import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PandaService } from './pandascore.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    PandaService
  ]
})
export class PandaModule {}
