import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import { StorageService } from '../storage/storage.service';
import { environment } from '../../environments/environment';
import { GBSettings } from './giantbomb.constants';
import { Jsonp, Response } from '@angular/http';

@Injectable()
export class GBService {
	private baseUrl = 'https://www.giantbomb.com/api/';
  private token = environment.giantBombToken;
  private prefix = 'giantbomb-';

  constructor(private jsonp : Jsonp, private storageService: StorageService) {}

  getCachedGame(slug : string){
  	return this.storageService.get(this.prefix + 'game-' + slug);
  }
  getGame(slug : string){
  	let cache = this.getCachedGame(slug);
  	let id = GBSettings.GAME_IDS[slug];

  	let url = `${this.baseUrl}game/${id}?api_key=${this.token}&format=jsonp&json_callback=JSONP_CALLBACK`;

  	let formatList = (res : any) => {
  		let data = res.json().results;
  		this.storageService.set(this.prefix + 'game-' + slug, data);
  		return data;
  	}

  	return cache ? Observable.of(cache) : this.jsonp.request(url).map(formatList);
  }
}