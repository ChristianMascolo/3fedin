import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "http://localhost:8080/api/product"
  private cart: Subject<Product> = new Subject<Product>();
  private productList: Subject<Product[]> = new Subject<Product[]>();

  constructor(private http: HttpClient) { }

  getProductList(){
    return this.productList;
  }

  getCart(){
    return this.cart;
  }

  all(){
    return this.http.get<Array<Product>>(`${this.url}/all`);
  }

  add(products: any[]) {
    return this.http.post<Product>(`${this.url}/add`, products);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/deleteOne/${id}`);
  }

  patch(id: number, product: Product) {
    return this.http.patch(`${this.url}/patch/${id}`, product);
  }
}
