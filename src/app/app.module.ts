import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FahrenheitPipe } from './app.fahrenheitPipe';
import { PhoneNumberPipe } from './app.phonePipe';
import { SecondDirective } from './secondDirective';
import { ThirdDirective } from './thirdDirective';

@NgModule({
  declarations: [
    AppComponent,
    SecondDirective,
    ThirdDirective,
    FahrenheitPipe,
    PhoneNumberPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
