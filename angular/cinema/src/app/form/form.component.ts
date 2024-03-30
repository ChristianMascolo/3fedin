import { Component, afterNextRender } from '@angular/core';
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
    email: new FormControl("", [Validators.email, Validators.required]),
  });

  registerForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(5)]),
    email: new FormControl("", [Validators.email, Validators.required]),
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
    /* let utility = {
      "name": this.loginForm.value.name,
      "password": this.loginForm.value.password,
      "email": this.loginForm.value.email,
    } */
    this.userService.checkIfExist(this.loginForm.value.name, this.loginForm.value.email).subscribe({
      next: (res: any) => {
        console.log(res);
        /*  this.userService.add(utility).subscribe({
           next: () => {
             console.log("utente aggiunto");
           }
         }) */
      }
    });
  }

  doRegister() {
    let utility = {
      "name": this.registerForm.value.name,
      "surname": this.registerForm.value.lastName,
      "password": this.registerForm.value.password,
      "email": this.registerForm.value.email,
    }
    this.userService.add(utility).subscribe({
      next: (res)=>{
        document.location.href="http://localhost:4200/"
      }
    })
  }
}
