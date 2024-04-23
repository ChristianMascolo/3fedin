import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalBookingComponent } from './modals/modal-booking/modal-booking.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agenziaViaggio';

  constructor(public dialog: MatDialog){}

  openModal(){
    let modal = this.dialog.open(ModalBookingComponent,{
      width:"1000px"
    })
  }

  logged(){
    return sessionStorage.getItem("user") || sessionStorage.getItem("company");
  }
}
