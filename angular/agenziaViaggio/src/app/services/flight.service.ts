import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private url = "http://localhost:8080/api/flight";

  constructor(private http: HttpClient) { }

  add(flight: any){
    return this.http.post(`${this.url}/add`, flight);
  }
}
