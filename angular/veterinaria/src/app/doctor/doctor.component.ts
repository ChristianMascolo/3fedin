import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DoctorService } from '../services/doctor.service';
import { DoctorFormComponent } from '../doctor-form/doctor-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {
  doctors !: any;

  constructor(public dialog: MatDialog, private doctorService : DoctorService, private route: Router) {  }

  ngOnInit(){
    this.doctorService.getAll().subscribe({
      next: (res: any) => {
        this.doctors = res;
      }
    });
  }

  openDialog(){
    let modal = this.dialog.open(DoctorFormComponent,{
      width: '500px',
    })

    modal.afterClosed().subscribe(() => {
      this.doctorService.getAll().subscribe({
        next: (res: any) => {
          this.doctors = res;
        }
      });
    })
  }

  openVisit(id:number){
    this.route.navigate(['/visit','doctor',id]);
  }
}
