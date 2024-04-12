import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private url = "http://localhost:8080/api/doctor"

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.url}/getAll`);
  }

  addDoctor(doctor: any) {
    return this.http.post(`${this.url}/addDoctor`, doctor);
  }

  getOne(id: number) {
    return this.http.get(`${this.url}/getOne/${id}`);
  }
}
