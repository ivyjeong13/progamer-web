import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PandaService } from './../pandascore/pandascore.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{

	private tourneySubscription : Subscription;
	private matchSubscription : Subscription;
	private weeklyTourneys : object;
	private matchesToday : object;
	private showDYK : boolean;

	constructor(private pandaService : PandaService){
		this.showDYK = false;
	}

	ngOnInit(){
		this.tourneySubscription = this.pandaService.getWeeklyTournaments(new Date()).subscribe((data : any) => {
			this.weeklyTourneys = data;
			console.log(this.weeklyTourneys);
		}, (err : any) => console.error(err));

		this.matchSubscription = this.pandaService.getTodayMatches(new Date()).subscribe((data : any) => {
			this.matchesToday = data;
			console.log(this.matchesToday);
		}, (err : any) => console.error(err));
	}

	ngOnDestroy(){
		this.tourneySubscription.unsubscribe();
		this.matchSubscription.unsubscribe();
	}

	parseDates(start : string, end : string){
		var startDate = new Date(start);
		var endDate = new Date(end);

		return (startDate.getUTCMonth() + 1) + '/' + startDate.getUTCDate() + ' to ' + endDate.getUTCMonth() + '/' + endDate.getUTCDate();
	}
}
