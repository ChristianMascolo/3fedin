import { Component } from '@angular/core';
import { SharesubjectService } from '../services/sharesubject.service';

@Component({
  selector: 'app-modulo-a',
  templateUrl: './modulo-a.component.html',
  styleUrls: ['./modulo-a.component.scss']
})
export class ModuloAComponent {
  inputList: Array<string>=[];

  constructor(private shareSubject: SharesubjectService){
    this.shareSubject.moduloBSub.subscribe(modul => this.inputList.push(modul));
  }

  submit(input: any){
    this.shareSubject.moduloASub.next(input.value);  
    input.value = "";  
  }
}
