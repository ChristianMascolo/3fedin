import { Component, Renderer2 } from '@angular/core';
import { CardService } from '../services/card.service';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger("cardFlip", [
      state(
        "default",
        style({
          transform: "none"
        })
      ),
      state(
        "flipped",
        style({
          transform: "rotateY(180deg)"
        })
      ),
      state(
        "matched",
        style({
          visibility: "false",
          transform: "scale(0.05)",
          opacity: 0
        })
      ),
      transition("default => flipped", [animate("400ms")]),
      transition("flipped => default", [animate("400ms")]),
      transition("* => matched", [animate("400ms")])
    ])
  ]
})
export class HomeComponent {
  cards: any[] = [];
  memory: any[] = [];
  couple: any[] = [];
  finished: boolean = false;

  constructor(private cs: CardService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.startGame();
  }

  cardClicked(card: any) {
    if (card.state === "default") {
      card.state = "flipped";
      setTimeout(() => {
        this.setCouple(card);
      }, 800);
    } else {
      card.state = "default";
    }
  }

  startGame() {
    this.finished = false;
    this.cs.all().subscribe({
      next: (res: any[]) => {
        res.forEach((c) => {
          this.memory.push({ card: this.getImg(c.card), id: c.id, state: 'default', picked: false });
          this.memory.push({ card: this.getImg(c.card), id: c.id, state: 'default', picked: false });
        })

        this.memory.sort(() => Math.random() - 0.5);
      }
    })
  }

  setCouple(card: any) {
    if (this.couple.length <= 1) {
      this.couple.push(card);
    }
    if (this.couple.length == 2) {
      this.checkWin();
    }
  }

  checkWin() {
    if (this.couple[0].id == this.couple[1].id) {

      setTimeout(() => {
        this.memory = this.memory.filter((x) => x.id != this.couple[0].id);
        this.couple = [];

        if (this.memory.length == 0) {
          this.finished = true
        }
      }, 350)

    } else if (this.couple[0].id !== this.couple[1].id) {
      this.couple[0].state = "default";
      this.couple[1].state = "default";
      this.couple = [];
    }
  }

  getImg(path: any) {
    let base64String = "data:image/*;base64, " + " " + path;
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64String);
  }

}