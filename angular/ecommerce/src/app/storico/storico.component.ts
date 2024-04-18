import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-storico',
  templateUrl: './storico.component.html',
  styleUrls: ['./storico.component.scss']
})
export class StoricoComponent {
  games !: any[];
  id: any;

  constructor(private cartService: CartService, private url: ActivatedRoute, private sanitizer: DomSanitizer,private gs: GameService) {
    this.id = url.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.cartService.getByUser(this.id).subscribe({
      next: (res: any) => {
        this.games = res;
        console.log(this.games)
      },
    });
  }

  getImg(path: any) {
    let base64String = "data:image/*;base64, " + " " + path;
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64String);
  }

  getPegi(pegi: number){
    switch (pegi){
      case 3: return "assets/img/3.png"; break;
      case 7: return "assets/img/7.png"; break;
      case 12: return "assets/img/12.png"; break;
      case 16: return "assets/img/16.png"; break;
      case 18: return "assets/img/18.png"; break;
      default: throw new Error("Invalid PEGI rating");
    }
  }

  getConsoles(id: number){
    let consoles: string[];

    this.gs.getById(id).subscribe({
      next: (res)=>{
        console.log(res);
        
      }
    })
  }

  total(){
    let total = 0.;
    this.games.forEach((game) => {
      total += game.game.price;
    });
    return total.toFixed(2);
  }
}
