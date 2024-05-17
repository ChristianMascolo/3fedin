import { Component } from '@angular/core';
import { StandService } from '../services/stand.service';
import { MatDialog } from '@angular/material/dialog';
import { BookingComponent } from '../modals/booking/booking.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  stands!: any[];
  
  constructor(private ss: StandService, private dialog: MatDialog) {
    this.all();
  }
  
  openBooking() {
    this.dialog.open(BookingComponent);
  }
  
  all() {
    this.ss.all().subscribe({
      next: (res: any) => {
        if (res) {
          this.stands = res;
        }
      }
    })
  }

}
