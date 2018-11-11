import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acceptance-criteria',
  template: `
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
  `
})
export class AcceptanceCriteriaComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
