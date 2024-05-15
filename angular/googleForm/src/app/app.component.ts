import { Component, ViewChild } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { DettaglioComponent } from './dettaglio/dettaglio.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'googleForm';

  users !: any[];

  @ViewChild(DettaglioComponent) user !: DettaglioComponent;

  constructor(private us: UserService,private router: Router) { }

  ngOnInit() {
    this.us.getAll().subscribe({
      next: (res: any) => {
        this.users = res;
        console.log(this.users);
      }
    });
  }

  seeDetails(user: any) {
    this.user = user;
    this.router.navigate(['/dettaglio']);
  }
}
