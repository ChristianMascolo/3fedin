import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bandiera',
  templateUrl: './bandiera.component.html',
  styleUrls: ['./bandiera.component.css']
})
export class BandieraComponent {
  name:string;
  img: string;


  constructor(private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name') as string;
    this.img = this.route.snapshot.paramMap.get('img') as string;
  }

}
