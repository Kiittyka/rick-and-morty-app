import { Component, OnInit } from '@angular/core';
import { characters } from '../classes/characters';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  charactersInfo: Array<characters>;

  constructor(private service: RestService) {}

  ngOnInit() {
    this.service.getCharacters()
    .subscribe(
      data => 
      {
          this.charactersInfo = data.results;
          console.log(data)
      }
    );
  }
}
