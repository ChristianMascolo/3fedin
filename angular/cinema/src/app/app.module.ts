import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmComponent } from './film/film.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TicketComponent } from './ticket/ticket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormComponent } from './form/form.component';
import { GoogleModuleComponent } from './google-module/google-module.component';
import { MaggiorennePipe } from './pipes/maggiorenne.pipe';
import { CatalogoComponent } from './catalogo/catalogo.component'

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    TicketComponent,
    FormComponent,
    GoogleModuleComponent,
    MaggiorennePipe,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
