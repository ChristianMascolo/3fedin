import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private url = 'http://localhost:8080/api/carousel';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(`${this.url}/all`);
  }

  getAllAvailable(age: number, height: number) {
    return this.http.get<any[]>(`${this.url}/available/${age}/${height}`);
  }

  getNeighbour(lat: number, lng: number) {
    return this.http.get<any[]>(`${this.url}/neighbour?lat=${lat}&lng=${lng}`);
  }
}
