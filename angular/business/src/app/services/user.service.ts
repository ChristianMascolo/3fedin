import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8080/api/user/"

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.url}all`);
  }

  add(user: any){
    return this.http.post(`${this.url}add`, user);
  }

  addImg(id:number,qr: string,profilePic: string){
    let body={
      "qr": qr,
      "profilePic": profilePic,
    }

    return this.http.put(`${this.url}addImg/${id}`,body);
  }
}