import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cinema';
  userSession !: any;

  ngOnInit() {
    if (localStorage.getItem("username")) {
      this.userSession = localStorage.getItem("username");
    } 
  }

  logout(){
    localStorage.removeItem("username");
    this.userSession = null;
  }
}
