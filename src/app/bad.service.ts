import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class BadService {
  private cachedData: Array<string>;

  constructor() { }

  public getData(refreshData = false): Promise<Array<string>> {
    if ( !refreshData && this.cachedData ) {
      return new Promise(resolve => resolve(this.cachedData));
    }

    return $.get('/assets/data.json', (data) => this.cachedData = data);
  }
}
