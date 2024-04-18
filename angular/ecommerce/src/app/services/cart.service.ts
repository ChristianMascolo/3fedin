import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url = "http://localhost:8080/api/cart"

  constructor(private http: HttpClient) { }

  getByGame(id: number) {
    return this.http.get(`${this.url}/getCartByGame/${id}`)
  }

  getByUser(id: number) {
    return this.http.get(`${this.url}/getCartByUser/${id}`)
  }

  addCart(idU: number, idG: number, date: any) {
    return this.http.post(`${this.url}/add/${idU}/${idG}?date=${date}`, {});
  }
}
