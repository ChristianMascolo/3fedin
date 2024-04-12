import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisitService } from '../services/visit.service';
import { MatDialog } from '@angular/material/dialog';
import { VisitFormComponent } from '../visit-form/visit-form.component';
import { MedicineService } from '../services/medicine.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent {
  id !: any;
  type !: any;
  visits !: any;
  medicines !: any;

  constructor(private route: ActivatedRoute, private visitService: VisitService, public dialog: MatDialog,private medicineService: MedicineService) {
    this.type = this.route.snapshot.paramMap.get("type");
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.loadVisit();
  }

  loadMedicine(id:number){
    this.medicineService.getByVisit(id).subscribe({
      next: (res: any) => {
        this.medicines = res;
      }
    });
  }

  visitDone(id: any, flag: boolean) {
    this.visitService.doneVisit(id, flag).subscribe({
      next: () => {
        this.loadVisit();
      }
    })
  }

  openVisitModal() {
    let modal = this.dialog.open(VisitFormComponent, {
      width: '500px',
      data: { visits: this.visits }
    });

    modal.afterClosed().subscribe(() => {
      this.loadVisit();
    })
  }

  loadVisit() {
    if (this.type == 'doctor') {
      this.visitService.getDoctorVisits(this.id).subscribe({
        next: (res: any) => {
          this.visits = res;
        }
      })
    } else if (this.type == 'animal') {
      this.visitService.getAnimalVisits(this.id).subscribe({
        next: (res: any) => {
          this.visits = res;
        }
      })
    }
  }
}