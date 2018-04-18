import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import { StorageService } from '../storage/storage.service';
import { environment } from '../../environments/environment';

@Injectable()
export class PandaService {

  private baseUrl = 'https://api.pandascore.co/';
  private token = '?token='+environment.pandaScoreToken;
  private prefix = 'glhf-';

  constructor(private http: Http, private storageService: StorageService) {}

  isToday(startDate : Date, date : Date){
    if(startDate.getUTCDate() == date.getUTCDate() && 
      startDate.getUTCMonth() == date.getUTCMonth() && 
      startDate.getUTCFullYear() === date.getUTCFullYear()){
      console.log('is today');
      return true;
    }
    console.log('is not today')
    return false;
  }

  formatDate(date : Date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  getCachedVideoGames(){
  	return this.storageService.get(this.prefix + 'videogames');
  }
  getVideoGames(){
  	let cache = this.getCachedVideoGames();
  	let url = `${this.baseUrl}videogames${this.token}`;

  	let formatList = (res : any) => {
      let data = res.json();
      this.storageService.set(this.prefix + 'videogames', data);
      return data;
    };

    return cache ? Observable.of(cache) : this.http.get(url)
      .map(formatList);
  }

  getCachedWeeklyTournaments(){
    return this.storageService.get(this.prefix+'weekly-tourneys');
  }
  getWeeklyTournaments(startDate : Date){
    var endRangeDate = new Date(startDate.getTime() + ((1000 * 60 * 60 * 24) * 7));
    let cache = this.getCachedWeeklyTournaments();
    var url = `${this.baseUrl}tournaments${this.token}&range[end_at]=${startDate.toISOString()},${endRangeDate.toISOString()}&sort=end_at`;

    let formatList = (res : any) => {
      let data = res.json();
      let weeklyData = {
        today: startDate.toISOString(),
        tournaments: data
      };
      this.storageService.set(this.prefix + 'weekly-tourneys', weeklyData);
      return weeklyData;
    };

    return cache && this.isToday(startDate, new Date(cache.today)) ? Observable.of(cache) 
      : this.http.get(url).map(formatList);
  }

  getCachedTodayMatches(){
    return this.storageService.get(this.prefix + 'today-matches');
  }
  getTodayMatches(startDate : Date){
    let cache = this.getCachedTodayMatches();
    var stringDate = this.formatDate(startDate);
    var url = `${this.baseUrl}matches${this.token}&range[begin_at]=${stringDate}T00:00:00Z,${stringDate}T23:59:59Z&sort=begin_at`;

    let formatList = (res : any) => {
      let data = res.json();
      let matchesData = {
        today: startDate.toISOString(),
        matches: data
      };
      this.storageService.set(this.prefix + 'today-matches', matchesData);
      return matchesData;
    };

    return cache && this.isToday(startDate, new Date(cache.today)) ? Observable.of(cache) 
      : this.http.get(url).map(formatList);
  }

  getRequest(type : string, filterObject : any, cacheName){
    var cache = cacheName ? this.storageService.get(this.prefix + cacheName) : false;

    var filterNames = Object.keys(filterObject.filter);
    var rangeNames = Object.keys(filterObject.range);
    var sortNames = filterObject.sort;

    var url = `${this.baseUrl}${type}${this.token}`;
    filterNames.forEach(function(name){
      url += `&filter[${name}]=${filterObject.filter[name]}`;
    });
    rangeNames.forEach(function(name){
      url += `&range[${name}]=${filterObject.range[name]}`;
    });

    if(sortNames.length > 0){
      url += '&sort=' + sortNames.join(',');
    }

    var today = new Date();

    let formatList = (res : any) => {
      let data = res.json();
      let saveData = {
        today: today.toISOString(),
        results: data
      };
      this.storageService.set(this.prefix + cacheName, saveData);
      return saveData;
    };

    console.log(url);

    return cache && this.isToday(today, new Date(cache.today)) ? Observable.of(cache) : this.http.get(url).map(formatList);
  }
}
