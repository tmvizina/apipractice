import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { HalloffameComponent } from './halloffame/halloffame.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    HalloffameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
