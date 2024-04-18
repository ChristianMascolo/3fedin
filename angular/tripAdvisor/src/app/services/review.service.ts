import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private url = "http://localhost:8080/api/review"

  constructor(private http: HttpClient) { }

  getReviewsBar(idB: number){
    return this.http.get(`${this.url}/getBarReviews/${idB}`);
  }

  createReviewBar(review: any){
    return this.http.post(`${this.url}/createReviewBar`,review);
  }

  getReviewsUser(idU: number){
    return this.http.get(`${this.url}/getUserReviews/${idU}`);
  }

  updateReview(idR: number,review: any){
    return this.http.put(`${this.url}/updateReview/${idR}`,review);
  }
}
