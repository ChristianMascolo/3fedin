import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandieraComponent } from './bandiera/bandiera.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bandiera/:name/:img', component: BandieraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
