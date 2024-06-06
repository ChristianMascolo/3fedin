import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private url = 'http://localhost:8080/api/order';
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(`${this.url}/all`);
  }

  findByBranchId(id: number){
    return this.http.get(`${this.url}/byBranch/${id}`);
  }
}
