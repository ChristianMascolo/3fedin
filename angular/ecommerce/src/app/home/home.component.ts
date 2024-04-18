import { Component } from '@angular/core';
import { GameService } from '../services/game.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from '../services/cart.service';
import { DatePipe } from '@angular/common';
import { PlatformService } from '../services/platform.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalGameComponent } from '../modal-game/modal-game.component';

@Component({
  selector: 'app-home',
  providers: [DatePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  games !: any[];
  user: any;

  constructor(private gs: GameService, private cs: CartService, private sanitizer: DomSanitizer, private datePipe: DatePipe, public dialog: MatDialog) { }

  ngOnInit() {
    if (sessionStorage.getItem('user')) {
      this.user = JSON.parse(sessionStorage.getItem('user') as string);
    }
    this.loadGames();
  }

  getImg(path: any) {
    let base64String = "data:image/*;base64, " + " " + path;
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64String);
  }
  
  addCart(idG: any) {
    let date = this.datePipe.transform(Date.now(), "yyyy-MM-dd");

    this.cs.addCart(this.user.id, idG, date).subscribe({
      next: (res: any) => {
        console.log(res);
      }
    })
  }

  getPegi(pegi: number) {
    switch (pegi) {
      case 3: return "assets/img/3.png"; break;
      case 7: return "assets/img/7.png"; break;
      case 12: return "assets/img/12.png"; break;
      case 16: return "assets/img/16.png"; break;
      case 18: return "assets/img/18.png"; break;
      default: throw new Error("Invalid PEGI rating");
    }
  }

  openDialog() {
    let modal = this.dialog.open(ModalGameComponent, {
      width: "500px",
    });

    modal.afterClosed().subscribe(() => {
      this.gs.all().subscribe({
        next: (res: any) => {
          this.games = res;
        }
      })
    })
  }

  removeGame(id: number) {
    this.gs.delete(id).subscribe({
      next: () => {
        this.loadGames();
      }
    })
  }

  loadGames(){
    this.gs.all().subscribe({
      next: (res: any) => {
        this.games = res;
      }
    })
  }
}
