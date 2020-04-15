import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {  DqPhoneNanpDirective } from '../../../rules/src/lib/dq-phone-nanp.directive'

@NgModule({
  declarations: [
    AppComponent ,
    DqPhoneNanpDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
