import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  private url = "http://localhost:8080/api/platform";

  constructor(private http: HttpClient) { }

  getByGame(id: number){
    return this.http.get(`${this.url}/getPlatformByGame/${id}`);
  }

  getByConsole(id: number){
    return this.http.get(`${this.url}/getPlatformByConsole/${id}`);
  }

  add(platform: any[]){
    return this.http.post(`${this.url}/add`, platform);
  }
}
