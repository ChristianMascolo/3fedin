import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user !: any;

  constructor(private route: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('user')) {
      let tmp = sessionStorage.getItem('user') as string;
      this.user = JSON.parse(tmp);
    }
  }

  home(){
    this.route.navigate(['']);
  }

  logout() {
    sessionStorage.removeItem('user');
    this.route.navigate(['']);
  }
}
