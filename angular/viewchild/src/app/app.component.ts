import { Component, ViewChild } from '@angular/core';
import { CanzoniComponent } from './canzoni/canzoni.component';
import { CanzoniService } from './services/canzoni.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'viewchild';
  songs !: any[];

  @ViewChild(CanzoniComponent) jsc !: CanzoniComponent;

  constructor(private service: CanzoniService){}

  getSongs(){
    this.service.allSongs().subscribe({
      next: (res : any) => {
        this.jsc.setSongs(res);
      }
    });

  }
}
