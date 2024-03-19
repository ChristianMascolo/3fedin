import { Component } from '@angular/core';
import { Footer } from '../model/Footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footer : Footer ={
    nome_azienda : "3fEdin",
    email : "email@example.com",
    numero_telefono : "333333"
  }
}
