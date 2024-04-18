import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8080/api/user";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.url}/getAll`);
  }

  addUser(user: any) {
    return this.http.post(`${this.url}/addUser`, user);
  }

  deleteUser(idU: number) {
    return this.http.delete(`${this.url}/deleteUser/${idU}`);
  }

  updateUser(idU: number, pic: string) {
    let body = {
      "pic": pic
    }
    return this.http.put(`${this.url}/updateUser/${idU}`, body);
  }

  searchByEmail(email: string){
    return this.http.get(`${this.url}/searchByEmail/${email}`);
  }
}
