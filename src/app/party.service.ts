import { Injectable } from '@angular/core';
import * as $ from 'jquery';

// This is an HTTP service intended to hit some API to get a list of party attendees.
@Injectable({
  providedIn: 'root'
})
export class PartyService {
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
