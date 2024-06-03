import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private url = "http://localhost:8080/api/image"

  constructor(private http: HttpClient) { }

  add(image: any[]) {
    return this.http.post(`${this.url}/add`, image);
  }

  getByProperty(id: number) {
    return this.http.get(`${this.url}/getByProperty/${id}`);
  }
}
