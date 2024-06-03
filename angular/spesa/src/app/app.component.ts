import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './model/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spesa';
  cart: Array<Product> = [];

  constructor(private ps: ProductService) {
    this.ps.getCart().subscribe(data => this.cart.push(data));

    this.ps.all().subscribe({
      next: (res) => {
        this.ps.getProductList().next(res);
      }
    });
  }

  total() {
    let tmp = 0.
    this.cart.forEach(c => {
      tmp += c.price;
    })
    return tmp;
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter(c => c.id !== id);

    this.cart.forEach(c =>  this.ps.getCart().next(c));
  }
}
