import { Component } from '@angular/core';
import { Giocattolo } from './model/Giocattolo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'giocattoli';
  valore: number = 0;
  giocattoli: Giocattolo[] = [
    {
      nome: "Orsacchiotto",
      prezzo: 100,
      pegi: 0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYbOFf3PKOoHaJ3HpY9xhWhdcgpxstUCv0w&usqp=CAU",
      id: 1,
    },
    {
      nome: "Gormiti",
      prezzo: 2,
      pegi: 7,
      image: "https://i.redd.it/chips-mini-gormiti-v0-wa3hvpfrn16b1.png?width=1080&format=png&auto=webp&s=623269e1a0e209bf0cba7008edbc57026f545f3a",
      id: 1,
    }
  ];

  formatLabel(value: number): string {
    this.valore = value;
    console.log(this.valore);
    return `${value}`;
  }

  fmt(): any{
    this.valore = 1;
    console.log(this.valore);
    return '1';
  }

}
