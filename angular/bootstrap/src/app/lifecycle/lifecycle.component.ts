import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent {

  @Input() testo !: string;
  intervallo: any;

  constructor() {
    console.log("sono il costruttore", this.testo);
    this.intervallo = setInterval(() => {
      console.log("messaggio intervallo");
    }, 2000);
  }

  ngOnInit() {
    console.log("on init", this.testo);
  }

  ngOnDestroy() {
    console.log("see you soon, cowboy");
    clearInterval(this.intervallo);
  }
}