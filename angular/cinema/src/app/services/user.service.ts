import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8080/api/user/";

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(`${this.url}all`);
  }

  add(user: any) {
    return this.http.post(`${this.url}add`, user);
  }

  checkIfExist(name: any) {
    return this.http.get(`${this.url}searchName/${name}`);
  }
}
