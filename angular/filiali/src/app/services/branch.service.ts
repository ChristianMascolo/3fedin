import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private url = "http://localhost:8080/api/branch"

  constructor(private http:HttpClient) { }

  all(){
    return this.http.get(`${this.url}/all`);
  }

  add(branch: any){
    return this.http.post(`${this.url}/add`,branch);
  }
  
  find(branch: any){
    return this.http.get(`${this.url}/find`,branch);
  }
}
