import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../services/review.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalReviewComponent } from '../modal-review/modal-review.component';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent {
  idB !: any;
  idU !: any;
  from !: any;
  barReviews !: any[];
  userReviews !: any[];

  constructor(private route: ActivatedRoute, private reviewService: ReviewService, public dialog: MatDialog) { }

  ngOnInit() {
    this.from = this.route.snapshot.paramMap.get('from');

    if (sessionStorage.getItem("user")) {
      let tmp = sessionStorage.getItem("user") as string;
      let user = JSON.parse(tmp);
      this.idU = user.id;
    }

    if (this.from == 'user') {

      this.reviewService.getReviewsUser(this.idU).subscribe({
        next: (res: any) => {
          this.userReviews = res;
        },
      })

    } else if (this.from == 'bar') {
      this.idB = this.route.snapshot.paramMap.get('id');
      this.reviewService.getReviewsBar(this.idB).subscribe({
        next: (res: any) => {
          this.barReviews = res;
        },
      })
    }
  }

  updateReview(idR: number) {
    this.dialog.open(ModalReviewComponent, {
      width: '500px',
      data: { idB: this.idB, idU: this.idU, type: 'update', idR }
    });
  }

}
