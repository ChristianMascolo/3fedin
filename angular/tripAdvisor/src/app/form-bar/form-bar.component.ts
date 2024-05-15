import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BarService } from '../services/bar.service';

@Component({
  selector: 'app-form-bar',
  templateUrl: './form-bar.component.html',
  styleUrls: ['./form-bar.component.scss']
})
export class FormBarComponent {
  bar = new FormGroup({
    name: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
  })

  constructor(private barService: BarService) { }

  onSubmit() {
    this.barService.addBar(this.bar.value).subscribe({
      next: (res: any) => { console.log(res) }
    });
  }
}
