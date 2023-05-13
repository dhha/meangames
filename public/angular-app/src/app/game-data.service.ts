import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './game';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  private _baseUrl: string = "http://localhost:3000/api/";

  constructor(private _http: HttpClient) { }

  public getAll(offset: Number, limit: Number): Observable<Game[]> {

    return this._http.get<Game[]>(this._baseUrl + 'games?offset=' + offset + '&count=' + limit);
  }

  public search(name: string): Observable<Game[]> {
    return this._http.get<Game[]>(this._baseUrl + "games?search=" + name);
  }

  public getOne(id: string): Observable<Game> {
    return this._http.get<Game>(this._baseUrl + 'games/' + id);
  }

  public deleteOne(id: string): Observable<Game> {
    return this._http.delete<Game>(this._baseUrl + "games/" + id);
  }
}
