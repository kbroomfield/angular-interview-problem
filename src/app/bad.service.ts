import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class BadService {
  constructor() { }

  public getData(refreshData = false): Promise<any> {
    // @ts-ignore
    if ( !refreshData && window.pageData && window.pageData.length > 0 ) {
      // @ts-ignore
      return new Promise(resolve => resolve(window.pageData));
    }

    // @ts-ignore
    return $.get('/assets/data.json', (data) => window.pageData = data);
  }
}
