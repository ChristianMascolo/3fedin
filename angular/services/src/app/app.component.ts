import { Component } from '@angular/core';
import { Users } from './model/Users';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
  allUser !: Users[];
  user = new Users();

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.getAllUsers().subscribe({
      next: (res: any) => console.log(res)
    });
  }

  addUser(){
    this.rest.addUser(this.user).subscribe(data => console.log(data));
  }
}
