import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  })

  comapnyForm = new FormGroup({
    name: new FormControl("", Validators.required),
    area: new FormControl("", Validators.required)
  })

  type: string;

  constructor(private us: UserService,private cs: CompanyService, private route: ActivatedRoute) {
    this.type = route.snapshot.paramMap.get("type") as string;
  }

  submit() {
    if (this.type === "u") {
      this.registerUser();
    } else if (this.type === "c") {
      this.registerCompany();
    }
  }

  registerUser() {
    let email = this.userForm.value.email as string;

    this.us.findByEmail(email).subscribe({
      next: (res: any) => {
        if (res) {
          alert!("email già in uso");
        } else {
          this.us.add(this.userForm.value).subscribe({
            next: (res) => {
              sessionStorage.setItem('user', JSON.stringify(res));
            }
          })
        }
      }
    })
  }

  registerCompany() {
    let name= this.comapnyForm.value.name as string;

    this.cs.findByName(name).subscribe({
      next: (res) => {
        if (res) {
          alert!("nome già in uso");
        } else {
          this.cs.add(this.comapnyForm.value).subscribe({
            next: (res) => {
              sessionStorage.setItem('company', JSON.stringify(res));
            }
          })
        }
      }
    })
  }

}
