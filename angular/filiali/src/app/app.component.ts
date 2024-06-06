import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalBranchComponent } from './modals/modal-branch/modal-branch.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'filiali';
  logged = false;
  admin = false;
  
  constructor(private route: Router,public dialog: MatDialog) {}

  ngDoCheck() {
    this.isLogged();
    this.isAdmin();
  }

  isLogged() {
    this.logged =
      sessionStorage.getItem('admin') !== null ||
      sessionStorage.getItem('branch') !== null;
  }

  logout() {
    sessionStorage.removeItem('admin');
    sessionStorage.removeItem('branch');
    this.route.navigate(['login']);
    this.logged = false;
  }

  isAdmin() {
    this.admin = sessionStorage.getItem('admin') !== null;
  }

  addBranch(){
    let modal = this.dialog.open(ModalBranchComponent,{
      width:'500px',
    })
  }
}
