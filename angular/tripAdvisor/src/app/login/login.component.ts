import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  })

  constructor(private userService: UserService, private route: Router) { }

  doLogin() {
    this.userService.searchByEmail(this.login.value.email as string).subscribe({
      next: (res: any) => {
        if (res) {
          sessionStorage.setItem("user", JSON.stringify(res));
          this.route.navigate(['']).then(() => {
            location.reload;
          });
        }
      }
    })
  }
}
