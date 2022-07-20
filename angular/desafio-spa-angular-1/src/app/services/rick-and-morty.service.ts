import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private URL_BASE = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getPersonages(): Observable<Retorno> {
    
    return this.http.get<Retorno>(`${this.URL_BASE}/character`);
  }

}

export interface Retorno{
  info: {
    count: number,
    pages: number,
    next: string
  },
  results: Personage[]
}

export interface Personage{
  id: number,
  name: string,
  status: string,
  species:	string,
  type: string,
  gender: string,
  origin: {},
  location: {},
  image: string,
  episode: [],
  url: string,
  created: Date
}