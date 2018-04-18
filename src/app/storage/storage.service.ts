import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  private keyPrefix = 'glhf-';

  constructor() {}

  get(key: string){
    let result = localStorage.getItem(this.keyPrefix + key);
    try {
      return JSON.parse(result);
    } catch(err) {
      console.error(err);
      return;
    }
  }

  set(key: string, value: any){
    localStorage.setItem(this.keyPrefix + key, JSON.stringify(value));
  }
}