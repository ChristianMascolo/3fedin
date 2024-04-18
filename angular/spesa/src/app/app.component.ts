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
  inputList: Array<Product> = [];

  constructor(private ps: ProductService) {
    this.ps.getCart().subscribe(data => this.inputList.push(data));
  }

  submit(input: Product) {
    this.ps.getCart().next(input);
    console.log(input);
  }

  total() {
    let tmp = 0.
    this.inputList.forEach(c => {
      tmp += c.price;
    })
    return tmp;
  }
}
