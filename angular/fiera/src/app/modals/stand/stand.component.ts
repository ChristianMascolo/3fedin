import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StandService } from 'src/app/services/stand.service';

@Component({
  selector: 'app-stand',
  templateUrl: './stand.component.html',
  styleUrls: ['./stand.component.scss']
})
export class StandComponent {
  stand = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
  })

  constructor(private dialogRef: MatDialogRef<StandComponent>, private ss: StandService){}

  submit(){
    this.ss.add(this.stand.value).subscribe({
      next: () => {
        this.close();
      }
    })
  }

  close(){
    this.dialogRef.close();
  }
}
