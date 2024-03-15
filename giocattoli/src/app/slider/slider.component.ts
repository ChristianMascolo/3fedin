import { Component, Output } from '@angular/core';
import { Giocattolo } from '../model/Giocattolo';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Output() giocattoli !: Giocattolo[];

  setGiocattolo(giocattoli: Giocattolo[]) {
    this.giocattoli = giocattoli;
  }

}
