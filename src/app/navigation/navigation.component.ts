import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{
	@Input() games : any[];
	private showGames : boolean;
  private route : string;
  private subscription : Subscription;

  constructor(
    private location : Location, 
    private router : Router
  ) {
  	this.showGames = false;
  }

  showFavorites(){
  	console.log('plug out favorites');
  }

  ngOnInit(){
    this.subscription = this.router.events.subscribe((data : any) => {
      this.route = this.location.path();
    });
  }
}
