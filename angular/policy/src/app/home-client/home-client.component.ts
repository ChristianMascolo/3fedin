import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.scss'],
})
export class HomeClientComponent {
  client: any;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {
    clientService.byId(route.snapshot.paramMap.get('id')).subscribe({
      next: (data: any) => {
        this.client = data;
      },
    });
  }
}
