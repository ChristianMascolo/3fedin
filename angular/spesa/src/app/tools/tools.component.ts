import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  })

  constructor(private ps: ProductService) { }

  add() {
    let products: any[] = [this.productDb()]
    this.ps.add(products).subscribe({
      next: (res) => { 
        //this.ps.getProductList().next(res);
      }
    })
  }

  productDb() {
    let p: Product = {
      id: 0,
      name: this.productForm.value.name as string,
      description: this.productForm.value.description as string,
      price: Number(this.productForm.value.price) || 0,
      category: this.productForm.value.category as string
    }
    return p;
  }

}
