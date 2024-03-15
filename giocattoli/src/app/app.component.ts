import { Component } from '@angular/core';
import { Giocattolo } from './model/Giocattolo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'giocattoli';
  giocattolo !: Giocattolo;

}
