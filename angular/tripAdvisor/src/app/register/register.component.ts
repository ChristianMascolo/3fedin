import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  blob !: any;
  register = new FormGroup({
    name: new FormControl("", Validators.required),
    surname: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
    profilePic: new FormControl(""),
    role: new FormControl("", Validators.required)
  })

  constructor(private userService: UserService, private route: Router, private sanitizer: DomSanitizer) { }

  doRegister() {
    let tmpU = {
      "name": this.register.value.name,
      "surname": this.register.value.surname,
      "email": this.register.value.email,
      "password": this.register.value.password,
      "profilePic": this.blob,
      "role": this.register.value.role
    };
    console.log(this.blob);
    this.userService.addUser(tmpU).subscribe({
      next: (res: any) => {
        if (res) {
          sessionStorage.setItem("user", JSON.stringify(res));
          this.route.navigate(['']);
        }
      }
    })
  }

  onFileChange(event: any) {
    let path = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(path);

    reader.onloadend = () => {
      let base64String = reader.result as string;
      this.blob = base64String.replace("data:image/png;base64,", "");
    };
  }
}
