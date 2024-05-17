import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './modals/login/login.component';
import { RegisterComponent } from './modals/register/register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fiera';
  user !: any;

  constructor(private dialog: MatDialog,private route: Router) { }

  openLogin() {
    let modal = this.dialog.open(LoginComponent,{
      width: "290px"
    })

    modal.afterClosed().subscribe({
      next: (res: any) => {
        this.user = JSON.parse(localStorage.getItem('user') as string);
        this.route.navigate(['profile',this.user.email]);
      }
    })
  }

  openRegister() {
    let modal = this.dialog.open(RegisterComponent, {
      width: "250px",
    })

    modal.afterClosed().subscribe({
      next: (res: any) => {
        this.user = JSON.parse(localStorage.getItem('user') as string);
        this.route.navigate(['profile',this.user.email]);
      }
    })

  }

  logout(){
    localStorage.removeItem('user');
  }

}
