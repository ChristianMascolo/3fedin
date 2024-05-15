import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private url = "http://localhost:8080/api/game";

  constructor(private http: HttpClient) { }

  all(){
    return this.http.get(`${this.url}/all`);
  }

  getById(id: number){
    return this.http.get(`${this.url}/getById/${id}`);
  }

  add(game: any){
    return this.http.post(`${this.url}/add`, game);
  }

  delete(id: number){
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
