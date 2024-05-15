import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  constructor(private us: UserService,private snackBar: MatSnackBar,private route: Router) { }

  submit() {
    this.us.findByUsername(this.login.value.username as string).subscribe({
      next: (res) => {
        if (res != null) {
          sessionStorage.setItem("user", JSON.stringify(res));
          this.route.navigate(['']);
        } else {
          this.openSnackBar("Utente non trovato");
        }
      }
    })
  }

  openSnackBar(message: string) {
    this.snackBar.open(message);
  }
}
