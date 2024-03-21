import { Component } from '@angular/core';
import { Nation } from '../model/Nation';
import { ActivatedRoute } from '@angular/router';
import { NationService } from '../services/nation.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent {
  nation: Nation = new Nation;
  //nation !: any;

  constructor(private route: ActivatedRoute, private service: NationService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe({
      next: (el:any) => {
        this.service.getNation(el.params.name).subscribe({
          next: (res: any)=>{
            this.createNation(res);
            //this.nation = res;
          }
        });
      }
    });
  }

  createNation(array: any[]){
    this.nation.name = array[0].name.common;
    this.nation.img = array[0].flags.png;
    this.nation.capital = array[0].capital;
    this.nation.region = array[0].region;
    this.nation.lingue = array[0].languages;
    this.nation.map = array[0].maps.googleMaps;
    this.nation.population = array[0].population;
    this.nation.signs = array[0].car.signs;
    this.nation.side = array[0].car.side; 
  }
}
