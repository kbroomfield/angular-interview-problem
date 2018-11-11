import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AcceptanceCriteriaComponent } from './acceptance-criteria/acceptance-criteria.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceptanceCriteriaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
