import { Component } from '@angular/core';
import { SharesubjectService } from '../services/sharesubject.service';

@Component({
  selector: 'app-modulo-b',
  templateUrl: './modulo-b.component.html',
  styleUrls: ['./modulo-b.component.scss']
})
export class ModuloBComponent {
  inputList: Array<string>=[];

  constructor(private shareSubject: SharesubjectService){
    this.shareSubject.moduloASub.subscribe(modul => this.inputList.push(modul));
  }

  submit(input: any){
    this.shareSubject.moduloBSub.next(input.value);  
    input.value = "";  
  }
}
