import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { HomeClientComponent } from './home-client/home-client.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addClient/:id', component: ClientComponent },
  { path: 'homeClient/:id', component: HomeClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
