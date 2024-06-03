import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../services/property.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  property: any;
  imgs : any[] = [];

  constructor(private route: ActivatedRoute, private ps: PropertyService, private sanitizer: DomSanitizer, private imageService: ImageService) {
    let id: any = this.route.snapshot.paramMap.get("id");

    this.ps.getOne(id as number).subscribe({
      next: (data: any) => {
        this.property = data;
        this.imageService.getByProperty(data.id).subscribe({
          next: (data: any) => {
            this.imgs = data;
          }
        })
      }
    })

  }

  getMaps(){
    return "https://www.google.it/maps/place/" + this.property.address;
  }

  getImg(path: any) {
    let base64String = "data:image/png;base64,/9j/" + " " + path;
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64String);
  }
}
