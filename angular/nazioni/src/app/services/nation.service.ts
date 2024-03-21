import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NationService {
  url = "https://restcountries.com/v3.1/";

  constructor(private http: HttpClient) {}

  getNation(nome: string){
    return this.http.get(`${this.url}/name/${nome}`);
  }

  getAllNations(){
    return this.http.get(`${this.url}/all`)
  }
}
