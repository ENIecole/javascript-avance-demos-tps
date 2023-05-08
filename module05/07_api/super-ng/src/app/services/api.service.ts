import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Super} from "../modeles/Super";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _base_url: string = 'https://akabab.github.io/superhero-api/api';

  constructor(
    @Inject(HttpClient) private _http: HttpClient
  ) {
  }

  public recupererLesSuperHeros(): Observable<Super[]> {
    return this._http.get<Super[]>(this._base_url + '/all.json');
  }

  public recupereUnSeulSuperHero(id: number): Observable<Super> {
    return this._http.get<Super>(this._base_url + '/id/' + id + '.json');
  }
}
