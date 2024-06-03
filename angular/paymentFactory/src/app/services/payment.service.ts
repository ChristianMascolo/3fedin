import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  pay(type: string, param1: string, param2: string, amount: number) {
    let header = new HttpHeaders({
      'Content-Type':'text/plain '
    })
    return this.http.post(
      `http://localhost:8080/api/payment/pay/${type}/${param1}/${param2}/${amount}`,
      { headers: header }
    );
  }
}
