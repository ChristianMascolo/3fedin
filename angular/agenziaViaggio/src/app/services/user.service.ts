import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8080/api/user";

  constructor(private http: HttpClient) { }

  add(user: any){
    return this.http.post(`${this.url}/add`,user);
  }

  findByEmail(email: string){
    return this.http.get(`${this.url}/findByEmail/${email}`);
  }

}
