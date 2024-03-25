import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConnectionService } from '../services/connection.service';
import { ProgramDTO } from '../model/ProgramDTO';

@Component({
  selector: 'app-modal-modifica',
  templateUrl: './modal-modifica.component.html',
  styleUrls: ['./modal-modifica.component.scss']
})
export class ModalModificaComponent {
  titolo !: string;
  descrizione !: string;
  orarioInizio !: string;
  orarioFine !: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: ConnectionService) {
    this.titolo = data.titolo;
    this.descrizione = data.descrizione;
    this.orarioInizio = data.orarioInizio;
    this.orarioFine = data.orarioFine;
  }

  modify() {
    let p: ProgramDTO = {
      titolo: this.titolo,
      descrizione: this.descrizione,
      orarioInizio: this.orarioInizio,
      orarioFine: this.orarioFine
    };

    this.service.modificaProgramma(this.data.id, p).subscribe({
      next: () => {
        this.service.subjectChange();
      }
    });
  }
}
