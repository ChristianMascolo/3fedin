import { Component } from '@angular/core';
import { CanzoniService } from '../services/canzoni.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss']
})
export class PreferitiComponent {
  preferites: any[] = [];

  loadPreferiti(preferites: any[]) {
    this.preferites = preferites;
  }
}
