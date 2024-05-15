import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8080/api/user";

  constructor(private http: HttpClient) { }

  all(){
    return this.http.get(`${this.url}/all`);
  }

  findByUsername(uname: string){
    return this.http.get(`${this.url}/findByUsername/${uname}`);
  }

  add(user: any){
    return this.http.post(`${this.url}/addUser`, user);
  }

  deleteUser(idU: number){
    return this.http.delete(`${this.url}/delete/${idU}`);
  }
}
