import { Component } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import {
  MatDialog,
} from '@angular/material/dialog';
import { ModalAddComponent } from '../modal-add/modal-add.component';
import { ModalRemoveComponent } from '../modal-remove/modal-remove.component';
import { ModalModificaComponent } from '../modal-modifica/modal-modifica.component';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'titolo', 'descrizione', 'orarioInizio', 'orarioFine', 'add', 'remove'];
  dataSource: any;

  constructor(private service: ConnectionService, public dialog: MatDialog) { }

  addProgram() {
    this.dialog.open(ModalAddComponent, {
      width: '250px',
    });
  }

  removeProgram(id: number) {
    this.dialog.open(ModalRemoveComponent, {
      width: '250px',
      data: {
        id: id,
      }
    });

  }

  modificaProgramma(id: number, titolo: string, descrizione: string, orarioInizio: string, orarioFine: string) {
    this.dialog.open(ModalModificaComponent, {
      width: '250px',
      data: {
        id,
        titolo,
        descrizione,
        orarioInizio,
        orarioFine,
      }
    });
  }

  ngOnInit() {
    this.service.getAll().subscribe({
      next: (res: any) => {
        this.dataSource = res
      }
    });

    this.service.getSubject().subscribe({
      next: () => {
        this.service.getAll().subscribe({
          next: (res: any) => {
            this.dataSource = res
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.service.getSubject().unsubscribe();
  }
}
