import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { read } from '@popperjs/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  blob !: string;

  constructor(private userService: UserService) { }

  public user = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    surname: new FormControl("", [Validators.required, Validators.minLength(5)]),
    street: new FormControl("", [Validators.required, Validators.minLength(5)]),
    city: new FormControl("", [Validators.required, Validators.minLength(5)]),
    cap: new FormControl("", [Validators.required, Validators.minLength(5)]),
    civico: new FormControl("", [Validators.required]),
    profilePic: new FormControl("", Validators.required),
    qr: new FormControl(" ")
  });

  add() {
    this.user.value.profilePic = this.blob;
    console.log(this.user.value);
    this.userService.add(this.user.value).subscribe({
      next: (res) => { console.log(res) }
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
