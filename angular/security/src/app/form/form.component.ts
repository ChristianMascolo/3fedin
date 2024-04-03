import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../model/User';
import { UserDTO } from '../model/UserDTO';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  private login !: boolean;
  private register !: boolean;

  public model = {
    name: '',
    password: '',
  };
  public admin = false;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

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

  doLogin(form: any) {
    console.log(form);
    //this.userService.checkUser(user);
  }

  doRegister(form: any) {
    let user: UserDTO = {
      username: form.name,
      password: form.password,
      admin: form.admin
    };

    this.userService.add(user).subscribe();
  }
}
