import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private url = "http://localhost:8080/api/booking";

  constructor(private http: HttpClient) { }

  addBooking(booking: any){
    return this.http.post(`${this.url}/addBooking`, booking);
  }

  addBookingHotel(start: Date,finish: Date,idB: number,idH: number){
    return this.http.post(`${this.url}/addBookingHotel/${start}/${finish}/${idB}/${idH}`,{});
  }

  addBookingFlight(price: number,idB: number,idF: number){
    return this.http.post(`${this.url}/addBookingFlight/${price}/${idB}/${idF}`,{});
  }

  getBookingHotelByBooking(id: number){
    return this.http.get(`${this.url}/allBookingHotelByBooking/${id}`);
  }

  getBookingFlightByBooking(id: number){
    return this.http.get(`${this.url}/allBookingFlightByBooking/${id}`);
  }

  getBookingHotelByHotel(id: number){
    return this.http.get(`${this.url}/allBookingHotelByHotel/${id}`);
  }

  getBookingFlightByFlight(id: number){
    return this.http.get(`${this.url}/allBookingFlightByFlight/${id}`);
  }

}
