import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private url = "http://localhost:8080/api/tour"

  constructor(private http: HttpClient) { }

  add(tour: any){
    return this.http.post(`${this.url}/add`,tour);
  }
}
