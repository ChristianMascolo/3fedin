import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { ProfileComponent } from './profile/profile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'business';
  users !: any[];

  @ViewChild(ProfileComponent) pc !: ProfileComponent;

  constructor(private sanitizer: DomSanitizer,private userS: UserService,private router: Router ) { }

  ngOnInit() {
    this.userS.getAll().subscribe({
      next: (res: any) => {
        this.users = res;
      }
    });
  }

  transformImg(path: string) {
    let base64String = "data:image/png;base64, " + " " + path;
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64String);
  }

  openCard(user:any){
    this.pc.setUser(user);
  }

  openForm(){
    this.router.navigate(["add"]);
  }
}
