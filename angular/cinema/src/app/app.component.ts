import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cinema';


  logout(){
    localStorage.removeItem("userSession");
  }

  userLogged(){
    return localStorage.getItem("userSession");
  }
}
