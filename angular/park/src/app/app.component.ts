import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalClientComponent } from './modals/modal-client/modal-client.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'park';

  constructor(public dialog: MatDialog) {}

  openModal() {
    let modal = this.dialog.open(ModalClientComponent, {
      width: '500px',
    });

    modal.afterClosed().subscribe({
      next: () => {
      },
    });
  }
}
