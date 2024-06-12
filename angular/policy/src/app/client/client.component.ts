import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
  client = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
  });

  constructor(private clientService: ClientService,private route: ActivatedRoute) {}

  submit() {
    this.clientService.add(this.client.value,this.route.snapshot.paramMap.get('id')).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
