import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-modal-review',
  templateUrl: './modal-review.component.html',
  styleUrls: ['./modal-review.component.scss']
})
export class ModalReviewComponent {
  idB !: number;
  idU !: number;
  idR !: number;
  type !: string;
  pipe = new DatePipe('en-US');
  review = new FormGroup({
    description: new FormControl("", Validators.required),
    vote: new FormControl("", Validators.required),
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private reviewService: ReviewService) {
    this.idB = data.idB;
    this.idU = data.idU;
    if (data.type === "update") {
      this.type = data.type;
      this.idR = data.idR ;
    }
  }

  onSubmit() {
    if (this.type == "add") {
      let rev = {
        "description": this.review.value.description,
        "vote": this.review.value.vote,
        "date": this.pipe.transform(Date.now(), 'yyyy-MM-dd'),
        "bar": {
          "id": this.idB,
        },
        "user": {
          "id": this.data.idU,
        }
      }
      this.reviewService.createReviewBar(rev).subscribe({
        next: (res) => {
          console.log(res);
        }
      })
    } else if (this.type == "update") {
      let rev = {
        "description": this.review.value.description,
        "vote": this.review.value.vote,
        "date": this.pipe.transform(Date.now(), 'yyyy-MM-dd'),
        "bar": {
          "id": this.idB,
        },
        "user": {
          "id": this.data.idU,
        }
      }
      this.reviewService.updateReview(this.idR,rev).subscribe({
        next: (res) => {
          console.log(res);
        }
      })
    }

    window.location.reload();
  }
}
