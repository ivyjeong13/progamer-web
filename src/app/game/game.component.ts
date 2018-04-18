import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { GBService } from './../giantbomb/giantbomb.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'game',
  templateUrl: 'game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
    // trigger('reveal', [
    //   state('small', style({
    //     width: '0'
    //   })),
    //   state('large', style({
    //     width: '100%'
    //   })),
    //   transition('small  => large', animate('500ms ease-in'))
    // ])
  ]
})
export class GameComponent implements OnInit, OnDestroy{
	private subscription : Subscription;
	private game : any;
  private splashImage : object;

  constructor(	
		private gbService: GBService,
		private route: ActivatedRoute
	) {}

  getRandom(arr : any[]){
    return arr[Math.floor(Math.random() * arr.length)];
  }

  ngOnInit(){
  	this.subscription = this.route.params.subscribe((params : Params) => {
  		this.gbService.getGame(params.slug).subscribe((data : any) => {
  			this.game = data;
        console.log(this.game);
        this.splashImage = this.getRandom(this.game.images);
  		}, (err : any) => console.error(err));
  	});
  }

  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }
}
