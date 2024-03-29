import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { TicketComponent } from './ticket/ticket.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'film', component: FilmComponent },
  { path: 'prenota/:idF/:idU', component: TicketComponent },
  { path: 'form/:type', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
