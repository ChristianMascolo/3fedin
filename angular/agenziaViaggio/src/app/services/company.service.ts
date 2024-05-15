import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url = "http://localhost:8080/api/company";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.url}/getAll`);
  }

  findByName(name: string){
    return this.http.get(`${this.url}/findByName/${name}`);
  }

  add(company: any){
    return this.http.post(`${this.url}/add`, company);
  }
}
