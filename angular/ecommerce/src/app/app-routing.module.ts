import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { StoricoComponent } from './storico/storico.component';
import { ModuleOneComponent } from './module-one/module-one.component';
import { ModuleTwoComponent } from './module-two/module-two.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent},
  { path: "storico/:id", component: StoricoComponent},
  { path: "moduleOne", component: ModuleOneComponent},
  { path: "moduleTwo", component: ModuleTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
