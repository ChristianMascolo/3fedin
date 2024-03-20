import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bandiere !: any[]

  constructor(private http: HttpClient, private router: Router) {
    // Make the HTTP request:
    this.http.get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .subscribe((data: any) => {
         this.bandiere = data["data"];
      });
  }

  redirect(bandiera:any){
    this.router.navigate(['/bandiera', bandiera["name"], bandiera["flag"]]);
  }
}
