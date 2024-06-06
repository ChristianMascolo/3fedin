import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private url = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  add(admin: any) {
    return this.http.post(`${this.url}/add`, admin);
  }

  find(email: any) {
    return this.http.get(`${this.url}/find/${email}`);
  }
}
