import { Component } from '@angular/core';
import { SharingService } from '../services/sharing.service';

@Component({
  selector: 'app-module-two',
  templateUrl: './module-two.component.html',
  styleUrls: ['./module-two.component.scss']
})
export class ModuleTwoComponent {
  myMessage: string = "SONO COMPONENTE DUE";
  receivedMsg !: string;

  constructor(private service: SharingService) {
    this.receivedMsg = this.service.getMessage();
  }

  updateMessage() {
    this.service.setMessage(this.myMessage);
  }
}
