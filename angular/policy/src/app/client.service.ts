import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private url = 'http://localhost:8080/api/client';

  constructor(private http: HttpClient) {}

  add(client: any,id:any) {
    return this.http.post(`${this.url}/add/${id}`, client);
  }

  byId(id: any) {
    return this.http.get(`${this.url}/byId/${id}`);
  }
}
