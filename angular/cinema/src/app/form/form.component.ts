import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  private login !: boolean;
  private register !: boolean;

  loginForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)]),
  });

  registerForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password: new FormControl("", [Validators.required, Validators.minLength(5),]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(5)]),
  });

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngAfterContentChecked() {
    const type = this.route.snapshot.paramMap.get('type');

    if (type === 'r') { this.register = true; this.login = false }
    if (type === 'l') { this.login = true; this.register = false }
  }

  isLogin() {
    return this.login;
  }

  isRegister() {
    return this.register;
  }

  doLogin() {
    console.log(this.loginForm.value);
    this.userService.checkIfExist(this.loginForm.value.name).subscribe();
  }

  doRegister() {
    let utility = {
      "name": this.registerForm.value.name,
      "surname": this.registerForm.value.lastName,
      "password": this.registerForm.value.password,
    }
    this.userService.checkIfExist(utility.name).subscribe({
      next: (res) => {
        console.log(res);
        /* if (res == null) {
          this.userService.add(utility).subscribe({
            next: () => {
              console.log("utente aggiunto");
            }
          })
        } else {
          console.log("user già esistente");
        } */
      }
    });
  }
}
