import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MomentPipe } from './pipes/moment.pipe';
import { UpperPipe } from './pipes/upper.pipe';
import { LowerPipe } from './pipes/lower.pipe';
import { SearchStringPipe } from './pipes/search-string.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MomentPipe,
    UpperPipe,
    LowerPipe,
    SearchStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
