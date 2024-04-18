import { Platform } from '@angular/cdk/platform';
import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlatformService } from '../services/platform.service';
import { GameService } from '../services/game.service';
import { ConsoleService } from '../services/console.service';

@Component({
  selector: 'app-modal-game',
  templateUrl: './modal-game.component.html',
  styleUrls: ['./modal-game.component.scss']
})
export class ModalGameComponent {
  game: FormGroup;
  blob !: any;
  consoles !: Array<any>;
  selectedConsoles !: any[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private ps: PlatformService, private gs: GameService, private cs: ConsoleService,public dialogRef: MatDialogRef<ModalGameComponent>) {
    this.game = this.fb.group({
      name: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      img: new FormControl("", Validators.required),
      genre: new FormControl("", Validators.required),
      productor: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      pegi: new FormControl("", Validators.required),
      consoles: this.fb.array([], Validators.required),
    });
    this.consoles = this.setPlatforms();
  }

  setPlatforms() {
    const platforms: Array<any> = [];
    this.cs.getAll().subscribe({
      next: (res: any) => {
        let tmp: any[] = res;
        tmp.forEach((current) => {
          platforms.push({ name: current.name, value: false, id: current.id })
        })
      }
    });
    return platforms;
  }

  onCheckboxChange(e: any, name: string) {
    if (e.target.checked) {
      this.consoles.forEach((current) => {
        if (current.name == name) {
          current.value = true;
        }
      })
    } else {
      this.consoles.forEach((current) => {
        if (current.name == name) {
          current.value = false;
        }
      })
    }
  }

  submit() {
    this.gs.add(this.setGameDb()).subscribe({
      next: (res:any) => {
        this.ps.add(this.setPlatformDb(res.id)).subscribe({
          next: () => {
            this.dialogRef.close()
          }
        })
      }
    })
  }

  close() {
    this.dialogRef.close();
  }

  setGameDb(){
    return {
      "name": this.game.value.name,
      "description": this.game.value.description,
      "img": this.blob,
      "genre": this.game.value.genre,
      "productor": this.game.value.productor,
      "price": this.game.value.price,
      "pegi": this.game.value.pegi,
    }
  }

  setPlatformDb(id: number) {
    let platformDb : any[] = [];

    this.consoles.forEach((current) => {
      if (current.value) {
        platformDb.push({ gameId: id, consoleId: current.id })
      }
    })
    return platformDb;
  }

  onFileChange(event: any) {
    let path = event.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(path);
    reader.onloadend = () => {
      let base64String = reader.result as string;
      this.blob = base64String.replace("data:image/png;base64,", "");
    };
  }
}
