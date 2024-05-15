import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user !: any;

  constructor(private router: Router,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (sessionStorage.getItem("user")) {
      let tmp = sessionStorage.getItem("user") as string;
      this.user = JSON.parse(tmp);
      console.log(this.user);
    }
  }

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  logout() {
    sessionStorage.removeItem("user");
  }

  seeReview() {
    this.router.navigate(['/reviewPage', 'user', this.user.id]);
  }

  convertImg(path: string){
    let base64String = "data:image/*;base64, " + " " + path;
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64String);
  }

  newBar(){
    this.router.navigate(['/newBar']);
  }

  home(){
    this.router.navigate(['']);
  }
}
