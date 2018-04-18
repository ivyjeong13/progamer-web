import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { MatchComponent } from './match/match.component';
import { SerieComponent } from './serie/serie.component';
import { LeagueComponent } from './league/league.component';
import { TournamentComponent } from './tourney/tourney.component';

const routes = [
  { path: 'home', component: HomeComponent },
	{ path: 'matches/:id', component: MatchComponent },
	{ path: 'matches', component: MatchComponent },
	{ path: 'series/:id', component: SerieComponent },
	{ path: 'series', component: SerieComponent },
	{ path: 'leagues/:id', component: LeagueComponent },
	{ path: 'leagues', component: LeagueComponent },
  { path: 'tournaments', component: TournamentComponent },
  { path: 'tournamenets/:id', component: TournamentComponent },
	{ path: 'game/:slug', component: GameComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}