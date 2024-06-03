import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private url = "http://localhost:8080/api/appointment"

  constructor(private http: HttpClient) { }

  add(a: any) {
    return this.http.post(`${this.url}/add`, a);
  }

  all() {
    return this.http.get(`${this.url}/all`);
  }

  findByUser(id: number) {
    return this.http.get(`${this.url}/findByUser/${id}`);
  }

  findByProperty(id: number) {
    return this.http.get(`${this.url}/findByProperty/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  update(id: number) {
    return this.http.get(`${this.url}/update/${id}`);
  }
}
