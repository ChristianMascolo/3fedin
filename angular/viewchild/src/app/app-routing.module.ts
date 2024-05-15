import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanzoniComponent } from './canzoni/canzoni.component';

const routes: Routes = [
  { path: 'json', component: CanzoniComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
