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

  constructor(private _formBuilder: FormBuilder,private bs: BookingService,private tss: TourStandService,private ts: TourService,private dialogRef: MatDialogRef<BookingComponent>){}

  submit() {
    
  }

  close() {
    this.dialogRef.close();
  }

  addBooking(){
    return this.bs.add(this.booking.value);
  }

  addTour(){
    return this.ts.add(this.tour.value);
  }


}
