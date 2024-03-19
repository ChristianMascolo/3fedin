import { Component } from '@angular/core';
import { Articolo } from '../model/Articolo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  articoli : Articolo[]=[{
    title: "Iphone 15",
    prezzo: 1500,
    desc: "Telefono molto costoso",
    img: "assets/img/iphone.jpg"
  },{
    title: "Samsung 22",
    prezzo: 1000,
    desc: "Telefono buono",
    img: "assets/img/samsung22.jpg",
  },{
    title: "PS5",
    prezzo: 499,
    desc: "Miglior console esistente",
    img: "assets/img/ps5.jpeg",
  }]
}
