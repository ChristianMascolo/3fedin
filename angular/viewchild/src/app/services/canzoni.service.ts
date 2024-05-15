import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanzoniService {
  private urlS = "http://localhost:8080/api/song/"

  constructor(private http: HttpClient) { }


  allSongs() {
    return this.http.get(`${this.urlS}all`);
  }

  toggleFavourite(flag: boolean, id: number) {
    return this.http.put(`${this.urlS}toggleFavourite/${flag}/${id}`, {});
  }

  allPreferred() {
    return this.http.get(`${this.urlS}preferred`);
  }
}
