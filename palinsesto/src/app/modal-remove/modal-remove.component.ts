import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-modal-remove',
  templateUrl: './modal-remove.component.html',
  styleUrls: ['./modal-remove.component.scss']
})
export class ModalRemoveComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: ConnectionService) { }

  remove() {
    this.service.removeProgram(this.data.id).subscribe({
      next: () => {
        this.service.subjectChange();
      }
    });
  }
}
