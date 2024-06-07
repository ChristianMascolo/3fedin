import { Component } from '@angular/core';
import { CarouselService } from '../services/carousel.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  carousels!: any[];

  constructor(private carouselService: CarouselService,private sanitizer: DomSanitizer) {}

  ngOnInit(){
    this.carouselService.getAll().subscribe({
      next: (res : any) => {
        this.carousels = res;
      }
    });
  }

  getImg(path: any) {
    let base64String = "data:image/*;base64, " + " " + path;
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64String);
  }
}
