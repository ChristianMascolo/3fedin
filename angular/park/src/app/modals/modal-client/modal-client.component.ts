import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-client',
  templateUrl: './modal-client.component.html',
  styleUrls: ['./modal-client.component.scss'],
})
export class ModalClientComponent {
  client = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    age: new FormControl(''),
    height: new FormControl(''),
  });

  constructor(private dialogRef: MatDialogRef<ModalClientComponent>) {}

  submit() {
    localStorage.setItem('client', JSON.stringify(this.client.value));
    this.dialogRef.close();
  }
}
