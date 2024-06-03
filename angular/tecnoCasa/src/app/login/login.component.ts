import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  })

  constructor(private us: UserService) { }

  onSubmit() {
    this.us.checkLogin(this.form.value.email as string,this.form.value.password as string).subscribe({
      next: (res) => {
        if (res !== null) {
          sessionStorage.setItem("user", JSON.stringify(res));
        }
      }
    })
  }
}
