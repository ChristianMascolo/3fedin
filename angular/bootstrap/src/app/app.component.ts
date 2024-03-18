import { Component } from '@angular/core';
import { User } from './model/User';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap';
  visibile = true;
  gallery: string[] = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuq05Z7vedOBUtHF2wL4P7BUyQkshqHK1_g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6TEfYnp0ZcTySsvwW8JNGfRifQ2VID4LSg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeb7JO-hjH54MTt2bsyCY8iu62f_OF8WEYzg&usqp=CAU",
    "https://geekissimo.com/wp-content/uploads/2011/09/wallpaper-1089568.jpg"];
  users: User[] = [{
    nome: "Christian",
    cognome: "Mascolo",
    eta: 22,
  }, {
    nome: "Francesco",
    cognome: "Cognome",
    eta: 10
  }];

  toggleSurname() {
    if (this.visibile) {
      this.visibile = false;
    } else {
      this.visibile = true;
    }
  }
}
