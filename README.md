# Angular Interview Problem
This project contains a *very* bad Angular component and service that need to be rewritten. The acceptance critera are outlined in `AcceptanceCriteriaComponent` but are listed here as well.


+ Project should compile and work with no console errors.
+ Project should contain no syntactical mistakes.
+ Project should conform to current Angular standards.
+ Project should conform to current TypeScript and ES6 standards.
+ `AppComponent` should correctly implement all functionality in the 'do-stuff' section (located in the `AppComponent` HTML template).
+ `PartyService` should conform to standards for an Angular HTTP service.
+ It is NOT required to de-inline the component, thought it may be helpful.
+ Bonus points for identifying why `changeTitle()` does not function as currently implemented.

## Pre-reqs
+ Node.JS
+ Angular CLI (`npm install -g @angular/cli` or `yarn global add @angular/cli`)

## To Get Started
+ Clone repo
+ Run `yarn` or `npm install` from project directory
+ Run the command `ng serve` from project directory
+ Open a browser to the designated URL, see what works, see what doesn't work, and then get to work!

**A Note**: It will probably be helpful to have an IDE that supports code highlighting on the inline HTML. Alternatively, you can split the template and styles into separate HTML and CSS files.

**Another Note**: You will most likely remove the comments ignoring TSLint for `AppComponent`. This will help you fix some areas, but it will only get you so far. Good luck!
