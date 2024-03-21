import { Component } from '@angular/core';
import { NationService } from '../services/nation.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  nomi !: any[];

  constructor(private service: NationService){}

  ngOnInit(){
    this.service.getAllNations().subscribe({
      next: (res : any) => {
        this.nomi = res;
      }
    });
  }
}
