import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {
  films !: any[];

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.all()
      .subscribe((res: any) => { 
        console.log(res);
        this.films = res
       });
  }
}
