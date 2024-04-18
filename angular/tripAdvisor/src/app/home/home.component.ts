import { Component } from '@angular/core';
import { BarService } from '../services/bar.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalReviewComponent } from '../modal-review/modal-review.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  bars !: any[];
  user !: any;
  isOver = false;
  public openMenu: boolean = false;

  constructor(private barService: BarService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.barService.getAll().subscribe({
      next: (res: any) => {
        this.bars = res;
      }
    });
    if (sessionStorage.getItem("user")) {
      let tmp = sessionStorage.getItem("user") as string;
      this.user = JSON.parse(tmp);
      console.log(this.user);
    }
  }

  addReview(idB: number, idU: number) {
    this.dialog.open(ModalReviewComponent, {
      width: '500px',
      data: { idB, idU, type: 'add' }
    });
  }

  deleteBar(idB: number) {
    this.barService.deleteBar(idB).subscribe({
      next: () => {
        this.barService.getAll().subscribe({
          next: (res: any) => {
            this.bars = res;
          }
        })
      }
    })
  }

  clickMenu() {
    this.openMenu = !this.openMenu;
  }

  hello(mex: string) {
    alert('Hello ' + mex + '!');
  }

  openReviews(id: number) {
    this.router.navigate(['/reviewPage', 'bar', id]);
  }

}
