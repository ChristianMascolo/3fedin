import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url = environment.url;

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(`${this.url}/user`)
  }

  addUser(user: Users) {
    const userstring = JSON.stringify(user);
    const header = { 'content-type': 'application/json' };

    return this.http.post(`${this.url}/user`,userstring,{'headers':header})
  }
}