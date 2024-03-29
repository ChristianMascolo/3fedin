import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private url = "http://localhost:8080/api/ticket/";

  constructor(private http: HttpClient) { }

  add(ticket: any, idF: any, idU: any) {
    console.log("ticket", ticket);
    return this.http.post(`${this.url}add/${idF}/${idU}`, ticket);
  }
}
