import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { VisitFormComponent } from './visit-form/visit-form.component';
import { VisitComponent } from './visit/visit.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AnimalComponent } from './animal/animal.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DoctorFormComponent,
    AnimalFormComponent,
    VisitFormComponent,
    VisitComponent,
    DoctorComponent,
    AnimalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
