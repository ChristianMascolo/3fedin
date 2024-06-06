import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {
  private url = "http://localhost:8080/api/revenue"
  
  constructor(private http: HttpClient) { }

  all(){
    return this.http.get(`${this.url}/all`);
  }

  totalByMonth(month: string,year:number){
    return this.http.get(`${this.url}/totalByMonth/${month}/${year}`);
  }

  byBranch(id:number){
    return this.http.get(`${this.url}/byBranch/${id}`);
  }
}
