import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarService {
  private url = "http://localhost:8080/api/bar"

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.url}/getAll`);
  }

  addBar(bar: any){
    return this.http.post(`${this.url}/addBar`,bar);
  }

  deleteBar(idB: number){
    return this.http.delete(`${this.url}/removeBar/${idB}`);
  }
}
