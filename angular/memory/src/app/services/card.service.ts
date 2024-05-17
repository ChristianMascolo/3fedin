import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private url = "http://localhost:8080/api/card"

  constructor(private http:HttpClient) { }

  all(){
    return this.http.get<any[]>(`${this.url}/all`);
  }
}
