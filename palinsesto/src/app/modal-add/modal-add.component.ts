import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConnectionService } from '../services/connection.service';
import { ProgramDTO } from '../model/ProgramDTO';
import { Program } from '../model/Program';


@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss'],
})
export class ModalAddComponent {
  titolo !: string;
  descrizione !: string;
  orarioInizio !: string;
  orarioFine !: string;

  constructor(private service: ConnectionService) { }

  add() {
    let p: ProgramDTO = {
      titolo: this.titolo,
      descrizione: this.descrizione,
      orarioInizio: this.orarioInizio,
      orarioFine: this.orarioFine
    };

    console.log(p);
    this.service.addProgram(p).subscribe({
      next: () =>{
        this.service.subjectChange();
      }
    });
  }
}