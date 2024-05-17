import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingService } from 'src/app/services/booking.service';
import { TourStandService } from 'src/app/services/tour-stand.service';
import { TourService } from 'src/app/services/tour.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  booking = this._formBuilder.group({
    date: ['', Validators.required],
  });

  tour = this._formBuilder.group({
    nPersone: ['', Validators.required]
  });

  idB: number = 0;
  idT: number = 0;

  constructor(private _formBuilder: FormBuilder, private bs: BookingService, private tss: TourStandService, private ts: TourService, private dialogRef: MatDialogRef<BookingComponent>) { }

  submit() {
    let dbBooking = {
      'day': this.booking.value.date,
    };

    this.bs.add(dbBooking).subscribe({
      next: (res: any) => {
        this.idB = res.id;
        this.ts.add().subscribe({
          next: (res: any) => {
            this.idT = res.id;
            this.tss.add(this.idB, this.idT, this.tour.value.nPersone).subscribe({
              next: () => {
                console.log("ciao");
              }
            })
          }
        })
      }
    })
  }

  close() {
    this.dialogRef.close();
  }
}
