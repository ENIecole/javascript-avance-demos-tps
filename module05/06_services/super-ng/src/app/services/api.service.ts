import {Injectable} from '@angular/core';
import {Super} from "../modeles/Super";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public supers: Array<Super>;

  constructor() {
    this.supers = [];
    this.supers.push(new Super(1, 'Wonder Woman', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/720-wonder-woman.jpg'));
    this.supers.push(new Super(2, 'Hulk', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/332-hulk.jpg'));
    this.supers.push(new Super(3, 'Harley Quinn', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/309-harley-quinn.jpg'));
  }

  public recupererLesSuperHeros(): Array<Super> {
    return this.supers;
  }

  public recupereUnSeulSuperHero(id: number): Super | undefined {
    return this.supers.find(s => s.id == id);
  }
}
