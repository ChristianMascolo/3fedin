import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';
  utenti: any[] = [
    {
      nome: 'christian', cognome: 'mascolo'
    },
    {
      nome: 'francesco', cognome: 'assisi'
    }
  ];
  date = new Date();
}
