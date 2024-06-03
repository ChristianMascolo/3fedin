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
  ticketForm = new FormGroup({
    date: new FormControl("", [Validators.required]),
    time: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    qty: new FormControl(""),
  });

  constructor(private ticketService: TicketService, private route: ActivatedRoute) { }

  onSubmit() {
    let idF = this.route.snapshot.paramMap.get('idF');
    let user: any = localStorage.getItem("userSession");
    let json = JSON.parse(user);
    this.ticketService.add(this.ticketForm.value, idF, json["id"]).subscribe({
      next: () => {
        alert("Ticket acquistato,buona visione!");
      }
    });
  }
}
