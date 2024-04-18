import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {
  imgs: any[] = ["assets/img/cane1.jfif", "assets/img/cane2.jfif", "assets/img/cane3.jfif",
    "assets/img/cane4.jfif", "assets/img/cane5.jfif", "assets/img/cane6.jfif",
    "assets/img/cane7.jfif", "assets/img/cane8.jfif", "assets/img/cane9.jfif"];

}
