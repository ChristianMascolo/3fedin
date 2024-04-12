import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  private url = "http://localhost:8080/api/visit"

  constructor(private http: HttpClient) { }

  getDoctorVisits(id: number) {
    return this.http.get(`${this.url}/getDoctorVisits/${id}`);
  }

  getAnimalVisits(id: number) {
    return this.http.get(`${this.url}/getAnimalVisits/${id}`);
  }

  addVisit(visit: any) {
    return this.http.post(`${this.url}/addVisit`, visit);
  }

  updateVisit(visit: any, id: number) {
    return this.http.put(`${this.url}/updateVisit/${id}`, visit);
  }

  doneVisit(id: number, flag: boolean) {
    return this.http.patch(`${this.url}/doneVisit/${id}/${flag}`, {});
  }
}
