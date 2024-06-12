import { Component } from '@angular/core';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  policies: any[] = [];

  constructor(private policyService: PolicyService) {
    policyService.all().subscribe({
      next: (res: any) => {
        this.policies = res;
        console.log(this.policies);
        
      },
    });
  }

  expired(type: any) {

    return type == 'Valida' ? true : false;
  }
}
