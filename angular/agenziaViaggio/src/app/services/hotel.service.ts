import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private url = "http://localhost:8080/api/hotel";

  constructor(private http: HttpClient) { }

  add(hotel: any){
    return this.http.post(`${this.url}/add`,hotel);
  }

  findByName(name: string){
    return this.http.get(`${this.url}/findByName/${name}`);
  }
}
