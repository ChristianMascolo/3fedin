import { Component, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent {
  @Input() user !: any;

  constructor() { }

  ngOnInit(){
    console.log(this.user);
  }

}
