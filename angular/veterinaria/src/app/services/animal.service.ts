import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private url = "http://localhost:8080/api/animals"

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.url}/getAll`);
  }

  addAnimal(animal: any){
    return this.http.post(`${this.url}/add`,animal);
  }

  getOne(id: number){
    return this.http.get(`${this.url}/getOne/${id}`);
  }
}
