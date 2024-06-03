import { Component } from '@angular/core';
import { PaymentService } from './services/payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'paymentFactory';
  amount = 0;

  constructor(private service: PaymentService) {}

  addToCart(price: number) {
    this.amount += price;
  }

  pay(type: string) {
    switch (type) {
      case 'bank':
        this.service
          .pay(type, 'accountbanca', 'codebanca', this.amount)
          .subscribe({
            next: (res: any) => {
              console.log(res);
            },
          });
        break;
      case 'paypal':
        this.service.pay(type, 'paypal', 'password', this.amount).subscribe({
          next: (res: any) => {
            console.log(res);
          },
        });
        break;
      case 'card':
        this.service.pay(type, '1234567890', 'none', this.amount).subscribe({
          next: (res: any) => {
            console.log(res);
          },
        });
        break;
    }
  }
}
