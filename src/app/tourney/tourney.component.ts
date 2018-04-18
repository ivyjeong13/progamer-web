import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

import { PandaService } from './../pandascore/pandascore.service';

@Component({
  selector: 'tourney',
  templateUrl: 'tourney.component.html',
  styleUrls: ['./tourney.component.scss']
})
export class TournamentComponent implements OnInit, OnDestroy{

	private tourneys : any[];
	private pastTourneys : any[];
	private subscription : Subscription;
	constructor(
		private pandaService : PandaService,
		private route : ActivatedRoute
	){}

	ngOnInit(){
		this.subscription = this.route.params.subscribe((params: Params) => {
			let filterSet : any = {
				filter: {},
				range: {},
				sort: []
			};
			if(params.id){
				filterSet.filter.id = params.id;
			} else {
				var today = new Date();
				var future = new Date(new Date(today).setMonth(today.getMonth() + 6));
				filterSet.range.end_at = today.toISOString() + ',' + future.toISOString();
				filterSet.sort = ['end_at'];
			}
			this.pandaService.getRequest('tournaments', filterSet, 'uptourneys').subscribe((data : any) => {
				this.tourneys = data;
				console.log(this.tourneys);
			}, (err : any) => console.error(err));

			if(!params.id){
				var past = new Date(new Date(today).setMonth(today.getMonth() - 3));
				filterSet.range.end_at = past.toISOString() + ',' + today.toISOString();
				filterSet.sort = ['-end_at'];
				this.pandaService.getRequest('tournaments', filterSet, 'pasttourneys').subscribe((data : any) => {
					this.pastTourneys = data;
					console.log(this.pastTourneys);
				}, (err : any) => console.error(err));
			}
		});
	}

	ngOnDestroy(){

	}
}
