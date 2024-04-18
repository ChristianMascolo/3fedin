import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {
  private url = "http://localhost:8080/api/console"

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.url}/all`);
  }

  addConsole(console: any){
    return this.http.post(`${this.url}/add`,console);
  }

  delete(id: number){
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
