import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  register = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  constructor(private us: UserService,private _snackBar: MatSnackBar,private route: Router) { }

  submit() {
    this.us.findByUsername(this.register.value.username as string).subscribe({
      next: (res) => {
        if (res != null){
          this.openSnackBar("Username già in uso");
        }else {
          this.us.add(this.register.value).subscribe({
            next: (res) => {
              sessionStorage.setItem('user',JSON.stringify(res));
              this.route.navigate(['']);
            }
          })
        }
      }
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }
}
