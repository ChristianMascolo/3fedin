import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  products !: Array<Product>

  constructor(private ps: ProductService) {
    this.ps.all().subscribe({
      next: (res) => {
        this.ps.getProductList().next(res);
        this.products = res;
      }
    })

  }

  add(p: Product){
    this.ps.getCart().next(p);
  }

  remove(id: number){
    this.ps.delete(id).subscribe({
      next: () => {
        this.ps.getCart().subscribe();
      }
    })
  }
}
