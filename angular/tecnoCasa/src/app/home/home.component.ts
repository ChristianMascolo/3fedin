import { Component } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAppointmentComponent } from '../modal/modal-appointment/modal-appointment.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  properties !: any[];
  
  constructor(private ps: PropertyService,public dialog: MatDialog){}

  ngOnInit(){
    this.ps.getAll().subscribe({
      next: (res : any) => {
        this.properties = res;
      }
    })
  }

  appointment(){
    let modal = this.dialog.open(ModalAppointmentComponent,{
      width: '500px',
    });

    modal.afterClosed();
  }
}
