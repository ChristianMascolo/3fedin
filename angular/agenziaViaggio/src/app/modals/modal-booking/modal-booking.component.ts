import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-booking',
  templateUrl: './modal-booking.component.html',
  styleUrls: ['./modal-booking.component.scss']
})
export class ModalBookingComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<ModalBookingComponent>) { }
}
