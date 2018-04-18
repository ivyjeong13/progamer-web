import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './home/home.module';
import { StorageModule } from './storage/storage.module';
import { GBModule } from './giantbomb/giantbomb.module';
import { PandaModule } from './pandascore/pandascore.module';
import { GameModule } from './game/game.module';
import { LeagueModule } from './league/league.module';
import { MatchModule } from './match/match.module';
import { SerieModule } from './serie/serie.module';
import { TournamentModule } from './tourney/tourney.module';
import { GLHFCommonModule } from './common/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpModule,
    StorageModule,
    GBModule,
    PandaModule,
    NavigationModule,
    HomeModule,
    GameModule,
    LeagueModule,
    MatchModule,
    SerieModule,
    TournamentModule,
    GLHFCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
