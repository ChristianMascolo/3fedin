import { Component } from '@angular/core';
import { Giocattolo } from '../model/Giocattolo';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  giocattolo !: Giocattolo;

  setGiocattolo(giocattolo: Giocattolo){
    this.giocattolo = giocattolo;
  }

  

}
