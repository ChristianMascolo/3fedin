import { Component, ViewChild } from '@angular/core';
import { CanzoniService } from '../services/canzoni.service';
import { PreferitiComponent } from '../preferiti/preferiti.component';

@Component({
  selector: 'app-canzoni',
  templateUrl: './canzoni.component.html',
  styleUrls: ['./canzoni.component.scss']
})
export class CanzoniComponent {
  songs !: any[];

  @ViewChild(PreferitiComponent) pc !: PreferitiComponent;

  constructor(private canzoniService: CanzoniService) { }

  setSongs(songs: any[]) {
    this.songs = songs;
  }

  toggleFavourite(flag: boolean, id: number) {
    this.canzoniService.toggleFavourite(!flag, id).subscribe({
      next: () => {
        this.songs.forEach((current: any) => {
          if (current.id === id) {
            current.favourite = !flag;
          }
        });
      }
    });

  }

  loadPreferiti() {
    this.canzoniService.allPreferred().subscribe({
      next: (res: any) => {
        this.pc.loadPreferiti(res);
      }
    })
  }
}
