import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { characters } from '../classes/characters';

@Injectable({
  providedIn: 'root'
})

export class RestService {
 
  constructor(private http: HttpClient) { }

   getCharacters(): Observable<any> {
     return this.http.get('https://rickandmortyapi.com/api/character/')
  }
}
