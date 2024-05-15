import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent {
  animal = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    diet: new FormControl('', Validators.required),
    specie: new FormControl('', Validators.required),
    family: new FormControl('', Validators.required),
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private animalService: AnimalService,public dialogRef: MatDialogRef<AnimalFormComponent>) { }

  submit(){
    this.animalService.addAnimal(this.animal.value).subscribe({
      next: () => {
        this.dialogRef.close();
      }
    });
  }

  close(){
    this.dialogRef.close();
  }
}
