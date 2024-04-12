import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { VisitFormComponent } from './visit-form/visit-form.component';
import { AnimalComponent } from './animal/animal.component';
import { VisitComponent } from './visit/visit.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  { path: "animal", component: AnimalComponent},
  { path: "doctor", component: DoctorComponent},
  { path: "visit/:type/:id", component: VisitComponent},
  { path: "animalForm", component: AnimalFormComponent },
  { path: "doctorForm", component: DoctorFormComponent },
  { path: "visitForm", component: VisitFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
