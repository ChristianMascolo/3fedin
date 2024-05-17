import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private us: UserService,private dialogRef: MatDialogRef<LoginComponent>) { }

  login() {
    this.us.add(this.user.value).subscribe({
      next: (res: any)=>{
        localStorage.setItem('user',JSON.stringify(res));
        this.dialogRef.close(res);
      }
    })
  }

}
