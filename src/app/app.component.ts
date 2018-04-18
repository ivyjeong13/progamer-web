import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PandaService } from './pandascore/pandascore.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  private subscription : Subscription;
	private vgList : any[];
  constructor(private pandaService : PandaService) {}

  ngOnInit(){
  	this.subscription = this.pandaService.getVideoGames().subscribe((data : any) => {
  		this.vgList = data;
  	}, (err : any) => console.error(err));
  }

  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }
}
