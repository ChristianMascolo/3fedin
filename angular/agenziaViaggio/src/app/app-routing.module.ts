import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login/:type", component: LoginComponent},
  { path: "register/:type", component: RegisterComponent},
  { path: "booking/:from/:id", component: BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
