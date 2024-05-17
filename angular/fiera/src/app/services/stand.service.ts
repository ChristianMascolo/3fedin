import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StandService {
  private url = "http://localhost:8080/api/stand"

  constructor(private http: HttpClient) { }

  add(stand: any){
    return this.http.post(`${this.url}/add`,stand);
  }

  all(){
    return this.http.get(`${this.url}/all`);
  }
}
