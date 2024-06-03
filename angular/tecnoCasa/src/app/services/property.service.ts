import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private url = "http://localhost:8080/api/property"

  constructor(private http: HttpClient) { }

  add(property: any){
    return this.http.post(`${this.url}/add`,property);
  }

  getAll(){
    return this.http.get(`${this.url}/all`);
  }

  getOne(id: number){
    return this.http.get(`${this.url}/getOne/${id}`);
  }

  update(id: number,property: any){
    return this.http.put(`${this.url}/update/${id}`,property);
  }
}
