import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private url = "http://localhost:8080/api/medicine"

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.url}/all`);
  }

  getByVisit(id: number){
    return this.http.get(`${this.url}/visitMedicines/${id}`);
  }

  add(medicine: any){
    return this.http.post(`${this.url}/add`, medicine);
  }
}
