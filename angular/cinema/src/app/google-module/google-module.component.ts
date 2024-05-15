import { Component } from '@angular/core';
import { GoogleFormService } from '../services/google-form.service';

@Component({
  selector: 'app-google-module',
  templateUrl: './google-module.component.html',
  styleUrls: ['./google-module.component.scss']
})
export class GoogleModuleComponent {
  users !: any[];

  constructor(private gfService: GoogleFormService) { }

  ngOnInit() {
    this.gfService.getAll().subscribe({
      next: (res : any) => {
        this.users = res;
      }
    });
  }

}
