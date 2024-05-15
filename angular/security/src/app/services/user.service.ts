import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../model/UserDTO';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private localhost = "http://localhost:8080/api/user/"

  constructor(private http: HttpClient) { }

  all(){
    return this.http.get<UserDTO[]>(`${this.localhost}allU`);
  }

  add(user: any){
    return this.http.post<any>(`${this.localhost}addU`, user);
  }

  checkUser(user: User){
    return this.http.get<UserDTO>(`${this.localhost}infoU`);
  }
}
