import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourStandService {
  private url = "http://localhost:8080/api/tourstand"

  constructor(private http: HttpClient) { }

  add(idS: number, idT: number, nPersone: any) {
    return this.http.post(`${this.url}/${idS}/${idT}/${nPersone}`,{});
  }

  getByTour(id: number){
    return this.http.get(`${this.url}/byTour/${id}`);
  }

  getByStand(id: number){
    return this.http.get(`${this.url}/byStand/${id}`);
  }
}
