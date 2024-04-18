import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleFormService {
  private url = "http://localhost:8080/api/user/";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.url}all`);
  }
}
