import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnimalFormComponent } from '../animal-form/animal-form.component';
import { AnimalService } from '../services/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent {
  animals !: any;

  constructor(public dialog: MatDialog, private animalService: AnimalService, private route: Router) { }

  ngOnInit() {
    this.animalService.getAll().subscribe({
      next: (res: any) => {
        this.animals = res;
      }
    });
  }

  addAnimal() {
    let modal = this.dialog.open(AnimalFormComponent, {
      width: '500px',
    })

    modal.afterClosed().subscribe(() => {
      this.animalService.getAll().subscribe({
        next: (res: any) => {
          this.animals = res;
        }
      });
    })
  }

  seeVisits(id: number, type: string) {
    this.route.navigate(['/visit', type, id]);
  }

}
