import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userForm = new FormGroup({
    email : new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(5)])
  })

  comapnyForm = new FormGroup({
    name: new FormControl("",Validators.required),
    area: new FormControl("",Validators.required)
  })
}