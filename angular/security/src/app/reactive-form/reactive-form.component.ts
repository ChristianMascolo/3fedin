import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from '../utils/validation';
import { UserNuovo } from '../model/UserNuovo';
import { Address } from '../model/Address';
import { AddressService } from '../services/address-service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  signUpForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(5)]),
    address: new FormGroup({
      id:new FormControl("2"),
      street: new FormControl("", [Validators.required, Validators.minLength(5)]),
      city: new FormControl("", [Validators.required, Validators.minLength(5)]),
      region: new FormControl("", [Validators.required])
    })
  });

  constructor(private userService: UserService){}

  onSubmit() {
    console.log(this.signUpForm.value);
    this.userService.add(this.signUpForm.value).subscribe({
      next: (data)=>{console.log(data)},
    });
  }
}

