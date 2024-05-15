import { Component } from '@angular/core';
import { SharesubjectService } from './services/sharesubject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';
  inputList: Array<string> = [];

  constructor(private service: SharesubjectService){
    this.service.sharingDate.subscribe(data => this.inputList.push(data));
  }

  submit(input: any){
    this.service.sharingDate.next(input.value);  
    input.value = "";  
  }
}
