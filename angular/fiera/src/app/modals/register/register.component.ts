import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private us: UserService, private dialogRef: MatDialogRef<RegisterComponent>) { }

  register() {
    this.us.findByEmail(this.user.value.email as string).subscribe({
      next: (res: any) => {
        if (res) {
          alert!("Utente già esistente");
        } else {
          this.us.add(this.user.value).subscribe({
            next: (res: any) => {
              localStorage.setItem('user', JSON.stringify(res));
              this.dialogRef.close(res);
            }
          })
        }
      }
    })
  }

}
