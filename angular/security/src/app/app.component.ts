import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'security';

  public model = {
    customName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    language: '',
  };

  public langs = [1, 2, 3];

  public onSubmit(form: any) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
