import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

import { PandaService } from './../pandascore/pandascore.service';

@Component({
  selector: 'serie',
  templateUrl: 'serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit, OnDestroy{

	private series : any[];
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
			}
			//
		});
	}

	ngOnDestroy(){

	}
}
