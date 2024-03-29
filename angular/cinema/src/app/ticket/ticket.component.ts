import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../services/ticket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {
  signUpForm = new FormGroup({
    date : new FormControl("", [Validators.required]),
    time: new FormControl("", [Validators.required]),
    price: new FormControl("",[Validators.required])
  });

  constructor(private ticketService: TicketService,private route: ActivatedRoute){}

  onSubmit() {
    let idF = this.route.snapshot.paramMap.get('idF');
    let idU = this.route.snapshot.paramMap.get('idU');
    this.ticketService.add(this.signUpForm.value,idF,idU).subscribe();
  }
}
