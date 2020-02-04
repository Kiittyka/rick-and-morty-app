import { Component } from '@angular/core';
import { RestService } from './services/rest.service';
import { characters } from './classes/characters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rick-and-morty-app';

  constructor() { }

  ngOnInit() {
  }
}
