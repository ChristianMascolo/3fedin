import { Component,Input } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent {
  @Input() utenti !: User[];
  visible : boolean = true;
  constructor(){}
}
