import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user!: any;
  mapsUrl = "https://www.google.com/maps/dir/";

  constructor(private sanitizer: DomSanitizer) { }

  setUser(user: any) {
    this.user = user;
  }

  transformImg(path: string) {
    let base64String = "data:image/*;base64, " + " " + path;
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64String);
  }

  getMaps() {
    return this.mapsUrl + " " + this.user.street + " " + this.user.civico + " " + this.user.cap + " " + this.user.city;
  }

  closeCard(){
    this.user = null;
  }

  
}
