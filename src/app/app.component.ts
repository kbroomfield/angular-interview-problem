/* tslint:disable */
import {Component, ViewEncapsulation} from '@angular/core';
import * as $ from 'jquery';
import { of } from 'rxjs';
import {delay, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <div class="bad-container">
      <h1>{{title}}</h1>
      <p>Find all the mistakes in this component and rewrite to conform to the to acceptance criteria.</p>
      <div>
        <h3>Acceptance Criteria</h3>
        <ul>
          <li>Project should compile and work with no console errors.</li>
          <li>Component should contain no syntactical mistakes.</li>
          <li>Component should conform to current Angular standards.</li>
          <li>Component should conform to current TypeScript and ES6 standards.</li>
          <li>Component should correctly implement all functionality in the 'do-stuff' section.</li>
        </ul>
      </div>
      
      <div class="do-stuff">
        <h1>Do Stuff</h1>
        <div class="removal section">
          <h2 class="bad-header">If you click the button, I should be removed!</h2>
          <button id="remove-button">Remove Text</button>
        </div>
        <div class="change-title section">
          <button id="change-button" style="margin-right:10px;">Change Page Header</button>
          <input type="text" id="title-input" placeholder="New header...">
        </div>
        <div class="display-data section">
          <button id="get-data">Get Data</button>
          <h4 style="margin:10px 0 0 0">Data</h4>
          <ol>
            <li *ngFor="let d of pageWindow.pageData">{{d}}</li>
          </ol>
        </div>
      </div>
    </div>
  `,
  styles: [
    'h1 { margin-top: 0 }',
    ".bad-container { width: 768px; padding: 20px; }",
    ".bad-header { color: red; }",
    ".section { margin-bottom: 10px;}",
    ".do-stuff { border: 1px solid black; padding: 0 10px 10px 10px;}"
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'bad';

  constructor() {
    (<any>window).pageData = [];
    $('#remove-button').on('click', this.RemoveHeader);
  }

  ngOnInit() {
    $('#get-data').on('click', this.getData);
    $('#change-button').on('click', this.changeTitle);
  }

  RemoveHeader() {
    $('#bad-header').remove();
  }

  getData() {
    of(['Bad 1', 'Bad 2', 'Bad 3', 'Bad 4', 'Bad 5']).pipe(
      delay(700)
    ).toPromise()
      .then(results => (<any>window).pageData = results)
      .catch(err => console.log("Oh no, an error occured!", err));
  }

  changeTitle() {
    const element = document.getElementById("title-input");

    if ( element !== null ) {
      var text = (<HTMLInputElement>element).value;
    }

    this.title = text;
  }

  get pageWindow(): any {
    return window;
  }
}

/* tslint:enable */
