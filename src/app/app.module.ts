import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondDirective } from './secondDirective';
import { ThirdDirective } from './thirdDirective';

@NgModule({
  declarations: [
    AppComponent,
    SecondDirective,
    ThirdDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
