import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private url = "http://localhost:8080/api/booking"

  constructor(private http: HttpClient) { }

  add(booking: any) {
    return this.http.post(`${this.url}/add`, booking);
  }
}
