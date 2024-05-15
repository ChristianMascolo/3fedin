import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from '../model/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private localhost = "http://localhost:8080/api/address/"

  constructor(private http: HttpClient) { }

  add(address: any){
    return this.http.post(`${this.localhost}addA`, address);
  }

  all(){
    return this.http.get<Address[]>(`${this.localhost}allA`);
  }
}
