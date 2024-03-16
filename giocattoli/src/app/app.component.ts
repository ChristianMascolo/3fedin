import { Component } from '@angular/core';
import { Giocattolo } from './model/Giocattolo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'giocattoli';
  valore: number = 0;
  giocattoli: Giocattolo[] = [
    {
      nome: "Gormiti",
      prezzo: 2,
      descrizione: "I Gormiti furono distribuiti nei negozi in Italia da Linea GIG dal 2005 e per l'edicola dalla Grani & Partners, società del Gruppo Preziosi,A partire dalla Seconda Serie, la direzione artistica passò in mano a Gianfranco Enrietto, dove rimase fino alla serie Nature Unleashed. A partire dalla Serie 2018 invece, tale ruolo venne ricoperto da Giorgio Palombi e Gianluca Savalli.",
      image: "https://i.redd.it/chips-mini-gormiti-v0-wa3hvpfrn16b1.png?width=1080&format=png&auto=webp&s=623269e1a0e209bf0cba7008edbc57026f545f3a",
    },
    {
      nome: "Orsacchiotto",
      prezzo: 100,
      descrizione: "Il nome Teddy Bear deriva da un episodio accaduto al Presidente degli Stati Uniti Theodore Roosevelt, soprannominato Teddy, che come passatempo andava a caccia grossa. Nel 1902, invitato dal governatore del Mississippi Andrew H. Longino per una battuta di caccia all'orso lungo il fiume Mississippi, Roosevelt si rifiutò di sparare a un esemplare cucciolo di orso bruno della Louisiana. L'orso era stato braccato dai cani, ferito e legato a un albero dagli assistenti del presidente, pronto per essere ucciso. Roosevelt si indignò, dicendo che sparare a un orso in quelle condizioni non sarebbe stato sportivo ma ordinò che l'animale fosse ucciso per non farlo ulteriormente soffrire. La scelta di Roosevelt fu particolarmente apprezzata perché in quella battuta di caccia (come pare accadesse spesso al presidente) lui non riuscì poi ad abbattere nessun orso, tornandosene a casa senza alcun trofeo.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYbOFf3PKOoHaJ3HpY9xhWhdcgpxstUCv0w&usqp=CAU",
    },
  ];

  formatLabel(value: number): string {
    this.valore = value;
    console.log(this.valore);
    return `${value}`;
  }

  nextIndex(){
    if(this.valore == this.giocattoli.length){
      console.log("valore massimo");
      this.valore -= this.giocattoli.length;
      console.log(this.valore);
    }

    this.valore += 1;
  }

  prevIndex(){
    if(this.valore == 0){
      this.valore = 0;
    }

    this.valore -= 1;
  }

}
