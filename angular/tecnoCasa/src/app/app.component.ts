import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalPropertyComponent } from './modal/modal-property/modal-property.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tecnoCasa';
  user !: any;

  constructor(private route: Router,public dialog: MatDialog) { }

  logged() {
    return sessionStorage.getItem("user");
  }

  goLogin() {
    this.route.navigate(['login']);
  }

  logout(){
    sessionStorage.removeItem("user");
  }

  isAdmin(){
    if(this.logged()){
      this.user = JSON.parse(sessionStorage.getItem("user") as string);
      return this.user.admin;
    }
  }

  addProperty(){
    let modal = this.dialog.open(ModalPropertyComponent,{
      data: { type: 'add' }
    })

    modal.afterClosed();
  }
}
