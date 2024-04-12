import { Component, Inject } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent {
  doctor = new FormGroup({
    name: new FormControl("", Validators.required),
    surname: new FormControl("", Validators.required),
    age: new FormControl("", Validators.required),
    role: new FormControl("", Validators.required)
  });

  constructor(private doctorService: DoctorService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DoctorFormComponent>) { }

  submit() {
    this.doctorService.addDoctor(this.doctor.value).subscribe({
      next: (res) => { console.log(res) }
    });

    this.dialogRef.close()
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
