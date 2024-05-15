import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VisitService } from '../services/visit.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../services/doctor.service';
import { AnimalService } from '../services/animal.service';
import { MedicineService } from '../services/medicine.service';

@Component({
  selector: 'app-visit-form',
  templateUrl: './visit-form.component.html',
  styleUrls: ['./visit-form.component.scss']
})
export class VisitFormComponent {
  visit = new FormGroup({
    description: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    done: new FormControl("", Validators.required),
    doc: new FormControl("", Validators.required),
    animal: new FormControl("", Validators.required),
    medicine: new FormControl("", Validators.required),
    quantity: new FormControl("", Validators.required),
  });
  docs  !: any;
  animals !: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private visitService: VisitService, public dialogRef: MatDialogRef<VisitFormComponent>, private docService: DoctorService, private animalService: AnimalService, private medicineService: MedicineService) {
  }

  ngOnInit() {
    this.allAnimals();
    this.allDocs();
  }

  close() {
    this.dialogRef.close();
  }

  allDocs() {
    this.docService.getAll().subscribe({
      next: (res: any) => {
        this.docs = res;
      }
    });
  }

  allAnimals() {
    this.animalService.getAll().subscribe({
      next: (res: any) => {
        this.animals = res;
      }
    });
  }

  submit() {
    console.log(this.createVisitDb())
    this.visitService.addVisit(this.createVisitDb()).subscribe({
      next: (res: any) => {
        this.medicineService.add(this.createMedicineDb(res.id)).subscribe({
          next: () => {
            this.dialogRef.close()
          }
        })
      }
    })
  }

  createMedicineDb(id: number) {
    return {
      "name": this.visit.value.medicine,
      "dose": this.visit.value.quantity,
      "visit": {
        "id": id,
      }
    }
  }

  createVisitDb() {
    return {
      "description": this.visit.value.description,
      "date": this.visit.value.date,
      "doctor": {
        "id": this.visit.value.doc,
      },
      "animal": {
        "id": this.visit.value.animal,
      }
    }
  }
}
