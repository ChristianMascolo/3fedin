import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    surname: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
    admin: new FormControl(""),
  })

  constructor(private us: UserService){}

  submit() {
    this.us.add(this.form.value).subscribe({
      next: (res) => {
        console.log(res);
        sessionStorage.setItem("user",JSON.stringify(res));
      },
    })
  }
}
