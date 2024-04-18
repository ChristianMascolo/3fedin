import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioComponent } from './dettaglio/dettaglio.component';

const routes: Routes = [
  { path: "dettaglio", component: DettaglioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
