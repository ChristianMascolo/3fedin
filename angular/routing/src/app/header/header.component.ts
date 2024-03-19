import { Component } from '@angular/core';
import { Header } from '../model/Header';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header: Header = {
    title: "3fEdin",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VCS0ciVY3oCkQSQemZ0kqzQ9TBNppTLOVWm7qcX24w&s",
  }

}
