import { Component } from '@angular/core';
import { SharingService } from '../services/sharing.service';

@Component({
  selector: 'app-module-one',
  templateUrl: './module-one.component.html',
  styleUrls: ['./module-one.component.scss']
})
export class ModuleOneComponent {
  myMessage: string = "SONO COMPONENTE UNO";
  receivedMsg !: string;

  constructor(private service: SharingService) {
    this.receivedMsg = this.service.getMessage();
  }

  updateMessage() {
    this.service.setMessage(this.myMessage);
  }

}