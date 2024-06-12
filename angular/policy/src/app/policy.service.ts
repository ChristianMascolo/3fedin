import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private url= "http://localhost:8080/api/policy";

  constructor(private http: HttpClient) { }

  add(policy:any){
    return this.http.post(`${this.url}/add`,policy);
  }

  all(){
    return this.http.get<any[]>(`${this.url}/all`);
  }
}
