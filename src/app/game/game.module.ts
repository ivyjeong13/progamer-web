import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameComponent } from './game.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    BrowserAnimationsModule
  ],
  declarations: [
    GameComponent
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule {}
